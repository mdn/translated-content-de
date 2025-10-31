---
title: content
slug: Web/CSS/Reference/Properties/content
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`content`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ersetzt den Inhalt eines Elements mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements dargestellt wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) gerendert wird oder ob es durch ein Bild (und zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Ränder definiert `content` den Inhalt als Bilder, Text, beides oder keines, was bestimmt, ob das Element überhaupt gerendert wird.

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

- Eins von zwei Schlüsselwörtern: `none` oder `normal`. `normal` ist der Standardwert der Eigenschaft.
- `<content-replacement>` bei Ersetzung eines DOM-Knotens. `<content-replacement>` ist immer ein `<image>`.
- Ein `<content-list>`, wenn Pseudo-Elemente und Ränder ersetzt werden. Ein `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes Element einer `<content-list>` ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler Alternativtextwert eines `<string>` oder `<counter>`, dem ein Schrägstrich (`/`) vorangestellt ist.

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden detaillierter beschrieben:

- `none`
  - : Bei Anwendung auf ein Pseudo-Element wird das Pseudo-Element nicht generiert.
    Bei Anwendung auf ein Element hat der Wert keine Wirkung.

- `normal`
  - : Für die Pseudo-Elemente {{cssxref("::before")}} und {{cssxref("::after")}} wird dieser Wert zu `none` berechnet. Bei anderen Pseudo-Elementen wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erzeugt er den initialen (oder normalen) Inhalt des Elements. Bei regulären Elementen oder Seitenrändern wird er zu den Nachkommen des Elements berechnet. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenkette in passenden einfachen oder doppelten Anführungszeichen. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}
  - : Ein {{cssxref("&lt;image&gt;")}}, das ein anzuzeigendes Bild darstellt. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("&lt;gradient&gt;")}} Datentyp entsprechen oder einem Teil der Webseite selbst, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`
  - : Der Wert `<counter>` ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), im Allgemeinen eine Nummer, die durch Berechnungen definiert durch die {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} Eigenschaften erzeugt wird. Er kann entweder mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im aktuellen Geltungsbereich am gegebenen Pseudo-Element. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) formatiert.
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im aktuellen Geltungsbereich am gegebenen Pseudo-Element, von außen nach innen, getrennt durch die angegebene Zeichenkette. Die Zähler werden in dem angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) gerendert.

- `<quote>`
  - : Der `<quote>` Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenkette aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt ein, erhöht jedoch (verringert) die Verschachtelungsebene für Zitate.

- `<target>`
  - : Der `<target>` Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise aus dem Zielende eines Links erstellen. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`
  - : Der `<leader()>` Datentyp umfasst eine Führungsfunktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (gleichwertig zu `leader(".")`, `leader("_")` und `leader(" ")`) oder eine `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Führungs-Typ als wiederkehrendes Muster eingefügt, das visuell Inhalte über eine horizontale Linie verbindet.

- `attr(x)`
  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements ab, oder des ursprünglichen Elements des Pseudo-Elements. Der Wert des Attributs `x` des Elements ist eine nicht analysierte Zeichenkette, die den Attributnamen darstellt. Wenn es kein Attribut `x` gibt, wird eine leere Zeichenkette zurückgegeben. Die Groß-/Kleinschreibungsempfindlichkeit des Attributnamenparameters hängt von der Dokumentsprache ab.

- Alternativer Text: `/ <string> | <counter>`
  - : Alternativer Text kann für ein Bild oder jedes `<content-list>`-Element angegeben werden, indem ein Vorwärts-Slash und dann eine Textzeichenkette oder ein Zähler angefügt werden. Der alternative Text ist für die Sprachausgabe durch Screenreader gedacht, kann aber auch in einigen Browsern angezeigt werden. Die Datentypen {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} spezifizieren den "alt text" für das Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Von CSS generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Daher wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte assistive Technologien/Browser-Kombinationen geben ihn nicht wieder. Wenn der Inhalt Informationen vermittelt, die entscheidend für das Verständnis des Zwecks der Seite sind, ist es besser, ihn im Hauptdokument zu platzieren.

