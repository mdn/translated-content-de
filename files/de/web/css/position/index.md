---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie ein Element in einem Dokument positioniert wird. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen die endgültige Position von positionierten Elementen.

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
  - : Das Element wird gemäß dem [normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow) des Dokuments positioniert. Die Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("z-index")}} haben _keine Wirkung_. Dies ist der Standardwert.
- `relative`

  - : Das Element wird gemäß dem normalen Fluss des Dokuments positioniert und dann _relativ zu sich selbst_ basierend auf den Werten von `top`, `right`, `bottom` und `left` versetzt. Der Versatz beeinflusst nicht die Position anderer Elemente; daher bleibt der Raum, der für das Element im Seitenlayout vorgesehen ist, derselbe, als wäre die Position `static`.

    Dieser Wert erzeugt einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Seine Wirkung auf Elemente von `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` ist undefiniert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentfluss entfernt und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem nächsten positionierten Vorfahren (falls vorhanden) oder dem anfänglichen [umgebenden Block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Ränder von absolut positionierten Boxen [kollabieren](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) nicht mit anderen Rändern.

- `fixed`

  - : Das Element wird aus dem normalen Dokumentfluss entfernt und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem anfänglichen [umgebenden Block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert, was im Fall von visuellen Medien der Viewport ist. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt immer einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In ausgedruckten Dokumenten wird das Element auf _jeder Seite_ an derselben Position platziert.

- `sticky`

  - : Das Element wird gemäß dem normalen Fluss des Dokuments positioniert und dann relativ zu seinem _nächsten scrollenden Vorfahren_ und [umgebenden Block](/de/docs/Web/CSS/Containing_block) (nächster block-level Vorfahre), einschließlich tabellenbezogener Elemente, basierend auf den Werten von `top`, `right`, `bottom` und `left` versetzt. Der Versatz beeinflusst nicht die Position anderer Elemente.

    Dieser Wert erzeugt immer einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). Beachten Sie, dass ein "sticky" Element an seinem nächsten Vorfahren "haftet", der einen "Scrolling-Mechanismus" hat (entsteht, wenn `overflow` `hidden`, `scroll`, `auto`, oder `overlay` ist), auch wenn dieser Vorfahre nicht der tatsächlich nächste scrollende Vorfahre ist.

    > [!NOTE]
    > Mindestens eine [inset](/de/docs/Web/CSS/inset) Eigenschaft ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}}, etc.) muss auf einen nicht-`auto` Wert gesetzt werden, damit die Achse, auf der das Element klebend gemacht werden soll, funktioniert. Wenn beide `inset` Eigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der `sticky` Wert auf dieser Achse wie `relative`.

## Beschreibung

### Arten der Positionierung

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten: es ist alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `relative` ist. Die Eigenschaften {{Cssxref("top")}} und {{Cssxref("bottom")}} geben den vertikalen Versatz von seiner normalen Position an; die Eigenschaften {{Cssxref("left")}} und {{Cssxref("right")}} geben den horizontalen Versatz an.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `absolute` oder `fixed` ist. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} geben die Versätze von den Rändern des Elements [umgebenden Blocks](/de/docs/Web/CSS/Containing_block) an. (Der umgebende Block ist der Vorfahre, relativ zu dem das Element positioniert wird.) Wenn das Element Ränder hat, werden diese zum Versatz hinzugefügt. Das Element erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt.
- Ein **klebrig positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `sticky` ist. Es wird als relativ positioniert behandelt, bis sein [umgebender Block](/de/docs/Web/CSS/Containing_block) einen bestimmten Schwellenwert überschreitet (wie das Setzen von {{Cssxref("top")}} auf einen anderen Wert als auto) innerhalb seiner Flusswurzel (oder des Containers, in dem es scrollt), an welchem Punkt es als "festgeklebt" betrachtet wird, bis es den gegenüberliegenden Rand seines [umgebenden Blocks](/de/docs/Web/CSS/Containing_block) erreicht.

Die meiste Zeit werden absolut positionierte Elemente, die {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt haben, so dimensioniert, dass sie in ihren Inhalt passen. Allerdings können nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element), absolut positionierte Elemente so gestaltet werden, dass sie den verfügbaren vertikalen Raum ausfüllen, indem sowohl {{Cssxref("top")}} als auch {{Cssxref("bottom")}} angegeben werden und {{Cssxref("height")}} nicht angegeben wird (d.h. `auto`). Ebenso können sie so gestaltet werden, dass sie den verfügbaren horizontalen Raum ausfüllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} angegeben werden und {{Cssxref("width")}} auf `auto` belassen wird.

Mit Ausnahme des oben beschriebenen Falls (von absolut positionierten Elementen, die den verfügbaren Raum ausfüllen):

- Wenn sowohl `top` als auch `bottom` angegeben sind (technisch, nicht `auto`), gewinnt `top`.
- Wenn sowohl `left` als auch `right` angegeben sind, gewinnt `left`, wenn {{Cssxref("direction")}} `ltr` ist (Englisch, horizontales Japanisch, etc.) und `right` gewinnt, wenn {{Cssxref("direction")}} `rtl` ist (Persisch, Arabisch, Hebräisch, etc.).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit einem `absolute` oder `fixed` Wert positioniert sind, anderen Inhalt nicht verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis für WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visuelle Präsentation: Verständnis von SC 1.4.8 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Leistung & Barrierefreiheit

