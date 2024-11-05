---
title: "Window: atob()-Methode"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 087a73e18e2818c1cc6b9955218c614c44e612a0
---

{{APIRef("HTML DOM")}}

Die **`atob()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces dekodiert einen Datenstring, der mit {{Glossary("Base64", "Base64")}}-Kodierung kodiert wurde. Sie können die [`Window.btoa()`](/de/docs/Web/API/Window/btoa)-Methode verwenden, um Daten zu kodieren und zu übertragen, die ansonsten Kommunikationsprobleme verursachen könnten, und anschließend die `atob()`-Methode verwenden, um die Daten wieder zu dekodieren. Zum Beispiel können Sie Steuerzeichen wie {{Glossary("ASCII", "ASCII")}}-Werte von 0 bis 31 kodieren, übertragen und dekodieren.

Erwägen Sie auch die Verwendung der {{jsxref("Uint8Array.fromBase64()")}}-Methode, die ein `Uint8Array`-Objekt aus einem base64-kodierten String erstellt. Das Ergebnis ist ein Byte-Array, mit dem leichter zu arbeiten ist als mit einem String, der rohe Bytes enthält.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Ein binärer String (d.h. ein String, bei dem jedes Zeichen im String als Byte binärer Daten behandelt wird), der base64-kodierte Daten enthält.

### Rückgabewert

Ein ASCII-String, der dekodierte Daten aus `encodedData` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `encodedData` nicht valide base64 ist.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

Weitere Beispiele finden Sie in der [`Window.btoa()`](/de/docs/Web/API/Window/btoa)-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist verfügbar in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob): die gleiche Methode, aber in Worker-Scope.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
- {{jsxref("Uint8Array.fromBase64()")}}
