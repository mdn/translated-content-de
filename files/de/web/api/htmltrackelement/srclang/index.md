---
title: "HTMLTrackElement: srclang-Eigenschaft"
short-title: srclang
slug: Web/API/HTMLTrackElement/srclang
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`srclang`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces spiegelt den Wert des [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang)-Attributs des {{HTMLElement("track")}}-Elements wider oder ist ein leerer String, wenn es nicht definiert ist.

Das `srclang`-Attribut ist ein [BCP 47-Sprach-Tag](/de/docs/Web/HTML/Reference/Global_attributes/lang#language_tag_syntax), das die Sprache der Textspur-Daten angibt.

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
- [`lang`-Syntax](/de/docs/Web/HTML/Reference/Global_attributes/lang#language_tag_syntax)
