---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`content`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ersetzt Inhalte mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements gerendert wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normalerweise (`normal` oder `none`) gerendert wird oder mit einem Bild (und dem zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` die Inhalte als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt gerendert wird.

Objekte, die mit der `content`-Eigenschaft eingefügt werden, sind **anonyme [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)**.

{{EmbedInteractiveExample("pages/tabbed/content.html", "tabbed-shorter")}}

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
- Ein optionaler alternativer Textwert einer `<string>` oder eines `<counter>`, dem ein Schrägstrich (`/`) vorangeht.

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden ausführlicher beschrieben:

- `none`

  - : Wird ein Pseudo-Element angewendet, wird das Pseudo-Element nicht generiert. Wird ein Element angewendet, hat der Wert keine Auswirkung.

- `normal`

  - : Der Standardwert. Wird zu `none` für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente berechnet. Für andere Pseudo-Elemente wird der Inhalt der initiale (oder normale) Inhalt sein, der für diesen {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erwartet wird. Für reguläre Elemente oder Seitenrandboxen wird dies in die Nachkommen des Elements berechnet.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenfolge, die in passenden einfachen oder doppelten Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein darzustellendes Bild darstellt. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}} Datentyp, oder einem Teil der Webseite selbst entsprechen, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), in der Regel eine Zahl, die durch Berechnungen definiert wird, die durch die {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} Eigenschaften definiert sind. Sie kann entweder mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im Bereich des angegebenen Pseudo-Elements. Er ist im angegebenen {{cssxref("&lt;list-style-type&gt;")}} formatiert (`decimal` standardmäßig).
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Bereich des angegebenen Pseudo-Elements, von außen nach innen, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} dargestellt (`decimal` standardmäßig).

- `<quote>`

  - : Der `<quote>` Datentyp beinhaltet sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Führt keinen Inhalt ein, sondern erhöht (verringert) die Verschachtelungsebene für Anführungszeichen.

- `<target>`

  - : Der `<target>` Datentyp umfasst drei Ziel Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erstellen, die vom Zielende eines Links erhalten werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>` Datentyp enthält eine Führungsfunktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid`, oder `space` (gleichbedeutend mit `leader(".")`, `leader("_")`, und `leader(" ")`, bzw.) oder eine `<string>` als Parameter. Wenn sie unterstützt wird und als Wert für `content` verwendet wird, wird der bereitgestellte Führungstyp als sich wiederholendes Muster eingefügt, das visuell über eine horizontale Linie verbindet.

- `attr(x)`

  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine ungeparste Zeichenfolge, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenfolge zurückgegeben. Die Groß-/Kleinschreibungsunempfindlichkeit des Attributnamens-Parameters hängt von der Dokumentsprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativtext kann für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich und dann eine Zeichenfolge oder ein Zähler hinzugefügt werden. Der Alternativtext ist für die Sprachausgabe durch Screenreader gedacht, kann aber auch in einigen Browsern angezeigt werden. Beachten Sie, dass, wenn der Browser Alternativtext nicht unterstützt, die `content`-Deklaration als ungültig angesehen und ignoriert wird. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen spezifizieren den "alt text" für das Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

CSS-generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Daher wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen von Hilfstechnologie/Browser werden ihn nicht ansagen. Wenn der Inhalt Informationen vermittelt, die entscheidend für das Verständnis der Seite sind, ist es besser, ihn im Haupttext des Dokuments einzuschließen.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen den Hilfstechnologien zur Verfügung stehen und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Unterstützung für barrierefreien CSS-Generierten Inhalt – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Erstellen Sie Inhalte, die in verschiedenen Weisen präsentiert werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erfolgsrichtlinie 1.3.1 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehlschlag der Erfolgsrichtlinie 1.3.1: Einfügen von nicht-dekorativem generiertem Inhalt](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierte Inhalte auf Pseudo-Elementen. Die letzten drei sind [Beispiele für Elementersetzung](#ersatz_von_elementen_mit_url).

### Anhängen von Zeichenfolgen basierend auf der Klasse eines Elements

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

Beachten Sie, dass der [Typ der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig öffnende und schließende Anführungszeichen vor und nach {{HTMLElement("q")}}-Elementen hinzu, daher würden die Anführungszeichen in diesem Beispiel erscheinen, ohne dass sie ausdrücklich gesetzt werden. Sie hätten durch das Setzen der entsprechenden `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` oder durch das Setzen beider auf `none` abgeschaltet werden können. Sie können auch abgeschaltet werden, indem die {{cssxref("quotes")}}-Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenpunkte-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`-Elementen eingebettet ist, die allen Listenelementen vorangestellt werden. Dadurch wird ein detaillierterer Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}) erstellt.

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

