---
title: position
slug: Web/CSS/position
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`position`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt fest, wie ein Element in einem Dokument positioniert wird. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} bestimmen den endgültigen Ort von positionierten Elementen.

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

  - : Das Element wird gemäß dem Normalfluss des Dokuments positioniert und dann _relativ zu sich selbst_ basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst nicht die Position anderer Elemente; daher ist der für das Element im Seitenlayout zugewiesene Platz derselbe, als ob die Position `static` wäre.

    Dieser Wert erzeugt einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Seine Wirkung auf Elemente vom Typ `table-*-group`, `table-row`, `table-column`, `table-cell` und `table-caption` ist nicht definiert.

- `absolute`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem nächsten positionierten Vorfahren (falls vorhanden) oder zum initialen [containing block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), wenn der Wert von `z-index` nicht `auto` ist. Die Ränder absolut positionierter Boxen kollabieren nicht mit anderen Rändern.

- `fixed`

  - : Das Element wird aus dem normalen Dokumentenfluss entfernt und es wird kein Platz für das Element im Seitenlayout geschaffen. Das Element wird relativ zu seinem initialen [containing block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block), der bei visuellen Medien der Viewport ist, positioniert. Seine endgültige Position wird durch die Werte von `top`, `right`, `bottom` und `left` bestimmt.

    Dieser Wert erzeugt immer einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In gedruckten Dokumenten wird das Element auf _jeder Seite_ an derselben Position platziert.

- `sticky`

  - : Das Element wird gemäß dem Normalfluss des Dokuments positioniert und dann relativ zu seinem _nächsten scrollenden Vorfahren_ und [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) (nächster Block-Level-Vorfahre) unter Berücksichtigung von `table`-bezogenen Elementen basierend auf den Werten von `top`, `right`, `bottom` und `left` verschoben. Die Verschiebung beeinflusst nicht die Position anderer Elemente.

    Dieser Wert erzeugt immer einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). Beachten Sie, dass ein klebriges Element an seinem nächsten Vorfahren "haftet", das über einen "Scrollmechanismus" verfügt (der erstellt wird, wenn `overflow` auf `hidden`, `scroll`, `auto` oder `overlay` gesetzt ist), selbst wenn dieser Vorfahr nicht der tatsächlich nächste scrollende Vorfahr ist.

    > [!NOTE]
    > Mindestens eine [inset](/de/docs/Web/CSS/inset)-Eigenschaft ({{cssxref("top")}}, {{cssxref("inset-block-start")}}, {{cssxref("right")}}, {{cssxref("inset-inline-end")}}, usw.) muss auf einen Wert ungleich `auto` gesetzt sein, damit das Element auf der Achse, auf der es klebrig gemacht werden soll, funktioniert. Wenn beide `inset`-Eigenschaften für eine Achse auf `auto` gesetzt sind, verhält sich der `sticky`-Wert auf dieser Achse wie `relative`.

## Beschreibung

### Arten der Positionierung

- Ein **positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert entweder `relative`, `absolute`, `fixed` oder `sticky` ist. (Mit anderen Worten, es ist alles außer `static`.)
- Ein **relativ positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `relative` ist. Die Eigenschaften {{Cssxref("top")}} und {{Cssxref("bottom")}} geben die vertikale Verschiebung von seiner normalen Position an; die Eigenschaften {{Cssxref("left")}} und {{Cssxref("right")}} geben die horizontale Verschiebung an.
- Ein **absolut positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `absolute` oder `fixed` ist. Die Eigenschaften {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}} und {{Cssxref("left")}} geben die Abstände von den Rändern des [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements an. (Der Containing Block ist der Vorfahr, relativ zu dem das Element positioniert ist.) Wenn das Element Ränder hat, werden diese zum Versatz hinzugefügt. Das Element stellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) für seinen Inhalt her.
- Ein **klebrig positioniertes Element** ist ein Element, dessen [berechneter](/de/docs/Web/CSS/CSS_cascade/computed_value) `position`-Wert `sticky` ist. Es wird als relativ positioniert behandelt, bis sein [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) einen festgelegten Schwellenwert überquert (z. B. das Setzen von {{Cssxref("top")}} auf einen anderen Wert als auto) innerhalb seines Flusswurzels (oder des Containers, in dem es scrollt), zu welchem Punkt es als "festsitzend" betrachtet wird, bis es den gegenüberliegenden Rand seines [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) erreicht.

Meistens werden absolut positionierte Elemente, deren {{Cssxref("height")}} und {{Cssxref("width")}} auf `auto` gesetzt sind, so dimensioniert, dass sie ihren Inhalt aufnehmen. Nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element) absolut positionierte Elemente können jedoch so eingestellt werden, dass sie den verfügbaren vertikalen Raum füllen, indem sowohl {{Cssxref("top")}} als auch {{Cssxref("bottom")}} angegeben und {{Cssxref("height")}} nicht angegeben (d. h. `auto`) werden. Ebenso können sie so eingestellt werden, dass sie den verfügbaren horizontalen Raum füllen, indem sowohl {{Cssxref("left")}} als auch {{Cssxref("right")}} angegeben und {{Cssxref("width")}} auf `auto` belassen wird.

Abgesehen von dem oben beschriebenen Fall (von absolut positionierten Elementen, die den verfügbaren Raum füllen):

- Wenn sowohl `top` als auch `bottom` angegeben sind (technisch, nicht `auto`), gewinnt `top`.
- Wenn sowohl `left` als auch `right` angegeben sind, gewinnt `left`, wenn {{Cssxref("direction")}} `ltr` ist (Englisch, horizontales Japanisch, etc.) und `right` gewinnt, wenn {{Cssxref("direction")}} `rtl` ist (Persisch, Arabisch, Hebräisch, etc.).

