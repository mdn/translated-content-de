---
title: "ImageDecoder: completed-Eigenschaft"
short-title: completed
slug: Web/API/ImageDecoder/completed
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`completed`** schreibgeschützte Eigenschaft des {{domxref("ImageDecoder")}}-Interfaces gibt ein Promise zurück, das sich auflöst, sobald die kodierten Daten das Puffern abgeschlossen haben.

## Wert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} auflöst, sobald {{domxref("ImageDecoder.complete")}} `true` ist.

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
