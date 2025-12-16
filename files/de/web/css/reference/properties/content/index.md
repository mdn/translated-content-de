---
title: content
slug: Web/CSS/Reference/Properties/content
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`content`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ersetzt Inhalte durch einen generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements dargestellt wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal dargestellt wird (`normal` oder `none`) oder durch ein Bild (und zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Margin-Boxen definiert `content` den Inhalt als Bilder, Text, beides oder gar nichts, was bestimmt, ob das Element überhaupt dargestellt wird.

Objekte, die mittels der `content`-Eigenschaft eingefügt werden, sind **anonyme {{Glossary("replaced_elements", "ersetzte Elemente")}}**.

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

Der Wert kann folgendermaßen sein:

- Eines von zwei Schlüsselwörtern: `none` oder `normal`. `normal` ist der Standardwert der Eigenschaft.
- `<content-replacement>`, wenn ein DOM-Knoten ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Margin-Boxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert eines `<string>` oder `<counter>`, dem ein Schrägstrich (`/`) vorangeht.

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden ausführlicher beschrieben:

- `none`
  - : Wird es auf ein Pseudo-Element angewandt, wird das Pseudo-Element nicht generiert. Wird es auf ein Element angewandt, hat der Wert keine Wirkung.

- `normal`
  - : Für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente wird dieser Wert zu `none` berechnet. Für andere Pseudo-Elemente wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}}, erzeugt es den ursprünglichen (oder normalen) Inhalt des Elements. Für reguläre Elemente oder Seitenrand-Boxen wird zu den Nachkommen des Elements berechnet. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenfolge, die in passenden einfachen oder doppelten Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden zusammengefügt (es gibt keinen Verknüpfungsoperator in CSS).

- {{cssxref("image")}}
  - : Ein {{cssxref("image")}}, das ein darzustellendes Bild repräsentiert. Dies kann gleichbedeutend mit einem {{cssxref("url_value", "&lt;url&gt;")}}, dem {{cssxref("image/image-set", "image-set()")}}, einem {{cssxref("gradient")}}-Datentyp oder einem Teil der Webseite selbst sein, definiert durch die {{cssxref("element()")}}-Funktion.

- `<counter>`
  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), in der Regel eine Zahl, die durch Berechnungen der Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} produziert wird. Sie kann entweder über die Funktion {{cssxref("counter()")}} oder {{cssxref("counters()")}} angezeigt werden.
    - {{cssxref("counter()")}}
      - : Die Funktion {{cssxref("counter()")}} hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers mit dem angegebenen Namen im Bereich des bestimmten Pseudo-Elements. Er wird im spezifizierten {{cssxref("&lt;list-style-type&gt;")}} (standardmäßig `decimal`) formatiert.
    - {{cssxref("counters()")}}
      - : Die Funktion {{cssxref("counters()")}} hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Bereich des Pseudo-Elements, von außen nach innen, getrennt durch den angegebenen String. Die Zähler werden in dem angegebenen {{cssxref("&lt;list-style-type&gt;")}} gerendert (standardmäßig `decimal`).

- `<quote>`
  - : Der `<quote>`-Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch den entsprechenden String der Eigenschaft {{cssxref("quotes")}} ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Führt keinen Inhalt ein, erhöht (verringert) jedoch die Verschachtelungsebene für Anführungszeichen.

