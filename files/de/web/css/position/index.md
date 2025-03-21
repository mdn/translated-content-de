---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{CSSRef}}

Die **`position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie ein Element in einem Dokument positioniert wird. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen die endgültige Position von positionierten Elementen.

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
  - : Das Element wird entsprechend dem [Normalfluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) des Dokuments positioniert. Die Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("z-index")}} haben _keine Wirkung_. Dies ist der Standardwert.
- `relative`

  - : Das Element wird entsprechend dem Normalfluss des Dokuments positioniert und dann _relativ zu sich selbst_ basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst nicht die Position anderer Elemente; daher bleibt der für das Element im Seitenlayout vorgegebene Raum derselbe, als wäre die Position `static`.

    Dieser Wert erzeugt einen neuen [Stapeldurchlauf](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Wirkung auf `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` Elemente ist nicht definiert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentfluss entfernt und es wird kein Raum für das Element im Seitenlayout freigehalten. Das Element wird relativ zu seinem nächsten positionierten Vorfahren (falls vorhanden) oder zum anfänglichen [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt einen neuen [Stapeldurchlauf](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Ränder von absolut positionierten Boxen [kollabieren](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) nicht mit anderen Rändern.

- `fixed`

  - : Das Element wird aus dem normalen Dokumentfluss entfernt und es wird kein Raum für das Element im Seitenlayout freigehalten. Das Element wird relativ zu seinem anfänglichen [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) positioniert, was im Fall von visuellen Medien der Viewport ist. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt immer einen neuen [Stapeldurchlauf](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context). In gedruckten Dokumenten wird das Element auf _jeder Seite_ an derselben Position platziert.

- `sticky`

  - : Das Element wird entsprechend dem Normalfluss des Dokuments positioniert und dann relativ zu seinem _nächsten scrollenden Vorfahren_ und [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) (nächster Block-Level-Vorfahre), einschließlich tabellenbezogener Elemente, basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst nicht die Position anderer Elemente.

    Dieser Wert erzeugt immer einen neuen [Stapeldurchlauf](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context). Beachten Sie, dass ein sticky Element an seinem nächsten Vorfahren "haftet", der einen "Scrolling-Mechanismus" hat (erstellt, wenn `overflow` auf `hidden`, `scroll`, `auto` oder `overlay` gesetzt ist), auch wenn dieser Vorfahre nicht der tatsächlich nächste scrollende Vorfahre ist.

    > [!NOTE]
    > Mindestens eine [einsetz](/de/docs/Web/CSS/inset) Eigenschaft ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}}, usw.) muss für die Achse, auf der das Element sticky gemacht werden soll, auf einen nicht-`auto` Wert gesetzt sein. Wenn beide `inset` Eigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der `sticky` Wert auf dieser Achse wie `relative`.

## Beschreibung

### Arten der Positionierung

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position` Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten, es ist alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position` Wert `relative` ist. Die {{Cssxref("top")}} und {{Cssxref("bottom")}} Eigenschaften geben den vertikalen Offset von seiner normalen Position an; die {{Cssxref("left")}} und {{Cssxref("right")}} Eigenschaften geben den horizontalen Offset an.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position` Wert `absolute` oder `fixed` ist. Die {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} Eigenschaften geben die Offsets von den Kanten des [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements an. (Der enthältende Block ist der Vorfahre, relativ zu dem das Element positioniert ist.) Wenn das Element Ränder hat, werden diese zum Offset hinzugefügt. Das Element erstellt einen neuen [Blockformatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt.
- Ein **sticky positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position` Wert `sticky` ist. Es wird als relativ positioniert behandelt, bis sein [enthältender Block](/de/docs/Web/CSS/CSS_display/Containing_block) einen bestimmten Schwellenwert überschreitet (z.B. {{Cssxref("top")}} auf einen anderen Wert als auto setzen) innerhalb seines Flow-Roots (oder des Containers, in dem es scrollt), an dem Punkt wird es als "festgeklebt" behandelt, bis es den gegenüberliegenden Rand seines [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) erreicht.

Absolut positionierte Elemente, die {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt haben, sind meist so bemessen, dass sie ihrem Inhalt passen. Nichtsdestotrotz können nicht-{{Glossary("Replaced_elements", "ersetzte")}}, absolut positionierte Elemente so eingestellt werden, dass sie den verfügbaren vertikalen Raum ausfüllen, indem sowohl {{Cssxref("top")}} als auch {{Cssxref("bottom")}} angegeben werden und {{Cssxref("height")}} unbestimmt (d.h. `auto`) bleibt. Ebenso können sie so eingestellt werden, dass sie den verfügbaren horizontalen Raum ausfüllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} angegeben werden und {{Cssxref("width")}} als `auto` bleibt.

Mit Ausnahme des gerade beschriebenen Falls (von absolut positionierten Elementen, die den verfügbaren Raum ausfüllen):

- Wenn sowohl `top` als auch `bottom` angegeben sind (technisch, nicht `auto`), gewinnt `top`.
- Wenn sowohl `left` als auch `right` angegeben sind, gewinnt `left`, wenn {{Cssxref("direction")}} `ltr` ist (Englisch, horizontales Japanisch, usw.) und `right`, wenn {{Cssxref("direction")}} `rtl` ist (Persisch, Arabisch, Hebräisch, usw.).

## Barrierefreiheit

Stellen Sie sicher, dass mit einem `absolute` oder `fixed` Wert positionierte Elemente beim Vergrößern der Seite andere Inhalte nicht verdecken, um die Textgröße zu erhöhen.

- [MDN Verstehen von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visuelle Präsentation: Verständnis von SC 1.4.8 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Leistung & Barrierefreiheit

Das Scrollen von Elementen, die `fixed` oder `sticky` Inhalte enthalten, kann Leistungs- und Zugänglichkeitsprobleme verursachen. Während ein Benutzer scrollt, muss der Browser den sticky oder fixed Inhalt an einem neuen Ort neu zeichnen. Abhängig vom Inhalt, der neu gezeichnet werden muss, der Browserleistung und der Verarbeitungsgeschwindigkeit des Geräts kann der Browser möglicherweise nicht bei 60 fps neu zeichnen. Ein solches Szenario kann zu {{Glossary("Jank", "Ruck")}} und, was noch wichtiger ist, zu Zugänglichkeitsproblemen für empfindliche Personen führen. Eine Lösung besteht darin, {{cssxref("will-change", "will-change: transform")}} zu den positionierten Elementen hinzuzufügen, um das Element in seiner eigenen Ebene zu rendern, was die Neuzeichnungsrate verbessert und damit die Leistung und Zugänglichkeit verbessert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente sind um einen bestimmten Betrag von ihrer normalen Position im Dokument versetzt, ohne dass die Verschiebung andere Elemente beeinflusst. Im folgenden Beispiel sehen Sie, wie die anderen Elemente platziert werden, als wenn "Two" den Raum seiner normalen Position einnimmt.

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

Relativ positionierte Elemente bleiben im normalen Fluss des Dokuments. Im Gegensatz dazu wird ein absolut positioniertes Element aus dem Fluss genommen; daher werden andere Elemente so positioniert, als ob es nicht existiert. Das absolut positionierte Element wird relativ zu seinem _nächsten positionierten Vorfahren_ (d.h. dem nächsten Vorfahren, der nicht `static` ist) positioniert. Wenn ein positionierter Vorfahre nicht existiert, wird es relativ zum ICB (initial enthältender Block — siehe auch die [W3C-Definition](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)), welcher der enthältende Block des Wurzelelements des Dokuments ist, positioniert.

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

Feste Positionierung ist ähnlich wie absolute Positionierung, mit der Ausnahme, dass der [enthältende Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements der initiale enthältende Block ist, der durch den _Viewport_ etabliert wird, es sei denn, ein Vorfahre hat die Eigenschaft `transform`, `perspective` oder `filter` auf einen anderen Wert als `none` gesetzt (siehe [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), was dann dazu führt, dass dieser Vorfahre die Stelle als enthältender Block des Elements einnimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das unabhängig von der Scrollposition an derselben Stelle bleibt. Im Beispiel unten befindet sich das Box "One" 80 Pixel vom oberen Rand der Seite und 10 Pixel vom linken Rand. Auch nach dem Scrollen bleibt es relativ zum Viewport an derselben Position. Wenn die [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaft auf `transform` gesetzt ist, wird ein neuer enthältender Block erstellt.

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

Die folgende CSS-Regel positioniert das Element mit der ID `one` relativ, bis das Ansichtsfenster so gescrollt wird, dass das Element 10 Pixel vom oberen Rand entfernt ist. Über diesen Schwellenwert hinaus bleibt das Element 10 Pixel vom oberen Rand fixiert.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit Sticky-Überschriften

Ein häufiger Anwendungsfall für die Sticky-Positionierung sind die Überschriften in einer alphabetisch sortierten Liste. Die "B"-Überschrift erscheint direkt unterhalb der Elemente, die mit "A" beginnen, bis sie aus dem Sichtfeld gescrollt sind. Anstatt mit dem Rest des Inhalts aus dem Bildschirm zu rutschen, bleibt die "B"-Überschrift dann oben im Ansichtsfenster fixiert, bis alle "B"-Elemente aus dem Sichtfeld gescrollt sind; an diesem Punkt wird sie von der "C"-Überschrift überdeckt, und so weiter.

Für die Sticky-Positionierung muss ein Schwellenwert mit mindestens einer der Eigenschaften `top`, `right`, `bottom` oder `left` angegeben werden, damit das erwartete Verhalten eintritt. Andernfalls ist es von der relativen Positionierung nicht zu unterscheiden.

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

#### Sticky-Position mit allen Inset-Grenzen gesetzt

Das folgende Beispiel demonstriert das Verhalten eines Elements, wenn alle Inset-Grenzen gesetzt sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden Sticky-Positionierung, und die Inset-Grenzen sind 50px vom oberen Rand, 100px vom rechten Rand, 50px vom unteren Rand und 50px vom linken Rand angegeben. Ein grauer Hintergrund auf dem übergeordneten div-Element markiert den Inset-Bereich.

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

Wenn Sie beide Glühbirnen an ihren richtigen Platz setzen, werden Sie feststellen, dass sie relativ innerhalb des Inset-Bereichs positioniert sind. Wenn Sie sie aus dem Inset-Bereich bewegen, bleiben sie in Richtung dieser Inset-Grenze fixiert (sticky).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [Verwendung von Container-Scrollzustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
