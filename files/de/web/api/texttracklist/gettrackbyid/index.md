---
title: "TextTrackList: getTrackById()-Methode"
short-title: getTrackById()
slug: Web/API/TextTrackList/getTrackById
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

Die **{{domxref("TextTrackList")}}**-Methode **`getTrackById()`** liefert das erste {{domxref("TextTrack")}}-Objekt aus der Track-Liste zurück, dessen [`id`](/de/docs/Web/HTML/Global_attributes/id) mit dem angegebenen String übereinstimmt. Damit können Sie einen bestimmten Track finden, wenn Sie dessen ID-String kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Ein String, der die ID des Tracks angibt, die in der Track-Liste gefunden werden soll.

### Rückgabewert

Ein {{domxref("TextTrack")}}-Objekt, das den ersten Track in der `TextTrackList` angibt, dessen `id` mit dem angegebenen String übereinstimmt. Falls kein Treffer gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht, d. h. in der vom Medienressource selbst definierten Reihenfolge oder, falls die Ressource keine Reihenfolge definiert, in der relativen Reihenfolge, in der die Tracks von der Medienressource deklariert werden.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
