---
title: margin
slug: Web/CSS/margin
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Die **`margin`** [CSS](/de/docs/Web/CSS) Kurzschreibweise setzt den [Margin-Bereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf allen vier Seiten eines Elements.

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
  anchor-size(--myAnchor self-inline, 50px);

/* Keyword values */
margin: auto;

/* Global values */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

Die `margin`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist entweder ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder das Schlüsselwort `auto`. Negative Werte ziehen das Element näher an seine Nachbarn heran, als es standardmäßig der Fall wäre.

- Wenn **ein** Wert angegeben wird, gilt derselbe Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Rand für **oben**, der zweite für **rechts und links**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- {{cssxref("length")}}

  - : Die Größe des Rands als fester Wert.

    - Für _anker-positionierte Elemente_ löst die Funktion {{cssxref("anchor-size()")}} einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ aus (siehe [Setzen von Element-Rand basierend auf Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("percentage")}}
  - : Die Größe des Rands als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Rand. In bestimmten Fällen kann dieser Wert z.B. verwendet werden, um ein Element zu zentrieren.

## Beschreibung

Diese Eigenschaft kann verwendet werden, um einen Rand auf allen vier Seiten eines Elements festzulegen. Ränder schaffen zusätzlichen Raum _um_ ein Element herum, im Gegensatz zu {{cssxref("padding")}}, das zusätzlichen Raum _innerhalb_ eines Elements schafft.

Die oberen und unteren Ränder haben keine Wirkung bei _nicht-{{Glossary("Replaced_elements", "ersetzten")}}_ Inline-Elementen wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

### Horizontale Zentrierung

Sie können ein Element innerhalb seines übergeordneten Elements horizontal zentrieren, indem Sie `margin: 0 auto;` verwenden.

Eine häufigere Methode, ein Element horizontal zu zentrieren, besteht darin, `display: flex;` und [`justify-content: center;`](/de/docs/Web/CSS/justify-content) auf einem Container zu setzen, was dessen Flex-Item-Kinder [zentriert](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container).

### Margin-Kollaps

Die oberen und unteren Ränder von Elementen werden manchmal zu einem einzelnen Rand zusammengeführt, der dem größeren der beiden Ränder entspricht. Siehe [Beherrschung von Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) für weitere Informationen.

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
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzschreibweisen
- [Beherrschung von Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
