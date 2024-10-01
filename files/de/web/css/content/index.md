---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`content`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ersetzt Inhalte durch einen generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements dargestellt wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randboxen definiert `content` den Inhalt als Bilder, Text, beides oder keines, was bestimmt, ob das Element überhaupt gerendert wird.

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

- Eines von zwei Schlüsselwörtern — `none` oder `normal`
- `<content-replacement>`, wenn ein DOM-Knoten ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Randboxen ersetzt werden. Eine Content-List ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Eintrag ist entweder `contents` oder vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler alternativer Textwert eines `<string>` oder `<counter>`, vorangestellt von einem Schrägstrich (`/`).

Die oben genannten Schlüsselwörter und Datentypen werden im Folgenden detaillierter beschrieben:

- `none`

  - : Wenn auf ein Pseudo-Element angewendet, wird das Pseudo-Element nicht generiert.
    Wenn auf ein Element angewendet, hat der Wert keine Wirkung.

- `normal`

  - : Der Standardwert. Berechnet sich zu `none` für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente. Für andere Pseudo-Elemente wird der Inhalt der anfängliche (oder normale) erwartete Inhalt für diesen {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} sein. Für reguläre Elemente oder Seitenrandboxen berechnet sich dies zu `contents`.

- `contents`

  - : Fügt den Inhalt des Elements selbst dem generierten Inhaltswert hinzu.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenfolge, die in passenden einfachen oder doppelten Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein darzustellendes Bild repräsentiert. Dies kann gleich einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("&lt;gradient&gt;")}} Datentyp sein oder ein Teil der Webseite selbst, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), generell eine Zahl, die durch Berechnungen definiert wird, die von den Eigenschaften {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} festgelegt werden. Er kann mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}}-Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des gegebenen Namens im Scope am gegebenen Pseudo-Element. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) formatiert.
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}}-Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem gegebenen Namen im Scope am gegebenen Pseudo-Element, von außen nach innen, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` standardmäßig) dargestellt.

- `<quote>`

  - : Der `<quote>`-Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenkette aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt ein, erhöht (verringert) jedoch das Verschachtelungsniveau für Anführungszeichen.

- `<target>`

  - : Der `<target>`-Datentyp umfasst drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erzeugen, die vom Ziel eines Links abgerufen werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>`-Datentyp umfasst eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (gleich `leader(".")`, `leader("_")` und `leader(" ")`) oder einen `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der angegebene Leader-Typ als sich wiederholendes Muster eingefügt, das visuell Inhalt über eine horizontale Linie verbindet.

- `attr(x)`

  - : Die `attr(x)`-CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Elements-Attributs `x` ist eine unanalysierte Zeichenfolge, die den Attributnamen repräsentiert. Wenn es kein Attribut `x` gibt, wird eine leere Zeichenfolge zurückgegeben. Die Groß-/Kleinschreibung des Attributnamenparameters hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativtext kann für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich gefolgt von einer Zeichenkette oder einem Zähler angehängt wird. Der Alternativtext ist für die Sprachausgabe durch Bildschirmleseprogramme vorgesehen, kann jedoch auch in einigen Browsern angezeigt werden. Beachten Sie, dass, wenn der Browser keine Alternativtexte unterstützt, die `content`-Deklaration als ungültig betrachtet und ignoriert wird. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen geben den "alt text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

CSS-generierte Inhalte sind nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Aus diesem Grund werden sie nicht im [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen aus Hilfstechnologie und Browser werden es nicht ankündigen. Wenn der Inhalt Informationen vermittelt, die zum Verständnis des Zwecks der Seite entscheidend sind, ist es besser, diesen im Hauptdokument einzuschließen.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen Hilfstechnologien bereitgestellt werden und auch verfügbar sind, wenn CSS ausgeschaltet ist.

- [Barrierefreiheitssupport für CSS-generierte Inhalte – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Inhalte so gestalten, dass sie auf unterschiedliche Weise dargestellt werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis der Erfolgskriterien 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Erfolgskriterium 1.3.1 nicht erfüllt: einfügen von nicht-dekorativen generierten Inhalten](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erstellen generierten Inhalt für Pseudo-Elemente. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#elementersetzung_mit_url).

### Anfügen von Zeichenfolgen basierend auf einer Klassennamen eines Elements

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

Beachten Sie, dass die [Art der erzeugten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig Öffnungs- und Schließungszeichen um {{HTMLElement("q")}}-Elemente hinzu, sodass die Anführungszeichen in diesem Beispiel erscheinen würden, ohne dass sie explizit gesetzt werden. Sie könnten durch Festlegen der entsprechenden `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` ausgeschaltet werden, oder indem beide auf `none` gesetzt werden. Sie können auch durch Setzen der {{cssxref("quotes")}}-Eigenschaft auf `none` deaktiviert werden.

### Hinzufügen von Text zu Zählern von Listenelementen

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingefügt wird, die allen Listenelementen vorangestellt werden, wodurch ein detaillierterer Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}) erstellt wird.

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

Der generierte Inhalt auf dem Marker jedes Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem zusätzlichen Leerzeichen. Die {{cssxref("counters", "counters()")}} Funktion definiert einen numerischen `items` Zähler, in dem die Zahlen von verschachtelten geordneten Listen in den meisten Browsern durch einen Punkt (`.`) getrennt werden.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druckstile. Es verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}}-Pseudo-Elements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, vorangestellt von "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit alternativem Text

Dieses Beispiel fügt vor allen Links ein Bild ein. Zwei `content`-Werte werden bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit alternativem Text, den ein Bildschirmleseprogramm als Sprache ausgeben kann. Sollte ein Browser den alternativem Text nicht unterstützen, wird diese Deklaration als ungültig angesehen und der vorherige `content`-Wert wird angezeigt. Diese Fallback-Inhaltsliste enthält ein Bild und die Meldung " - alt text is not supported - ".

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den Alternativtext festzulegen, wird unten gezeigt.
Dies setzt auch die Schriftart und Farbe für den Inhalt.
Dies wird auf Browsern verwendet, die den Alternativtext _anzeigen_ und in Browsern, die Alternativtexte nicht unterstützen und den Fallback-`content`-Wert anzeigen.

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
> Wenn die Alternativtext-Syntax unterstützt wird, wird der Wert im Barrierefreiheitsbaum des Browsers sichtbar gemacht. Sehen Sie im Abschnitt [Siehe auch](#siehe_auch) nach, um auf browser-spezifische Barrierefreiheitspanels zuzugreifen.

Wenn Sie ein Bildschirmleseprogramm verwenden, sollte es das Wort "MOZILLA" aussprechen, wenn es das Bild erreicht. Falls unterstützt (wenn der "alt text is not supported" nicht angezeigt wird), können Sie das `::before`-Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{Glossary("accessible_name", "zugänglichen Namen")}} im Barrierefreiheitspanel sehen.

In Browsern, die die Alternativtextsyntax nicht unterstützen, ist die gesamte Deklaration, die den Alternativtext enthält, ungültig. In diesem Fall wird der vorherige `content`-Wert verwendet, der das Bild und den Text "alt text is not supported" anzeigt.

### Elementersetzung mit URL

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird durch ein SVG ersetzt, das den {{cssxref("url_value", "&lt;url&gt;")}} Typ verwendet.

Pseudo-Elemente werden bei ersetzten Elementen nicht dargestellt. Da dieses Element ersetzt wird, werden keine übereinstimmenden `::after` oder `::before` generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after`-Deklarationsblock ein, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Beim Erzeugen von Inhalt auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Dies bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht generiert werden.

