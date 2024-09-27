---
title: "TextTrack: language Eigenschaft"
short-title: language
slug: Web/API/TextTrack/language
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die schreibgeschützte Eigenschaft **`language`** des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces gibt die Sprache der Textspur zurück.

Diese verwendet dieselben Werte wie das HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang). Diese Werte sind in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} dokumentiert.

## Wert

Ein String, der einen Sprachidentifier enthält. Zum Beispiel `"en-US"` für US-amerikanisches Englisch oder `"pt-BR"` für brasilianisches Portugiesisch.

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
