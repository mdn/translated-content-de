---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 8697d1b0b7ace72cffe786933aae6c2f9b454b14
---

{{CSSRef}}

Die **`content`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ersetzt Inhalte mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements gerendert wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content`, ob Inhalte als Bilder, Text, beides oder nichts vorhanden sind, was bestimmt, ob das Element überhaupt gerendert wird.

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
- Eine `<content-list>`, wenn Pseudo-Elemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>` Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler Alternativtextwert einer `<string>` oder `<counter>`, eingeleitet durch einen Schrägstrich (`/`).

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden detaillierter beschrieben:

- `none`

  - : Bei Anwendung auf ein Pseudo-Element wird das Pseudo-Element nicht generiert. Bei Anwendung auf ein Element hat der Wert keine Auswirkung.

- `normal`

  - : Für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente wird dieser Wert zu `none` berechnet. Für andere Pseudo-Elemente wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erzeugt es den initialen (oder normalen) Inhalt des Elements. Für reguläre Elemente oder Seitenrandboxen wird es zu den Nachkommen des Elements berechnet. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenkette, die in übereinstimmenden einfachen oder doppelten Anführungszeichen eingeschlossen ist. Mehrere Zeichenkettenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein anzuzeigendes Bild darstellt. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}} Datentyp entsprechen oder einem Teil der Webseite selbst, der durch die {{cssxref("element", "element()")}} Funktion definiert ist.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), im Allgemeinen eine Zahl, die durch Berechnungen definiert wird, die durch die {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} Eigenschaften festgelegt werden. Er kann entweder durch die {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innermost Zählers mit dem angegebenen Namen im Scope des angegebenen Pseudo-Elements. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) formatiert.
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Scope des angegebenen Pseudo-Elements, von außen nach innen, getrennt durch den angegebenen String. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) gerendert.

- `<quote>`

  - : Der `<quote>`-Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch den entsprechenden String aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt hinzu, erhöht (verringert) jedoch die Verschachtelungsebene für Anführungszeichen.

- `<target>`

  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise vom Zielende eines Links erstellen. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>`-Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (entspricht `leader(".")`, `leader("_")`, und `leader(" ")`, jeweils), oder einen `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Leadertyp als sich wiederholendes Muster eingefügt, das den Inhalt durch eine horizontale Linie visuell verbindet.

- `attr(x)`

  - : Die `attr(x)`-CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Elements `x`-Attributs ist ein unverarbeiteter String, der den Attributnamen darstellt. Wenn es kein `x`-Attribut gibt, wird ein leerer String zurückgegeben. Die Fallunterscheidung des Attributnamenparameters hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativtext kann für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich und dann ein Textstring oder ein Zähler angefügt wird. Der Alternativtext ist für die Sprachausgabe durch Screenreader vorgesehen, kann aber auch in einigen Browsern angezeigt werden. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen geben den "alt-Text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

In CSS generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Daher wird er nicht im [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen aus unterstützender Technologie/Browser werden ihn nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die für das Verständnis des Seitenzwecks entscheidend sind, ist es besser, ihn in das Hauptdokument aufzunehmen.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Information den unterstützenden Technologien zur Verfügung steht und auch verfügbar ist, wenn CSS deaktiviert ist.

- [Barrierefreiheit für in CSS generierten Inhalt – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitfaden 1.3: Inhalte erstellen, die auf unterschiedliche Weise präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.1 verstehen | W3C WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Versagen des Erfolgskriteriums 1.3.1: Einfügen von nicht-dekorativem generiertem Inhalt](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#ersatz_eines_elements_mit_url).

### Anfügen von Zeichenfolgen basierend auf der Klasse eines Elements

Dieses Beispiel fügt nach dem Text von Elementen, die einen bestimmten Klassennamen haben, generierten Text ein. Der Text ist rot gefärbt.

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

Beachten Sie, dass der [Typ der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) basierend auf der Sprache ist. Browser fügen standardmäßig vor und nach {{HTMLElement("q")}}-Elementen Öffnungs- und Schlusszeichen hinzu, sodass die Anführungszeichen in diesem Beispiel erscheinen würden, ohne dass sie explizit gesetzt werden. Sie könnten deaktiviert werden, indem die entsprechenden `content` Eigenschaftswerte auf `no-open-quote` und `no-close-quote` gesetzt oder indem beide auf `none` gesetzt werden. Sie können auch durch das Setzen der {{cssxref("quotes")}} Eigenschaft auf `none` deaktiviert werden.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt ist und erstellt so einen detaillierteren Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}).

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

Der generierte Inhalt auf dem Marker jedes Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix von dem Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen. Die {{cssxref("counters", "counters()")}} Funktion definiert einen numerischen `items` Zähler, bei dem die Zahlen verschachtelter geordneter Listen in den meisten Browsern durch einen Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist für Druck-Stylesheets nützlich. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und fügt den Wert des `href` Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements ein.

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

Der generierte Inhalt ist der Wert des `href` Attributs, vorangestellt von "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit Alternativtext

Dieses Beispiel fügt vor allen Links ein Bild ein. Zwei `content` Werte sind angegeben. Der spätere `content` Wert enthält ein Bild mit Alternativtext, den ein Screenreader als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den Alternativtext festzulegen, wird unten gezeigt. Dies setzt auch die Schriftart und die Farbe für den Inhalt.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der Alternativtextwert ist im Barrierefreiheitsbaum des Browsers sichtbar. Verweisen Sie auf den Abschnitt [Siehe auch](#siehe_auch) für browserspezifische Barrierefreiheitspanels.

Wenn ein Bildschirmlesegerät verwendet wird, sollte es das Wort "MOZILLA" aussprechen, wenn es das Bild erreicht. Sie können das `::before` Pseudo-Element mit Ihrem Developer-Tools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitspanel anzeigen.

### Ersatz eines Elements mit URL

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird mit einem SVG ersetzt, indem der {{cssxref("url_value", "&lt;url&gt;")}} Typ verwendet wird.

Pseudo-Elemente werden bei ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, wird kein übereinstimmendes `::after` oder `::before` generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after` Deklarationsblock ein und versuchen, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Beim Generieren von Inhalt auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht generiert werden.

### Ersatz eines Elements mit `<gradient>`

Dieses Beispiel demonstriert, wie die Inhalte eines Elements durch jeden Typ von `<image>`, in diesem Fall ein CSS-Gradient, ersetzt werden können. Die Inhalte des Elements werden durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir bieten Alt-Text an, da alle Bilder zur Barrierefreiheit beschrieben werden sollten.

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

Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität). Alle Browser unterstützen Gradienten und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Gradienten als `content` Wert.

### Ersatz eines Elements mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements durch ein {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Nutzers eine normale Auflösung hat, wird das `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild.

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
- [CSS generierter Inhaltsmodul](/de/docs/Web/CSS/CSS_generated_content)
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- Barrierefreiheitspanels der Browser: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
