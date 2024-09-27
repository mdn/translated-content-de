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
      - : Ein [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt, welches den Wert des aktuell verarbeiteten Elements aus dem `xrInputSourceArray` darstellt.
    - `currentIndex` {{Optional_Inline}}
      - : Ein ganzzahliger Wert, der den Index im Array angibt, an dem sich das durch `currentValue` gegebene Element befindet. Wenn der Index nicht benötigt wird, kann dies ausgelassen werden.
    - `sourceList` {{Optional_Inline}}
      - : Das [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Objekt, das verarbeitet wird. Diese Information kann weggelassen werden, wenn sie nicht benötigt wird.

- `thisArg` {{Optional_Inline}}
  - : Der Wert, der verwendet wird für [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), während der Ausführung des Callbacks. Beachten Sie, dass `thisArg` ausgelassen werden kann, wenn die [Pfeilfunktion-Notation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`) zur Bereitstellung des Callbacks verwendet wird, da alle Pfeilfunktionen `this` lexikalisch binden.

### Rückgabewert

Undefiniert.

## Beispiele

Dieses Beispiel-Snippet holt die Liste der Eingaben für eine Sitzung und versucht, jede unterstützte Art von Eingabegerät zu handhaben.

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

Für jede Eingabe in der Liste übergibt der Callback die Gamepad-Eingaben an eine `checkGamepad()`-Funktion, mit dem `Gamepad`-Objekt des Eingangs, das aus der [`gamepad`](/de/docs/Web/API/XRInputSource/gamepad)-Eigenschaft entnommen wird, als Eingabewert.

Bei anderen Geräten suchen wir nach `tracked-pointer`-Geräten in der Haupthand des Spielers und übergeben diese an eine `handleMainHandInput()`-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- Die [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Methode `forEach()`
- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
