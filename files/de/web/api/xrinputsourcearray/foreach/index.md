---
title: "XRInputSourceArray: forEach()-Methode"
short-title: forEach()
slug: Web/API/XRInputSourceArray/forEach
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die Methode **`forEach()`** von [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray) führt den angegebenen Callback einmal für jede Eingabequelle im Array aus, beginnend bei Index 0 und fortlaufend bis zum Ende der Liste.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Eine Funktion, die einmal für jeden Eintrag im Array `xrInputSourceArray` ausgeführt wird. Der Callback akzeptiert bis zu drei Parameter:

    - `currentValue`
      - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, das den Wert des aktuell im `xrInputSourceArray` verarbeiteten Elements darstellt.
    - `currentIndex` {{Optional_Inline}}
      - : Ein ganzzahliger Wert, der den Index im Array angibt, an dem sich das durch `currentValue` angegebene Element befindet. Wenn Sie die Indexnummer nicht benötigen, können Sie dies weglassen.
    - `sourceList` {{Optional_Inline}}
      - : Das [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Objekt, das verarbeitet wird. Diese Information können Sie weglassen, wenn Sie sie nicht benötigen.

- `thisArg` {{Optional_Inline}}
  - : Der Wert, der als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) beim Ausführen des Callbacks verwendet wird. Beachten Sie, dass Sie, wenn Sie die [Pfeilfunktionen-Notation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`) verwenden, um den Callback bereitzustellen, `thisArg` weglassen können, da alle Pfeilfunktionen `this` lexikalisch binden.

### Rückgabewert

Undefiniert.

## Beispiele

Dieses Beispiel erhält die Liste der Eingaben für eine Sitzung und versucht, jeden unterstützten Eingabegerätetyp zu handhaben.

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

Für jede Eingabe in der Liste leitet der Callback die Gamepad-Eingaben mittels des [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekts der Eingabe, das aus ihrer [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft entnommen wurde, an eine `checkGamepad()`-Funktion weiter.

Für andere Geräte suchen wir nach `tracked-pointer`-Geräten in der Haupt-Hand des Spielers und leiten diese an eine `handleMainHandInput()`-Methode weiter.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- Die [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methode `forEach()`
- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
