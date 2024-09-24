---
title: CSS (Cascading Style Sheets)
slug: Glossary/CSS
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**CSS** (Cascading Style Sheets) ist eine deklarative Sprache, die steuert, wie Webseiten im {{glossary("browser")}} aussehen.

Der Browser wendet CSS-Stildeklarationen auf ausgewählte Elemente an, um sie korrekt anzuzeigen. Eine Stildeklaration enthält die Eigenschaften und deren Werte, die bestimmen, wie eine Webseite aussieht.

CSS ist eine der drei Kerntechnologien des Webs, zusammen mit {{Glossary("HTML")}} und {{Glossary("JavaScript")}}. CSS wird normalerweise zur Gestaltung von {{Glossary("Element","HTML elements")}} verwendet, kann aber auch mit anderen Auszeichnungssprachen wie {{Glossary("SVG")}} oder {{Glossary("XML")}} eingesetzt werden.

Eine CSS-Regel ist eine Menge von {{Glossary("property/CSS","properties")}} in Verbindung mit einem {{Glossary("CSS selector", "selector")}}. Hier ist ein Beispiel, das jeden HTML-Absatz gelb auf einem schwarzen Hintergrund macht:

```css
/* Der Selektor "p" gibt an, dass alle Absätze im Dokument von dieser Regel betroffen sind */
p {
  /* Die Eigenschaft "color" definiert die Textfarbe, in diesem Fall gelb. */
  color: yellow;

  /* Die Eigenschaft "background-color" definiert die Hintergrundfarbe, in diesem Fall schwarz. */
  background-color: black;
}
```

"Styling" bezieht sich auf die Regeln, die bestimmen, wie Selektoren priorisiert werden, um das Erscheinungsbild einer Seite zu ändern. Dies ist eine sehr wichtige Funktion, da eine komplexe Website Tausende von CSS-Regeln haben kann.

## Siehe auch

- [CSS lernen](/de/docs/Learn/CSS)
- [Die CSS-Dokumentation](/de/docs/Web/CSS)
- [CSS](https://en.wikipedia.org/wiki/CSS) auf Wikipedia
- [Aktuelle Arbeiten der CSS-Arbeitsgruppe](https://www.w3.org/Style/CSS/current-work)
