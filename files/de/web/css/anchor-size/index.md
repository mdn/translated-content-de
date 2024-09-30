---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es, [Größen von anchor-positionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size) relativ zu den Dimensionen von Ankerelementen zu bestimmen. Sie gibt die `<length>` einer angegebenen Seite des Zielankerelements zurück. `anchor()` ist nur gültig, wenn es innerhalb des Werts von Ankers-zentrierten [Größeneigenschaften](#properties_that_accept_anchor-size_function_values) verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und ihrer Verwendung siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Module-Landingpage und den [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

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

Die Syntax der `anchor-size()`-Funktion ist wie folgt:

```plain
anchor-size(<anchor-element> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-element>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft eines Ankerelements, relativ zu welchem Sie das Element dimensionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn er weggelassen wird, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Das Angeben eines `<anchor-element>` innerhalb einer `anchor-size()`-Funktion verbindet oder bindet ein Element nicht an einen Anker; es dimensioniert nur das Element relativ zu diesem Anker.

- `<anchor-size>`

  - : Gibt die Dimension des Ankerelements an, relativ zu welcher das positionierte Element dimensioniert wird. Gültige Werte sind:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des umgebenden Blocks des Ankerelements in Blockrichtung.

    - `inline`

      - : Die Länge des umgebenden Blocks des Ankerelements in Inlinerichtung.

    - `self-block`

      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`

      - : Die Länge des Ankerelements in Inlinerichtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension standardmäßig auf das `<anchor-size>`-Schlüsselwort gesetzt, das zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel: `width: anchor-size();` entspricht `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem der Fallback sonst verwendet würde, wird die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, relativ zu der Sie das positionierte Element dimensionieren, muss nicht entlang derselben Achse verlaufen wie der festgelegte Werte-Parameter. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht es, die Dimensionierungswerte eines positionierten Elements in Bezug auf die Abmessungen eines Ankerelements auszudrücken; sie definiert die Dimension eines spezifischen Ankerelements, relativ zu dem das positionierte Element dimensioniert wird. Es ist ein gültiger Wert für auf Anker-positionierte Elemente gesetzte [Größeneigenschaften](#properties_that_accept_anchor-size_function_values). Bei Verwendung gibt die Funktion die {{cssxref("length")}}-Dimension eines Ankerelements zurück, wobei sowohl das Ankerelement als auch die Dimension optionale Parameter sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines umgebenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>`-Parameter definiert. Wenn dieser Parameter weggelassen wird, wird die verwendete Dimension der Achse der Eigenschaft entsprechen, auf der sie festgelegt ist.

Das Ankerelement, das als Grundlage für die Dimensionslänge dient, ist das Element mit dem `anchor-name`, das im `<anchor-name>`-Parameter angegeben ist. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn im Funktionsaufruf kein `<anchor-name>`-Parameter enthalten ist, wird der **Standardanker** des Elements verwendet, wie in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut mit dem Element verbunden.

Wenn ein `<anchor-name>`-Parameter enthalten ist und keine Elemente mit diesem Ankernamen übereinstimmen, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten ist, wird die Deklaration ignoriert. Zum Beispiel: Wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element festgelegt wurde, aber kein Anker mit dem Namen `--foo` im DOM existiert, würde die `width` `50px` betragen und die `height`-Deklaration hätte keinen Effekt.

Wenn ein Element Größeneigenschaften mit `anchor-size()`-Werten aufweist, es aber kein Anker-positioniertes Element ist (es hat seine {{cssxref("position")}}-Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder ist nicht über seine `position-anchor`-Eigenschaft mit einem Anker verbunden), wird der Fallback-Wert verwendet, wenn einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel: Wenn `width: anchor-size(width, 50px);` auf dem positionierten Element festgelegt wurde, aber kein Anker damit verbunden war, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und ihrer Verwendung siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Module-Landingpage und den [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor-size()`-Funktionswerte akzeptieren

Die Größeneigenschaften, die einen `anchor-size()`-Funktionswert akzeptieren, umfassen:

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

Die häufigsten `anchor-size()`-Funktionen, die Sie verwenden werden, beziehen sich einfach auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um die angewendete Größe auf das positionierte Element zu modifizieren.

Zum Beispiel stellt diese Regel die Breite des positionierten Elements gleich der Breite des Standardanker-Elements ein:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel setzt die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}}-Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

### Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()`-Funktionen dimensioniert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}}-Elemente, ein `anchor`-Element und die beiden `infobox`-Elemente, die wir relativ zum Anker positionieren. Wir fügen auch Fülltext hinzu, um das {{htmlelement("body")}} hoch genug zu machen, dass Scrollen erforderlich ist, aber dies wurde der Kürze halber versteckt.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, deren {{cssxref("position")}}-Eigenschaften auf `fixed` gesetzt sind, sind über ihre {{cssxref("position-anchor")}}-Eigenschaften mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}}- und {{cssxref("width")}}-Dimensionen auf dem Anker, um einen Referenzpunkt beim Überprüfen der Dimensionen des positionierten Elements bereitzustellen, zum Beispiel mit Entwickler-Tools im Browser:

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

- Die positionierten Elemente sind mit dem Anker durch verschiedene {{cssxref("position-area")}}-Werte verbunden, die die Elemente an verschiedenen Stellen um das Ankerelement platzieren.
- Die {{cssxref("height")}} der ersten Infobox wird auf dieselbe Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird mit der `anchor-size()`-Funktion innerhalb einer {{cssxref("calc()")}}-Funktion auf das Doppelte der Breite des Ankerelements gesetzt: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox wird mithilfe einer ähnlichen Technik auf zwei Drittel der Höhe des Ankerelements gesetzt.
- Randwerte sind enthalten, um eine gewisse Abtrennung vom Ankerelement zu schaffen.

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

Verwenden Sie Ihre Browser-Tools, um die Anker-positionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von ungefähr `66.7px` hat, mit der `width`, die auf {{cssxref("max-content")}} standardmäßig eingestellt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}}-Funktion
- [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
