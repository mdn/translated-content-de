---
title: "`content` CSS property"
short-title: content
slug: Web/CSS/Reference/Properties/content
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`content`** [CSS](/de/docs/Web/CSS)-Eigenschaft ersetzt Inhalte mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements dargestellt wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und den zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder keinen, was bestimmt, ob das Element überhaupt gerendert wird.

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
- Eine `<content-list>`, wenn Pseudo-Elemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert, der `<string>`, `<counter>` oder [`attr()`](#attrx) Funktionswerte enthalten kann, die durch einen Schrägstrich (`/`) vorangehen.

Die oben genannten Schlüsselwörter und Datentypen werden unten ausführlicher beschrieben:

- `none`
  - : Wenn auf ein Pseudo-Element angewendet, wird das Pseudo-Element nicht generiert.
    Bei Anwendung auf ein Element hat der Wert keinen Effekt.

- `normal`
  - : Für die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente rechnet sich dieser Wert zu `none`. Für andere Pseudo-Elemente wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erzeugt er den anfänglichen (oder normalen) Inhalt des Elements. Für normale Elemente oder Seitenrandboxen berechnet er sich zu den Nachkommen des Elements. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Sequenz von Zeichen, die in übereinstimmende einfache oder doppelte Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verknüpfungsoperator in CSS).

- {{cssxref("image")}}
  - : Ein {{cssxref("image")}}, das ein anzuzeigendes Bild darstellt. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("gradient")}}-Datentyp entsprechen oder einem Teil der Webseite selbst sein, definiert durch die {{cssxref("element()")}}-Funktion.