- `<target>`
  - : Der `<target>`-Datentyp beinhaltet drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erzeugen, die vom Zielende eines Links erhalten werden. Siehe [Formal syntax](#formale_syntax).

- `<leader()>`
  - : Der `<leader()>`-Datentyp beinhaltet eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (gleichbedeutend mit `leader(".")`, `leader("_")` und `leader(" ")`, bzw.) oder einen `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der bereitgestellte Leader-Typ als wiederholtes Muster eingefügt, das visuell Inhalte über eine horizontale Linie verbindet.

- `attr(x)`
  - : Die `attr(x)`-CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine unverarbeitete Zeichenfolge, die den Attributnamen darstellt. Wenn es kein Attribut `x` gibt, wird eine leere Zeichenfolge zurückgegeben. Die Groß-/Kleinschreibung des Attributnamens hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativer Text kann für ein Bild oder alle `<content-list>` Elemente angegeben werden, indem ein Schrägstrich und dann ein Textstring oder ein Zähler angefügt wird. Der Alternativtext ist für die Sprachausgabe durch Bildschirmlesegeräte vorgesehen, kann jedoch auch in einigen Browsern angezeigt werden. Die Datentypen {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} geben den "alt text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

In CSS generierte Inhalte sind nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Daher werden sie nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Hilfstechnologie-/Browserkombinationen werden sie nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die zum Verständnis des Zwecks der Seite entscheidend sind, ist es besser, ihn im Hauptdokument zu integrieren.

Wenn der eingefügte Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen Hilfstechnologien zur Verfügung gestellt werden und auch verfügbar sind, wenn CSS ausgeschaltet ist.

- [Unterstützung der Barrierefreiheit für von CSS generierte Inhalte – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitfaden 1.3: Erstellen von Inhalten, die auf verschiedene Weisen präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erklärung von Erfolgskriterium 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Versäumnis des Erfolgskriteriums 1.3.1: Einfügen von nicht dekorativen generierten Inhalten](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erstellen generierte Inhalte auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#ersetzen_eines_elements_mit_url).

### Anhängen von Zeichenfolgen basierend auf einer Klassenbezeichnung des Elements

Dieses Beispiel fügt generierten Text nach dem Text von Elementen ein, die einen bestimmten Klassennamen haben. Der Text ist rot gefärbt.

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

Dieses Beispiel fügt unterschiedlich farbige Anführungszeichen um Zitate ein.

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

Beachten Sie, dass der [Typ der generierten Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig öffnende und schließende Anführungszeichen vor und nach {{HTMLElement("q")}}-Elementen hinzu, sodass die Anführungszeichen in diesem Beispiel ohne explizite Einstellung erscheinen. Sie hätten durch Setzen der entsprechenden `content`-Eigenschaftenwerte auf `no-open-quote` und `no-close-quote` oder durch Setzen auf `none` ausgeschaltet werden können. Sie können auch ausgeschaltet werden, indem die Eigenschaft {{cssxref("quotes")}} auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, der von zwei `<string>`s umschlossen ist und allen Listenelementen vorangestellt wird, um einen detaillierteren Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}) zu erstellen.

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

Der generierte Inhalt auf dem Marker jedes Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem weiteren Leerzeichen. Die Funktion {{cssxref("counters()")}} definiert einen numerischen `items`-Zähler, in dem die Zahlen verschachtelter geordneter Listen in den meisten Browsern mit einem Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druckstile. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen, und fügt den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements hinzu.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, vorangestellt durch "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor allen Links ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit alternativem Text, den ein Bildschirmleser als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS zur Anzeige des Bildes und zum Setzen des Alternativtextes wird unten gezeigt. Es setzt auch die Schriftart und Farbe für den Inhalt.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der Alternativtextwert wird im Barrierefreiheitsbaum des Browsers angezeigt. Siehe den Abschnitt [Siehe auch](#siehe_auch) für browserspezifische Barrierefreifunktionen.

Wenn Sie einen Bildschirmleser verwenden, sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Sie können das `::before` Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitspanel anzeigen.

### Ersetzen eines Elements mit URL

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird durch eine SVG mit dem Typ {{cssxref("url_value", "&lt;url&gt;")}} ersetzt.

Pseudo-Elemente werden bei ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden alle übereinstimmenden `::after` oder `::before` nicht generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after` Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieser Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Beim Generieren von Inhalten auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht generiert werden.

### Ersetzen eines Elements mit `<gradient>`

Dieses Beispiel zeigt, wie ein Elementinhalt durch einen beliebigen Typ von `<image>`, hier ein CSS-Gradient, ersetzt werden kann. Der Inhalt des Elements wird mit einem {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir stellen alternativen Text bereit, da alle Bilder für Barrierefreiheit beschrieben werden sollten.

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

Überprüfen Sie die [Browser-Kompatibilitätsübersicht](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Verläufe als `content`-Wert.

### Ersetzen eines Elements mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Benutzers eine normale Auflösung hat, wird das `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild an.

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
- [CSS generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- Barrierefreiheitspanels der Browser: [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility Pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility Tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
