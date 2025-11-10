---
title: "TextTrackList: getTrackById()-Methode"
short-title: getTrackById()
slug: Web/API/TextTrackList/getTrackById
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **[`TextTrackList`](/de/docs/Web/API/TextTrackList)**-Methode **`getTrackById()`** gibt das erste [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt aus der Trackliste zurück, dessen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) mit der angegebenen Zeichenkette übereinstimmt. So können Sie einen bestimmten Track finden, wenn Sie dessen ID-Zeichenkette kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Eine Zeichenkette, die die ID des Tracks angibt, der in der Trackliste gesucht werden soll.

### Rückgabewert

Ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt, das den ersten Track innerhalb der `TextTrackList` angibt, dessen `id` mit der angegebenen Zeichenkette übereinstimmt. Wenn kein Treffer gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht, d.h. in der von der Medienressource definierten Reihenfolge oder, wenn die Ressource keine Reihenfolge definiert, in der relativen Reihenfolge, in der die Tracks von der Medienressource deklariert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
