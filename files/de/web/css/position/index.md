---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: 179872e1c21ddaba37d4ef9d1187ee5995e0aa45
---

{{CSSRef}}

Die **`position`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt fest, wie ein Element in einem Dokument positioniert wird. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen die endgültige Position von positionierten Elementen.

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

  - : Das Element wird gemäß dem [Normalfluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) des Dokuments positioniert. Die Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("z-index")}} haben _keine Wirkung_. Dies ist der Standardwert.

- `relative`

  - : Das Element wird gemäß dem Normalfluss des Dokuments positioniert und dann _relativ zu sich selbst_ basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst die Position anderer Elemente nicht; daher nimmt das Element im Seitenlayout denselben Platz ein, als wäre die Position `static`.

    Dieser Wert erzeugt einen neuen [Stapelfluss](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Seine Wirkung auf Elemente wie `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` ist undefiniert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem nächsten positionierten Vorfahren (falls vorhanden) oder zum initialen [Enthaltungsblock](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt einen neuen [Stapelfluss](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Ränder von absolut positionierten Boxen kollabieren nicht mit anderen Rändern.

- `fixed`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem initialen [Enthaltungsblock](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert, welcher im Fall von visuellen Medien der Viewport ist. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt immer einen neuen [Stapelfluss](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In gedruckten Dokumenten wird das Element auf _jeder Seite_ an derselben Position platziert.

- `sticky`

  - : Das Element wird gemäß dem Normalfluss des Dokuments positioniert und dann relativ zu seinem _nächsten scrollenden Vorfahren_ und [Enthaltungsblock](/de/docs/Web/CSS/Containing_block) (nächster Block-Vorfahr), einschließlich tabellenbezogener Elemente, basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst die Position anderer Elemente nicht.

    Dieser Wert erzeugt immer einen neuen [Stapelfluss](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). Beachten Sie, dass ein sticky Element an seinem nächsten Vorfahren haften bleibt, der einen "Scrollmechanismus" aufweist (erstellt, wenn `overflow` auf `hidden`, `scroll`, `auto` oder `overlay` gesetzt ist), auch wenn dieser Vorfahr nicht der tatsächlich nächste scrollende Vorfahr ist.

    > [!NOTE]
    > Mindestens eine [inset](/de/docs/Web/CSS/inset)-Eigenschaft ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}} usw.) muss auf einen vom Standard abweichenden Wert gesetzt sein, damit die Achse, auf der das Element sticky sein soll, funktioniert. Wenn beide `inset`-Eigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der `sticky`-Wert auf dieser Achse wie `relative`.

## Beschreibung

### Positionierungstypen

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position`-Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten, es ist alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position`-Wert `relative` ist. Die Eigenschaften {{Cssxref("top")}} und {{Cssxref("bottom")}} geben den vertikalen Versatz von seiner normalen Position an; die Eigenschaften {{Cssxref("left")}} und {{Cssxref("right")}} geben den horizontalen Versatz an.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position`-Wert `absolute` oder `fixed` ist. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen die Versätze von den Rändern des [Enthaltungsblocks](/de/docs/Web/CSS/Containing_block) des Elements. (Der Enthaltungsblock ist der Vorfahr, relativ zu dem das Element positioniert wird.) Falls das Element Ränder hat, werden diese dem Versatz hinzugefügt. Das Element erstellt einen neuen [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt.
- Ein **sticky positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position`-Wert `sticky` ist. Es wird wie relativ positioniert behandelt, bis sein [Enthaltungsblock](/de/docs/Web/CSS/Containing_block) einen bestimmten Schwellenwert überschreitet (wie das Einstellen von {{Cssxref("top")}} auf einen vom Standard abweichenden Wert) in seinem Flussursprung (oder dem Container, in dem es scrollt), an welchem Punkt es als "fixiert" behandelt wird, bis es die gegenüberliegende Kante des [Enthaltungsblocks](/de/docs/Web/CSS/Containing_block) erreicht.

In den meisten Fällen sind absolut positionierte Elemente, die {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt haben, so dimensioniert, dass sie ihren Inhalt aufnehmen. Nicht-[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element), die absolut positioniert sind, können jedoch so eingestellt werden, dass sie den verfügbaren vertikalen Platz ausfüllen, indem sowohl {{Cssxref("top")}} und {{Cssxref("bottom")}} definiert und {{Cssxref("height")}} nicht festgelegt wird (d. h. `auto`). Ähnlich können sie den verfügbaren horizontalen Platz ausfüllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} definiert werden und {{Cssxref("width")}} auf `auto` bleibt.

Außer in dem gerade beschriebenen Fall (absolut positionierte Elemente, die den verfügbaren Platz ausfüllen):

- Wenn sowohl `top` als auch `bottom` angegeben sind (technisch, nicht `auto`), hat `top` Priorität.
- Wenn sowohl `left` als auch `right` angegeben sind, hat `left` Vorrang, wenn {{Cssxref("direction")}} `ltr` ist (Englisch, horizontal Japanisch, etc.), und `right` hat Vorrang, wenn {{Cssxref("direction")}} `rtl` ist (Persisch, Arabisch, Hebräisch, etc.).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit dem Wert `absolute` oder `fixed` positioniert sind, andere Inhalte nicht verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis WCAG, Erklärungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visuelle Präsentation: Verständnis von SC 1.4.8 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Leistung & Barrierefreiheit

Das Scrollen von Elementen, die Inhalte mit `fixed` oder `sticky` enthalten, kann Leistungs- und Barrierefreiheitsprobleme verursachen. Wenn ein Benutzer scrollt, muss der Browser den sticky- oder fixed-Inhalt an einer neuen Position neu zeichnen. Abhängig vom neu zu zeichnenden Inhalt, der Browser-Leistung und der Verarbeitungsgeschwindigkeit des Geräts kann es vorkommen, dass der Browser die Neuzeichnungen nicht mit einer Geschwindigkeit von 60 fps ausführen kann. Ein solches Szenario kann zu {{Glossary("Jank", "Ruckeln")}} führen und, was noch wichtiger ist, Barrierefreiheitsprobleme für Menschen mit Sensibilitäten verursachen. Eine Lösung besteht darin, {{cssxref("will-change", "will-change: transform")}} auf die positionierten Elemente anzuwenden, um das Element in einer eigenen Ebene zu rendern, was die Neuzeichnungsgeschwindigkeit und folglich die Leistung und Barrierefreiheit verbessert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente werden um einen bestimmten Betrag von ihrer normalen Position im Dokument verschoben, ohne dass die Verschiebung andere Elemente beeinflusst. Im folgenden Beispiel beachten Sie, wie die anderen Elemente so platziert sind, als würde "Two" den Platz seiner normalen Position einnehmen.

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

Elemente, die relativ positioniert sind, bleiben im normalen Fluss des Dokuments. Im Gegensatz dazu wird ein absolut positioniertes Element aus dem Fluss entfernt; daher werden andere Elemente so positioniert, als würde es nicht existieren. Das absolut positionierte Element wird relativ zu seinem _nächsten positionierten Vorfahren_ (d. h. dem nächsten Vorfahren, der nicht `static` ist) positioniert. Wenn kein positionierter Vorfahr existiert, wird es relativ zum ICB (Initial Containing Block – siehe auch die [W3C-Definition](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)) positioniert, welcher der Enthaltungsblock des Root-Elements des Dokuments ist.

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

Die feste Positionierung ähnelt der absoluten Positionierung, mit der Ausnahme, dass der [Enthaltungsblock](/de/docs/Web/CSS/Containing_block) des Elements der initiale Enthaltungsblock ist, der durch den _Viewport_ erstellt wird, es sei denn, ein Vorfahre hat die Eigenschaft `transform`, `perspective` oder `filter` auf einen anderen Wert als `none` gesetzt (siehe [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), wodurch dieser Vorfahre den Platz des [Enthaltungsblocks](/de/docs/Web/CSS/Containing_block) des Elements einnimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das unabhängig vom Scrollen an derselben Position bleibt. Im folgenden Beispiel bleibt die Box "One" 80 Pixel vom oberen Rand der Seite und 10 Pixel vom linken Rand fest positioniert. Auch nach dem Scrollen bleibt sie relativ zum Viewport an derselben Stelle. Wenn die [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaft auf `transform` gesetzt ist, wird ein neuer Enthaltungsblock erstellt.

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

Die folgende CSS-Regel positioniert das Element mit der ID `one` relativ, bis der Viewport so gescrollt wird, dass sich das Element 10 Pixel vom oberen Rand befindet. Über diesen Schwellenwert hinaus wird das Element auf 10 Pixel vom oberen Rand fixiert.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit Sticky-Überschriften

Eine häufige Verwendung der Sticky-Positionierung sind die Überschriften in einer alphabetisch sortierten Liste. Die Überschrift "B" wird direkt unter den Elementen angezeigt, die mit "A" beginnen, bis sie aus dem Sichtfeld gescrollt werden. Anstatt mit dem restlichen Inhalt aus dem Sichtfeld zu rutschen, bleibt die Überschrift "B" oben im Viewport fixiert, bis alle "B"-Elemente aus dem Sichtfeld gescrollt wurden. Danach wird sie von der "C"-Überschrift überdeckt und so weiter.

Sie müssen mit mindestens einer der Eigenschaften `top`, `right`, `bottom` oder `left` einen Schwellenwert definieren, damit die Sticky-Positionierung wie erwartet funktioniert. Andernfalls ist sie nicht von der relativen Positionierung zu unterscheiden.

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

#### Sticky-Positionierung mit allen festgelegten Insets

Das folgende Beispiel demonstriert das Verhalten eines Elements, bei dem alle Insets definiert sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden Sticky-Positionierung, und die Insets sind wie folgt festgelegt: 50 Pixel vom oberen Rand, 100 Pixel vom rechten Rand, 50 Pixel vom unteren Rand und 50 Pixel vom linken Rand. Ein grauer Hintergrund auf dem übergeordneten div-Element markiert den Bereich der Insets.

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

Wenn Sie beide Glühbirnen an ihren Platz bewegen, werden Sie bemerken, dass sie relativ innerhalb des Inset-Bereichs positioniert sind. Wenn Sie sie aus dem Inset-Bereich herausbewegen, bleiben sie an der Inset-Grenze in dieser Richtung fixiert (sticky).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