Scrollende Elemente, die `fixed` oder `sticky` Inhalte enthalten, können Leistungs- und Barrierefreiheitsprobleme verursachen. Während ein Benutzer scrollt, muss der Browser den klebrigen oder fixierten Inhalt an einer neuen Position neu zeichnen. Abhängig vom Inhalt, der neu gezeichnet werden muss, der Leistung des Browsers und der Verarbeitungsgeschwindigkeit des Geräts, ist es möglich, dass der Browser die Neuzeichnungen nicht mit 60 fps verwalten kann. Ein solches Szenario kann zu {{Glossary("Jank", "Ruckeln")}} führen und, was noch wichtiger ist, zu Barrierefreiheitsproblemen für Personen mit Sensitivitäten. Eine Lösung ist, dem positionierten Element {{cssxref("will-change", "will-change: transform")}} hinzuzufügen, um das Element in seiner eigenen Schicht darzustellen, was die Neuzeichnungsgeschwindigkeit und somit Leistung und Barrierefreiheit verbessert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente sind um einen bestimmten Betrag von ihrer normalen Position innerhalb des Dokuments versetzt, ohne dass der Versatz andere Elemente beeinflusst. Im folgenden Beispiel beachten Sie, wie die anderen Elemente platziert werden, als ob "Two" den Raum seiner normalen Position einnehmen würde.

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

Relativ positionierte Elemente bleiben im normalen Fluss des Dokuments. Im Gegensatz dazu wird ein absolut positioniertes Element aus dem Fluss genommen; daher werden andere Elemente so positioniert, als ob es nicht existieren würde. Das absolut positionierte Element wird relativ zu seinem _nächsten positionierten Vorfahren_ (d.h. dem nächsten Vorfahren, der nicht `static` ist) positioniert. Wenn ein positionierter Vorfahre nicht existiert, wird es relativ zum ICB (anfänglicher umgebender Block – siehe auch die [W3C-Definition](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)) positioniert, der der umgebende Block des Stammes des Dokuments ist.

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

Feste Positionierung ist ähnlich wie absolute Positionierung, mit der Ausnahme, dass der [umgebende Block](/de/docs/Web/CSS/Containing_block) des Elements der anfängliche umgebende Block ist, der durch den _Viewport_ festgelegt wird, es sei denn, ein Vorfahre hat die `transform`, `perspective` oder `filter` Eigenschaft auf einen anderen Wert als `none` gesetzt (siehe [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), wodurch dieser Vorfahre die Stelle des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block) des Elements einnimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das auch beim Scrollen an derselben Position bleibt. Im folgenden Beispiel bleibt Box "One" 80 Pixel vom oberen Rand der Seite und 10 Pixel vom linken Rand entfernt fixiert. Selbst nach dem Scrollen bleibt es relativ zum Viewport an derselben Stelle. Auch wenn die [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaft auf `transform` gesetzt ist, wird ein neuer umgebender Block erstellt.

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

Die folgende CSS-Regel positioniert das Element mit der ID `one` relativ, bis der Viewport so gescrollt wird, dass das Element 10 Pixel vom oberen Rand entfernt ist. Jenseits dieses Schwellenwertes wird das Element 10 Pixel vom oberen Rand fixiert.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit klebrigen Überschriften

Eine häufige Verwendung für Sticky-Positionierung ist für die Überschriften in einer alphabetisch sortierten Liste. Die "B"-Überschrift erscheint direkt unter den Einträgen, die mit "A" beginnen, bis sie aus dem Bildschirm gescrollt werden. Anstatt mit dem Rest des Inhalts vom Bildschirm zu gleiten, bleibt die "B"-Überschrift dann oben im Viewport fixiert, bis alle "B"-Elemente vom Bildschirm gescrollt wurden, an welchem Punkt sie von der "C"-Überschrift überdeckt wird, und so weiter.

Sie müssen einen Schwellenwert mit mindestens einem `top`, `right`, `bottom` oder `left` für Sticky-Positionierung angeben, um das erwartete Verhalten zu erhalten. Andernfalls ist es nicht von relativer Positionierung zu unterscheiden.

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

#### Sticky-Position mit allen festgelegten Inset-Grenzen

Das folgende Beispiel zeigt das Verhalten eines Elements, wenn alle Inset-Grenzen festgelegt sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden Sticky-Positionierung und die Inset-Grenzen sind mit 50px vom oberen Rand, 100px vom rechten Rand, 50px vom unteren Rand und 50px vom linken Rand angegeben. Ein grauer Hintergrund auf dem Eltern-div-Element markiert den Inset-Bereich.

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

Wenn Sie beide Glühbirnen an ihren richtigen Platz gesetzt haben, werden Sie feststellen, dass sie relativ innerhalb des Inset-Bereichs positioniert sind. Wenn Sie sie aus dem Inset-Bereich heraus bewegen, werden sie im Gegensatz dazu (sticky) an der Inset-Grenze in diese Richtung fixiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen CSS: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
