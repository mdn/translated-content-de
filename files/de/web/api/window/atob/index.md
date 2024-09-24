---
title: "Fenster: atob()-Methode"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{APIRef("HTML DOM")}}

Die **`atob()`**-Methode der {{domxref("Window")}}-Schnittstelle dekodiert eine Zeichenfolge von Daten, die mit {{glossary("Base64")}}-Kodierung kodiert wurde. Sie können die {{domxref("Window.btoa()")}}-Methode verwenden, um Daten zu kodieren und zu übertragen, die andernfalls Kommunikationsprobleme verursachen könnten. Danach können Sie diese übertragen und die `atob()`-Methode verwenden, um die Daten wieder zu dekodieren. Beispielsweise können Sie Steuerzeichen wie {{Glossary("ASCII")}}-Werte von 0 bis 31 kodieren, übertragen und dekodieren.

Zur Verwendung mit beliebigen Unicode-Zeichenketten siehe _Das "Unicode-Problem"_ im {{Glossary("Base64")}} Glossar-Eintrag.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Eine Binärzeichenfolge (d.h. eine Zeichenfolge, bei der jedes Zeichen der Zeichenfolge als Byte von Binärdaten behandelt wird), die base64-kodierte Daten enthält.

### Rückgabewert

Eine ASCII-Zeichenfolge, die dekodierte Daten aus `encodedData` enthält.

### Ausnahmen

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `encodedData` kein gültiges Base64 ist.

## Beispiele

```js
const encodedData = window.btoa("Hello, world"); // encode a string
const decodedData = window.atob(encodedData); // decode the string
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- {{domxref("WorkerGlobalScope.atob()")}}: die gleiche Methode, aber in Worker-Bereichen.
- {{domxref("Window.btoa()")}}
