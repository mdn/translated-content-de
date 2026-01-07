---
title: anchor-size()
slug: Web/CSS/Reference/Values/anchor-size
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht das Setzen von Größe, [Position](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Rändern](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_margin_based_on_anchor_size) eines ankerpositionierten Elements relativ zu den Abmessungen von Ankerelementen. Sie gibt die `<length>` einer spezifizierten Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn es im Wert der Größen-, Inset- und Rand-Eigenschaften von ankerpositionierten Elementen verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

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
  - : Der Wert der {{cssxref("anchor-name")}} Eigenschaft eines Ankerelements, zu dem Sie die Größe, Position oder Ränder des Elements relativ festlegen möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verbindet oder bindet ein Element nicht an einen Anker; es definiert nur, zu welchem Anker die Eigenschaftswerte des Elements relativ gesetzt werden sollten.

- `<anchor-size>` {{optional_inline}}
  - : Gibt die Dimension des Ankerelements an, auf die die Eigenschaftswerte des positionierten Elements relativ gesetzt werden. Gültige Werte sind:
    - `width`
      - : Die Breite des Ankerelements.

    - `height`
      - : Die Höhe des Ankerelements.

    - `block`
      - : Die Länge des [enthaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements in der Blockrichtung.

    - `inline`
      - : Die Länge des enthaltenen Blocks des Ankerelements in der Inline-Richtung.

    - `self-block`
      - : Die Länge des Ankerelements in der Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in der Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension auf den `<anchor-size>` Fachbegriff gesetzt, der zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel, `width: anchor-size();` entspricht `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Ersatzwert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem sonst der Ersatz verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie die Eigenschaftswerte des positionierten Elements relativ setzen, muss nicht entlang derselben Achse wie der festzulegende Größenwert sein. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht, dass die Größen-, Positions- und Randwerte eines positionierten Elements in Bezug auf die Abmessungen eines Ankerelements ausgedrückt werden; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines bestimmten Ankerelements darstellt, zu dem die Eigenschaftswerte des positionierten Elements relativ gesetzt werden. Es ist ein gültiger Wert für [Größen-, Inset- und Rand-Eigenschaften](#properties_that_accept_anchor-size_function_values), die auf ankerpositionierten Elementen gesetzt sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthaltenen Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse der Größe, Position oder Margeneigenschaft, die sie eingestellt ist. Zum Beispiel:

- `width: anchor-size()` entspricht `width: anchor-size(width)`.
- `top: anchor-size()` entspricht `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` entspricht `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` entspricht auch `margin-inline-end: anchor-size(width)` in horizontalen Schreibweisen oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibweisen.

Das Ankerelement, das als Grundlage für die Dimensionenlänge verwendet wird, ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>` Parameter in dem Funktionsaufruf enthalten ist, wird der **Standardanker** des Elements verwendet, der in seiner {{cssxref("position-anchor")}} Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert ist.

Wenn ein `<anchor-name>` Parameter enthalten ist und keine Elemente mit diesem Ankernamen übereinstimmen, wird der Ersatzwert verwendet. Wenn kein Ersatzwert eingeschlossen wurde, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wurde, aber kein Anker namens `--foo` im DOM existiert, wäre die `width` `50px` und die `height` Deklaration hätte keinen Effekt.

Wenn ein Element Größen-, Positions- oder Rand-Eigenschaften mit `anchor-size()` Werten hat, aber kein ankerpositioniertes Element ist (es hat nicht seine {{cssxref("position")}} Eigenschaft auf `absolute` oder `fixed` gesetzt oder hat keinen Anker über seine `position-anchor` Eigenschaft assoziiert), wird der Ersatzwert verwendet, falls einer verfügbar ist. Wenn kein Ersatzwert verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wurde, aber kein Anker damit assoziiert war, wird der Ersatzwert verwendet, so dass `width` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

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
- Inset-Eigenschaften:
  - {{cssxref("bottom")}}
  - {{cssxref("left")}}
  - {{cssxref("right")}}
  - {{cssxref("top")}}
  - {{cssxref("inset")}} Abkürzung
  - {{cssxref("inset-block")}} Abkürzung
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline")}} Abkürzung
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-inline-start")}}
- Margin-Eigenschaften:
  - {{cssxref("margin")}} Abkürzung
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-block")}} Abkürzung
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}} Abkürzung
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}

### Verwendung von `anchor-size()` innerhalb von `calc()`

Die gebräuchlichsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel, diese Regel setzt die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion durchgeführt wird:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `anchor-size()` Verwendung

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mithilfe von `anchor-size()` Funktionen dimensioniert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die beiden `infobox` Elemente, die wir relativ zum Anker positionieren. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dies wurde der Kürze halber verborgen.

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

Wir erklären das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, sind über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement assoziiert. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker, um einen Bezugspunkt zum Überprüfen der dimensionierten Elemente mit beispielsweise Browser-Entwicklertools zu bieten:

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

Wir setzen einige unterscheidbare Eigenschaftswerte auf den positionierten Elementen:

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}} Werten an den Anker gebunden, die die Elemente an verschiedenen Stellen um das Ankerelement platzieren.
- Die {{cssxref("height")}} der ersten Infobox ist auf dieselbe Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird auf das Doppelte der Breite des Ankerelements gesetzt, indem die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox ist auf zwei Drittel der Höhe des Ankerelements gesetzt, mit einer ähnlichen Technik.
- Margin-Werte sind enthalten, um etwas Abstand vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die ankerpositionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von etwa `66,7px` hat, wobei die `width` standardmäßig {{cssxref("max-content")}} ist.

### Positions- und Randbeispiel

Siehe [`anchor-size()` Positions- und Randbeispiel](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
