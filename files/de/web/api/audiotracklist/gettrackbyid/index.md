---
title: "AudioTrackList: Methode getTrackById()"
short-title: getTrackById()
slug: Web/API/AudioTrackList/getTrackById
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("HTML DOM")}}

Die **{{domxref("AudioTrackList")}}** Methode **`getTrackById()`** gibt das erste {{domxref("AudioTrack")}}-Objekt aus der Trackliste zurück, dessen {{domxref("AudioTrack.id", "id")}} mit der angegebenen Zeichenkette übereinstimmt. Dies ermöglicht Ihnen, einen bestimmten Track zu finden, wenn Sie die ID-Zeichenkette kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Eine Zeichenkette, die die ID des zu lokalisierenden Tracks in der Trackliste angibt.

### Rückgabewert

Ein {{domxref("AudioTrack")}}-Objekt, das den ersten Track innerhalb der `AudioTrackList` angibt, dessen `id` mit der angegebenen Zeichenkette übereinstimmt. Wenn keine Übereinstimmung gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht; das heißt, in der von der Medienressource definierten Reihenfolge oder, falls die Ressource keine Reihenfolge definiert, in der relativen Reihenfolge, in der die Tracks von der Medienressource deklariert werden.

## Beispiele

Dieses Beispiel schlägt ein hypothetisches Spiel vor, in dem Filme als Zwischensequenzen oder andere wichtige Set-Pieces innerhalb des Spiels verwendet werden. Jeder Film hat einen Audiotrack für jeden Charakter, sowie einen für die Musik, Soundeffekte usw. Diese Funktion ermöglicht es dem Spiel, die Audioausgabe eines bestimmten Charakters zu deaktivieren, um die Leistung des Films anhand von Ereignissen im Spiel anzupassen; wenn der Dialog des Charakters nicht relevant ist, wird er weggelassen. Natürlich würde das ein cleveres Grafikdesign erfordern, um zu funktionieren, aber es ist ein hypothetisches Spiel.

```js
function disableCharacter(videoElem, characterName) {
  videoElem.audioTracks.getTrackById(characterName).enabled = false;
}
```

Diese kurze Funktion ruft die {{domxref("AudioTrackList")}} ab, die die Audio-Tracks des Videos enthält, indem sie {{domxref("HTMLMediaElement.audioTracks")}} verwendet und dann `getTrackById()` darauf aufruft, wobei der Name des Charakters angegeben wird. Der resultierende Track wird dann deaktiviert, indem das {{domxref("AudioTrack.enabled", "enabled")}}-Flag auf `false` gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
