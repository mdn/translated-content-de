---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es, die [Größe](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size), [Position](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Abstände](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von anchor-positionierten Elementen relativ zu den Dimensionen der Ankerelemente festzulegen. Sie gibt die `<length>` einer angegebenen Seite des Ziel-Ankerelements zurück. `anchor-size()` ist nur gültig, wenn es innerhalb von Werten für die [Größen-, Einfüge- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values) von anchor-positionierten Elementen verwendet wird.

Für detaillierte Informationen zu Anker-Features und deren Verwendung, siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

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
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, zu dem Sie die Größe, Position oder Abstände eines Elements relativieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion assoziiert oder verknüpft kein Element mit einem Anker; es definiert nur, zu welchem Anker die Eigenschaftswerte des Elements relativ gesetzt werden sollen.

- `<anchor-size>` {{optional_inline}}
  - : Gibt die Dimension des Ankerelements an, zu der die Eigenschaftswerte des positionierten Elements relativ gesetzt werden. Gültige Werte sind:
    - `width`
      - : Die Breite des Ankerelements.

    - `height`
      - : Die Höhe des Ankerelements.

    - `block`
      - : Die Länge des [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`
      - : Die Länge des enthaltenden Blocks des Ankerelements in Inlinerichtung.

    - `self-block`
      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inlinerichtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension standardmäßig auf den `<anchor-size>` Schlüsselbegriff gesetzt, der zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel entspricht `width: anchor-size();` `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fix positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall, in dem der Fallback sonst verwendet wird, weggelassen wird, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie die Eigenschaftswerte des positionierten Elements relativ setzen, muss nicht entlang der gleichen Achse liegen wie der gesetzte Größenwert. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, dass Größen-, Positions- und Randwerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements ausgedrückt werden; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines spezifischen Ankerelements darstellt, zu dem die Eigenschaftswerte des positionierten Elements relativ gesetzt sind. Sie ist ein gültiger Wert für [Größen-, Einfüge- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values), die auf anchor-positionierten Elementen gesetzt sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthaltenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, wird die verwendete Dimension der Achse entsprechen, auf der die Größen-, Positions- oder Randeigenschaft gesetzt ist. Zum Beispiel:

- `width: anchor-size()` entspricht `width: anchor-size(width)`.
- `top: anchor-size()` entspricht `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` entspricht `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` entspricht auch `margin-inline-end: anchor-size(width)` in horizontalen Schreibrichtungen oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibrichtungen.

Das als Grundlage für die Dimensionalänge verwendete Ankerelement ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>` Parameter im Funktionsaufruf enthalten ist, wird der **Standardanker** des Elements, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert ist, verwendet.

Wenn ein `<anchor-name>` Parameter enthalten ist und keine Elemente vorhanden sind, die diesem Ankernamen entsprechen, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten war, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben ist, aber kein Anker namens `--foo` im DOM existiert, wäre die `width` `50px` und die `height` Deklaration hätte keine Wirkung.

Wenn ein Element Größen-, Positions- oder Randwerteigenschaften mit `anchor-size()` Werten hat, diese jedoch nicht auf einem anchor-positionierten Element (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder ist nicht über seine `position-anchor` Eigenschaft mit einem Anker assoziiert) gesetzt sind, wird der Fallback-Wert verwendet, falls einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wurde, aber kein Anker damit assoziiert wurde, würde der Fallback-Wert verwendet, sodass `width` einen errechneten Wert von `50px` hätte.

Für detaillierte Informationen zu Anker-Features und deren Verwendung, siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

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
  - {{cssxref("inset")}} Kurzschreibweise
  - {{cssxref("inset-block")}} Kurzschreibweise
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline")}} Kurzschreibweise
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-inline-start")}}
- Randeigenschaften:
  - {{cssxref("margin")}} Kurzschreibweise
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-block")}} Kurzschreibweise
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}} Kurzschreibweise
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}

### Verwendung von `anchor-size()` innerhalb von `calc()`

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion einfügen, um die auf das positionierte Element angewandte Größe zu modifizieren.

Zum Beispiel, diese Regel setzt die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements gleich dem Vierfachen der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert sind und unter Verwendung von `anchor-size()` Funktionen dimensioniert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Textfüller ein, um das {{htmlelement("body")}} lang genug zu machen, um Scrollen zu erfordern, aber dies wurde der Kürze halber versteckt.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, sind über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen am Anker, um einen Bezugspunkt beim Überprüfen der Dimensionen des positionierten Elements zu haben, zum Beispiel mit den Entwicklertools des Browsers:

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

Wir setzen einige verschiedene Eigenschaftswerte auf die positionierten Elemente:

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}} Werten an den Anker gebunden, die die Elemente an verschiedene Stellen um das Ankerelement positionieren.
- Die {{cssxref("height")}} der ersten Infobox ist auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements ist auf das Doppelte der Breite des Ankerelements gesetzt, wobei die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox ist auf zwei Drittel der Höhe des Ankerelements gesetzt, wobei eine ähnliche Technik verwendet wird.
- Marginwerte sind enthalten, um einen gewissen Abstand vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die anchor-positionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von ungefähr `66,7px` haben wird, mit der `width`, die standardmäßig auf {{cssxref("max-content")}} gesetzt ist.

### Positions- und Randbeispiel

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
