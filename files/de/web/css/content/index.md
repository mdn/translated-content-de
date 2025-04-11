---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 898dd2394e7b70daa2c0c212282a64ccf5938341
---

{{CSSRef}}

Die **`content`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ersetzt Inhalte mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements dargestellt wird. Bei Elementen gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) oder mit einem Bild (und zugehörigem "alt"-Text) ersetzt wird. Bei Pseudo-Elementen und Randfeldern definiert `content` die Inhalte als Bilder, Text, beides oder keines, was bestimmt, ob das Element überhaupt gerendert wird.

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

- Eines von zwei Schlüsselwörtern — `none` oder `normal`.
- `<content-replacement>`, wenn ein DOM-Knoten ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target), oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert eines `<string>` oder `<counter>`, dem ein Schrägstrich (`/`) vorangestellt ist.

Die oben genannten Schlüsselwörter und Datentypen werden unten ausführlicher beschrieben:

- `none`

  - : Wird ein Pseudo-Element damit angewendet, wird das Pseudo-Element nicht generiert.
    Wird ein Element damit angewendet, hat der Wert keine Auswirkung.

- `normal`

  - : Der Standardwert. Berechnet sich zu `none` für die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente. Für andere Pseudo-Elemente sind die Inhalte die ursprünglichen (oder normalen) Inhalte, die für das {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erwartet werden. Für reguläre Elemente oder Seitenränder berechnet sich dies zu den Nachfahren des Elements.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Folge von Zeichen, die in passenden einfachen oder doppelten Anführungszeichen eingeschlossen sind. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein darzustellendes Bild darstellt. Dies kann gleich einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}}-Datentyp sein, oder ein Teil der Webseite selbst, definiert durch die {{cssxref("element", "element()")}}-Funktion.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), in der Regel eine Zahl, die durch Berechnungen definiert wird, die von den {{cssxref("&lt;counter-reset&gt;")}}- und {{cssxref("&lt;counter-increment&gt;")}}-Eigenschaften bereitgestellt werden. Er kann entweder mit der {{cssxref("counter", "counter()")}}- oder der {{cssxref("counters", "counters()")}}-Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im Geltungsbereich des angegebenen Pseudo-Elements. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) formatiert.
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Geltungsbereich des gegebenen Pseudo-Elements, von außen nach innen, getrennt durch den angegebenen String. Die Zähler werden in dem angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) dargestellt.

- `<quote>`

  - : Der `<quote>`-Datentyp enthält sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch den entsprechenden String aus der {{cssxref("quotes")}}-Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt hinzu, erhöht (verringert) jedoch das Verschachtelungsniveau von Anführungszeichen.

