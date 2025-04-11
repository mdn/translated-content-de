---
title: Selector (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Ein **CSS-Selector** ist der Teil einer CSS-Regel, der beschreibt, welche Elemente in einem Dokument die Regel anwenden sollen. Die passenden Elemente erhalten den in der Regel spezifizierten Stil.

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

Die Selektoren hier sind `"p"` (welcher die Farbe Grün auf den Text innerhalb eines {{HTMLElement("p")}}-Elements anwendet), `"div.warning"` (welches jedes {{HTMLElement("div")}}-Element mit der [Klasse](/de/docs/Web/HTML/Reference/Global_attributes/class) `"warning"` wie eine Warnbox aussehen lässt) und `"#customized"`, welches die Grundschriftart des Elements mit der ID `"customized"` auf 16 Pixel große Lucida Grande oder eine der wenigen Ersatzschriftarten setzt.

Wir können dann dieses CSS auf etwas HTML anwenden, wie z.B.:

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

Der resultierende Seiteninhalt wird so gestaltet:

{{EmbedLiveSample("Example", 640, 240)}}

## Siehe auch

- [Erfahren Sie mehr über CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) in unserer Einführung zu CSS.
- Grundlegende Selektoren

  - [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) `elementname`
  - [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors) `.classname`
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors) `#idname`
  - [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [Status-Selektoren](/de/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Gruppierungsselektoren

  - [Selektorenliste](/de/docs/Web/CSS/Selector_list) `A, B`

- Kombinatoren

  - [Nachfolgende-Geschwister-Selektoren](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [Weitere-Geschwister-Selektoren](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [Kind-Selektoren](/de/docs/Web/CSS/Child_combinator) `A > B`
  - [Nachfahren-Selektoren](/de/docs/Web/CSS/Descendant_combinator) `A B`

- Pseudo

  - [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) `::`
