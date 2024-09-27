---
title: "AudioTrackList: Methode getTrackById()"
short-title: getTrackById()
slug: Web/API/AudioTrackList/getTrackById
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("HTML DOM")}}

Die Methode **[`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById)** der **[`AudioTrackList`](/de/docs/Web/API/AudioTrackList)** gibt das erste [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekt aus der Trackliste zurück, dessen [`id`](/de/docs/Web/API/AudioTrack/id) mit dem angegebenen String übereinstimmt.
Dies ermöglicht es Ihnen, einen bestimmten Track zu finden, wenn Sie seine ID kennen.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Ein String, der die ID des Tracks angibt, der innerhalb der Trackliste gefunden werden soll.

### Rückgabewert

Ein [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekt, das den ersten Track in der
`AudioTrackList` angibt, dessen `id` mit dem angegebenen String übereinstimmt. Wenn kein
Übereinstimmung gefunden wird, gibt diese Methode `null` zurück.

Die Tracks werden in ihrer natürlichen Reihenfolge durchsucht; das heißt, in der Reihenfolge, die durch das
Medienressource selbst definiert ist, oder, wenn die Ressource keine Reihenfolge definiert, in der relativen Reihenfolge,
in der die Tracks von der Medienressource deklariert werden.

## Beispiele

Dieses Beispiel schlägt ein hypothetisches Spiel vor, in dem Filme als Zwischensequenzen oder
andere wichtige Elemente innerhalb des Spiels eingesetzt werden. Jeder Film hat einen Audiotrack für jeden Charakter,
sowie einen für die Musik, Soundeffekte und so weiter. Diese Funktion ermöglicht es dem Spiel,
den Audiotrack eines bestimmten Charakters zu deaktivieren, um die Leistung des Films basierend
auf den Vorkommnissen im Spiel anzupassen; wenn der Dialog des Charakters nicht relevant ist, wird er ausgelassen.
Offensichtlich würde das eine clevere grafische Gestaltung erfordern, um zu funktionieren, aber es ist ein
hypothetisches Spiel.

```js
function disableCharacter(videoElem, characterName) {
  videoElem.audioTracks.getTrackById(characterName).enabled = false;
}
```

Diese kurze Funktion ruft die [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) ab, die die Audiospuren des Videos enthält, unter Verwendung von [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks), und ruft dann
`getTrackById()` darauf auf, wobei der Name des Charakters angegeben wird. Der resultierende
Track wird dann deaktiviert, indem sein [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Flag auf `false` gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
