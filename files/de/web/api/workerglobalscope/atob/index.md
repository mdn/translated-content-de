---
title: "WorkerGlobalScope: atob()-Methode"
short-title: atob()
slug: Web/API/WorkerGlobalScope/atob
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`atob()`**-Methode der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) dekodiert einen Datenstring, der mit der [Base64](/de/docs/Glossary/Base64)-Kodierung kodiert wurde. Sie können die [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)-Methode verwenden, um Daten zu kodieren und zu übertragen, die ansonsten Kommunikationsprobleme verursachen könnten, diese dann übertragen und mit der `atob()`-Methode die Daten wieder dekodieren. Zum Beispiel können Sie Steuerzeichen wie ASCII-Werte 0 bis 31 kodieren, übertragen und dekodieren.

Für die Verwendung mit beliebigen Unicode-Strings siehe den Abschnitt _Das "Unicode-Problem"_ im Glossareintrag [Base64](/de/docs/Glossary/Base64).

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Ein Binärstring (das heißt, ein String, bei dem jedes Zeichen im String als Byte binärer Daten behandelt wird), der Base64-kodierte Daten enthält.

### Rückgabewert

Ein ASCII-String, der die dekodierten Daten aus `encodedData` enthält.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `encodedData` kein gültiges Base64 ist.

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
- [`data`-URLs](/de/docs/Web/URI/Schemes/data)
- [`Window.atob()`](/de/docs/Web/API/Window/atob): die gleiche Methode, aber im Fensterscope.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
