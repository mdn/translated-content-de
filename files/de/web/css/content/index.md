---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`content`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ersetzt Inhalte mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements angezeigt wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und den zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder keines, was bestimmt, ob das Element überhaupt gerendert wird.

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
content: "prefix" url(http://www.example.com/test.png);
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
- Ein optionaler alternativer Textwert eines `<string>` oder `<counter>`, der von einem Schrägstrich (`/`) gefolgt wird.

Die oben erwähnten Schlüsselwörter und Datentypen sind im Folgenden genauer beschrieben:

- `none`

  - : Wenn auf ein Pseudo-Element angewendet, wird das Pseudo-Element nicht erzeugt.
    Wenn auf ein Element angewendet, hat der Wert keine Wirkung.

- `normal`

  - : Für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente wird dieser Wert zu `none` berechnet. Für andere Pseudo-Elemente wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erzeugt er den anfänglichen (oder normalen) Inhalt des Elements. Für reguläre Elemente oder Seitenrandboxen wird er zu den Nachkommen des Elements berechnet. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Reihe von Zeichen, die in passende einfache oder doppelte Anführungszeichen eingeschlossen sind. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein darzustellendes Bild repräsentiert. Dies kann gleichbedeutend mit einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}} Datentyp sein oder einen Teil der Webseite selbst darstellen, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), im Allgemeinen eine Zahl, die durch Berechnungen definiert wird, die durch {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} Eigenschaften bestimmt werden. Er kann entweder mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der erzeugte Text ist der Wert des innersten Zählers des gegebenen Namens im Bereich des angegebenen Pseudo-Elements. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) formatiert.
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der erzeugte Text ist der Wert aller Zähler mit dem gegebenen Namen im Bereich des angegebenen Pseudo-Elements, vom äußersten bis zum innersten, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) dargestellt.

- `<quote>`

  - : Der `<quote>`-Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechenden Zeichenfolgen aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Führt keinen Inhalt ein, erhöht (oder verringert) jedoch die Verschachtelungsebene für Anführungszeichen.

- `<target>`

  - : Der `<target>`-Datentyp umfasst drei Zielfunktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erstellen, die vom Zielende eines Links bezogen werden. Siehe [formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>`-Datentyp umfasst eine Führungszeichenfunktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (entspricht `leader(".")`, `leader("_")` und `leader(" ")`, jeweils) oder eine `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Typ von Führungszeichen als wiederholendes Muster eingefügt, das Inhalt über eine horizontale Linie verbindet.

- `attr(x)`

  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine nicht analysierte Zeichenfolge, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenfolge zurückgegeben. Die Groß- und Kleinschreibung des Attributnamens hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativtext kann für ein Bild oder irgendwelche `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich gefolgt von einem Textstring oder einem Zähler angefügt wird. Der Alternativtext ist für die Sprachausgabe durch Bildschirmleser vorgesehen, kann aber auch in einigen Browsern angezeigt werden. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen geben den "alt-text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

CSS-generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Aus diesem Grund wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen aus unterstützender Technologie und Browsern werden ihn nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die entscheidend für das Verständnis des Zwecks der Seite sind, ist es besser, ihn im Hauptdokument zu enthalten.

Wenn eingefügter Inhalt nicht dekorativ ist, prüfen Sie, ob die Informationen unterstützenden Technologien zur Verfügung gestellt werden und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitfaden 1.3: Inhalte schaffen, die in verschiedenen Formaten dargestellt werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Verfehlen des Erfolgskriteriums 1.3.1: Einfügen von nicht-dekorativem generiertem Inhalt](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für Elementersetzungen](#elementersetzung_mit_url).

### Anfügen von Zeichenfolgen basierend auf der Klasse eines Elements

Dieses Beispiel fügt eingefügten Text nach dem Text von Elementen ein, die einen bestimmten Klassennamen haben. Der Text ist rot gefärbt.

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
  color: #00f;
}

q::before,
q::after {
  font-size: larger;
  color: #f00;
  background: #ccc;
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

Beachten Sie, dass [der Typ der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig Anführungszeichen vor und nach {{HTMLElement("q")}}-Elementen hinzu, sodass die Anführungszeichen in diesem Beispiel ohne sie explizit gesetzt zu haben erscheinen würden. Sie hätten deaktiviert werden können, indem die jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` gesetzt werden, oder indem sie beide auf `none` gesetzt werden. Sie können auch deaktiviert werden, indem die {{cssxref("quotes")}} Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelementzählern

Dieses Beispiel kombiniert einen Zähler zwischen zwei `<string>`s, die allen Listenelementen vorangestellt werden, und schafft so einen detaillierteren Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}).

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

Der generierte Inhalt bei jedem Marker eines Listenelements fügt den Text "item " als Präfix hinzu, inklusive eines Leerzeichens zum Trennen des Präfixes vom Zähler, gefolgt von ": ", einem Doppelpunkt und einem weiteren Leerzeichen. Die {{cssxref("counters", "counters()")}} Funktion definiert einen numerischen `items`-Zähler, in dem die Nummern verschachtelter geordneter Listen in den meisten Browsern durch einen Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druckstile. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements hinzuzufügen.

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
a[href^="https://"]::after
{
  content: " (URL: " attr(href) ")";
  color: darkgreen;
}
```

#### Ergebnis

{{EmbedLiveSample('Strings_with_attribute_values', '100%', 200)}}

Der generierte Inhalt ist der Wert des `href`-Attributs, vorangestellt mit "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor alle Links ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert beinhaltet ein Bild mit alternativem Text, den ein Bildschirmleser als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den Alternativtext festzulegen, wird unten gezeigt.
Dies legt auch die Schriftart und Farbe für den Inhalt fest.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der Alternativtextwert wird im Barrierefreiheitsbaum des Browsers angezeigt. Siehe den Abschnitt [siehe auch](#siehe_auch) für browser-spezifische Barrierefreiheitsbedienfelder.

Wenn ein Bildschirmleser verwendet wird, sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Sie können das `::before`-Pseudo-Element mit Ihrem Entwicklertools-Auswahltool auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitsbedienfeld anzeigen.

### Elementersetzung mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden mit einem SVG unter Verwendung des {{cssxref("url_value", "&lt;url&gt;")}} Typs ersetzt.

Pseudo-Elemente werden nicht auf ersetzten Elementen dargestellt. Da dieses Element ersetzt wird, werden keine passenden `::after` oder `::before` erzeugt oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after` Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht erzeugt, da das Element ersetzt wird.

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

Beim Erzeugen von Inhalten auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht erzeugt werden.

### Elementersetzung mit `<gradient>`

Dieses Beispiel zeigt, wie der Inhalt eines Elements durch jeden `<image>`-Typ ersetzt werden kann, in diesem Fall ein CSS-Verlauf. Der Inhalt des Elements wird durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir bieten alternativen Text an, weil alle Bilder für Barrierefreiheit beschrieben werden sollten.

#### HTML

```html
<div id="replaced">I disappear</div>
```

#### CSS

```css
div {
  border: 1px solid;
  background-color: #ccc;
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

Überprüfen Sie die [Browser-Kompatibilitätsübersicht](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Verläufe als `content`-Wert.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Benutzers über eine normale Auflösung verfügt, wird das Bild `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das Bild `2x.png` an.

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
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- Browser-Bedienfelder zur Barrierefreiheit: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
