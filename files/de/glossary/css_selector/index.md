---
title: Selektor (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Ein **CSS-Selektor** ist der Teil einer CSS-Regel, der beschreibt, welche Elemente in einem Dokument mit der Regel übereinstimmen. Die übereinstimmenden Elemente erhalten den in der Regel angegebenen Stil.

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

Die Selektoren hier sind `"p"` (welcher die Farbe Grün auf den Text innerhalb eines {{HTMLElement("p")}}-Elements anwendet), `"div.warning"` (welches jedes {{HTMLElement("div")}}-Element mit der [class](/de/docs/Web/HTML/Reference/Global_attributes/class) `"warning"` wie ein Warnfeld aussehen lässt), und `"#customized"`, welches die Basis-Schriftart des Elements mit der ID `"customized"` auf eine 16-Pixel hohe Lucida Grande oder eine der anderen angegebenen Ersatzschriften setzt.

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

Der resultierende Seiteninhalt wird folgendermaßen gestylt:

{{EmbedLiveSample("Example", 640, 240)}}

## Siehe auch

- [Erfahren Sie mehr über CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) in unserer Einführung in CSS.
- Grundlegende Selektoren
  - [Elementselektoren](/de/docs/Web/CSS/Type_selectors) `elementname`
  - [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) `.classname`
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors) `#idname`
  - [Universalselektoren](/de/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [Zustandsselektoren](/de/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Gruppierungsselektoren
  - [Selektorenliste](/de/docs/Web/CSS/Selector_list) `A, B`

- Kombinatoren
  - [Selektoren für direkte Nachfolger](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [Selektoren für nachfolgende Geschwister](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [Kindselektoren](/de/docs/Web/CSS/Child_combinator) `A > B`
  - [Nachfahrenselektoren](/de/docs/Web/CSS/Descendant_combinator) `A B`

- Pseudo
  - [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) `::`
