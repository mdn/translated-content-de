---
title: "TextTrack: language-Eigenschaft"
short-title: language
slug: Web/API/TextTrack/language
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("WebVTT")}}

Die schreibgeschützte **`language`**-Eigenschaft des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces gibt die Sprache des Texttracks zurück.

Diese verwendet dieselben Werte wie das HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang). Diese Werte sind in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} dokumentiert.

## Wert

Ein String, der einen Sprach-Identifikator enthält. Zum Beispiel `"en-US"` für Englisch in den Vereinigten Staaten oder `"pt-BR"` für brasilianisches Portugiesisch.

## Beispiele

Im folgenden Beispiel wird der Wert von `language` in die Konsole ausgegeben.

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
