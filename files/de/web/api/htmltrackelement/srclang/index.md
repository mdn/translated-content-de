---
title: "HTMLTrackElement: srclang-Eigenschaft"
short-title: srclang
slug: Web/API/HTMLTrackElement/srclang
l10n:
  sourceCommit: 0bf15d029fb052d3b20a2f249d4a6de8e29ea774
---

{{APIRef("HTML DOM")}}

Die **`srclang`**-Eigenschaft der [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Schnittstelle spiegelt den Wert des [`srclang`](/de/docs/Web/HTML/Element/track#srclang)-Attributs des {{HTMLElement("track")}}-Elements wider oder den leeren String, wenn es nicht definiert ist.

Das `srclang`-Attribut ist ein [BCP 47-Sprach-Tag](/de/docs/Web/HTML/Global_attributes/lang#language_tag_syntax), das die Sprache der Texttrack-Daten angibt.

## Wert

Ein String.

## Beispiel

```js
const trackElement = document.getElementById("exampleTrack");
console.log(`Track's language: ${trackElement.srclang}`);
trackElement.srclang = "en-US";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)
- {{HTMLElement("track")}}
- [`lang`-Syntax](/de/docs/Web/HTML/Global_attributes/lang#language_tag_syntax)
