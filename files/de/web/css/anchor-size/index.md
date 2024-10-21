---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: fe427ad725f3cf1add1299de3cadfbb2bb05ed14
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es, [Elemente mit Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size) relativ zu den Abmessungen von Ankerelementen zu skalieren. Sie gibt die `<length>` einer bestimmten Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn sie innerhalb der Werte der Skalierungseigenschaften von Anker-positionierten Elementen verwendet wird.

Für detaillierte Informationen zu Anker-Funktionen und ihrer Verwendung siehe die Modul-Startseite [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Syntax

```css
/* size of anchor side */
width: anchor-size(width);
block-size: anchor-size(block);
height: calc(anchor-size(self-inline) + 2em);

/* size of named anchor side */
width: anchor-size(--myAnchor width);
block-size: anchor-size(--myAnchor block);

/* size of named anchor side with fallback */
width: anchor-size(--myAnchor width, 50%);
block-size: anchor-size(--myAnchor block, 200px);
```

### Parameter

Die Syntax der `anchor-size()` Funktion ist wie folgt:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, zu dem das Element relativ skaliert werden soll. Dies ist ein `<dashed-ident>` Wert. Wird dieser Wert weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verknüpft oder verbindet ein Element nicht mit einem Anker; es skaliert das Element nur relativ zu diesem Anker.

- `<anchor-size>` {{optional_inline}}

  - : Gibt die Dimension des Ankerelements an, zu der das positionierte Element relativ skaliert wird. Gültige Werte sind:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block) des Ankerelements in Block-Richtung.

    - `inline`

      - : Die Länge des enthältenden Blocks des Ankerelements in Inline-Richtung.

    - `self-block`

      - : Die Länge des Ankerelements in Block-Richtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension standardmäßig auf den `<anchor-size>` Schlüsselbegriff gesetzt, der zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wird dieser Parameter weggelassen, wenn der Fallback sonst verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie das positionierte Element relativ skalieren, muss nicht entlang der gleichen Achse wie der einzustellende Größenwert verlaufen. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, die Skalierungswerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements auszudrücken; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines spezifischen Ankerelements darstellt, zu dem das positionierte Element relativ skaliert wird. Es ist ein gültiger Wert für die auf Anker-positionierten Elementen gesetzten [Skalierungseigenschaften](#properties_that_accept_anchor-size_function_values).

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthältenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, passt die verwendete Dimension zur Achse der Skalierungseigenschaft, auf die sie gesetzt ist.

Das als Grundlage für die Längenbestimmung verwendete Ankerelement ist das Element, dessen `anchor-name` im `<anchor-name>` Parameter angegeben ist. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wird im Funktionsaufruf kein `<anchor-name>` Parameter eingeschlossen, wird der **Standardanker** des Elements, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut mit dem Element verknüpft ist, verwendet.

Wird ein `<anchor-name>` Parameter eingeschlossen und es gibt keine Elemente, die diesem Ankernamen entsprechen, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten war, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wäre, aber kein Anker mit dem Namen `--foo` im DOM existiert, wäre die `width` `50px` und die `height` Deklaration hätte keine Wirkung.

Wenn ein Element Skalierungseigenschaften mit `anchor-size()` Werten hat, es aber kein Anker-positioniertes Element ist (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder hat keinen Anker über seine `position-anchor` Eigenschaft damit verknüpft), wird der Fallback-Wert verwendet, wenn einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wäre, aber kein Anker damit verbunden wäre, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` erhielte.

Für detaillierte Informationen zu Anker-Funktionen und ihrer Verwendung siehe die Modul-Startseite [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Zu den Skalierungseigenschaften, die einen `anchor-size()` Funktionswert als Wert akzeptieren, gehören:

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

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden, beziehen sich nur auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einschließen, um die auf das positionierte Element angewandte Größe zu ändern.

Zum Beispiel skaliert diese Regel die Breite des positionierten Elements auf die gleiche Breite wie das Standardankerelement:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel skaliert die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

### Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `anchor-size()` Verwendung

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()` Funktionen skaliert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext ein, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen erforderlich zu machen, aber dies wurde um der Kürze willen ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, mit ihren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt, sind über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker, um einen Referenzpunkt beim Überprüfen der Dimensionen der positionierten Elemente bereitzustellen, zum Beispiel mit den Browserentwickler-Tools:

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

Wir setzen einige spezifische Eigenschaftswerte auf die positionierten Elemente:

- Die positionierten Elemente sind mit dem Anker über verschiedene {{cssxref("position-area")}} Werte verbunden, die die Elemente an verschiedenen Stellen um das Ankerelement positionieren.
- Die {{cssxref("height")}} der ersten Infobox ist auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements ist auf das Doppelte der Breite des Ankerelements gesetzt, indem die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox ist auf zwei Drittel der Höhe des Ankerelements gesetzt, unter Verwendung einer ähnlichen Technik.
- Randwerte sind eingeschlossen, um etwas Abstand vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die Anker-positionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von ungefähr `66.7px` haben wird, wobei die `width` standardmäßig auf {{cssxref("max-content")}} gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Anleitung zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
