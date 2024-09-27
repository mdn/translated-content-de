---
title: "GamepadPose: linearVelocity-Eigenschaft"
short-title: linearVelocity
slug: Web/API/GamepadPose/linearVelocity
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`linearVelocity`** der [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Schnittstelle gibt ein Array zurück, das den linearen Geschwindigkeitsvektor des [`Gamepad`](/de/docs/Web/API/Gamepad) in Metern pro Sekunde darstellt.

Mit anderen Worten, die aktuelle Geschwindigkeit, mit der sich der Sensor entlang der `x`-, `y`- und `z`-Achsen bewegt.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn das Gamepad keine Daten zur linearen Geschwindigkeit bereitstellen kann.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
