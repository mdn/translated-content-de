---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht das Setzen der Größe, der [Position](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und der [Ränder](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von ankerpositionierten Elementen relativ zu den Dimensionen von Ankerelementen. Sie gibt die `<length>` einer bestimmten Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn sie innerhalb des Werts von [Größen-, Einfüge- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values) ankerpositionierter Elemente verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung, siehe die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Anleitung zur Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Syntax

```css
/* sizing relative to anchor side */
width: anchor-size(width);
block-size: anchor-size(block);
height: calc(anchor-size(self-inline) + 2em);

/* sizing relative to named anchor's side */
width: anchor-size(--my-anchor width);
block-size: anchor-size(--my-anchor block);

/* sizing relative to named anchor's side with fallback */
width: anchor-size(--my-anchor width, 50%);
block-size: anchor-size(--my-anchor block, 200px);

/* positioning relative to anchor side */
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);

/* setting margin relative to anchor side */
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

### Parameter

Die Syntax der `anchor-size()`-Funktion lautet wie folgt:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}
  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name) Eigenschaft eines Ankerelements, relativ zu dem Sie die Größe, Position oder die Ränder des Elements einstellen möchten. Dies ist ein `<dashed-ident>` Wert. Wenn er weggelassen wird, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()`-Funktion verknüpft oder bindet ein Element nicht an einen Anker; es definiert lediglich, welchen Anker die Eigenschaftswerte des Elements relativ gesetzt werden sollen.

- `<anchor-size>` {{optional_inline}}
  - : Gibt die Dimension des Ankerelements an, relativ zu der die Eigenschaftswerte des positionierten Elements eingestellt werden. Gültige Werte sind:
    - `width`
      - : Die Breite des Ankerelements.

    - `height`
      - : Die Höhe des Ankerelements.

    - `block`
      - : Die Länge des [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`
      - : Die Länge des enthältenden Blocks des Ankerelements in Inline-Richtung.

    - `self-block`
      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter ausgelassen wird, ist die Dimension standardmäßig der `<anchor-size>`-Begriff, der zur Achse der Eigenschaft passt, in der die Funktion eingeschlossen ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall, in dem der Fallback sonst verwendet würde, nicht angegeben wird, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, die als Basis für die Eigenschaftswerte des positionierten Elements eingestellt wird, muss nicht entlang derselben Achse wie der eingestellte Größenwert sein. Zum Beispiel, `width: anchor-size(height)` ist gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()`-Funktion ermöglicht es, dass Größen-, Positions- und Rand-Werte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements ausgedrückt werden können; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines bestimmten Ankerelements darstellt, auf die sich die Eigenschaftswerte des positionierten Elements beziehen. Es ist ein gültiger Wert für bei ankerpositionierten Elementen gesetzte [Größen-, Einfüge- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values).

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthältenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>`-Parameter definiert. Wenn dieser Parameter ausgelassen wird, entspricht die verwendete Dimension der Achse der Größe, Position oder der Rand-Eigenschaft, auf die sie gesetzt wurde. Ein Beispiel:

- `width: anchor-size()` ist gleichbedeutend mit `width: anchor-size(width)`.
- `top: anchor-size()` ist gleichbedeutend mit `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` ist gleichbedeutend mit `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` ist auch gleichbedeutend mit `margin-inline-end: anchor-size(width)` in horizontalen Schreibmodi oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibmodi.

Das Ankerelement, das als Grundlage für die Dimensionalänge verwendet wird, ist das Element mit dem in der `<anchor-name>`-Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das zuletzt mit diesem Ankernamen im DOM-Ordnung stehende Element verwendet.

Wenn kein `<anchor-name>`-Parameter im Funktionsaufruf enthalten ist, wird der **Standardanker** des Elements, der in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft referenziert ist oder mit dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut verknüpft ist, verwendet.

Wenn ein `<anchor-name>`-Parameter enthalten ist und keine Elemente zu diesem Ankernamen passen, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten war, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wurde, aber kein Anker mit dem Namen `--foo` im DOM existiert, würde die `width` `50px` sein und die `height` Deklaration hätte keine Wirkung.

Wenn ein Element Größen-, Positions- oder Randeigenschaften mit `anchor-size()` Werten aufweist, aber kein ankerpositioniertes Element ist (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder hat keinen Anker damit über seine `position-anchor` Eigenschaft verbunden), wird der Fallback-Wert verwendet, wenn einer vorhanden ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wurde, aber kein Anker damit verbunden war, würde der Fallback-Wert verwendet, so dass `width` einen berechneten Wert von `50px` hätte.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung, siehe die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Anleitung zur Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()`-Funktionswerte akzeptieren

Die Eigenschaften, die eine `anchor-size()` Funktion als Wert akzeptieren, sind:

- Größen-Eigenschaften:
  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("max-height")}}
  - {{cssxref("block-size")}}
  - {{cssxref("inline-size")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
- Einfüge-Eigenschaften:
  - {{cssxref("bottom")}}
  - {{cssxref("left")}}
  - {{cssxref("right")}}
  - {{cssxref("top")}}
  - {{cssxref("inset")}} shorthand
  - {{cssxref("inset-block")}} shorthand
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline")}} shorthand
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-inline-start")}}
- Rand-Eigenschaften:
  - {{cssxref("margin")}} shorthand
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-block")}} shorthand
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}} shorthand
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}

