---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: 3c40b1f62ea1c4eabcba34b7b4c9d4b050812389
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

/* Globale Werte */
position: inherit;
position: initial;
position: revert;
position: revert-layer;
position: unset;
```

### Werte

- `static`
  - : Das Element wird entsprechend dem [normalen Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow) des Dokuments positioniert. Die Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("z-index")}} haben _keine Wirkung_. Dies ist der Standardwert.
- `relative`

  - : Das Element wird entsprechend dem normalen Fluss des Dokuments positioniert und dann _relativ zu sich selbst_ basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst die Position anderer Elemente nicht; daher nimmt das Element im Seitenlayout denselben Platz ein, als ob die Position `static` wäre.

    Dieser Wert erzeugt einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Wirkung auf `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` Elemente ist undefiniert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem nächstgelegenen positionierten Vorfahren (falls vorhanden) oder zum initialen [containing block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Ränder von absolut positionierten Boxen kollabieren nicht mit anderen Rändern [collapse](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing).

- `fixed`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt, und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem initialen [containing block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) positioniert, der im Falle von visuellen Medien das Ansichtsfenster (viewport) ist. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt immer einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In gedruckten Dokumenten wird das Element auf _jeder Seite_ an derselben Position platziert.

- `sticky`

  - : Das Element wird entsprechend dem normalen Fluss des Dokuments positioniert und dann relativ zu seinem _nächstgelegenen scrollenden Vorfahren_ und [containing block](/de/docs/Web/CSS/Containing_block) (nächstgelegener Block-Level-Vorfahre), einschließlich tabellenbezogener Elemente, basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst die Position anderer Elemente nicht.

    Dieser Wert erzeugt immer einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). Beachten Sie, dass ein Sticky-Element an seinem nächstgelegenen Vorfahren "haftet", der einen "Scrollmechanismus" hat (erstellt, wenn `overflow` `hidden`, `scroll`, `auto` oder `overlay` ist), auch wenn dieser Vorfahre nicht der tatsächlich nächstgelegene scrollende Vorfahre ist.

    > [!NOTE]
    > Mindestens eine [inset](/de/docs/Web/CSS/inset) Eigenschaft ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}} etc.) muss für die Achse, auf der das Element sticky gemacht werden soll, auf einen Wert ungleich `auto` gesetzt sein. Wenn beide `inset` Eigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der `sticky` Wert auf dieser Achse wie `relative`.

## Beschreibung

### Arten der Positionierung

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten, es ist alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `relative` ist. Die {{Cssxref("top")}} und {{Cssxref("bottom")}} Eigenschaften geben den vertikalen Versatz von seiner normalen Position an; die {{Cssxref("left")}} und {{Cssxref("right")}} Eigenschaften den horizontalen Versatz.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `absolute` oder `fixed` ist. Die {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}}, und {{Cssxref("left")}} Eigenschaften geben Versätze von den Rändern des [containing block](/de/docs/Web/CSS/Containing_block) des Elements an. (Der containing block ist der Vorfahre, relativ zu dem das Element positioniert wird.) Wenn das Element Ränder hat, werden diese zum Versatz hinzugefügt. Das Element erzeugt einen neuen [block formatting context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seine Inhalte.
- Ein **sticky positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/computed_value) `position` Wert `sticky` ist. Es wird als relativ positioniert behandelt, bis sein [containing block](/de/docs/Web/CSS/Containing_block) einen bestimmten Schwellenwert überschreitet (wie das Setzen von {{Cssxref("top")}} auf einen Wert, der nicht auto ist) innerhalb seines Fluss-Roots (oder des Containers, in dem es gescrollt wird), ab dem Punkt wird es als fixiert betrachtet, bis es die gegenüberliegende Kante seines [containing block](/de/docs/Web/CSS/Containing_block) erreicht.

Meistens werden absolut positionierte Elemente, die {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt haben, so dimensioniert, dass sie zu ihren Inhalten passen. Nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element), absolut positionierte Elemente können jedoch so eingestellt werden, dass sie den verfügbaren vertikalen Platz füllen, indem sowohl {{Cssxref("top")}} als auch {{Cssxref("bottom")}} spezifiziert und {{Cssxref("height")}} nicht angegeben (d.h. `auto`) wird. Sie können ebenfalls so eingestellt werden, dass sie den verfügbaren horizontalen Raum füllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} spezifiziert und {{Cssxref("width")}} auf `auto` gelassen wird.

Mit Ausnahme des beschriebenen Falles (von absolut positionierten Elementen, die den verfügbaren Raum füllen):

- Wenn sowohl `top` als auch `bottom` spezifiziert sind (technisch, nicht `auto`), hat `top` den Vorrang.
- Wenn sowohl `left` als auch `right` spezifiziert sind, hat `left` den Vorrang, wenn {{Cssxref("direction")}} `ltr` ist (Englisch, horizontales Japanisch, etc.) und `right` hat den Vorrang, wenn {{Cssxref("direction")}} `rtl` ist (Persisch, Arabisch, Hebräisch, etc.).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit einem `absolute` oder `fixed`-Wert positioniert sind, andere Inhalte nicht verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verstehen von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visuelle Darstellung: Erklärungen zu SC 1.4.8 | Verstehen der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Leistung & Barrierefreiheit

Das Scrollen von Elementen, die `fixed` oder `sticky` Inhalte enthalten, kann Leistungs- und Barriereprobleme verursachen. Während ein Benutzer scrollt, muss der Browser den sticky oder fixierten Inhalt an einem neuen Ort neu zeichnen. Abhängig von dem Inhalt, der neu gezeichnet werden muss, der Browserleistung und der Verarbeitungsgeschwindigkeit des Geräts, kann der Browser möglicherweise die Neuzeichnungen nicht mit 60 fps verwalten. Ein solches Szenario kann zu [Jank](/de/docs/Glossary/Jank) führen und wichtiger noch, Zugänglichkeitsprobleme für Menschen mit Empfindlichkeiten hervorrufen. Eine Lösung besteht darin, {{cssxref("will-change", "will-change: transform")}} zu den positionierten Elementen hinzuzufügen, um das Element in seiner eigenen Schicht zu rendern, was die Neuzeichnungsgeschwindigkeit verbessert und somit die Leistung und Zugänglichkeit.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente sind um einen angegebenen Betrag von ihrer normalen Position innerhalb des Dokuments verschoben, ohne dass die Verschiebung andere Elemente beeinflusst. Im folgenden Beispiel sehen Sie, wie die anderen Elemente so platziert werden, als ob "Two" den Raum seiner normalen Position einnimmt.

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

Relativ positionierte Elemente bleiben im normalen Fluss des Dokuments. Im Gegensatz dazu wird ein absolut positioniertes Element aus dem Fluss genommen; daher werden andere Elemente positioniert, als ob es nicht existiert. Das absolut positionierte Element wird relativ zu seinem _nächstgelegenen positionierten Vorfahren_ positioniert (d.h. dem nächstgelegenen Vorfahren, der nicht `static` ist). Wenn ein positionierter Vorfahre nicht existiert, wird es relativ zum ICB (initial containing block — siehe auch die [Definition des W3C](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)) positioniert, der den containing block des Wurzelelements des Dokuments darstellt.

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

Feste Positionierung ist ähnlich wie die absolute Positionierung, mit der Ausnahme, dass der [containing block](/de/docs/Web/CSS/Containing_block) des Elements der initiale containing block ist, der durch das _Viewport_ etabliert wird, es sei denn, irgendein Vorfahre hat `transform`, `perspective` oder `filter` Eigenschaft auf etwas anderes als `none` gesetzt (siehe [CSS Transforms Spezifikation](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), was dann dazu führt, dass dieser Vorfahre den Platz des [containing block](/de/docs/Web/CSS/Containing_block) des Elements einnimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das unabhängig vom Scrollen an derselben Position bleibt. Im folgenden Beispiel ist die Box "One" 80 Pixel von oben und 10 Pixel von links fixiert. Auch nach dem Scrollen bleibt sie relativ zum Viewport an derselben Stelle. Auch wenn die [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaft auf `transform` gesetzt ist, wird ein neuer Containing Block erstellt.

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

Die folgende CSS-Regel positioniert das Element mit der ID `one` relativ, bis das Viewport gescrollt wird, sodass das Element 10 Pixel vom oberen Rand entfernt ist. Über diesen Schwellenwert hinaus wird das Element auf 10 Pixel von oben fixiert.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit Sticky-Kopfzeilen

Eine häufige Verwendung für Sticky-Positionierung ist für die Kopfzeilen in einer alphabetisierten Liste. Die "B"-Kopfzeile erscheint direkt unter den Elementen, die mit "A" beginnen, bis sie aus dem Bildschirm gescrollt wird. Anstatt mit dem Rest des Inhalts aus dem Bildschirm zu rutschen, bleibt die "B"-Kopfzeile dann an der Oberseite des Viewports fixiert, bis alle "B"-Elemente aus dem Bildschirm gescrollt sind, an welchem Punkt sie von der "C"-Kopfzeile überdeckt wird und so weiter.

Sie müssen einen Schwellenwert mit mindestens einer der Eigenschaften `top`, `right`, `bottom` oder `left` für die Sticky-Positionierung spezifizieren, damit sie wie erwartet funktioniert. Andernfalls wird sie von der relativen Positionierung nicht zu unterscheiden sein.

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

#### Sticky-Position mit allen gesetzten Randgrenzen

Das folgende Beispiel zeigt das Verhalten eines Elements, bei dem alle Randgrenzen gesetzt sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden Sticky-Positionierung, und die Randgrenzen sind als 50px vom oberen Rand, 100px vom rechten Rand, 50px vom unteren Rand, und 50px vom linken Rand angegeben. Ein grauer Hintergrund auf dem übergeordneten Div-Element kennzeichnet den Bereich der Randeinsätze.

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

Wenn Sie beide Glühbirnen an ihren richtigen Platz bringen, werden Sie feststellen, dass sie relativ innerhalb des Randbereichs positioniert sind. Wenn Sie sie aus dem Randbereich herausbewegen, haften sie (sticky) an der Randgrenze in dieser Richtung fest.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Lernen Sie CSS: Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
