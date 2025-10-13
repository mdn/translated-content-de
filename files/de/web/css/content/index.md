---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

Die **`content`** [CSS](/de/docs/Web/CSS)-Eigenschaft ersetzt den Inhalt mit einem generierten Wert. Sie kann verwendet werden, um festzulegen, was innerhalb eines Elements oder Pseudo-Elements gerendert wird. Für Elemente legt die `content`-Eigenschaft fest, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und den zugehörigen „alt“-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt gerendert wird.

Objekte, die mit der `content`-Eigenschaft eingefügt wurden, sind **anonyme {{Glossary("replaced_elements", "ersetzte Elemente")}}**.

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

Der Wert kann sein:

- Eines von zwei Schlüsselwörtern: `none` oder `normal`. `normal` ist der Standardwert der Eigenschaft.
- `<content-replacement>`, wenn ein DOM-Knoten ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste aus einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert einer `<string>` oder `<counter>`, vorangestellt von einem Schrägstrich (`/`).

Die oben genannten Schlüsselwörter und Datentypen sind im Folgenden detaillierter beschrieben:

- `none`
  - : Wenn auf ein Pseudo-Element angewendet, wird das Pseudo-Element nicht generiert. Bei Anwendung auf ein Element hat der Wert keine Auswirkungen.

- `normal`
  - : Für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente berechnet sich dieser Wert zu `none`. Für andere Pseudo-Elemente wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erzeugt es den ursprünglichen (oder normalen) Inhalt des Elements. Für reguläre Elemente oder Seitenrandboxen berechnet es sich zu den Nachfahren des Elements. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenfolge, eingeschlossen in passende einfache oder doppelte Anführungszeichen. Mehrere Zeichenfolgenwerte werden zusammengefügt (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}
  - : Ein {{cssxref("&lt;image&gt;")}}, das ein anzuzeigendes Bild darstellt. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("&lt;gradient&gt;")}} Datentyp entsprechen oder ein Teil der Webseite selbst sein, definiert durch die {{cssxref("element", "element()")}}-Funktion.

- `<counter>`
  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), im Allgemeinen eine Zahl, die durch Berechnungen definiert durch die {{cssxref("&lt;counter-reset&gt;")}}- und {{cssxref("&lt;counter-increment&gt;")}}-Eigenschaften erzeugt wird. Er kann entweder mit der {{cssxref("counter", "counter()")}}- oder {{cssxref("counters", "counters()")}}-Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers mit dem gegebenen Namen im Bereich des gegebenen Pseudo-Elements. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} formatiert (`decimal` standardmäßig).
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Bereich des gegebenen Pseudo-Elements, von außen nach innen, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) gerendert.

- `<quote>`
  - : Der `<quote>`-Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge aus der {{cssxref("quotes")}}-Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt ein, aber erhöht (verringert) die Verschachtelungsebene für Anführungszeichen.

- `<target>`
  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise vom Ziel-Ende eines Links erstellen. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`
  - : Der `<leader()>`-Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (gleichwertig mit `leader(".")`, `leader("_")` und `leader(" ")`, jeweils), oder eine `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Leader-Typ als sich wiederholendes Muster eingefügt, das Inhalt über eine horizontale Linie visuell verbindet.

- `attr(x)`
  - : Die `attr(x)`-CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine unverarbeitete Zeichenfolge, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenfolge zurückgegeben. Die Groß-/Kleinschreibungsempfindlichkeit des Attributnamensparameters hängt von der Dokumentensprache ab.

- Alternativer Text: `/ <string> | <counter>`
  - : Alternativer Text kann für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich gefolgt von einem Textstring oder einem Zähler hinzugefügt wird. Der alternative Text ist für die Sprachausgabe durch Screenreader vorgesehen, kann jedoch auch in einigen Browsern angezeigt werden. Die {{cssxref("string", "/ &lt;string>")}}- oder {{cssxref("counter", "/ &lt;counter>")}}-Datentypen geben den „alt-Text“ für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

CSS-generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Daher wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen aus unterstützenden Technologien und Browsern werden ihn nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die für das Verständnis des Zwecks der Seite entscheidend sind, ist es besser, ihn im Hauptdokument einzuschließen.

