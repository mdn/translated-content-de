---
title: "EncodedVideoChunk: byteLength-Eigenschaft"
short-title: byteLength
slug: Web/API/EncodedVideoChunk/byteLength
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`byteLength`** schreibgeschützte Eigenschaft des {{domxref("EncodedVideoChunk")}}-Interfaces gibt die Länge der kodierten Videodaten in Bytes zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Im folgenden Beispiel wird der `byteLength` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedVideoChunk(init);

console.log(chunk.byteLength); //352800
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
