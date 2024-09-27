---
title: "GamepadPose: angularAcceleration-Eigenschaft"
short-title: angularAcceleration
slug: Web/API/GamepadPose/angularAcceleration
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die **`angularAcceleration`** schreibgeschützte Eigenschaft des [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Interfaces gibt ein Array zurück, das den Winkelbeschleunigungsvektor des [`Gamepad`](/de/docs/Web/API/Gamepad) in Metern pro Sekunde² darstellt.

Mit anderen Worten, die aktuelle Beschleunigung der Drehung des Sensors um die `x`-, `y`- und `z`-Achsen.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn das Gamepad keine Informationen zur Winkelbeschleunigung bereitstellen kann.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
