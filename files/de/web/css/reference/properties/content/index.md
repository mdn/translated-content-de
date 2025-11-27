---
title: content
slug: Web/CSS/Reference/Properties/content
l10n:
  sourceCommit: ff4dc3d43e814614df60ecdb7376b59698660ac2
---

Die **`content`** [CSS](/de/docs/Web/CSS) Eigenschaft ersetzt Inhalte durch einen generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudoelements gerendert wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) rendert oder durch ein Bild (und dazugehörigen "alt"-Text) ersetzt wird. Für Pseudoelemente und Margenboxen definiert `content` die Inhalte als Bilder, Text, beides oder keines, was bestimmt, ob das Element überhaupt gerendert wird.

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
- `<content-replacement>` beim Ersetzen eines DOM-Knotens. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>` beim Ersetzen von Pseudoelementen und Margenboxen. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jeder `<content-list>`-Eintrag ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert von einem `<string>` oder `<counter>`, dem ein Schrägstrich (`/`) vorangestellt ist.

Die oben genannten Schlüsselwörter und Datentypen werden unten genauer beschrieben:

- `none`
  - : Bei Anwendung auf ein Pseudoelement wird das Pseudoelement nicht generiert.
    Bei Anwendung auf ein Element hat der Wert keine Wirkung.

- `normal`
  - : Für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente wird dieser Wert zu `none` berechnet. Für andere Pseudoelemente wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erzeugt es den ursprünglichen (oder normalen) Inhalt des Elements. Für reguläre Elemente oder Seitenmargenboxen wird es zu den Nachkommen des Elements berechnet. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Folge von Zeichen, die in passende einfache oder doppelte Anführungszeichen eingeschlossen sind. Mehrere String-Werte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}
  - : Ein {{cssxref("&lt;image&gt;")}}, das ein anzuzeigendes Bild darstellt. Dies kann gleichbedeutend mit einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}} Datentyp sein, oder ein Teil der Webseite selbst, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`
  - : Der `<counter>` Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), der im Allgemeinen eine Zahl ist, die durch Berechnungen definiert wird, die durch die Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} definiert werden. Er kann entweder mit der {{cssxref("counter", "counter()")}} oder der {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im gegebenen Pseudoelement. Er ist im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) formatiert.
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Bereich des gegebenen Pseudoelements, von außen nach innen, getrennt durch die angegebene Zeichenkette. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) gerendert.

- `<quote>`
  - : Der `<quote>` Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch den entsprechenden String aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Führt keine Inhalte ein, erhöht (verringert) jedoch die Verschachtelungsebene für Anführungszeichen.

- `<target>`
  - : Der `<target>` Datentyp umfasst drei Zielfunktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erzeugen, die vom Zielende eines Links erhalten werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`
  - : Der `<leader()>` Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (gleichbedeutend mit `leader(".")`, `leader("_")` und `leader(" ")`), oder ein `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der Leader-Typ als wiederholendes Muster eingefügt, das visuell Inhalte über eine horizontale Linie verbindet.

- `attr(x)`
  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudoelements ab. Der Wert des Attributs `x` des Elements ist eine ungeparste Zeichenkette, die den Attributnamen repräsentiert. Wenn es kein Attribut `x` gibt, wird eine leere Zeichenkette zurückgegeben. Die Groß-/Kleinschreibung des Attributnamenparameters hängt von der Dokumentsprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Ein Alternativtext kann für ein Bild oder beliebige `<content-list>`-Einträge angegeben werden, indem ein Schrägstrich und dann eine Zeichenkette oder ein Zähler hinzugefügt werden. Der Alternativtext ist für Sprachausgabe durch Bildschirmleser gedacht, kann jedoch auch in einigen Browsern angezeigt werden. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen geben den "alt text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Von CSS generierte Inhalte sind nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Daher werden sie nicht im [Accessibility Tree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen aus unterstützender Technologie und Browser werden sie nicht bekannt geben. Wenn der Inhalt Informationen vermittelt, die für das Verständnis des Zwecks der Seite entscheidend sind, ist es besser, ihn im Hauptdokument zu inkludieren.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen unterstützenden Technologien bereitgestellt werden und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Barrierefreiheitsunterstützung für von CSS generierte Inhalte – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Inhalte schaffen, die auf verschiedene Weise präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.1 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehler des Erfolgskriteriums 1.3.1: nichtdekorativen generierten Inhalt einfügen](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierte Inhalte auf Pseudoelementen. Die letzten drei sind [Beispiele für Elementersetzung](#elementersetzung_mit_url).

