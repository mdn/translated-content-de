---
title: "WorkerGlobalScope: atob()-Methode"
short-title: atob()
slug: Web/API/WorkerGlobalScope/atob
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`atob()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle dekodiert eine Zeichenfolge, die mit {{Glossary("Base64", "Base64")}} kodiert wurde. Sie können die Methode [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa) verwenden, um Daten zu kodieren, die andernfalls Kommunikationsprobleme verursachen könnten. Anschließend können Sie die Daten übertragen und mit `atob()` wieder dekodieren. So können Sie beispielsweise Steuerzeichen wie die {{Glossary("ASCII", "ASCII")}}-Werte 0 bis 31 kodieren, übertragen und dekodieren.

## Syntax

```js-nolint
atob(encodedData)
```

### Parameter

- `encodedData`
  - : Eine binäre Zeichenfolge (d.h. eine Zeichenfolge, bei der jedes Zeichen als Byte binärer Daten behandelt wird), die Base64-kodierte Daten enthält.

### Rückgabewert

Eine ASCII-Zeichenfolge mit den dekodierten Daten aus `encodedData`.

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

- [Ein Polyfill für `atob`](https://core-js.io/docs/features/web-standards/atob-btoa) ist in [`core-js`](https://core-js.io/) verfügbar.
- [`data`-URLs](/de/docs/Web/URI/Reference/Schemes/data)
- [`Window.atob()`](/de/docs/Web/API/Window/atob): dieselbe Methode, jedoch im Gültigkeitsbereich von Fenstern.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- {{jsxref("Uint8Array.fromBase64()")}}
