---
title: content
slug: Web/CSS/Reference/Properties/content
l10n:
  sourceCommit: f7f6f16b39d5a2a1436ed1ffb2d3cd7b24ba6521
---

Die **`content`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ersetzt den Inhalt mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder eines Pseudo-Elements gerendert wird. Bei Elementen legt die `content`-Eigenschaft fest, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und den zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt gerendert wird.

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
- Ein optionaler alternativer Textwert, der `<string>`, `<counter>` oder [`attr()`](#attrx)-Funktionswerte enthalten kann, gefolgt von einem Schrägstrich (`/`).

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden ausführlicher beschrieben:

- `none`
  - : Wird ein Pseudo-Element angewendet, wird das Pseudo-Element nicht generiert.
    Wird auf ein Element angewendet, hat der Wert keine Wirkung.

- `normal`
  - : Für die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente berechnet sich dieser Wert zu `none`. Für andere Pseudo-Elemente wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} wird der ursprüngliche (oder normale) Inhalt des Elements erzeugt. Für reguläre Elemente oder Seitenrandboxen berechnet sich der Wert auf die Nachfahren des Elements. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenfolge, die in übereinstimmende einfache oder doppelte Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("image")}}
  - : Ein {{cssxref("image")}}, das ein anzuzeigendes Bild darstellt. Dies kann gleich einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("gradient")}} Datentyp sein, oder ein Teil der Webseite selbst, definiert durch die {{cssxref("element()")}} Funktion.

