---
title: "WorkerGlobalScope: btoa()-Methode"
short-title: btoa()
slug: Web/API/WorkerGlobalScope/btoa
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`btoa()`**-Methode der {{domxref("WorkerGlobalScope")}}-Schnittstelle erstellt einen
{{glossary("Base64")}}-kodierten {{Glossary("ASCII")}}-String aus einem _binären String_ (d. h. einem
String, bei dem jedes Zeichen im String als Byte von Binärdaten behandelt wird).

Sie können diese Methode verwenden, um Daten zu kodieren, die sonst Kommunikationsprobleme verursachen könnten, diese zu übertragen und dann die {{domxref("WorkerGlobalScope.atob()")}}-Methode zu verwenden, um die Daten wieder zu dekodieren.
Zum Beispiel können Sie Steuerzeichen wie ASCII-Werte 0 bis 31 kodieren.

## Syntax

```js-nolint
btoa(stringToEncode)
```

### Parameter

- `stringToEncode`
  - : Der _binäre String_, der kodiert werden soll.

### Rückgabewert

Ein ASCII-String, der die Base64-Darstellung von `stringToEncode` enthält.

### Ausnahmen

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Der String enthielt ein Zeichen, das nicht in ein einzelnes Byte passte. Siehe "Unicode-Zeichenfolgen" weiter unten für mehr Details.

## Beispiele

```js
const encodedData = self.btoa("Hello, world"); // einen String kodieren
const decodedData = self.atob(encodedData); // den String dekodieren
```

## Unicode-Zeichenfolgen

Base64 erwartet per Design binäre Daten als Eingabe. In Bezug auf JavaScript-Strings bedeutet dies Strings, bei denen der Codepunkt jedes Zeichens nur ein Byte belegt. Wenn Sie also einen String in `btoa()` übergeben, der Zeichen enthält, die mehr als ein Byte belegen,
erhalten Sie einen Fehler, da dies nicht als Binärdaten betrachtet wird:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: belegt < 1 Byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: belegt > 1 Byte

console.log(self.btoa(ok)); // YQ==
console.log(self.btoa(notOK)); // Fehler
```

Wie Sie dieses Problem umgehen können, wenn Sie mit beliebigem Unicode-Text arbeiten, finden Sie unter _Das "Unicode-Problem"_ im {{Glossary("Base64")}}-Glossareintrag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- {{domxref("WorkerGlobalScope.atob()")}}
- {{domxref("Window.btoa()")}}: die gleiche Methode, aber im Fensterscope.
- {{Glossary("Base64")}}
