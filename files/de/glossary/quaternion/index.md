---
title: Quaternion
slug: Glossary/Quaternion
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Quaternion** ist der Quotient aus zwei 3D-Vektoren und wird in 3D-Grafiken und in beschleunigungsmesserbasierten Sensoren verwendet, um Orientierung oder Rotationsdaten darzustellen.

Während mathematische Quaternionen komplexer sind, werden die **Einheitsquaternionen** (oder **Rotationsquaternionen**), die zur Darstellung von Rotationen bei der Verwendung von [WebGL](/de/docs/Glossary/WebGL) oder [WebXR](/de/docs/Web/API/WebXR_Device_API) verwendet werden, beispielsweise mit derselben Syntax wie ein 3D-Punkt dargestellt. Daher wird der Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint) (oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)) zur Speicherung von Quaternionen verwendet.

## Siehe auch

- [Quaternions and spatial rotation](https://de.wikipedia.org/wiki/Quaternionen_und_r%C3%A4umliche_Rotation) auf Wikipedia
- [Quaternion](https://de.wikipedia.org/wiki/Quaternion) auf Wikipedia
- [`XRRigidTransform.orientation`](/de/docs/Web/API/XRRigidTransform/orientation) in der WebXR Device API-Referenz
