---
title: Selektor (CSS)
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

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

Die Selektoren hier sind `"p"` (welcher den Text innerhalb eines {{HTMLElement("p")}}-Elements grün färbt), `"div.warning"` (der ein {{HTMLElement("div")}}-Element mit der [class](/de/docs/Web/HTML/Reference/Global_attributes/class) `"warning"` wie eine Warnbox erscheinen lässt) und `"#customized"`, welches die Basis-Schriftgröße des Elements mit der ID `"customized"` auf 16 Pixel große Lucida Grande oder eine der wenigen Ausweichschriften setzt.

Wir können dieses CSS dann auf einige HTML-Dokumente anwenden, wie zum Beispiel:

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

Der resultierende Seiteninhalt sieht dann so aus:

{{EmbedLiveSample("Example", 640, 240)}}

## Siehe auch

- [Erfahren Sie mehr über CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) in unserer Einführung in CSS.
- Grundlegende Selektoren
  - [Typen-Selektoren](/de/docs/Web/CSS/Type_selectors) `elementname`
  - [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors) `.classname`
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors) `#idname`
  - [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [Zustand-Selektoren](/de/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Gruppierte Selektoren
  - [Selektor-Liste](/de/docs/Web/CSS/Selector_list) `A, B`

- Kombinatoren
  - [Direkt-Nachbarselektoren](/de/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [Nachfolgende Geschwister-Selektoren](/de/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [Kinder-Selektoren](/de/docs/Web/CSS/Child_combinator) `A > B`
  - [Nachfahren-Selektoren](/de/docs/Web/CSS/Descendant_combinator) `A B`

- Pseudo
  - [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) `::`
