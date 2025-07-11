---
title: Quaternion
slug: Glossary/Quaternion
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Quaternion** ist der Quotient von zwei 3D-Vektoren und wird in 3D-Grafiken und in sensorbasierten Beschleunigungsmessern verwendet, um Orientierungs- oder Rotationsdaten darzustellen.

Während mathematische Quaternionen komplexer sind, werden die **Einheitsquaternionen** (oder **Rotationsquaternionen**), die zur Darstellung der Rotation in {{Glossary("WebGL", "WebGL")}} oder [WebXR](/de/docs/Web/API/WebXR_Device_API) verwendet werden, zum Beispiel mit der gleichen Syntax wie ein 3D-Punkt dargestellt. Daher wird der Typ [`DOMPoint`](/de/docs/Web/API/DOMPoint) (oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)) verwendet, um Quaternionen zu speichern.

## Siehe auch

- [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation) auf Wikipedia
- [Quaternion](https://en.wikipedia.org/wiki/Quaternion) auf Wikipedia
- [`XRRigidTransform.orientation`](/de/docs/Web/API/XRRigidTransform/orientation) in der WebXR Device API-Referenz
