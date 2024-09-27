---
title: content
slug: Web/CSS/content
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`content`** [CSS](/de/docs/Web/CSS) Eigenschaft ersetzt Inhalte durch einen generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements gerendert wird. Für Elemente gibt die `content`-Eigenschaft an, ob das Element normal (`normal` oder `none`) gerendert wird oder durch ein Bild (und den zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randkästen definiert `content` den Inhalt als Bilder, Text, beides oder keines, was bestimmt, ob das Element überhaupt gerendert wird.

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

- Eines von zwei Schlüsselwörtern – `none` oder `normal`
- `<content-replacement>`, wenn ein DOM-Knoten ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Randkästen ersetzt werden. Eine Content-Liste ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>`-Element ist entweder `contents` oder vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler Alternativtextwert eines `<string>` oder `<counter>`, vorangestellt durch einen Schrägstrich (`/`).

Die oben genannten Schlüsselwörter und Datentypen werden unten ausführlicher beschrieben:

- `none`

  - : Bei Anwendung auf ein Pseudo-Element wird das Pseudo-Element nicht generiert.
    Bei Anwendung auf ein Element hat der Wert keine Auswirkung.

- `normal`

  - : Der Standardwert. Berechnet sich zu `none` für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente. Für andere Pseudo-Elemente ist der Inhalt der initiale (oder normale) Inhalt, der für das jeweilige {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erwartet wird. Für reguläre Elemente oder Seitenrandkästen berechnet sich dies zu `contents`.

- `contents`

  - : Fügt den Inhalt des Elements selbst zum generierten Inhaltswert hinzu.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenfolge, die in passenden einfachen oder doppelten Anführungszeichen eingeschlossen ist. Mehrere Zeichenfolgenwerte werden verkettet (es gibt keinen Verknüpfungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein anzuzeigendes Bild darstellt. Dies kann einem {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}} oder {{cssxref("&lt;gradient&gt;")}} Datentyp oder einem Teil der Webseite selbst entsprechen, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`

  - : Der `<counter>`-Wert ist ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), generell eine Zahl, die durch Berechnungen, definiert durch die {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} Eigenschaften, erzeugt wird. Er kann entweder mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers des gegebenen Namens im Bereich des gegebenen Pseudo-Elements. Es wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} formatiert (`decimal` standardmäßig).
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Bereich des gegebenen Pseudo-Elements, von außen nach innen, getrennt durch die angegebene Zeichenfolge. Die Zähler werden in der angegebenen {{cssxref("&lt;list-style-type&gt;")}} angezeigt (`decimal` standardmäßig).

- `<quote>`

  - : Der `<quote>`-Datentyp beinhaltet sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt ein, erhöht (verringert) jedoch die Verschachtelungsebene für Anführungszeichen.

- `<target>`

  - : Der `<target>`-Datentyp beinhaltet drei Ziel-Funktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise aus dem Zielende eines Links erstellen. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>`-Datentyp beinhaltet eine Führungszeichen-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (entspricht `leader(".")`, `leader("_")` und `leader(" ")`), oder eine `<string>` als Parameter. Wenn unterstützt und als Wert für `content` verwendet, wird der bereitgestellte Führungstyp als sich wiederholendes Muster eingefügt, das den Inhalt optisch über eine horizontale Linie verbindet.

- `attr(x)`

  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ursprungs-Elements des Pseudo-Elements ab. Der Wert des Attributs `x` des Elements ist eine unverarbeitete Zeichenkette, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenkette zurückgegeben. Die Groß-/Kleinschreibung des Attributnamens hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Ein Alternativtext kann für ein Bild oder beliebige `<content-list>`-Elemente angegeben werden, indem ein Schrägstrich und dann ein Textstring oder ein Zähler hinzugefügt werden. Der Alternativtext ist für die Sprachausgabe durch Screenreader bestimmt, kann aber auch in einigen Browsern angezeigt werden. Beachten Sie, dass, wenn der Browser keinen Alternativtext unterstützt, die `content`-Deklaration als ungültig betrachtet und ignoriert wird. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen geben den "alt-Text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Von CSS-generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Daher wird er nicht im [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen aus unterstützender Technologie/Browser geben ihn nicht wieder. Falls der Inhalt Informationen vermittelt, die wichtig für das Verständnis der Seite sind, ist es besser, ihn im Hauptdokument einzuschließen.

Wenn eingefügter Inhalt nicht dekorativ ist, überprüfen Sie, dass die Informationen unterstützenden Technologien bereitgestellt werden und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Barrierefreiheitsunterstützung für CSS-generierte Inhalte – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Richtlinie 1.3: Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Nichtbestehen des Erfolgskriteriums 1.3.1: Einfügen von nicht-dekorativem generierten Inhalt](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#elementersetzung_mit_url).

### Anfügen von Zeichenfolgen basierend auf der Klasse eines Elements

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

Beachten Sie, dass der [Typ der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig offene und geschlossene Anführungszeichen vor und nach {{HTMLElement("q")}} Elementen hinzu, sodass die Anführungszeichen in diesem Beispiel auch ohne explizite Einstellung erscheinen. Sie könnten durch Setzen der jeweiligen `content`-Eigenschaftswerte auf `no-open-quote` und `no-close-quote` abgeschaltet werden oder indem man beide auf `none` setzt. Sie können auch abgeschaltet werden, indem die {{cssxref("quotes")}} Eigenschaft auf `none` gesetzt wird.

### Hinzufügen von Text zu Listeneintrag-Zählern

Dieses Beispiel kombiniert einen Zähler, der zwischen zwei `<string>`s eingebettet wird, die allen Listeneinträgen vorangestellt werden, um ein detaillierteres Markierungszeichen für Listeneinträge ({{HTMLElement("li")}}) in ungeordneten Listen ({{HTMLElement("ol")}}) zu erstellen.

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

Der generierte Inhalt des Markers jedes Listeneintrags fügt als Präfix den Text "item " hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, dem ": ", zwei Punkte und ein weiteres Leerzeichen folgen. Die {{cssxref("counters", "counters()")}} Funktion definiert einen numerischen `items`-Zähler, in dem die Zahlen verschachtelter geordneter Listen in den meisten Browsern mit einem Punkt (`.`) getrennt werden.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druck-Stylesheets. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollständig qualifizierten sicheren Link auszuwählen und den Wert des `href`-Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href`-Attributs, dem "URL: ", mit einem Leerzeichen versehen, alles in Klammern vorangestellt wird.

