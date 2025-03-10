---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`position`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie ein Element in einem Dokument positioniert wird. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen die endgültige Position von positionierten Elementen.

{{InteractiveExample("CSS Demo: position")}}

```css interactive-example-choice
position: static;
```

```css interactive-example-choice
position: relative;
top: 40px;
left: 40px;
```

```css interactive-example-choice
position: absolute;
top: 40px;
left: 40px;
```

```css interactive-example-choice
position: sticky;
top: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element-container">
    <p>
      In this demo you can control the <code>position</code> property for the
      yellow box.
    </p>
    <div class="box"></div>
    <div class="box" id="example-element"></div>
    <div class="box"></div>
    <p class="clear">
      To see the effect of <code>sticky</code> positioning, select the
      <code>position: sticky</code> option and scroll this container.
    </p>
    <p>
      The element will scroll along with its container, until it is at the top
      of the container (or reaches the offset specified in <code>top</code>),
      and will then stop scrolling, so it stays visible.
    </p>
    <p>
      The rest of this text is only supplied to make sure the container
      overflows, so as to enable you to scroll it and see the effect.
    </p>
    <hr />
    <p>
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
      Orbiting this at a distance of roughly ninety-two million miles is an
      utterly insignificant little blue green planet whose ape-descended life
      forms are so amazingly primitive that they still think digital watches are
      a pretty neat idea.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  align-items: flex-start;
  overflow: auto;
}

.box {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  float: left;
  width: 65px;
  height: 65px;
}

.box + .box {
  margin-left: 10px;
}

.clear {
  clear: both;
  padding-top: 1em;
}

#example-element-container {
  position: relative;
  text-align: left;
}

#example-element {
  background-color: yellow;
  border: 3px solid red;
  z-index: 1;
}
```

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
  - : Das Element wird gemäß dem [normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) des Dokuments positioniert. Die Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("z-index")}} haben _keine Wirkung_. Dies ist der Standardwert.
- `relative`

  - : Das Element wird gemäß dem normalen Fluss des Dokuments positioniert und dann _relativ zu sich selbst_ basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst die Position anderer Elemente nicht; der für das Element auf der Seite reservierte Platz bleibt derselbe, als ob die Position `static` wäre.

    Dieser Wert erstellt einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Wirkung auf `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` Elemente ist nicht definiert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt, und es wird kein Platz für das Element auf der Seite geschaffen. Das Element wird relativ zu seinem nächstgelegenen positionierten Vorfahren (falls vorhanden) oder zum initialen [Umfassungsblock](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erstellt einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Ränder von absolut positionierten Boxen kollabieren nicht mit anderen Rändern.

- `fixed`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt, und es wird kein Platz für das Element auf der Seite geschaffen. Das Element wird relativ zu seinem initialen [Umfassungsblock](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) positioniert, was bei visuellen Medien der Viewport ist. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erstellt immer einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context). In gedruckten Dokumenten wird das Element auf _jeder Seite_ an derselben Position platziert.

- `sticky`

  - : Das Element wird gemäß dem normalen Fluss des Dokuments positioniert und dann relativ zu seinem _nächstgelegenen scrollenden Vorfahren_ und [Umfassungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) (nächster Block-Level-Vorfahre), einschließlich tabellenbezogener Elemente, basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst nicht die Position anderer Elemente.

    Dieser Wert erstellt immer einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context). Beachten Sie, dass ein klebriges Element an seinem nächstgelegenen Vorfahren "haftet", der einen "Scrollmechanismus" hat (erstellt, wenn `overflow` `hidden`, `scroll`, `auto` oder `overlay` ist), selbst wenn dieser Vorfahre nicht der tatsächlich scrollende ist.

    > [!NOTE]
    > Mindestens eine [Einfügen](/de/docs/Web/CSS/inset)-Eigenschaft ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}}, usw.) muss auf einen Nicht-`auto`-Wert gesetzt sein, damit die Achse, auf der das Element klebrig gemacht werden soll, funktioniert. Wenn beide `inset`-Eigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der `sticky`-Wert auf dieser Achse wie `relative`.

