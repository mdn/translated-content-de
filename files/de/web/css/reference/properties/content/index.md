---
title: content
slug: Web/CSS/Reference/Properties/content
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

Die **`content`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) ersetzt den Inhalt durch einen generierten Wert. Sie kann verwendet werden, um zu definieren, was in einem Element oder Pseudo-Element gerendert wird. Für Elemente legt die `content`-Eigenschaft fest, ob das Element normal (`normal` oder `none`) oder mit einem Bild (und zugehörigem "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt gerendert wird.

Objekte, die mit der `content`-Eigenschaft eingefügt werden, sind **anonyme {{Glossary("replaced_elements", "ersetzte Elemente")}}**.

{{InteractiveExample("CSS Demo: content", "tabbed-shorter")}}

```css interactive-example
.topic-games::before {
  content: "🎮 " / "games";
}

.topic-weather::before {
  content: "⛅ " / "cloudy";
}

.topic-hot::before {
  content: url("/shared-assets/images/examples/fire.png") / "On fire";
  margin-right: 6px;
}
```

```html interactive-example
<p class="topic-games">Game News: A new inFamous is not planned</p>

<p class="topic-weather">
  Weather for Today: Heat, violent storms and twisters
</p>

<p class="topic-hot">Trending Article: Must-watch videos of the week</p>
```

## Syntax

```css
/* Keywords that cannot be combined with other values */
content: normal;
content: none;

/* <content-replacement>: <image> values */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* speech output: alternative text after a "/"  */
content: url("../img/test.png") / "This is the alt text";
content: counter(chapter) / "Chapter " counter(chapter);

/* <string> value */
content: "unparsed text";

/* <counter> values, optionally with <list-style-type> */
content: counter(chapter_counter);
content: counter(chapter_counter, upper-roman);
content: counters(section_counter, ".");
content: counters(section_counter, ".", decimal-leading-zero);

/* attr() value linked to the HTML attribute value */
content: attr(href);

/* <quote> values */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* <content-list>: a list of content values. 
Several values can be used simultaneously */
content: "prefix" url("http://www.example.com/test.png");
content: "prefix" url("/img/test.png") "suffix" / "Alt text";
content: open-quote counter(chapter_counter);

/* Global values */
content: inherit;
content: initial;
content: revert;
content: revert-layer;
content: unset;
```

### Werte

Der Wert kann sein:

- Eines von zwei Schlüsselwörtern: `none` oder `normal`. `normal` ist der Standardwert der Eigenschaft.
- `<content-replacement>`, wenn ein DOM-Knoten ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert, der `<string>`, `<counter>` oder [`attr()`](#attrx)-Funktionswerte enthalten kann, vorangestellt durch einen Schrägstrich (`/`).

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden genauer beschrieben:

- `none`
  - : Bei Anwendung auf ein Pseudo-Element wird das Pseudo-Element nicht generiert.
    Bei Anwendung auf ein Element hat der Wert keine Auswirkung.

- `normal`
  - : Für die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente wird dieser Wert zu `none` berechnet. Für andere Pseudo-Elemente wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erzeugt er den anfänglichen (oder normalen) Inhalt des Elements. Für reguläre Elemente oder Seitenrandboxen wird er zu den Nachfahren des Elements berechnet. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenfolge, die in passende einfache oder doppelte Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("image")}}
  - : Ein {{cssxref("image")}}, das ein anzuzeigendes Bild darstellt. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("gradient")}}-Datentyp entsprechen oder ein Teil der Webseite selbst sein, definiert durch die {{cssxref("element()")}}-Funktion.

