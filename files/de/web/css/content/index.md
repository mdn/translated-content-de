---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Die **`content`**-Eigenschaft [CSS](/de/docs/Web/CSS) ersetzt Inhalt durch einen erzeugten Wert. Sie kann genutzt werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements gerendert wird. Für Elemente spezifiziert die `content`-Eigenschaft, ob das Element normal gerendert wird (`normal` oder `none`) oder durch ein Bild (und zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt gerendert wird.

Objekte, die mit der `content`-Eigenschaft eingefügt werden, sind **anonyme {{Glossary("replaced_elements", "ersetzte Elemente")}}**.

{{InteractiveExample("CSS Demo: content", "tabbed-shorter")}}

```css interactive-example
.topic-games::before {
  content: "🎮 ";
}

.topic-weather::before {
  content: "⛅ ";
}

.topic-hot::before {
  content: url("/shared-assets/images/examples/fire.png");
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
- Ein optionaler alternativer Textwert eines `<string>` oder `<counter>`, dem ein Schrägstrich (`/`) vorangestellt ist.

Die oben genannten Schlüsselwörter und Datentypen werden unten ausführlicher beschrieben:

- `none`

  - : Bei Anwendung auf ein Pseudo-Element wird das Pseudo-Element nicht erzeugt.
    Bei Anwendung auf ein Element hat der Wert keine Wirkung.

- `normal`

  - : Der Standardwert. Wird für die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente zu `none` berechnet. Bei anderen Pseudo-Elementen ist der Inhalt der initiale (oder normale) erwartete Inhalt für das {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}}. Für reguläre Elemente oder Randboxen der Seite entspricht dies den Nachkommen des Elements.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Abfolge von Zeichen in übereinstimmenden einfachen oder doppelten Anführungszeichen. Mehrere Zeichenfolgenwerte werden zusammengefügt (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein darzustellendes Bild repräsentiert. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}} Datentyp entsprechen oder einem Teil der Webseite selbst, definiert durch die {{cssxref("element", "element()")}}-Funktion.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), im Allgemeinen eine Zahl, die durch Berechnungen, die durch die Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} definiert sind, erzeugt wird. Er kann entweder mit der {{cssxref("counter", "counter()")}} oder der {{cssxref("counters", "counters()")}}-Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der erzeugte Text ist der Wert des innersten Zählers des angegebenen Namens im Geltungsbereich des angegebenen Pseudo-Elements. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} formatiert (`decimal` standardmäßig).
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der erzeugte Text ist der Wert aller Zähler mit dem angegebenen Namen im Geltungsbereich des angegebenen Pseudo-Elements, von außen nach innen, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} gerendert (`decimal` standardmäßig).

- `<quote>`

  - : Der `<quote>`-Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge aus der {{cssxref("quotes")}}-Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt hinzu, erhöht (verringert) jedoch die Verschachtelungsebene für Zitate.

- `<target>`

  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>`, und `<target-text()>`, die Querverweise erstellen, die vom Zielende eines Links bezogen werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>`-Datentyp umfasst eine Führungsfunktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (gleichbedeutend mit `leader(".")`, `leader("_")`, und `leader(" ")`, jeweils), oder einen `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Leader-Typ als wiederholtes Muster eingefügt, das den Inhalt visuell entlang einer horizontalen Linie verbindet.

- `attr(x)`

  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Herkunfts-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine nicht geparste Zeichenfolge, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenfolge zurückgegeben. Die Groß-/Kleinschreibung des Attributnamenparameters hängt von der Dokumentensprache ab.

- alternativer Text: `/ <string> | <counter>`
  - : Alternativer Text kann für ein Bild oder für beliebige `<content-list>`-Elemente angegeben werden, indem einem Schrägstrich eine Zeichenfolge oder ein Zähler angehängt wird. Der alternative Text ist für die Sprachausgabe durch Bildschirmlesegeräte vorgesehen, kann aber auch in einigen Browsern angezeigt werden. Beachten Sie, dass, wenn der Browser keinen alternativen Text unterstützt, die `content`-Deklaration als ungültig angesehen und ignoriert wird. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen spezifizieren den "alt text" für das Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Von CSS generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Aus diesem Grund wird er nicht im [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) repräsentiert und bestimmte Kombinationen von Hilfstechnologien und Browsern werden ihn nicht ankündigen. Wenn der Inhalt Informationen enthält, die entscheidend für das Verständnis des Zwecks der Seite sind, ist es besser, ihn im Hauptdokument zu inkludieren.

Wenn eingefügter Inhalt nicht dekorativ ist, überprüfen Sie, dass die Informationen Hilfstechnologien zur Verfügung gestellt werden und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgs-Kriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehler des Erfolgs-Kriteriums 1.3.1: Einfügen von nicht-dekorativem generiertem Inhalt](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erstellen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#elementersetzung_mit_url).

### Anfügen von Zeichenfolgen basierend auf einer Klassenkennung eines Elements

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

### Zitate

Dieses Beispiel fügt unterschiedlich gefärbte Anführungszeichen um Zitate herum ein.

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

Beachten Sie, dass die [Art der generierten Zitate](/de/docs/Web/CSS/quotes#auto_quotes) basierend auf der Sprache generiert wird. Browser fügen standardmäßig offene und geschlossene Anführungszeichen vor und nach {{HTMLElement("q")}}-Elementen ein, sodass die Zitate in diesem Beispiel auch ohne explizite Setzung erscheinen würden. Sie könnten durch die Einstellung der jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` oder durch das Setzen beider auf `none` ausgeschaltet werden. Sie können auch ausgeschaltet werden, indem die {{cssxref("quotes")}}-Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelementzählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt wird, als Präfix für alle Listenelemente und erzeugt einen detaillierteren Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}).

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

Der generierte Inhalt bei jedem Listenelement-Marker fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen. Die {{cssxref("counters", "counters()")}}-Funktion definiert einen numerischen `items`-Zähler, bei dem die Nummern verschachtelter geordneter Listen in den meisten Browsern durch einen Punkt (`.`) getrennt werden.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druckstile. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}}-Pseudo-Elements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, dem "URL: " vorangestellt ist, mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt vor allen Links ein Bild ein. Zwei `content`-Werte werden angegeben. Der spätere `content`-Wert enthält ein Bild mit einem alternativen Text, den ein Screenreader als Sprache ausgeben kann. Wenn ein Browser den alternativen Text nicht unterstützt, wird diese Deklaration als ungültig angesehen und der vorherige `content`-Wert angezeigt. Diese Fallback-Inhaltsliste enthält ein Bild und die Nachricht " - alt text is not supported - ".

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den alternativen Text zu setzen, wird unten gezeigt.
Er setzt außerdem die Schriftart und Farbe für den Inhalt.
Dieser wird in Browsern verwendet, die den alternativen Text _anzeigen_ und in Browsern, die den alternativen Text nicht unterstützen und den Fallback-`content`-Wert anzeigen.

