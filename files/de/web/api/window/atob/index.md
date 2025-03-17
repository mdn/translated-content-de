---
title: "Window: atob() Methode"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 174d3951c46e3b464cc1c53110a46428af9358d5
---

{{APIRef("HTML DOM")}}

Die **`atob()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle decodiert einen Datenstring, der mit {{Glossary("Base64", "Base64")}} kodiert wurde. Sie können die [`Window.btoa()`](/de/docs/Web/API/Window/btoa) Methode verwenden, um Daten zu kodieren und zu übertragen, die sonst Kommunikationsprobleme verursachen könnten, dann diese übertragen und die `atob()` Methode verwenden, um die Daten wieder zu decodieren. Zum Beispiel können Sie Steuerzeichen wie {{Glossary("ASCII", "ASCII")}} Werte 0 bis 31 kodieren, übertragen und decodieren.

Ziehen Sie auch die Verwendung der {{jsxref("Uint8Array.fromBase64()")}} Methode in Betracht, die ein `Uint8Array` Objekt aus einem base64-kodierten String erstellt. Das Ergebnis ist ein Byte-Array, mit dem einfacher zu arbeiten ist als mit einem String, der rohe Bytes enthält.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Ein base64-kodierter String, erzeugt durch das Alphabet der [`Window.btoa()`](/de/docs/Web/API/Window/btoa).

### Rückgabewert

Ein binärer String, der rohe Bytes enthält, die aus `encodedData` decodiert wurden. Strings in JavaScript sind als UTF-16 kodiert, was bedeutet, dass jeder Charakter einen Codepunkt kleiner als 256 haben muss, der ein Byte Daten darstellt.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `encodedData` keine gültige Base64-Codierung ist.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

Für weitere Beispiele siehe die [`Window.btoa()`](/de/docs/Web/API/Window/btoa) Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist verfügbar in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob): die gleiche Methode, aber im Worker-Bereich.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
- {{jsxref("Uint8Array.fromBase64()")}}
