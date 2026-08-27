---
title: Richtlinien zum Schreiben von CSS-Codebeispielen
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

Die folgenden Richtlinien behandeln, wie CSS-Beispielcode für die MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Auswahl eines Formats

Meinungen über die korrekte Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Bei den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie große Mengen an CSS schreiben, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche verschiedenen Layouts müssen Sie erstellen, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem müssen Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie ständig Styles schreiben und dann ein paar Regeln weiter unten wieder aufheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie moderne CSS-Features, wenn unterstützt

Sie können neue Funktionen verwenden, sobald jeder große Browser — Chrome, Edge, Firefox und Safari — sie unterstützt (auch bekannt als das {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für die CSS-Funktion, die auf der Seite dokumentiert wird (welche stattdessen durch die [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) bestimmt wird). Zum Beispiel können Sie [nicht standardisierte oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Features dokumentieren und vollständige Beispiele schreiben, die ihr Verhalten demonstrieren, aber Sie sollten davon absehen, diese Features in Demos für andere, nicht verwandte Features, wie zum Beispiel eine Web-API, zu verwenden.

### Folgen Sie allgemeinen Best Practices

Es gibt einige allgemein anerkannte Prinzipien, die wir hier nicht erschöpfend darlegen müssen:

- Stellen Sie sicher, dass Ihr Code keine Syntaxfehler enthält, die dazu führen können, dass die [Eigenschaft oder Deklaration ignoriert wird](/de/docs/Web/CSS/Guides/Syntax/Error_handling). Standard-Syntax, die noch nicht implementiert wurde, ist akzeptabel, wenn sie zu unserer [allgemeinen Regel zu modernen CSS-Features](#verwenden_sie_moderne_css-features,_wenn_unterstützt) passt.
- Verwenden Sie keine [nicht standardisierten, veralteten oder obsoleten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Features. Diese Richtlinie erstreckt sich auf {{Glossary("Vendor_Prefix#css_prefixes", "präfixierte Features")}}: Verwenden Sie die präfixierte Alternative _nur dann_, wenn das Standard-Feature nicht verfügbar ist (siehe unsere [allgemeine Regel zu modernen CSS-Features](#verwenden_sie_moderne_css-features,_wenn_unterstützt)). Wenn der Leser eine breitere Kompatibilität benötigt, kann er entweder den präfixierten Fallback selbst hinzufügen oder einen CSS-Postprozessor verwenden.
- Schreiben Sie keinen redundanten oder nicht funktionalen Code, der ein häufiges Anzeichen für Bugs oder Überreste von Refaktorierungen ist. Dies schließt wiederholte Eigenschaften in einer Deklaration, leere Deklarationen, leere Kommentare oder Selektoren ein, die keine Elemente betreffen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie im Beispielcode keine Präprozessorsyntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/). In den MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Die Verwendung von Präprozessoren erhöht nur die Hürde, die Beispiele zu verstehen, und könnte die Leser verwirren.

### Verwenden Sie keine spezifischen CSS-Methoden

In gleicher Weise wie die vorherige Richtlinie, schreiben Sie keine Beispielcodes auf MDN Web Docs, die eine spezifische CSS-Methode wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) verwenden. Obwohl sie gültige CSS-Syntax darstellen, können die Namenskonventionen für Personen verwirrend sein, die mit diesen Methoden nicht vertraut sind.

### Verwenden Sie keine Resets

Um maximale Kontrolle über CSS auf verschiedenen Plattformen zu haben, haben viele Menschen in der Vergangenheit CSS-Resets verwendet, um alle Stile zu entfernen, bevor sie diese selbst wieder aufbauen. Dies hat sicherlich seine Vorzüge, aber insbesondere in der modernen Welt können CSS-Resets übertrieben sein und zu einem großen Zeitaufwand führen, um Dinge neu zu implementieren, die anfangs nicht völlig defekt waren, wie etwa Standard-Abstände und Listenstile.

### Formale Syntax und Pseudocode

Die formale Syntax ist ein integraler Bestandteil von MDNs CSS-Dokumentation (siehe zum Beispiel den Abschnitt [Formale Syntax](/de/docs/Web/CSS/Reference/Properties/background-image#formal_syntax) auf der Seite der `background-image`-Eigenschaft). Da viele Entwickler mit der Syntax in diesem Format vertraut sind, ist es akzeptabel, Pseudocode in einer formalsyntaxähnlichen Art und Weise in Beschreibungen und Beispielen zu schreiben. Aber jeder Code, der nicht syntaktisch gut geformtes CSS ist, sollte nicht als CSS gekennzeichnet werden. Syntaxfehler in `css` Codeblöcken führen dazu, dass der Code von statischen Prüftools nicht geparst werden kann, verwirren Leser, die erwarten, gültigen CSS-Code zu sehen, und können zu unsinnigem Syntax-Highlighting führen. Markieren Sie Ihren Codeblock entweder als `plain`, oder verwenden Sie das `CSSSyntaxRaw` Makro, um die vollständige formale Syntax darzustellen.

Schreiben Sie keine Beschreibungen wie diese (dies ist kein echter formaler Syntax; es ist einfach Pseudo-CSS mit einigen Platzhaltern):

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

Oder, wenn Sie es für angemessen halten, schreiben Sie die tatsächliche formale Syntax unter Verwendung des `CSSSyntaxRaw` Makros:

```md example-good
The `border` property is specified as a line width, a line style, and a color, in any order:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

Außerdem ist ein einzelner Wert kein syntaktisch wohlgeformtes CSS. CSS-Code erfordert mindestens eine Eigenschaft und deren Wert. Wenn Sie die `rgb()`-Funktion dokumentieren, schreiben Sie dies:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

Verwenden Sie nicht diesen Stil:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

Beachten Sie, dass diese Regel nicht für den ersten Codeblock im Abschnitt "Syntax" gilt, der stattdessen von den [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax) spezifiziert wird und erfordert, dass Funktionen ohne den Eigenschaftsnamen geschrieben werden.

## Animationen

### Keyframe-Selektoren

Beim Bestimmen von Keyframes können die Selektoren `0%` und `100%` auch als `from` und `to` geschrieben werden. Wenn eine `@keyframes` Regel _nur diese beiden Selektoren_ enthält, verwenden Sie `from` und `to` anstelle von `0%` und `100%`. Dies macht Ihren Code semantischer.

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

Wenn Ihre `@keyframes` Regel jedoch mehr als nur die Start- und Endframes enthält, verwenden Sie für die Einheitlichkeit die Selektoren `0%` und `100%`.

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

### Steuern der Spezifität

Vermeiden Sie, wenn möglich, Überraschungen durch Erhöhen oder Verringern der Spezifität, etwa durch übermäßige Verwendung der [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklasse oder durch Duplizieren von Selektoren. Erwägen Sie stattdessen die folgenden Techniken zur Spezifitätskontrolle:

- Ändern Sie die Reihenfolge der Deklarationen, um die Kaskade auszunutzen
- Ordnen Sie die Eigenschaften in jeder Deklaration so um, dass sie sich nicht gegenseitig überschreiben
- Verwenden Sie ID-Selektoren in Fällen, in denen das HTML-`id` selbst gerechtfertigt ist (siehe [Verwendung von Klassen-Selektoren](#verwenden_sie_klassen-selektoren))

### !important

`!important` ist das letzte Mittel, das in der Regel nur dann verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt. Die Verwendung von `!important` gilt als schlechte Praxis und sollte vermieden werden, wann immer möglich.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Anordnung

In der Regel sollte bei zwei Deklarationen, die dieselben Elemente ansprechen, die mit der höheren Spezifität später im Stylesheet stehen.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Innerhalb einer Deklaration sollten verwandte Eigenschaften (wie für Größenangaben, Positionierung und Farbe) zusammen platziert werden. Benutzerdefinierte Eigenschaften sollten am Anfang des Deklarationsblocks deklariert werden, was eine schnelle Identifizierung aller verfügbaren benutzerdefinierten Eigenschaften ermöglicht.

### Leerzeilen

Leere Zeilen zwischen Deklarationsblöcken werden empfohlen. Sie können sie entfernen, wenn aufeinanderfolgende Deklarationen stark miteinander in Zusammenhang stehen, wie bei Variationen derselben Dienstprogrammklasse.

Leere Zeilen zwischen Eigenschaften sollten sparsam verwendet werden. Fügen Sie sie nur hinzu, wenn jede Gruppe von Eigenschaften einen klaren semantischen Block bildet.

### Shorthand-Eigenschaften

- Wenn _jede_ konstituierende Eigenschaft einer Shorthand-Eigenschaft einen nicht-Standardwert zugewiesen bekommt, verwenden Sie die Shorthand-Eigenschaft anstelle der konstituierenden Longhand-Eigenschaften. Das macht Ihren Code kürzer und leichter lesbar.

  Ersetzen Sie diese Longhand-Eigenschaften:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  durch das entsprechende Shorthand:

  ```css example-good
  margin: 1em 2em;
  ```

- Wenn nur _einige_ der konstituierenden Eigenschaften einer Shorthand-Eigenschaft einen nicht-Standardwert haben, ist die Verwendung der Shorthand-Eigenschaft optional. Beide sind akzeptabel:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Verwenden Sie die kürzeste verfügbare Shorthand-Syntax. Schreiben Sie dies:

  ```css example-good
  margin: 1em;
  ```

  Vermeiden Sie diese:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Schreiben Sie Shorthand-Eigenschaften in der {{Glossary("Canonical_order", "kanonischen Reihenfolge")}}. Schreiben Sie dies:

  ```css example-good
  /* width style color */
  border: 1px solid red;
  ```

  Schreiben Sie nicht dies:

  ```css example-bad
  border: solid red 1px;
  ```

- Bei jeder Shorthand entweder verwenden Sie sie oder ihre konstituierenden Longhand Eigenschaften und nie eine Mischung aus beiden, weil die Überschreibungsbeziehung komplex und fehleranfällig ist. Vermeiden Sie diese:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */

  border-width: 1px;
  border-bottom-width: 5px; /* Overrides one border's width *only* */
  ```

### Verwenden Sie Klassen-Selektoren

Im Allgemeinen verwenden Sie [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) (und verwenden Sie `class` anstelle von `id` in Ihrem HTML). Sie können kombiniert werden: Mehrere Elemente können dieselbe Klasse nutzen und dieselbe Klasse kann für mehrere Elemente verwendet werden.

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

Verwenden Sie Klassen zum Styling und reservieren Sie IDs für nicht-CSS-Zwecke, wie z. B. für die Verwendung in JavaScript oder zum Verlinken zu einzigartigen Seitenankern (`<a href="#section1">`). In dem Fall, dass die Verwendung von ID gerechtfertigt ist, können Sie es als Selektor verwenden, um möglicherweise die [Spezifität zu kontrollieren](#steuern_der_spezifität).

### Alte Pseudo-Element-Selektoren

Die `::before`, `::after`, `::first-letter` und `::first-line` [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) können auch mit einem Doppelpunkt geschrieben werden (wie `:before`). Vermeiden Sie die ein-Doppelpunkt-Syntax, da sie nicht empfohlen wird und von Lesern möglicherweise als [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (`:hover`) missverstanden wird.

### Komplexe Selektorenlisten

Die Pseudoklassen `:is()`, `:where()`, und `:not()` akzeptieren [komplexe Selektorenlisten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector). Verwenden Sie sie, um Ihren Selektor zu verkürzen.

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

Standardmäßig sollten alle Bezeichner kleingeschrieben sein. Dies gilt für Selektoren, Funktionen und Schlüsselwörter. Benutzerdefinierte Bezeichner sollten {{Glossary("Kebab_case", "kebab-case")}} verwenden, wie `--custom-property` oder `my-animation`. Siehe den [HTML-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn) für Konventionen zur Groß- und Kleinschreibung von HTML-IDs und -Klassen, die als CSS-Selektoren referenziert werden.

Ausnahmen umfassen Schlüsselwortwerte, die in SVG definiert sind, die aus historischen Gründen {{Glossary("Camel_case", "CamelCase")}} sind und so geschrieben werden sollten, um die Lesbarkeit zu verbessern. Zu diesen Schlüsselwörtern gehören: [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword), {{cssxref("text-rendering")}} Werte, {{cssxref("shape-rendering")}} Werte, {{cssxref("pointer-events")}} Werte und {{cssxref("color-interpolation-filters")}} Werte.

## Farben

### Auswahl einer Notation

Im Allgemeinen, wenn die spezifische Farbpalette keine Rolle spielt, verwenden Sie standardmäßig gängige benannte Farben. Zum Beispiel verwenden Sie `black` anstelle von `rgb(0 0 0)` oder `#000000`, und `green` anstelle von `chartreuse`.

Wenn eine bestimmte Farbe benötigt wird, verwenden Sie standardmäßig die `rgb()`-Notation. `hsl()` und andere Funktionen sollten nur verwendet werden, wenn die besondere Darstellung von Bedeutung ist (zum Beispiel ein Farbkreis oder ein Farbverlauf). Die hexadezimale Notation ist prägnanter, kann aber weniger lesbar sein; sie ist austauschbar mit `rgb()`, abhängig davon, welche für Sie bequemer ist.

Welche Farb-Funktion Sie auch immer verwenden, verwenden Sie immer die moderne Syntax (`rgb(31 41 59 / 0.26)`), nicht die veraltete, kommagetrennte. Verwenden Sie immer die Funktion ohne das `a`-Suffix (`rgb` statt `rgba`), weil sie kürzer ist und es nicht erforderlich ist, wenn Sie später entscheiden, den Alphakanal hinzuzufügen oder zu entfernen.

Beim Verwenden der hexadezimalen Notation verwenden Sie immer die sechs (oder acht) stellige Version, um kognitive Belastung zu vermeiden: `#aabbcc` statt `#abc`.

### Farbparameter

Zur Konsistenz sollten alle Parameter standardmäßig Zahlen anstelle von Prozentsätzen oder Grad verwenden. Dies gilt auch für den Alphakanal. Wenn jedoch eine spezifische Darstellung von Bedeutung ist (zum Beispiel in Animationen, Farbverläufen oder Berechnungen), verwenden Sie im Kontext den geeigneten Typ.

Wenn der Alphakanal `1` ist, weglassen. Schreiben Sie `rgb(31 41 59)` statt `rgb(31 41 59 / 1)`.

### Auswahl von Farben

Zusätzlich zur Empfehlung, gängige benannte Farben zu verwenden, sollte Ihre Farbpalette unseren [Barrierefreiheitsrichtlinien](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) entsprechen. Insbesondere wenn die Farben Elemente unterscheiden (wie eine "rote Box" und eine "blaue Box"), stellen Sie sicher, dass die Farben für Menschen mit Farbsehschwäche unterscheidbar sind. Ziel ist ein Mindestkontrastverhältnis von 4.5:1 [Kontrastverhältnis](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (WCAG AA) zwischen Text und Hintergrund.

## Kommentare

Verwenden Sie CSS-Stil-Kommentare, um Code zu kommentieren, der nicht selbsterklärend ist. Beachten Sie auch, dass Sie einen Leerraum zwischen den Sternchen und dem Kommentar lassen sollten.

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

## Schriften

### Angabe von Schriftfamilien

Wenn Sie eine Schriftfamilie angeben, fügen Sie immer einen [generischen Schriftfamiliennamen](/de/docs/Web/CSS/Reference/Properties/font-family#generic-name) als letzten Fallback hinzu. Dies stellt sicher, dass, wenn die angegebene Schriftart nicht verfügbar ist, der Browser eine geeignetere Fallback-Schriftart anzeigt. [Web-sichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) sind von dieser Regel ausgenommen.

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

### Angabe von Schriftgewichten

Bevorzugen Sie Schlüsselwertangaben wie `normal` und `bold`, sowie relative Gewichte wie `bolder` und `lighter`. Verwenden Sie Zahlenwerte nur dort, wo das spezifische Gewicht gewünscht ist. Sie sollten immer `400` durch `normal` und `700` durch `bold` ersetzen, außer wenn Bereiche mit variablen Schriften deklariert werden oder zur Konsistenz mit anderen ähnlichen Deklarationen.

## Längen

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität über die breitest mögliche Palette von Geräten, verwenden Sie standardmäßig relative Einheiten wie `em`, `rem`, Prozentsätze und Viewport-Einheiten (wenn Sie möchten, dass sie je nach Viewport-Breite variieren) für alle Längen. Sie können mehr darüber in unserem [Leitfaden zu CSS-Werten und einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) lesen.

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

## Medienabfragen

### Bereichen-Syntax

Verwenden Sie die moderne Bereichssyntax anstelle von `min-` und `max-`. Die erstere ermöglicht es Ihnen, exklusive Bereiche anzugeben, gleichzeitig obere und untere Grenzen zu bestimmen, und ist insgesamt prägnanter und lesbarer.

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

Dieses Prinzip erstreckt sich auf nicht-CSS-Verwendungen von Medienabfragen, wie das [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut von `<link>` Elementen oder [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

Wenn Sie alternative Stile haben, die durch Medienthresholds ausgewählt werden, seien Sie besonders vorsichtig mit Ihren Medienabfragen. Denken Sie daran, dass `width` und `height` Bruchwerte sein können; stellen Sie sicher, dass bei jedem Wert genau ein alternativer Stil in Kraft ist.

### Mobilfreundliche Medienabfragen

In einem Stylesheet, das [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using)-Styles für unterschiedliche Ziel-Viewport-Größen enthält, beginnen Sie mit dem Styling für schmale Bildschirme/Mobilgeräten, bevor auf irgendwelche andere Medienabfragen gestoßen wird. Fügen Sie Stile für breitere Viewport-Größen über sukzessive Medienabfragen hinzu. Das Befolgen dieser Regel hat viele Vorteile, die im [Responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

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

Wann immer Anführungszeichen in der CSS-Syntax optional sind, verwenden Sie sie, und verwenden Sie doppelte Anführungszeichen. Machen Sie das:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

Tun Sie nicht Folgendes, da die Arten von Zeichen, die erlaubt sind, stärker eingeschränkt sind und manchmal zu subtilen Syntaxfehlern führen:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Bei der Regel `@import` geben Sie den Modulpfad als Zeichenfolge an, nicht als `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Siehe auch

[CSS Referenzindex](/de/docs/Web/CSS/Reference#index) - Durchstöbern Sie unsere CSS-Eigenschaftsreferenzseiten, um einige gute, prägnante und sinnvolle CSS-Snippets zu überprüfen. Unsere interaktiven Beispiele im Abschnitt "Try it" sind allgemein nach den auf dieser Seite beschriebenen Richtlinien geschrieben.
