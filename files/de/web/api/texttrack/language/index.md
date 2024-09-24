---
title: "TextTrack: language-Eigenschaft"
short-title: language
slug: Web/API/TextTrack/language
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{APIRef("WebVTT")}}

Die schreibgeschützte Eigenschaft **`language`** der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle gibt die Sprache des Texttracks zurück.

Dabei werden die gleichen Werte wie beim HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang) verwendet. Diese Werte sind in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} dokumentiert.

## Wert

Ein String, der einen Sprachcode enthält. Zum Beispiel `"en-US"` für Englisch in den USA oder `"pt-BR"` für Brasilianisches Portugiesisch.

## Beispiele

Im folgenden Beispiel wird der Wert von `language` in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en-US");
track.mode = "showing";
console.log(track.language);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
