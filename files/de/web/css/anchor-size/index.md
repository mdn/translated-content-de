---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Festlegen der [Größe](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size), [Position](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Abstände](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von Elementen, die relativ zu den Dimensionen von Ankerelementen positioniert sind. Sie gibt die `<length>` einer bestimmten Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn es innerhalb der Werte von Ankerelementen für die [Größen-, Einfügungs- und Abstands-Eigenschaften](#properties_that_accept_anchor-size_function_values) verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung, siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

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

Die Syntax der Funktion `anchor-size()` ist wie folgt:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, auf den Sie die Größe, Position oder Abstände des Elements relativ einstellen möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verknüpft oder verbindet ein Element nicht mit einem Anker; es definiert lediglich, relativ zu welchem Anker die Eigenschaftswerte des Elements eingestellt werden sollen.

- `<anchor-size>` {{optional_inline}}

  - : Gibt die Dimension des Ankerelements an, zu der die Eigenschaftswerte des positionierten Elements relativ eingestellt werden. Gültige Werte beinhalten:

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
    > Wenn dieser Parameter weggelassen wird, entspricht die Dimension standardmäßig dem `<anchor-size>` Schlüsselbegriff, der der Achse der Eigenschaft entspricht, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem der Fallback sonst verwendet würde, ist die Anweisung ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie die Eigenschaftswerte des positionierten Elements relativ einstellen, muss nicht entlang der gleichen Achse wie der einzustellende Größenwert liegen. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, dass die Größen-, Positions- und Abstandswerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements ausgedrückt werden können; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines bestimmten Ankerelements repräsentiert, zu dem die Eigenschaftswerte des positionierten Elements relativ eingestellt werden. Es ist ein gültiger Wert für [Größen-, Einfügungs- und Abstands-Eigenschaften](#properties_that_accept_anchor-size_function_values), die auf Ankerelemente eingestellt sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthältenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse der Eigenschaft, auf die sie eingestellt ist. So zum Beispiel:

- `width: anchor-size()` ist gleichbedeutend mit `width: anchor-size(width)`.
- `top: anchor-size()` ist gleichbedeutend mit `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` ist gleichbedeutend mit `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` ist auch gleichbedeutend mit `margin-inline-end: anchor-size(width)` in horizontalen Schreibrichtungen, oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibrichtungen.

Das Ankerelement, das als Grundlage für die Dimensionenlänge verwendet wird, ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element in der DOM-Reihenfolge mit diesem Ankernamen verwendet.

Wenn kein `<anchor-name>` Parameter in den Funktionsaufruf aufgenommen wird, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut mit dem Element verbunden ist.

Wenn ein `<anchor-name>` Parameter enthalten ist und keine Element mit diesem Ankernamen übereinstimmt, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten ist, wird die Anweisung ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element spezifiziert wird, aber kein Anker mit dem Namen `--foo` im DOM existiert, wäre die `width` `50px` und die `height` Anweisung hätte keinen Effekt.

Wenn ein Element Größen-, Positions- oder Abstandseigenschaften mit `anchor-size()` Werten darauf gesetzt hat, aber es sich nicht um ein Ankerelement handelt (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder ist nicht über seine `position-anchor` Eigenschaft mit einem Anker verbunden), wird der Fallback-Wert verwendet, falls einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Anweisung ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wird, aber kein Anker damit verbunden ist, würde der Fallback-Wert verwendet, weshalb `width` einen berechneten Wert von `50px` hätte.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung, siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

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
- Abstands-Eigenschaften:
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

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Alternativ verwenden Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion, um die Größe anzupassen, die auf das positionierte Element angewendet wird.

Zum Beispiel, diese Regel stellt die Breite des positionierten Elements gleich der Breite des Standardankerelements ein:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel stellt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements ein, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `anchor-size()` Verwendung

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und unter Verwendung von `anchor-size()` Funktionen dimensioniert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, dies wurde jedoch der Kürze wegen ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, sind über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker, um einen Referenzpunkt beim Überprüfen der Abmessungen des positionierten Elements bereitzustellen, zum Beispiel mit Browser-Entwicklertools:

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

- Die positionierten Elemente sind mit dem Anker durch verschiedene {{cssxref("position-area")}} Werte verbunden, die die Elemente an unterschiedlichen Stellen um das Ankerelement positionieren.
- Die {{cssxref("height")}} der ersten Infobox wird auf dieselbe Höhe wie das Ankerelement eingestellt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird auf das Doppelte der Breite des Ankerelements unter Verwendung der `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion eingestellt: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox wird auf zwei Drittel der Höhe des Ankerelements eingestellt, wobei eine ähnliche Technik verwendet wird.
- Margenwerte sind enthalten, um einen gewissen Abstand zum Ankerelement zu gewährleisten.

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

Verwenden Sie Ihre Browser-Tools, um die anker-positionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit, während die zweite Infobox eine Höhe von ungefähr `66.7px` hat, wobei die `width` standardmäßig auf {{cssxref("max-content")}} gesetzt ist.

### Position und Marge Beispiel

Siehe [`anchor-size()` Position und Marge Beispiel](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
