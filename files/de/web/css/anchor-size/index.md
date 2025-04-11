---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Festlegen von Größe, [Position](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Abständen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von ankerpositionierten Elementen relativ zu den Dimensionen von Ankerelementen. Sie gibt die `<length>` einer angegebenen Seite des Zielanker-Elements zurück. `anchor-size()` ist nur gültig, wenn es im Wert von Anker-Positionselementen für [Größen-, Einfüge- und Abstandseigenschaften](#properties_that_accept_anchor-size_function_values) verwendet wird.

Für detaillierte Informationen zu Anker-Funktionen und deren Verwendung siehe die [CSS-Ankerpositionierungsmodul-Seite](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Syntax

```css
/* sizing relative to anchor side */
width: anchor-size(width);
block-size: anchor-size(block);
height: calc(anchor-size(self-inline) + 2em);

/* sizing relative to named anchor's side */
width: anchor-size(--myAnchor width);
block-size: anchor-size(--myAnchor block);

/* sizing relative to named anchor's side with fallback */
width: anchor-size(--myAnchor width, 50%);
block-size: anchor-size(--myAnchor block, 200px);

/* positioning relative to anchor side */
left: anchor-size(width);
inset-inline-end: anchor-size(--myAnchor height, 100px);

/* setting margin relative to anchor side */
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--myAnchor self-block, 20px);
```

### Parameter

Die Syntax der `anchor-size()`-Funktion ist wie folgt:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft eines Ankerelements, relativ zu dem Sie die Größe, Position oder Abstände des Elements festlegen möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor-size()`-Funktion verknüpft oder bindet ein Element nicht an einen Anker; es definiert lediglich, relativ zu welchem Anker die Eigenschaftswerte des Elements gesetzt werden sollen.

- `<anchor-size>` {{optional_inline}}

  - : Gibt die Dimension des Ankerelements an, relativ zu dem die Eigenschaftswerte des positionierten Elements festgelegt werden. Gültige Werte sind:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des [Enthaltenen Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`

      - : Die Länge des Enthaltenen Blocks des Ankerelements in Inline-Richtung.

    - `self-block`

      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension standardmäßig auf den `<anchor-size>`-Begriff gesetzt, der der Achse der Eigenschaft entspricht, in der die Funktion enthalten ist. Zum Beispiel, `width: anchor-size();` entspricht `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Fallbackwert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter weggelassen wird, wenn der Fallback ansonsten verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, relativ zu der Sie die Eigenschaftswerte des positionierten Elements setzen, muss nicht entlang derselben Achse wie der festgelegte Größenwert sein. Zum Beispiel, `width: anchor-size(height)` ist gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor-size()`-Funktion ermöglicht es, dass die Größen-, Positions- und Abstands-Werte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements ausgedrückt werden; sie gibt einen {{cssxref("length")}}-Wert zurück, der die Dimension eines spezifischen Ankerelements repräsentiert, relativ zu dem die Eigenschaftswerte des positionierten Elements gesetzt werden. Es ist ein gültiger Wert für [Größen-, Einfüge- und Abstandseigenschaften](#properties_that_accept_anchor-size_function_values), die auf ankerpositionierten Elementen gesetzt sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthaltenen Blocks. Die verwendete Dimension wird durch den `<anchor-size>`-Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse der Größen-, Positions- oder Abstandseigenschaft, auf der sie gesetzt ist. Zum Beispiel:

- `width: anchor-size()` entspricht `width: anchor-size(width)`.
- `top: anchor-size()` entspricht `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` entspricht `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` entspricht auch `margin-inline-end: anchor-size(width)` in horizontalen Schreibmodi oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibmodi.

Das Ankerelement, das als Grundlage für die Dimensionenlänge genutzt wird, ist das Element mit dem im `<anchor-name>`-Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>`-Parameter in dem Funktionsaufruf enthalten ist, wird der **Standardanker** des Elements, referenziert in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft oder assoziiert mit dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut, verwendet.

Wenn ein `<anchor-name>`-Parameter enthalten ist und es keine Elemente gibt, die diesem Ankernamen entsprechen, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten war, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wurde, aber kein Anker namens `--foo` im DOM existiert, würde die `width` `50px` sein und die `height`-Deklaration hätte keinen Effekt.

Wenn ein Element Größen-, Positions- oder Abstandseigenschaften mit `anchor-size()`-Werten darauf gesetzt hat, aber kein ankerpositioniertes Element ist (es hat seine {{cssxref("position")}}-Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder ist nicht über seine `position-anchor`-Eigenschaft mit einem Anker assoziiert), wird der Fallback-Wert verwendet, wenn einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wurde, aber kein Anker damit assoziiert war, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS-Ankerpositionierungsmodul-Seite](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()`-Funktionswerte akzeptieren

Die Eigenschaften, die eine `anchor-size()`-Funktion als Wert akzeptieren, umfassen:

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
- Einfügeeigenschaften:
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
- Abstandseigenschaften:
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

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um die auf das positionierte Element angewendete Größe zu ändern.

Zum Beispiel, diese Regel setzt die Breite des positionierten Elements gleich der Breite des Standardanker-Elements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements auf das 4-fache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}}-Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit Hilfe von `anchor-size()`-Funktionen dimensioniert sind.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und die zwei `infobox`-Elemente, die wir relativ zum Anker positionieren. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, dass ein Scrollen notwendig ist, aber dies wurde der Kürze halber weggelassen.

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

Wir deklarieren das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}}-Eigenschaften auf `fixed` gesetzt sind, sind über ihre {{cssxref("position-anchor")}}-Eigenschaften mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf den Anker, um einen Referenzpunkt beim Überprüfen der Dimensionen der positionierten Elemente zu bieten, zum Beispiel mit Browser-Entwicklertools:

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
  outline: 1px solid #ddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
  width: 100px;
  height: 100px;
}

.infobox {
  position-anchor: --myAnchor;
  position: fixed;
}
```

Wir setzen einige unterschiedliche Eigenschaftswerte auf den positionierten Elementen:

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}}-Werten an den Anker gebunden, die die Elemente an verschiedenen Stellen um das Ankerelement herum positionieren.
- Die {{cssxref("height")}} der ersten Infobox ist auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements ist mit der `anchor-size()`-Funktion innerhalb einer {{cssxref("calc()")}}-Funktion auf das Doppelte der Breite des Ankerelements gesetzt: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox ist auf zwei Drittel der Höhe des Ankerelements gesetzt, unter Verwendung einer ähnlichen Technik.
- Abstandswerte werden hinzugefügt, um etwas Abstand vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die ankerpositionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von etwa `66,7px` haben wird, wobei die `width` standardmäßig auf {{cssxref("max-content")}} gesetzt ist.

### Beispiel für Position und Abstand

Siehe [`anchor-size()` Position und Abstand Beispiel](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
