---
title: "GamepadPose: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/GamepadPose/orientation
l10n:
  sourceCommit: 94ffd165232b5205418f8aa57127ee0854421db2
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die schreibgeschützte **`orientation`**-Eigenschaft der [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Schnittstelle gibt die Orientierung des [`Gamepad`](/de/docs/Web/API/Gamepad) als Quaternion-Wert zurück.

Der Wert ist ein {{jsxref("Float32Array")}}, das aus den folgenden Werten besteht:

- pitch — Rotation um die X-Achse.
- yaw — Rotation um die Y-Achse.
- roll — Rotation um die Z-Achse.
- w — die vierte Dimension (normalerweise 1).

Die Orientierung yaw (Rotation um die y-Achse) ist relativ zur anfänglichen yaw des Sensors, als dieser erstmals ausgelesen wurde.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Orientierungsdaten bereitstellen kann.

## Beispiele

TBD

> [!NOTE]
> Eine Orientierung von `{ x: 0, y: 0, z: 0, w: 1 }` wird als "vorwärts" betrachtet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
