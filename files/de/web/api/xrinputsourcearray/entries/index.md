---
title: "XRInputSourceArray: entries()-Methode"
short-title: entries()
slug: Web/API/XRInputSourceArray/entries
l10n:
  sourceCommit: aa3f3f5d4d00cba08b88bddcfa94a84e2a4d976d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`entries()`**-Methode der Schnittstelle [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray) gibt einen JavaScript-[`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, mit dem sich die Schlüssel-Wert-Paare im Eingabequellen-Array durchlaufen lassen. Jeder Schlüssel ist der Index einer Eingabequelle im Array; jeder Wert ist das zugehörige [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt.

Meistens verwenden Sie diese Methode zusammen mit Anweisungen wie [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of).

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols), der für jedes im Eingabequellen-Array enthaltene `XRInputSource`-Objekt ein Paar `[index, inputSource]` liefert.

## Beispiele

Dieser Codeausschnitt ruft die Liste der Eingabequellen einer Sitzung ab und versucht, jeden unterstützten Eingabegerätetyp zu verarbeiten.

```js
let sources = xrSession.inputSources;

for (const [index, input] of sources.entries()) {
  if (input.gamepad) {
    checkGamepad(input.gamepad);
  } else if (
    input.targetRayMode === "tracked-pointer" &&
    input.handedness === player.handedness
  ) {
    /* Handle main hand controller */
    handleMainHandInput(input);
  } else {
    /* Handle other inputs */
  }
}
```

Für jede Eingabe in der Liste werden Gamepad-Eingaben an `checkGamepad()` weitergegeben. Dabei wird das [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt der Eingabe, das aus ihrer Eigenschaft [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad) stammt, als Argument übergeben.

Bei anderen Geräten suchen wir nach `tracked-pointer`-Geräten in der Haupthand der spielenden Person und übergeben diese an die Methode `handleMainHandInput()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
