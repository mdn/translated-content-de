---
title: Selector (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Ein **CSS-Selektor** ist der Teil einer CSS-Regel, der beschreibt, auf welche Elemente in einem Dokument die Regel angewendet wird. Den übereinstimmenden Elementen wird der in der Regel festgelegte Stil zugewiesen.

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
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

Die Selektoren hier sind `"p"` (der die Farbe Grün auf den Text innerhalb eines {{HTMLElement("p")}}-Elements anwendet), `"div.warning"` (der ein {{HTMLElement("div")}}-Element mit der [class](/de/docs/Web/HTML/Reference/Global_attributes/class) `"warning"` wie ein Warnfeld aussehen lässt), und `"#customized"`, der die Basis-Schriftart des Elements mit der ID `"customized"` auf 16 Pixel große Lucida Grande oder eine der wenigen Ersatzschriftarten setzt.

Wir können dieses CSS dann auf ein HTML anwenden, wie zum Beispiel:

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

Der resultierende Seiteninhalt wird folgendermaßen gestylt:

{{EmbedLiveSample("Example", 640, 240)}}

## Siehe auch

- [Mehr über CSS-Selektoren erfahren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) in unserer Einführung in CSS.
- Grundlegende Selektoren
  - [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) `elementname`
  - [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) `.classname`
  - [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) `#idname`
  - [Universalselektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) `* ns|* *|*`
  - [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=value]`
  - [Zustandsselektoren](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `a:active, a:visited`

- Gruppierungsselektoren
  - [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`

- Kombinatoren
  - [Nachbarselektoren](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - [Folgeschwesterselektoren](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - [Kindselektoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - [Nachkommenselektoren](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`

- Pseudo
  - [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
