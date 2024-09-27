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
[`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt aus der Trackliste zurück, dessen
[`id`](/de/docs/Web/HTML/Global_attributes/id) mit dem angegebenen String übereinstimmt. Dies ermöglicht es Ihnen, einen bestimmten Track zu finden, wenn Sie dessen ID-String kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Ein String, der die ID des Tracks angibt, der innerhalb der Trackliste gefunden werden soll.

### Rückgabewert

Ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt, das den ersten Track angibt, der innerhalb der
`TextTrackList` gefunden wurde und dessen `id` mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht; das heißt, in der Reihenfolge, die durch die Mediendatei selbst definiert ist, oder, wenn die Ressource keine Reihenfolge definiert, in der relativen Reihenfolge, in der die Tracks von der Mediendatei deklariert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
