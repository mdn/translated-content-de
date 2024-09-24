---
title: "Window: btoa()-Methode"
short-title: btoa()
slug: Web/API/Window/btoa
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{APIRef("HTML DOM")}}

Die **`btoa()`**-Methode der {{domxref("Window")}}-Schnittstelle erstellt einen {{glossary("Base64")}}-kodierten {{Glossary("ASCII")}}-String aus einem _binären String_ (d.h. ein String, bei dem jedes Zeichen im String als Byte binärer Daten behandelt wird).

Sie können diese Methode verwenden, um Daten zu kodieren, die sonst Kommunikationsprobleme verursachen könnten, sie zu übertragen und dann die {{domxref("Window.atob()")}}-Methode zu verwenden, um die Daten wieder zu dekodieren. Beispielsweise können Sie Steuerzeichen wie ASCII-Werte 0 bis 31 kodieren.

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
  - : Der String enthielt ein Zeichen, das nicht in ein einzelnes Byte passte. Siehe "Unicode-Strings" unten für weitere Details.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // einen String kodieren
const decodedData = window.atob(encodedData); // den String dekodieren
```

## Unicode-Strings

Base64 erwartet von seiner Konstruktion her Binärdaten als Eingabe. In Bezug auf JavaScript-Strings bedeutet dies Strings, bei denen der Codepunkt jedes Zeichens nur ein Byte einnimmt. Wenn Sie also einen String an `btoa()` übergeben, der Zeichen enthält, die mehr als ein Byte belegen, erhalten Sie einen Fehler, da dies nicht als Binärdaten betrachtet wird:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: belegt < 1 Byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: belegt > 1 Byte

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // Fehler
```

Um zu erfahren, wie Sie dieses Limit umgehen können, wenn Sie mit beliebigem Unicode-Text arbeiten, siehe _Das "Unicode-Problem"_ im {{Glossary("Base64")}}-Glossareintrag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein [Polyfill von `btoa`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar.
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- {{domxref("WorkerGlobalScope.btoa()")}}: die gleiche Methode, aber in Arbeiterumgebungen.
- {{domxref("Window.atob()")}}
- {{Glossary("Base64")}}
