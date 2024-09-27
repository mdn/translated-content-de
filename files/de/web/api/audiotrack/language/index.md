---
title: "AudioTrack: language-Eigenschaft"
short-title: language
slug: Web/API/AudioTrack/language
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`AudioTrack`](/de/docs/Web/API/AudioTrack)**
Eigenschaft **`language`** gibt einen String zurück, der die
Sprache der Tonspur identifiziert.

Bei Spuren, die mehrere Sprachen enthalten
(zum Beispiel ein Film auf Englisch, in dem einige Zeilen in anderen Sprachen gesprochen werden), sollte dies die primäre Sprache des Videos sein.

## Wert

Ein String, der den BCP 47 ({{RFC(5646)}}) Format-Sprach-Tag der
primären Sprache der Tonspur spezifiziert, oder ein leerer String (`""`), wenn
die Sprache nicht spezifiziert oder unbekannt ist oder die Spur keine Sprache enthält.

Zum Beispiel, wenn die primäre Sprache der Spur US-Englisch ist, wäre
dieser Wert `"en-US"`. Für brasilianisches Portugiesisch wäre der Wert
`"pt-BR"`.

## Beispiele

Dieses Beispiel findet alle Primärsprachen- und Übersetzungs-Audio
Spuren eines Medienelements und gibt eine Liste von Objekten zurück, die jede dieser Spuren'
[`id`](/de/docs/Web/API/AudioTrack/id), [`kind`](/de/docs/Web/API/AudioTrack/kind) und
`language` enthalten.

Dies könnte dann verwendet werden, um eine Benutzeroberfläche zu erstellen, mit der der Benutzer die Sprache auswählen kann, die er beim Anschauen eines Films hören möchte, zum Beispiel.

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