```css
a::before {
  /* fallback content */
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico")
    " - alt text is not supported - ";
  /* content with alternative text */
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
  font:
    x-small Arial,
    sans-serif;
  color: gray;
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Wenn die alternative Textersetzung unterstützt wird, wird der Wert im Barrierefreiheit-Baum des Browsers sichtbar sein. Siehe den [Siehe auch](#siehe_auch)-Bereich für browserspezifische Barrierefreiheitspanels.

Beim Verwenden eines Screenreaders sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Wenn unterstützt (falls der "alt text is not supported" nicht angezeigt wird), können Sie das `::before`-Pseudo-Element mit Ihrem Entwickler-Werkzeug-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitspanel sehen.

In Browsern, die die alternative Syntax nicht unterstützen, ist die gesamte Deklaration mit dem alternativen Text ungültig. In diesem Fall wird der vorherige `content`-Wert verwendet, der das Bild und den Text "alt text is not supported" anzeigt.

### Elementersetzung mit URL

Dieses Beispiel ersetzt reguläres Element! Der Inhalt des Elements wird durch eine SVG mit dem {{cssxref("url_value", "&lt;url&gt;")}}-Typ ersetzt.

Pseudo-Elemente werden auf ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden entsprechende `::after`- oder `::before` nicht erzeugt oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after`-Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht erzeugt, da das Element ersetzt wird.

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

Beim Erzeugen von Inhalt auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Dies bedeutet, dass `::before`- und `::after`-Pseudo-Elemente nicht erzeugt werden.

### Elementersetzung mit `<gradient>`

Dieses Beispiel zeigt, wie der Inhalt eines Elements durch jeden Typ von `<image>` ersetzt werden kann, in diesem Fall durch ein CSS-Gradient. Der Inhalt des Elements wird durch ein {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Mit {{cssxref("@supports")}} bieten wir Unterstützung für alternativen Text und ein {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} für Browser, die alternativen Text mit Elementinhaltsersetzung unterstützen.

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
  content: linear-gradient(#639f, #c96a);
}

@supports (content: linear-gradient(#000, #fff) / "alt text") {
  #replaced {
    content: repeating-linear-gradient(blue 0, orange 10%) /
      "Gradients and alt text are supported";
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Element_replacement_with_gradient', '100%', 200)}}

Überprüfen Sie das [Browservergleich-Diagramm](#browser-kompatibilität). Alle Browser unterstützen Gradienten und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Gradienten als `content`-Wert und nicht alle Browser unterstützen alternativen Text bei Ersetzungen. Wenn der Browser eine Box ohne Gradient anzeigt, wird das Ersetzen von Elementen unterstützt, aber Gradienten werden nicht als Inhaltsersetzungswert unterstützt. Wenn das Element durch einen gestreiften Gradient ersetzt wird, unterstützt der Browser beides.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Nutzers eine normale Auflösung hat, wird das `1x.png` angezeigt, Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild.

#### HTML

```html
<div id="replaced">Mozilla</div>
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
  );
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
- {{Glossary("Replaced_elements", "Ersatz-Elemente")}}
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

- Barrierefreiheit-Panels der Browser: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
