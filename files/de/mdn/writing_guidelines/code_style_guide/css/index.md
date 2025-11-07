---
title: Richtlinien zum Schreiben von CSS-Codebeispielen
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die folgenden Richtlinien behandeln das Schreiben von CSS-Beispielcode für MDN Web Docs.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Format wählen

Meinungen zur richtigen Einrückung, Leerzeichen und Zeilenlängen sind immer umstritten gewesen. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um Themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie sich in das Schreiben großer CSS-Abschnitte stürzen, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche unterschiedlichen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden, und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie feststellen, dass Sie ständig Styles schreiben und sie dann ein paar Regeln weiter wieder aufheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie moderne CSS-Funktionen, wenn sie unterstützt werden

Sie können neue Funktionen verwenden, sobald sie von jedem großen Browser — Chrome, Edge, Firefox und Safari — unterstützt werden (auch bekannt als {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für die CSS-Funktion, die auf der Seite dokumentiert wird (welche stattdessen durch die [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) bestimmt wird). Zum Beispiel können Sie [nicht standardisierte oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen dokumentieren und vollständige Beispiele schreiben, die ihr Verhalten demonstrieren, aber Sie sollten davon absehen, diese Funktionen in den Demos für andere nicht verwandte Funktionen wie eine Web-API zu verwenden.

### Folgen Sie allgemeinen Best Practices

Es gibt einige allgemein anerkannte Prinzipien, die wir hier nicht ausführlich darlegen müssen:

- Stellen Sie sicher, dass Ihr Code keine Syntaxfehler enthält, die dazu führen können, dass die [Eigenschaft oder die Deklaration ignoriert wird](/de/docs/Web/CSS/Guides/Syntax/Error_handling). Standard-Syntax, die noch nicht implementiert wurde, ist akzeptabel, wenn sie zu unserer [allgemeinen Regel über moderne CSS-Funktionen](#verwenden_sie_moderne_css-funktionen,_wenn_sie_unterstützt_werden) passt.
- Verwenden Sie keine [nicht standardisierten, veralteten oder überholten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen. Diese Richtlinie erstreckt sich auf {{Glossary("Vendor_Prefix#css_prefixes", "präfixierte Funktionen")}}: Verwenden Sie die präfixierte Alternative _nur dann_, wenn die Standardfunktion nicht verfügbar ist (siehe unsere [allgemeine Regel über moderne CSS-Funktionen](#verwenden_sie_moderne_css-funktionen,_wenn_sie_unterstützt_werden)). Wenn der Leser eine breitere Kompatibilität benötigt, kann er entweder das präfixierte Fallback selbst hinzufügen oder einen CSS-Postprozessor verwenden.
- Vermeiden Sie redundanten oder nicht funktionierenden Code, der ein häufiges Anzeichen für Bugs oder Überbleibsel von Refaktorisierungen ist. Dazu gehören wiederholte Eigenschaften in einer Deklaration, leere Deklarationen, leere Kommentare oder Selektoren, die keine Elemente treffen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie in den Beispielcodes keine Präprozessor-Syntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/). Auf MDN Web Docs dokumentieren wir die native CSS-Sprache. Die Verwendung von Präprozessoren würde die Barriere zum Verständnis der Beispiele erhöhen und potenziell Leser verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

Im selben Sinne wie die vorherige Richtlinie sollten Sie keine Beispielcodes auf MDN Web Docs mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Selbst wenn sie gültige CSS-Syntax sind, können die Namenskonventionen für Personen verwirrend sein, die mit diesen Methodologien nicht vertraut sind.

### Verwenden Sie keine Resets

Um maximale Kontrolle über CSS auf verschiedenen Plattformen zu haben, haben viele Menschen früher CSS-Resets verwendet, um alle Styles zu entfernen und anschließend alles neu aufzubauen. Das hat sicherlich seine Vorzüge, aber besonders in der modernen Welt können CSS-Resets überflüssig sein, was zu viel zusätzlicher Zeit führt, die für das Neuimplementieren von Dingen aufgebracht wird, die von Anfang an nicht vollkommen kaputt waren, wie z.B. Standartränder und Listenstile.

### Formale Syntax und Pseudocode

Formale Syntax ist ein integraler Bestandteil der CSS-Dokumentation von MDN (als Beispiel, siehe den Abschnitt [Formale Syntax](/de/docs/Web/CSS/Reference/Properties/background-image#formal_syntax) auf der Seite zur Eigenschaft `background-image`). Da viele Entwickler mit Syntax in diesem Format vertraut sind, ist es akzeptabel, Pseudocode in einer formalsyntaxähnlichen Art in Beschreibungen und Beispielen zu schreiben. Jedoch sollte jeder Code, der nicht syntaktisch korrekt geformtes CSS ist, nicht als CSS markiert werden. Syntaxfehler in `css` Codeblöcken führen dazu, dass der Code von statischen Prüfern nicht geparst werden kann, Leser verwirren, die gültigen CSS-Code erwarten, und sogar zu unsinnigem Syntax-Highlighting führen können. Markieren Sie Ihren Codeblock entweder als `plain`, oder verwenden Sie das `CSSSyntaxRaw` Makro, um die vollständige formale Syntax zu rendern.

Schreiben Sie keine Beschreibungen wie diese (das ist ohnehin keine echte formale Syntax; es ist nur Pseudo-CSS mit einigen Platzhaltern):

````md example-bad
The `border` property has the following general form:

```css
border: <border-width> <border-style> <border-color>;
```
````

Stattdessen verwenden Sie `plain`:

````md example-good
The `border` property has the following general form:

```plain
border: <border-width> <border-style> <border-color>;
```
````

Oder, wenn Sie es für angemessen halten, schreiben Sie die tatsächliche formale Syntax mit dem `CSSSyntaxRaw` Makro:

```md example-good
The `border` property is specified as a line width, a line style, and a color, in any order:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

Darüber hinaus ist ein einzelner Wert kein syntaktisch gut geformtes CSS. CSS-Code erfordert mindestens eine Eigenschaft und ihren Wert. Wenn Sie die `rgb()` Funktion dokumentieren, schreiben Sie dies:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

Verwenden Sie nicht diesen Stil:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

Beachten Sie, dass diese Regel nicht für den ersten Codeblock im Abschnitt "Syntax" gilt, der stattdessen durch [Syntax-Abschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax) spezifiziert wird und erfordert, dass Funktionen ohne den Eigenschaftsnamen geschrieben werden.

## Animationen

### Keyframe-Selektoren

Bei der Angabe von Keyframes können die `0%` und `100%` Selektoren auch als `from` und `to` geschrieben werden. Wenn eine `@keyframes`-Regel _nur diese beiden Selektoren_ enthält, verwenden Sie `from` und `to` anstelle von `0%` und `100%`. Das macht Ihren Code semantischer.

Vermeiden Sie also dies:

```css example-bad
@keyframes example {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

Verwenden Sie stattdessen `from` und `to`:

```css example-good
@keyframes example {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

Andererseits, wenn Ihre `@keyframes` Regel mehr als nur die Start- und Endframes enthält, verwenden Sie die `0%` und `100%` Selektoren für Einheitlichkeit.

```css example-good
@keyframes example {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
```

## Kaskade, Eigenschaften und Selektoren

### Kontrolle der Spezifität

Vermeiden Sie nach Möglichkeit Überraschungen bei der Erhöhung oder Verringerung der Spezifität, wie z.B. das übermäßige Verwenden der [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklasse oder das Duplizieren von Selektoren. Überlegen Sie stattdessen folgende Techniken, um die Spezifität zu verwalten:

- Ändern der Reihenfolge der Deklarationen, um die Kaskade zu nutzen
- Neuanordnung von Eigenschaften in jeder Deklaration, sodass sie sich nicht gegenseitig überschreiben
- Verwendung von ID-Selektoren, in Fällen, in denen das HTML-`id` selbst gerechtfertigt ist

### !important

`!important` ist das letzte Mittel, das in der Regel nur verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis und Sie sollten es so weit wie möglich vermeiden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Reihenfolge

Generell sollte bei zwei Deklarationen, die auf dasselbe Element/dieselben Elemente abzielen, die mit höherer Spezifität später im Stylesheet kommen.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Innerhalb einer Deklaration sollten verwandte Eigenschaften (wie z.B. für Größenanpassung, Positionierung und Farbe) zusammen platziert werden. Benutzerdefinierte Eigenschaften sollten oben im Deklarationsblock deklariert werden, damit alle verfügbaren benutzerdefinierten Eigenschaften schnell identifiziert werden können.

### Leere Zeilen

Leere Zeilen zwischen Deklarationsblöcken werden empfohlen. Sie können sie entfernen, wenn aufeinanderfolgende Deklarationen hochgradig verwandt sind, wie z.B. Variationen derselben Dienstprogrammkategorie.

Leere Zeilen zwischen Eigenschaften sollten sparsam verwendet werden. Fügen Sie sie nur hinzu, wenn jede Gruppe von Eigenschaften einen klaren semantischen Block bildet.

### Kurzschreibweise von Eigenschaften

- Wenn _jede_ Bestandteil-Eigenschaft einer Kurzschreibweise einen nicht standardmäßigen Wert zugewiesen hat, verwenden Sie stattdessen die Kurzschreibweise, um den Code kürzer und besser lesbar zu machen.

  Ersetzen Sie diese durch Langform-Eigenschaften:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  durch ihre entsprechende Kurzform:

  ```css example-good
  margin: 1em 2em;
  ```

- Wenn nur _einige_ Bestandteil-Eigenschaften einer Kurzschreibweise einen nicht standardmäßigen Wert zugewiesen haben, ist die Verwendung der Kurzschreibweise optional. Beide sind akzeptabel:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Verwenden Sie die kürzeste verfügbare Kurzform-Syntax. Schreiben Sie dies:

  ```css example-good
  margin: 1em;
  ```

  Vermeiden Sie diese:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Schreiben Sie Kurzschreibweise-Eigenschaften in der {{Glossary("Canonical_order", "kanonischen Reihenfolge")}}. Schreiben Sie dies:

  ```css example-good
  /* width style color */
  border: 1px solid red;
  ```

  Schreiben Sie nicht dies:

  ```css example-bad
  border: solid red 1px;
  ```

- Für jede Kurzform verwenden Sie entweder diese oder ihre Bestandteile in Langform, und niemals eine Mischung aus beidem, da das Überschreibungsverhältnis komplex und fehleranfällig ist. Vermeiden Sie dies:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */

  border-width: 1px;
  border-bottom-width: 5px; /* Overrides one border's width *only* */
  ```

### Verwenden Sie Klassenselektoren

Generell bevorzugen Sie [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) (und verwenden Sie `class` anstelle von `id` in Ihrem HTML). Sie können zusammengesetzt werden: mehrere Elemente können dieselbe Klasse verwenden, und dieselbe Klasse kann für mehrere Elemente verwendet werden.

```css example-good
.footnote {
  /* ... */
}
```

```css example-bad
#footnote {
  /* ... */
}
```

Verwenden Sie Klassen für die Gestaltung, und reservieren Sie IDs für Zwecke außerhalb von CSS, wie z.B. für die Verwendung in JavaScript oder für Verlinkungen zu eindeutigen Seitenankern (`<a href="#section1">`). In dem Fall, dass die Verwendung von ID gerechtfertigt ist, können Sie es als Selektor verwenden, um ggf. [die Spezifität zu kontrollieren](#kontrolle_der_spezifität).

### Alte Pseudo-Element-Selektoren

Die `::before`, `::after`, `::first-letter` und `::first-line` [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) können auch mit einem einzelnen Doppelpunkt geschrieben werden (wie `:before`). Vermeiden Sie die einzelner-Doppelpunkt-Syntax, da sie nicht empfohlen wird und von Lesern möglicherweise als [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (`:hover`) missverstanden werden könnte.

### Komplexe Selektorenlisten

Die `:is()`, `:where()`, und `:not()` Pseudoklassen akzeptieren [komplexe Selektorenlisten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector). Verwenden Sie sie, um Ihren Selektor zu verkürzen.

Schreiben Sie dies:

```css example-good
input:not(:checked, :disabled) {
  /* ... */
}
```

Schreiben Sie nicht dies:

```css example-bad
input:not(:checked):not(:disabled) {
  /* ... */
}
```

## Groß- und Kleinschreibung

Standardmäßig sollten alle Bezeichner kleingeschrieben sein. Dies gilt für Selektoren, Funktionen und Schlüsselwörter. Benutzerdefinierte Bezeichner sollten das {{Glossary("Kebab_case", "Kebab-Case")}} verwenden, wie `--custom-property` oder `my-animation`. Siehe den [HTML-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn) für Konventionen zur Groß- und Kleinschreibung von HTML-IDs und Klassen, die als CSS-Selektoren referenziert werden.

Ausnahmen sind Schlüsselwortwerte, die in SVG definiert sind und aus historischen Gründen im {{Glossary("Camel_case", "CamelCase")}} geschrieben sind und so zur Verbesserung der Lesbarkeit geschrieben werden sollten. Diese Schlüsselwörter umfassen: [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword), {{cssxref("text-rendering")}}-Werte, {{cssxref("shape-rendering")}}-Werte, {{cssxref("pointer-events")}}-Werte und {{cssxref("color-interpolation-filters")}}-Werte.

## Farben

### Wahl einer Notation

Im Allgemeinen, wenn die spezifische Farbpalette keine Rolle spielt, verwenden Sie gängige benannte Farben als Standard. Zum Beispiel, verwenden Sie `black` anstelle von `rgb(0 0 0)` oder `#000000`, und `green` anstelle von `chartreuse`.

Wenn eine spezifische Farbe benötigt wird, verwenden Sie standardmäßig die `rgb()`-Notation. `hsl()` und andere Funktionen sollten nur dann verwendet werden, wenn die jeweilige Darstellung eine Bedeutung hat (zum Beispiel ein Farbkreis oder ein Verlauf). Die hexadezimale Notation ist kürzer, aber möglicherweise weniger lesbar; sie ist austauschbar mit `rgb()`, je nachdem, was für Sie bequemer ist.

Welche Farb-Funktion auch immer Sie verwenden, verwenden Sie immer das moderne Syntax (`rgb(31 41 59 / 0.26)`), nicht die veraltete, durch Kommas getrennte. Verwenden Sie immer die Funktion ohne das `a`-Suffix (`rgb` anstelle von `rgba`), da es kürzer ist und keinen Namenswechsel erfordert, wenn Sie später entscheiden, den Alpha-Kanal hinzuzufügen oder zu entfernen.

Bei Verwendung der hexadezimalen Notation, verwenden Sie immer die sechs (oder acht) stellige Version, um die kognitive Belastung zu vermeiden: `#aabbcc` anstelle von `#abc`.

### Farbparameter

Aus Gründen der Konsistenz sollten alle Parameter standardmäßig Zahlen anstelle von Prozentwerten oder Gradzahlen verwenden. Dies gilt auch für den Alpha-Kanal. Wenn jedoch eine bestimmte Darstellung sinnvoll ist (zum Beispiel in Animationen, Verläufen oder Berechnungen), verwenden Sie den geeigneten Typ im Kontext.

Wenn der Alpha-Kanal `1` ist, lassen Sie ihn weg. Schreiben Sie `rgb(31 41 59)` anstelle von `rgb(31 41 59 / 1)`.

### Farben auswählen

Zusätzlich zur Empfehlung, gängige benannte Farben zu verwenden, sollte Ihre Farbpalette unsere [Richtlinien zur Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) erfüllen. Insbesondere sollten die Farben unterscheidbare Elemente (wie eine "rote Box" und eine "blaue Box") für Menschen mit Farbsehschwäche sicherstellen. Streben Sie ein Kontrastverhältnis von mindestens 4,5:1 an [Kontrastverhältnis](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (WCAG AA) zwischen Text und Hintergrund.

## Kommentare

Verwenden Sie CSS-Kommentarsyntax, um Code zu kommentieren, der nicht selbsterklärend ist. Beachten Sie auch, dass Sie einen Abstand zwischen die Sternchen und den Kommentar einfügen sollten.

```css example-good
/* This is a CSS-style comment */
```

Stellen Sie Ihre Kommentare auf separate Zeilen, die dem Code vorausgehen, auf den sie sich beziehen, so:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## Schriftarten

### Schriftfamilien angeben

Bei der Angabe einer Schriftfamilie fügen Sie immer einen Namen für eine [generische Schriftfamilie](/de/docs/Web/CSS/Reference/Properties/font-family#generic-name) als letztes Fallback hinzu. Dies stellt sicher, dass, wenn die angegebene Schrift nicht verfügbar ist, der Browser eine geeignetere Ersatzschrift anzeigt. [Websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) sind von dieser Regel ausgenommen.

```css example-bad
body {
  font-family: "Helvetica";
}
```

```css example-good
body {
  /* The "sans-serif" family is not needed because Arial is a web-safe font */
  font-family: "Helvetica", "Arial";
}

math {
  font-family: "Latin Modern Math", "STIX Two Math", math;
}
```

### Schriftgewichte angeben

Bevorzugen Sie Schlüsselwertangaben wie `normal` und `bold`, und relative Gewichte wie `bolder` und `lighter`. Verwenden Sie nur Zahlenwerte, wo das spezifische Gewicht erwünscht ist. Sie sollten immer `400` durch `normal` und `700` durch `bold` ersetzen, außer beim Erklären von Bereichen mit variablen Schriften oder zur Konsistenz mit anderen ähnlichen Deklarationen.

## Längen

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität über die größtmögliche Bandbreite an Geräten sollten standardmäßig relative Einheiten wie `em`, `rem`, Prozentsätze und Viewport-Einheiten (wenn Sie möchten, dass sie abhängig von der Breite des Viewports variieren) für alle Längen verwendet werden. Lesen Sie dazu mehr in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units).

Schreiben Sie dies:

```css example-good
margin: 0.5em;
max-width: 50%;
```

Vermeiden Sie dies:

```css example-bad
margin: 20px;
max-width: 500px;
```

## Media Queries

### Bereichs-Syntax

Verwenden Sie die moderne Bereichs-Syntax anstelle von `min-` und `max-`. Die erste erlaubt es, exklusive Bereiche zu spezifizieren, ermöglicht die gleichzeitige Angabe von oberen und unteren Grenzen und ist insgesamt prägnanter und lesbarer.

```css example-good
@media (width >= 480px) {
  /* ... */
}
@media (600px < height < 900px) {
  /* ... */
}
```

```css example-bad
@media (min-width: 480px) {
  /* ... */
}
@media (min-height: 600px) and (max-height: 900px) {
  /* ... */
}
```

Dieses Prinzip erstreckt sich auf die nicht-CSS-Verwendung von Media Queries, wie das [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut von `<link>` Elementen oder [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

Wenn Sie alternative Stile haben, die durch Mediaschwellen ausgewählt werden, seien Sie besonders vorsichtig mit Ihren Media Queries. Denken Sie daran, dass `width` und `height` gebrochene Werte sein können; stellen Sie sicher, dass bei jedem Wert ein und nur ein alternativer Stil wirksam ist.

### Medienabfragen für mobile Geräte zuerst

In einem Stylesheet, das [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) Stile für unterschiedliche Zielbildschirmgrößen enthält, schließen Sie zuerst die Gestaltungen für enge Bildschirme/mobile Ausstattung ein, bevor andere Medienabfragen getroffen werden. Fügen Sie die Gestaltung für größere Bildschirmgrößen über aufeinanderfolgende Medienabfragen hinzu. Die Einhaltung dieser Regel hat viele Vorteile, die in [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

```css example-good
/* Default CSS layout for narrow screens */

@media (width >= 480px) {
  /* CSS for medium width screens */
}

@media (width >= 800px) {
  /* CSS for wide screens */
}

@media (width >= 1100px) {
  /* CSS for really wide screens */
}
```

## Zeichenketten

Wo immer Anführungszeichen im CSS-Syntax optional sind, verwenden Sie sie und verwenden Sie doppelte Anführungszeichen. Machen Sie es so:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

Machen Sie nicht das Folgende, weil die Arten von erlaubten Zeichen eingeschränkter sind und manchmal zu subtilen Syntaxfehlern führen:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Mit der `@import` Regel spezifizieren Sie den Modulpfad als Zeichenkette, nicht als `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - gehen Sie unsere CSS-Eigenschaften-Referenzseiten durch, um einige gute, prägnante, bedeutungsvolle CSS-Snippets zu überprüfen. Unsere interaktiven Beispiele im Abschnitt "Probieren Sie es aus" sind im Allgemeinen geschrieben, um den auf dieser Seite beschriebenen Richtlinien zu folgen.
