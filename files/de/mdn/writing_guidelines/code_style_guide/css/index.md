---
title: Richtlinien zum Schreiben von CSS-Beispielcode
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: 359d3c9cea9b2caa691c63ed3b01714ad4416372
---

Die folgenden Richtlinien beschreiben, wie CSS-Beispielcode für MDN Web Docs verfasst werden sollte.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Wahl eines Formats

Meinungen über die korrekte Einrückung, Leerzeichen und Zeilenlängen sind seit jeher umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Bei MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um sich über die aktuellen Regeln zu informieren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie beachten müssen.

### Planen Sie Ihr CSS

Bevor Sie in das Schreiben großer CSS-Abschnitte eintauchen, planen Sie Ihre Stile sorgfältig. Welche allgemeinen Stile benötigt werden, welche verschiedenen Layouts erstellt werden müssen, welche spezifischen Überschreibungen erstellt werden müssen und ob sie wiederverwendbar sind. Vor allem sollten Sie versuchen, **zu viel Überschreibung zu vermeiden**. Wenn Sie feststellen, dass Sie Stile schreiben und dann wieder ein paar Regeln später aufheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie moderne CSS-Features, wenn unterstützt

Sie können neue Funktionen verwenden, sobald alle großen Browser — Chrome, Edge, Firefox und Safari — sie unterstützen (auch bekannt als {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für das CSS-Feature, das auf der Seite dokumentiert wird (dies wird stattdessen durch die [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) bestimmt). Sie können zum Beispiel [nicht standardisierte oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Features dokumentieren und vollständige Beispiele erstellen, die ihr Verhalten demonstrieren, aber Sie sollten darauf verzichten, diese Features in Demos für andere, nicht verwandte Features, wie etwa eine Web-API, zu verwenden.

### Befolgen Sie gängige Best Practices

Es gibt einige allgemein anerkannte Prinzipien, die wir nicht erschöpfend hier aufführen müssen:

- Stellen Sie sicher, dass Ihr Code keine Syntaxfehler hat, die dazu führen können, dass die [Eigenschaft oder Deklaration ignoriert](/de/docs/Web/CSS/CSS_syntax/Error_handling) wird. Standard-Syntax, die nicht implementiert wurde, ist akzeptabel, wenn sie unserer [allgemeinen Regel über moderne CSS-Features](#verwenden_sie_moderne_css-features,_wenn_unterstützt) entspricht.
- Verwenden Sie keine [nicht standardisierten, veralteten oder obsoleten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Features. Diese Richtlinie gilt auch für {{Glossary("Vendor_Prefix#css_prefixes", "präfixierte Features")}}: Verwenden Sie die Alternative mit Präfix _nur, wenn_ das Standard-Feature nicht verfügbar ist (siehe unsere [allgemeine Regel über moderne CSS-Features](#verwenden_sie_moderne_css-features,_wenn_unterstützt)). Wenn der Leser eine breitere Kompatibilität benötigt, kann er entweder selbst das präfixierte Fallback hinzufügen oder einen CSS-Postprozessor verwenden.
- Schreiben Sie keinen redundanten oder nicht funktionalen Code, der oft ein Indikator für Bugs oder Überbleibsel von Refaktorisierungen ist. Dazu gehören wiederholte Eigenschaften in einer Deklaration, leere Deklarationen, leere Kommentare oder Selektoren, die keine Elemente treffen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessorsyntax, wie sie etwa in [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/) vorkommt, im Beispielcode. Bei MDN Web Docs dokumentieren wir die ursprüngliche CSS-Sprache. Der Einsatz von Präprozessoren würde nur das Verständnis der Beispiele erschweren und die Leser möglicherweise verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

In ähnlicher Weise wie bei der vorherigen Richtlinie sollten Sie keine Beispielcodes auf MDN Web Docs mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Auch wenn sie eine gültige CSS-Syntax darstellen, können die Benennungsrichtlinien für Personen verwirrend sein, die mit diesen Methodologien nicht vertraut sind.

### Verwenden Sie keine Resets

Um die maximale Kontrolle über CSS-Plattformen zu haben, haben viele Leute früher CSS-Resets verwendet, um alle Stile zu entfernen, bevor sie dann alles wieder neu aufgebaut haben. Das hat sicherlich seine Vorteile, aber besonders in der modernen Welt können CSS-Resets übertrieben sein und viel zusätzliche Zeit erfordern, um Dinge umzusetzen, die eigentlich nicht vollständig kaputt waren, wie Standardabstände und Listenstile.

### Formale Syntax und Pseudocode

Formale Syntax ist ein integraler Bestandteil der CSS-Dokumentation von MDN (als Beispiel siehe den Abschnitt [Formale Syntax](/de/docs/Web/CSS/background-image#formal_syntax) auf der Eigenschaftsseite von `background-image`). Da viele Entwickler mit Syntax in diesem Format vertraut sind, ist es akzeptabel, Pseudocode in einer formell-syntaxähnlichen Weise in Beschreibungen und Beispielen zu schreiben. Jedoch sollte jeder Code, der nicht syntaktisch korrektes CSS ist, nicht als CSS gekennzeichnet werden. Syntaxfehler in `css`-Codeblöcken führen dazu, dass der Code durch statische Prüfprogramme nicht analysiert werden kann, verwirren Leser, die erwarten, gültigen CSS-Code zu sehen, und können sogar zu unsinniger Syntaxhervorhebung führen. Markieren Sie entweder Ihren Codeblock als `plain`, oder verwenden Sie das `CSSSyntaxRaw`-Makro, um die vollständige formale Syntax darzustellen.

Schreiben Sie keine Beschreibungen wie diese (dies ist keine echte formale Syntax; es ist nur Pseudo-CSS mit einigen Platzhaltern):

````md example-bad
The `border` property has the following general form:

```css
border: <border-width> <border-style> <border-color>;
```
````

Verwenden Sie stattdessen `plain`:

````md example-good
The `border` property has the following general form:

```plain
border: <border-width> <border-style> <border-color>;
```
````

Oder, wenn Sie es für angemessen halten, schreiben Sie tatsächlich formale Syntax mit dem `CSSSyntaxRaw`-Makro:

```md example-good
The `border` property is specified as a line width, a line style, and a color, in any order:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

Darüber hinaus ist ein einzelner Wert kein syntaktisch korrektes CSS. CSS-Code erfordert mindestens eine Eigenschaft und ihren Wert. Wenn Sie die Funktion `rgb()` dokumentieren, schreiben Sie dies:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

Verwenden Sie nicht diesen Stil:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

Beachten Sie, dass diese Regel nicht für den ersten Codeblock im Abschnitt „Syntax“ gilt, der stattdessen durch [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax) spezifiziert ist und erfordert, dass Funktionen ohne den Eigenschaftsnamen geschrieben werden.

## Animationen

### Keyframe-Selektoren

Bei der Angabe von Keyframes können die Selektoren `0%` und `100%` auch als `from` und `to` geschrieben werden. Wenn eine `@keyframes`-Regel _nur diese beiden Selektoren_ enthält, verwenden Sie `from` und `to` anstelle von `0%` und `100%`. Dadurch wird Ihr Code semantischer.

Vermeiden Sie dies:

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

Wenn Ihre `@keyframes`-Regel jedoch mehr als nur die Start- und Endframes enthält, verwenden Sie die Selektoren `0%` und `100%` für Einheitlichkeit.

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

Wenn möglich, vermeiden Sie Überraschungen durch Erhöhen oder Verringern der Spezifität, wie etwa durch übermäßige Nutzung der [`:where()`](/de/docs/Web/CSS/:where)-Pseudoklasse oder das Duplizieren von Selektoren. Ziehen Sie stattdessen die folgenden Techniken in Betracht, um die Spezifität zu verwalten:

- Ändern Sie die Reihenfolge der Deklarationen, um die Vorteile der Kaskade zu nutzen.
- Ordnen Sie die Eigenschaften in jeder Deklaration so an, dass sie sich nicht gegenseitig überschreiben.
- Verwenden Sie ID-Selektoren, in Fällen, in denen das HTML-`id` selbst gerechtfertigt ist.

### !important

`!important` ist das letzte Mittel, das normalerweise nur verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt. Die Verwendung von `!important` ist eine schlechte Praxis und sollte vermieden werden, wo immer möglich.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Reihenfolge

Wenn zwei Deklarationen dasselbe Element ansprechen, sollte diejenige mit höherer Spezifität später im Stylesheet stehen.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Innerhalb einer Deklaration sollten verwandte Eigenschaften (wie Größe, Positionierung und Farbe) zusammen angeordnet werden. Benutzerspezifische Eigenschaften sollten am Anfang des Deklarationsblocks deklariert werden, um eine schnelle Identifikation aller verfügbaren benutzerspezifischen Eigenschaften zu ermöglichen.

### Leerzeilen

Leerzeilen zwischen Deklarationsblöcken werden empfohlen. Sie können entfernt werden, wenn aufeinanderfolgende Deklarationen stark miteinander verbunden sind, wie Varianten derselben Utility-Klasse.

Leerzeilen zwischen Eigenschaften sollten sparsam verwendet werden. Fügen Sie sie nur hinzu, wenn jede Gruppe von Eigenschaften einen klaren semantischen Block bildet.

### Kurzform-Eigenschaften

- Wenn _jede_ Bestandteileigenschaft einer Kurzform-Eigenschaft einen nicht standardmäßigen Wert erhält, verwenden Sie die Kurzform-Eigenschaft anstelle der Bestandteileigenschaften in Langform. Dies macht Ihren Code kürzer und einfacher zu lesen.

  Ersetzen Sie diese Langform-Eigenschaften:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  mit ihrer entsprechenden Kurzform:

  ```css example-good
  margin: 1em 2em;
  ```

- Wenn nur _einige_ Bestandteileigenschaften einer Kurzform-Eigenschaft einen nicht standardmäßigen Wert erhalten, ist die Verwendung der Kurzform-Eigenschaft optional. Beide sind akzeptabel:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Verwenden Sie die kürzeste verfügbare Kurzformsyntax. Schreiben Sie dies:

  ```css example-good
  margin: 1em;
  ```

  Vermeiden Sie diese:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Schreiben Sie Kurzform-Eigenschaften in der {{Glossary("Canonical_order", "kanonischen Reihenfolge")}}. Schreiben Sie dies:

  ```css example-good
  /* width style color */
  border: 1px solid red;
  ```

  Schreiben Sie dies nicht:

  ```css example-bad
  border: solid red 1px;
  ```

- Für jede Kurzform verwenden Sie entweder sie oder ihre Bestandteile in Langform und niemals eine Mischung aus beiden, da die Überschreibungsbeziehung komplex und fehleranfällig ist. Vermeiden Sie diese:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */

  border-width: 1px;
  border-bottom-width: 5px; /* Overrides one border's width *only* */
  ```

### Verwenden Sie Klassenselektoren

Im Allgemeinen bevorzugen Sie [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) (und verwenden Sie `class` anstelle von `id` in Ihrem HTML). Sie können zusammengesetzt werden: mehrere Elemente können dieselbe Klasse verwenden, und dieselbe Klasse kann für mehrere Elemente verwendet werden.

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

Verwenden Sie Klassen zum Stylen, und reservieren Sie IDs für nicht-CSS-Zwecke, wie z.B. für die Verwendung in JavaScript oder zum Verlinken auf einzigartige Seitenanker (`<a href="#section1">`). In Fällen, in denen die Verwendung einer ID gerechtfertigt ist, können Sie sie als Selektor verwenden, um mögliche [Spezifität zu kontrollieren](#kontrolle_der_spezifität).

### Alte Pseudo-Element-Syntaxen

Die `::before`, `::after`, `::first-letter` und `::first-line` [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) können auch mit einem einfachen Doppelpunkt geschrieben werden (wie `:before`). Vermeiden Sie die einfache-Doppelpunkt-Syntax, weil sie entmutigt wird und von Lesern fälschlicherweise als [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) (`:hover`) identifiziert werden könnte.

### Komplexe Selektorlisten

Die Pseudoklassen `:is()`, `:where()` und `:not()` akzeptieren [komplexe Selektorlisten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector). Verwenden Sie sie, um Ihren Selektor zu verkürzen.

Schreiben Sie dies:

```css example-good
input:not(:checked, :disabled) {
  /* ... */
}
```

Schreiben Sie dies nicht:

```css example-bad
input:not(:checked):not(:disabled) {
  /* ... */
}
```

## Groß-/Kleinschreibung

Standardmäßig sollten alle Bezeichner in Kleinbuchstaben sein. Dies gilt für Selektoren, Funktionen und Schlüsselwörter. Benutzerdefinierte Bezeichner sollten das {{Glossary("Kebab_case", "kebab-case")}} verwenden, wie `--custom-property` oder `my-animation`. Lesen Sie den [HTML-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn) für Konventionen zur Groß-/Kleinschreibung von HTML-IDs und -Klassen, die als CSS-Selektoren referenziert werden.

Ausnahmen umfassen Schlüsselwortwerte, die in SVG definiert sind und aus historischen Gründen {{Glossary("Camel_case", "camelCase")}} sind, und sollten aus Gründen der Lesbarkeit so geschrieben werden. Diese Schlüsselwörter umfassen: [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), {{cssxref("text-rendering")}}-Werte, {{cssxref("shape-rendering")}}-Werte, {{cssxref("pointer-events")}}-Werte und {{cssxref("color-interpolation-filters")}}-Werte.

## Farben

### Wahl einer Notation

Im Allgemeinen, wenn die spezifische Farbpalette kein Anliegen ist, verwenden Sie bevorzugt gängige benannte Farben. Verwenden Sie beispielsweise `black` anstelle von `rgb(0 0 0)` oder `#000000`, und `green` anstelle von `chartreuse`.

Falls eine bestimmte Farbe benötigt wird, verwenden Sie bevorzugt die `rgb()` Notation. `hsl()` und andere Funktionen sollten nur verwendet werden, wo die spezifische Darstellung eine Bedeutung hat (zum Beispiel ein Farbkreis oder ein Gradient). Hexadezimale Notation ist kürzer, kann aber weniger lesbar sein; sie ist mit `rgb()` austauschbar, je nachdem, was für Sie bequemer ist.

Welche Farbfunktion Sie auch benutzen, verwenden Sie immer die moderne Syntax (`rgb(31 41 59 / 0.26)`), nicht die alte durch Kommas getrennte. Verwenden Sie immer die Funktion ohne das `a`-Suffix (`rgb` anstelle von `rgba`), weil es kürzer ist und keine Namensänderung erfordert, wenn Sie später entscheiden, den Alpha-Kanal hinzuzufügen oder zu entfernen.

Wenn Sie die hexadezimale Notation verwenden, verwenden Sie immer die sechs (oder acht) stellige Version, um die kognitive Belastung zu vermeiden: `#aabbcc` anstelle von `#abc`.

### Farbparameter

Aus Gründen der Konsistenz sollten standardmäßig alle Parameter Zahlen anstelle von Prozentzahlen oder Graden verwendet werden. Dies gilt auch für den Alpha-Kanal. Wenn jedoch eine spezifische Darstellung von Bedeutung ist (zum Beispiel in Animationen, Gradienten oder Berechnungen), verwenden Sie den geeigneten Typ im Kontext.

Wenn der Alpha-Kanal `1` ist, lassen Sie ihn weg. Schreiben Sie `rgb(31 41 59)` anstelle von `rgb(31 41 59 / 1)`.

### Auswahl von Farben

Zusätzlich zur Empfehlung zur Verwendung von gängigen benannten Farben sollte Ihre Farbpalette unseren [Barrierefreiheits-Richtlinien](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) entsprechen. Insbesondere, wenn die Farben Elemente unterscheiden (wie eine „rote Box“ und eine „blaue Box“), stellen Sie sicher, dass die Farben für Menschen mit Farbsehschwäche unterscheidbar sind. Streben Sie mindestens ein Verhältnis von 4,5:1 [Kontrastverhältnis](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (WCAG AA) zwischen Text und Hintergrund an.

## Kommentare

Verwenden Sie CSS-Style-Kommentare, um Code zu kommentieren, der sich nicht selbst erklärt. Beachten Sie auch, dass Sie zwischen den Sternen und dem Kommentar ein Leerzeichen lassen sollten.

```css example-good
/* This is a CSS-style comment */
```

Platzieren Sie Ihre Kommentare auf separaten Zeilen vor dem Code, auf den sie sich beziehen, wie folgt:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## Schriftarten

### Schriftartenfamilien spezifizieren

Wenn Sie eine Schriftartfamilie spezifizieren, geben Sie immer einen [allgemeinen Schriftartfamilien](/de/docs/Web/CSS/font-family#generic-name)-Namen als letztes Fallback hinzu. Dies stellt sicher, dass, wenn die angegebene Schriftart nicht verfügbar ist, der Browser eine geeignetere Ersatzschriftart anzeigt. [Web-sichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) sind von dieser Regel ausgenommen.

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

### Schriftartenstärke spezifizieren

Bevorzugen Sie Schlüsselwortwerte wie `normal` und `bold`, und relative Gewichte wie `bolder` und `lighter`. Verwenden Sie nur Zahlenwerte, wenn die spezifische Stärke gewünscht ist. Sie sollten immer `400` durch `normal` und `700` durch `bold` ersetzen, außer wenn Sie Bereiche mit variablen Schriftarten deklarieren oder für die Konsistenz mit anderen ähnlichen Deklarationen.

## Längen

### Verwenden Sie flexible/relative Einheiten

Um maximale Flexibilität über den größtmöglichen Bereich von Geräten zu gewährleisten, verwenden Sie standardmäßig relative Einheiten wie `em`, `rem`, Prozentwerte und Viewporteinheiten (wenn Sie möchten, dass sie sich je nach Viewportbreite ändern) für alle Längen. Sie können mehr darüber in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) lesen.

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

## Medienanfragen

### Bereichs-Syntax

Verwenden Sie die moderne Bereichs-Syntax anstelle von `min-` und `max-`. Erstere ermöglicht es, exklusive Bereiche zu spezifizieren, gleichzeitig obere und untere Grenzen anzugeben, und ist insgesamt prägnanter und lesbarer.

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

Dieses Prinzip erstreckt sich auf die nicht-CSS-Nutzung von Medienanfragen, wie das [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribut von `<link>`-Elementen oder [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

Wenn Sie unterschiedliche alternative Stile basierend auf Mediaschwellenwerten ausgewählt haben, seien Sie besonders vorsichtig mit Ihren Medienanfragen. Denken Sie daran, dass `width` und `height` gebrochene Werte sein können; stellen Sie sicher, dass bei jedem Wert genau ein alternativer Stil in Kraft ist.

### Mobile-First-Medienanfragen

In einem Stylesheet, das [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für unterschiedliche Zielansichtsgrößen enthält, schließen Sie zuerst die schmalbildschirmgeformte/mobilfreundliche Stile ein, bevor andere Medienanfragen angesprochen werden. Fügen Sie Styles für breitere Ansichtsgrößen über aufeinanderfolgende Medienanfragen hinzu. Diese Regel zu befolgen hat viele Vorteile, die im [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

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

## Zeichenfolgen

Wo auch immer Anführungszeichen im CSS-Syntax optional sind, verwenden Sie sie und verwenden Sie doppelte Anführungszeichen. Tun Sie dies:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

Tun Sie das Folgende nicht, da die erlaubten Zeichentypen eingeschränkter sind und manchmal zu subtilen Syntaxfehlern führen:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Mit der `@import`-Regel geben Sie den Modulpfad als Zeichenfolge an, nicht als `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - Durchsuchen Sie unsere CSS-Eigenschaftsreferenzseiten, um einige gute, prägnante, aussagekräftige CSS-Snippets zu sehen. Unsere interaktiven Beispiele im Abschnitt „Ausprobieren“ sind in der Regel so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