Wenn eingefügter Inhalt nicht dekorativ ist, vergewissern Sie sich, dass die Informationen assistiven Technologien zur Verfügung stehen und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitlinie 1.3: Erstellen Sie Inhalte, die auf unterschiedliche Weisen dargestellt werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Failure of Success Criterion 1.3.1: inserting non-decorative generated content](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für die Elementersetzung](#elemente_durch_url_ersetzen).

### Hinzufügen von Zeichenfolgen basierend auf der Klasse eines Elements

Dieses Beispiel fügt generierten Text nach dem Text von Elementen ein, die einen bestimmten Klassennamen haben. Der Text wird rot eingefärbt.

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

Beachten Sie, dass [die Art der generierten Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig vor und nach {{HTMLElement("q")}}-Elementen öffnende und schließende Anführungszeichen hinzu, damit würden die Anführungszeichen in diesem Beispiel erscheinen, ohne dass sie explizit gesetzt werden. Sie hätten durch Setzen der entsprechenden `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote`, oder indem beide auf `none` gesetzt werden, ausgeschaltet werden können. Sie können auch ausgeschaltet werden, indem die {{cssxref("quotes")}} Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelementzählern

Dieses Beispiel kombiniert einen zwischen zwei `<string>`s eingefügten Zähler vor allen Listenelementen, um einen detaillierteren Marker für Listenelemente ({{HTMLElement("li")}}) in ungeordneten Listen ({{HTMLElement("ol")}}) zu erstellen.

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

Der generierte Inhalt am Marker jedes Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem weiteren Leerzeichen. Die {{cssxref("counters", "counters()")}} Funktion definiert einen numerischen `items` Zähler, bei dem die Zahlen der verschachtelten geordneten Listen in den meisten Browsern durch einen Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen, indem der Wert des `href` Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements hinzugefügt wird.

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

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor allen Links ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit Alternativtext, das ein Screenreader als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Das CSS, um das Bild anzuzeigen und den Alternativtext festzulegen, wird unten gezeigt. Dies legt auch die Schriftart und Farbe für den Inhalt fest.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der Alternativtextwert wird im Barrierefreiheitsbaum des Browsers angezeigt. Bitte beachten Sie den Abschnitt [Siehe auch](#siehe_auch) für browser-spezifische Barrierefreiheitspanels.

Wenn ein Screenreader verwendet wird, sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Sie können das `::before` Pseudo-Element mit dem Auswahlwerkzeug Ihrer Entwicklerwerkzeuge auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheits-Panel einsehen.

### Elemente durch URL ersetzen

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird durch ein SVG unter Verwendung des {{cssxref("url_value", "&lt;url&gt;")}} Typ ersetzt.

Pseudo-Elemente werden auf ersetzten Elementen nicht dargestellt. Da dieses Element ersetzt wird, wird jedes passende `::after` oder `::before` nicht generiert oder angewendet. Um dies zu demonstrieren, enthalten wir einen `::after` Deklarationsblock, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Wenn Inhalt auf regulären Elementen (anstatt nur auf Pseudo-Elementen) generiert wird, wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht generiert werden.

### Elemente durch `<gradient>` ersetzen

Dieses Beispiel demonstriert, wie der Inhalt eines Elements durch jeden Typ von `<image>` ersetzt werden kann, in diesem Fall ein CSS-Verlauf. Der Inhalt des Elements wird durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir geben Alt-Text an, da alle Bilder aus Gründen der Barrierefreiheit beschrieben werden sollten.

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

Überprüfen Sie die [Browser-Kompatibilitätsstatistik](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Verläufe als `content`-Wert.

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
- [Von CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- Barrierefreiheitspanels von Browsern: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