### Anfügen von Zeichenketten basierend auf der Klasse eines Elements

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

Beachten Sie, dass [der Typ der generierten Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig offene und geschlossene Anführungszeichen vor und nach {{HTMLElement("q")}}-Elementen hinzu, sodass die Anführungszeichen in diesem Beispiel auch ohne explizite Festlegung erscheinen würden. Sie könnten durch Anpassung der jeweiligen `content`-Eigenschaften auf `no-open-quote` und `no-close-quote` oder durch Festlegen beider auf `none` ausgeschaltet werden. Sie können auch durch Festlegen der {{cssxref("quotes")}}-Eigenschaft auf `none` ausgeschaltet werden.

### Hinzufügen von Text zu Listenelementzählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s an alle Listenelemente vorbereitet wird, wodurch ein detaillierterer Marker für Listenelemente ({{HTMLElement("li")}}) in ungeordneten Listen ({{HTMLElement("ol")}}) entsteht.

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

Der generierte Inhalt auf dem Marker jedes Listenitems fügt den Text "item " als Präfix hinzu, einschließlich eines Leerraums, um das Präfix vom Zähler zu trennen, der durch ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen folgt. Die {{cssxref("counters", "counters()")}} Funktion definiert einen numerischen `items` Zähler, bei dem die Zahlen verschachtelter geordneter Listen in den meisten Browsern durch einen Punkt (`.`) getrennt sind.

### Zeichenketten mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und fügt den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudoelements hinzu.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, vorangestellt mit "URL: ", mit einem Leerraum, alles in Klammern.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor allen Links ein. Zwei `content`-Werte sind angegeben. Der spätere `content`-Wert enthält ein Bild mit alternativem Text, den ein Bildschirmleser als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den alternativen Text festzulegen, ist unten gezeigt. Dies setzt auch die Schriftart und Farbe für den Inhalt.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der alternative Textwert wird im Accessibility Tree des Browsers angezeigt. Siehe den Abschnitt [Siehe auch](#siehe_auch) für browser-spezifische Barrierefreiheitspanels.

Wenn Sie einen Bildschirmleser verwenden, sollte er das Wort "MOZILLA" aussprechen, wenn er das Bild erreicht. Sie können das `::before`-Pseudoelement mit Ihrem Entwickler-Werkzeug-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Zugänglichkeitspanel ansehen.

### Elementersetzung mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden durch ein SVG mit dem {{cssxref("url_value", "&lt;url&gt;")}} Typ ersetzt.

Pseudoelemente werden bei ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, wird kein passendes `::after` oder `::before` generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after` Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudoelement wird nicht generiert, da das Element ersetzt wird.

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

Wenn Inhalte auf regulären Elementen generiert werden (anstatt nur auf Pseudoelementen), wird das gesamte Element ersetzt. Dies bedeutet, dass `::before` und `::after`-Pseudoelemente nicht generiert werden.

### Elementersetzung mit `<gradient>`

Dieses Beispiel zeigt, wie die Inhalte eines Elements durch einen beliebigen `<image>`-Typ ersetzt werden können, in diesem Fall ein CSS-Gradient. Die Inhalte des Elements werden durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir geben einen Alternativtext an, weil alle Bilder für Barrierefreiheit beschrieben werden sollten.

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

Überprüfen Sie das [Browser-Kompatibilitätsdiagramm](#browser-kompatibilität). Alle Browser unterstützen Gradients und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Gradients als `content`-Wert.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements durch ein {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Benutzers eine normale Auflösung hat, wird `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild an.

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
- [CSS generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- Browser-Barrierefreiheitspanels: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
