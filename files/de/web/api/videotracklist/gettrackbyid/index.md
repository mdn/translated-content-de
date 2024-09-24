---
title: "VideoTrackList: getTrackById()-Methode"
short-title: getTrackById()
slug: Web/API/VideoTrackList/getTrackById
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("HTML DOM")}}

Die **{{domxref("VideoTrackList")}}**-Methode
**`getTrackById()`** gibt das erste
{{domxref("VideoTrack")}}-Objekt aus der Trackliste zurück, dessen {{domxref("VideoTrack.id", "id")}} dem angegebenen String entspricht.

Dies ermöglicht es Ihnen, einen bestimmten Track zu finden, wenn
Sie dessen ID-String kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Ein String, der die ID des Tracks angibt, der innerhalb der Trackliste gesucht werden soll.

### Rückgabewert

Ein {{domxref("VideoTrack")}}-Objekt, das den ersten Track anzeigt, der innerhalb der
`VideoTrackList` gefunden wird, dessen `id` dem angegebenen String entspricht. Wenn
kein Treffer gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht; das heißt, in der Reihenfolge, die vom
Medienressource selbst definiert ist, oder, wenn die Ressource keine Reihenfolge definiert, in der relativen Reihenfolge,
in der die Tracks von der Medienressource deklariert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
