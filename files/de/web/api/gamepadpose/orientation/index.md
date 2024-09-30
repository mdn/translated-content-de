---
title: "GamepadPose: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/GamepadPose/orientation
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die **`orientation`** schreibgeschützte Eigenschaft des [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Interfaces gibt die Ausrichtung des [`Gamepad`](/de/docs/Web/API/Gamepad) als Quaternion-Wert zurück.

Der Wert ist ein {{jsxref("Float32Array")}}, bestehend aus den folgenden Werten:

- pitch — Rotation um die X-Achse.
- yaw — Rotation um die Y-Achse.
- roll — Rotation um die Z-Achse.
- w — die vierte Dimension (normalerweise 1).

Das Orientierungsgier (Rotation um die y-Achse) ist relativ zur anfänglichen Gier des Sensors, als er das erste Mal gelesen wurde.

## Wert

Ein {{jsxref("Float32Array")}} oder `null`, wenn der VR-Sensor keine Orientierungsdaten bereitstellen kann.

## Beispiele

TBD

> [!NOTE]
> Eine Orientierung von `{ x: 0, y: 0, z: 0, w: 1 }` wird als "nach vorne" betrachtet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
