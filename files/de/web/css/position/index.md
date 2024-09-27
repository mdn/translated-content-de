---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: 3c40b1f62ea1c4eabcba34b7b4c9d4b050812389
---

{{CSSRef}}

Die **`position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie ein Element in einem Dokument positioniert wird. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen die endgültige Position der positionierten Elemente.

{{EmbedInteractiveExample("pages/css/position.html")}}

## Syntax

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* Global values */
position: inherit;
position: initial;
position: revert;
position: revert-layer;
position: unset;
```

### Werte

- `static`
  - : Das Element wird gemäß dem [normalen Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow) des Dokuments positioniert. Die Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("z-index")}} haben _keine Wirkung_. Dies ist der Standardwert.
- `relative`

  - : Das Element wird gemäß dem normalen Fluss des Dokuments positioniert und dann _relativ zu sich selbst_ versetzt, basierend auf den Werten von `top`, `right`, `bottom` und `left`. Die Versetzung beeinflusst die Position anderer Elemente nicht; daher bleibt der Platz für das Element im Seitenlayout gleich, als ob die Position `static` wäre.

    Dieser Wert erzeugt einen neuen [Stapelsatz](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Seine Wirkung auf `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` Elemente ist nicht definiert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem nächsten positionierten Vorfahren (falls vorhanden) oder zum ursprünglichen [umschließenden Block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt einen neuen [Stapelsatz](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Ränder von absolut positionierten Boxen [kollabieren](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) nicht mit anderen Rändern.

- `fixed`

  - : Das Element wird aus dem normalen Dokumentfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem ursprünglichen [umschließenden Block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert, welcher im Fall von visuellen Medien der Ansichtsbereich ist. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt immer einen neuen [Stapelsatz](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In gedruckten Dokumenten wird das Element auf _jeder Seite_ an derselben Position platziert.

- `sticky`

  - : Das Element wird gemäß dem normalen Fluss des Dokuments positioniert und dann relativ zu seinem _nächsten scrollbaren Vorfahren_ und [umschließenden Block](/de/docs/Web/CSS/Containing_block) (nächster Block-Level-Vorfahre), einschließlich tabellenbezogener Elemente, basierend auf den Werten von `top`, `right`, `bottom` und `left` versetzt. Die Versetzung beeinflusst die Position anderer Elemente nicht.

    Dieser Wert erzeugt immer einen neuen [Stapelsatz](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). Beachten Sie, dass ein sticky Element sich an seinen nächsten Vorfahren "anheftet", der einen "Scrolling-Mechanismus" hat (erzeugt, wenn `overflow` `hidden`, `scroll`, `auto` oder `overlay` ist), auch wenn dieser Vorfahre nicht der nächste tatsächlich scrollbare Vorfahre ist.

    > [!NOTE]
    > Mindestens eine [Einfügungseigenschaft](/de/docs/Web/CSS/inset) ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}}, etc.) muss für die Achse auf einen Wert ungleich `auto` gesetzt werden, auf der das Element sticky gemacht werden soll. Wenn beide Einfügungseigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der `sticky` Wert auf dieser Achse wie `relative`.

## Beschreibung

### Arten der Positionierung

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten, es ist alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `relative` ist. Die Eigenschaften {{Cssxref("top")}} und {{Cssxref("bottom")}} geben die vertikale Versetzung von seiner normalen Position an; die Eigenschaften {{Cssxref("left")}} und {{Cssxref("right")}} geben die horizontale Versetzung an.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `absolute` oder `fixed` ist. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} geben Versetzungen von den Rändern des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block) des Elements an. (Der umschließende Block ist der Vorfahre, relativ zu dem das Element positioniert ist.) Wenn das Element Ränder hat, werden diese zur Versetzung hinzugefügt. Das Element etabliert einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte.
- Ein **sticky positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `sticky` ist. Es wird als relativ positioniert betrachtet, bis sein [umschließender Block](/de/docs/Web/CSS/Containing_block) eine bestimmte Schwelle (wie das Setzen von {{Cssxref("top")}} auf einen anderen Wert als auto) in seinem Fluss-Root (oder dem Container, in dem es scrollt) überschreitet, ab welchem Punkt es als "festgeklebt" betrachtet wird, bis es die gegenüberliegende Kante seines [umschließenden Blocks](/de/docs/Web/CSS/Containing_block) erreicht.

