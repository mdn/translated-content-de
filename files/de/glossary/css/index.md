---
title: CSS
slug: Glossary/CSS
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**CSS** (Cascading Style Sheets) ist eine deklarative Sprache, die bestimmt, wie Webseiten im [Browser](/de/docs/Glossary/browser) aussehen.

Der Browser wendet CSS-Stildeklarationen auf ausgewählte Elemente an, um sie korrekt darzustellen. Eine Stildeklaration enthält die Eigenschaften und deren Werte, die das Aussehen einer Webseite bestimmen.

CSS ist eine der drei Kerntechnologien des Webs, zusammen mit [HTML](/de/docs/Glossary/HTML) und [JavaScript](/de/docs/Glossary/JavaScript). CSS wird normalerweise zur Gestaltung von [HTML-Elementen](/de/docs/Glossary/Element) verwendet, kann aber auch mit anderen Markup-Sprachen wie [SVG](/de/docs/Glossary/SVG) oder [XML](/de/docs/Glossary/XML) eingesetzt werden.

Eine CSS-Regel ist eine Gruppe von [Eigenschaften](/de/docs/Glossary/property/CSS), die mit einem [Selektor](/de/docs/Glossary/CSS_selector) verknüpft sind. Hier ist ein Beispiel, das jeden HTML-Absatz gelb auf schwarzem Hintergrund darstellt:

```css
/* The selector "p" indicates that all paragraphs in the document will be affected by that rule */
p {
  /* The "color" property defines the text color, in this case yellow. */
  color: yellow;

  /* The "background-color" property defines the background color, in this case black. */
  background-color: black;
}
```

"Cascading" bezieht sich auf die Regeln, die die Priorisierung von Selektoren bestimmen, um das Erscheinungsbild einer Seite zu ändern. Dies ist eine sehr wichtige Funktion, da eine komplexe Website Tausende von CSS-Regeln enthalten kann.

## Siehe auch

- [CSS lernen](/de/docs/Learn/CSS)
- [Die CSS-Dokumentation](/de/docs/Web/CSS)
- [CSS](https://en.wikipedia.org/wiki/CSS) auf Wikipedia
- [Die aktuelle Arbeit der CSS Working Group](https://www.w3.org/Style/CSS/current-work)
