---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht es, [Größe von ankerpositionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size) relativ zu den Dimensionen von Ankerelementen festzulegen. Sie gibt die `<length>` einer spezifischen Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn es innerhalb des Werts von [Größeneigenschaften](#properties_that_accept_anchor-size_function_values) ankerpositionierter Elemente verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und deren Nutzung sehen Sie sich die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Übersichtsseite und die [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung an.

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

Die Syntax der `anchor-size()` Funktion lautet wie folgt:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, zu dem Sie die Größe des Elements relativ setzen möchten. Dies ist ein `<dashed-ident>` Wert. Falls weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion verbindet oder bindet ein Element nicht an einen Anker; es setzt lediglich die Größe des Elements relativ zu diesem Anker.

- `<anchor-size>` {{optional_inline}}

  - : Gibt die Dimension des Ankerelements an, relativ zu der das positionierte Element skaliert wird. Gültige Werte sind:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des [Umgebungsblocks](/de/docs/Web/CSS/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`

      - : Die Länge des Umgebungsblocks des Ankerelements in Inlinerichtung.

    - `self-block`

      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inlinerichtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension standardmäßig auf das `<anchor-size>` Schlüsselwort gesetzt, das zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Gibt die Größe an, die als Fallback-Wert verwendet wird, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter in einem Fall weggelassen wird, in dem der Fallback sonst verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, zu der Sie das positionierte Element relativ skalieren, muss nicht entlang der gleichen Achse wie der gesetzte Skalierungswert verlaufen. Beispielsweise ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, die Größenwerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements auszudrücken; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines bestimmten Ankerelements repräsentiert, relativ zu dem das positionierte Element skaliert wird. Es ist ein gültiger Wert für [Größeneigenschaften](#properties_that_accept_anchor-size_function_values), die auf ankerpositionierten Elementen festgelegt sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines Umgebungsblocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wenn dieser Parameter weggelassen wird, entspricht die verwendete Dimension der Achse der Eigenschaft, auf der sie eingestellt ist.

Das Ankerelement, das als Basis für die Dimension verwendet wird, ist das Element mit dem im `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>` Parameter in der Funktionsaufruf enthalten ist, wird der **Standardanker** des Elements, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert ist oder über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML Attribut mit dem Element verbunden ist, verwendet.

Wenn ein `<anchor-name>` Parameter enthalten ist und keine Elemente diesem Ankernamen entsprechen, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten ist, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf das positionierte Element festgelegt wird, aber kein Anker mit dem Namen `--foo` im DOM existiert, würde die `width` `50px` sein und die `height` Deklaration hätte keinen Effekt.

Wenn ein Element Größeneigenschaften mit `anchor-size()` Werten auf sich gesetzt hat, aber nicht ein ankerpositioniertes Element ist (es hat seine {{cssxref("position")}} Eigenschaft nicht auf `absolute` oder `fixed` gesetzt oder ist nicht mit einem Anker über seine `position-anchor` Eigenschaft verbunden), wird der Fallback-Wert verwendet, wenn einer verfügbar ist. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf das positionierte Element festgelegt wird, aber kein Anker mit ihm verbunden ist, würde der Fallback-Wert verwendet, so dass `width` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und deren Nutzung sehen Sie sich die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Übersichtsseite und die [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung an.

### Eigenschaften, die `anchor-size()` Funktionswerte akzeptieren

Die Größeneigenschaften, die eine `anchor-size()` Funktion als Wert akzeptieren, umfassen:

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

Die häufigsten `anchor-size()` Funktionen, die Sie verwenden werden, beziehen sich nur auf eine Dimension des Standardankers. Alternativ können Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einbinden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel skaliert diese Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Diese Regel skaliert die Inlinegröße des positionierten Elements auf das Vierfache der Inlinegröße des Ankerelements, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion durchgeführt wird:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert sind und mithilfe von `anchor-size()` Funktionen skaliert werden.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `anchor` Element und die zwei `infobox` Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen erforderlich zu machen, aber dieser wurde der Kürze halber versteckt.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Die positionierten Elemente, mit ihren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt, werden über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker, um einen Bezugspunkt zu bieten, wenn die Abmessungen des positionierten Elements überprüft werden, zum Beispiel mit den Entwicklertools des Browsers:

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

Wir setzen einige eindeutige Eigenschaftswerte auf die positionierten Elemente:

- Die positionierten Elemente sind über verschiedene {{cssxref("position-area")}} Werte, die die Elemente an verschiedenen Stellen um das Ankerelement herum positionieren, mit dem Anker verbunden.
- Die {{cssxref("height")}} der ersten Infobox wird auf die gleiche Höhe wie das Ankerelement festgelegt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird mit der `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion auf das Doppelte der Breite des Ankerelements gesetzt: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox wird auf zwei Drittel der Höhe des Ankerelements gesetzt, wobei eine ähnliche Technik verwendet wird.
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

Verwenden Sie Ihre Browser-Tools, um die ankerpositionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von ungefähr `66,7px` haben wird, wobei die `width` auf {{cssxref("max-content")}} voreingestellt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} Funktion
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
