---
title: "AudioTrackList: getTrackById()-Methode"
short-title: getTrackById()
slug: Web/API/AudioTrackList/getTrackById
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("HTML DOM")}}

Die **[`AudioTrackList`](/de/docs/Web/API/AudioTrackList)**-Methode **`getTrackById()`** gibt das erste [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekt aus der Liste der Tracks zurück, dessen [`id`](/de/docs/Web/API/AudioTrack/id) mit dem angegebenen String übereinstimmt. Dies ermöglicht es Ihnen, einen bestimmten Track zu finden, wenn Sie dessen ID-String kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Ein String, der die ID des zu lokalisierenden Tracks innerhalb der Trackliste angibt.

### Rückgabewert

Ein [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekt, das den ersten Track innerhalb der `AudioTrackList` angibt, dessen `id` mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht; das heißt in der Reihenfolge, die durch die Medienressource selbst definiert ist, oder, wenn die Ressource keine Reihenfolge definiert, in der relativen Reihenfolge, in der die Tracks von der Medienressource deklariert werden.

## Beispiele

Dieses Beispiel schlägt ein hypothetisches Spiel vor, in dem Filme als Zwischensequenzen oder andere wichtige Szenen innerhalb des Spiels verwendet werden. Jeder Film hat einen Audio-Track für jeden Charakter, sowie einen für die Musik, Soundeffekte und so weiter. Diese Funktion ermöglicht dem Spiel, einen spezifischen Charakter-Audio-Track zu deaktivieren, um die Leistung des Films basierend auf Ereignissen im Spiel anzupassen; wenn der Dialog des Charakters nicht relevant ist, wird er ausgelassen. Offensichtlich würde das ein cleveres Grafikdesign erfordern, um das zu realisieren, aber es ist ein hypothetisches Spiel.

```js
function disableCharacter(videoElem, characterName) {
  videoElem.audioTracks.getTrackById(characterName).enabled = false;
}
```

Diese kurze Funktion erhält die [`AudioTrackList`](/de/docs/Web/API/AudioTrackList), die die Audio-Tracks des Videos mit [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) enthält, und ruft dann `getTrackById()` darauf auf, indem sie den Namen des Charakters angibt. Der resultierende Track wird dann deaktiviert, indem das [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Flag auf `false` gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
