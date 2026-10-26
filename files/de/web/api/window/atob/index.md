---
title: "Window: atob()-Methode"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}

Die Methode **`atob()`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) dekodiert eine Zeichenfolge, die mit {{Glossary("Base64", "Base64")}} kodiert wurde. Mit der Methode [`Window.btoa()`](/de/docs/Web/API/Window/btoa) können Sie Daten kodieren, die andernfalls bei der Übertragung Probleme verursachen könnten. Nach der Übertragung können Sie die Daten mit `atob()` wieder dekodieren. So lassen sich beispielsweise Steuerzeichen wie die {{Glossary("ASCII", "ASCII")}}-Werte 0 bis 31 kodieren, übertragen und dekodieren.

Ziehen Sie auch die Methode {{jsxref("Uint8Array.fromBase64()")}} in Betracht. Sie erstellt aus einer Base64-kodierten Zeichenfolge ein `Uint8Array`-Objekt. Das Ergebnis ist ein Byte-Array, mit dem sich leichter arbeiten lässt als mit einer Zeichenfolge, die rohe Bytes enthält.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Eine Base64-kodierte Zeichenfolge, die das von [`Window.btoa()`](/de/docs/Web/API/Window/btoa) erzeugte Alphabet verwendet.

### Rückgabewert

Eine binäre Zeichenfolge mit den aus `encodedData` dekodierten rohen Bytes. Zeichenfolgen in JavaScript sind als {{Glossary("UTF-16", "UTF-16")}} kodiert. Daher muss jedes Zeichen einen Codepunkt kleiner als 256 haben und steht für ein Datenbyte.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `encodedData` keine gültige Base64-kodierte Zeichenfolge ist.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

Weitere Beispiele finden Sie bei der Methode [`Window.btoa()`](/de/docs/Web/API/Window/btoa).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `atob`](https://core-js.io/docs/features/web-standards/atob-btoa) ist in [`core-js`](https://core-js.io/) verfügbar.
- [`data`-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob): dieselbe Methode, jedoch in Worker-Scopes.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
- {{jsxref("Uint8Array.fromBase64()")}}
