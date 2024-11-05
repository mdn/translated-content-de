---
title: "WorkerGlobalScope: btoa()-Methode"
short-title: btoa()
slug: Web/API/WorkerGlobalScope/btoa
l10n:
  sourceCommit: 087a73e18e2818c1cc6b9955218c614c44e612a0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`btoa()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces erstellt einen {{Glossary("Base64", "Base64")}}-kodierten {{Glossary("ASCII", "ASCII")}}-String aus einem _binären String_ (d.h. einem String, in dem jedes Zeichen als Byte von Binärdaten behandelt wird).

Sie können diese Methode verwenden, um Daten zu kodieren, die ansonsten Kommunikationsprobleme verursachen könnten, sie zu übertragen und dann die [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)-Methode zu nutzen, um die Daten wieder zu dekodieren. Zum Beispiel können Sie Steuerzeichen wie ASCII-Werte 0 bis 31 kodieren.

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
  - : Der String enthielt ein Zeichen, das nicht in ein Einzelbyte passte. Siehe unten "Unicode-Strings" für mehr Details.

## Beispiele

```js
const encodedData = self.btoa("Hello, world"); // encode a string
const decodedData = self.atob(encodedData); // decode the string
```

## Unicode-Strings

Base64 erwartet standardmäßig Binärdaten als Eingabe.
In Bezug auf JavaScript-Strings bedeutet dies Strings, bei denen der Codepunkt jedes Zeichens nur ein Byte belegt.
Wenn Sie also einen String in `btoa()` übergeben, der Zeichen enthält, die mehr als ein Byte belegen, erhalten Sie einen Fehler, da dies nicht als Binärdaten betrachtet wird.

Für mehr Informationen und Lösungen siehe [`Window.btoa()`](/de/docs/Web/API/Window/btoa#unicode_strings).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa): dieselbe Methode, aber in Window-Bereichen.
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64", "Base64")}}
