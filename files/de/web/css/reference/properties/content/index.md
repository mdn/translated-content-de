---
title: "`content` CSS property"
short-title: content
slug: Web/CSS/Reference/Properties/content
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Die **`content`** [CSS](/de/docs/Web/CSS) Eigenschaft ersetzt Inhalte durch einen generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements gerendert wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) rendert oder durch ein Bild (und dazugehörigen "Alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt rendert.

Objekte, die mit der Eigenschaft `content` eingefügt werden, sind **anonyme {{Glossary("replaced_elements", "ersetzte Elemente")}}**.

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
content: counter(chapter) / "Chapter " counter(chapter);

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
- Eine `<content-list>`, wenn Pseudo-Elemente und Marginboxes ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert, der `<string>`, `<counter>`, oder [`attr()`](#attrx) Funktionswerte enthalten kann, gefolgt von einem Schrägstrich (`/`).

Die oben erwähnten Schlüsselwörter und Datentypen werden weiter unten detaillierter beschrieben:

- `none`
  - : Wird dies auf ein Pseudo-Element angewendet, wird das Pseudo-Element nicht generiert.
    Wird dies auf ein Element angewendet, hat der Wert keine Wirkung.

- `normal`
  - : Bei den {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elementen wird dieser Wert zu `none` berechnet. Bei anderen Pseudo-Elementen wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} wird der initiale (normale) Inhalt des Elements erzeugt. Für reguläre Elemente oder Seitenrandboxen wird der Wert zu den Nachkommen des Elements berechnet. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenfolge in übereinstimmenden einfachen oder doppelten Anführungszeichen. Mehrere Zeichenfolgenwerte werden aneinandergereiht (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("image")}}
  - : Ein {{cssxref("image")}}, das ein anzuzeigendes Bild darstellt. Dies kann gleich einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("gradient")}} Datentyp sein oder ein Teil der Webseite selbst, definiert durch die {{cssxref("element()")}} Funktion.

