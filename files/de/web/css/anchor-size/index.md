---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es, [Größenverhältnisse von anchor-positionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size) relativ zu den Dimensionen von Ankerelementen zu definieren. Sie gibt die `<length>` einer angegebenen Seite des Zielankerelements zurück. `anchor()` ist nur gültig, wenn sie innerhalb des Werts von Größeneigenschaften anchor-positionierter Elemente verwendet wird. Weitere Informationen zu Ankermöglichkeiten und -nutzung finden Sie auf der [CSS Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und in der Anleitung [CSS-Anker-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Syntax

```css
/* Größe der Ankerseite */
width: anchor-size(width);
block-size: anchor-size(block);
height: calc(anchor-size(self-inline) + 2em);

/* Größe der benannten Ankerseite */
width: anchor-size(--myAnchor width);
block-size: anchor-size(--myAnchor block);

/* Größe der benannten Ankerseite mit Fallback */
width: anchor-size(--myAnchor width, 50%);
block-size: anchor-size(--myAnchor block, 200px);
```

### Parameter

Die Syntax der `anchor-size()` Funktion ist wie folgt:

```plain
anchor-size(<anchor-element> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-element>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, relativ zu dem Sie das Element dimensionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-element>` innerhalb einer `anchor-size()` Funktion verknüpft oder verbindet ein Element nicht mit einem Anker; es dimensioniert das Element nur relativ zu diesem Anker.

- `<anchor-size>`

  - : Gibt die Dimension des Ankerelements an, zu der das positionierte Element relativ dimensioniert wird. Gültige Werte umfassen:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`

      - : Die Länge des enthältenden Blocks des Ankerelements in Inlinerichtung.

    - `self-block`

      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inlinerichtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, ist die Standarddimension der `<anchor-size>` Fachbegriff, der mit der Achse der Eigenschaft übereinstimmt, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Fallback verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in Fällen, in denen der Fallback sonst verwendet würde, weggelassen wird, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie das positionierte Element dimensionieren, muss nicht entlang derselben Achse wie der zu setzende Größenwert verlaufen. Beispielsweise ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht es, die Größenwerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements auszudrücken; sie definiert die Dimension eines bestimmten Ankerelements, relativ zu dem das positionierte Element dimensioniert wird. Sie ist ein gültiger Wert für [Größeneigenschaften](#properties_that_accept_anchor-size_function_values), die auf anchor-positionierten Elementen festgelegt werden. Bei Nutzung gibt die Funktion die {{cssxref("length")}} Dimension eines Ankerelements zurück, wobei sowohl das Ankerelement als auch die Dimension optionale Parameter sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthältenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, stimmt die verwendete Dimension mit der Achse der Größeneigenschaft überein, auf der sie gesetzt ist.

Das Ankerelement, das als Grundlage für die Dimensionenlänge verwendet wird, ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Anker-Namen hat, wird das letzte Element mit diesem Anker-Namen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>` Parameter in den Funktionsaufruf aufgenommen wird, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird oder über das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) mit dem Element verknüpft ist.

Wenn ein `<anchor-name>` Parameter enthalten ist und keine Elemente mit diesem Anker-Namen übereinstimmen, wird der Fallback-Wert verwendet. Falls kein Fallback enthalten ist, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wird, aber kein Anker namens `--foo` im DOM existiert, wären `width` `50px` und die `height` Deklaration hätte keine Wirkung.

Wenn ein Element Größeneigenschaften mit `anchor-size()` Werten darauf gesetzt hat, es jedoch kein anchor-positioniertes Element ist (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder ist über seine `position-anchor` Eigenschaft nicht mit einem Anker verbunden), wird der Fallback-Wert verwendet, falls einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wird, aber kein Anker damit verknüpft ist, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung, siehe die [CSS Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den Leitfaden [CSS-Anker-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Die Größeneigenschaften, die einen `anchor-size()` Funktionswert akzeptieren, umfassen:

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

### Verwendung von `anchor-size()` innerhalb von `calc()`

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Alternativ kann die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion verwendet werden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel dimensioniert diese Regel die Breite des positionierten Elements auf die gleiche Breite wie das Standardankerelement:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel dimensioniert die Inline-Größe des positionierten Elements auf das 4-fache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

### Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `anchor-size()` Verwendung

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()` Funktionen dimensioniert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die beiden `infobox` Elemente, die wir relativ zum Anker positionieren. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug für Scrollen zu machen, aber dies wurde der Kürze halber ausgeblendet.

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
  <p>Dies ist das erste Infobox.</p>
</div>

<div class="infobox" id="infobox2">
  <p>Dies ist das zweite Infobox.</p>
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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, werden über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker, um einen Bezugspunkt bereitzustellen, wenn die Dimensionen des positionierten Elements überprüft werden, zum Beispiel mit Browser-Entwicklungstools:

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

- Die positionierten Elemente sind mit dem Anker über verschiedene {{cssxref("position-area")}} Werte verbunden, die die Elemente an unterschiedlichen Stellen um das Ankerelement positionieren.
- Die {{cssxref("height")}} der ersten Infobox wird auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird doppelt so breit wie die Breite des Ankerelements mit der `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion gesetzt: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox wird auf zwei Drittel der Höhe des Ankerelements gesetzt, unter Verwendung einer ähnlichen Technik.
- Margenwerte werden hinzugefügt, um etwas Abstand vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die anchor-positionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von etwa `66,7px` hat, wobei die `width` auf {{cssxref("max-content")}} standardmäßig gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [CSS-Anker-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [CSS Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
