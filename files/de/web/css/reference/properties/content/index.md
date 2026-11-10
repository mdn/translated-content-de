---
title: "`content` CSS property"
short-title: content
slug: Web/CSS/Reference/Properties/content
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`content`** ersetzt Inhalt durch einen generierten Wert. Mit ihr lässt sich festlegen, was innerhalb eines Elements oder Pseudo-Elements gerendert wird. Bei Elementen legt die Eigenschaft `content` fest, ob das Element normal gerendert (`normal` oder `none`) oder durch ein Bild mit zugehörigem Alternativtext ersetzt wird. Bei Pseudo-Elementen und Seitenrandbereichen definiert `content` den Inhalt als Bilder, Text, beides oder nichts. Dies bestimmt, ob das Pseudo-Element beziehungsweise der Seitenrandbereich überhaupt gerendert wird.

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

Der Wert kann Folgendes sein:

- Eines von zwei Schlüsselwörtern: `none` oder `normal`. `normal` ist der Standardwert der Eigenschaft.
- Ein `<content-replacement>`, wenn ein DOM-Knoten ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Seitenrandbereiche ersetzt werden. Eine `<content-list>` ist eine Liste aus einer oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jeder Eintrag der `<content-list>` hat den Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler Alternativtextwert, der `<string>`, `<counter>` oder Werte der Funktion [`attr()`](#attrx) enthalten kann und dem ein Schrägstrich (`/`) vorangestellt ist.

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden näher beschrieben:

- `none`
  - : Bei einem Pseudo-Element wird dieses nicht generiert.
    Bei einem Element hat der Wert keine Wirkung.

- `normal`
  - : Bei den Pseudo-Elementen {{cssxref("::before")}} und {{cssxref("::after")}} ergibt dieser Wert den berechneten Wert `none`. Bei anderen Pseudo-Elementen wie {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erzeugt er den ursprünglichen (oder normalen) Inhalt des Elements. Bei regulären Elementen oder Seitenrandbereichen ergibt er den berechneten Inhalt der Kindelemente. Dies ist der Standardwert.

- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenfolge, die von passenden einfachen oder doppelten Anführungszeichen umschlossen ist. Mehrere Zeichenfolgenwerte werden aneinandergehängt (in CSS gibt es keinen Verkettungsoperator).

- {{cssxref("image")}}
  - : Ein {{cssxref("image")}}, das ein anzuzeigendes Bild darstellt. Es kann dem Datentyp {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("gradient")}} entsprechen oder ein Teil der Webseite selbst sein, der durch die Funktion {{cssxref("element()")}} definiert wird.

- `<counter>`
  - : Der Wert `<counter>` ist ein [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters), üblicherweise eine Zahl, die durch Berechnungen anhand der Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} entsteht. Er kann mit der Funktion {{cssxref("counter()")}} oder {{cssxref("counters()")}} angezeigt werden.
    - {{cssxref("counter()")}}
      - : Die Funktion {{cssxref("counter()")}} hat zwei Formen: 'counter(_name_)' und 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers mit dem angegebenen Namen, der beim jeweiligen Pseudo-Element gültig ist. Er wird im angegebenen {{cssxref("list-style-type")}} formatiert (standardmäßig `decimal`).
    - {{cssxref("counters()")}}
      - : Auch die Funktion {{cssxref("counters()")}} hat zwei Formen: 'counters(_name_, _string_)' und 'counters(_name_, _string_, _style_)'. Der generierte Text enthält die Werte aller Zähler mit dem angegebenen Namen, die beim jeweiligen Pseudo-Element gültig sind – vom äußersten bis zum innersten –, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("list-style-type")}} gerendert (standardmäßig `decimal`).

- `<quote>`
  - : Der Datentyp `<quote>` umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge aus der Eigenschaft {{cssxref("quotes")}} ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Diese Werte fügen keinen Inhalt ein, erhöhen beziehungsweise verringern aber die Verschachtelungsebene für Anführungszeichen.

- `<target>`
  - : Der Datentyp `<target>` umfasst drei Zielfunktionen: `<target-counter()>`, `<target-counters()>` und `<target-text()>`. Sie erzeugen Querverweise anhand des Linkziels. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`
  - : Der Datentyp `<leader()>` umfasst eine Füllzeichenfunktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwörter `dotted`, `solid` oder `space` (entsprechend `leader(".")`, `leader("_")` beziehungsweise `leader(" ")`) oder einen `<string>` als Parameter. Wenn die Funktion unterstützt und als Wert für `content` verwendet wird, wird der angegebene Füllzeichentyp als sich wiederholendes Muster eingefügt, das Inhalte visuell entlang einer horizontalen Linie verbindet.

- `attr(x)`
  - : Die CSS-Funktion `attr(x)` ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungselements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine nicht geparste Zeichenfolge. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenfolge zurückgegeben. Ob beim Attributnamen zwischen Groß- und Kleinschreibung unterschieden wird, hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter> | attr()`
  - : Für ein Bild oder beliebige Einträge einer `<content-list>` kann ein Alternativtext angegeben werden. Dazu wird ein Schrägstrich angehängt, gefolgt von einer Kombination aus Zeichenfolgen, Zählern und `attr()`-Funktionen. Der Alternativtext ist für die Sprachausgabe durch Screenreader vorgesehen, kann aber in manchen Browsern auch angezeigt werden.

