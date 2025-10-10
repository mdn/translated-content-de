---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es, die Größe, [Position](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Abstände](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von ankerpositionierten Elementen relativ zu den Abmessungen von Ankerelementen einzustellen. Sie gibt die \<length> einer bestimmten Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn sie innerhalb des Wertes der Größen-, Inset- und Rand-Eigenschaften von ankerpositionierten Elementen verwendet wird.

Für ausführliche Informationen zu Ankerfunktionen und deren Verwendung, sehen Sie sich die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul-Startseite und den [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) an.

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
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaftenwert eines Ankerelements, zu dem Sie die Größe, Position oder Abstände des Elements relativ einstellen möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()`-Funktion verknüpft oder koppelt ein Element nicht mit einem Anker; es definiert lediglich, zu welchem Anker die Werte der Element-Eigenschaften relativ gesetzt werden sollen.

- `<anchor-size>` {{optional_inline}}
  - : Gibt die Dimension des Ankerelements an, zu der die Eigenschaftswerte des positionierten Elements relativ eingestellt werden. Gültige Werte sind:
    - `width`
      - : Die Breite des Ankerelements.

    - `height`
      - : Die Höhe des Ankerelements.

    - `block`
      - : Die Länge des [Enthaltungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`
      - : Die Länge des Enthaltungsblocks des Ankerelements in Inline-Richtung.

    - `self-block`
      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, ist die Dimension standardmäßig der `<anchor-size>`-Schlüsselbegriff, der zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichwertig mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fix positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem der Fallback sonst verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie die Eigenschaftswerte des positionierten Elements relativ setzen, muss nicht entlang derselben Achse wie der eingestellte Größenwert verlaufen. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor-size()`-Funktion ermöglicht es, die Größen-, Positions- und Randwerte eines positionierten Elements in Bezug auf die Abmessungen eines Ankerelements auszudrücken; sie gibt einen {{cssxref("length")}}-Wert zurück, der die Dimension eines bestimmten Ankerelements darstellt, zu dem die Eigenschaftswerte des positionierten Elements relativ gesetzt werden. Es ist ein gültiger Wert für [Größen-, Inset- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values), die auf ankerpositionierten Elementen gesetzt sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines Enthaltungsblocks. Die verwendete Dimension wird durch den `<anchor-size>`-Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse der Größen-, Positions- oder Rand-Eigenschaft, auf die sie gesetzt ist. Beispielsweise:

- `width: anchor-size()` ist gleichwertig mit `width: anchor-size(width)`.
- `top: anchor-size()` ist gleichwertig mit `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` ist gleichwertig mit `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` ist auch gleichwertig mit `margin-inline-end: anchor-size(width)` in horizontalen Schreibrichtungen oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibrichtungen.

Das Ankerelement, das als Basis für die Dimensionlänge verwendet wird, ist das Element mit dem im `<anchor-name>`-Parameter angegebenen Ankernamen. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>`-Parameter im Funktionsaufruf enthalten ist, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut mit dem Element verknüpft ist.

Wenn ein `<anchor-name>`-Parameter enthalten ist und es keine Elemente gibt, die diesem Ankernamen entsprechen, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten war, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf das positionierte Element angegeben wurde, aber kein Anker mit dem Namen `--foo` in der DOM existiert, würde die `width` auf `50px` gesetzt, und die `height`-Deklaration hätte keine Wirkung.

Wenn ein Element Größen-, Positions- oder Randeigenschaften mit `anchor-size()`-Werten gesetzt hat, es jedoch kein ankerpositioniertes Element ist (es hat seine {{cssxref("position")}}-Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder hat keinen Anker über seine `position-anchor`-Eigenschaft verknüpft), wird der Fallback-Wert verwendet, wenn einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf das positionierte Element angegeben wurde, aber kein Anker damit verknüpft wurde, wird der Fallback-Wert verwendet, sodass die `width` einen berechneten Wert von `50px` erhält.

Für ausführliche Informationen zu Ankerfunktionen und deren Verwendung, sehen Sie sich die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul-Startseite und den [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) an.

### Eigenschaften, die `anchor-size()`-Funktionswerte akzeptieren

Die Eigenschaften, die eine `anchor-size()`-Funktion als Wert akzeptieren, umfassen:

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
- Inset-Eigenschaften:
  - {{cssxref("bottom")}}
  - {{cssxref("left")}}
  - {{cssxref("right")}}
  - {{cssxref("top")}}
  - {{cssxref("inset")}} Kurzform
  - {{cssxref("inset-block")}} Kurzform
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline")}} Kurzform
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-inline-start")}}
- Rand-Eigenschaften:
  - {{cssxref("margin")}} Kurzform
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-block")}} Kurzform
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}} Kurzform
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}

### Verwendung von `anchor-size()` innerhalb von `calc()`

Die am häufigsten verwendeten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Alternativ schließen Sie die `anchor-size()`-Funktion in eine {{cssxref("calc")}}-Funktion ein, um die auf das positionierte Element angewandte Größe zu ändern.

Zum Beispiel, diese Regel setzt die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}}-Funktion durchgeführt wird:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert sind und mit `anchor-size()`-Funktionen dimensioniert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und die beiden `infobox`-Elemente, die wir relativ zum Anker positionieren. Wir fügen auch Fülltext ein, um den {{htmlelement("body")}} hoch genug zu machen, um ein Scrollen zu erfordern, aber dies wurde der Kürze halber versteckt.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}}-Eigenschaften auf `fixed` gesetzt sind, werden über ihre {{cssxref("position-anchor")}}-Eigenschaften mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf den Anker, um einen Bezugspunkt bei der Überprüfung der Dimensionen der positionierten Elemente bereitzustellen, beispielsweise mit Browser-Entwicklertools:

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

Wir setzen einige unterscheidbare Eigenschaftswerte auf die positionierten Elemente:

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}}-Werten an den Anker gebunden, die die Elemente an verschiedenen Stellen um das Ankerelement herum positionieren.
- Die {{cssxref("height")}} der ersten Infobox hat dieselbe Höhe wie das Ankerelement: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird auf das Doppelte der Breite des Ankerelements gesetzt, indem die `anchor-size()`-Funktion innerhalb einer {{cssxref("calc()")}}-Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mal zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox ist auf zwei Drittel der Höhe des Ankerelements gesetzt, mit einer ähnlichen Technik.
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

Benutzen Sie Ihre Browserwerkzeuge, um die ankerpositionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von etwa `66.7px` haben wird und die `width` standardmäßig auf {{cssxref("max-content")}} gesetzt ist.

### Positions- und Randbeispiel

Siehe [`anchor-size()` Positions- und Randbeispiel](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
