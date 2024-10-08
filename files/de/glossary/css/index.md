---
title: CSS
slug: Glossary/CSS
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**CSS** (Cascading Style Sheets) ist eine deklarative Sprache, die steuert, wie Webseiten im {{Glossary("browser", "Browser")}} aussehen.

Der Browser wendet CSS-Stildeklarationen auf ausgewählte Elemente an, um sie korrekt anzuzeigen. Eine Stildeklaration enthält die Eigenschaften und deren Werte, die bestimmen, wie eine Webseite aussieht.

CSS ist eine der drei Kerntechnologien des Webs, zusammen mit {{Glossary("HTML", "HTML")}} und {{Glossary("JavaScript", "JavaScript")}}. CSS wird normalerweise verwendet, um {{Glossary("Element", "HTML-Elemente")}} zu stylen, kann jedoch auch mit anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} genutzt werden.

Eine CSS-Regel ist eine Reihe von {{Glossary("property/CSS", "Eigenschaften")}}, die mit einem {{Glossary("CSS_selector", "Selektor")}} verknüpft sind. Hier ist ein Beispiel, das jeden HTML-Absatz gelb auf einem schwarzen Hintergrund macht:

```css
/* The selector "p" indicates that all paragraphs in the document will be affected by that rule */
p {
  /* The "color" property defines the text color, in this case yellow. */
  color: yellow;

  /* The "background-color" property defines the background color, in this case black. */
  background-color: black;
}
```

"Cascading" bezieht sich auf die Regeln, die festlegen, wie Selektoren priorisiert werden, um das Erscheinungsbild einer Seite zu ändern. Dies ist ein sehr wichtiges Merkmal, da eine komplexe Website Tausende von CSS-Regeln haben kann.

## Siehe auch

- [CSS lernen](/de/docs/Learn/CSS)
- [Die CSS-Dokumentation](/de/docs/Web/CSS)
- [CSS](https://en.wikipedia.org/wiki/CSS) auf Wikipedia
- [Die aktuellen Arbeiten der CSS-Arbeitsgruppe](https://www.w3.org/Style/CSS/current-work)
