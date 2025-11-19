---
title: anchor-size()
slug: Web/CSS/Reference/Values/anchor-size
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht das Festlegen der [Größe](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#sizing_elements_based_on_anchor_size), [Position](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Ränder](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von positionsverankerten Elementen relativ zu den Dimensionen von Ankerelementen. Sie gibt die `<length>` einer angegebenen Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn es innerhalb des Werts der [Größen-, Einfüge- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values) von positionsverankerten Elementen verwendet wird.

Detaillierte Informationen zu Ankerfunktionen und deren Verwendung finden Sie auf der Modul-Startseite für [CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im [Verwenden von CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

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

Die Syntax der `anchor-size()` Funktion ist wie folgt:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}
  - : Der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name) Eigenschaftenwert eines Ankerelements, zu dem Sie die Größe, Position oder Ränder des Elements relativ festlegen möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verknüpft oder verankert kein Element mit einem Anker; es definiert lediglich, an welchem Anker die Eigenschaftswerte des Elements relativ festgelegt werden sollen.

- `<anchor-size>` {{optional_inline}}
  - : Gibt die Dimension des Ankerelements an, auf die die Eigenschaftswerte des positionierten Elements relativ festgelegt werden. Gültige Werte sind:
    - `width`
      - : Die Breite des Ankerelements.

    - `height`
      - : Die Höhe des Ankerelements.

    - `block`
      - : Die Länge des Ankerelements im [block direction](/de/docs/Web/CSS/Guides/Display/Containing_block).

    - `inline`
      - : Die Länge des Ankerelements in der Inline-Richtung.

    - `self-block`
      - : Die Länge des Ankerelements in der Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in der Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension standardmäßig auf den `<anchor-size>` Schlüsselbegriff gesetzt, der mit der Achse der Eigenschaft, in der die Funktion enthalten ist, übereinstimmt. Beispielsweise ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem der Fallback sonst verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, die Sie für die Eigenschaftswerte des positionierten Elements relativ festlegen, muss nicht entlang derselben Achse sein wie der festgelegte Größenwert. Beispielsweise ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, die Größen-, Position- und Randwerte eines positionierten Elements in Bezug auf die Abmessungen eines Ankerelements auszudrücken. Sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines spezifischen Ankerelements darstellt, zu dem die Eigenschaftswerte des positionierten Elements relativ festgelegt werden. Es ist ein gültiger Wert für [Größen-, Einfüge- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values) bei positionsverankerten Elementen.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines umgebenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse der Eigenschaft, auf der sie festgelegt wird. Zum Beispiel:

- `width: anchor-size()` ist gleichbedeutend mit `width: anchor-size(width)`.
- `top: anchor-size()` ist gleichbedeutend mit `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` ist gleichbedeutend mit `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` ist auch gleichbedeutend mit `margin-inline-end: anchor-size(width)` in horizontalen Schreibmodi oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibmodi.

Das als Grundlage für die Längenmaßangabe verwendete Ankerelement ist das Element mit dem im Parameter `<anchor-name>` angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn in der Funktionsaufruf kein `<anchor-name>` Parameter enthalten ist, wird der **Standardanker** des Elements verwendet, wie in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft referenziert oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet.

Wenn ein `<anchor-name>` Parameter enthalten ist und es keine Elemente mit diesem Ankernamen gibt, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten war, wird die Deklaration ignoriert. Wenn beispielsweise `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf das positionierte Element angegeben wurde, aber kein Anker namens `--foo` im DOM existiert, wäre die `width` `50px` und die `height` Deklaration hätte keine Wirkung.

Wenn ein Element Größen-, Position- oder Randwerte mit `anchor-size()` Werten festgelegt hat, aber kein positionsverankertes Element ist (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder hat keinen Anker über seine `position-anchor` Eigenschaft zugeordnet), wird der Fallback-Wert verwendet, wenn einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Wenn beispielsweise `width: anchor-size(width, 50px);` auf das positionierte Element angegeben wurde, aber kein Anker damit assoziiert war, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` hätte.

Detaillierte Informationen zu Ankerfunktionen und deren Verwendung finden Sie auf der Modul-Startseite für [CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im [Verwenden von CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Die Eigenschaften, die eine `anchor-size()` Funktion als Wert akzeptieren, umfassen:

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

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einschließen, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `anchor-size()` Verwendung

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()` Funktionen dimensioniert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um das Scrollen zu erfordern, aber dies wurde der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, sind mit dem Ankerelement über ihre {{cssxref("position-anchor")}} Eigenschaften verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf das Anker, um einen Referenzpunkt zu bieten, wenn die Dimensionen des positionierten Elements überprüft werden, zum Beispiel mit den Entwicklertools des Browsers:

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

- Die positionierten Elemente sind mit dem Anker durch verschiedene {{cssxref("position-area")}} Werte verbunden, die die Elemente an verschiedenen Stellen rund um das Ankerelement positionieren.
- Die {{cssxref("height")}} der ersten Infobox wird auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird auf das Doppelte der Breite des Ankerelements gesetzt, wobei die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox wird auf zwei Drittel der Höhe des Ankerelements gesetzt, wobei eine ähnliche Technik verwendet wird.
- Randwerte werden hinzugefügt, um eine gewisse Trennung vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die positionsverankerten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von etwa `66,7px` hat, wobei die `width` auf {{cssxref("max-content")}} voreingestellt ist.

### Beispiel für Position und Rand

Siehe [`anchor-size()` Beispiel für Position und Rand](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Verwenden von CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
