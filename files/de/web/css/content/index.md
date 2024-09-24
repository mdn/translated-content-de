---
title: Inhalt
slug: Web/CSS/content
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`content`** [CSS](/de/docs/Web/CSS) Eigenschaft ersetzt den Inhalt mit einem generierten Wert. Sie kann verwendet werden, um zu definieren, was innerhalb eines Elements oder Pseudo-Elements gerendert wird. Für Elemente gibt die `content` Eigenschaft an, ob das Element normal (`normal` oder `none`) rendert oder durch ein Bild (und den zugehörigen "alt"-Text) ersetzt wird. Für Pseudo-Elemente und Randfelder definiert `content` den Inhalt als Bilder, Text, beides oder keines, was bestimmt, ob das Element überhaupt gerendert wird.

Objekte, die mit der `content` Eigenschaft eingefügt werden, sind **anonyme [ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)**.

{{EmbedInteractiveExample("pages/tabbed/content.html", "tabbed-shorter")}}

## Syntax

```css
/* Schlüsselwörter, die nicht mit anderen Werten kombiniert werden können */
content: normal;
content: none;

/* <content-replacement>: <image> Werte */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* gesprochene Ausgabe: Alternativtext nach einem "/" */
content: url("../img/test.png") / "This is the alt text";

/* <string> Wert */
content: "unparsed text";

/* <counter> Werte, optional mit <list-style-type> */
content: counter(chapter_counter);
content: counter(chapter_counter, upper-roman);
content: counters(section_counter, ".");
content: counters(section_counter, ".", decimal-leading-zero);

/* attr() Wert, der mit dem HTML-Attributwert verknüpft ist */
content: attr(href);

/* <quote> Werte */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* <content-list>: eine Liste von Inhaltswerten. 
Mehrere Werte können gleichzeitig verwendet werden */
content: "prefix" url(http://www.example.com/test.png);
content: "prefix" url("/img/test.png") "suffix" / "Alt text";
content: open-quote counter(chapter_counter);

/* Globale Werte */
content: inherit;
content: initial;
content: revert;
content: revert-layer;
content: unset;
```

### Werte

Der Wert kann sein:

