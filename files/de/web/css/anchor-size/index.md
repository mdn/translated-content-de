---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es, die [Größe](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size), [Position](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Abstände](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von Ankern positionierter Elemente relativ zu den Dimensionen der Ankerelemente festzulegen. Sie gibt die `<length>` einer angegebenen Seite des Zielankers zurück. `anchor-size()` ist nur gültig, wenn es als Wert für die [Größen-, Inset- und Abstandseigenschaften](#properties_that_accept_anchor-size_function_values) von ankergestützten Elementen verwendet wird.

Weitere Informationen zu den Funktionen und der Verwendung von Ankern finden Sie auf der Modul-Startseite zum Thema [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und im [Leitfaden für die Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

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

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft eines Ankerelements, relativ zu dem Sie die Größe, Position oder Abstände des Elements festlegen möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn ausgelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()`-Funktion verknüpft oder bindet ein Element nicht an einen Anker; sie definiert lediglich, zu welchem Anker die Eigenschaften des Elements relativ gesetzt werden sollen.

- `<anchor-size>` {{optional_inline}}

  - : Gibt die Dimension des Ankerelements an, relativ zu der die Eigenschaften des positionierten Elements gesetzt werden. Gültige Werte sind:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements in der Blockrichtung.

    - `inline`

      - : Die Länge des enthaltenden Blocks des Ankerelements in der Inline-Richtung.

    - `self-block`

      - : Die Länge des Ankerelements in der Blockrichtung.

    - `self-inline`

      - : Die Länge des Ankerelements in der Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, entspricht die Dimension standardmäßig dem `<anchor-size>`-Schlüsselbegriff, der zur Achse der Eigenschaft passt, in der die Funktion verwendet wird. Zum Beispiel entspricht `width: anchor-size();` der Angabe `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall, in dem der Fallback ansonsten verwendet würde, weggelassen wird, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der die Eigenschaften des positionierten Elements relativ gesetzt werden, muss nicht entlang derselben Achse liegen wie der Wert, der gesetzt wird. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die Funktion `anchor-size()` ermöglicht es, die Größen-, Positions- und Randwerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements auszudrücken. Sie gibt einen {{cssxref("length")}}-Wert zurück, der die Dimension eines spezifischen Ankerelements darstellt, zu dem die Eigenschaften des positionierten Elements relativ gesetzt werden. Es ist ein gültiger Wert für [Größen-, Inset- und Abstandseigenschaften](#properties_that_accept_anchor-size_function_values), die an ankergestützten Elementen gesetzt werden.

Der zurückgegebene Wert ist die vertikale oder horizontale Größe eines Ankerelements oder seines enthaltenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>`-Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse der Eigenschaft, auf die sie angewendet wird. Beispielsweise:

- `width: anchor-size()` ist gleichzusetzen mit `width: anchor-size(width)`.
- `top: anchor-size()` ist gleichzusetzen mit `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` entspricht `margin-inline-end: anchor-size(self-inline)` und auch `margin-inline-end: anchor-size(width)` in horizontalen Schreibrichtungen oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibrichtungen.

Das Ankerelement, das als Basis für die Dimension verwendet wird, ist das Element mit dem im `<anchor-name>`-Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Anker-Namen hat, wird das zuletzt in der DOM-Reihenfolge vorkommende Element verwendet.

Wenn in der Funktionsaufruf kein `<anchor-name>`-Parameter enthalten ist, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert ist oder durch das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut mit dem Element assoziiert wird.

Wenn ein `<anchor-name>`-Parameter enthalten ist und keine Elemente mit diesem Anker-Namen übereinstimmen, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten ist, wird die Deklaration ignoriert. Zum Beispiel: Wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wurde, jedoch kein Anker mit dem Namen `--foo` im DOM existiert, hätte `width` den Wert `50px` und die `height`-Deklaration hätte keine Wirkung.

Wenn ein Element Eigenschaften mit `anchor-size()`-Werten gesetzt hat, aber es kein ankergestütztes Element ist (d. h. seine {{cssxref("position")}}-Eigenschaft nicht auf `absolute` oder `fixed` gesetzt ist oder es keinen Anker durch seine `position-anchor`-Eigenschaft zugeordnet bekommen hat), wird der Fallback-Wert verwendet, wenn einer verfügbar ist. Ist kein Fallback verfügbar, wird die Deklaration ignoriert.

Beispielsweise: Wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wurde, aber kein Anker zugeordnet war, würde der Fallback-Wert verwendet, und die `width`-Eigenschaft hätte einen berechneten Wert von `50px`.

Weitere Informationen zu Ankerfunktionen und -verwendung finden Sie auf der Modulseite [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und im [Leitfaden für die Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()`-Funktionswerte akzeptieren

Die Eigenschaften, die die Funktion `anchor-size()` als Wert akzeptieren, umfassen:

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
  - {{cssxref("inset")}} Kurzschreibweise
  - {{cssxref("inset-block")}} Kurzschreibweise
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline")}} Kurzschreibweise
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-inline-start")}}
- Margin-Eigenschaften:
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

Die am häufigsten verwendeten `anchor-size()`-Funktionen beziehen sich lediglich auf eine Dimension des Standardankers. Alternativ können Sie die Funktion `anchor-size()` innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel bestimmt diese Regel, dass die Breite des positionierten Elements gleich der Breite des Standardankers ist:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel bestimmt, dass die Inline-Größe des positionierten Elements das Vierfache der Inline-Größe des Ankerelements beträgt, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}}-Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()`-Funktionen skaliert werden.

#### HTML

Wir geben drei {{htmlelement("div")}}-Elemente an, ein `anchor`-Element und zwei `infobox`-Elemente, die wir relativ zum Anker positionieren. Weitere Fülltexte sind enthalten, um den {{htmlelement("body")}} für Scrollen hoch genug zu machen. Diese wurden jedoch der Übersicht halber ausgeblendet.

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

Wir definieren das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}}-Wert zuweisen. Die positionierten Elemente, deren {{cssxref("position")}}-Eigenschaften auf `fixed` gesetzt sind, werden über ihre {{cssxref("position-anchor")}}-Eigenschaften mit dem Ankerelement verknüpft. Wir definieren auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen für den Anker, um einen Referenzpunkt beim Überprüfen der Dimensionen der positionierten Elemente bereitzustellen, z. B. mit den Entwicklerwerkzeugen des Browsers:

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

Wir legen einige unterschiedliche Eigenschaftswerte auf die positionierten Elemente:

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}}-Werten am Anker verknüpft, die die Elemente an verschiedenen Stellen um das Ankerelement positionieren.
- Die {{cssxref("height")}} der ersten Infotafel wird auf dieselbe Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird auf das Doppelte der Breite des Ankers gesetzt, indem die Funktion `anchor-size()` innerhalb einer {{cssxref("calc()")}}-Funktion verwendet wird: `anchor-size(width)` holt sich die Breite des Ankerelements, die anschließend verdoppelt wird.
- Die {{cssxref("height")}} der zweiten Infotafel wird auf zwei Drittel der Höhe des Ankers gesetzt, wobei eine ähnliche Technik angewendet wird.
- Randwerte werden eingefügt, um etwas Abstand zum Anker zu schaffen.

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

Verwenden Sie Ihre Browserwerkzeuge, um die ankergestützten Elemente zu inspizieren. Die erste Infotafel hat eine Höhe von `100px` und eine Breite von `200px`, während die zweite Infotafel eine Höhe von etwa `66,7px` hat, wobei die `width` auf {{cssxref("max-content")}} standardmäßig gesetzt ist.

### Beispiel für Position und Abstand

Siehe [`anchor-size()` Beispiel zur Position und zum Abstand](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}}-Funktion
- [Leitfaden zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
