---
title: "VideoTrackList: getTrackById()-Methode"
short-title: getTrackById()
slug: Web/API/VideoTrackList/getTrackById
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("HTML DOM")}}

Die **[`VideoTrackList`](/de/docs/Web/API/VideoTrackList)**-Methode **`getTrackById()`** gibt das erste [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekt aus der Track-Liste zurück, dessen [`id`](/de/docs/Web/API/VideoTrack/id) mit dem angegebenen String übereinstimmt.

Dies ermöglicht es Ihnen, einen bestimmten Track zu finden, wenn Sie dessen ID-String kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Ein String, der die ID des Tracks angibt, der in der Trackliste gefunden werden soll.

### Rückgabewert

Ein [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekt, das den ersten Track innerhalb der `VideoTrackList` angibt, dessen `id` mit dem angegebenen String übereinstimmt. Wenn kein Match gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht; das heißt, in der Reihenfolge, die von der Mediaressource selbst definiert wird, oder, wenn die Ressource keine Reihenfolge definiert, in der relativen Reihenfolge, in der die Tracks von der Mediaressource deklariert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
