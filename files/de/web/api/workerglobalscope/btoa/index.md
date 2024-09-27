---
title: "WorkerGlobalScope: btoa() Methode"
short-title: btoa()
slug: Web/API/WorkerGlobalScope/btoa
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`btoa()`** Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle erstellt einen [Base64](/de/docs/Glossary/Base64)-codierten [ASCII](/de/docs/Glossary/ASCII) String aus einem _binären String_ (d.h. einem String, bei dem jedes Zeichen im String als Byte von Binärdaten behandelt wird).

Sie können diese Methode verwenden, um Daten zu codieren, die ansonsten Kommunikationsprobleme verursachen könnten, sie übertragen und dann die [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob) Methode verwenden, um die Daten erneut zu dekodieren. Zum Beispiel können Sie Steuerzeichen wie ASCII-Werte von 0 bis 31 codieren.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameter

- `stringToEncode`
  - : Der zu codierende _binäre String_.

### Rückgabewert

Ein ASCII-String, der die Base64-Darstellung von `stringToEncode` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der String enthielt ein Zeichen, das nicht in ein Einzelbyte passte. Siehe "Unicode-Strings" unten für mehr Details.

## Beispiele

```js
const encodedData = self.btoa("Hello, world"); // encode a string
const decodedData = self.atob(encodedData); // decode the string
```

## Unicode-Strings

Base64 erwartet von seinem Design her Binärdaten als Eingabe. Bei JavaScript-Strings bedeutet dies Strings, bei denen der Codepunkt jedes Zeichens nur ein Byte belegt. Wenn Sie also einen String mit Zeichen, die mehr als ein Byte belegen, in `btoa()` übergeben, erhalten Sie einen Fehler, da dies nicht als Binärdaten betrachtet wird:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies > 1 byte

console.log(self.btoa(ok)); // YQ==
console.log(self.btoa(notOK)); // error
```

Wie Sie diese Einschränkung umgehen können, wenn Sie mit beliebigem Unicode-Text arbeiten, finden Sie unter _Das "Unicode-Problem"_ im [Base64](/de/docs/Glossary/Base64) Glossareintrag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa): die gleiche Methode, aber in Fensterkontexten.
- [Base64](/de/docs/Glossary/Base64)
