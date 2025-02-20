---
title: "WorkerGlobalScope: btoa()-Methode"
short-title: btoa()
slug: Web/API/WorkerGlobalScope/btoa
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`btoa()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle erstellt einen {{Glossary("Base64", "Base64")}}-codierten {{Glossary("ASCII", "ASCII")}}-String aus einem _Binär-String_ (d.h. ein String, bei dem jedes Zeichen im String als Byte von Binärdaten behandelt wird).

Sie können diese Methode verwenden, um Daten zu codieren, die ansonsten Kommunikationsprobleme verursachen könnten, diese zu übertragen und anschließend die [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)-Methode zu verwenden, um die Daten wieder zu dekodieren. Zum Beispiel können Sie Steuerzeichen wie ASCII-Werte 0 bis 31 codieren.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameter

- `stringToEncode`
  - : Der _Binär-String_, der codiert werden soll.

### Rückgabewert

Ein ASCII-String, der die Base64-Darstellung von `stringToEncode` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der String enthielt ein Zeichen, das nicht in ein einzelnes Byte passte. Weitere Informationen finden Sie unten unter „Unicode-Strings“.

## Beispiele

```js
const encodedData = self.btoa("Hello, world"); // encode a string
const decodedData = self.atob(encodedData); // decode the string
```

## Unicode-Strings

Base64 ist gemäß seiner Definition dafür konzipiert, Binärdaten als Eingabe zu erwarten. Im Hinblick auf JavaScript-Strings bedeutet dies, dass es sich um Strings handelt, bei denen der Codepunkt jedes Zeichens nur ein Byte belegt. Wenn Sie also einen String an `btoa()` übergeben, der Zeichen enthält, die mehr als ein Byte belegen, erhalten Sie einen Fehler, da dies nicht als Binärdaten betrachtet wird.

Weitere Informationen und mögliche Umgehungen finden Sie unter [`Window.btoa()`](/de/docs/Web/API/Window/btoa#unicode_strings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist verfügbar in [`core-js`](https://github.com/zloirock/core-js)
- [`data`-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa): dieselbe Methode, aber im Scope des Fensters.
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64", "Base64")}}
