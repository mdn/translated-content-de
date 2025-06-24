---
title: anchor-size()
slug: Web/CSS/anchor-size
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es, die [Größe](/de/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size), [Position](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size) und [Abstände](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size) von ankerpositionierten Elementen relativ zu den Dimensionen von Ankerelementen festzulegen. Sie gibt die `<length>` einer bestimmten Seite des Zielankerelements zurück. `anchor-size()` ist nur gültig, wenn es innerhalb des Wertes von ankerpositionierten Elementen zur [Größenbestimmung, Einfügung sowie Abstandsangaben](#properties_that_accept_anchor-size_function_values) verwendet wird.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

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

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, relativ zu dem die Größe, Position oder Abstände des Elements festgelegt werden sollen. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der Standardanker des Elements verwendet.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor-size()` Funktion assoziiert oder verknüpft ein Element nicht mit einem Anker; es definiert nur, auf welchen Anker sich die Eigenschaftswerte des Elements beziehen sollen.

- `<anchor-size>` {{optional_inline}}

  - : Gibt die Dimension des Ankerelements an, auf die sich die Eigenschaftswerte des positionierten Elements beziehen. Gültige Werte sind unter anderem:

    - `width`

      - : Die Breite des Ankerelements.

    - `height`

      - : Die Höhe des Ankerelements.

    - `block`

      - : Die Länge des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements in Blockrichtung.

    - `inline`

      - : Die Länge des umgebenden Blocks des Ankerelements in Inline-Richtung.

    - `self-block`

      - : Die Länge des Ankerelements in Blockrichtung.

    - `self-inline`
      - : Die Länge des Ankerelements in Inline-Richtung.

    > [!NOTE]
    > Wenn dieser Parameter weggelassen wird, wird die Dimension auf das `<anchor-size>` Schlüsselwort gesetzt, das zur Achse der Eigenschaft passt, in der die Funktion enthalten ist. Zum Beispiel ist `width: anchor-size();` gleichbedeutend mit `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt die Größe an, die als Fallback-Wert verwendet werden soll, wenn das Element nicht absolut oder fest positioniert ist oder das Ankerelement nicht existiert. Wenn dieser Parameter weggelassen wird, wenn der Fallback ansonsten verwendet würde, ist die Deklaration ungültig.

> [!NOTE]
> Die Ankerdimension, auf die Sie die Eigenschaftswerte des positionierten Elements beziehen, muss nicht entlang derselben Achse liegen wie der festgelegte Größenwert. Zum Beispiel ist `width: anchor-size(height)` gültig.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor-size()` Funktion ermöglicht es, Größen-, Positions- und Abstandswerte eines positionierten Elements in Bezug auf die Dimensionen eines Ankerelements auszudrücken; sie gibt einen {{cssxref("length")}} Wert zurück, der die Dimension eines bestimmten Ankerelements darstellt, relativ zu dem die Eigenschaftswerte des positionierten Elements festgelegt sind. Es ist ein gültiger Wert für [Größen-, Einfügungs- und Abstandseigenschaften](#properties_that_accept_anchor-size_function_values), die auf ankerpositionierten Elementen gesetzt sind.

Die zurückgegebene Länge ist die vertikale oder horizontale Größe eines Ankerelements oder seines umgebenden Blocks. Die verwendete Dimension wird durch den `<anchor-size>` Parameter definiert. Wird dieser Parameter weggelassen, wird die verwendete Dimension die Achse der Größe, Position oder Abstandseigenschaft entsprechen, auf der sie gesetzt ist. Zum Beispiel:

- `width: anchor-size()` entspricht `width: anchor-size(width)`.
- `top: anchor-size()` entspricht `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` entspricht `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` entspricht auch `margin-inline-end: anchor-size(width)` in horizontalen Schreibmodi oder `margin-inline-end: anchor-size(height)` in vertikalen Schreibmodi.

Das Ankerelement, das als Grundlage für die Dimensionslänge verwendet wird, ist das Element mit dem in der `<anchor-name>` Parameter angegebenen `anchor-name`. Wenn mehr als ein Element denselben Ankernamen hat, wird das letzte Element mit diesem Ankernamen in der DOM-Reihenfolge verwendet.

Wenn kein `<anchor-name>` Parameter im Funktionsaufruf enthalten ist, wird der **Standardanker** des Elements, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert ist, verwendet.

Wenn ein `<anchor-name>` Parameter enthalten ist und es keine Elemente mit diesem Ankernamen gibt, wird der Fallback-Wert verwendet. Wenn kein Fallback enthalten war, wird die Deklaration ignoriert. Zum Beispiel, wenn `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` auf dem positionierten Element angegeben wurde, aber kein Anker mit dem Namen `--foo` im DOM existiert, würde die `width` `50px` betragen und die `height` Deklaration hätte keinen Effekt.

Wenn ein Element Größen-, Positions- oder Abstandseigenschaften mit `anchor-size()` Werten darauf gesetzt hat, es jedoch kein ankerpositioniertes Element ist (es hat nicht seine {{cssxref("position")}} Eigenschaft auf `absolute` oder `fixed` gesetzt oder hat keinen Anker über seine `position-anchor` Eigenschaft mit ihm verbunden), wird der Fallback-Wert verwendet, falls verfügbar. Wenn kein Fallback verfügbar ist, wird die Deklaration ignoriert.

Zum Beispiel, wenn `width: anchor-size(width, 50px);` auf dem positionierten Element angegeben wurde, aber kein Anker damit verbunden war, würde der Fallback-Wert verwendet, sodass `width` einen berechneten Wert von `50px` hätte.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

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

### Verwenden von `anchor-size()` innerhalb von `calc()`

Die am häufigsten verwendeten `anchor-size()` Funktionen werden sich nur auf eine Dimension des Standardankers beziehen. Alternativ können Sie die `anchor-size()` Funktion innerhalb einer {{cssxref("calc")}} Funktion verwenden, um die auf das positionierte Element angewendete Größe zu modifizieren.

Zum Beispiel wird mit dieser Regel die Breite des positionierten Elements gleich der Breite des Standardankerelements festgelegt:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Mit dieser Regel wird die Inline-Größe des positionierten Elements auf das Vierfache der Inline-Größe des Ankerelements festgelegt, wobei die Multiplikation innerhalb einer {{cssxref("calc()")}} Funktion erfolgt:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung von `anchor-size()`

Dieses Beispiel zeigt zwei Elemente, die relativ zu einem Anker positioniert und mit `anchor-size()` Funktionen dimensioniert sind.

#### HTML

Wir spezifizieren drei {{htmlelement("div")}} Elemente, ein `Anker`-Element und die beiden `Infobox`-Elemente, die wir relativ zum Anker positionieren werden. Wir fügen auch Fülltext hinzu, um den {{htmlelement("body")}} hoch genug zu machen, um Scrollen zu erfordern, aber dieser wurde der Kürze halber ausgeblendet.

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

Wir deklarieren das `Anker` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} zuweisen. Die positionierten Elemente, deren {{cssxref("position")}} Eigenschaften auf `fixed` gesetzt sind, sind über ihre {{cssxref("position-anchor")}} Eigenschaften mit dem Ankerelement verbunden. Wir setzen außerdem absolute {{cssxref("height")}} und {{cssxref("width")}} Dimensionen auf dem Anker, um einen Referenzpunkt zu bieten, wenn die Dimensionen des positionierten Elements überprüft werden, zum Beispiel mit den Entwicklerwerkzeugen des Browsers:

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

Wir setzen einige unterschiedliche Eigenschaftswerte auf den positionierten Elementen:

- Die positionierten Elemente sind mit unterschiedlichen {{cssxref("position-area")}} Werten an den Anker gebunden, die die Elemente an verschiedenen Stellen um das Ankerelement positionieren.
- Die {{cssxref("height")}} der ersten Infobox wird auf die gleiche Höhe wie das Ankerelement gesetzt: `anchor-size(height)` gibt die Höhe des Ankerelements zurück. Die {{cssxref("width")}} des Elements wird verdoppelt zur Breite des Ankerelements unter Verwendung der `anchor-size()` Funktion innerhalb einer {{cssxref("calc()")}} Funktion gesetzt: `anchor-size(width)` ruft die Breite des Ankerelements ab, die dann mit zwei multipliziert wird.
- Die {{cssxref("height")}} der zweiten Infobox wird auf zwei Drittel der Höhe des Ankerelements gesetzt, indem eine ähnliche Technik angewandt wird.
- Es sind Abstandswerte enthalten, um eine Trennung vom Ankerelement zu gewährleisten.

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

Verwenden Sie Ihre Browswerwerkzeuge, um die ankerpositionierten Elemente zu inspizieren. Die erste Infobox wird `100px` hoch und `200px` breit sein, während die zweite Infobox eine Höhe von etwa `66,7px` haben wird, wobei die `width` auf {{cssxref("max-content")}} voreingestellt ist.

### Beispiel für Position und Abstand

Siehe [`anchor-size()` Beispiel für Position und Abstand](/de/docs/Web/CSS/CSS_anchor_positioning/Using#anchor-size_position_and_margin_example).

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
