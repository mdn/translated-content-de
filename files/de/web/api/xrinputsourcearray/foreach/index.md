---
title: "XRInputSourceArray: forEach()-Methode"
short-title: forEach()
slug: Web/API/XRInputSourceArray/forEach
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die Methode **`forEach()`** des {{domxref("XRInputSourceArray")}} führt den angegebenen Rückruf einmal für jede Eingabequelle im Array aus, beginnend bei Index 0 und fortschreitend bis zum Ende der Liste.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Eine Funktion, die einmal für jeden Eintrag im Array `xrInputSourceArray` ausgeführt wird. Der Rückruf akzeptiert bis zu drei Parameter:

    - `currentValue`
      - : Ein {{domxref("XRInputSource")}}-Objekt, das den Wert des aktuell im `xrInputSourceArray` verarbeiteten Elements darstellt.
    - `currentIndex` {{Optional_Inline}}
      - : Ein ganzzahliger Wert, der den Index im Array angibt, an dem sich das durch `currentValue` gegebene Element befindet. Wenn Sie die Indexnummer nicht benötigen, können Sie diese weglassen.
    - `sourceList` {{Optional_Inline}}
      - : Das bearbeitete {{domxref("XRInputSourceArray")}}-Objekt. Wenn Sie diese Information nicht benötigen, können Sie darauf verzichten.

- `thisArg` {{Optional_Inline}}
  - : Der Wert, der für [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) beim Ausführen des Rückrufs verwendet wird. Beachten Sie, dass Sie, wenn Sie [Pfeilfunktionsnotation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`) verwenden, um den Rückruf bereitzustellen, `thisArg` weglassen können, da alle Pfeilfunktionen `this` lexikalisch binden.

### Rückgabewert

Undefiniert.

## Beispiele

Dieses Beispiel ruft die Liste der Eingaben für eine Sitzung ab und versucht, jeden unterstützten Eingabegerätetyp zu verarbeiten.

```js
let inputSources = xrSession.inputSources;

inputSources.forEach((input) => {
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
});
```

Für jede Eingabe in der Liste leitet der Rückruf Gamepad-Eingaben an `checkGamepad()` weiter, unter Verwendung des {{domxref("Gamepad")}}-Objekts der Eingabe, das aus der {{domxref("XRInputSource.gamepad", "gamepad")}}-Eigenschaft übernommen wird.

Bei anderen Geräten suchen wir nach `tracked-pointer`-Geräten in der Haupthand des Spielers und leiten diese an eine `handleMainHandInput()`-Methode weiter.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- Die
  [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methode `forEach()`
- {{domxref("XRInputSource")}}
