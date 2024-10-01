---
title: "WorkerGlobalScope: btoa()-Methode"
short-title: btoa()
slug: Web/API/WorkerGlobalScope/btoa
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`btoa()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle erstellt einen {{Glossary("Base64", "Base64")}}-kodierten {{Glossary("ASCII", "ASCII")}}-String aus einem _binären String_ (d. h. einem String, bei dem jedes Zeichen im String als Byte binärer Daten behandelt wird).

Sie können diese Methode verwenden, um Daten zu kodieren, die ansonsten Kommunikationsprobleme verursachen könnten, diese zu übertragen und dann die Daten mit der [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)-Methode erneut zu dekodieren. Zum Beispiel können Sie Steuerzeichen wie ASCII-Werte 0 bis 31 kodieren.

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
  - : Der String enthielt ein Zeichen, das nicht in ein einzelnes Byte passte. Weitere Details finden Sie unten unter "Unicode-Strings".

## Beispiele

```js
const encodedData = self.btoa("Hello, world"); // encode a string
const decodedData = self.atob(encodedData); // decode the string
```

## Unicode-Strings

Base64 erwartet von Haus aus binäre Daten als Eingang. In Bezug auf JavaScript-Strings bedeutet dies Strings, bei denen der Codepunkt jedes Zeichens nur ein Byte belegt. Wenn Sie also einen String an `btoa()` übergeben, der Zeichen enthält, die mehr als ein Byte belegen, erhalten Sie einen Fehler, da dies nicht als binäre Daten angesehen wird:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(self.btoa(ok)); // YQ==
console.log(self.btoa(notOK)); // error
```

Wie Sie diese Einschränkung bei der Arbeit mit beliebigem Unicode-Text umgehen können, finden Sie unter "Das Unicode-Problem" im {{Glossary("Base64", "Base64")}}-Glossareintrag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa): die gleiche Methode, aber in Window-Kontexten.
- {{Glossary("Base64", "Base64")}}