### Verwendung von `anchor-size()` innerhalb von `calc()`

Die am häufigsten verwendeten `anchor-size()`-Funktionen beziehen sich einfach auf eine Dimension des Standardankers. Alternativ kann die `anchor-size()`-Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet werden, um die auf das positionierte Element angewendete Größe zu ändern.

Zum Beispiel, diese Regel setzt die Breite des positionierten Elements gleich der Breite des StandardAnkerelements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()`-Funktionen dimensioniert sind.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext ein, um den {{htmlelement("body")}} hoch genug zu machen, um ein Scrollen zu erfordern, aber dies wurde der Übersichtlichkeit halber ausgeblendet.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is the first infobox.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is the second infobox.</p>
</div>
```

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, werden über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verknüpft. Wir setzen außerdem absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker, um einen Bezugspunkt beim Überprüfen der Dimensionen der positionierten Elemente zu bieten, beispielsweise mit Browser-Entwicklerwerkzeugen:

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

body {
  width: 80%;
  margin: 0 auto;
}

.infobox {
  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #dddddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  width: 100px;
  height: 100px;
}

.infobox {
  position-anchor: --my-anchor;
  position: fixed;
}
```

Wir setzen einige unterschiedliche Eigenschaftswerte auf die positionierten Elemente:

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}} Werten an den Anker gebunden, die die Elemente an verschiedenen Stellen um das Ankerelement herum positionieren.
- Die {{cssxref("height")}} des ersten Infobox ist auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements ist auf das Doppelte der Breite des Ankerelements gesetzt, indem die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox ist auf zwei Drittel der Ankerhöhe gesetzt, unter Verwendung einer ähnlichen Technik.
- Randwerte sind enthalten, um etwas Abstand vom Ankerelement zu bieten.

```css
#infobox1 {
  position-area: right;
  height: anchor-size(height);
  width: calc(anchor-size(width) * 2);
  margin-left: 5px;
}

#infobox2 {
  position-area: top span-right;
  height: calc(anchor-size(height) / 1.5);
  margin-bottom: 5px;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

Verwenden Sie Ihre Browser-Werkzeuge, um die ankerpositionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von etwa `66,7px` hat, wobei die `width` auf {{cssxref("max-content")}} standardmäßig gesetzt ist.

### Beispiel für Position und Rand

Siehe [`anchor-size()` Beispiel für Position und Rand](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Anleitung zur Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
