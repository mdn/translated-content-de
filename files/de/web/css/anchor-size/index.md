---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: da659b5d4f75b66804d97c80ec7c89b8792d7389
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht das Setzen der [Größe](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size), [Position](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Abstände](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von anchor-positionierten Elementen relativ zu den Dimensionen der Ankerelemente. Sie gibt die `<length>` einer angegebenen Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn es im Wert von anchor-positionierten Elementen für [Größen-, Versatz- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values) verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

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

Die Syntax der `anchor-size()` Funktion ist wie folgt:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, zu dem Sie die Größe, Position oder Abstände des Elements relativ setzen möchten. Dies ist ein `<dashed-ident>` Wert. Wenn dieser weggelassen wird, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verbindet oder verknüpft ein Element nicht mit einem Anker; sie definiert nur, auf welchen Anker die Eigenschaftswerte des Elements relativ eingestellt werden sollen.

- `<anchor-size>` {{optional_inline}}

  - : Gibt die Dimension des Ankerelements an, zu dem die Eigenschaftswerte des positionierten Elements relativ gesetzt werden. Gültige Werte sind:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des [enthältenen Blocks](/de/docs/Web/CSS/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`

      - : Die Länge des enthältenen Blocks des Ankerelements in Inlinerichtung.

    - `self-block`

      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inlinerichtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird als Dimension standardmäßig der `<anchor-size>` Schlüsselbegriff verwendet, der zu der Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fix positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem der Fallback sonst verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie die Eigenschaftswerte des positionierten Elements relativ setzen, muss nicht entlang der gleichen Achse wie der zu setzende Größenwert verlaufen. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, die Größen-, Positions- und Randwerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements auszudrücken; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines spezifischen Ankerelements darstellt, zu dem die Eigenschaftswerte des positionierten Elements relativ sind. Es ist ein gültiger Wert für [Größen-, Versatz- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values), die auf anchor-positionierten Elementen gesetzt sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder dessen enthälter Block. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, stimmt die verwendete Dimension mit der Achse der Größen-, Positions- oder Rand-Eigenschaft überein, die darauf gesetzt ist. Beispielsweise:

- `width: anchor-size()` ist gleichbedeutend mit `width: anchor-size(width)`.
- `top: anchor-size()` ist gleichbedeutend mit `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` ist gleichbedeutend mit `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` ist auch gleichbedeutend mit `margin-inline-end: anchor-size(width)` in horizontalen Schreibmodi oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibmodi.

Das Ankerelement, das als Grundlage für die Dimensionslänge dient, ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn der Funktion kein `<anchor-name>` Parameter hinzugefügt wird, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird oder über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut mit dem Element verbunden ist.

Wenn ein `<anchor-name>` Parameter enthalten ist und es keine Elemente mit diesem Ankernamen gibt, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten ist, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf das positionierte Element spezifiziert wurde, aber kein Anker mit dem Namen `--foo` im DOM existiert, wäre die `width` `50px` und die `height` Deklaration hätte keine Wirkung.

Wenn ein Element Größen-, Positions- oder Rand-Eigenschaften mit `anchor-size()` Werten darauf gesetzt hat, aber kein anchor-positioniertes Element ist (d.h. es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder hat keinen Anker, der über seine `position-anchor` Eigenschaft damit verbunden ist), wird der Fallback-Wert verwendet, wenn einer vorhanden ist. Wenn kein Fallback vorhanden ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf das positionierte Element spezifiziert wurde, aber kein Anker damit verbunden war, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Die Eigenschaften, die einen `anchor-size()` Funktionswert akzeptieren, umfassen:

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
- Versatz-Eigenschaften:
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

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()` Funktion in eine {{cssxref("calc()")}} Funktion einfügen, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel, diese Regel setzt die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inlinergröße des positionierten Elements auf das Vierfache der Inlinergröße des Ankerelements, wobei die Multiplikation in einer {{cssxref("calc()")}} Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()` Funktionen dimensioniert sind.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die beiden `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrolling zu erfordern, aber dies wurde der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, bei denen ihre {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, werden über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker, um einen Referenzpunkt zu bieten, wenn die Maße des positionierten Elements beispielsweise mit Entwicklertools des Browsers überprüft werden:

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

Wir setzen einige unterschiedliche Eigenschaftswerte auf die positionierten Elemente:

- Die positionierten Elemente sind mit dem Anker mit unterschiedlichen {{cssxref("position-area")}} Werten verbunden, die die Elemente an verschiedenen Stellen um das Ankerelement positionieren.
- Die {{cssxref("height")}} des ersten Infoboxes wird auf dieselbe Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird auf das Doppelte der Breite des Ankerelements mit der `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion gesetzt: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} des zweiten Infoboxes wird auf zwei Drittel der Höhe des Ankerelements gesetzt, mit einer ähnlichen Technik.
- Randwerte sind enthalten, um etwas Abstand zum Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die anchor-positionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von ungefähr `66.7px` haben wird, wobei die `width` standardmäßig auf {{cssxref("max-content")}} gesetzt ist.

### Position und Beispiel für Ränder

Siehe [`anchor-size()` Position und Rand Beispiel](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
