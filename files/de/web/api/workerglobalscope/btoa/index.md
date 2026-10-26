---
title: "WorkerGlobalScope: btoa()-Methode"
short-title: btoa()
slug: Web/API/WorkerGlobalScope/btoa
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die Methode **`btoa()`** der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erstellt aus einer _binären Zeichenfolge_ eine {{Glossary("Base64", "Base64")}}-codierte {{Glossary("ASCII", "ASCII")}}-Zeichenfolge. Dabei wird jedes Zeichen der Eingabe als ein Byte binärer Daten behandelt.

Mit dieser Methode können Sie Daten codieren, die andernfalls Kommunikationsprobleme verursachen könnten, sie übertragen und anschließend mit der Methode [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob) wieder decodieren.
So können Sie beispielsweise Steuerzeichen wie die ASCII-Werte 0 bis 31 codieren.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameter

- `stringToEncode`
  - : Die zu codierende _binäre Zeichenfolge_.

### Rückgabewert

Eine ASCII-Zeichenfolge, die die Base64-Darstellung von `stringToEncode` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Zeichenfolge enthielt ein Zeichen, das nicht in ein einzelnes Byte passt. Weitere Informationen finden Sie unten unter „Unicode-Zeichenfolgen“.

## Beispiele

```js
const encodedData = self.btoa("Hello, world"); // encode a string
const decodedData = self.atob(encodedData); // decode the string
```

## Unicode-Zeichenfolgen

Base64 erwartet binäre Daten als Eingabe.
Bei JavaScript-Zeichenfolgen bedeutet dies, dass der Codepunkt jedes Zeichens nur ein Byte belegt.
Wenn Sie `btoa()` eine Zeichenfolge übergeben, die Zeichen enthält, die mehr als ein Byte belegen, erhalten Sie daher einen Fehler: Eine solche Zeichenfolge gilt nicht als binäre Daten.

Weitere Informationen und mögliche Umgehungslösungen finden Sie unter [`Window.btoa()`](/de/docs/Web/API/Window/btoa#unicode_strings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `btoa`](https://core-js.io/docs/features/web-standards/atob-btoa) ist in [`core-js`](https://core-js.io/) verfügbar
- [`data`-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa): dieselbe Methode, jedoch im Window-Kontext.
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64", "Base64")}}
