---
title: "HTMLMediaElement: ended-Eigenschaft"
short-title: ended
slug: Web/API/HTMLMediaElement/ended
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`ended`** der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt an, ob die Wiedergabe des Medienelements beendet ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Wiedergabe der im Element enthaltenen Medien abgeschlossen ist.

Wenn die Medienquelle ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist, ist dieser Wert `true`, wenn die Eigenschaft [`active`](/de/docs/Web/API/MediaStream/active) des Streams den Wert `false` hat.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, in der die Eigenschaft `HTMLMediaElement.ended` definiert ist
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStream.active`](/de/docs/Web/API/MediaStream/active)
