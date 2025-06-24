---
title: Selektor (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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

Die Selektoren hier sind `"p"` (der die Farbe Grün auf den Text innerhalb eines {{HTMLElement("p")}}-Elements anwendet), `"div.warning"` (das jedes {{HTMLElement("div")}}-Element mit der [class](/de/docs/Web/HTML/Reference/Global_attributes/class) `"warning"` wie eine Warnbox aussehen lässt) und `"#customized"`, das die Grundschriftart des Elements mit der ID `"customized"` auf 16 Pixel hohe Lucida Grande oder eine der wenigen Ersatzschriftarten setzt.

Wir können dieses CSS dann auf etwas HTML anwenden, wie zum Beispiel:

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

Der resultierende Seiteninhalt ist wie folgt gestaltet:

{{EmbedLiveSample("Example", 640, 240)}}

## Siehe auch

- [Erfahren Sie mehr über CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) in unserer Einführung in CSS.
- Basis-Selektoren

  - [Typselektoren](/de/docs/Web/CSS/Type_selectors) `elementname`
  - [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) `.classname`
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors) `#idname`
  - [Universalselektoren](/de/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [Statusselektoren](/de/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Gruppierungs-Selektoren

  - [Selektorliste](/de/docs/Web/CSS/Selector_list) `A, B`

- Kombinatoren

  - [Nachfolgende Geschwister-Selektoren](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [Nachfolgende Geschwister-Selektoren](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [Kindselektoren](/de/docs/Web/CSS/Child_combinator) `A > B`
  - [Nachfahrenselektoren](/de/docs/Web/CSS/Descendant_combinator) `A B`

- Pseudo
  - [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) `::`
