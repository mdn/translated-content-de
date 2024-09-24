---
title: "GamepadPose: orientierung-Eigenschaft"
short-title: orientierung
slug: Web/API/GamepadPose/orientation
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die **`orientation`**-Schreibgeschützte Eigenschaft der {{domxref("GamepadPose")}}-Schnittstelle gibt die Orientierung des {{domxref("Gamepad")}} als Quaternion-Wert zurück.

Der Wert ist ein {{jsxref("Float32Array")}}, der aus den folgenden Werten besteht:

- pitch — Rotation um die X-Achse.
- yaw — Rotation um die Y-Achse.
- roll — Rotation um die Z-Achse.
- w — die vierte Dimension (in der Regel 1).

Das orientation yaw (Rotation um die Y-Achse) ist relativ zur anfänglichen Yaw des Sensors, als dieser erstmals gelesen wurde.

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
