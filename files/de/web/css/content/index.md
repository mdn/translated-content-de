---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`content`** [CSS](/de/docs/Web/CSS)-Eigenschaft ersetzt den Inhalt durch einen generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder eines Pseudo-Elements gerendert wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und den zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder nichts, was bestimmt, ob das Element überhaupt gerendert wird.

Objekte, die mithilfe der `content`-Eigenschaft eingefügt werden, sind **anonyme [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)**.

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

- Eines der beiden Schlüsselwörter — `none` oder `normal`.
- `<content-replacement>` beim Ersetzen eines DOM-Knotens. `<content-replacement>` ist immer ein `<image>`.
- Ein `<content-list>`, wenn Pseudo-Elemente und Randboxen ersetzt werden. Eine `<content-list>` ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist ein Typ von [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert eines `<string>` oder `<counter>` vorangestellt durch einen Schrägstrich (`/`).

Die oben erwähnten Schlüsselwörter und Datentypen werden unten genauer beschrieben:

- `none`

  - : Wenn auf ein Pseudo-Element angewendet, wird das Pseudo-Element nicht generiert.
    Wenn auf ein Element angewendet, hat der Wert keine Wirkung.

- `normal`

  - : Der Standardwert. Der Wert wird für die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente zu `none` berechnet. Für andere Pseudo-Elemente ist der Inhalt der initiale (oder normale) Inhalt, der für diese {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erwartet wird. Für reguläre Elemente oder Seitenrandboxen wird der Inhalt auf die Nachkommen des Elements berechnet.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenkette, die in passende einfache oder doppelte Anführungszeichen eingeschlossen ist. Mehrere Zeichenkettenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, welches ein anzuzeigendes Bild darstellt. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("&lt;gradient&gt;")}}-Datentyp entsprechen oder einem Teil der Webseite selbst, definiert durch die Funktion {{cssxref("element", "element()")}}.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), üblicherweise eine Zahl, die durch Berechnungen definiert wird, die in den Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} festgelegt sind. Er kann entweder mit der {{cssxref("counter", "counter()")}}- oder {{cssxref("counters", "counters()")}}-Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des gegebenen Namens, der im angegebenen Pseudo-Element im Bereich liegt. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}}-Format angezeigt (standardmäßig `decimal`).
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Bereich beim angegebenen Pseudo-Element, von äußerstem bis innerstem Zähler, getrennt durch die angegebene Zeichenkette. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}}-Format dargestellt (standardmäßig `decimal`).

- `<quote>`

  - : Der `<quote>`-Datentyp enthält sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechenden Zeichenkette aus der {{cssxref("quotes")}}-Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt ein, erhöht aber (verringert) die Schachtelungsebene für Anführungszeichen.

- `<target>`

  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen: `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erzeugen, die vom Ziel eines Links erhalten wurden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>`-Datentyp enthält eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (entspricht `leader(".")`, `leader("_")` und `leader(" ")`), oder eine `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Leader-Typ als wiederholtes Muster eingefügt, das visuell Inhalt über eine horizontale Linie verbindet.

- `attr(x)`

  - : Die `attr(x)`-CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributelements `x` ist eine nicht geparste Zeichenkette, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenkette zurückgegeben. Die Groß- und Kleinschreibung des Attributnamenparameters hängt von der Dokumentsprache ab.

- Alternative Texte: `/ <string> | <counter>`
  - : Alternative Texte können für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich und eine Zeichenkette oder ein Zähler angefügt werden. Der alternative Text ist für die Sprachausgabe durch Screenreader vorgesehen, kann aber auch in einigen Browsern angezeigt werden. Wenn der Browser alternative Texte nicht unterstützt, wird die `content`-Deklaration als ungültig betrachtet und ignoriert. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}}-Datentypen geben den "Alt-Text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

CSS-generierter Inhalt wird nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Aufgrund dessen wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) dargestellt, und bestimmte Kombinationen aus unterstützender Technologie und Browser werden ihn nicht ankündigen. Wenn der Inhalt wichtige Informationen enthält, die zum Verständnis der Seite erforderlich sind, sollte er besser im Hauptdokument enthalten sein.

Wenn der eingefügte Inhalt nicht dekorativ ist, überprüfen Sie, ob die Informationen unterstützenden Technologien bereitgestellt werden und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Barrierefreiheit von CSS-generiertem Inhalt – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Erstellen Sie Inhalte, die auf verschiedene Arten präsentiert werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis von Erfolgskriterium 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Fehler von Erfolgskriterium 1.3.1: Einfügen von nicht dekorativem generiertem Inhalt](https://www.w3.org/TR/WCAG20-TECHS/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erstellen generierten Inhalt bei Pseudo-Elementen. Die letzten drei Beispiele zeigen [Beispiele für Elementersetzungen](#elementersetzung_mit_url).

### Anfügen von Zeichenketten basierend auf der Klasse eines Elements

Dieses Beispiel fügt generierten Text nach dem Text von Elementen ein, die einen bestimmten Klassennamen haben. Der Text wird in rot dargestellt.

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

Beachten Sie, dass [die Art der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig öffnende und schließende Anführungszeichen vor und nach {{HTMLElement("q")}}-Elementen ein, somit würden die Anführungszeichen in diesem Beispiel auch erscheinen, ohne dass sie explizit gesetzt werden. Sie hätten durch Festlegen der jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` oder durch Festlegen beider auf `none` ausgeschaltet werden können. Sie können auch ausgeschaltet werden, indem die {{cssxref("quotes")}}-Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listenelementzählmarken

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt wird und allen Listenelementen vorangestellt wird, um eine detailliertere Markierung für Listenelemente ({{HTMLElement("li")}}) innerhalb unsortierter Listen ({{HTMLElement("ol")}}) zu erstellen.

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