## Beschreibung

### Arten der Positionierung

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten, alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `relative` ist. Die {{Cssxref("top")}}- und {{Cssxref("bottom")}}-Eigenschaften geben den vertikalen Versatz von seiner normalen Position an; die {{Cssxref("left")}}- und {{Cssxref("right")}}-Eigenschaften geben den horizontalen Versatz an.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `absolute` oder `fixed` ist. Die {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} Eigenschaften spezifizieren die Versätze von den Rändern des [Umfassungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block). (Der Umfassungsblock ist der Vorfahre, relativ zu dem das Element positioniert wird.) Wenn das Element Margen hat, werden sie zum Versatz hinzugefügt. Das Element bildet einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt.
- Ein **klebrig positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `sticky` ist. Es wird als relativ positioniert behandelt, bis sein [Umfassungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) einen bestimmten Schwellenwert überschreitet (wie das Setzen von {{Cssxref("top")}} auf einen anderen Wert als auto) innerhalb seines Fließwurzels (oder des Containers, in dem es scrollt), an welchem Punkt es als "festgeklebt" behandelt wird, bis es den gegenüberliegenden Rand seines [Umfassungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block) erreicht.

Meistens werden absolut positionierte Elemente, die {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt haben, so dimensioniert, dass sie ihren Inhalt aufnehmen. Nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element), absolut positionierte Elemente können jedoch so gemacht werden, dass sie den verfügbaren vertikalen Raum füllen, indem sowohl {{Cssxref("top")}} als auch {{Cssxref("bottom")}} spezifiziert werden und {{Cssxref("height")}} nicht angegeben wird (d.h. `auto`). Sie können ebenso gemacht werden, den verfügbaren horizontalen Raum zu füllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} spezifiziert werden und {{Cssxref("width")}} auf `auto` belassen wird.

Außer in dem gerade beschriebenen Fall (von absolut positionierten Elementen, die den verfügbaren Raum füllen):

- Wenn sowohl `top` als auch `bottom` angegeben sind (technisch gesehen, nicht `auto`), gewinnt `top`.
- Wenn sowohl `left` als auch `right` angegeben sind, gewinnt `left`, wenn {{Cssxref("direction")}} `ltr` ist (Englisch, horizontales Japanisch, usw.) und `right` gewinnt, wenn {{Cssxref("direction")}} `rtl` ist (Persisch, Arabisch, Hebräisch, usw.).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit einem `absolute`- oder `fixed`-Wert positioniert sind, keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visuelle Präsentation: Erklärungen zu SC 1.4.8 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Leistung & Barrierefreiheit

Das Scrollen von Elementen, die `fixed` oder `sticky` Inhalte enthalten, kann Leistungs- und Barriereprobleme verursachen. Während ein Benutzer scrollt, muss der Browser den klebrigen oder festen Inhalt an einem neuen Ort neu malen. Abhängig von dem Inhalt, der neu gemalt werden muss, der Browserleistung und der Verarbeitungsleistung des Geräts, könnte es der Browser möglicherweise nicht schaffen, das Neumalen mit 60 fps zu verwalten. Ein solches Szenario kann zu {{Glossary("Jank", "Ruckeln")}} führen und, was noch wichtiger ist, Barriereprobleme für Menschen mit Empfindlichkeiten. Eine Lösung besteht darin, {{cssxref("will-change", "will-change: transform")}} zu den positionierten Elementen hinzuzufügen, um das Element in seinem eigenen Layer zu rendern, was die Neumalen-Geschwindigkeit verbessert und damit die Leistung und Barrierefreiheit verbessert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente werden von ihrer normalen Position innerhalb des Dokuments um einen bestimmten Betrag verschoben, ohne dass der Versatz andere Elemente beeinflusst. Im folgenden Beispiel beachten Sie, wie die anderen Elemente platziert werden, als ob "Zwei" den Raum seiner normalen Position einnimmt.

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

