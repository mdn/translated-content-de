---
title: CSS
slug: Glossary/CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

**CSS** (Cascading Style Sheets) ist eine deklarative Sprache, die steuert, wie Webseiten im {{Glossary("browser", "Browser")}} aussehen.

Der Browser wendet CSS-Stil-Deklarationen auf ausgewählte Elemente an, um sie korrekt anzuzeigen. Eine Stil-Deklaration enthält die Eigenschaften und ihre Werte, die bestimmen, wie eine Webseite aussieht.

CSS ist eine der drei Kerntechnologien des Webs, zusammen mit {{Glossary("HTML", "HTML")}} und {{Glossary("JavaScript", "JavaScript")}}. CSS dient in der Regel zur Gestaltung von {{Glossary("Element", "HTML-Elementen")}}, kann aber auch mit anderen Markup-Sprachen wie {{Glossary("SVG", "SVG")}} oder {{Glossary("XML", "XML")}} verwendet werden.

Eine CSS-Regel ist eine Sammlung von {{Glossary("property/CSS", "Eigenschaften")}} in Verbindung mit einem {{Glossary("CSS_selector", "Selektor")}}. Hier ist ein Beispiel, das jeden HTML-Absatz gelb auf einem schwarzen Hintergrund darstellt:

```css
/* The selector "p" indicates that all paragraphs in the document will be affected by that rule */
p {
  /* The "color" property defines the text color, in this case yellow. */
  color: yellow;

  /* The "background-color" property defines the background color, in this case black. */
  background-color: black;
}
```

„Cascading“ bezieht sich auf die Regeln, die bestimmen, wie Selektoren priorisiert werden, um das Erscheinungsbild einer Seite zu ändern. Dies ist ein sehr wichtiges Merkmal, da eine komplexe Website Tausende von CSS-Regeln enthalten kann.

## Siehe auch

- [CSS lernen](/de/docs/Learn_web_development/Core/Styling_basics)
- [Die CSS-Dokumentation](/de/docs/Web/CSS)
- [CSS](https://en.wikipedia.org/wiki/CSS) auf Wikipedia
- [Die aktuellen Arbeiten der CSS-Arbeitsgruppe](https://www.w3.org/Style/CSS/current-work)
