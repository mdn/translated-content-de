---
title: "HTMLTrackElement: srclang-Eigenschaft"
short-title: srclang
slug: Web/API/HTMLTrackElement/srclang
l10n:
  sourceCommit: da2997666dd2ac0186ebaaaf55bb7abbaa328f79
---

{{APIRef("HTML DOM")}}

Die **`srclang`**-Eigenschaft des [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)-Interfaces spiegelt den Wert des [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang)-Attributs des {{HTMLElement("track")}}-Elements wider oder den leeren String, wenn nicht definiert.

Das `srclang`-Attribut ist ein {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}, das die Sprache der Textspur-Daten angibt.

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
