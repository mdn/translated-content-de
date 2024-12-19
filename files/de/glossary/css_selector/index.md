---
title: Selektor (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Ein **CSS-Selektor** ist der Teil einer CSS-Regel, der beschreibt, auf welche Elemente in einem Dokument die Regel angewendet wird. Die übereinstimmenden Elemente erhalten den in der Regel angegebenen Stil.

## Beispiel

Betrachten Sie dieses CSS:

```css
p {
  color: green;
}

div.warning {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding: 0.8em 0.8em 0.6em;
}

#customized {
  font:
    16px Lucida Grande,
    Arial,
    Helvetica,
    sans-serif;
}
```

Die Selektoren hier sind `"p"` (der den Text innerhalb eines {{HTMLElement("p")}}-Elements grün einfärbt), `"div.warning"` (das jedem {{HTMLElement("div")}}-Element mit der [class](/de/docs/Web/HTML/Global_attributes/class) `"warning"` das Aussehen einer Warnbox verleiht) und `"#customized"`, das die Grundschriftart des Elements mit der ID `"customized"` auf 16 Pixel hohe Lucida Grande oder eine der wenigen Alternativschriftarten festlegt.

Wir können dieses CSS dann auf einige HTML-Elemente anwenden, wie zum Beispiel:

```html
<p>This is happy text.</p>

<div class="warning">
  Be careful! There are wizards present, and they are quick to anger!
</div>

<div id="customized">
  <p>This is happy text.</p>

  <div class="warning">
    Be careful! There are wizards present, and they are quick to anger!
  </div>
</div>
```

Der resultierende Seiteninhalt wird folgendermaßen gestaltet:

{{EmbedLiveSample("Example", 640, 240)}}

## Siehe auch

- [Erfahren Sie mehr über CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) in unserer Einführung in CSS.
- Grundlegende Selektoren

  - [Typselektoren](/de/docs/Web/CSS/Type_selectors) `elementname`
  - [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) `.classname`
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors) `#idname`
  - [Universalselektoren](/de/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [Zustandsselektoren](/de/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Gruppen von Selektoren

  - [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`

- Kombinatoren

  - [Nachbarselektoren](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [Darauffolgende Nachbarselektoren](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [Kindselektoren](/de/docs/Web/CSS/Child_combinator) `A > B`
  - [Nachfahrenselektoren](/de/docs/Web/CSS/Descendant_combinator) `A B`

- Pseudo

  - [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) `::`
