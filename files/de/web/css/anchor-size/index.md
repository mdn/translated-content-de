---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Setzen von Größen, [Positionen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Rändern](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von verankerungspositionierten Elementen relativ zu den Abmessungen von Ankerelementen. Sie gibt die \<length> einer bestimmten Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn sie innerhalb der Werte von [Größen-, Einfüge- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values) von verankerungspositionierten Elementen verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

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

Die Syntax der `anchor-size()` Funktion lautet wie folgt:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, zu dem Sie die Größe, Position oder Ränder des Elements relativ setzen möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verbindet oder verankert ein Element nicht mit einem Anker; es definiert nur, zu welchem Anker die Eigenschaftswerte des Elements relativ gesetzt werden.

- `<anchor-size>` {{optional_inline}}
  - : Gibt die Dimension des Ankerelements an, zu der die Eigenschaftswerte des positionierten Elements relativ gesetzt werden. Gültige Werte sind:
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
    > Wenn dieser Parameter weggelassen wird, wird die Dimension standardmäßig auf den `<anchor-size>` Fachbegriff gesetzt, der zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Fallback verwendet wird, wenn das Element nicht absolut oder fix positioniert ist oder das Ankerelement nicht existiert. Wird dieser Parameter in einem Fall weggelassen, in dem der Fallback genutzt würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Anker-Dimension, zu der Sie die Eigenschaftswerte des positionierten Elements relativ setzen, muss nicht entlang der gleichen Achse liegen wie der zu setzende Größenwert. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, dass die Größen-, Positions- und Randwerte eines positionierten Elements in Bezug auf die Abmessungen eines Ankerelements ausgedrückt werden; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines spezifischen Ankerelements repräsentiert, zu der die Eigenschaftswerte des positionierten Elements relativ gesetzt sind. Sie ist ein gültiger Wert für auf Anker positionierte Elemente gesetzte [Größen-, Einfüge- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values).

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthältenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse der Größen-, Positions- oder Rand-Eigenschaft, auf die er gesetzt ist. Zum Beispiel:

- `width: anchor-size()` ist gleichbedeutend mit `width: anchor-size(width)`.
- `top: anchor-size()` ist gleichbedeutend mit `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` ist gleichbedeutend mit `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` ist auch gleichbedeutend mit `margin-inline-end: anchor-size(width)` in horizontalen Schreibweisen oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibweisen.

Das als Grundlage für die Dimensionslänge verwendete Ankerelement ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>` Parameter in den Funktionsaufruf aufgenommen wird, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

Wenn ein `<anchor-name>` Parameter enthalten ist und keine Elemente mit diesem Ankernamen übereinstimmen, wird der Fallbackwert verwendet. Wenn kein Fallback enthalten ist, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wurde, aber kein Anker namens `--foo` im DOM existiert, würde die `width` `50px` sein und die `height` Deklaration hätte keinen Effekt.

Wenn ein Element Größen-, Positions- oder Randeigenschaften mit `anchor-size()` Werten hat, die auf ihnen gesetzt sind, aber es kein Anker-Positioniertes Element ist (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder hat keinen Anker über seine `position-anchor` Eigenschaft zugeordnet), wird der Fallbackwert verwendet, wenn einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wurde, aber kein Anker damit assoziiert war, würde der Fallbackwert verwendet, sodass `width` einen berechneten Wert von `50px` hätte.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Die Eigenschaften, die `anchor-size()` als Wert akzeptieren, umfassen:

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

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel bestimmt diese Regel die Breite des positionierten Elements in gleicher Höhe mit der Breite des Standardankerelements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel bestimmt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion durchgeführt wird:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `anchor-size()` Nutzung

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()` Funktionen dimensioniert sind.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext hinzu, um die {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dies wurde der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, werden über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement assoziiert. Wir setzen außerdem absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker, um einen Referenzpunkt beim Überprüfen der Dimensionen des positionierten Elements bereitzustellen, zum Beispiel mit Entwickler-Tools des Browsers:

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

- Die positionierten Elemente sind mit dem Anker über verschiedene {{cssxref("position-area")}} Werte verbunden, die die Elemente an verschiedenen Stellen um das Ankerelement herum positionieren.
- Die {{cssxref("height")}} der ersten Infobox wird auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird auf das Doppelte der Breite des Ankerelements gesetzt, indem die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox wird auf zwei Drittel der Ankerhöhe gesetzt, indem eine ähnliche Technik verwendet wird.
- Randwerte werden hinzugefügt, um etwas Abstand vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die Anker-positionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von ungefähr `66,7px` haben wird, wobei die `width` standardmäßig auf {{cssxref("max-content")}} gesetzt ist.

### Position und Ränder Beispiel

Siehe [`anchor-size()` Position und Margin Beispiel](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

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