## Barrierefreiheit

Stellen Sie sicher, dass mit einem `absolute` oder `fixed` Wert positionierte Elemente anderen Inhalt nicht verdecken, wenn die Seite gezoomt wird, um die Textgröße zu erhöhen.

- [MDN Erklärungen zu WCAG, Guideline 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visuelle Präsentation: Verständnis von SC 1.4.8 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Leistung & Barrierefreiheit

Scrollende Elemente mit `fixed` oder `sticky` Inhalten können Leistungs- und Barrierefreiheitsprobleme verursachen. Während ein Benutzer scrollt, muss der Browser den klebrigen oder festen Inhalt an einem neuen Ort neu darstellen. Abhängig von dem Inhalt, der neu dargestellt werden muss, der Browserleistung und der Verarbeitungsgeschwindigkeit des Geräts, kann es sein, dass der Browser keine Neudarstellungen mit 60 fps verwalten kann. Solch ein Szenario kann zu {{Glossary("Jank", "Ruckeln")}} führen und, noch wichtiger, zu Barrierefreiheitsproblemen für Menschen mit Empfindlichkeiten. Eine Lösung besteht darin, {{cssxref("will-change", "will-change: transform")}} zu den positionierten Elementen hinzuzufügen, um das Element in seiner eigenen Ebene darzustellen, die Neudarstellungsgeschwindigkeit zu erhöhen und dadurch Leistung und Barrierefreiheit zu verbessern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Relative Positionierung

Relativ positionierte Elemente sind um einen bestimmten Betrag von ihrer normalen Position im Dokument verschoben, jedoch ohne dass die Verschiebung andere Elemente beeinflusst. Beachten Sie in dem folgenden Beispiel, wie die anderen Elemente so platziert sind, als ob "Two" den Raum seines normalen Standorts einnimmt.

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

Elemente, die relativ positioniert sind, bleiben im normalen Fluss des Dokuments. Im Gegensatz dazu wird ein Element, das absolut positioniert ist, aus dem Fluss genommen; daher werden andere Elemente so positioniert, als ob es nicht existieren würde. Das absolut positionierte Element wird relativ zu seinem _nächsten positionierten Vorfahren_ (d. h. der nächste Vorfahre, der nicht `static` ist) positioniert. Wenn kein positionierter Vorfahre existiert, wird es relativ zum ICB (initial containing block — siehe auch die [W3C-Definition](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)) positioniert, welcher der containing block des Wurzelelements des Dokuments ist.

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

Feste Positionierung ist der absoluten Positionierung ähnlich, mit der Ausnahme, dass der [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements der anfängliche containing block ist, der durch den _Viewport_ festgelegt wird, es sei denn, ein Vorfahre hat die Eigenschaft `transform`, `perspective`, oder `filter` auf etwas anderes als `none` gesetzt (siehe [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), was dazu führt, dass dieser Vorfahre die Position des [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements übernimmt. Dies kann verwendet werden, um ein "schwebendes" Element zu erstellen, das unabhängig vom Scrollen an derselben Position bleibt. Im folgenden Beispiel ist das Kästchen "One" 80 Pixel vom oberen Rand der Seite und 10 Pixel vom linken Rand fixiert. Auch nach dem Scrollen bleibt es relativ zum Viewport an derselben Stelle. Wenn die [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaft auf `transform` gesetzt ist, wird ebenfalls ein neuer containing block erstellt.

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

### Klebrige Positionierung

Die folgende CSS-Regel positioniert das Element mit der ID `one` relativ, bis der Viewport so gescrollt wird, dass das Element 10 Pixel vom oberen Rand entfernt ist. Über diesen Schwellenwert hinaus ist das Element fest bei 10 Pixeln vom oberen Rand.

```css
#one {
  position: sticky;
  top: 10px;
}
```

#### Liste mit klebrigen Überschriften

Ein häufiger Anwendungsfall für die klebrige Positionierung sind die Überschriften in einer alphabetischen Liste. Die "B"-Überschrift erscheint direkt unter den Elementen, die mit "A" beginnen, bis sie aus dem Bildschirm gescrollt werden. Anstatt mit dem Rest des Inhalts aus dem Bildschirm zu rutschen, bleibt die "B"-Überschrift dann oben im Viewport fixiert, bis alle "B"-Elemente aus dem Bildschirm gescrollt sind, woraufhin sie von der "C"-Überschrift überdeckt wird, und so weiter.

Sie müssen einen Schwellenwert mit mindestens einem von `top`, `right`, `bottom` oder `left` angeben, damit die klebrige Positionierung wie erwartet funktioniert. Andernfalls ist sie nicht von der relativen Positionierung zu unterscheiden.

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

#### Klebrige Position mit allen gesetzten Inset-Grenzen

Das folgende Beispiel zeigt das Verhalten eines Elements, wenn alle Inset-Grenzen gesetzt sind. Hier haben wir zwei Glühbirnen-Emojis in einem Absatz. Die Glühbirnen verwenden klebrige Positionierung, und die Inset-Grenzen sind wie folgt spezifiziert: 50px vom oberen Rand, 100px vom rechten Rand, 50px vom unteren Rand und 50px vom linken Rand. Ein grauer Hintergrund auf dem übergeordneten div-Element markiert den Inset-Bereich.

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

Wenn Sie beide Glühbirnen an ihren richtigen Platz setzen, werden Sie feststellen, dass sie relativ innerhalb des Inset-Bereichs positioniert sind. Wenn Sie sie aus dem Inset-Bereich herausbewegen, sind sie in Richtung der Inset-Grenze in dieser Richtung fixiert (sticky).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