Meistens werden absolut positionierte Elemente, die auf {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt sind, so dimensioniert, dass sie ihre Inhalte passen. Nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element), absolut positionierte Elemente können jedoch dazu gebracht werden, den verfügbaren vertikalen Raum auszufüllen, indem sowohl {{Cssxref("top")}} als auch {{Cssxref("bottom")}} spezifiziert und {{Cssxref("height")}} nicht angegeben (d.h. `auto`) wird. Sie können ebenfalls den verfügbaren horizontalen Raum ausfüllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} spezifiziert und {{Cssxref("width")}} als `auto` belassen wird.

Außer im soeben beschriebenen Fall (von absolut positionierten Elementen, die den verfügbaren Raum ausfüllen):

- Wenn sowohl `top` als auch `bottom` spezifiziert sind (technisch nicht `auto`), gewinnt `top`.
- Wenn sowohl `left` als auch `right` spezifiziert sind, gewinnt `left`, wenn {{Cssxref("direction")}} `ltr` ist (Englisch, horizontales Japanisch, etc.) und `right`, wenn {{Cssxref("direction")}} `rtl` ist (Persisch, Arabisch, Hebräisch, etc.).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit einem `absolute` oder `fixed` Wert positioniert sind, andere Inhalte nicht verdecken, wenn die Seite zum Vergrößern der Textgröße gezoomt wird.

