---
title: "TextTrack: language-Eigenschaft"
short-title: language
slug: Web/API/TextTrack/language
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("WebVTT")}}

Die **`language`** Eigenschaft der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Sprache des Text-Tracks zurückgibt.

## Wert

Ein String, der einen Sprachbezeichner enthält. Dies wird ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein, zum Beispiel `"en-US"` für Englisch (Vereinigte Staaten) oder `"pt-BR"` für brasilianisches Portugiesisch.

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
