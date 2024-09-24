---
title: "WorkerGlobalScope: atob()-Methode"
short-title: atob()
slug: Web/API/WorkerGlobalScope/atob
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`atob()`**-Methode der {{domxref("WorkerGlobalScope")}}-Schnittstelle dekodiert einen Datenstring, der mit {{glossary("Base64")}}-Codierung kodiert wurde. Sie können die {{domxref("WorkerGlobalScope.btoa()")}}-Methode verwenden, um Daten zu codieren und zu übertragen, die sonst Kommunikationsprobleme verursachen könnten, diese dann übertragen und die `atob()`-Methode verwenden, um die Daten wieder zu dekodieren. Beispielsweise können Sie Steuerzeichen wie {{Glossary("ASCII")}}-Werte 0 bis 31 codieren, übertragen und dekodieren.

Für die Verwendung mit beliebigen Unicode-Strings siehe _Das "Unicode-Problem"_-Kapitel im {{Glossary("Base64")}}-Glossareintrag.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Ein binärer String (d.h. ein String, bei dem jedes Zeichen im String als Byte von Binärdaten behandelt wird), der base64-codierte Daten enthält.

### Rückgabewert

Ein ASCII-String, der dekodierte Daten aus `encodedData` enthält.

### Ausnahmen

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `encodedData` keine gültige base64-Darstellung ist.

## Beispiele

```js
const encodedData = self.btoa("Hello, world"); // encode a string
const decodedData = self.atob(encodedData); // decode the string
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- {{domxref("Window.atob()")}}: die gleiche Methode, aber in Fensterbereichen.
- {{domxref("WorkerGlobalScope.btoa()")}}
