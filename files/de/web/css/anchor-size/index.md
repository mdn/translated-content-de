---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht das Festlegen der Größe, Position und Ränder von anchor-positionierten Elementen relativ zu den Abmessungen von Ankerelementen. Sie gibt die `<length>` einer angegebenen Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn es im Wert von Größen-, Einfügungs- und Rand-Properties von anchor-positionierten Elementen verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und ihrer Verwendung siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Übersichtsseite und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

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
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Propertywert eines Ankerelements, zu dem Sie die Größe, Position oder Ränder des Elements relativ setzen möchten. Dies ist ein `<dashed-ident>` Wert. Wenn ausgelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verknüpft oder verbindet kein Element mit einem Anker; es definiert lediglich, welcher Anker als Referenz für die Propertywerte des Elements verwendet werden soll.

- `<anchor-size>` {{optional_inline}}
  - : Gibt die Abmessung des Ankerelements an, zu der die Propertywerte des positionierten Elements relativ gesetzt werden sollen. Gültige Werte sind:
    - `width`
      - : Die Breite des Ankerelements.

    - `height`
      - : Die Höhe des Ankerelements.

    - `block`
      - : Die Länge des [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`
      - : Die Länge des containing block des Ankerelements in Inline-Richtung.

    - `self-block`
      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension auf den `<anchor-size>` Schlüsselbegriff eingestellt, der mit der Achse der Property übereinstimmt, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fix positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall ausgelassen wird, in dem der Fallback ansonsten verwendet werden würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie die Propertywerte des positionierten Elements relativ setzen, muss nicht auf derselben Achse sein wie der festgelegte Größenwert. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, dass Größen-, Positions- und Randwerte eines positionierten Elements in Bezug auf die Abmessungen eines Ankerelements ausgedrückt werden können; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines spezifischen Ankerelements darstellt, zu dem die Propertywerte des positionierten Elements relativ gesetzt werden. Es ist ein gültiger Wert für [Größen-, Einfügungs- und Randproperties](#properties_that_accept_anchor-size_function_values), die auf anchor-positionierten Elementen eingestellt werden.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines containing block. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, stimmt die verwendete Dimension mit der Achse der Größe, Position oder Randproperty überein, auf der sie gesetzt ist. Beispielsweise:

- `width: anchor-size()` ist gleichbedeutend mit `width: anchor-size(width)`.
- `top: anchor-size()` ist gleichbedeutend mit `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` ist gleichbedeutend mit `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` ist auch gleichbedeutend mit `margin-inline-end: anchor-size(width)` in horizontalen Schreibmodi oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibmodi.

Das Ankerelement, das als Grundlage für die Dimensionen verwendet wird, ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehrere Elemente denselben Anker-Namen haben, wird das letzte Element mit diesem Anker-Namen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>` Parameter in den Funktionsaufruf einbezogen ist, wird der **Standardanker** des Elements, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Property referenziert wird oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element verknüpft ist, verwendet.

Wenn ein `<anchor-name>` Parameter enthalten ist und keine Elemente mit diesem Anker-Namen existieren, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten war, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben sind, aber keine Anker mit dem Namen `--foo` im DOM existieren, wäre die `width` `50px` und die `height` Deklaration hätte keine Wirkung.

Wenn ein Element Größen-, Positions- oder Randproperties mit `anchor-size()` Werten darauf gesetzt hat, aber es sich nicht um ein anchor-positioniertes Element handelt (es hat seine {{cssxref("position")}} Property nicht auf `absolute` oder `fixed` gesetzt oder ist nicht über seine `position-anchor` Property mit einem Anker verknüpft), wird der Fallback-Wert verwendet, wenn einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Wenn zum Beispiel `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben ist, aber kein Anker damit verknüpft ist, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und ihrer Verwendung siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Übersichtsseite und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Zu den Eigenschaften, die eine `anchor-size()` Funktion als Wert akzeptieren, gehören:

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
  - {{cssxref("inset")}} shorthand
  - {{cssxref("inset-block")}} shorthand
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline")}} shorthand
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-inline-start")}}
- Rand-Eigenschaften:
  - {{cssxref("margin")}} shorthand
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-block")}} shorthand
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}} shorthand
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}

### Verwendung von `anchor-size()` innerhalb von `calc()`

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Alternativ schließen Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion ein, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel, diese Regel setzt die Breite des positionierten Elements gleich der Breite des Standardanker-Elements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation in einer {{cssxref("calc()")}} Funktion durchgeführt wird:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende `anchor-size()` Verwendung

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()` Funktionen dimensioniert sind.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die wir relativ zum Anker positionieren. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} so groß zu machen, dass Scrollen erforderlich ist, aber dies wurde der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Die positionierten Elemente, bei denen ihre {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, sind über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verknüpft. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf den Anker, um einen Bezugspunkt beim Überprüfen der Dimensionen der positionierten Elemente zu bieten, zum Beispiel mit Entwicklerwerkzeugen im Browser:

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
  anchor-name: --my-anchor;
  width: 100px;
  height: 100px;
}

.infobox {
  position-anchor: --my-anchor;
  position: fixed;
}
```

Wir setzen einige unterschiedliche Propertywerte auf die positionierten Elemente:

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}} Werten an den Anker gebunden, die die Elemente an unterschiedlichen Stellen um das Ankerelement platzieren.
- Die {{cssxref("height")}} der ersten Infobox wird auf dieselbe Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird auf das Doppelte der Breite des Ankerelements gesetzt, indem die `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion verwendet wird: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann verdoppelt wird.
- Die {{cssxref("height")}} der zweiten Infobox wird auf zwei Drittel der Höhe des Ankerelements gesetzt, unter Verwendung einer ähnlichen Technik.
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

{{EmbedLiveSample("Grundlegende `anchor-size()` Verwendung", "100%", "240")}}

Verwenden Sie Ihre Browser-Tools, um die anchor-positionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von ungefähr `66,7px` hat, wobei die `width` standardmäßig auf {{cssxref("max-content")}} eingestellt ist.

### Beispiel für Position und Rand

Siehe [`anchor-size()` Beispiel für Position und Rand](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

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
