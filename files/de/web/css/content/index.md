---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: b580c9fe8f354fb00dfe55d9d1fc4083bb49fab8
---

{{CSSRef}}

Die **`content`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) ersetzt den Inhalt mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudoelements gerendert wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal dargestellt wird (`normal` oder `none`) oder ob es durch ein Bild (und den dazugehörigen "alt"-Text) ersetzt wird. Für Pseudoelemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt gerendert wird.

Mit der `content`-Eigenschaft eingefügte Objekte sind **anonyme [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)**.

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
- Eine `<content-list>`, wenn Pseudoelemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert eines `<string>` oder `<counter>`, der durch einen Schrägstrich (`/`) vorangestellt wird.

Die oben genannten Schlüsselwörter und Datentypen sind im Folgenden ausführlicher beschrieben:

- `none`

  - : Wird es auf ein Pseudoelement angewendet, wird das Pseudoelement nicht erzeugt.
    Wird es auf ein Element angewendet, hat der Wert keine Wirkung.

- `normal`

  - : Der Standardwert. Berechnet sich zu `none` für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente. Für andere Pseudoelemente wird der Inhalt der initiale (oder normale) erwartete Inhalt für das {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} sein. Für reguläre Elemente oder Seitenrandboxen berechnet sich dies zu den Nachkommen des Elements.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenfolge, die in passende einfache oder doppelte Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden concatenated (Operator für Verkettung existiert in CSS nicht).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein darzustellendes Bild repräsentiert. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("&lt;gradient&gt;")}} Datentypen entsprechen oder einem Teil der Webseite, definiert durch die Funktion {{cssxref("element", "element()")}}.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), in der Regel eine Zahl, die durch Berechnungen, definiert durch die Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}}, erzeugt wird. Er kann entweder mit der Funktion {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die Funktion {{cssxref("counter", "counter()")}} hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des angegebenen Namens im Geltungsbereich des gegebenen Pseudoelements. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) formatiert.
    - {{cssxref("counters", "counters()")}}
      - : Die Funktion {{cssxref("counters", "counters()")}} hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Geltungsbereich des gegebenen Pseudoelements, vom äußersten bis zum innersten, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) gerendert.

- `<quote>`

  - : Der `<quote>` Datentyp beinhaltet sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge aus der {{cssxref("quotes")}}-Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt ein, erhöht (oder verringert) jedoch die Verschachtelungsebene für Anführungszeichen.

