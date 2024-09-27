---
title: "WorkerGlobalScope: atob()-Methode"
short-title: atob()
slug: Web/API/WorkerGlobalScope/atob
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`atob()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle decodiert einen Datenstring, der mit [Base64](/de/docs/Glossary/Base64)-Kodierung kodiert wurde. Sie können die [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)-Methode verwenden, um Daten zu kodieren und zu übertragen, die ansonsten Kommunikationsprobleme verursachen könnten, dann übertragen und die `atob()`-Methode verwenden, um die Daten wieder zu decodieren. Zum Beispiel können Sie Steuerzeichen wie [ASCII](/de/docs/Glossary/ASCII)-Werte 0 bis 31 kodieren, übertragen und decodieren.

Für die Verwendung mit beliebigen Unicode-Strings siehe den Abschnitt _Das "Unicode-Problem"_ im [Base64](/de/docs/Glossary/Base64)-Glossareintrag.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Ein binärer String (d. h. ein String, bei dem jedes Zeichen im String als Byte binärer Daten behandelt wird), der base64-kodierte Daten enthält.

### Rückgabewert

Ein ASCII-String, der aus `encodedData` dekodierte Daten enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `encodedData` keine gültige Base64-Kodierung ist.

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

- [Ein Polyfill von `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist verfügbar in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- [`Window.atob()`](/de/docs/Web/API/Window/atob): die gleiche Methode, aber in Fensterskontexten.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