### Einfügen eines Bildes mit Alternativtext

Dieses Beispiel fügt ein Bild vor allen Links ein. Es werden zwei `content`-Werte bereitgestellt. Der spätere `content`-Wert enthält ein Bild mit Alternativtext, den ein Screenreader als Sprache ausgeben kann. Wenn ein Browser keinen Alternativtext unterstützt, wird diese Deklaration als ungültig betrachtet und der vorherige `content`-Wert angezeigt. Dieser Fallback-Inhaltsliste enthält ein Bild und die Nachricht " - alt text is not supported - ".

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Der CSS-Code, um das Bild anzuzeigen und den Alternativtext festzulegen, wird unten gezeigt. Dies stellt auch die Schriftart und Farbe für den Inhalt ein. Dies wird in Browsern, die den Alternativtext _anzeigen_, verwendet, und in Browsern, die ihn nicht unterstützen und den Fallback-`content`-Wert anzeigen.

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
> Wenn die Alternativtextsyntax unterstützt wird, wird der Wert im Barrierefreiheitsbaum des Browsers angezeigt. Siehe Abschnitt [Siehe auch](#siehe_auch) für browserspezifische Barrierefreiheispaneele.

Bei Verwendung eines Screenreaders sollte er das Wort "MOZILLA" sprechen, wenn er das Bild erreicht. Wenn es unterstützt wird (wenn der "alt text is not supported" nicht angezeigt wird), können Sie mit Ihrem Entwicklertools-Auswahlwerkzeug das `::before` Pseudo-Element auswählen und den [zugänglichen Namen](/de/docs/Glossary/accessible_name) im Barrierefreiheitspanel anzeigen.

In Browsern, die die Alternativtextsyntax nicht unterstützen, ist die gesamte Deklaration, die den alt-Text enthält, ungültig. In diesem Fall wird der vorherige `content`-Wert verwendet, der das Bild und den Text "alt text is not supported" anzeigt.

### Elementersetzung mit URL

Dieses Beispiel ersetzt ein reguläres Element! Die Inhalte des Elements werden durch ein SVG mit dem {{cssxref("url_value", "&lt;url&gt;")}} Typ ersetzt.

Pseudo-Elemente werden bei ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden keine passenden `::after` oder `::before` generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after` Deklarationsblock hinzu, der versucht, die `id` als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

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

Beim Erzeugen von Inhalten auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Dies bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht generiert werden.

### Elementersetzung mit `<gradient>`

Dieses Beispiel zeigt, wie der Inhalt eines Elements durch jeden Typ von `<image>`, in diesem Fall einen CSS-Gradienten, ersetzt werden kann. Der Inhalt des Elements wird durch ein {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Mit {{cssxref("@supports")}} bieten wir Unterstützung für Alternativtext und einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} für Browser, die Alt-Text mit Elementinhaltsersetzung unterstützen.

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

Überprüfen Sie das [Browser-Kompatibilitätsdiagramm](#browser-kompatibilität). Alle Browser unterstützen Gradienten und alle Browser unterstützen das Ersetzen von Elementen durch Bilder, aber nicht alle Browser unterstützen Gradienten als `content`-Wert und nicht alle Browser unterstützen Alternativtext bei Ersetzungen. Wenn der Browser ein Feld ohne Farbverlauf anzeigt, wird die Ersetzung von Elementen unterstützt, aber Gradienten werden als Ersatzwert für Inhalte nicht unterstützt. Wenn das Element mit einem gestreiften Farbverlauf ersetzt wird, unterstützt der Browser beide.

### Elementersetzung mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Nutzers eine normale Auflösung hat, wird das `1x.png` angezeigt, Bildschirme mit höherer Auflösung zeigen das `2x.png` Bild an.

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
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

- Browser-Barrierefreiheits-Panels: [Firefox Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane), und [Safari Accessibility tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