### Elementersetzung mit `<gradient>`

Dieses Beispiel zeigt, wie der Inhalt eines Elements durch einen beliebigen Typ von `<image>`, in diesem Fall ein CSS-Gradient, ersetzt werden kann. Der Inhalt des Elements wird durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Mit {{cssxref("@supports")}} stellen wir Alternativtextunterstützung und einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} für Browser bereit, die Alternativtext mit Inhaltselementersetzung unterstützen.

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

Überprüfen Sie das [Browser-Kompatibilitätsdiagramm](#browser-kompatibilität). Alle Browser unterstützen Gradienten und alle Browser unterstützen das Ersetzen von Elementen durch Bilder, aber nicht alle Browser unterstützen Gradienten als `content`-Wert und nicht alle Browser unterstützen Alternativtext bei Ersetzungen. Wenn der Browser ein Kästchen ohne Gradient anzeigt, wird das Ersetzen von Elementen unterstützt, aber Gradienten werden nicht als Inhaltsersetzungswert unterstützt. Wenn das Element mit einem gestreiften Gradienten ersetzt wird, unterstützt der Browser beides.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn die Anzeige des Benutzers eine normale Auflösung hat, wird das `1x.png`-Bild angezeigt, Bildschirme mit höherer Auflösung zeigen das `2x.png`-Bild an.

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
- [Ersatz-Elemente](/de/docs/Web/CSS/Replaced_element)
- [Modul für CSS generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content)
- [CSS listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul

- Barrierefreiheitspanels von Browsern: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane) und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
