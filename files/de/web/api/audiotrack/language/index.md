---
title: "AudioTrack: language-Eigenschaft"
short-title: language
slug: Web/API/AudioTrack/language
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **{{domxref("AudioTrack")}}**
Eigenschaft **`language`** gibt einen String zurück, der die
Sprache identifiziert, die im Audiotrack verwendet wird.

Bei Tracks, die mehrere Sprachen beinhalten
(zum Beispiel ein Film auf Englisch, in dem einige Zeilen in anderen Sprachen gesprochen werden), sollte dies die primäre Sprache des Videos sein.

## Wert

Ein String, der das BCP 47 ({{RFC(5646)}}) Format Sprach-Tag der
primären Sprache angibt, die im Audiotrack verwendet wird, oder ein leerer String (`""`), wenn
die Sprache nicht angegeben oder unbekannt ist oder wenn der Track keine Sprache enthält.

Zum Beispiel, wenn die primäre Sprache im Track US-Englisch ist, wäre dieser
Wert `"en-US"`. Für brasilianisches Portugiesisch wäre der Wert
`"pt-BR"`.

## Beispiele

Dieses Beispiel findet alle primären und übersetzten Audiotracks eines Media-Elements und gibt eine Liste von Objekten zurück, die die
{{domxref("AudioTrack.id", "id")}}, {{domxref("AudioTrack.kind", "kind")}} und
`language` jedes dieser Tracks enthalten.

Dies könnte dann verwendet werden, um eine Benutzeroberfläche zum Auswählen der Sprache zu erstellen, die der Benutzer
beim Anschauen eines Films hören möchte.

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
