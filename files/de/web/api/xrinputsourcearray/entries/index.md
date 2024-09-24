---
title: "XRInputSourceArray: entries()-Methode"
short-title: entries()
slug: Web/API/XRInputSourceArray/entries
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`entries()`**-Methode des {{domxref("XRInputSourceArray")}}-Interfaces gibt einen JavaScript-[`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der dann verwendet werden kann, um über die Schlüssel/Wert-Paare im Eingabequellen-Array zu iterieren. Jedes Element im Array ist ein {{domxref("XRInputSource")}}-Objekt.

Am häufigsten wird dies in Verbindung mit Anweisungen wie [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols), der verwendet werden kann, um die Liste der `XRInputSource`-Objekte, die im Eingabequellen-Array enthalten sind, zu durchlaufen.

## Beispiele

Dieses Beispiel-Snippet erhält die Liste der Eingaben für eine Sitzung und versucht, jeden unterstützten Eingabegerätetyp zu behandeln.

```js
let sources = xrSession.inputSources;

for (const input of sources.entries()) {
  if (input.gamepad) {
    checkGamepad(input.gamepad);
  } else if (
    input.targetRayMode === "tracked-pointer" &&
    input.handedness === player.handedness
  ) {
    /* Behandeln Sie den Haupt-Hand-Controller */
    handleMainHandInput(input);
  } else {
    /* Behandeln Sie andere Eingaben */
  }
}
```

Für jede Eingabe in der Liste werden Gamepad-Eingaben an eine `checkGamepad()`-Methode mit dem {{domxref("Gamepad")}}-Objekt der Eingabe, das von seiner {{domxref("XRInputSource.gamepad", "gamepad")}}-Eigenschaft abgerufen wird, weitergeleitet.

Für andere Geräte suchen wir nach `tracked-pointer`-Geräten in der Haupt-Hand des Spielers und leiten diese an eine `handleMainHandInput()`-Methode weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
