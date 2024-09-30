---
title: "TextTrack: language-Eigenschaft"
short-title: language
slug: Web/API/TextTrack/language
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die schreibgeschützte **`language`**-Eigenschaft der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle gibt die Sprache des Texttracks zurück.

Es werden dieselben Werte wie das HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang) verwendet. Diese Werte sind in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} dokumentiert.

## Wert

Ein String, der eine Sprachkennung enthält. Zum Beispiel `"en-US"` für Englisch (USA) oder `"pt-BR"` für Portugiesisch (Brasilien).

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
