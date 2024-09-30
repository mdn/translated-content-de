---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: 3c40b1f62ea1c4eabcba34b7b4c9d4b050812389
---

{{CSSRef}}

Die **`position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie ein Element in einem Dokument positioniert wird. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen die endgültige Position positionierter Elemente.

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

  - : Das Element wird gemäß dem normalen Fluss des Dokuments positioniert und dann _relativ zu sich selbst_ basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst die Position anderer Elemente nicht; der für das Element im Seitenlayout vorgesehene Platz ist derselbe, als wäre die Position `static`.

    Dieser Wert erzeugt einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Wirkung auf `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` Elemente ist undefiniert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem nächstgelegenen positionierten Vorfahren (falls vorhanden) oder zum initialen [Begrenzungsblock](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Margen von absolut positionierten Boxen kollabieren nicht mit anderen Margen.

- `fixed`

  - : Das Element wird aus dem normalen Dokumentfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem initialen [Begrenzungsblock](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert, der im Falle von visuellen Medien der Viewport ist. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt immer einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In gedruckten Dokumenten wird das Element auf _jeder Seite_ an der gleichen Stelle platziert.

- `sticky`

  - : Das Element wird gemäß dem normalen Fluss des Dokuments positioniert und dann relativ zu seinem _nächstgelegenen scrollenden Vorfahren_ und [Begrenzungsblock](/de/docs/Web/CSS/Containing_block) (nächstgelegener block-level Vorfahre), einschließlich Tabellen-bezogener Elemente, basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst die Position anderer Elemente nicht.

    Dieser Wert erzeugt immer einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). Beachten Sie, dass ein sticky Element an seinem nächsten Vorfahren "haftet", der einen "Scrolling Mechanismus" hat (erzeugt, wenn `overflow` `hidden`, `scroll`, `auto` oder `overlay` ist), auch wenn dieser Vorfahre nicht der tatsächlich am nächsten scrollende Vorfahre ist.

    > [!NOTE]
    > Mindestens eine [inset](/de/docs/Web/CSS/inset) Eigenschaft ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}}, etc.) muss für die Achse, auf der das Element sticky gemacht werden soll, auf einen Wert ungleich `auto` gesetzt werden. Wenn beide `inset` Eigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der `sticky` Wert auf dieser Achse wie `relative`.

## Beschreibung

### Arten der Positionierung

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten, alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `relative` ist. Die Eigenschaften {{Cssxref("top")}} und {{Cssxref("bottom")}} spezifizieren den vertikalen Versatz von seiner normalen Position; die Eigenschaften {{Cssxref("left")}} und {{Cssxref("right")}} den horizontalen Versatz.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `absolute` oder `fixed` ist. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}}, und {{Cssxref("left")}} bestimmen die Versätze zu den Kanten des [Begrenzungsblocks](/de/docs/Web/CSS/Containing_block) des Elements. (Der Begrenzungsblock ist der Vorfahre, relativ zu dem das Element positioniert ist.) Wenn das Element Ränder hat, werden diese zum Versatz hinzugefügt. Das Element erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt.
- Ein **sticky positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `sticky` ist. Es wird als relativ positioniert behandelt, bis sein [Begrenzungsblock](/de/docs/Web/CSS/Containing_block) einen festgelegten Schwellenwert überschreitet (wie das Setzen von {{Cssxref("top")}} auf einen Wert ungleich auto) innerhalb seines Fluss-Roots (oder des Containers, in dem es scrollt), zu welchem Zeitpunkt es als "geklebt" behandelt wird, bis es den gegenüberliegenden Rand seines [Begrenzungsblocks](/de/docs/Web/CSS/Containing_block) erreicht.

Meistens werden absolut positionierte Elemente, die {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt haben, so dimensioniert, dass sie ihrem Inhalt entsprechen. Nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element), absolut positionierte Elemente können so gestaltet werden, dass sie den verfügbaren vertikalen Raum ausfüllen, indem sowohl {{Cssxref("top")}} als auch {{Cssxref("bottom")}} spezifiziert werden und {{Cssxref("height")}} nicht festgelegt wird (d.h. `auto`). Sie können ebenso den verfügbaren horizontalen Raum füllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} spezifiziert werden und {{Cssxref("width")}} auf `auto` belassen wird.

Außer in dem beschriebenen Fall (von absolut positionierten Elementen, die den verfügbaren Raum ausfüllen):

- Wenn sowohl `top` als auch `bottom` angegeben sind (technisch, nicht `auto`), gewinnt `top`.
- Wenn sowohl `left` als auch `right` angegeben sind, gewinnt `left`, wenn {{Cssxref("direction")}} `ltr` ist (Englisch, horizontales Japanisch, etc.) und `right` gewinnt, wenn {{Cssxref("direction")}} `rtl` ist (Persisch, Arabisch, Hebräisch, etc.).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einem `absolute` oder `fixed` Wert beim Vergrößern der Seite, um die Textgröße zu erhöhen, andere Inhalte nicht verdecken.

- [MDN Verständliche WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visuelle Darstellung: Verständnis von SC 1.4.8 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Leistung & Barrierefreiheit

Das Scrollen von Elementen, die `fixed` oder `sticky` Inhalte enthalten, kann Leistungs- und Barrierefreiheitsprobleme verursachen. Wenn ein Benutzer scrollt, muss der Browser den sticky oder fixed Inhalt an einem neuen Ort neu zeichnen. Je nach dem Inhalt, der neu gezeichnet werden muss, der Leistung des Browsers und der Verarbeitungsgeschwindigkeit des Geräts, kann der Browser möglicherweise nicht bei 60 fps neu zeichnen. Solch ein Szenario kann zu [Ruckeln](/de/docs/Glossary/Jank) führen und, was noch wichtiger ist, zu Barrierefreiheitsproblemen für Menschen mit Empfindlichkeiten. Eine Lösung besteht darin, {{cssxref("will-change", "will-change: transform")}} zu den positionierten Elementen hinzuzufügen, um das Element in seiner eigenen Schicht zu rendern, was die Neuzeichnungsgeschwindigkeit verbessert und damit die Leistung und Barrierefreiheit verbessert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente werden um einen bestimmten Betrag von ihrer normalen Position im Dokument verschoben, ohne dass die Verschiebung andere Elemente beeinflusst. Im untenstehenden Beispiel beachten Sie, wie die anderen Elemente platziert sind, als ob "Two" den Raum seines normalen Standorts einnehmen würde.

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

Relativ positionierte Elemente bleiben im normalen Fluss des Dokuments. Im Gegensatz dazu wird ein absolut positioniertes Element aus dem Fluss herausgenommen; daher werden andere Elemente so positioniert, als ob es nicht existieren würde. Das absolut positionierte Element wird relativ zu seinem _nächsten positionierten Vorfahren_ positioniert (d.h. der nächste Vorfahre, der nicht `static` ist). Wenn ein positionierter Vorfahre nicht existiert, wird es relativ zum ICB (initiales Begrenzungsblock — siehe auch die [W3C-Definition](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)) positioniert, welches das Begrenzungsblock des root-Elements des Dokuments ist.

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

Feste Positionierung ist ähnlich wie absolute Positionierung, mit der Ausnahme, dass der [Begrenzungsblock](/de/docs/Web/CSS/Containing_block) des Elements der anfängliche Begrenzungsblock ist, der durch den _Viewport_ festgelegt wird, es sei denn, ein Vorfahre hat die `transform`, `perspective`, oder `filter` Eigenschaft auf etwas anderes als `none` gesetzt (siehe [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), was dann dazu führt, dass der Vorfahre anstelle des Elements den [Begrenzungsblock](/de/docs/Web/CSS/Containing_block) übernimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das unabhängig von Scrolling an derselben Position bleibt. Im untenstehenden Beispiel ist der Kasten "One" fest 80 Pixel vom oberen Rand der Seite und 10 Pixel von links. Auch nach dem Scrollen bleibt er relativ zum Viewport an der gleichen Stelle. Wenn die [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaft auf `transform` gesetzt wird, wird ein neuer Begrenzungsblock erstellt.

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

Die folgende CSS-Regel positioniert das Element mit der ID `one` relativ, bis das Viewport so gescrollt wird, dass das Element 10 Pixel vom oberen Rand entfernt ist. Über diesen Schwellenwert hinaus wird das Element fest auf 10 Pixel vom oberen Rand fixiert.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit sticky Überschriften

Ein häufiger Anwendungsfall für die sticky Positionierung sind die Überschriften in einer alphabetischen Liste. Die "B" Überschrift wird direkt unter den Elementen erscheinen, die mit "A" beginnen, bis sie vom Bildschirm gescrollt werden. Anstatt mit dem Rest des Inhalts vom Bildschirm zu rutschen, bleibt die "B" Überschrift dann oben im Viewport fixiert, bis alle "B" Elemente vom Bildschirm gescrollt sind, woraufhin sie von der "C" Überschrift abgedeckt wird, und so weiter.

Man muss einen Schwellenwert mit mindestens einem von `top`, `right`, `bottom`, oder `left` für die sticky Positionierung angeben, damit sie sich wie erwartet verhält. Andernfalls ist sie von der relativen Positionierung nicht zu unterscheiden.

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

#### Sticky Position mit allen gesetzten Inset-Grenzen

Das folgende Beispiel zeigt das Verhalten eines Elements, wenn alle Inset-Grenzen gesetzt sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden sticky Positionierung und die Inset-Grenzen sind spezifiziert auf 50px von oben, 100px von rechts, 50px von unten und 50px von links. Ein grauer Hintergrund auf dem übergeordneten div-Element markiert den Inset-Bereich.

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

Wenn Sie beide Glühbirnen in ihrer richtigen Position platzieren, werden Sie feststellen, dass sie relativ innerhalb des Inset-Bereichs positioniert sind. Wenn Sie sie aus dem Inset-Bereich heraus bewegen, werden sie in der entsprechenden Richtung an die Inset-Grenze fixiert (sticky).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS lernen: Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
