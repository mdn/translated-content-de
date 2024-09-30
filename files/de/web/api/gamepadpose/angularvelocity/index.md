---
title: "GamepadPose: Eigenschaft angularVelocity"
short-title: angularVelocity
slug: Web/API/GamepadPose/angularVelocity
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`angularVelocity`** des [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Interfaces gibt ein Array zurück, das den Winkelgeschwindigkeitsvektor des [`Gamepad`](/de/docs/Web/API/Gamepad) darstellt, in Radiant pro Sekunde.

Mit anderen Worten, die aktuelle Geschwindigkeit, mit der sich der Sensor um die `x`-, `y`- und `z`-Achsen dreht.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn das Gamepad keine Informationen zur Winkelgeschwindigkeit liefern kann.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