Der generierte Inhalt am Marker jedes Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem weiteren Leerzeichen. Die {{cssxref("counters", "counters()")}}-Funktion definiert einen numerischen `items`-Zähler, bei dem die Zahlen verschachtelter geordneter Listen in den meisten Browsern mit einem Punkt (`.`) getrennt sind.

### Zeichenketten mit Attributwerten

Dieses Beispiel ist nützlich für Druckstile. Es verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen, und fügt den Wert des `href`-Attributs nach dem Linktext als den Inhalt des {{cssxref("::after")}}-Pseudo-Elements hinzu.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, dem "URL: ", gefolgt von einem Leerzeichen, alles in Klammern, vorangestellt ist.

### Einfügen eines Bildes mit alternativem Text

Dieses Beispiel fügt ein Bild vor allen Links ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit alternativem Text, der von einem Screenreader als Sprache ausgegeben werden kann. Wenn ein Browser keinen alternativen Text unterstützt, wird diese Deklaration als ungültig betrachtet, wobei der vorherige `content`-Wert angezeigt wird. Diese Fallback-Content-Liste enthält ein Bild und die Nachricht " - alt text is not supported - ".

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Die CSS, um das Bild anzuzeigen und den alternativen Text festzulegen, wird unten gezeigt. Es legt auch die Schriftart und Farbe für den Inhalt fest. Dies wird in Browsern verwendet, die den alternativen Text _anzeigen_ und auch in Browsern, die den alternativen Text nicht unterstützen und den Fallback-`content`-Wert anzeigen.

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
> Wenn die alternative Textsyntax unterstützt wird, wird der Wert im Barrierefreiheitsbaum des Browsers angezeigt. Weitere Informationen finden Sie im Abschnitt [Siehe auch](#siehe_auch) für browserspezifische Barrierefreiheitsoberflächen.

Wenn ein Screenreader verwendet wird, sollte das Wort "MOZILLA" gesprochen werden, wenn es das Bild erreicht. Falls unterstützt (wenn "alt text is not supported" nicht angezeigt wird), können Sie das `::before`-Pseudo-Element mit Ihrem Entwicklertoolsselektor auswählen und den {{Glossary("accessible_name", "barrierefreien Namen")}} im Barrierefreiheitsbereich anzeigen.

In Browsern, die die alternative Textsyntax nicht unterstützen, ist die gesamte Deklaration mit dem Alt-Text ungültig. In diesem Fall wird der vorherige `content`-Wert verwendet, bei dem das Bild und der Text "alt text is not supported" angezeigt werden.

### Elementersetzung mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden durch ein SVG mithilfe des {{cssxref("url_value", "&lt;url&gt;")}}-Typs ersetzt.

Pseudo-Elemente werden nicht auf ersetzte Elemente angewendet. Da dieses Element ersetzt wird, werden alle passenden `::after`- oder `::before` nicht generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after`-Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt einzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Wenn Inhalt auf normale Elemente (anstatt nur auf Pseudo-Elemente) generiert wird, wird das gesamte Element ersetzt. Das bedeutet, dass `::before`- und `::after`-Pseudo-Elemente nicht generiert werden.

### Elementersetzung mit `<gradient>`

Dieses Beispiel zeigt, wie die Inhalte eines Elements mit jedem `<image>`-Typ ersetzt werden können, in diesem Fall mit einem CSS-Gradienten. Die Inhalte des Elements werden mit einem {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Mit {{cssxref("@supports")}} bieten wir Alt-Text-Unterstützung und einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} für Browser, die Alt-Text bei der Ersetzung von Elementinhalten unterstützen.

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

Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität). Alle Browser unterstützen Gradienten, und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle unterstützen Gradienten als `content`-Wert, und nicht alle unterstützen Alt-Text bei Ersetzungen. Wenn der Browser ein Kästchen ohne Gradient anzeigt, wird das Ersetzen von Elementen unterstützt, aber Gradienten werden nicht als Inhalt-Wert unterstützt. Wenn das Element mit einem gestreiften Gradient ersetzt wird, wird beides unterstützt.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn die Anzeige normal aufgelöst ist, wird `1x.png` angezeigt; auf Bildschirmen mit höherer Auflösung wird das Bild `2x.png` angezeigt.

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
- [CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content)-Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul

- Browser-Barrierefreiheitsbereiche: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
