---
title: "ImageDecoder: completed-Eigenschaft"
short-title: completed
slug: Web/API/ImageDecoder/completed
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`completed`**-Eigenschaft des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces gibt ein Promise zurück, das aufgelöst wird, sobald die kodierten Daten vollständig gepuffert sind.

## Wert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, sobald [`ImageDecoder.complete`](/de/docs/Web/API/ImageDecoder/complete) `true` ist.

## Beispiele

Im folgenden Beispiel wird der Wert von `completed` `undefined` sein, sobald das Promise aufgelöst wird.

```js
let completed = await imageDecoder.completed;
console.log(completed);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
