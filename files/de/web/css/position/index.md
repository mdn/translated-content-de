---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`position`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie ein Element in einem Dokument positioniert wird. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen die endgültige Position der positionierten Elemente.

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
  - : Das Element wird entsprechend dem [Normalen Layoutfluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) des Dokuments positioniert. Die Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("z-index")}} haben _keine Wirkung_. Dies ist der Standardwert.
- `relative`

  - : Das Element wird gemäß dem normalen Layoutfluss des Dokuments positioniert und dann _relativ zu sich selbst_ verschoben, basierend auf den Werten von `top`, `right`, `bottom` und `left`. Die Verschiebung beeinflusst nicht die Position anderer Elemente; der Platz, der dem Element im Seitenlayout zugewiesen wird, bleibt derselbe, als ob `position` `static` wäre.

    Dieser Wert erstellt einen neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der `z-index`-Wert nicht `auto` ist. Seine Wirkung auf `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` Elemente ist undefiniert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem nächsten positionierten Vorfahren (falls vorhanden) oder zum initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erstellt einen neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der `z-index`-Wert nicht `auto` ist. Die Ränder von absolut positionierten Boxen [überlappen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) nicht mit anderen Rändern.

- `fixed`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem initialen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) positioniert, der im Fall von visuellen Medien der Viewport ist. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erstellt immer einen neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In gedruckten Dokumenten wird das Element auf _jeder Seite_ an derselben Position platziert.

- `sticky`

  - : Das Element wird gemäß dem normalen Layoutfluss des Dokuments positioniert und anschließend relativ zu seinem _nächstgelegenen scrollenden Vorfahren_ und [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) (dem nächstgelegenen Block-Level-Vorfahren), einschließlich tabellenbezogener Elemente, basierend auf den Werten von `top`, `right`, `bottom` und `left` versetzt. Die Versetzung beeinflusst nicht die Position anderer Elemente.

    Dieser Wert erstellt immer einen neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). Beachten Sie, dass ein „sticky“-Element am nächstgelegenen Vorfahren „haftet“, der einen „Scrollmechanismus“ enthält (erstellt, wenn `overflow` `hidden`, `scroll`, `auto` oder `overlay` ist), selbst wenn dieser Vorfahre nicht der tatsächlich scrollende Vorfahre ist.

    > [!NOTE]
    > Mindestens eine [inset](/de/docs/Web/CSS/inset)-Eigenschaft ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}} usw.) muss für die Achse, auf der das Element „sticky“ sein soll, auf einen Wert ungleich `auto` gesetzt werden. Wenn beide `inset`-Eigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der Wert `sticky` auf dieser Achse wie `relative`.

## Beschreibung

### Arten der Positionierung

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten, es ist alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `relative` ist. Die Eigenschaften {{Cssxref("top")}} und {{Cssxref("bottom")}} geben den vertikalen Versatz von seiner normalen Position an; die Eigenschaften {{Cssxref("left")}} und {{Cssxref("right")}} geben den horizontalen Versatz an.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `absolute` oder `fixed` ist. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} geben Versatzwerte von den Kanten des [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements an. (Der Containing Block ist der Vorfahre, relativ zu dem das Element positioniert wird.) Wenn das Element Ränder hat, werden diese zum Versatz hinzugefügt. Das Element erstellt einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt.
- Ein **stickily positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `sticky` ist. Es wird wie relativ positioniert behandelt, bis sein [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) innerhalb seiner Flusswurzel (oder des Containers, in dem es scrollt) eine definierte Schwelle überschreitet (z. B. indem {{Cssxref("top")}} auf einen anderen Wert als `auto` gesetzt wird). An diesem Punkt wird es als "fixiert" behandelt, bis es die gegenüberliegende Kante seines [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) erreicht.

Absolut positionierte Elemente, deren {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt sind, werden in den meisten Fällen so dimensioniert, dass sie ihren Inhalt aufnehmen. Nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element), absolut positionierte Elemente können jedoch so konfiguriert werden, dass sie den verfügbaren vertikalen Platz ausfüllen, indem sowohl {{Cssxref("top")}} als auch {{Cssxref("bottom")}} festgelegt werden und {{Cssxref("height")}} nicht spezifiziert wird (d. h. `auto`). Ebenso können sie den verfügbaren horizontalen Platz ausfüllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} festgelegt und {{Cssxref("width")}} auf `auto` belassen wird.

Abgesehen von dem oben beschriebenen Fall (von absolut positionierten Elementen, die den verfügbaren Platz ausfüllen):

- Wenn sowohl `top` als auch `bottom` angegeben sind (technisch: nicht `auto`), hat `top` Vorrang.
- Wenn sowohl `left` als auch `right` angegeben sind, hat `left` Vorrang, wenn {{Cssxref("direction")}} `ltr` ist (z. B. Englisch, horizontales Japanisch) und `right` Vorrang, wenn {{Cssxref("direction")}} `rtl` ist (z. B. Persisch, Arabisch, Hebräisch).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit einem Wert von `absolute` oder `fixed` positioniert sind, anderen Inhalt nicht verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Understanding WCAG, Erklärung zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visual Presentation: Understanding SC 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Leistung & Barrierefreiheit

