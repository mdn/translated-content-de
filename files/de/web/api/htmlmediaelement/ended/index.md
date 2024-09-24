---
title: "HTMLMediaElement: ended-Eigenschaft"
short-title: ended
slug: Web/API/HTMLMediaElement/ended
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.ended`**-Eigenschaft gibt an, ob das Medien-Element die Wiedergabe beendet hat.

## Wert

Ein boolescher Wert, der `true` ist, wenn das im Element enthaltene Medium die Wiedergabe abgeschlossen hat.

Wenn die Quelle des Mediums ein {{domxref("MediaStream")}} ist, ist dieser Wert `true`, wenn der Wert der {{domxref("MediaStream.active", "active")}}-Eigenschaft des Streams `false` ist.

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.ended); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.ended`-Eigenschaft
- {{domxref("MediaStream")}}
- {{domxref("MediaStream.active")}}
