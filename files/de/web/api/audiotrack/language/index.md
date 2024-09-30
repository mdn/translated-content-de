---
title: "AudioTrack: language Eigenschaft"
short-title: language
slug: Web/API/AudioTrack/language
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`AudioTrack`](/de/docs/Web/API/AudioTrack)**
Eigenschaft **`language`** gibt einen String zurück, der die
Sprache identifiziert, die im Audiotrack verwendet wird.

Bei Tracks, die mehrere Sprachen enthalten
(zum Beispiel ein Film auf Englisch, in dem einige Zeilen in anderen Sprachen gesprochen werden), sollte dies die Hauptsprache des Videos sein.

## Wert

Ein String, der das BCP 47 ({{RFC(5646)}}) Format des Sprach-Tags der
primären Sprache angibt, die im Audiotrack verwendet wird, oder ein leerer String (`""`),
wenn die Sprache nicht spezifiziert oder bekannt ist oder wenn der Track keine Sprache enthält.

Zum Beispiel, wenn die primäre Sprache des Tracks Amerikanisches Englisch ist, wäre
dieser Wert `"en-US"`. Für brasilianisches Portugiesisch wäre der Wert
`"pt-BR"`.

## Beispiele

Das folgende Beispiel sucht alle Hauptsprach- und übersetzten Audiotracks eines Mediaelements
und gibt eine Liste von Objekten zurück, die jeweils die Tracks
[`id`](/de/docs/Web/API/AudioTrack/id), [`kind`](/de/docs/Web/API/AudioTrack/kind) und
`language` enthalten.

Dies könnte dann verwendet werden, um eine Benutzeroberfläche zu erstellen, über die der Benutzer die Sprache auswählen kann, die er beim Ansehen eines Films hören möchte.

```js
function getAvailableLanguages(el) {
  const trackList = [];
  const wantedKinds = ["main", "translation"];

  el.audioTracks.forEach((track) => {
    if (wantedKinds.includes(track.kind)) {
      trackList.push({
        id: track.id,
        kind: track.kind,
        language: track.language,
      });
    }
  });
  return trackList;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
