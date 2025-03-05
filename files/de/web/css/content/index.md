---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`content`** [CSS](/de/docs/Web/CSS) Eigenschaft ersetzt Inhalt mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudoelements gerendert wird. Für Elemente gibt die `content` Eigenschaft an, ob das Element normal gerendert wird (`normal` oder `none`) oder durch ein Bild (und zugehörigen "alt"-Text) ersetzt wird. Für Pseudoelemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder keines, was bestimmt, ob das Element überhaupt gerendert wird.

Objekte, die mittels der `content` Eigenschaft eingefügt werden, sind **anonyme [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)**.

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
- `<content-replacement>` beim Ersetzen eines DOM-Knotens. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudoelemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der spezifizierten Reihenfolge erscheinen. Jedes `<content-list>` Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert eines `<string>` oder `<counter>`, dem ein Schrägstrich (`/`) vorangestellt ist.

Die oben erwähnten Schlüsselwörter und Datentypen werden im Folgenden genauer beschrieben:

- `none`

  - : Wenn auf ein Pseudoelement angewendet, wird das Pseudoelement nicht generiert.
    Wenn auf ein Element angewendet, hat der Wert keine Auswirkung.

- `normal`

  - : Der Standardwert. Errechnet sich für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente zu `none`. Für andere Pseudoelemente wird der Inhalt der initiale (oder normale) Inhalt sein, der für dieses {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erwartet wird. Für reguläre Elemente oder Seitenrandboxen errechnet sich dies zu den Nachfahren des Elements.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenfolge, die in übereinstimmende einfache oder doppelte Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein darzustellendes Bild repräsentiert. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}} Datentyp gleichkommen oder ein Teil der Webseite selbst sein, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`

  - : Der `<counter>` Wert ist ein [CSS Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), normalerweise eine Zahl, die durch Berechnungen definiert wird, die von den {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} Eigenschaften bereitgestellt werden. Er kann entweder mit Hilfe der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im Geltungsbereich am angegebenen Pseudoelement. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} formatiert (`decimal`standardmäßig).
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Geltungsbereich am angegebenen Pseudoelement, von außen nach innen, getrennt durch die angegebene Zeichenkette. Die Zähler werden in dem angegebenen {{cssxref("&lt;list-style-type&gt;")}} angezeigt (`decimal` standardmäßig).

- `<quote>`

  - : Der `<quote>` Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenkette aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Liefert keinen Inhalt, erhöht (verringert) aber die Verschachtelungsebene für Anführungszeichen.

- `<target>`

  - : Der `<target>` Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erzeugen, die vom Zielende eines Links erhalten werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>` Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (gleichbedeutend mit `leader(".")`, `leader("_")` und `leader(" ")`, respektive), oder einen `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der bereitgestellte leader-type als sich wiederholendes Muster eingefügt, das inhaltlich über eine horizontale Linie verbindet.

- `attr(x)`

  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudoelements ab. Der Wert des Attributs `x` des Elements ist eine nicht geparste Zeichenfolge, die den Attributnamen darstellt. Wenn es kein Attribut `x` gibt, wird eine leere Zeichenfolge zurückgegeben. Die Groß-/Kleinschreibung des Attributnamen-Parameters hängt von der Sprache des Dokuments ab.

- Alternative Text: `/ <string> | <counter>`
  - : Ein alternativer Text kann für ein Bild oder beliebige `<content-list>` Elemente angegeben werden, indem man einen Schrägstrich und dann eine Zeichenkette oder einen Zähler anhängt. Der alternative Text ist zum Sprachenausgabe durch Screenreader gedacht, kann aber auch in einigen Browsern angezeigt werden. Beachten Sie, dass wenn der Browser keinen alternativen Text unterstützt, die `content` Deklaration als ungültig angesehen wird und ignoriert wird. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen spezifizieren den "alt text" für das Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Durch CSS generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Daher wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Assistivtechnologie-/Browser-Kombinationen werden ihn nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die zum Verständnis des Zwecks der Seite entscheidend sind, ist es besser, ihn im Hauptdokument zu enthalten.

Wenn eingefügter Inhalt nicht dekorativ ist, überprüfen Sie, dass die Informationen Assistivtechnologien zur Verfügung gestellt werden und auch dann verfügbar sind, wenn CSS deaktiviert ist.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitfaden 1.3: Erstellen von Inhalten, die auf verschiedene Arten präsentiert werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Failure of Success Criterion 1.3.1: inserting non-decorative generated content](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudoelementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#ersetzen_von_elementen_mit_url).

### Anhängen von Zeichenfolgen basierend auf einer Klassen-Attribut

Dieses Beispiel fügt generierten Text nach dem Text von Elementen hinzu, die einen bestimmten Klassennamen haben. Der Text ist rot gefärbt.

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

Beachten Sie, dass [die Art der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) basierend auf der Sprache sind. Browser fügen standardmäßig offene und geschlossene Anführungszeichen vor und nach {{HTMLElement("q")}} Elementen hinzu, sodass die Anführungszeichen in diesem Beispiel erscheinen würden, ohne dass sie explizit festgelegt werden. Sie könnten ausgeschaltet werden, indem man die entsprechenden `content` Eigenschaftswerte auf `no-open-quote` und `no-close-quote` setzt, oder indem man sie beide auf `none` setzt. Sie können auch ausgeschaltet werden, indem man die {{cssxref("quotes")}} Eigenschaft auf `none` setzt.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt ist, die allen Listenelementen vorangestellt werden, wodurch eine detailliertere Markierung für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}) entsteht.

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

Der generierte Inhalt auf jedem Markierungselement des Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, dem ": ", ein Doppelpunkt und ein zusätzliches Leerzeichen folgt. Die {{cssxref("counters", "counters()")}} Funktion definiert einen numerischen `items` Zähler, in dem die Nummern der verschachtelten geordneten Listen in den meisten Browsern durch ein Punkt (.) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href` Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudoelements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href` Attributs, eingefügt von "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor allen Links ein. Zwei `content` Werte werden bereitgestellt. Der spätere `content` Wert enthält ein Bild mit alternativem Text, den ein Screenreader als Sprache ausgeben kann. Wenn ein Browser keinen alternativen Text unterstützt, wird diese Deklaration als ungültig betrachtet und der vorherige `content` Wert angezeigt. Diese Fallback-Inhaltsliste enthält ein Bild und die Nachricht " - alt text is not supported - ".

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den alternativen Text zu setzen, ist unten gezeigt.
Dies setzt auch die Schriftart und Farbe für den Inhalt.
Dies wird in Browsern verwendet, die den alternativen Text _anzeigen_ und in Browsern, die den alternativen Text nicht unterstützen und den Fallback `content` Wert anzeigen.

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
> Wenn die alternative Text-Syntax unterstützt wird, wird der Wert im Barrierefreiheitsbaum des Browsers angezeigt. Siehe den Abschnitt [Siehe auch](#siehe_auch) für browser-spezifische Barrierefreiheits-Panels.

Wenn Sie einen Screenreader verwenden, sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Wenn supported (wenn der "Alt-Text wird nicht unterstützt" nicht angezeigt wird), können Sie das `::before` Pseudoelement mit Ihrem Entwickler-Tool-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheits-Panel anzeigen.

In Browsern, die die alternative Text-Syntax nicht unterstützen, ist die gesamte Deklaration, die den alternativen Text enthält, ungültig. In diesem Fall wird der vorherige `content` Wert verwendet, das Bild und der "Alt-Text wird nicht unterstützt"-Text werden angezeigt.

### Ersetzen von Elementen mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden durch eine SVG mittels des {{cssxref("url_value", "&lt;url&gt;")}} Typs ersetzt.

Pseudoelemente werden auf ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wurde, werden keine passenden `::after` oder `::before` erzeugt oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after` Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudoelement wird nicht erzeugt, da das Element ersetzt wird.

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

