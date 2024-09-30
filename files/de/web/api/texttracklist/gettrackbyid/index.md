---
title: "TextTrackList: getTrackById()-Methode"
short-title: getTrackById()
slug: Web/API/TextTrackList/getTrackById
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

Die **[`TextTrackList`](/de/docs/Web/API/TextTrackList)**-Methode
**`getTrackById()`** gibt das erste
[`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt aus der Track-Liste zurück, dessen
[`id`](/de/docs/Web/HTML/Global_attributes/id) mit der
angegebenen Zeichenfolge übereinstimmt. Dies ermöglicht es Ihnen, einen bestimmten Track zu finden, wenn Sie die ID-Zeichenfolge kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Eine Zeichenfolge, die die ID des zu findenden Tracks innerhalb der Track-Liste angibt.

### Rückgabewert

Ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt, das den ersten Track innerhalb der
`TextTrackList` angibt, dessen `id` mit der angegebenen Zeichenfolge übereinstimmt. Wenn keine Übereinstimmung gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht; das heißt, in der Reihenfolge, die durch die Medienressource selbst definiert ist, oder, falls die Ressource keine Ordnung definiert, in der relativen Reihenfolge, in der die Tracks von der Medienressource deklariert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
