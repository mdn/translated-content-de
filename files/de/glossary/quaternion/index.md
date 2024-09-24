---
title: Quaternion
slug: Glossary/Quaternion
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Quaternion** ist der Quotient von zwei 3D-Vektoren und wird in der 3D-Grafik sowie in sensorenbasierten Beschleunigungsmessern verwendet, um Orientierung oder Rotationsdaten darzustellen.

Obwohl mathematische Quaternionen komplexer sind, werden die **Einheitsquaternionen** (oder **Rotationsquaternionen**), die zur Darstellung von Rotationen beim Einsatz von {{Glossary("WebGL")}} oder [WebXR](/de/docs/Web/API/WebXR_Device_API) verwendet werden, zum Beispiel mithilfe der gleichen Syntax wie ein 3D-Punkt dargestellt. Daher wird der Typ {{domxref("DOMPoint")}} (oder {{domxref("DOMPointReadOnly")}}) zur Speicherung von Quaternionen verwendet.

## Siehe auch

- [Quaternionen und räumliche Rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation) auf Wikipedia
- [Quaternion](https://en.wikipedia.org/wiki/Quaternion) auf Wikipedia
- {{domxref("XRRigidTransform.orientation")}} in der WebXR-Geräte-API-Referenz