- `<counter>`
  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), im Allgemeinen eine Zahl, die durch Berechnungen definiert wird, die von den Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} bestimmt werden. Er kann entweder mit der {{cssxref("counter()")}}- oder der {{cssxref("counters()")}}-Funktion angezeigt werden.
    - {{cssxref("counter()")}}
      - : Die {{cssxref("counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers mit dem gegebenen Namen im Geltungsbereich des gegebenen Pseudo-Elements. Er wird in dem angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` ist Standard) formatiert.
    - {{cssxref("counters()")}}
      - : Die {{cssxref("counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Geltungsbereich des gegebenen Pseudo-Elements, von außen nach innen, getrennt durch den angegebenen String. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` ist Standard) dargestellt.

- `<quote>`
  - : Der `<quote>`-Datentyp enthält sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch den entsprechenden String aus der {{cssxref("quotes")}}-Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt ein, erhöht (verringert) aber die Verschachtelungsebene für Anführungszeichen.

- `<target>`
  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erzeugen, die vom Zielende eines Links erhalten werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`
  - : Der `<leader()>`-Datentyp enthält eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid`, oder `space` (entspricht `leader(".")`, `leader("_")`, und `leader(" ")` jeweils), oder einen `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der bereitgestellte Leader-Typ als wiederholendes Muster eingefügt, das visuell Inhalt über eine horizontale Linie verbindet.
- `attr(x)`
  - : Die `attr(x)`-CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprünglichen Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist ein nicht geparster String, der den Attributnamen repräsentiert. Wenn es kein Attribut `x` gibt, wird ein leerer String zurückgegeben. Die Groß-/Kleinschreibung des Attributnamenparameters hängt von der Dokumentensprache ab.

- Alternativer Text: `/ <string> | <counter> | attr()`
  - : Ein alternativer Text kann für ein Bild oder jedes `<content-list>`-Element angegeben werden, indem ein Schrägstrich und dann eine Kombination aus Zeichenketten, Zählern und `attr()`-Funktionen angehängt werden. Der alternative Text ist für die Sprachausgabe durch Bildschirmleser gedacht, kann aber auch in einigen Browsern angezeigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

CSS-generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Daher wird er nicht im [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationsmöglichkeiten von unterstützender Technologie/Browser werden ihn nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die entscheidend für das Verständnis des Zwecks der Seite sind, ist es besser, ihn im Hauptdokument einzuschließen.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen unterstützenden Technologien zur Verfügung stehen und auch verfügbar sind, wenn CSS ausgeschaltet ist.

- [Zugänglichkeit von CSS-generiertem Inhalt – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitlinie 1.3: Erstellen von Inhalten, die auf unterschiedliche Weise dargestellt werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1 | W3C Erklärungen zu WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehlschlagen des Erfolgskriteriums 1.3.1: Einfügen von nicht dekorativem generierten Inhalt](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für Ersetzung von Elementen](#ersetzung_eines_elements_mit_url).

### Anfügen von Zeichenketten basierend auf der Klasse eines Elements

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

Beachten Sie, dass die [Art der generierten Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig Öffnungs- und Schlusszeichen vor und nach {{HTMLElement("q")}}-Elementen hinzu, sodass die Anführungszeichen in diesem Beispiel erscheinen, auch ohne dass sie explizit gesetzt wurden. Sie könnten ausgeschaltet werden, indem die jeweiligen `content`-Eigenschaften zu `no-open-quote` und `no-close-quote` oder beide zu `none` gesetzt werden. Sie können auch ausgeschaltet werden, indem die {{cssxref("quotes")}}-Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt ist, die allen Listenelementen vorangestellt werden, und erzeugt so einen detaillierteren Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}).

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

Der generierte Inhalt auf dem Marker jedes Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens zur Trennung des Präfixes vom Zähler, gefolgt von ": ", einem Doppelpunkt und einem weiteren Leerzeichen. Die {{cssxref("counters()")}}-Funktion definiert einen numerischen `items`-Zähler, wobei die Nummern verschachtelter geordneter Listen in den meisten Browsern durch einen Punkt (`.`) getrennt sind.

### Zeichenketten mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um jeden vollqualifizierten sicheren Link auszuwählen und fügt den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}}-Pseudo-Elements hinzu.

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

Dieses Beispiel fügt ein Bild vor allen Links ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit alternativem Text, das ein Bildschirmleser als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Satz, um das Bild anzuzeigen und den alternativen Text festzulegen, wird unten gezeigt.
Auch die Schriftart und Farbe für den Inhalt wird eingestellt.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der alternative Textwert wird im Barrierefreiheitsbaum des Browsers offengelegt. Siehe den Abschnitt [Siehe auch](#siehe_auch) für browserspezifische Barrierefreiheits-Panels.

Wenn Sie einen Bildschirmleser verwenden, sollte das Wort „MOZILLA“ angesprochen werden, wenn er das Bild erreicht. Sie können das `::before`-Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitsbereich anzeigen.

### Einbeziehung von Zählern in alternativen Text

Dieses Beispiel enthält eine Liste von Links zu einem Satz von Buchkapiteln und zeigt, wie generierter Inhalt verwendet wird, um ein Buchsymbol und einen Zähler vor jedem von ihnen einzufügen, mit alternativem Text, der das Wort "Kapitel" anstelle des Symbols enthält. Dies führt dazu, dass das Wort "Chapter" und die Kapitelnummer dem Text in jedem Link's {{Glossary("accessible_name", "zugänglichen Namen")}} vorangestellt werden, was den Bildschirmleserbenutzern angekündigt wird, wenn der Link den Fokus erhält.

#### HTML

Wir fügen eine Überschrift gefolgt von einer geordneten Liste von Kapitel-Titel-Links unter Verwendung von {{htmlelement("ol")}}, {{htmlelement("li")}} und {{htmlelement("a")}}-Elementen ein.

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

Der CSS-Satz enthält einen {{cssxref("counter-reset")}} für den `chapter`-Zähler auf dem `<ol>`-Element. Wir inkrementieren auch den `chapter`-Zähler auf jedem `<li>`-Element unter Verwendung von {{cssxref("counter-increment")}} und entfernen die Listenmarker, indem ein {{cssxref("list-style-type")}} Wert von `none` gesetzt wird.

```css live-sample___alt-counter
ol {
  counter-reset: chapter;
}

li {
  counter-increment: chapter;
  list-style-type: none;
}
```

Als Nächstes setzen wir die {{cssxref("::before")}}-Pseudo-Elemente des `<a>`-Elements so, dass generierter `content` gleich einem Buch-Emoji zur Darstellung eines Kapitels ist, plus dem aktuellen `chapter`-Zählerwert, und ein Leerzeichen, damit der generierte Inhalt vom Linktext getrennt ist. Schließlich setzen wir den alternativen Text des generierten Inhalts auf den aktuellen `chapter`-Zählerwert, vorangestellt durch das Wort "Chapter".

```css live-sample___alt-counter
a::before {
  content: "📖 " counter(chapter) " " / "Chapter " counter(chapter);
}
```

#### Ergebnis

{{EmbedLiveSample('alt-counter', '100%', 270)}}

Wenn ein Screenreader zu einem Link in der Liste navigiert, geben unterstützende Browser "Chapter" gefolgt von der aktuellen Zählernummer und dem Linktext an, z. B. "Chapter 1 Ein Fremder ruft an" und "Chapter 2 Zwei Eulen".

### Ersetzung eines Elements mit URL

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird durch ein SVG unter Verwendung des {{cssxref("url_value", "&lt;url&gt;")}}-Typs ersetzt.

Pseudo-Elemente werden auf ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden alle passenden `::after` oder `::before` weder generiert noch angewendet. Um dies zu demonstrieren, schließen wir einen '::after'-Deklarationsblock ein, der versucht, den `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Wenn auf regulären Elementen Inhalte generiert werden (anstatt nur auf Pseudo-Elementen), wird das gesamte Element ersetzt. Das bedeutet, dass `::before`- und `::after`-Pseudo-Elemente nicht generiert werden.

### Ersetzung eines Elements mit `<gradient>`

Dieses Beispiel demonstriert, wie der Inhalt eines Elements durch jeden `<image>`-Typ ersetzt werden kann, in diesem Fall ein CSS-Gradient. Der Inhalt des Elements wird durch ein {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir stellen alternativen Text bereit, weil alle Bilder für die Barrierefreiheit beschrieben werden sollten.

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

Überprüfen Sie die [Browser-Kompatibilitätsmatrix](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen durch Bilder, jedoch unterstützen nicht alle Browser Verläufe als `content`-Wert.

### Ersetzung eines Elements mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn die Anzeige des Benutzers eine normale Auflösung hat, wird das `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild an.

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
- [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)-Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists)-Modul
- Browser-Barrierefreiheitspanels: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
