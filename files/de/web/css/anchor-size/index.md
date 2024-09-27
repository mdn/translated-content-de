---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es, [Größen von ankerpositionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size) relativ zu den Abmessungen von Ankerelementen basieren zu lassen. Sie gibt die `<length>` einer bestimmten Seite des Zielankerelements zurück. `anchor()` ist nur dann gültig, wenn es innerhalb der Werte von Ankerelementen bei [Größeneigenschaften](#properties_that_accept_anchor-size_function_values) verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Anleitung zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

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
anchor-size(<anchor-element> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-element>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, an dem Sie das Element relativ ausrichten möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-element>` innerhalb einer `anchor-size()` Funktion ordnet ein Element nicht einem Anker zu und verknüpft es auch nicht damit; es dient nur der Größenausrichtung relativ zu diesem Anker.

- `<anchor-size>`

  - : Bestimmt die Dimension des Ankerelements, zu der das positionierte Element relativ ausgerichtet wird. Gültige Werte umfassen:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`

      - : Die Länge des enthaltenden Blocks des Ankerelements in Inline-Richtung.

    - `self-block`

      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension standardmäßig auf den `<anchor-size>` Fachbegriff gesetzt, der der Achse der Eigenschaft entspricht, in der die Funktion eingebunden ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Ersatzwert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem der Ersatzwert verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie das positionierte Element relativ anpassen, muss nicht entlang der gleichen Achse wie der festgesetzte Größenwert liegen. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht es, dass die Größenwerte eines positionierten Elements in Bezug auf die Abmessungen eines Ankerelements ausgedrückt werden; sie definiert die Dimension eines bestimmten Ankerelements, relativ zu dem das positionierte Element ausgerichtet wird. Es ist ein gültiger Wert für [Größeneigenschaften](#properties_that_accept_anchor-size_function_values), die auf ankerpositionierten Elementen festgelegt sind. Wird die Funktion verwendet, gibt sie die {{cssxref("length")}}-Dimension eines Ankerelements zurück, wobei sowohl das Ankerelement als auch die Dimension optionale Parameter sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthaltenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse, an der die Größeneigenschaft eingestellt ist.

Das Ankerelement, das als Basis für die Dimensionslänge verwendet wird, ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn im Funktionsaufruf kein `<anchor-name>` Parameter enthalten ist, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert ist oder dem Element über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut zugewiesen ist.

Wenn ein `<anchor-name>` Parameter enthalten ist und es keine Elemente gibt, die diesem Ankernamen entsprechen, wird der Ersatzwert verwendet. Wenn kein Ersatzwert enthalten ist, wird die Deklaration ignoriert. Beispielsweise, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf das positionierte Element angewendet wurde, aber kein Anker namens `--foo` im DOM vorhanden ist, wäre die `width` `50px` und die `height` Deklaration hätte keine Wirkung.

Wenn ein Element Größeneigenschaften mit `anchor-size()` Werten hat, es aber kein ankerpositioniertes Element ist (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder hat keinen Anker, der über seine `position-anchor` Eigenschaft damit verbunden ist), wird der Ersatzwert verwendet, wenn einer verfügbar ist. Wenn kein Ersatzwert verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf das positionierte Element spezifiziert wurde, aber kein Anker damit verbunden war, würde der Ersatzwert verwendet, sodass `width` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und ihrer Verwendung siehe das [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Anleitung zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Die Größeneigenschaften, die einen `anchor-size()` Funktionswert als Wert akzeptieren, umfassen:

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

Die am häufigsten genutzten `anchor-size()` Funktionen beziehen sich einfach auf eine Dimension des Standardankers. Alternativ kann die `anchor-size()` Funktion in einem {{cssxref("calc")}} Funktionen eingebettet werden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel, diese Regel setzt die Breite des positionierten Elements gleich der Breite des Standardankerelements:

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

### Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()` Funktionen dimensioniert sind.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die relativ zum Anker positioniert werden. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} so hoch zu machen, dass ein Scrollen erforderlich ist, aber dies wurde der Übersichtlichkeit halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, werden über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker, um einen Referenzpunkt beim Prüfen der positionierten Elementdimensionen bereitzustellen, zum Beispiel mit den Entwicklertools des Browsers:

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

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}} Werten an den Anker gebunden, die die Elemente an verschiedenen Orten um das Ankerelement positionieren.
- Die {{cssxref("height")}} der ersten Infobox ist auf die gleiche Höhe wie das Ankerelement eingestellt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements ist doppelt so breit wie das Ankerelement, die `anchor-size()` Funktion wird innerhalb einer {{cssxref("calc()")}} Funktion verwendet: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox ist auf zwei Drittel der Höhe des Ankerelements eingestellt, mit einer ähnlichen Technik.
- Randwerte sind enthalten, um etwas Abstand vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browserwerkzeuge, um die ankerpositionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von ca. `66.7px` haben wird, wobei die `Breite` standardmäßig auf {{cssxref("max-content")}} gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Anleitung zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