- Eines von zwei Schlüsselwörtern — `none` oder `normal`
- `<content-replacement>`, wenn ein DOM-Element ersetzt wird. `<content-replacement>` ist immer ein `<image>`.
- Eine `<content-list>`, wenn Pseudo-Elemente und Margins ersetzt werden. Eine Content-Liste ist eine Liste von einem oder mehreren anonymen Inline-Boxen, die in der angegebenen Reihenfolge erscheinen. Jedes `<content-list>` Element ist entweder `contents` oder vom Typ [`<string>`](#string), [`<image>`](#image), [`<counter>`](#counter), [`<quote>`](#quote), [`<target>`](#target) oder [`<leader()>`](#leader).
- Ein optionaler Alternativtextwert eines `<string>` oder `<counter>`, der durch einen Schrägstrich (`/`) vorangestellt ist.

Die oben genannten Schlüsselwörter und Datentypen werden unten ausführlicher beschrieben:

- `none`

  - : Bei Anwendung auf ein Pseudo-Element wird das Pseudo-Element nicht generiert.
    Bei Anwendung auf ein Element hat der Wert keine Wirkung.

- `normal`

  - : Der Standardwert. Wird für die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente zu `none` berechnet. Für andere Pseudo-Elemente ist der Inhalt der initiale (oder normale) Inhalt, der für dieses {{cssxref("::marker")}}, {{cssxref("::placeholder")}} oder {{cssxref("::file-selector-button")}} erwartet wird. Für reguläre Elemente oder Seitenrandboxen wird dies zu `contents` berechnet.

- `contents`

  - : Fügt den Inhalt des Elements selbst zum generierten Inhaltswert hinzu.

- {{cssxref("&lt;string&gt;")}}

  - : Eine Zeichenfolge, eingeschlossen in passenden einfachen oder doppelten Anführungszeichen. Mehrere Zeichenfolgen werden miteinander verkettet (es gibt keinen Verkettungsoperator in CSS).

- {{cssxref("&lt;image&gt;")}}

  - : Ein {{cssxref("&lt;image&gt;")}}, das ein anzuzeigendes Bild darstellt. Dies kann eine {{cssxref("url_value", "&lt;url&gt;")}}, {{cssxref("image/image-set", "image-set()")}}, oder {{cssxref("&lt;gradient&gt;")}} Datentyp sein oder ein Teil der Webseite selbst, definiert durch die {{cssxref("element", "element()")}} Funktion.

- `<counter>`

  - : Der `<counter>` Wert ist ein [CSS Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), allgemein eine Zahl, die durch Berechnungen definiert durch die {{cssxref("&lt;counter-reset&gt;")}} und {{cssxref("&lt;counter-increment&gt;")}} Eigenschaften erzeugt wird. Sie kann entweder mit der {{cssxref("counter", "counter()")}} oder {{cssxref("counters", "counters()")}} Funktion angezeigt werden.
    - {{cssxref("counter", "counter()")}}
      - : Die {{cssxref("counter", "counter()")}} Funktion hat zwei Formen: 'counter(_name_)' oder 'counter(_name_, style)'. Der generierte Text ist der Wert des innersten Zählers mit dem gegebenen Namen im Bereich des gegebenen Pseudo-Elements. Er wird im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` ist Standard) formatiert.
    - {{cssxref("counters", "counters()")}}
      - : Die {{cssxref("counters", "counters()")}} Funktion hat ebenfalls zwei Formen: 'counters(_name_, _string_)' oder 'counters(_name_, _string_, _style_)'. Der generierte Text ist der Wert aller Zähler mit dem angegebenen Namen im Bereich des gegebenen Pseudo-Elements, von außen nach innen, getrennt durch die angegebene Zeichenfolge. Die Zähler werden im angegebenen {{cssxref("&lt;list-style-type&gt;")}} (`decimal` ist Standard) gerendert.

- `<quote>`

  - : Der `<quote>` Datentyp umfasst sprach- und positionsabhängige Schlüsselwörter:
    - `open-quote` und `close-quote`
      - : Diese Werte werden durch die entsprechende Zeichenfolge aus der {{cssxref("quotes")}} Eigenschaft ersetzt.
    - `no-open-quote` und `no-close-quote`
      - : Fügt keinen Inhalt hinzu, erhöht (verringert) aber die Verschachtelungsebene für Zitate.

- `<target>`

  - : Der `<target>` Datentyp umfasst drei Zielfunktionen, `<target-counter()>`, `<target-counters()>` und `<target-text()>`, die Querverweise erstellen, die vom Ziel eines Links erhalten werden. Siehe [Formale Syntax](#formale_syntax).

- `<leader()>`

  - : Der `<leader()>` Datentyp beinhaltet eine Leader-Funktion: `leader( <leader-type> )`. Diese Funktion akzeptiert die Schlüsselwortwerte `dotted`, `solid` oder `space` (entspricht `leader(".")`, `leader("_")` und `leader(" ")`, jeweils) oder eine `<string>` als Parameter. Wenn es unterstützt und als Wert für `content` verwendet wird, wird der angegebene Führungs-Typ als wiederholendes Muster eingefügt, das den Inhalt visuell über eine horizontale Linie verbindet.

- `attr(x)`

  - : Die `attr(x)` CSS-Funktion ruft den Wert eines Attributs des ausgewählten Elements oder des Ausgangselements des Pseudo-Elements ab. Der Wert des Attributs des Elements `x` ist eine nicht analysierte Zeichenfolge, die den Attributnamen darstellt. Wenn kein Attribut `x` vorhanden ist, wird eine leere Zeichenfolge zurückgegeben. Die Groß- und Kleinschreibung des Attributnamenparameters hängt von der Dokumentensprache ab.

- Alternativtext: `/ <string> | <counter>`
  - : Alternativtext kann für ein Bild oder jedes `<content-list>` Element durch das Hinzufügen eines Schrägstrichs und dann einer Zeichenfolge oder eines Zählers angegeben werden. Der Alternativtext ist für die Sprachausgabe durch Bildschirmleser gedacht, kann jedoch auch in einigen Browsern angezeigt werden. Beachten Sie, dass, wenn der Browser keinen Alternativtext unterstützt, die `content` Deklaration als ungültig gilt und ignoriert wird. Die {{cssxref("string", "/ &lt;string>")}} oder {{cssxref("counter", "/ &lt;counter>")}} Datentypen geben den "alt text" für das Element an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

CSS-generierter Inhalt ist nicht im [DOM](/de/docs/Web/API/Document_Object_Model/Introduction) enthalten. Aus diesem Grund wird er nicht im [Barrierefreiheit-Baum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) dargestellt und bestimmte Kombinationen von Assistenztechnologie/Browsern geben ihn nicht wieder. Wenn der Inhalt Informationen vermittelt, die wichtig zum Verständnis des Zwecks der Seite sind, sollte er besser im Hauptdokument enthalten sein.

Wenn eingefügter Inhalt nicht dekorativ ist, stellen Sie sicher, dass die Informationen den Assistenztechnologien bereitgestellt werden und auch verfügbar sind, wenn CSS deaktiviert ist.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/) (2015)
- [WCAG, Leitfaden 1.3: Erstellen Sie Inhalte, die auf verschiedene Arten präsentiert werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Failure of Success Criterion 1.3.1: inserting non-decorative generated content](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F87) Techniken für WCAG 2.0

## Beispiele

Die ersten fünf Beispiele erzeugen generierten Inhalt auf Pseudo-Elementen. Die letzten drei sind [Beispiele für das Ersetzen von Elementen](#ersetzen_von_elementen_mit_url).

### Hinzufügen von Zeichenfolgen basierend auf der Klasse eines Elements

Dieses Beispiel fügt nach dem Text von Elementen, die einen bestimmten Klassennamen haben, generierten Text ein. Der Text wird rot gefärbt.

#### HTML

```html
<h2>Taschenbuch-Bestseller</h2>
<ol>
  <li>Politthriller</li>
  <li class="new-entry">Halloween-Geschichten</li>
  <li>Meine Biografie</li>
  <li class="new-entry">Vampirromantik</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " New!"; /* Der führende Platz schafft Abstand
                       zwischen dem Inhalt des DOM-Knotens und dem hinzugefügten
                       generierten Inhalt. */
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
  Laut Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
    Ich hatte das Glück, das Web zur Zeit zu erfinden, als das Internet bereits
    existierte - und das seit anderthalb Jahrzehnten.
  </q>
  Wir müssen verstehen, dass es nichts grundsätzlich Schlechtes daran gibt, auf
  den Beiträgen anderer aufzubauen.
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

Beachten Sie, dass die [Art der generierten Anführungszeichen](/de/docs/Web/CSS/quotes#auto_quotes) auf der Sprache basiert. Browser fügen standardmäßig Vor- und Nach-Zitate zu {{HTMLElement("q")}}-Elementen hinzu, sodass die Anführungszeichen in diesem Beispiel erscheinen würden, ohne dass sie explizit festgelegt sind. Sie könnten ausgeschaltet werden, indem die jeweiligen `content` Eigenschaftswerte auf `no-open-quote` und `no-close-quote` gesetzt werden oder indem sie beide auf `none` gesetzt werden. Sie können auch durch Setzen der {{cssxref("quotes")}} Eigenschaft auf `none` ausgeschaltet werden.

### Hinzufügen von Text zu Listenelement-Zählern

Dieses Beispiel kombiniert einen Zähler, eingeklemmt zwischen zwei `<string>`s, angehängt an alle Listenelemente, wodurch ein detaillierterer Marker für Listenelemente ({{HTMLElement("li")}}) innerhalb ungeordneter Listen ({{HTMLElement("ol")}}) entsteht.

#### HTML

```html
<ol>
  <li>Hunde</li>
  <li>Katzen</li>
  <li>
    Vögel
    <ol>
      <li>Eulen</li>
      <li>Enten</li>
      <li>Flugunfähig</li>
    </ol>
  <li>Beuteltiere</li>
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

Der generierte Inhalt auf jedem Markierungselement des Listenelements fügt den Text "item " als Präfix hinzu, einschließlich eines Leerzeichens, um das Präfix vom Zähler zu trennen, gefolgt von ": ", einem Doppelpunkt und einem weiteren Leerzeichen. Die {{cssxref("counters", "counters()")}} Funktion definiert einen numerischen `items` Zähler, in dem die Nummern der verschachtelten geordneten Listen in den meisten Browsern mit einem Punkt (`.`) getrennt werden.

### Zeichenfolgen mit Attributwerten

Dieses Beispiel ist nützlich für Druckstile. Es verwendet einen [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), um jeden vollqualifizierten sicheren Link auszuwählen und den Wert des `href` Attributs nach dem Linktext als Inhalt des {{cssxref("::after")}} Pseudo-Elements hinzuzufügen.

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

Der generierte Inhalt ist der Wert des `href` Attributs, eingeleitet von "URL: ", mit einem Leerzeichen, alles in Klammern.

### Hinzufügen eines Bildes mit Alternativtext

Dieses Beispiel fügt vor allen Links ein Bild ein. Es werden zwei `content` Werte angegeben. Der spätere `content` Wert enthält ein Bild mit Alternativtext, das ein Bildschirmleser als Sprache ausgeben kann. Wenn ein Browser keinen Alternativtext unterstützt, wird diese Deklaration als ungültig angesehen und der vorherige `content` Wert angezeigt. Diese Rückfalle-Content-Liste enthält ein Bild und die Nachricht " - alt text is not supported - ".

#### HTML

```html
<a href="https://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

Das folgende CSS zeigt das Bild und legt den Alternativtext fest.
Es legt auch die Schriftart und die Farbe für den Inhalt fest.
Dies wird in Browsern verwendet, die den Alternativtext _anzeigen_, und in Browsern, die keinen Alternativtext unterstützen und den Rückfallwert `content` anzeigen.

```css
a::before {
  /* Rückfallinhalt */
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico")
    " - alt text is not supported - ";
  /* Inhalt mit Alternativtext */
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
> Wenn die Alternativtextsyntax unterstützt wird, wird der Wert im Barrierefreiheit-Baum des Browsers angezeigt. Siehe den [siehe auch](#siehe_auch) Abschnitt für browser-spezifische Barrierefreiheitspanels.

Wenn Sie einen Bildschirmleser verwenden, sollte er beim Erreichen des Bildes das Wort "MOZILLA" aussprechen. Wenn unterstützt (wenn "alt text is not supported" nicht angezeigt wird), können Sie das `::before` Pseudo-Element mit Ihrem Entwicklertools-Auswahlwerkzeug auswählen und den {{glossary("barrierefreien Namen")}} im Barrierefreiheitspanel anzeigen.

In Browsern, die die Alternativtextsyntax nicht unterstützen, ist die gesamte Deklaration, die den Alternativtext enthält, ungültig. In diesem Fall wird der vorherige `content` Wert verwendet, der das Bild und den Text "alt text is not supported" anzeigt.

### Ersetzen von Elementen mit URL

Dieses Beispiel ersetzt ein reguläres Element! Der Inhalt des Elements wird durch eine SVG mit dem {{cssxref("url_value", "&lt;url&gt;")}} Typ ersetzt.

Pseudo-Elemente werden auf ersetzten Elementen nicht gerendert. Da dieses Element ersetzt wird, werden alle passenden `::after` oder `::before` nicht generiert oder angewendet. Um dies zu demonstrieren, fügen wir einen `::after` Deklarationsblock hinzu, der versucht, die ID als generierten Inhalt hinzuzufügen. Dieses Pseudo-Element wird nicht generiert, da das Element ersetzt wird.

#### HTML

```html
<div id="replaced">Dieser Inhalt wird ersetzt!</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

/* wird nicht angezeigt, wenn das Ersetzen von Elementen unterstützt wird */
div::after {
  content: " (" attr(id) ")";
}
```

#### Ergebnis

{{EmbedLiveSample('Element_replacement_with_url', '100%', 400)}}

Beim Generieren von Inhalten auf regulären Elementen (anstatt nur auf Pseudo-Elementen) wird das gesamte Element ersetzt. Das bedeutet, dass `::before` und `::after` Pseudo-Elemente nicht generiert werden.

### Ersetzen von Elementen mit `<gradient>`

Dieses Beispiel zeigt, wie der Inhalt eines Elements durch jeden Typ von `<image>` ersetzt werden kann, in diesem Fall einen CSS-Verlauf. Der Inhalt des Elements wird durch einen {{cssxref("gradient/linear-gradient", "linear-gradient()")}} ersetzt. Mit {{cssxref("@supports")}}, bieten wir Unterstützung für Alt-Text und einen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} für Browser, die Alt-Text mit Inhaltselementersetzung unterstützen.

#### HTML

```html
<div id="replaced">Ich verschwinde</div>
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

Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität). Alle Browser unterstützen Verläufe und alle Browser unterstützen das Ersetzen von Elementen mit Bildern, aber nicht alle Browser unterstützen Verläufe als `content` Wert und nicht alle Browser unterstützen Alt-Text auf Ersatzinhalten. Wenn der Browser ein Kästchen ohne Verlauf anzeigt, wird das Ersetzen von Elementen unterstützt, jedoch Verläufe nicht als Inhaltsersatzwert. Wenn das Element mit einem gestreiften Verlauf ersetzt wird, unterstützt der Browser beides.

### Ersetzen von Elementen mit `image-set()`

Dieses Beispiel ersetzt den Inhalt eines Elements mit einem {{cssxref("image/image-set", "image-set()")}}. Wenn das Display des Benutzers eine normale Auflösung hat, wird das `1x.png` Bild angezeigt, bei Bildschirmen mit höherer Auflösung wird das `2x.png` Bild angezeigt.

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

- Barrierefreiheitspanels der Browser: [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/), [Chrome Accessibility Pane](https://developer.chrome.com/docs/devtools/accessibility/reference#pane) und [Safari Accessibility Tree](https://webflow.com/glossary/accessibility-tree#:~:text=To%20view%20a%20website%E2%80%99s%20accessibility%20tree%20in%20Safari)