## Barrierefreiheit

Durch CSS generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model) enthalten. Daher erscheint er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) und wird von manchen Kombinationen aus assistiver Technologie und Browser nicht angesagt. Wenn der Inhalt Informationen vermittelt, die für das Verständnis des Zwecks der Seite wesentlich sind, sollten Sie ihn stattdessen in das Hauptdokument aufnehmen.

Wenn eingefügter Inhalt nicht rein dekorativ ist, prüfen Sie, ob die Informationen für assistive Technologien bereitgestellt werden und auch bei deaktiviertem CSS verfügbar sind.

- [Unterstützung der Barrierefreiheit für CSS-generierte Inhalte – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Inhalte erstellen, die auf unterschiedliche Weise dargestellt werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.1 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Verstoß gegen Erfolgskriterium 1.3.1: Einfügen nicht dekorativer generierter Inhalte](https://www.w3.org/TR/WCAG20-TECHS/F87) – Techniken für WCAG 2.0

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Die ersten fünf Beispiele erzeugen Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#ein_element_durch_eine_url_ersetzen).

### Zeichenfolgen anhand der Klasse eines Elements anhängen

Dieses Beispiel fügt hinter dem Text von Elementen mit einem bestimmten Klassennamen generierten Text ein. Der Text ist rot eingefärbt.

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

Dieses Beispiel fügt Anführungszeichen in unterschiedlichen Farben um Zitate ein.

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

Beachten Sie, dass die [Art der generierten Anführungszeichen](/de/docs/Web/CSS/Reference/Properties/quotes#auto_quotes) von der Sprache abhängt. Browser fügen standardmäßig öffnende und schließende Anführungszeichen vor und nach {{HTMLElement("q")}}-Elementen ein. Die Anführungszeichen in diesem Beispiel würden daher auch ohne explizite Festlegung erscheinen. Sie könnten unterdrückt werden, indem die jeweiligen Werte der Eigenschaft `content` auf `no-open-quote` und `no-close-quote` oder beide auf `none` gesetzt werden. Alternativ kann die Eigenschaft {{cssxref("quotes")}} auf `none` gesetzt werden.

### Text zu Zählern von Listeneinträgen hinzufügen

Dieses Beispiel kombiniert einen Zähler zwischen zwei `<string>`-Werten und stellt das Ergebnis allen Listeneinträgen voran. So entsteht eine ausführlichere Markierung für Listeneinträge ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}).

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

Der generierte Inhalt in der Markierung jedes Listeneintrags ergänzt den Text „item “ als Präfix. Das Leerzeichen trennt das Präfix vom Zähler, auf den „: “ folgt – ein Doppelpunkt und ein weiteres Leerzeichen. Die Funktion {{cssxref("counters()")}} definiert einen numerischen Zähler `items`. In den meisten Browsern werden die Zahlen verschachtelter geordneter Listen dabei durch einen Punkt (`.`) getrennt.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist für Druck-Stylesheets nützlich. Es verwendet einen [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen. Der Wert des Attributs `href` wird nach dem Linktext als Inhalt des Pseudo-Elements {{cssxref("::after")}} hinzugefügt.

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

Der generierte Inhalt ist der Wert des Attributs `href`, dem „URL: “ mit einem Leerzeichen vorangestellt ist. Der gesamte Inhalt steht in Klammern.

### Ein Bild mit Alternativtext hinzufügen

Dieses Beispiel fügt vor allen Links ein Bild ein. Es werden zwei `content`-Werte angegeben. Der spätere `content`-Wert enthält ein Bild mit Alternativtext, den ein Screenreader vorlesen kann.

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Das folgende CSS zeigt das Bild an und legt den Alternativtext fest.
Außerdem legt es Schriftart und Farbe für den Inhalt fest.

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") /
    " MOZILLA: ";
}
```

#### Ergebnis

{{EmbedLiveSample('Adding_an_image_with_alternative_text', '100%', 60)}}

> [!NOTE]
> Der Alternativtextwert ist im Barrierefreiheitsbaum des Browsers verfügbar. Informationen zu den Barrierefreiheitsbereichen einzelner Browser finden Sie unter [Siehe auch](#siehe_auch).

Wenn Sie einen Screenreader verwenden, sollte er beim Bild das Wort „MOZILLA“ vorlesen. Sie können das Pseudo-Element `::before` mit dem Auswahlwerkzeug Ihrer Entwicklertools auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitsbereich ansehen.

### Zähler in Alternativtext aufnehmen

Dieses Beispiel enthält eine Liste mit Links zu Buchkapiteln. Es zeigt, wie generierter Inhalt verwendet wird, um vor jedem Link ein Buchsymbol und einen Zähler einzufügen. Der Alternativtext enthält anstelle des Symbols das Wort „Chapter“. Dadurch stehen das Wort „Chapter“ und die Kapitelnummer vor dem Text im {{Glossary("accessible_name", "zugänglichen Namen")}} jedes Links. Sie werden Screenreader-Nutzern vorgelesen, wenn der Link den Fokus erhält.

#### HTML

Wir fügen eine Überschrift ein, gefolgt von einer geordneten Liste mit Links zu Kapitelüberschriften. Dafür verwenden wir die Elemente {{htmlelement("ol")}}, {{htmlelement("li")}} und {{htmlelement("a")}}.

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

Das CSS enthält ein {{cssxref("counter-reset")}} für den Zähler `chapter` auf dem `<ol>`-Element. Außerdem erhöhen wir den Zähler `chapter` auf jedem `<li>`-Element mit {{cssxref("counter-increment")}} und entfernen die Listenmarkierungen, indem wir {{cssxref("list-style-type")}} auf `none` setzen.

```css live-sample___alt-counter
ol {
  counter-reset: chapter;
}

