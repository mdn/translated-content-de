---
title: "GamepadPose: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/GamepadPose/orientation
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`orientation`** des [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Interfaces gibt die Ausrichtung des [`Gamepad`](/de/docs/Web/API/Gamepad) als Quaternion-Wert zurück.

Der Wert ist ein {{jsxref("Float32Array")}}, bestehend aus den folgenden Werten:

- pitch — Rotation um die X-Achse.
- yaw — Rotation um die Y-Achse.
- roll — Rotation um die Z-Achse.
- w — die vierte Dimension (in der Regel 1).

Die Ausrichtung yaw (Rotation um die Y-Achse) ist relativ zur anfänglichen yaw des Sensors, als es zuerst ausgelesen wurde.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn der VR-Sensor keine Ausrichtungsdaten liefern kann.

## Beispiele

TBD

> [!NOTE]
> Eine Ausrichtung von `{ x: 0, y: 0, z: 0, w: 1 }` wird als "vorwärts" betrachtet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
