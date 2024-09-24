---
title: "TextTrack: id-Eigenschaft"
short-title: id
slug: Web/API/TextTrack/id
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die schreibgeschützte **`id`**-Eigenschaft der {{domxref("TextTrack")}}-Schnittstelle gibt die ID des Tracks zurück, sofern er eine hat.

## Wert

Ein String, der die ID enthält, oder ein leerer String.

## Beispiele

Im folgenden Beispiel wird der Wert von `id` in die Konsole ausgegeben.

```js
const video = document.querySelector("video");
const track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.id);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
