---
title: anchor-size()
slug: Web/CSS/Reference/Values/anchor-size
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht das Setzen der Größe, [Position](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Abstände](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von ankerpositionierten Elementen relativ zu den Abmessungen von Ankerelementen. Sie gibt die \<length> einer angegebenen Seite des Zielanker-Elements zurück. `anchor-size()` ist nur gültig, wenn es innerhalb der Werte von [Größen-, Einfüge- und Abstandseigenschaften](#properties_that_accept_anchor-size_function_values) ankerpositionierter Elemente verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Anleitung zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

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
  - : Der Wert der {{cssxref("anchor-name")}} Eigenschaft eines Ankerelements, auf das Sie die Größe, Position oder Abstände des Elements relativ einstellen möchten. Dies ist ein `<dashed-ident>` Wert. Falls weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verknüpft oder bindet ein Element nicht an einen Anker; es definiert lediglich, auf welchen Anker sich die Eigenschaftswerte des Elements beziehen sollen.

- `<anchor-size>` {{optional_inline}}
  - : Gibt die Dimension des Ankerelements an, zu der die Eigenschaftswerte des positionierten Elements relativ eingestellt werden. Gültige Werte sind:
    - `width`
      - : Die Breite des Ankerelements.

    - `height`
      - : Die Höhe des Ankerelements.

    - `block`
      - : Die Länge des [containing block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`
      - : Die Länge des containing block des Ankerelements in Inlinerichtung.

    - `self-block`
      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inlinerichtung.

    > [!NOTE]
    > Falls dieser Parameter weggelassen wird, wird die Dimension auf den `<anchor-size>` Schlüsselbegriff gesetzt, der zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel entspricht `width: anchor-size();` der Angabe `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem der Fallback sonst verwendet werden würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie die Eigenschaftswerte des positionierten Elements relativ setzen, muss nicht entlang der gleichen Achse wie der festgelegte Wert liegen. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, die Größen-, Positions- und Abstandswerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements auszudrücken; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines bestimmten Ankerelements darstellt, zu der die Eigenschaftswerte des positionierten Elements relativ gesetzt sind. Es ist ein gültiger Wert für [Größen-, Einfüge- und Abstandseigenschaften](#properties_that_accept_anchor-size_function_values) auf ankerpositionierten Elementen.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines containing block. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, passt die verwendete Dimension zur Achse der Eigenschaft für Größe, Position oder Abstand, auf der sie gesetzt ist. Zum Beispiel:

- `width: anchor-size()` entspricht `width: anchor-size(width)`.
- `top: anchor-size()` entspricht `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` entspricht `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` entspricht auch `margin-inline-end: anchor-size(width)` in horizontalen Schreibrichtungen oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibrichtungen.

Das Ankerelement, das als Grundlage für die Dimensionslänge verwendet wird, ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>` Parameter im Funktionsaufruf enthalten ist, wird der **Standardanker** des Elements verwendet, der in seiner {{cssxref("position-anchor")}} Eigenschaft referenziert ist oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML Attribut zugeordnet ist.

Wenn ein `<anchor-name>` Parameter enthalten ist und keine Elemente mit diesem Ankernamen übereinstimmen, wird der Fallback-Wert verwendet. Wenn kein Fallback angegeben wurde, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wäre, aber kein Anker namens `--foo` im DOM existiert, wäre die `width` `50px` und die `height` Deklaration hätte keinen Effekt.

Wenn ein Element Größen-, Positions- oder Abstandseigenschaften mit auf ihnen gesetzten `anchor-size()` Werten hat, aber kein ankerpositioniertes Element ist (es hat nicht die {{cssxref("position")}} Eigenschaft auf `absolute` oder `fixed` gesetzt oder ist nicht über seine `position-anchor` Eigenschaft mit einem Anker verbunden), wird der Fallback-Wert verwendet, falls einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wäre, aber kein Anker damit verbunden war, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Anleitung zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Die Eigenschaften, die eine `anchor-size()` Funktion als Wert akzeptieren, sind:

- Größeneigenschaften:
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
- Randeigenschaften:
  - {{cssxref("bottom")}}
  - {{cssxref("left")}}
  - {{cssxref("right")}}
  - {{cssxref("top")}}
  - {{cssxref("inset")}} verkürzt
  - {{cssxref("inset-block")}} verkürzt
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline")}} verkürzt
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-inline-start")}}
- Abständeigenschaften:
  - {{cssxref("margin")}} verkürzt
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-block")}} verkürzt
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}} verkürzt
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}

### Verwendung von `anchor-size()` innerhalb von `calc()`

Die am häufigsten verwendeten `anchor-size()` Funktionen beziehen sich nur auf eine Dimension des Standardankers. Alternativ kann die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion verwendet werden, um die dem positionierten Element zugeordnete Größe zu modifizieren.

Beispielsweise wird durch diese Regel die Breite des positionierten Elements gleich der Breite des Standardanker-Elements gemacht:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements auf das 4-fache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion durchgeführt wird:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und unter Verwendung von `anchor-size()` Funktionen dimensioniert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die beiden `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um das Scrollen zu erzwingen, aber dieser wurde zur Kürze versteckt.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, sind über deren {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker, um einen Bezugspunkt beim Überprüfen der Dimensionen des positionierten Elements zu bieten, zum Beispiel mit den Entwicklerwerkzeugen des Browsers:

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

Wir setzen einige unterschiedliche Eigenschaftswerte auf den positionierten Elementen:

- Die positionierten Elemente sind mit dem Anker über verschiedene {{cssxref("position-area")}} Werte verbunden, die die Elemente an verschiedenen Orten um das Ankerelement herum positionieren.
- Die {{cssxref("height")}} des ersten Infokastens wird auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements ist auf das Doppelte der Breite des Ankerelements eingestellt, indem die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die anschließend mit zwei multipliziert wird.
- Die {{cssxref("height")}} des zweiten Infokastens ist auf zwei Drittel der Höhe des Ankerelements eingestellt, indem eine ähnliche Technik verwendet wird.
- Es sind Randwerte enthalten, um eine gewisse Trennung vom Ankerelement zu bieten.

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

Verwenden Sie Ihre Browser-Tools, um die ankerpositionierten Elemente zu inspizieren. Der erste Infokasten wird `100px` hoch und `200px` breit sein, während der zweite Infokasten eine Höhe von etwa `66,7px` haben wird, wobei die `width` auf {{cssxref("max-content")}} voreingestellt ist.

### Beispiel für Position und Abstand

Siehe [`anchor-size()` Beispiel für Position und Abstand](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} function
- [Anleitung zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