- `<counter>`
  - : Der `<counter>` Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), in der Regel eine Zahl, die durch Berechnungen definiert wird, die von den Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} angegeben werden. Er kann entweder mit der {{cssxref("counter()")}} oder der {{cssxref("counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter()")}}
      - : Die {{cssxref("counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der erzeugte Text ist der Wert des innersten Zählers des angegebenen Namens im Geltungsbereich des angegebenen Pseudo-Elements. Er wird im angegebenen {{cssxref("list-style-type")}} (`decimal` standardmäßig) formatiert.
    - {{cssxref("counters()")}}
      - : Die {{cssxref("counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der erzeugte Text ist der Wert aller Zähler mit dem angegebenen Namen im Bereich des angegebenen Pseudo-Elements, von außen nach innen, getrennt durch den angegebenen String. Die Zähler werden in dem angegebenen {{cssxref("list-style-type")}} (`decimal` standardmäßig) gerendert.

- `<quote>`
  - : Der `<quote>` Datentyp enthält sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch den entsprechenden String aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Führt keinen Inhalt ein, erhöht (verringert) jedoch die Verschachtelungsebene für Anführungszeichen.

- `<target>`
  - : Der `<target>` Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>`, und `<target-text()>`, die Querverweise vom Zielende eines Links erstellen. Siehe [Formal syntax](#formale_syntax).

- `<leader()>`
  - : Der `<leader()>` Datentyp enthält eine Führungsfunktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid`, oder `space` (entspricht `leader(".")`, `leader("_")`, und `leader(" ")`, beziehungsweise), oder eine `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Leader-Typ als sich wiederholendes Muster eingefügt, das den Inhalt visuell über eine horizontale Linie verbindet.

- `attr(x)`
  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements eines Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist ein nicht geparster String, der den Attributnamen darstellt. Wenn es kein Attribut `x` gibt, wird ein leerer String zurückgegeben. Die Groß- und Kleinschreibung des Attributnamenparameters hängt von der Dokumentsprache ab.

- Alternativer Text: `/ <string> | <counter> | attr()`
  - : Ein alternativer Text kann für ein Bild oder beliebige `<content-list>` Elemente angegeben werden, indem ein Schrägstrich und dann eine Kombination aus Zeichenfolgen, Zählern und `attr()` Funktionen angehängt werden. Der alternative Text ist für die Ausgabe durch einen Screenreader gedacht, kann aber auch in einigen Browsern angezeigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Von CSS generierte Inhalte sind nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Aufgrund dessen sind sie im [Zugänglichkeitssbaum](/de/docs/Learn/web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) nicht vertreten und gewisse Kombinationen aus assistiver Technologie und Browser geben sie nicht wieder. Wenn der Inhalt Informationen enthält, die entscheidend für das Verständnis des Zwecks der Seite sind, ist es besser, ihn im Hauptdokument einzufügen.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen assistiven Technologien zur Verfügung steht und auch verfügbar ist, wenn CSS ausgeschaltet ist.

- [Barrierefreie Unterstützung für mit CSS generierte Inhalte – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitfaden 1.3: Erstellen Sie Inhalte, die in verschiedenen Weisen präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis von Erfolgskriterium 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehler beim Erfolgskriterium 1.3.1: Einfügen von nicht-dekorativen generierten Inhalten](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erstellen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für Elementersetzung](#elementersetzung_mit_url).

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

Beachten Sie, dass die [Art der generierten Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) basierend auf der Sprache erfolgt. Browser fügen standardmäßig öffnende und schließende Anführungszeichen vor und nach {{HTMLElement("q")}} Elementen hinzu, daher würden die Anführungszeichen in diesem Beispiel ohne explizite Angabe erscheinen. Sie könnten ausgeschaltet werden, indem die jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` gesetzt werden, oder indem sie beide auf `none` gesetzt werden. Sie können auch ausgeschaltet werden, indem die {{cssxref("quotes")}} Eigenschaft auf `none` eingestellt wird.

### Hinzufügen von Text zu Listeneinträgezählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingesetzt wird, die allen Listeneinträgen vorangestellt werden, und erstellt so detailliertere Markierungen für Listeneinträge ({{HTMLElement("li")}}) in ungeordneten Listen ({{HTMLElement("ol")}}).

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

Der generierte Inhalt auf jedem Listeneintrag-Marker fügt dem Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, das gefolgt wird von ": ", einem Doppelpunkt und einem weiteren Leerzeichen. Die {{cssxref("counters()")}} Funktion definiert einen numerischen `items` Zähler, in dem die Zahlen von untergeordneten geordneten Listen in den meisten Browsern mit einem Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druckstile. Es verwendet einen [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, dem "URL: " vorangestellt ist, mit einem Leerzeichen, alles in Klammern.

### Einfügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor allen Links ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit alternativem Text, den ein Screenreader als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den alternativen Text zu setzen, wird unten gezeigt. Außerdem werden Schriftart und Farbe für den Inhalt festgelegt.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der alternative Textwert wird im Barrierefreiheitsbaum des Browsers angezeigt. Siehe den Abschnitt [Siehe auch](#siehe_auch) für browserspezifische Barrierefreiheitspanels.

Wenn Sie einen Screenreader verwenden, sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Sie können das `::before` Pseudo-Element mit Ihrem Auswahlinstrument der Entwickler-Tools auswählen und den {{Glossary("accessible_name", "barrierefreien Namen")}} im Barrierefreiheits-Panel anzeigen.

### Einschließen von Zählern in alternativem Text

Dieses Beispiel zeigt eine Liste von Links zu einem Set von Buchkapiteln und zeigt, wie man generierten Inhalt verwenden kann, um ein Buchsymbol und einen Zähler vor jedem hinzuzufügen, mit alternativem Text, der das wörtliche Wort "Chapter" anstelle des Symbols enthält. Dies resultiert darin, dass das Wort "Kapitel" und die Kapitelnummer dem Text in jedem Link als {{Glossary("accessible_name", "barrierefreier Name")}} vorangestellt werden, was den Screenreader-Benutzern mitgeteilt wird, wenn der Link den Fokus erhält.

#### HTML

Wir fügen eine Überschrift gefolgt von einer geordneten Liste von Kapitel-Titel-Links unter Verwendung von {{htmlelement("ol")}}, {{htmlelement("li")}}, und {{htmlelement("a")}} Elementen ein.

```html live-sample___alt-counter
<h2>Chapter list</h2>
<ol>
  <li><a href="#">A stranger calls</a></li>
  <li><a href="#">Two owls</a></li>
  <li><a href="#">Dinner was bland</a></li>
  <li><a href="#">Three owls</a></li>
  <li><a href="#">No-one answered the door</a></li>
  <li><a href="#">The stranger leaves</a></li>
  <li><a href="#">Bedtime</a></li>
</ol>
```

#### CSS

Der CSS-Code enthält ein {{cssxref("counter-reset")}} für den `chapter` Zähler auf dem `<ol>` Element. Wir inkrementieren außerdem den `chapter` Zähler auf jedem `<li>` Element mit {{cssxref("counter-increment")}} und entfernen die Listenmarkierungen, indem wir einen {{cssxref("list-style-type")}} Wert von `none` setzen.

```css live-sample___alt-counter
ol {
  counter-reset: chapter;
}

li {
  counter-increment: chapter;
  list-style-type: none;
}
```

Anschließend setzen wir das {{cssxref("::before")}} Pseudo-Element der `<a>` Elemente so, dass es generierten `content` enthält, der gleich einem Buch-Emoji ist, um ein Kapitel darzustellen, plus den aktuellen `chapter` Zählerwert und ein Leerzeichen, so dass der generierte Inhalt vom Linktext getrennt ist. Schließlich setzen wir den alternativen Text des generierten Inhalts auf den aktuellen `chapter` Zählerwert, dem das Wort "Kapitel" vorangestellt ist.

```css live-sample___alt-counter
a::before {
  content: "📖 " counter(chapter) " " / "Chapter " counter(chapter);
}
```

#### Ergebnis

{{EmbedLiveSample('alt-counter', '100%', 270)}}

Wenn ein Screenreader zu einem Link innerhalb der Liste navigiert, werden unterstützende Browser "Kapitel" gefolgt von der aktuellen Zählernummer, gefolgt vom Linktext ansagen, zum Beispiel "Kapitel 1 Ein Fremder ruft an" und "Kapitel 2 Zwei Eulen".

### Elementersetzung mit URL

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird durch ein SVG unter Verwendung des {{cssxref("url_value", "&lt;url&gt;")}} Typs ersetzt.

Pseudo-Elemente werden auf ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden keine übereinstimmenden `::after` oder `::before` generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after` Deklarationsblock ein, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Beim Generieren von Inhalten auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Dies bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht generiert werden.

### Elementersetzung mit `<gradient>`

Dieses Beispiel demonstriert, wie der Inhalt eines Elements durch einen beliebigen `<image>` Typ ersetzt werden kann, in diesem Fall ein CSS-Gradient. Der Inhalt des Elements wird durch ein {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir stellen alternativen Text bereit, weil alle Bilder für Barrierefreiheit beschrieben werden sollten.

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

Überprüfen Sie das [Browser-Kompatibilitätsdiagramm](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen durch Bilder, aber nicht alle Browser unterstützen Verläufe als `content` Wert.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Benutzers eine normale Auflösung hat, wird das `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild.

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
- [Mit CSS generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- Browser-Accessibility-Panels: [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://university.webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