Beim Generieren von Inhalt auf regulären Elementen (anstatt nur auf Pseudoelementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after` Pseudoelemente nicht erzeugt werden.

### Ersetzen von Elementen mit `<gradient>`

Dieses Beispiel zeigt, wie der Inhalt eines Elements durch einen beliebigen `<image>` Typ ersetzt werden kann, in diesem Fall ein CSS-Verlauf. Die Inhalte des Elements werden durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Mit {{cssxref("@supports")}}, bieten wir Unterstützung für alternativen Text und einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} für Browser, die alternativen Text mit Ersetzen von Elementinhalten unterstützen.

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

Überprüfen Sie die [Browser-Kompatibilitäts-Diagramm](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen durch Bilder, aber nicht alle Browser unterstützen Verläufe als `content` Wert und nicht alle Browser unterstützen Alt-Text bei Ersetzungen. Wenn der Browser ein Feld ohne Verlauf anzeigt, wird das Ersetzen von Elementen unterstützt, aber Verläufe werden nicht als Inhaltsersatzwert unterstützt. Wenn das Element mit einem gestreiften Verlauf ersetzt wird, unterstützt der Browser beides.

### Ersetzen von Elementen mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements durch ein {{cssxref("image/image-set", "image-set()")}}. Wenn der Bildschirm des Benutzers eine normale Auflösung hat, wird das `1x.png` angezeigt, Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild an.

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
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

- Browser Barrierefreiheits-Panels: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
