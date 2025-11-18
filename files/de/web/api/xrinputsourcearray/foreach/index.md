---
title: "XRInputSourceArray: forEach() Methode"
short-title: forEach()
slug: Web/API/XRInputSourceArray/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die Methode **`forEach()`** von [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray) führt den angegebenen Callback einmal für jede Eingabequelle im Array aus, beginnend bei Index 0 und fortschreitend bis zum Ende der Liste.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`
  - : Eine Funktion, die einmal für jeden Eintrag im Array `xrInputSourceArray` ausgeführt wird. Der Callback akzeptiert bis zu drei Parameter:
    - `currentValue`
      - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource) Objekt, das den Wert des aktuell im `xrInputSourceArray` verarbeiteten Elements darstellt.
    - `currentIndex` {{Optional_Inline}}
      - : Ein Ganzzahlwert, der den Index im Array angibt, an dem sich das durch `currentValue` gegebene Element befindet. Wenn Sie die Indexnummer nicht benötigen, können Sie dies weglassen.
    - `sourceList` {{Optional_Inline}}
      - : Das [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray) Objekt, das verarbeitet wird. Wenn Sie diese Information nicht benötigen, können Sie dies weglassen.

- `thisArg` {{Optional_Inline}}
  - : Der Wert, der als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet wird, während der Callback ausgeführt wird. Beachten Sie, dass Sie `thisArg` weglassen können, wenn Sie die [Pfeilfunktions-Notation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`) verwenden, um den Callback bereitzustellen, da alle Pfeilfunktionen `this` lexikalisch binden.

### Rückgabewert

Undefined.

## Beispiele

Dieses Beispiel-Snippet ruft die Eingabeliste für eine Sitzung ab und versucht, jede unterstützte Art von Eingabegerät zu behandeln.

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

Für jede Eingabe in der Liste leitet der Callback Gamepad-Eingaben an eine `checkGamepad()` mit dem [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt der Eingabe, das von ihrer [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft genommen wird, als Eingabe weiter.

Für andere Geräte suchen wir nach `tracked-pointer` Geräten in der Haupthand des Spielers und leiten diese an eine `handleMainHandInput()` Methode weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- Die [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) Methode `forEach()`
- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
