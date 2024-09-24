---
title: "TextTrack: language Eigenschaft"
short-title: language
slug: Web/API/TextTrack/language
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die **`language`** schreibgeschützte Eigenschaft des {{domxref("TextTrack")}}-Interfaces gibt die Sprache der Textspur zurück.

Dies verwendet dieselben Werte wie das HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang). Diese Werte sind dokumentiert in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.

## Wert

Ein String, der einen Sprachbezeichner enthält. Zum Beispiel `"en-US"` für Englisch in den Vereinigten Staaten oder `"pt-BR"` für brasilianisches Portugiesisch.

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

## Kompatibilität der Browser

{{Compat}}