li {
  counter-increment: chapter;
  list-style-type: none;
}
```

Anschließend legen wir für die {{cssxref("::before")}}-Pseudo-Elemente der `<a>`-Elemente generierten `content` fest: ein Buch-Emoji als Symbol für ein Kapitel, den aktuellen Wert des Zählers `chapter` und ein Leerzeichen, das den generierten Inhalt vom Linktext trennt. Schließlich setzen wir den Alternativtext des generierten Inhalts auf den aktuellen Wert des Zählers `chapter`, dem das Wort „Chapter“ vorangestellt ist.

```css live-sample___alt-counter
a::before {
  content: "📖 " counter(chapter) " " / "Chapter " counter(chapter);
}
```

#### Ergebnis

{{EmbedLiveSample('alt-counter', '100%', 270)}}

Wenn ein Screenreader zu einem Link in der Liste navigiert, sagen unterstützende Browser „Chapter“, gefolgt von der aktuellen Zählernummer und dem Linktext, an – beispielsweise „Chapter 1 A stranger calls“ und „Chapter 2 Two owls“.

### Ein Element durch eine URL ersetzen

Dieses Beispiel ersetzt ein reguläres Element! Sein Inhalt wird durch ein SVG des Typs {{cssxref("url_value", "&lt;url&gt;")}} ersetzt.

Pseudo-Elemente werden auf ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden passende `::after`- oder `::before`-Pseudo-Elemente weder generiert noch angewendet. Um dies zu veranschaulichen, fügen wir einen `::after`-Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt einzufügen. Dieses Pseudo-Element wird nicht generiert, weil das Element ersetzt wird.

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

Wenn Inhalt auf regulären Elementen statt nur auf Pseudo-Elementen generiert wird, wird das gesamte Element ersetzt. Das bedeutet, dass die Pseudo-Elemente `::before` und `::after` nicht generiert werden.

### Ein Element durch `<gradient>` ersetzen

Dieses Beispiel zeigt, wie der Inhalt eines Elements durch einen beliebigen `<image>`-Typ ersetzt werden kann – hier durch einen CSS-Farbverlauf. Der Inhalt des Elements wird durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Wir geben Alternativtext an, da alle Bilder aus Gründen der Barrierefreiheit beschrieben werden sollten.

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

Sehen Sie sich die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) an. Alle Browser unterstützen Farbverläufe und das Ersetzen von Elementen durch Bilder, aber nicht alle unterstützen Farbverläufe als Wert für `content`.

### Ein Element durch `image-set()` ersetzen

Dieses Beispiel ersetzt den Inhalt eines Elements durch ein {{cssxref("image/image-set", "image-set()")}}. Wenn der Bildschirm des Nutzers eine normale Auflösung hat, wird `1x.png` angezeigt. Auf Bildschirmen mit höherer Auflösung wird das Bild `2x.png` angezeigt.

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
- Modul [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)
- Modul [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists)
- Barrierefreiheitsbereiche der Browser: [Barrierefreiheits-Inspektor von Firefox](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Barrierefreiheitsbereich von Chrome](https://developer.chrome.com/docs/devtools/accessibility/reference#pane) und [Barrierefreiheitsbaum von Safari](https://university.webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
