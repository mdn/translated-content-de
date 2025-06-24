---
title: "Window: atob() Methode"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

Die **`atob()`** Methode des [`Window`](/de/docs/Web/API/Window) Interfaces dekodiert einen Datenstring, der mit der {{Glossary("Base64", "Base64")}}-Kodierung kodiert wurde. Sie können die [`Window.btoa()`](/de/docs/Web/API/Window/btoa) Methode verwenden, um Daten zu kodieren und zu übertragen, die sonst Kommunikationsprobleme verursachen könnten. Anschließend können Sie die `atob()` Methode verwenden, um die Daten wieder zu dekodieren. Zum Beispiel können Sie Steuerzeichen wie {{Glossary("ASCII", "ASCII")}}-Werte von 0 bis 31 kodieren, übertragen und dekodieren.

Betrachten Sie auch die Verwendung der {{jsxref("Uint8Array.fromBase64()")}} Methode, die ein `Uint8Array`-Objekt aus einem Base64-kodierten String erstellt. Dies resultiert in einem Byte-Array, das einfacher zu handhaben ist als ein String, der rohe Bytes enthält.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Ein base64-kodierter String, der das Alphabet verwendet, das von [`Window.btoa()`](/de/docs/Web/API/Window/btoa) erzeugt wird.

### Rückgabewert

Ein binärer String, der rohe Bytes enthält, dekodiert aus `encodedData`. Strings in JavaScript sind als {{Glossary("UTF-16", "UTF-16")}} kodiert, das bedeutet, dass jeder Charakter einen Codepunkt kleiner als 256 haben muss, der ein Byte Daten repräsentiert.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `encodedData` keine gültige Base64-Darstellung ist.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

Für mehr Beispiele siehe die [`Window.btoa()`](/de/docs/Web/API/Window/btoa) Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist verfügbar in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob): dieselbe Methode, aber in Worker-Scopes.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
- {{jsxref("Uint8Array.fromBase64()")}}
