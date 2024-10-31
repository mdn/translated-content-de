---
title: "ImageDecoder: completed-Eigenschaft"
short-title: completed
slug: Web/API/ImageDecoder/completed
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`completed`**-Eigenschaft des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces gibt ein `Promise` zurück, das sich auflöst, sobald die codierten Daten fertig gepuffert sind.

## Wert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} auflöst, sobald [`ImageDecoder.complete`](/de/docs/Web/API/ImageDecoder/complete) `true` ist.

## Beispiele

Im folgenden Beispiel wird der Wert von `completed` `undefined` sein, sobald das `Promise` aufgelöst wurde.

```js
let completed = await imageDecoder.completed;
console.log(completed);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