- [MDN Eine WCAG verstehen, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visuelle Präsentation: Verstehen von SC 1.4.8 | WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Performance & Barrierefreiheit

Scrollende Elemente mit `fixed` oder `sticky` Inhalten können zu Performance- und Barrierefreiheitsproblemen führen. Beim Scrollen des Benutzers muss der Browser den festen oder klebenden Inhalt an einer neuen Position neu zeichnen. Abhängig von dem zu rekonstruierenden Inhalt, der Browserleistung und der Verarbeitungsgeschwindigkeit des Geräts kann der Browser möglicherweise nicht in der Lage sein, Neuzeichnungen mit 60 fps zu bewältigen. Ein solches Szenario kann zu [Verzögerungen](/de/docs/Glossary/Jank) und, was noch wichtiger ist, zu Barrierefreiheitsbedenken für Personen mit Empfindlichkeiten führen. Eine Lösung besteht darin, {{cssxref("will-change", "will-change: transform")}} zu den positionierten Elementen hinzuzufügen, um das Element in seiner eigenen Ebene zu rendern, was die Neuzeichnungsgeschwindigkeit und damit die Performance und Barrierefreiheit verbessert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente werden um einen bestimmten Betrag von ihrer normalen Position innerhalb des Dokuments versetzt, ohne dass die Versetzung andere Elemente beeinflusst. Im Beispiel unten beachten Sie, wie die anderen Elemente platziert sind, als ob "Zwei" den Raum seiner normalen Position einnimmt.

#### HTML

```html
<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

{{EmbedLiveSample('Relative_positioning', '', '200px')}}

### Absolute Positionierung

Relativ positionierte Elemente bleiben im normalen Fluss des Dokuments. Im Gegensatz dazu wird ein Element, das absolut positioniert ist, aus dem Fluss genommen; daher werden andere Elemente so positioniert, als ob es nicht existiert. Das absolut positionierte Element wird relativ zu seinem _nächsten positionierten Vorfahren_ (d.h., dem nächsten Vorfahren, der nicht `static` ist) positioniert. Wenn kein positionierter Vorfahre existiert, wird es relativ zum ICB (initialer umschließender Block – siehe auch die [W3C Definition](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)), welcher der umschließende Block des Wurzelelements des Dokuments ist, positioniert.

#### HTML

```html
<h1>Absolute positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

#### Ergebnis

{{EmbedLiveSample('Absolute_positioning', '', '420px')}}

### Feste Positionierung

Feste Positionierung ist ähnlich wie absolute Positionierung, mit der Ausnahme, dass der [umschließende Block](/de/docs/Web/CSS/Containing_block) des Elements der initiale umschließende Block ist, der durch den _Ansichtsbereich_ etabliert wird, es sei denn, ein Vorfahre hat die Eigenschaft `transform`, `perspective` oder `filter` auf einen anderen Wert als `none` gesetzt (siehe [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), was dazu führt, dass dieser Vorfahre den Platz des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block) des Elements einnimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das unabhängig vom Scrollen an derselben Position bleibt. Im untenstehenden Beispiel ist Box "One" fest 80 Pixel von oben der Seite und 10 Pixel von links festgesetzt. Selbst nach dem Scrollen bleibt es an derselben Stelle relativ zum Ansichtsbereich. Auch wenn die [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaft auf `transform` gesetzt ist, wird ein neuer umschließender Block etabliert.

#### HTML

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <div class="box" id="one">One</div>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

.box {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#one {
  position: fixed;
  top: 80px;
  left: 10px;
  background: blue;
}

.outer {
  width: 500px;
  height: 300px;
  overflow: scroll;
  padding-left: 150px;
}
```

#### Ergebnis

{{EmbedLiveSample('Fixed_positioning', '', '300px')}}

### Sticky Positionierung

Die folgende CSS-Regel positioniert das Element mit der ID `one` relativ, bis der Ansichtsbereich so gescrollt ist, dass das Element 10 Pixel vom oberen Rand entfernt ist. Über diese Schwelle hinaus wird das Element auf 10 Pixel vom oberen Rand fixiert.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit klebenden Überschriften

Eine häufige Verwendung für die Sticky-Positionierung ist für die Überschriften in einer alphabetisch sortierten Liste. Die "B" Überschrift wird direkt unter den mit "A" beginnenden Elementen angezeigt, bis diese aus dem Bildschirm gescrollt sind. Statt mit dem Rest des Inhalts vom Bildschirm zu gleiten, bleibt die "B" Überschrift dann oben am Ansichtsbereich fixiert, bis alle "B" Elemente aus dem Bildschirm gescrollt sind, an welchem Punkt sie von der "C" Überschrift überdeckt wird, und so weiter.

Sie müssen einen Schwellenwert mit mindestens einem der folgenden Werte festlegen: `top`, `right`, `bottom` oder `left`, damit die Sticky-Positionierung wie erwartet funktioniert. Andernfalls wird sie von der relativen Positionierung nicht zu unterscheiden sein.

##### HTML

```html
<dl>
  <div>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </div>
  <div>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </div>
  <div>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </div>
  <div>
    <dt>T</dt>
    <dd>Ted Leo &amp; The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </div>
</dl>
```

##### CSS

```css
* {
  box-sizing: border-box;
}

dl > div {
  background: #fff;
  padding: 24px 0 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font:
    bold 18px/21px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font:
    bold 20px/45px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #ccc;
}
```

##### Ergebnis

{{EmbedLiveSample('List with sticky headings', '', '300px')}}

#### Sticky-Position mit allen eingestellten Einfügungsgrenzen

Das folgende Beispiel zeigt das Verhalten eines Elements, wenn alle Einfügungsgrenzen gesetzt sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden Sticky-Positionierung, und die Einfügungsgrenzen sind als 50px von oben, 100px von rechts, 50px von unten und 50px von links gesetzt. Ein grauer Hintergrund auf dem übergeordneten div-Element markiert den Einfügebereich.

##### HTML

```html
Use scrollbars to put the light bulbs(💡) in the right place in the following
text:
<div>
  <p>
    The representation of an idea by a light bulb(<span class="bulb">💡</span>)
    is a commonly used metaphor that symbolizes the moment of inspiration or the
    birth of a new idea. The association between a light bulb and an idea can be
    traced back to the invention of the incandescent light bulb(<span
      class="bulb"
      >💡</span
    >) by Thomas Edison in the late 19th century. The light bulb is a powerful
    symbol because it represents illumination, clarity, and the sudden
    brightening of one's thoughts or understanding. When someone has an idea, it
    is often described as a light bulb turning on in their mind, signifying a
    moment of insight or creativity. The image of a light bulb also suggests the
    idea of energy, power, and the potential for growth and development.
  </p>
</div>
```

##### CSS

```css hidden
div {
  width: 400px;
  height: 200px;
  overflow: scroll;
  scrollbar-width: thin;
  font-size: 16px;
  font-family: verdana;
  border: 1px solid;
}

p {
  width: 600px;
  user-select: none;
  margin: 0;
  border: 110px solid transparent;
}
```

```css
.bulb {
  position: sticky;
  inset: 50px 100px 50px 100px;
}

div {
  /* mark area defined by the inset boundaries using gray color */
  background: linear-gradient(#9999, #9999) 100px 50px / 192px 100px no-repeat;
}
```

##### Ergebnis

{{EmbedLiveSample('Sticky position with all the inset boundaries set', '', '300px')}}

Wenn Sie beide Glühbirnen an ihren richtigen Platz setzen, werden Sie bemerken, dass sie relativ im Einfügebereich positioniert sind. Wenn Sie sie aus dem Einfügebereich heraus bewegen, werden sie fest (sticky) an der Einfügungsgrenze in dieser Richtung verankert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS lernen: Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
