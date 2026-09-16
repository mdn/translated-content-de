---
title: CSS-Eigenschaft `margin`
short-title: margin
slug: Web/CSS/Reference/Properties/margin
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Kurzschreibweise **`margin`** legt den [Außenabstandsbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#margin_area) auf allen vier Seiten eines Elements fest.

{{InteractiveExample("CSS Demo: margin")}}

```css interactive-example-choice
margin: 1em;
```

```css interactive-example-choice
margin: 5% 0;
```

```css interactive-example-choice
margin: 10px 50px 20px;
```

```css interactive-example-choice
margin: 10px 50px 20px 0;
```

```css interactive-example-choice
margin: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row"></div>
    <div class="row transition-all" id="example-element"></div>
    <div class="row"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

## Syntax

```css
/* apply to all four sides */
margin: 1em;
margin: -3px;

/* top and bottom | left and right */
margin: 5% auto;

/* top | left and right | bottom */
margin: 1em auto 2em;

/* top | right | bottom | left */
margin: 2px 1em 0 auto;

/* anchor-size() values */
margin: 5% anchor-size(width);
margin: calc(anchor-size(width) / 4) 1em 0
  anchor-size(--my-anchor self-inline, 50px);

/* Keyword value */
margin: auto;

/* Global values */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

Die Eigenschaft `margin` kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder das Schlüsselwort `auto`. Negative Werte rücken das Element näher an seine Nachbarelemente heran, als es standardmäßig der Fall wäre.

- Wenn **ein** Wert angegeben wird, legt er denselben Außenabstand für **alle vier Seiten** fest.
- Wenn **zwei** Werte angegeben werden, gilt der erste Außenabstand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Außenabstand für **oben**, der zweite für **rechts und links**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Außenabstände in dieser Reihenfolge für **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- {{cssxref("length")}}
  - : Die Größe des Außenabstands als fester Wert.
    - Bei _ankerpositionierten Elementen_ wird die Funktion {{cssxref("anchor-size()")}} zu einem {{cssxref("&lt;length&gt;")}}-Wert aufgelöst, der relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ ist (siehe [Festlegen des Elementaußenabstands basierend auf der Ankergröße](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("percentage")}}
  - : Die Größe des Außenabstands als Prozentsatz relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten zu verwendenden Außenabstand aus. Beispielsweise kann dieser Wert in bestimmten Fällen verwendet werden, um ein Element zu zentrieren.

## Beschreibung

Diese Eigenschaft kann verwendet werden, um einen Außenabstand auf allen vier Seiten eines Elements festzulegen. Außenabstände erzeugen zusätzlichen Platz _um_ ein Element herum, im Gegensatz zu {{cssxref("padding")}}, das zusätzlichen Platz _innerhalb_ eines Elements erzeugt.

Die oberen und unteren Außenabstände haben keine Wirkung auf _nicht {{Glossary("Replaced_elements", "ersetzte")}}_ Inline-Elemente wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

### Horizontale Zentrierung

Sie können ein Element innerhalb seines Elternelements horizontal zentrieren, indem Sie `margin: 0 auto;` festlegen.

Eine gebräuchlichere Methode, ein Element horizontal zu zentrieren, besteht darin, für einen Container `display: flex;` und [`justify-content: center;`](/de/docs/Web/CSS/Reference/Properties/justify-content) festzulegen, wodurch dessen Flex-Item-Kinder [zentriert werden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items).

### Zusammenfallen von Außenabständen

Die oberen und unteren Außenabstände von Elementen werden manchmal zu einem einzigen Außenabstand zusammengefasst, der dem größeren der beiden Außenabstände entspricht. Weitere Informationen finden Sie unter [Das Zusammenfallen von Außenabständen verstehen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<div class="center">This element is centered.</div>

<div class="outside">This element is positioned outside of its container.</div>
```

#### CSS

```css
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{ EmbedLiveSample('Basic_example','100%',120) }}

### Weitere Beispiele

```css
margin: 5%; /* All sides: 5% margin */

margin: 10px; /* All sides: 10px margin */

margin: 1.6em 20px; /* top and bottom: 1.6em margin */
/* left and right: 20px margin */

margin: 10px 3% -1em; /* top:            10px margin */
/* left and right: 3% margin   */
/* bottom:         -1em margin */

margin: 10px 3px 30px 5px; /* top:    10px margin */
/* right:  3px margin  */
/* bottom: 30px margin */
/* left:   5px margin  */

margin: 2em auto; /* top and bottom: 2em margin   */
/* Box is horizontally centered */

margin: auto; /* top and bottom: 0 margin     */
/* Box is horizontally centered */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} und {{cssxref("margin-left")}}
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} und {{cssxref("margin-inline-end")}}
- Die Kurzschreibweisen {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
- [Das Zusammenfallen von Außenabständen verstehen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- Leitfaden [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- Modul [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
