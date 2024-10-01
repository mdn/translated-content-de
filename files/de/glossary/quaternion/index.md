---
title: Quaternion
slug: Glossary/Quaternion
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Quaternion** ist der Quotient von zwei 3D-Vektoren und wird in 3D-Grafiken und in sensorbasierten Beschleunigungsmessern verwendet, um Orientierung oder Rotationsdaten darzustellen.

Obwohl mathematische Quaternionen komplexer sind als dies, werden die **Einheitsquaternionen** (oder **Rotationsquaternionen**), die zur Darstellung von Rotation in {{Glossary("WebGL", "WebGL")}} oder [WebXR](/de/docs/Web/API/WebXR_Device_API) beispielsweise verwendet werden, mit der gleichen Syntax wie ein 3D-Punkt dargestellt. Daher wird der Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint) (oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)) verwendet, um Quaternionen zu speichern.

## Siehe auch

- [Quaternions and spatial rotation](https://de.wikipedia.org/wiki/Quaternions_and_spatial_rotation) auf Wikipedia
- [Quaternion](https://de.wikipedia.org/wiki/Quaternion) auf Wikipedia
- [`XRRigidTransform.orientation`](/de/docs/Web/API/XRRigidTransform/orientation) in der WebXR Device API-Referenz
