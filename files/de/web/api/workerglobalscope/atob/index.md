---
title: "WorkerGlobalScope: atob()-Methode"
short-title: atob()
slug: Web/API/WorkerGlobalScope/atob
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`atob()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle dekodiert eine Zeichenkette von Daten, die mit der {{Glossary("Base64", "Base64")}}-Kodierung kodiert wurden. Sie können die [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)-Methode verwenden, um Daten zu kodieren und zu übertragen, die sonst Kommunikationsprobleme verursachen könnten. Anschließend können diese Daten übertragen und mit der `atob()`-Methode wieder dekodiert werden. Beispielsweise können Sie Steuerzeichen wie {{Glossary("ASCII", "ASCII")}}-Werte 0 bis 31 kodieren, übertragen und dekodieren.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Eine binäre Zeichenkette (d.h. eine Zeichenkette, in der jedes Zeichen als Byte binärer Daten behandelt wird), die base64-kodierte Daten enthält.

### Rückgabewert

Eine ASCII-Zeichenkette, die die dekodierten Daten von `encodedData` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `encodedData` keine gültige Base64-Kodierung enthält.

## Beispiele

```js
const encodedData = self.btoa("Hello, world"); // encode a string
const decodedData = self.atob(encodedData); // decode the string
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data`-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`Window.atob()`](/de/docs/Web/API/Window/atob): die gleiche Methode, jedoch im Window-Kontext.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- {{jsxref("Uint8Array.fromBase64()")}}
