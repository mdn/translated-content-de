---
title: "AudioTrack: language-Eigenschaft"
short-title: language
slug: Web/API/AudioTrack/language
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`AudioTrack`](/de/docs/Web/API/AudioTrack)**
Eigenschaft **`language`** gibt eine Zeichenkette zurück, die die im Audiotrack verwendete Sprache identifiziert.

Für Tracks, die mehrere Sprachen enthalten
(zum Beispiel ein Film in Englisch, in dem einige Zeilen in anderen Sprachen gesprochen werden), sollte dies die primäre Sprache des Videos sein.

## Wert

Eine Zeichenkette, die das {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} der
primären Sprache angibt, die im Audiotrack verwendet wird, oder eine leere Zeichenkette (`""`), wenn
die Sprache nicht angegeben oder bekannt ist, oder wenn der Track keine Sprache enthält.

Zum Beispiel, wenn die primäre Sprache im Track US-Englisch ist, wäre dieser
Wert `"en-US"`. Für brasilianisches Portugiesisch wäre der Wert
`"pt-BR"`.

## Beispiele

Dieses Beispiel lokalisiert alle primären Sprachen- und übersetzten Audiotracks eines Media-Elements und gibt eine Liste von Objekten zurück, die die
[`id`](/de/docs/Web/API/AudioTrack/id), [`kind`](/de/docs/Web/API/AudioTrack/kind) und
`language` jedes dieser Tracks enthalten.

Dies könnte dann verwendet werden, um eine Benutzeroberfläche zu erstellen, über die der Nutzer die Sprache auswählen kann, die er beim Ansehen eines Films hören möchte.

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