- `<target>`

  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise aus dem Ziel eines Links erstellen. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>`-Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwert `dotted`, `solid`, oder `space` (entspricht `leader(".")`, `leader("_")`, und `leader(" ")`) oder eine `<string>` als Parameter. Wenn sie unterstützt wird und als Wert für `content` verwendet wird, wird der bereitgestellte Führungstyp als sich wiederholendes Muster eingefügt, das Inhalte über eine horizontale Linie visuell verbindet.

- `attr(x)`

  - : Die `attr(x)`-CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist ein nicht geparster String, der den Attributnamen darstellt. Wenn es kein Attribut `x` gibt, wird ein leerer String zurückgegeben. Die Groß- und Kleinschreibung des Attributnamens-Parameters hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativtext kann für ein Bild oder alle `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich und dann ein String aus Text oder ein Zähler angehängt wird. Der Alternativtext ist für die Sprachausgabe durch Screenreader gedacht, kann jedoch auch in einigen Browsern angezeigt werden. Die {{cssxref("string", "/ &lt;string>")}}- oder {{cssxref("counter", "/ &lt;counter>")}}-Datentypen spezifizieren den "alt text" für das Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Durch CSS generierte Inhalte sind nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Daher werden sie nicht im [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen aus Hilfstechnologien und Browsern werden ihn nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die wichtig für das Verständnis des Zwecks der Seite sind, ist es besser, ihn im Hauptdokument zu platzieren.

Wenn eingefügter Inhalt nicht dekorativ ist, vergewissern Sie sich, dass die Informationen den eingesetzten Technologien der Hilfsmittel zur Verfügung stehen und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Barrierefreiheit von CSS-generierten Inhalten – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitfaden 1.3: Inhalte erstellen, die auf verschiedene Arten präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C-Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehlgeschlagenes Erfolgskriterium 1.3.1: Einfügen von nicht dekorativem generierten Inhalten](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierte Inhalte auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#elementersetzung_mit_url).

### Zeichenketten anhängen auf Basis einer Elementklasse

Dieses Beispiel fügt generierten Text hinter den Text von Elementen ein, die einen bestimmten Klassennamen haben. Der Text ist rot gefärbt.

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

Beachten Sie, dass [die Art der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig öffnende und schließende Anführungszeichen vor und nach {{HTMLElement("q")}}-Elementen hinzu, sodass die Anführungszeichen in diesem Beispiel erscheinen würden, ohne dass sie ausdrücklich gesetzt werden müssen. Sie könnten durch Festlegen der jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` oder auf `none` deaktiviert werden. Sie können auch deaktiviert werden, indem die {{cssxref("quotes")}}-Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelementzählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt ist, die allen Listenelementen vorangestellt werden, wodurch ein detaillierterer Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}) erstellt wird.

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

Der generierte Inhalt in jedem Markierungszeichen des Listenelements fügt das Präfix "item " hinzu, einschließlich eines Raums, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem zusätzlichen Raum. Die {{cssxref("counters", "counters()")}}-Funktion definiert eine numerische `items`-Zählervariable, bei der die Zahlen verschachtelter geordneter Listen in den meisten Browsern durch einen Punkt (`.`) getrennt werden.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druckstile. Es verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}}-Pseudo-Elements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, mit "URL: " vorangestellt, begleitet von einem Raum, alles in Klammern.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor allen Links ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit alternativem Text, den ein Screenreader als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den alternativen Text festzulegen, wird unten gezeigt.
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
> Der alternative Textwert wird im Zugänglichkeitsbaum des Browsers angezeigt. Siehe den Bereich [Siehe auch](#siehe_auch) für browser-spezifische Zugänglichkeitsfenster.

Wenn Sie einen Screenreader verwenden, sollte er das Wort "MOZILLA" sprechen, wenn er zum Bild gelangt. Sie können das `::before`-Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "Barrierefreien Namen")}} im Zugänglichkeitsfenster anzeigen.

### Elementersetzung mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden mit einer SVG unter Verwendung des {{cssxref("url_value", "&lt;url&gt;")}}-Typs ersetzt.

Pseudo-Elemente werden auf ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden passende `::after` oder `::before` nicht generiert oder angewendet. Um dies zu demonstrieren, fügen wir ein `::after`-Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

### Elementersetzung mit `<gradient>`

Dieses Beispiel demonstriert, wie die Inhalte eines Elements durch jeden Typ von `<image>`, in diesem Fall ein CSS-Gradient, ersetzt werden können. Die Inhalte des Elements werden mit einem {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir bieten Alt-Text an, da alle Bilder für die Barrierefreiheit beschrieben werden sollten.

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

Überprüfen Sie das [Browser-Kompatibilitätsdiagramm](#browser-kompatibilität). Alle Browser unterstützen Gradienten und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Gradienten als `content`-Wert.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements durch ein {{cssxref("image/image-set", "image-set()")}}. Wenn das Display der Benutzer eine normale Auflösung hat, wird das `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png`-Bild.

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
- {{Glossary("Replaced_elements", "Ersatz-Elemente")}}
- [CSS-generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- Zugänglichkeitspanels der Browser: [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility Pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility Tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