Elemente, die relativ positioniert sind, bleiben im normalen Fluss des Dokuments. Im Gegensatz dazu wird ein Element, das absolut positioniert ist, aus dem Fluss genommen; daher werden andere Elemente positioniert, als ob es nicht existieren würde. Das absolut positionierte Element wird relativ zu seinem _nächstgelegenen positionierten Vorfahren_ (d.h. der nächste Vorfahre, der nicht `static` ist) positioniert. Wenn kein positionierter Vorfahre existiert, wird es relativ zum ICB (initialer Umfassungsblock — siehe auch die [W3C-Definition](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)) positioniert, welcher der Umfassungsblock des Wurzel-Elements des Dokuments ist.

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
  <img src="https://mdn.github.io/shared-assets/images/examples/long.jpg" />
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

Feste Positionierung ist ähnlich der absoluten Positionierung, mit der Ausnahme, dass der [Umfassungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements der initiale Umfassungsblock ist, der durch den _Viewport_ etabliert wird, es sei denn, ein Vorfahre hat die `transform`, `perspective` oder `filter` Eigenschaft auf einen anderen Wert als `none` gesetzt (siehe [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), wodurch dieser Vorfahre die Stelle des [Umfassungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements einnimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das unabhängig vom Scrollen an derselben Stelle bleibt. Im folgenden Beispiel ist das Feld "Eins" 80 Pixel vom oberen Rand der Seite und 10 Pixel vom linken Rand fixiert. Selbst nach dem Scrollen bleibt es an derselben Stelle relativ zum Viewport. Auch wenn die [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaft auf `transform` gesetzt ist, wird ein neuer Umfassungsblock etabliert.

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

Die folgende CSS-Regel positioniert das Element mit der ID `one` relativ, bis der Viewport so gescrollt wird, dass sich das Element 10 Pixel vom oberen Rand befindet. Über diesen Schwellenwert hinaus bleibt das Element auf 10 Pixel vom oberen Rand fixiert.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit klebrigen Überschriften

Eine häufige Verwendung für klebrige Positionierung ist für die Überschriften in einer alphabetisch sortierten Liste. Die "B"-Überschrift erscheint direkt unterhalb der Elemente, die mit "A" beginnen, bis sie aus dem Bildschirm gescrollt sind. Anstatt mit dem Rest des Inhalts vom Bildschirm zu gleiten, bleibt die "B"-Überschrift dann fest am oberen Rand des Viewports, bis alle "B"-Elemente aus dem Bildschirm gescrollt sind, woraufhin sie von der "C"-Überschrift abgedeckt wird, und so weiter.

Sie müssen einen Schwellenwert mit mindestens einem von `top`, `right`, `bottom` oder `left` angeben, damit die klebrige Positionierung wie erwartet funktioniert. Andernfalls wird sie von der relativen Positionierung nicht zu unterscheiden sein.

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

#### Sticky Position mit allen festgelegten Einfügebegrenzungen

Das folgende Beispiel demonstriert das Verhalten eines Elements, wenn alle Einfügebegrenzungen festgelegt sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden klebrige Positionierung, und die Einfügebegrenzungen sind mit 50px vom oberen Rand, 100px vom rechten Rand, 50px vom unteren Rand und 50px vom linken Rand spezifiziert. Ein grauer Hintergrund auf dem übergeordneten div-Element markiert den Einfügebereich.

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

Wenn Sie beide Glühbirnen an ihren richtigen Platz setzen, werden Sie feststellen, dass sie relativ innerhalb des Einfügebereichs positioniert sind. Wenn Sie sie aus dem Einfügebereich heraus bewegen, haften sie (sticky) an der entsprechenden Einfügebegrenzung in dieser Richtung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [Verwenden von Container-Scroll-State-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