Das Scrollen von Elementen, die `fixed`- oder `sticky`-Inhalte enthalten, kann Leistungs- und Barriereprobleme verursachen. Während ein Benutzer scrollt, muss der Browser den sticky- oder fixed-Inhalt an einer neuen Position neu zeichnen. Je nach Inhalt, der neu gezeichnet werden muss, der Browserleistung und der Verarbeitungsleistung des Geräts kann der Browser möglicherweise keine Neuzeichnungsrate von 60 fps erreichen. Ein solches Szenario kann zu {{Glossary("Jank", "Ruckeln")}} und, wichtiger, zu Barriereproblemen für empfindliche Benutzer führen. Eine Lösung besteht darin, {{cssxref("will-change", "will-change: transform")}} zu den positionierten Elementen hinzuzufügen, um das Element in einer eigenen Ebene zu rendern und die Neuzeichnungsgeschwindigkeit sowie die Leistung und Barrierefreiheit zu verbessern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente werden um einen bestimmten Betrag von ihrer normalen Position im Dokument verschoben, ohne dass die Verschiebung andere Elemente beeinflusst. Im folgenden Beispiel ist zu sehen, wie die anderen Elemente positioniert werden, als ob "Zwei" den Platz seiner normalen Position einnimmt.

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

Relativ positionierte Elemente verbleiben im normalen Dokumentenfluss. Im Gegensatz dazu wird ein absolut positioniertes Element aus dem Fluss genommen; andere Elemente werden dann so angeordnet, als ob es nicht existieren würde. Das absolut positionierte Element wird relativ zu seinem _nächstgelegenen positionierten Vorfahren_ positioniert (d. h. der nächste Vorfahre, der nicht `static` ist). Falls kein positionierter Vorfahre existiert, wird es relativ zum ICB (Initial Containing Block — siehe auch die [Definition des W3C](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)) positioniert, welcher der Containing Block des Wurzelelements des Dokuments ist.

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

### Fixierte Positionierung

Die fixierte Positionierung ähnelt der absoluten Positionierung, mit der Ausnahme, dass der [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements der initiale Containing Block ist, der _Viewport_, sofern kein Vorfahre die Eigenschaft `transform`, `perspective` oder `filter` auf einen anderen Wert als `none` gesetzt hat (siehe [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), was dazu führt, dass dieser Vorfahre die Position des [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements einnimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das unabhängig vom Scrollen in derselben Position bleibt. Im folgenden Beispiel ist Box "Eins" fixiert 80 Pixel vom oberen Rand der Seite und 10 Pixel vom linken Rand. Selbst nach dem Scrollen bleibt es an derselben Stelle relativ zum Viewport. Außerdem, wenn die [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaft auf `transform` gesetzt wird, wird ein neuer Containing Block erstellt.

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

Die folgende CSS-Regel positioniert das Element mit der id `one` relativ, bis der Viewport so gescrollt wird, dass sich das Element 10 Pixel vom oberen Rand befindet. Über diesen Schwellenwert hinaus bleibt das Element 10 Pixel vom oberen Rand fixiert.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit Sticky-Überschriften

Eine häufige Verwendung von Sticky-Positionierung ist für Überschriften in einer alphabetischen Liste. Die "B"-Überschrift wird direkt unter den Elementen, die mit "A" beginnen, erscheinen, bis diese aus dem Bildschirm gescrollt werden. Anstatt mit dem restlichen Inhalt aus dem Bildschirm zu gleiten, bleibt die "B"-Überschrift dann oben im Viewport fixiert, bis alle "B"-Elemente aus dem Bildschirm gescrollt sind. An diesem Punkt wird sie durch die "C"-Überschrift abgedeckt, und so weiter.

Sie müssen einen Schwellenwert mit mindestens einer der Eigenschaften `top`, `right`, `bottom` oder `left` angeben, damit Sticky-Positionierung wie erwartet funktioniert. Andernfalls ist sie von relativer Positionierung nicht zu unterscheiden.

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

#### Sticky-Position mit allen Randbegrenzungen gesetzt

Das folgende Beispiel zeigt das Verhalten eines Elements, wenn alle Randbegrenzungen gesetzt sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden Sticky-Positionierung, und die Randbegrenzungen sind mit 50 Pixel vom oberen Rand, 100 Pixel von der rechten Seite, 50 Pixel vom unteren Rand und 50 Pixel von der linken Seite angegeben. Ein grauer Hintergrund des übergeordneten div-Elements markiert den Bereich der Ränder.

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

Wenn Sie beide Glühbirnen an ihren vorgesehenen Platz verschieben, werden Sie bemerken, dass sie relativ innerhalb des Randbereichs positioniert sind. Verschieben Sie sie aus dem Randbereich, werden sie in dieser Richtung an die Randgrenze fixiert („sticky“).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS verstehen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
