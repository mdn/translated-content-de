---
title: "XRInputSourceArray: entries()-Methode"
short-title: entries()
slug: Web/API/XRInputSourceArray/entries
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`entries()`**-Methode des [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Interfaces gibt einen JavaScript-[`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der verwendet werden kann, um über die Schlüssel/Wert-Paare im Eingabequellen-Array zu iterieren. Jeder Eintrag im Array ist ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt.

Am häufigsten wird diese Methode zusammen mit Anweisungen wie [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols), der verwendet werden kann, um durch die Liste der `XRInputSource`-Objekte zu gehen, die im Eingabequellen-Array enthalten sind.

## Beispiele

Dieses Beispielelement erhält die Liste der Eingaben für eine Sitzung und versucht, jeden unterstützten Eingabetyp zu verarbeiten.

```js
let sources = xrSession.inputSources;

for (const input of sources.entries()) {
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

Für jede Eingabe in der Liste werden Gamepad-Eingaben an eine `checkGamepad()`-Funktion übergeben, wobei das [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt der Eingabe, das aus der [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft stammt, als Eingabeparameter dient.

Für andere Geräte suchen wir nach `tracked-pointer`-Geräten in der Haupthand des Spielers und leiten diese an eine `handleMainHandInput()`-Methode weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
