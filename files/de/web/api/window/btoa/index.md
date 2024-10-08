---
title: "Window: btoa() Methode"
short-title: btoa()
slug: Web/API/Window/btoa
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{APIRef("HTML DOM")}}

Die **`btoa()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle erzeugt einen {{Glossary("Base64", "Base64")}}-kodierten {{Glossary("ASCII", "ASCII")}}-String aus einem _binären String_ (d. h. ein String, bei dem jedes Zeichen im String als Byte von Binärdaten behandelt wird).

Sie können diese Methode verwenden, um Daten zu kodieren, die andernfalls Kommunikationsprobleme verursachen könnten, sie zu übertragen und dann die [`Window.atob()`](/de/docs/Web/API/Window/atob) Methode zu verwenden, um die Daten wieder zu dekodieren. Zum Beispiel können Sie Steuerzeichen wie ASCII-Werte 0 bis 31 kodieren.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameter

- `stringToEncode`
  - : Der zu kodierende _binäre String_.

### Rückgabewert

Ein ASCII-String, der die Base64-Darstellung von `stringToEncode` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der String enthielt ein Zeichen, das nicht in ein einzelnes Byte passte. Siehe "Unicode-Strings" unten für mehr Details.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

## Unicode-Strings

Base64 erwartet von Haus aus Binärdaten als Eingabe. Bei JavaScript-Strings bedeutet dies Strings, bei denen der Codepunkt jedes Zeichens nur ein Byte beansprucht. Wenn Sie also einen String in `btoa()` übergeben, der Zeichen enthält, die mehr als ein Byte beanspruchen, erhalten Sie einen Fehler, da dies nicht als Binärdaten betrachtet wird:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // error
```

Wie Sie dieses Limit umgehen können, wenn Sie mit beliebigem Unicode-Text arbeiten, finden Sie unter _Das "Unicode-Problem"_ im {{Glossary("Base64", "Base64")}}-Glossareintrag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa): die gleiche Methode, aber in Worker-Kontexten.
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
- {{Glossary("Base64", "Base64")}}
