---
title: CSS
slug: Glossary/CSS
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**CSS** (Cascading Style Sheets) ist eine deklarative Sprache, die steuert, wie Webseiten im {{Glossary("browser", "Browser")}} aussehen.

Der Browser wendet CSS-Stildeklarationen auf ausgewählte Elemente an, um sie korrekt darzustellen. Eine Stildeklaration enthält die Eigenschaften und deren Werte, die bestimmen, wie eine Webseite aussieht.

CSS ist eine der drei Kerntechnologien des Webs, zusammen mit {{Glossary("HTML", "HTML")}} und {{Glossary("JavaScript", "JavaScript")}}. CSS stylt normalerweise {{Glossary("Element", "HTML-Elemente")}}, kann aber auch mit anderen Auszeichnungssprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} verwendet werden.

Eine CSS-Regel ist eine Menge von {{Glossary("property/CSS", "Eigenschaften")}}, die mit einem {{Glossary("CSS_selector", "Selektor")}} verknüpft sind. Hier ist ein Beispiel, das jeden HTML-Absatz gelb auf einem schwarzen Hintergrund darstellt:

```css
/* The selector "p" indicates that all paragraphs in the document will be affected by that rule */
p {
  /* The "color" property defines the text color, in this case yellow. */
  color: yellow;

  /* The "background-color" property defines the background color, in this case black. */
  background-color: black;
}
```

"Cascading" bezieht sich auf die Regeln, die festlegen, wie Selektoren priorisiert werden, um das Aussehen einer Seite zu ändern. Dies ist eine sehr wichtige Funktion, da eine komplexe Website Tausende von CSS-Regeln haben kann.

## Siehe auch

- [CSS lernen](/de/docs/Learn_web_development/Core/Styling_basics)
- [Die CSS-Dokumentation](/de/docs/Web/CSS)
- [CSS](https://en.wikipedia.org/wiki/CSS) auf Wikipedia
- [Die aktuellen Arbeiten der CSS Working Group](https://www.w3.org/Style/CSS/current-work)
