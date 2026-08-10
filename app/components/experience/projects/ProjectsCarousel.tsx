import { useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import ProjectTile from "./ProjectTile";

import { PROJECTS } from "@constants";
import { usePortalStore } from "@stores";

const ProjectsCarousel = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isActive = usePortalStore((state) => state.activePortalId === "projects");
  const activeId = isActive ? selectedId : null;

  const onClick = (id: number) => {
    if (!isMobile) return;
    setSelectedId(id === selectedId ? null : id);
  };
  const tiles = useMemo(() => {
    // Tuned for 10 projects (5 columns of 2)
    const fov = Math.PI * 0.7;  // 126° arc for 5 columns
    const distance = 9;

    const columns = Math.ceil(PROJECTS.length / 2);

    return PROJECTS.map((project, i) => {
      const row = i % 2; // 0 or 1
      const column = Math.floor(i / 2);

      // Center the arc perfectly in front of the camera (around PI/2)
      const startAngle = Math.PI / 2 - (fov / 2);
      const angle = startAngle + (fov / Math.max(columns - 1, 1)) * column;

      const z = -distance * Math.sin(angle);
      const x = -distance * Math.cos(angle);

      const rotY = Math.PI / 2 - angle;

      // vertical stacking
      const y = row === 0 ? 3.5 : 1;
      const datePosition = row === 0 ? 'top' : 'bottom';
      return (
        <ProjectTile
          key={i}
          datePosition={datePosition}
          project={project}
          index={i}
          position={[x, y, z]}
          rotation={[0, rotY, 0]}
          activeId={activeId}
          onClick={() => onClick(i)}
        />
      );
    });
  }, [activeId, isActive]);

  return (
    <group rotation={[0, 0, 0]}>
      {tiles}
    </group>
  );
};

export default ProjectsCarousel;