- `<counter>`
  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), im Allgemeinen eine Zahl, die durch Berechnungen definiert wird, die durch die Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} definiert sind. Er kann entweder mit der {{cssxref("counter()")}}- oder der {{cssxref("counters()")}}-Funktion angezeigt werden.
    - {{cssxref("counter()")}}
      - : Die {{cssxref("counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des gegebenen Namens im Bereich des gegebenen Pseudo-Elements. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} formatiert (`decimal` standardmäßig).
    - {{cssxref("counters()")}}
      - : Die {{cssxref("counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Bereich des gegebenen Pseudo-Elements, von außen nach innen, getrennt durch die angegebene Zeichenkette. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} angezeigt (`decimal` standardmäßig).

- `<quote>`
  - : Der `<quote>` Datentyp enthält Sprach- und Positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die geeignete Zeichenfolge aus der {{cssxref("quotes")}}-Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Keinen Inhalt einführen, sondern die Verschachtelungsebene für Anführungszeichen erhöhen (verringern).

- `<target>`
  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Kreuzreferenzen erzeugen, die vom Zielende eines Links erhalten werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`
  - : Der `<leader()>`-Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (entspricht `leader(".")`, `leader("_")` und `leader(" ")`), oder eine `<string>` als Parameter. Wenn sie unterstützt wird und als Wert für `content` verwendet wird, wird der bereitgestellte Leader-Typ als wiederholendes Muster eingefügt, das den Inhalt visuell über eine horizontale Linie verbindet.

- `attr(x)`
  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungselements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine ungeparste Zeichenfolge, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenfolge zurückgegeben. Die Groß-/Kleinschreibung des Attributnamens hängt von der Dokumentensprache ab.

- Alternativer Text: `/ <string> | <counter> | attr()`
  - : Alternativer Text kann für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich gefolgt von einer Kombination aus Zeichenketten, Zählern und `attr()`-Funktionen hinzugefügt wird. Der alternative Text ist für die Sprachausgabe durch Bildschirmlesegeräte gedacht, kann jedoch auch in einigen Browsern angezeigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Von CSS generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Daher wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen aus unterstützender Technologie/Browser werden ihn nicht ankündigen. Wenn der Inhalt Informationen enthält, die entscheidend zum Verständnis des Zwecks der Seite beitragen, ist es besser, ihn im Hauptdokument zu integrieren.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen unterstützenden Technologien zur Verfügung stehen und auch dann verfügbar sind, wenn CSS deaktiviert ist.

- [Unterstützung der Barrierefreiheit für CSS-generierten Inhalt – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitfaden 1.3: Erstellen von Inhalten, die auf unterschiedliche Weise präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehlschlag des Erfolgskriteriums 1.3.1: Einfügen von nicht dekorativen generierten Inhalten](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erstellen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für den Elementaustausch](#ersetzen_von_elementen_mit_url).

### Anhängen von Zeichenfolgen basierend auf der Klasse eines Elements

Dieses Beispiel fügt generierten Text hinter den Text von Elementen ein, die einen bestimmten Klassennamen haben. Der Text wird rot gefärbt.

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

Beachten Sie, dass der [Typ der generierten Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig vor und nach {{HTMLElement("q")}}-Elementen offene und geschlossene Anführungszeichen ein, sodass die Anführungszeichen in diesem Beispiel erscheinen, ohne dass sie explizit festgelegt werden. Sie könnten durch das Setzen der jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` oder durch Setzen beider auf `none` deaktiviert werden. Sie können auch durch das Setzen der {{cssxref("quotes")}}-Eigenschaft auf `none` deaktiviert werden.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt ist, vor alle Listenelemente, wodurch ein detaillierterer Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}) erstellt wird.

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

Der generierte Inhalt auf jedem Marker eines Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen. Die {{cssxref("counters()")}}-Funktion definiert einen numerischen `items`-Zähler, bei dem die Nummern verschachtelter geordneter Listen in den meisten Browsern mit einem Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen, wobei der Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}}-Pseudo-Elements hinzugefügt wird.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, vorangestellt von "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt vor allen Links ein Bild ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit alternativem Text, den ein Bildschirmlesegerät als Sprache ausgeben kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den alternativen Text festzulegen, wird unten gezeigt.
Ebenso sind die Schriftart und Farbe für den Inhalt festgelegt.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der alternative Textwert wird im Barrierefreiheitsbaum des Browsers angezeigt. Siehe die [Siehe auch](#siehe_auch) Sektion für browser-spezifische Barrierefreiheitspanels.

Wenn Sie einen Bildschirmleser verwenden, sollte dieser beim Erreichen des Bildes das Wort "MOZILLA" aussprechen. Sie können das `::before`-Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitspanel einsehen.

### Einschließen von Zählern im alternativen Text

Dieses Beispiel zeigt eine Liste von Links zu einem Set von Buchkapiteln und zeigt, wie man mit generiertem Inhalt ein Buch-Icon und einen Zähler vor jedem einfügt, mit alternativem Text, der das Wort "Kapitel" anstelle des Icons enthält. Dies führt dazu, dass das Wort "Kapitel" und die Kapitelnummer dem Text in jedem Link's {{Glossary("accessible_name", "zugänglichen Namen")}} vorangehen, der von Bildschirmlesern mitgeteilt wird, wenn der Link den Fokus erhält.

#### HTML

Wir fügen eine Überschrift gefolgt von einer geordneten Liste von Kapitel-Titel-Links unter Verwendung von {{htmlelement("ol")}}, {{htmlelement("li")}} und {{htmlelement("a")}}-Elementen hinzu.

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

Das CSS beinhaltet einen {{cssxref("counter-reset")}} für den `chapter`-Zähler auf dem `<ol>`-Element. Wir erhöhen auch den `chapter`-Zähler auf jedem `<li>`-Element mit {{cssxref("counter-increment")}} und entfernen die Listensymbole, indem wir einen {{cssxref("list-style-type")}}-Wert von `none` festlegen.

```css live-sample___alt-counter
ol {
  counter-reset: chapter;
}

li {
  counter-increment: chapter;
  list-style-type: none;
}
```

Anschließend setzen wir die {{cssxref("::before")}}-Pseudo-Elemente der `<a>`-Elemente auf generierten `content`, der gleich einem Buch-Emoji zur Darstellung eines Kapitels ist, plus dem aktuellen `chapter`-Zählerwert und einem Leerzeichen, so dass der generierte Inhalt vom Linktext getrennt ist. Schließlich setzen wir den alternativen Text des generierten Inhalts auf den aktuellen `chapter`-Zählerwert, vorangestellt von dem Wort "Kapitel".

```css live-sample___alt-counter
a::before {
  content: "📖 " counter(chapter) " " / "Chapter " counter(chapter);
}
```

#### Ergebnis

{{EmbedLiveSample('alt-counter', '100%', 270)}}

Wenn ein Bildschirmleser zu einem Link innerhalb der Liste navigiert, werden unterstützende Browser "Kapitel" gefolgt von der aktuellen Zählernummer, gefolgt vom Linktext ankündigen, zum Beispiel "Kapitel 1 Ein Fremder ruft an" und "Kapitel 2 Zwei Eulen".

### Ersetzen von Elementen mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden durch ein SVG ersetzt, indem der {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet wird.

Pseudo-Elemente werden auf ersetzten Elementen nicht dargestellt. Da dieses Element ersetzt wird, wird kein übereinstimmendes `::after` oder `::before` generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after`-Deklarationsblock ein, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Beim Generieren von Inhalt auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before`- und `::after`-Pseudo-Elemente nicht generiert werden.

### Ersetzen von Elementen mit `<gradient>`

Dieses Beispiel demonstriert, wie der Inhalt eines Elements durch jeden Typ von `<image>` ersetzt werden kann, in diesem Fall ein CSS-Gradient. Die Inhalte des Elements werden durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir geben alternativen Text an, weil alle Bilder zur Barrierefreiheit beschrieben werden sollten.

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

Prüfen Sie die [Browser-Kompatibilitätsübersicht](#browser-kompatibilität). Alle Browser unterstützen Gradienten und alle Browser unterstützen das Ersetzen von Elementen durch Bilder, aber nicht alle Browser unterstützen Gradienten als `content`-Wert.

### Ersetzen von Elementen mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Nutzers eine normale Auflösung hat, wird das `1x.png` angezeigt. Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild an.

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
- [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- Browser Barrierefreiheitspanels: [Firefox Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility-Paneel](https://developer.chrome.com/docs/devtools/accessibility/reference#pane) und [Safari Accessibility-Baum](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
