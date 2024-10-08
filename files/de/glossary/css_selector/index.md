---
title: Selector (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{GlossarySidebar}}

Ein **CSS-Selector** ist der Teil einer CSS-Regel, der beschreibt, auf welche Elemente in einem Dokument die Regel angewendet wird. Die übereinstimmenden Elemente erhalten den in der Regel angegebenen Stil.

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

Die Selektoren hier sind `"p"` (die die Farbe Grün auf den Text in jedem {{HTMLElement("p")}}-Element anwenden), `"div.warning"` (das jedes {{HTMLElement("div")}}-Element mit der [class](/de/docs/Web/HTML/Global_attributes/class) `"warning"` wie eine Warnbox aussehen lässt) und `"#customized"`, das die Basis-Schriftart des Elements mit der ID `"customized"` auf 16 Pixel hohe Lucida Grande oder eine der wenigen Alternativ-Schriftarten einstellt.

Wir können dann dieses CSS auf ein HTML anwenden, wie zum Beispiel:

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

- [Erfahren Sie mehr über CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) in unserer Einführung in CSS.
- Grundlegende Selektoren

  - [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) `elementname`
  - [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors) `.classname`
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors) `#idname`
  - [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [Zustandsselektoren](/de/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Gruppierungsselektoren

  - [Selector-Liste](/de/docs/Web/CSS/Selector_list) `A, B`

- Kombinatoren

  - [Nachbarselektoren](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [Nachfolgende-Nachbarselektoren](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [Kindselektoren](/de/docs/Web/CSS/Child_combinator) `A > B`
  - [Nachfahren-Selektoren](/de/docs/Web/CSS/Descendant_combinator) `A B`

- Pseudo

  - [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) `::`
