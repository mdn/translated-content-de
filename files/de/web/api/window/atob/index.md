---
title: "Window: atob() Methode"
short-title: atob()
slug: Web/API/Window/atob
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{APIRef("HTML DOM")}}

Die **`atob()`** Methode des [`Window`](/de/docs/Web/API/Window) Interfaces dekodiert einen Datenstring, der mit [Base64](/de/docs/Glossary/Base64) kodiert wurde. Sie können die [`Window.btoa()`](/de/docs/Web/API/Window/btoa) Methode verwenden, um Daten zu kodieren und zu übertragen, die ansonsten Kommunikationsprobleme verursachen könnten. Anschließend können Sie diese übertragen und die `atob()` Methode verwenden, um die Daten wieder zu dekodieren. Beispielsweise können Sie Steuerzeichen wie [ASCII](/de/docs/Glossary/ASCII) Werte 0 bis 31 kodieren, übertragen und dekodieren.

Für die Verwendung mit beliebigen Unicode-Strings siehe _Das "Unicode-Problem"_ im [Base64](/de/docs/Glossary/Base64) Glossareintrag.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Ein binärer String (d. h. ein String, bei dem jedes Zeichen im String als Byte binärer Daten behandelt wird), der base64-kodierte Daten enthält.

### Rückgabewert

Ein ASCII-String, der dekodierte Daten aus `encodedData` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
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

- [Ein Polyfill von `atob`](https://github.com/zloirock/core-js#base64-utility-methods) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar.
- [`data` URLs](/de/docs/Web/URI/Schemes/data)
- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob): die gleiche Methode, aber in Worker-Kontexten.
- [`Window.btoa()`](/de/docs/Web/API/Window/btoa)