- `<target>`

  - : Der `<target>` Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erzeugen, die vom Zielende eines Links abgeleitet werden. Siehe [Formal syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>` Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwerte `dotted`, `solid` oder `space` (entspricht `leader(".")`, `leader("_")` und `leader(" ")`, jeweils) oder ein `<string>` als Parameter. Wenn er unterstützt wird und als Wert für `content` verwendet wird, wird der angegebene Leader-Typ als sich wiederholendes Muster eingefügt, das Inhalt über eine horizontale Linie visuell verbindet.

- `attr(x)`

  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudoelements ab. Der Wert des Attributs `x` des Elements ist eine unverarbeitete Zeichenkette, die den Attributnamen darstellt. Gibt es kein Attribut `x`, wird eine leere Zeichenkette zurückgegeben. Die Groß-/Kleinschreibung des Attributnamenparameters hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativtext kann für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich und dann eine Zeichenkette oder ein Zähler hinzugefügt werden. Der Alternativtext ist für die Sprachausgabe von Bildschirmlesern vorgesehen, kann aber auch in einigen Browsern angezeigt werden. Beachten Sie, dass, wenn der Browser keinen Alternativtext unterstützt, die `content`-Deklaration als ungültig angesehen und ignoriert wird. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen geben den "alt-Text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Durch CSS generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Aus diesem Grund wird es nicht im [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) dargestellt, und bestimmte Kombinationen von Hilfstechnologien/Browsern werden ihn nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die für das Verständnis des Zwecks der Seite kritisch sind, ist es besser, ihn im Hauptdokument zu speichern.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen für Hilfstechnologien bereitgestellt werden und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Barrierefreiheit für durch CSS generierten Inhalt – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Erstellen Sie Inhalte, die auf unterschiedliche Weise dargestellt werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehler des Erfolgskriteriums 1.3.1: Einfügen von nicht dekorativem generierten Inhalt](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudoelementen. Die letzten drei sind [Beispiele für den Ersatz von Elementen](#ersetzung_von_elementen_mit_url).

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

Beachten Sie, dass der [Typ der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) basierend auf der Sprache ist. Browser fügen standardmäßig vor und nach {{HTMLElement("q")}}-Elementen öffnende und schließende Anführungszeichen ein, sodass die Anführungszeichen in diesem Beispiel erscheinen würden, ohne dass sie explizit gesetzt werden. Sie könnten deaktiviert werden, indem die entsprechenden `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` gesetzt oder beide auf `none` gesetzt werden. Sie können auch deaktiviert werden, indem die {{cssxref("quotes")}}-Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt wird und als Präfix für alle Listenelemente dient, wodurch ein detaillierterer Marker für Listenelemente ({{HTMLElement("li")}}) in ungeordneten Listen ({{HTMLElement("ol")}}) entsteht.

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

Der generierte Inhalt auf dem Marker jedes Listenelements fügt den Text "item " als Präfix hinzu, inklusive eines Leerzeichens, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen. Die Funktion {{cssxref("counters", "counters()")}} definiert einen numerischen `items` Zähler, bei dem die Zahlen verschachtelter geordneter Listen in den meisten Browsern durch einen Punkt (`.`) getrennt sind.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}}-Pseudoelements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, eingefügt durch "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit Alternativtext

Dieses Beispiel fügt vor allen Links ein Bild ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit Alternativtext, den ein Screenreader als Sprache ausgeben kann. Wenn ein Browser keinen Alternativtext unterstützt, wird diese Deklaration als ungültig betrachtet und der vorherige `content`-Wert angezeigt. Diese Fallback-Inhaltsliste enthält ein Bild und die Nachricht " - alt text is not supported - ".

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den Alternativtext festzulegen, wird unten gezeigt.
Dies legt auch die Schriftart und Farbe für den Inhalt fest.
Dies wird in Browsern verwendet, die den Alternativtext _anzeigen_ und in Browsern, die den Alternativtext nicht unterstützen und den Fallback-`content`-Wert anzeigen.

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
> Wenn die Alternativtextsyntax unterstützt wird, wird der Wert im Barrierefreiheitsbaum des Browsers sichtbar gemacht. Sehen Sie sich den Abschnitt [Siehe auch](#siehe_auch) für browser-spezifische Barrierefreiheitspanels an.

Wenn ein Screenreader verwendet wird, sollte er das Wort "MOZILLA" aussprechen, wenn er das Bild erreicht. Wenn unterstützt (wenn "alt text is not supported" nicht angezeigt wird), können Sie das `::before`-Pseudoelement mit Ihrem Entwicklerwerkzeug-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitspanel anzeigen.

In Browsern, die die Alternativtextsyntax nicht unterstützen, ist die gesamte Deklaration, die den alt text enthält, ungültig. In diesem Fall wird der vorherige `content`-Wert verwendet, der das Bild und den Text "alt text is not supported" anzeigt.

### Ersetzung von Elementen mit URL

In diesem Beispiel wird ein normales Element ersetzt! Der Inhalt des Elements wird durch ein SVG mit dem {{cssxref("url_value", "&lt;url&gt;")}}-Typ ersetzt.

Pseudoelemente werden bei ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, wird kein übereinstimmendes `::after` oder `::before` generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after`-Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudoelement wird nicht generiert, da das Element ersetzt wird.

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

Beim Generieren von Inhalt auf regulären Elementen (anstatt nur auf Pseudoelementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after`-Pseudoelemente nicht generiert werden.

### Ersetzung von Elementen mit `<gradient>`

Dieses Beispiel zeigt, wie der Inhalt eines Elements durch jeden Typ eines `<image>` ersetzt werden kann, in diesem Fall durch einen CSS-Gradienten. Der Inhalt des Elements wird durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Mit {{cssxref("@supports")}} bieten wir Unterstützung für Alternativtext und einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} für Browser, die Alternativtext mit Ersetzung des Elementinhalts unterstützen.

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

Prüfen Sie das [Diagramm der Browser-Kompatibilität](#browser-kompatibilität). Alle Browser unterstützen Gradienten und alle Browser unterstützen das Ersetzen von Elementen durch Bilder, aber nicht alle Browser unterstützen Gradienten als `content`-Wert und nicht alle Browser unterstützen Alternativtext bei Ersetzungen. Wenn der Browser ein Kästchen ohne Gradienten anzeigt, wird das Ersetzen von Elementen unterstützt, aber Gradienten werden nicht als Inhaltsersetzungswert unterstützt. Wenn das Element durch einen gestreiften Gradienten ersetzt wird, unterstützt der Browser beides.

### Ersetzung von Elementen mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements durch ein {{cssxref("image/image-set", "image-set()")}}. Wenn die Anzeige der Benutzer eine normale Auflösung hat, wird das `1x.png` angezeigt, Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild.

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

- Barrierefreiheit Panel in Browsern: [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility-Bereich](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility Tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
