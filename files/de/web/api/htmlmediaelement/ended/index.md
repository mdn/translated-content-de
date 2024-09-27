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

Ein Boolean-Wert, der `true` ist, wenn das im Element enthaltene Medium die Wiedergabe beendet hat.

Wenn die Quelle des Mediums ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist, hat dieser Wert `true`, wenn der Wert der [`active`](/de/docs/Web/API/MediaStream/active)-Eigenschaft des Streams `false` ist.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.ended`-Eigenschaft
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStream.active`](/de/docs/Web/API/MediaStream/active)
