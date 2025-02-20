---
title: "Window: atob()-Methode"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("HTML DOM")}}

Die **`atob()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces dekodiert eine
Datenzeichenkette, die mit der {{Glossary("Base64", "Base64")}}-Kodierung kodiert wurde. Sie können die [`Window.btoa()`](/de/docs/Web/API/Window/btoa)-Methode verwenden, um Daten zu kodieren und zu übertragen, die sonst Kommunikationsprobleme verursachen könnten, diese dann zu übertragen und anschließend mit der `atob()`-Methode die Daten wieder zu dekodieren. Zum Beispiel können Sie Steuerzeichen, wie etwa {{Glossary("ASCII", "ASCII")}}-Werte von 0 bis 31, kodieren, übertragen und dekodieren.

Es wird außerdem empfohlen, die Methode {{jsxref("Uint8Array.fromBase64()")}} zu verwenden, die ein `Uint8Array`-Objekt aus einer base64-kodierten Zeichenkette erstellt. Dies ergibt ein Byte-Array, das einfacher zu handhaben ist als eine Zeichenkette, die rohe Bytes enthält.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Eine Binärzeichenkette (d. h. eine Zeichenkette, in der jedes Zeichen als Byte binärer Daten behandelt wird), die base64-kodierte Daten enthält.

### Rückgabewert

Eine ASCII-Zeichenkette, die decodierte Daten aus `encodedData` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `encodedData` keine gültige Base64-Kodierung darstellt.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

Weitere Beispiele finden Sie in der Beschreibung der [`Window.btoa()`](/de/docs/Web/API/Window/btoa)-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob): dieselbe Methode, aber in Worker-Scopes.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
- {{jsxref("Uint8Array.fromBase64()")}}
