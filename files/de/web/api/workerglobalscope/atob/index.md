---
title: "WorkerGlobalScope: atob() Methode"
short-title: atob()
slug: Web/API/WorkerGlobalScope/atob
l10n:
  sourceCommit: 087a73e18e2818c1cc6b9955218c614c44e612a0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`atob()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces dekodiert einen Datenstring, der mit {{Glossary("Base64", "Base64")}} kodiert wurde. Sie können die [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)-Methode verwenden, um Daten zu kodieren und zu übertragen, die sonst Kommunikationsprobleme verursachen könnten. Dann können die Daten übertragen und mit der `atob()`-Methode erneut dekodiert werden. Zum Beispiel können Sie Steuerzeichen wie {{Glossary("ASCII", "ASCII")}}-Werte 0 bis 31 kodieren, übertragen und dekodieren.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Ein binärer String (d. h., ein String, in dem jedes Zeichen im String als Byte von Binärdaten behandelt wird), der base64-kodierte Daten enthält.

### Rückgabewert

Ein ASCII-String, der dekodierte Daten aus `encodedData` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `encodedData` keine gültige Base64-Daten sind.

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
- [`Window.atob()`](/de/docs/Web/API/Window/atob): die gleiche Methode, jedoch im Window-Bereich.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- {{jsxref("Uint8Array.fromBase64()")}}
