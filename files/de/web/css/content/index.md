---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 7d2588aa345c849fec1dce9ebab3f09b7ccb1038
---

{{CSSRef}}

Die **`content`**-[CSS](/de/docs/Web/CSS) Eigenschaft ersetzt Inhalte durch einen generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder eines Pseudo-Elements dargestellt wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und den dazugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` die Inhalte als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt gerendert wird.

Mit der `content`-Eigenschaft eingefügte Objekte sind **anonyme {{Glossary("replaced_elements", "ersetzte Elemente")}}**.

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

- Eines von zwei Schlüsselwörtern — `none` oder `normal`.
- `<content-replacement>`, wenn ein DOM-Knoten ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler Alternativtextwert eines `<string>` oder `<counter>`, der durch einen Schrägstrich (`/`) vorangestellt ist.

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden detaillierter beschrieben:

- `none`

  - : Wird ein Pseudo-Element angewendet, wird das Pseudo-Element nicht generiert. Wird es auf ein Element angewendet, hat der Wert keinen Effekt.

- `normal`

  - : Der Standardwert. Berechnet sich zu `none` für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente. Für andere Pseudo-Elemente entspricht der Inhalt dem anfänglichen (oder normalen) Inhalt, der für das jeweilige {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erwartet wird. Für reguläre Elemente oder Seitenrandboxen berechnet sich dies zu den Nachfahren des Elements.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenfolge, die in passenden einfachen oder doppelten Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden miteinander verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein darzustellendes Bild repräsentiert. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}} Datentyp entsprechen, oder einem Teil der Webseite selbst, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), in der Regel eine Zahl, die durch Berechnungen definiert wird, die von den {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} Eigenschaften vorgenommen werden. Er kann entweder durch die {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im Geltungsbereich beim angegebenen Pseudo-Element. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} formatiert (`decimal` standardmäßig).
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Geltungsbereich beim angegebenen Pseudo-Element, von äußerem nach innerem, getrennt durch die angegebene Zeichenfolge. Die Zähler werden in der angegebenen {{cssxref("&lt;list-style-type&gt;")}} angezeigt (`decimal` standardmäßig).

- `<quote>`

  - : Der `<quote>`-Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Führt keinen Inhalt ein, erhöht aber (verringert) die Verschachtelungsebene für Zitate.

- `<target>`

  - : Der `<target>`-Datentyp umfasst drei Zielfunktionen: `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erstellen, die vom Zielende eines Links bezogen werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>`-Datentyp beinhaltet eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (entspricht `leader(".")`, `leader("_")` und `leader(" ")`), oder einen `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Leadertyp als sich wiederholendes Muster eingefügt, das visuell Inhalte über eine horizontale Linie verbindet.

- `attr(x)`

  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine nicht geparste Zeichenfolge, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenfolge zurückgegeben. Die Groß-/Kleinschreibungsempfindlichkeit des Attributnamenparameters hängt von der Dokumentsprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativtext kann für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich gefolgt von einer Textzeichenfolge oder einem Zähler angehängt wird. Der Alternativtext ist für die Sprachausgabe von Bildschirmlesern bestimmt, kann aber auch in einigen Browsern angezeigt werden. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen spezifizieren den "Alt-Text" für das Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

CSS-generierte Inhalte sind nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Deshalb werden sie nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen von Hilfstechnologie/Browsern werden sie nicht ankündigen. Wenn der Inhalt Informationen überträgt, die entscheidend für das Verständnis der Seite sind, ist es besser, ihn im Hauptdokument zu platzieren.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen zugänglich für Hilfstechnologien sind und auch verfügbar sind, wenn CSS ausgeschaltet ist.

- [Unterstützung für barrierefreie CSS-generierte Inhalte – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Erstellen Sie Inhalte, die in verschiedenen Formen präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Scheitern des Erfolgskriteriums 1.3.1: Einfügen von nicht dekorativen generierten Inhalten](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierte Inhalte auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#ersetzen_eines_elements_mit_url).

### Anhängen von Zeichenfolgen basierend auf der Klasse eines Elements

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

### Zitate

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

Beachten Sie, dass der [Typ der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig Öffnungs- und Schließungszeichen vor und nach {{HTMLElement("q")}}-Elementen hinzu, daher würden die Anführungszeichen in diesem Beispiel erscheinen, ohne dass sie explizit festgelegt werden. Sie hätten ausgeschaltet werden können, indem die jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` gesetzt wurden, oder durch Setzen beider auf `none`. Sie können auch ausgeschaltet werden, indem die {{cssxref("quotes")}}-Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt wird, die zu allen Listenelementen vorangestellt werden. Dadurch entsteht ein detaillierterer Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}).

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
  <li>Marsupials</li>
  </li>
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

Der generierte Inhalt auf dem Marker jedes Listenelements fügt das Wort "item" als Präfix hinzu, einschließlich eines Leerzeichens zur Trennung des Präfixes vom Zähler, gefolgt von ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen. Die {{cssxref("counters", "counters()")}}-Funktion definiert einen numerischen `items`-Zähler, bei dem die Nummern der verschachtelten geordneten Listen in den meisten Browsern mit einem Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements hinzuzufügen.

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

### Hinzufügen eines Bildes mit Alternativtext

Dieses Beispiel fügt vor allen Links ein Bild ein. Es werden zwei `content`-Werte bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit Alternativtext, den ein Bildschirmleser als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code zum Anzeigen des Bildes und Festlegen des Alternativtexts wird unten gezeigt. Dies legt auch die Schrift und Farbe für den Inhalt fest.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der Alternativtextwert wird im Barrierefreiheitsbaum des Browsers angezeigt. Siehe Abschnitt [Siehe auch](#siehe_auch) für browser-spezifische Barrierefreiheitspanels.

Wenn Sie einen Bildschirmleser verwenden, sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Sie können das `::before` Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitsbereich anzeigen.

### Ersetzen eines Elements mit URL

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird durch ein SVG mit dem {{cssxref("url_value", "&lt;url&gt;")}}-Typ ersetzt.

Pseudo-Elemente werden bei ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden alle passenden `::after` oder `::before` nicht generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after`-Deklarationsblock hinzu, in dem versucht wird, die `id` als generierte Inhalte hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Beim Inhaltserzeugen auf regulären Elementen (anstelle von nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after`-Pseudo-Elemente nicht generiert werden.

### Ersetzen eines Elements mit `<gradient>`

Dieses Beispiel demonstriert, wie die Inhalte eines Elements durch einen beliebigen `<image>`-Typ ersetzt werden können, in diesem Fall durch einen CSS-Gradienten. Der Inhalt des Elements wird durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir bieten Alt-Text an, da alle Bilder für die Barrierefreiheit beschrieben werden sollten.

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

Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität). Alle Browser unterstützen Gradienten und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Gradienten als `content`-Wert.

### Ersetzen eines Elements mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display der Nutzer Normalauflösung hat, wird das `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild.

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
- {{Cssxref("contain")}}
- {{Cssxref("quotes")}}
- {{cssxref("gradient", "&lt;gradient&gt;")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [CSS-generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- Barrierefreiheitspanels der Browser: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane) und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