Der generierte Inhalt auf jedem Marker des Listenelements fügt den Text "item " als Präfix hinzu, einschließlich einem Leerzeichen, um das Präfix vom Zähler zu trennen, der von ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen gefolgt wird. Die {{cssxref("counters", "counters()")}}-Funktion definiert einen numerischen `items`-Zähler, bei dem die Zahlen verschachtelter geordneter Listen in den meisten Browsern durch einen Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den `href`-Attributwert nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, dem "URL: " mit einem Leerzeichen voransteht, alles in Klammern.

### Hinzufügen eines Bildes mit Alternativtext

Dieses Beispiel fügt ein Bild vor allen Links ein. Es werden zwei `content`-Werte bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit Alternativtext, das von einem Screenreader als Sprache wiedergegeben werden kann. Unterstützt ein Browser den Alternativtext nicht, wird diese Deklaration als ungültig betrachtet und der vorherige `content`-Wert angezeigt. Diese Fallback-Inhaltsliste enthält ein Bild und die Nachricht " - alt text is not supported - ".

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS zeigt das Bild und setzt den Alternativtext, so wie es unten gezeigt wird. Dies setzt auch die Schriftart und Farbe für den Inhalt. Dies wird in Browsern verwendet, die den Alternativtext _anzeigen_ und in Browsern, die den Alternativtext nicht unterstützen und den Fallback-`content`-Wert anzeigen.

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
> Wenn die Alternativtext-Syntax unterstützt wird, wird der Wert im Barrierefreiheitsbaum des Browsers sichtbar gemacht. Konsultieren Sie den Abschnitt [Siehe auch](#siehe_auch) für browserspezifische Barrierefreiheits-Panels.

Wenn ein Screenreader verwendet wird, sollte er das Wort "MOZILLA" aussprechen, wenn er das Bild erreicht. Sollte dies unterstützt werden (wenn der Hinweis "alt text is not supported" nicht angezeigt wird), können Sie das `::before` Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheits-Panel ansehen.

In Browsern, die die Alternativtext-Syntax nicht unterstützen, ist die komplette Deklaration mit dem Alternativtext ungültig. In diesem Fall wird der vorherige `content`-Wert verwendet, das Bild und den Text "alt text is not supported" anzeigend.

### Ersatz von Elementen mit URL

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird mit einem SVG mithilfe des {{cssxref("url_value", "&lt;url&gt;")}} Typen ersetzt.

Pseudo-Elemente werden auf ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden passende `::after` oder `::before` nicht generiert oder angewendet. Um dies zu demonstrieren, inkludieren wir einen `::after` Deklarationsblock, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

{{EmbedLiveSample('Element_replacement_with_url', '100%', 400)}}

Beim Generieren von Inhalten auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Dies bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht generiert werden.

### Ersatz von Elementen mit `<gradient>`

Dieses Beispiel demonstriert, wie die Inhalte eines Elements durch einen beliebigen `<image>`-Typ ersetzt werden können, in diesem Fall ein CSS-Verlauf. Der Inhalt des Elements wird durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Mit {{cssxref("@supports")}} bieten wir Unterstützung für Alternativtext und einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} für Browser, die Alternativtext bei der Ersetzung von Elementinhalten unterstützen.

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

Überprüfen Sie die [Browser-Kompatibilitäts-Tabelle](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Verläufe als `content`-Wert und nicht alle Browser unterstützen Alternativtext bei Ersetzungen. Wenn der Browser eine Box ohne Verlauf anzeigt, werden Ersetzungen unterstützt, aber Verläufe nicht als Inhaltsersatzwert unterstützt. Wenn das Element durch einen gestreiften Verlauf ersetzt wird, unterstützt der Browser beides.

### Ersatz von Elementen mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Nutzers eine normale Auflösung hat, wird das `1x.png` Bild angezeigt, Screens mit einer höheren Auflösung zeigen das `2x.png` Bild.

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
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

- Barrierefreiheits-Panels von Browsern: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