- `<counter>`
  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), in der Regel eine Zahl, die durch Berechnungen erzeugt wird, die durch die Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} definiert sind. Er kann entweder mit der {{cssxref("counter()")}}- oder {{cssxref("counters()")}}-Funktion angezeigt werden.
    - {{cssxref("counter()")}}
      - : Die {{cssxref("counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers mit dem angegebenen Namen im Geltungsbereich an dem betreffenden Pseudo-Element. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} formatiert (`decimal` standardmäßig).
    - {{cssxref("counters()")}}
      - : Die {{cssxref("counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Geltungsbereich an dem betreffenden Pseudo-Element, von äußerstem zu innerstem, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) angezeigt.

- `<quote>`
  - : Der `<quote>`-Datentyp enthält sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge aus der {{cssxref("quotes")}}-Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt ein, erhöht (verringert) jedoch die Verschachtelungsebene für Anführungszeichen.

- `<target>`
  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise vom Zielende eines Links erstellen. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`
  - : Der `<leader()>`-Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (gleich `leader(".")`, `leader("_")` und `leader(" ")`), oder ein `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Leader-Typ als wiederholendes Muster eingefügt, das visuell Inhalte über eine horizontale Linie verbindet.

- `attr(x)`
  - : Die `attr(x)`-CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine nicht analysierte Zeichenfolge, die den Attributnamen darstellt. Wenn es kein Attribut `x` gibt, wird eine leere Zeichenfolge zurückgegeben. Die Groß- und Kleinschreibung des Attributnamenparameters hängt von der Dokumentsprache ab.

- Alternativtext: `/ <string> | <counter> | attr()`
  - : Ein Alternativtext kann für ein Bild oder alle `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich gefolgt von einer Kombination aus Zeichenfolgen, Zählern und `attr()`-Funktionen hinzugefügt wird. Der Alternativtext ist für die Sprachausgabe durch Bildschirmausleseprogramme gedacht, kann aber auch in einigen Browsern angezeigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Von CSS generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Daher wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) repräsentiert und bestimmte Kombinationen aus unterstützender Technologie und Browsern werden ihn nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die entscheidend für das Verständnis des Zwecks der Seite sind, ist es besser, ihn im Hauptdokument zu enthalten.

Wenn eingefügter Inhalt nicht dekorativ ist, überprüfen Sie, ob die Informationen unterstützenden Technologien zur Verfügung gestellt werden und auch verfügbar sind, wenn CSS ausgeschaltet ist.

- [Barrierefreiheit-Unterstützung für von CSS generierten Inhalt – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitlinie 1.3: Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verstehen des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Versagen des Erfolgskriteriums 1.3.1: Einfügen von nicht dekorativem, generiertem Inhalt](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erstellen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für Elementeersetzungen](#elementersetzung_mit_url).

### Anhängen von Zeichenfolgen basierend auf der Klasse eines Elements

Dieses Beispiel fügt generierten Text nach dem Text von Elementen ein, die einen bestimmten Klassennamen haben. Der Text wird rot gefärbt.

#### HTML

```html
<h2>Paperback Best Sellers</h2>
<ol>
  <li>Political Thriller</li>
  <li class="new-entry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="new-entry">Vampire Romance</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " New!"; /* The leading space creates separation
                       between the DOM node's content and the generated content
                       being added. */
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Appending_strings_based_on_an_elements_class', '100%', 160)}}

### Anführungszeichen

Dieses Beispiel fügt unterschiedlich gefärbte Anführungszeichen um Zitate ein.

#### HTML

```html
<p>
  According to Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
    I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.
  </q>
  We must understand that there is nothing fundamentally wrong with building on
  the contributions of others.
</p>
<p lang="fr-fr">
  Mais c'est Magritte qui a dit,
  <q lang="fr-fr"> Ceci n'est pas une pipe. </q>.
</p>
```

#### CSS

```css
q {
  color: blue;
}

q::before,
q::after {
  font-size: larger;
  color: red;
  background: #cccccc;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}
```

#### Ergebnis

{{EmbedLiveSample('Quotes', '100%', 200)}}

Beachten Sie, dass der [Typ der erzeugten Zitate](/de/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig vor und nach {{HTMLElement("q")}}-Elementen Öffnungs- und Schließungszeichen ein, sodass die Anführungszeichen in diesem Beispiel erscheinen würden, ohne dass sie explizit gesetzt werden. Sie könnten durch das Setzen der jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` oder auf `none` ausgeschaltet werden. Sie können auch durch das Festlegen der {{cssxref("quotes")}}-Eigenschaft auf `none` ausgeschaltet werden.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s vor alle Listenelemente ({{HTMLElement("li")}}) in ungeordneten Listen ({{HTMLElement("ol")}}) eingefügt wird, um ein detaillierteres Markierungszeichen für Listenelemente zu erstellen.

#### HTML

```html
<ol>
  <li>Dogs</li>
  <li>Cats</li>
  <li>
    Birds
    <ol>
      <li>Owls</li>
      <li>Ducks</li>
      <li>Flightless</li>
    </ol>
  </li>
  <li>Marsupials</li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: items;
  margin-left: 2em;
}
li {
  counter-increment: items;
}
li::marker {
  content: "item " counters(items, ".", numeric) ": ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_text_to_list_item_counters', '100%', 200)}}

Der generierte Inhalt auf der Markierung jedes Listenelements fügt den Text "Element " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, dem ": ", ein Doppelpunkt und ein weiteres Leerzeichen folgen. Die {{cssxref("counters()")}}-Funktion definiert einen numerischen `items`-Zähler, bei dem die Nummern verschachtelter geordneter Listen in den meisten Browsern mit einem Punkt (`.`) getrennt werden.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um jeden voll qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als den Inhalt des {{cssxref("::after")}}-Pseudo-Elements hinzuzufügen.

#### HTML

```html
<ul>
  <li><a href="https://mozilla.com">Mozilla</a></li>
  <li><a href="/">MDN</a></li>
  <li><a href="https://openwebdocs.org">OpenWebDocs</a></li>
</ul>
```

#### CSS

```css
a[href^="https://"]::after {
  content: " (URL: " attr(href) ")";
  color: darkgreen;
}
```

#### Ergebnis

{{EmbedLiveSample('Strings_with_attribute_values', '100%', 200)}}

Der generierte Inhalt ist der Wert des `href`-Attributs, vorangestellt von "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit Alternativtext

Dieses Beispiel fügt vor allen Links ein Bild ein. Zwei `content`-Werte werden angegeben. Der spätere `content`-Wert enthält ein Bild mit Alternativtext, den ein Bildschirmleser als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild zu zeigen und den Alternativtext festzulegen, wird unten gezeigt. Es wird auch die Schriftart und Farbe für den Inhalt festgelegt.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der Wert des Alternativtextes wird im Barrierefreiheitsbaum des Browsers offengelegt. Konsultieren Sie den Abschnitt [Siehe auch](#siehe_auch) für browserspezifische Barrierefreiheitspanels.

Wenn Sie einen Bildschirmleser verwenden, sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Sie können das `::before`-Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitspanel anzeigen.

### Einfügen von Zählern in Alternativtext

Dieses Beispiel zeigt eine Liste von Links zu einer Reihe von Buchkapiteln und zeigt, wie Sie generierten Inhalt verwenden können, um ein Buchsymbol und einen Zähler vor jedem Kapitel einzufügen, mit Alternativtext, der das Wort "Chapter" anstelle des Symbols enthält. Dies führt dazu, dass das Wort "Chapter" und die Kapitelnummer vor dem Text in jedem Link {{Glossary("accessible_name", "zugänglicher Name")}} stehen, was Bildschirmlesernutzern angekündigt wird, wenn der Link den Fokus erhält.

#### HTML

Wir fügen eine Überschrift und gefolgt von einer geordneten Liste von Kapiteltitel-Links mit {{htmlelement("ol")}}, {{htmlelement("li")}} und {{htmlelement("a")}} Elementen ein.

```html live-sample___alt-counter
<h2>Chapter list</h2>
<ol>
  <li><a href="#">A stranger calls</a></li>
  <li><a href="#">Two owls</a></li>
  <li><a href="#">Dinner was bland</a></li>
  <li><a href="#">Three owls</a></li>
  <li><a href="#">No-one answered the door</a></li>
  <li><a href="#">The stranger leaves</a></li>
  <li><a href="#">Bedtime</a></li>
</ol>
```

#### CSS

Das CSS enthält ein {{cssxref("counter-reset")}} für den `chapter`-Zähler auf dem `<ol>`-Element. Wir inkrementieren auch den `chapter`-Zähler auf jedem `<li>`-Element mit {{cssxref("counter-increment")}} und entfernen die Listenmarker, indem wir den {{cssxref("list-style-type")}}-Wert auf `none` setzen.

```css live-sample___alt-counter
ol {
  counter-reset: chapter;
}

li {
  counter-increment: chapter;
  list-style-type: none;
}
```

Wir setzen dann die {{cssxref("::before")}}-Pseudo-Elemente der `<a>`-Elemente mit generiertem `content` gleich einem Buch-Emoji, um ein Kapitel darzustellen, plus den aktuellen `chapter`-Zählerwert, und einem Leerzeichen, damit der generierte Inhalt vom Linktext getrennt ist. Schließlich setzen wir den Alternativtext des generierten Inhalts auf den aktuellen `chapter`-Zählerwert, vorangestellt von dem Wort "Chapter".

```css live-sample___alt-counter
a::before {
  content: "📖 " counter(chapter) " " / "Chapter " counter(chapter);
}
```

#### Ergebnis

{{EmbedLiveSample('alt-counter', '100%', 270)}}

Wenn ein Bildschirmleser zu einem Link in der Liste navigiert, werden unterstützende Browser "Chapter" gefolgt von der aktuellen Zählernummer sowie dem Linktext ankündigen, zum Beispiel "Chapter 1 A stranger calls" und "Chapter 2 Two owls".

### Elementersetzung mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden durch ein SVG ersetzt, das den {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet.

Pseudo-Elemente werden bei ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, wird kein `::after` oder `::before`, das darauf zutrifft, generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after`-Deklarationsblock ein und versuchen, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

#### HTML

```html
<div id="replaced">This content is replaced!</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

/* will not show if element replacement is supported */
div::after {
  content: " (" attr(id) ")";
}
```

#### Ergebnis

{{EmbedLiveSample('Element_replacement_with_url', '100%',400)}}

Wenn Inhalte auf regulären Elementen (anstatt nur auf Pseudo-Elementen) generiert werden, wird das gesamte Element ersetzt. Dies bedeutet, dass `::before` und `::after`-Pseudo-Elemente nicht generiert werden.

### Elementersetzung mit `<gradient>`

Dieses Beispiel demonstriert, wie die Inhalte eines Elements durch jeden Typ von `<image>` ersetzt werden können, in diesem Fall ein CSS-Gradient. Die Inhalte des Elements werden durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir bieten alternativen Text an, weil alle Bilder der Barrierefreiheit halber beschrieben werden sollten.

#### HTML

```html
<div id="replaced">I disappear</div>
```

#### CSS

```css
div {
  border: 1px solid;
  background-color: #cccccc;
  min-height: 100px;
  min-width: 100px;
}

#replaced {
  content: repeating-linear-gradient(blue 0, orange 10%) /
    "Gradients and alt text are supported";
}
```

#### Ergebnis

{{EmbedLiveSample('Element_replacement_with_gradient', '100%', 200)}}

Prüfen Sie das [Browser-Kompatibilitätsdiagramm](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Verläufe als `content`-Wert.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements durch ein {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Benutzers eine normale Auflösung hat, wird das `1x.png` angezeigt. Bildschirme mit einer höheren Auflösung zeigen das `2x.png` Bild an.

#### HTML

```html
<div id="replaced">I disappear!</div>
```

#### CSS

```css hidden
div {
  width: 100px;
  border: 1px solid lightgrey;
}
```

```css-nolint
#replaced {
  content: image-set(
    "1x.png" 1x,
    "2x.png" 2x
  ) / "DPI";
}
```

#### Ergebnis

{{EmbedLiveSample('Element_replacement_with_image-set', '100%', 110)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("::marker")}}
- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref(":target-current")}}
- {{Cssxref("contain")}}
- {{Cssxref("quotes")}}
- {{cssxref("gradient", "&lt;gradient&gt;")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- Barrierefreiheitspanels der Browser: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