Wenn eingefügter Inhalt nicht dekorativ ist, überprüfen Sie, dass die Informationen unterstützenden Technologien bereitgestellt werden und auch verfügbar sind, wenn CSS ausgeschaltet ist.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitlinie 1.3: Erstellen von Inhalten, die auf verschiedene Weisen dargestellt werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Failure of Success Criterion 1.3.1: inserting non-decorative generated content](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#ersetzen_von_elementen_mit_url).

### Anhängen von Zeichenfolgen basierend auf einer Klassenname des Elements

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

Dieses Beispiel fügt verschiedenfarbige Anführungszeichen um Zitate ein.

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

Beachten Sie, dass der [Typ der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig öffnende und schließende Anführungszeichen vor und nach den {{HTMLElement("q")}}-Elementen ein, sodass die Anführungszeichen in diesem Beispiel ohne explizite Angabe erscheinen würden. Sie könnten ausgeschaltet werden, indem die entsprechenden `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` gesetzt werden oder indem beide auf `none` gesetzt werden. Sie können auch ausgeschaltet werden, indem die {{cssxref("quotes")}}-Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenpunkte-Zählern

Dieses Beispiel kombiniert einen Zähler zwischen zwei `<string>`-Namen, die allen Listeneinträgen ({{HTMLElement("li")}}) in ungeordneten Listen ({{HTMLElement("ol")}}) eine detailliertere Markierung voranstellen.

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

Der generierte Inhalt für das Markierungszeichen jedes Listenelements fügt den Text "item " als Präfix hinzu und enthält ein Leerzeichen, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen. Die {{cssxref("counters", "counters()")}}-Funktion definiert einen numerischen `items`-Zähler, bei dem die Nummern von verschachtelten geordneten Listen in den meisten Browsern durch einen Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribute Selector](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen. Der Wert des `href`-Attributs wird nach dem Linktext als Inhalt des {{cssxref("::after")}}-Pseudo-Elements hinzugefügt.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, vorangestellt von "URL: ", mit einem Leerzeichen und in Klammern eingeschlossen.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor allen Links ein. Es werden zwei `content`-Werte bereitgestellt. Der spätere `content`-Wert umfasst ein Bild mit einem alternativen Text, den ein Screenreader als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den alternativen Text festzulegen, wird unten gezeigt. Dies legt auch die Schrift und Farbe für den Inhalt fest.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der alternative Textwert wird im Barrierefreiheitsbaum des Browsers angezeigt. Siehe den Abschnitt [Siehe auch](#siehe_auch) für browser-spezifische Barrierefreiheits-Panels.

Wenn Sie einen Screenreader verwenden, sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Sie können das `::before`-Pseudo-Element mit dem Auswahltool Ihrer Entwicklerwerkzeuge auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheits-Panel ansehen.

### Ersetzen von Elementen mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden durch ein SVG unter Verwendung des {{cssxref("url_value", "&lt;url&gt;")}}-Typs ersetzt.

Pseudo-Elemente werden bei ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden alle passenden `::after` oder `::before`-Elemente nicht generiert oder angewendet. Zum Demonstrieren dieses Effekts schließen wir einen `::after`-Deklarationsblock ein, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Beim Generieren von Inhalten auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after`-Pseudo-Elemente nicht generiert werden.

### Ersetzen von Elementen mit `<gradient>`

Dieses Beispiel zeigt, wie Inhalte eines Elements durch einen beliebigen Typ von `<image>` ersetzt werden können, in diesem Fall ein CSS-Verlauf. Die Inhalte des Elements werden durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir bieten Alt-Text an, da alle Bilder aus Gründen der Barrierefreiheit beschrieben werden sollten.

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

### Ersetzen von Elementen mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Benutzers eine normale Auflösung hat, wird das `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png`-Bild an.

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
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- Barrierefreiheits-Panels der Browser: [Firefox Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Barrierefreiheitspaneel](https://developer.chrome.com/docs/devtools/accessibility/reference#pane) und [Safari Barrierefreiheitsbaum](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
