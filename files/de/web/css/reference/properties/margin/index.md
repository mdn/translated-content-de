---
title: "`margin` CSS-Eigenschaft"
short-title: margin
slug: Web/CSS/Reference/Properties/margin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`margin`** [CSS](/de/docs/Web/CSS) Kurzschreibweise legt den [Randbereich](/de/docs/Web/CSS/Guides/Box_model/Introduction#margin_area) auf allen vier Seiten eines Elements fest.

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

## Bestandteil-Eigenschaften

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

/* Keyword values */
margin: auto;

/* Global values */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

Die `margin`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`. Negative Werte ziehen das Element näher zu seinen Nachbarn, als es standardmäßig der Fall wäre.

- Wenn **ein** Wert angegeben ist, gilt dieser für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste für **oben**, der zweite für **rechts und links**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Werte für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("length")}}
  - : Die Größe des Randes als fester Wert.
    - Bei _ankerpositionierten Elementen_ löst die Funktion {{cssxref("anchor-size()")}} in einen {{cssxref("&lt;length&gt;")}} Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ auf (siehe [Festlegen des Randes basierend auf der Ankergröße](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("percentage")}}
  - : Die Größe des Randes als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Rand aus. Beispielsweise kann dieser Wert in bestimmten Fällen verwendet werden, um ein Element zu zentrieren.

## Beschreibung

Diese Eigenschaft kann verwendet werden, um einen Rand auf allen vier Seiten eines Elements einzustellen. Ränder schaffen zusätzlichen Platz _um_ ein Element herum, im Gegensatz zu {{cssxref("padding")}}, das zusätzlichen Platz _innerhalb_ eines Elements schafft.

Die oberen und unteren Ränder haben keine Auswirkung auf _nicht-{{Glossary("Replaced_elements", "ersetzte")}}_ Inline-Elemente, wie zum Beispiel {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

### Horizontale Zentrierung

Sie können ein Element horizontal innerhalb seines Elternteils zentrieren, indem Sie `margin: 0 auto;` festlegen.

Eine gebräuchlichere Methode, ein Element horizontal zu zentrieren, ist es, `display: flex;` und [`justify-content: center;`](/de/docs/Web/CSS/Reference/Properties/justify-content) auf einem Container festzulegen, wodurch [seine Flex-Element-Kinder](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) zentriert werden.

### Rand-Kollaps

Die oberen und unteren Ränder von Elementen werden manchmal zu einem einzigen Rand zusammengefasst, der dem größeren der beiden Ränder entspricht. Weitere Informationen finden Sie unter [Meisterung der Randzusammenführung](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

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

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- Kurzschreibweisen {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
- [Meisterung der Randzusammenführung](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
