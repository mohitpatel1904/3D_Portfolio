import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2022-2026',
    title: 'GEC Bhavnagar',
    subtitle: 'Computer Engg.',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -3, -5),
    year: '2026',
    title: 'iCreate',
    subtitle: 'Web Dev Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Open to Work',
    subtitle: 'AI / ML Engineer',
    position: 'right',
  },
]