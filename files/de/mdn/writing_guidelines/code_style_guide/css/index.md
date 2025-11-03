---
title: Richtlinien zur Erstellung von CSS-Codebeispielen
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die folgenden Richtlinien decken ab, wie CSS-Beispielcode für die MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Format wählen

Meinungen über korrekte Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Stil des Codes konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um sich über die aktuellen Regeln zu informieren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Es gibt jedoch einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie große Mengen an CSS schreiben, planen Sie Ihre Stile sorgfältig. Welche allgemeinen Stile werden benötigt, welche unterschiedlichen Layouts müssen Sie erstellen, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie ständig Stile schreiben und dann wenige Regeln weiter unten wieder aufheben, sollten Sie Ihre Strategie überdenken.

### Verwenden Sie moderne CSS-Features, wenn sie unterstützt werden

Sie können neue Funktionen verwenden, sobald sie von allen großen Browsern — Chrome, Edge, Firefox und Safari — unterstützt werden (auch bekannt als {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für das CSS-Feature, das auf der Seite dokumentiert wird (was stattdessen durch die [Aufnahmekriterien](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) geregelt ist). Sie können also [nicht standardisierte oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen dokumentieren und vollständige Beispiele zu ihrem Verhalten schreiben, sollten aber davon absehen, diese Funktionen in Demos für andere nicht verwandte Features zu verwenden, wie z.B. eine Web-API.

### Befolgen Sie gängige Best Practices

Es gibt einige allgemein anerkannte Prinzipien, die wir hier nicht erschöpfend behandeln müssen:

- Stellen Sie sicher, dass Ihr Code keine Syntaxfehler hat, die dazu führen können, dass die [Eigenschaft oder Deklaration ignoriert wird](/de/docs/Web/CSS/CSS_syntax/Error_handling). Standardsyntax, die nicht implementiert wurde, ist akzeptabel, wenn sie zu unserer [allgemeinen Regel über moderne CSS-Features](#verwenden_sie_moderne_css-features,_wenn_sie_unterstützt_werden) passt.
- Verwenden Sie keine [nicht standardisierten, veralteten oder obsoleten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen. Diese Richtlinie erstreckt sich auf {{Glossary("Vendor_Prefix#css_prefixes", "präfixbasierte Funktionen")}}: Verwenden Sie die Alternative mit Präfix _nur dann_, wenn die Standardfunktion nicht verfügbar ist (siehe unsere [allgemeine Regel über moderne CSS-Features](#verwenden_sie_moderne_css-features,_wenn_sie_unterstützt_werden)). Wenn der Leser eine breitere Kompatibilität benötigt, kann er entweder den Präfix-Fallback selbst hinzufügen oder einen CSS-Postprozessor verwenden.
- Schreiben Sie keinen redundanten oder nicht funktionalen Code, der häufig ein Indikator für Bugs oder Überbleibsel von Refactorings ist. Dazu gehören wiederholte Eigenschaften in einer Deklaration, leere Deklarationen, leere Kommentare oder Selektoren, die keine Elemente ansprechen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessor-Syntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/) im Beispielcode. Auf MDN Web Docs dokumentieren wir die ursprüngliche CSS-Sprache. Die Verwendung von Präprozessoren würde nur das Verständnis der Beispiele erschweren und potenziell die Leser verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

In der gleichen Hinsicht wie bei der vorangegangenen Richtlinie, schreiben Sie keine Beispielcodes auf den MDN Web Docs mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/). Auch wenn sie eine gültige CSS-Syntax haben, können die Benennungskonventionen für Personen, die mit diesen Methodologien nicht vertraut sind, verwirrend sein.

### Verwenden Sie keine Resets

Viele Menschen verwendeten CSS-Resets, um alle Stile zu entfernen, bevor sie dann alles selbst wieder aufbauten, um maximale Kontrolle über CSS plattformübergreifend zu haben. Dies hat sicherlich seine Vorzüge, aber insbesondere in der modernen Welt können CSS-Resets übertrieben sein und zu viel zusätzlicher Zeitaufwand beim Neuerstellen von Dingen führen, die ursprünglich nicht völlig defekt waren, wie Standardränder und Listenstile.

### Formale Syntax und Pseudocode

Formale Syntax ist ein integraler Bestandteil der CSS-Dokumentation auf MDN (siehe zum Beispiel den Abschnitt [Formale Syntax](/de/docs/Web/CSS/Reference/Properties/background-image#formal_syntax) auf der Seite zur `background-image` Eigenschaft). Da viele Entwickler mit der Syntax in diesem Format vertraut sind, ist es zulässig, Pseudocode in einer formalen Syntax-ähnlichen Art und Weise in Beschreibungen und Beispielen zu schreiben. Allerdings sollte jeder Code, der keine syntaktisch wohlgeformten CSS ist, nicht als CSS markiert werden. Syntaxfehler in `css` Codeblöcken führen dazu, dass der Code von statischen Prüfern nicht bearbeitet werden kann, verwirren die Leser, die gültigen CSS-Code erwarten, und könnten sogar zu unsinniger Syntaxhervorhebung führen. Markieren Sie Ihren Codeblock entweder als `plain` oder verwenden Sie das `CSSSyntaxRaw` Makro, um die vollständige formale Syntax darzustellen.

Schreiben Sie nicht solche Beschreibungen (dies ist ohnehin keine echte formale Syntax; es ist nur Pseudo-CSS mit einigen Platzhaltern):

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

Außerdem ist ein einzelner Wert kein syntaktisch wohlgeformtes CSS. CSS-Code erfordert mindestens eine Eigenschaft und ihren Wert. Wenn Sie die `rgb()` Funktion dokumentieren, schreiben Sie dies:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

Verwenden Sie nicht diesen Stil:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

Beachten Sie, dass diese Regel nicht für den ersten Codeblock im Abschnitt "Syntax" gilt, der stattdessen durch [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax) spezifiziert ist und Funktionen ohne den Eigenschaftsnamen erfordert.

## Animationen

### Keyframe-Selektoren

Beim Angeben von Keyframes können die `0%` und `100%` Selektoren auch als `from` und `to` geschrieben werden. Wenn eine `@keyframes` Regel _nur diese beiden Selektoren_ enthält, verwenden Sie `from` und `to` anstelle von `0%` und `100%`. Dies macht Ihren Code semantischer.

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

Andererseits, wenn Ihre `@keyframes` Regel mehr als nur die Start- und Endframes enthält, verwenden Sie die `0%` und `100%` Selektoren für einheitliche Darstellung.

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

### Spezifität kontrollieren

Vermeiden Sie, falls möglich, Überraschungen bei der Erhöhung oder Verringerung der Spezifität, wie das übermäßig häufige Verwenden der [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklasse oder das Duplizieren von Selektoren. Erwägen Sie stattdessen die folgenden Techniken zur Verwaltung der Spezifität:

- Ändern Sie die Reihenfolge der Deklarationen, um die Kaskade zu nutzen
- Ordnen Sie Eigenschaften in jeder Deklaration so an, dass sie sich nicht gegenseitig überschreiben
- Verwenden Sie ID-Selektoren in Fällen, in denen das HTML [`id`](#verwenden_sie_klassen-selektoren) selbst gerechtfertigt ist

### !important

`!important` ist das letzte Mittel, das normalerweise nur verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis, und Sie sollten sie möglichst vermeiden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Reihenfolge

Generell gilt, dass wenn zwei Deklarationen dasselbe Element/die gleichen Elemente ansprechen, die mit höherer Spezifität später im Stylesheet stehen sollte.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Innerhalb einer Deklaration sollten zusammengehörige Eigenschaften (wie Größen, Positionierung und Farbe) möglichst zusammen angeordnet sein. Benutzerdefinierte Eigenschaften sollten am Anfang des Deklarationsblocks deklariert werden, um eine schnelle Identifizierung aller verfügbaren benutzerdefinierten Eigenschaften zu ermöglichen.

### Leere Zeilen

Leere Zeilen zwischen Deklarationsblöcken werden empfohlen. Sie können sie entfernen, wenn aufeinanderfolgende Deklarationen stark zusammenhängen, wie etwa Varianten derselben Utility-Klasse.

Leere Zeilen zwischen Eigenschaften sollten sparsam verwendet werden. Fügen Sie sie nur hinzu, wenn jede Gruppe von Eigenschaften einen klaren semantischen Block bildet.

### Kurzschrift-Eigenschaften

- Wenn _jede_ zusammengesetzte Eigenschaft einer Kurzschrift-Eigenschaft einen Nicht-Standardwert erhält, verwenden Sie die Kurzschrift-Eigenschaft anstelle der zusammengesetzten Langform-Eigenschaften. Dies macht Ihren Code kürzer und lesbarer.

  Ersetzen Sie diese Langform-Eigenschaften:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  durch die entsprechende Kurzform:

  ```css example-good
  margin: 1em 2em;
  ```

- Wenn nur _einige_ zusammengesetzte Eigenschaften einer Kurzschrift-Eigenschaft einen Nicht-Standardwert erhalten, ist die Verwendung der Kurzschrift-Eigenschaft optional. Beide Optionen sind akzeptabel:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Verwenden Sie die kürzeste verfügbare Kurzschrift-Syntax. Schreiben Sie dies:

  ```css example-good
  margin: 1em;
  ```

  Vermeiden Sie diese:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Schreiben Sie die Kurzschrift-Eigenschaften in der {{Glossary("Canonical_order", "kanonischen Reihenfolge")}}. Schreiben Sie dies:

  ```css example-good
  /* width style color */
  border: 1px solid red;
  ```

  Schreiben Sie nicht dies:

  ```css example-bad
  border: solid red 1px;
  ```

- Verwenden Sie entweder eine Kurzschrift oder deren Langform-Bestandteile, niemals eine Mischung aus beiden, da das Override-Verhältnis komplex ist und fehleranfällig sein kann. Vermeiden Sie dies:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */

  border-width: 1px;
  border-bottom-width: 5px; /* Overrides one border's width *only* */
  ```

### Verwenden Sie Klassen-Selektoren

Generell sollten [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) bevorzugt werden (und verwenden Sie `class` statt `id` in Ihrem HTML). Sie können zusammengesetzt werden: Mehrere Elemente können dieselbe Klasse verwenden, und dieselbe Klasse kann für mehrere Elemente verwendet werden.

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

Verwenden Sie Klassen für das Styling und reservieren Sie IDs für Nicht-CSS-Zwecke, wie die Verwendung in JavaScript oder für das Verknüpfen zu spezifischen Seitenankern (`<a href="#section1">`). In Fällen, wo die Verwendung eines ID gerechtfertigt ist, können Sie es als Selektor verwenden, potenziell um [Spezifität zu kontrollieren](#spezifität_kontrollieren).

### Alte Pseudo-Element Selektoren

Die `::before`, `::after`, `::first-letter` und `::first-line` [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) können auch mit Einzelpunkt geschrieben werden (wie `:before`). Vermeiden Sie die Einzelpunkt-Syntax, da sie nicht empfohlen wird und von Lesern als [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (`:hover`) missverstanden werden könnte.

### Komplexe Selektorliste

Die `:is()`, `:where()`, und `:not()` Pseudoklassen akzeptieren [komplexe Selektorlisten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector). Nutzen Sie sie, um Ihren Selektor zu verkürzen.

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

Standardmäßig sollten alle Bezeichner klein geschrieben werden. Dies gilt für Selektoren, Funktionen und Schlüsselwörter. Benutzerdefinierte Bezeichner sollten {{Glossary("Kebab_case", "kebab-case")}} verwenden, wie `--custom-property` oder `my-animation`. Siehe den [HTML-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn) für Groß- und Kleinschreibungs-Konventionen von HTML-IDs und Klassen, die als CSS-Selektoren referenziert werden.

Ausnahmen umfassen Schlüsselwortwerte, die in SVG definiert sind, welche aus historischen Gründen {{Glossary("Camel_case", "camelCase")}} sind, und sollten zur Verbesserung der Lesbarkeit so geschrieben werden. Zu diesen Schlüsselwörtern gehören: [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), {{cssxref("text-rendering")}} Werte, {{cssxref("shape-rendering")}} Werte, {{cssxref("pointer-events")}} Werte, und {{cssxref("color-interpolation-filters")}} Werte.

## Farben

### Auswahl einer Notation

Im Allgemeinen, wenn die spezifische Farbpalette keine Rolle spielt, verwenden Sie standardmäßig gebräuchliche Namen von Farben. Zum Beispiel, verwenden Sie `black` statt `rgb(0 0 0)` oder `#000000`, und `green` statt `chartreuse`.

Wenn eine spezifische Farbe benötigt wird, verwenden Sie standardmäßig die `rgb()` Notation. `hsl()` und andere Funktionen sollten nur verwendet werden, wenn die zugehörige Darstellung eine Bedeutung hat (zum Beispiel ein Farbrad oder ein Verlauf). Die hexadezimale Notation ist kürzer, aber möglicherweise weniger lesbar; sie ist austauschbar mit `rgb()` abhängig davon, welche für Sie bequemer ist.

Welche Farbfunktion Sie auch verwenden, verwenden Sie stets die moderne Syntax (`rgb(31 41 59 / 0.26)`), nicht die veraltete kommagetrennte. Verwenden Sie stets die Funktion ohne das `a` Suffix (`rgb` statt `rgba`), da sie kürzer ist und es nicht erforderlich ist, den Namen zu ändern, wenn Sie später entscheiden, den Alpha-Kanal hinzuzufügen oder zu entfernen.

Bei der Verwendung der hexadezimalen Notation, verwenden Sie immer die sechs (oder acht) stellige Version, um die kognitive Belastung zu vermeiden: `#aabbcc` statt `#abc`.

### Farbparameter

Der Konsistenz halber sollten alle Parameter standardmäßig Zahlen verwenden, statt Prozentsätze oder Grad. Dies gilt auch für den Alpha-Kanal. Wenn jedoch eine bestimmte Darstellung sinnvoll ist (zum Beispiel in Animationen, Verläufen oder Berechnungen), verwenden Sie den geeigneten Typ im entsprechenden Kontext.

Wenn der Alpha-Kanal `1` ist, lassen Sie ihn weg. Schreiben Sie `rgb(31 41 59)` statt `rgb(31 41 59 / 1)`.

### Farben auswählen

Zusätzlich zur Empfehlung, gebräuchliche Namen von Farben zu verwenden, sollte Ihre Farbpalette unseren [Zugänglichkeitsrichtlinien](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) entsprechen. Insbesondere, wenn die Farben Elemente unterscheiden (wie eine "rote Box" und eine "blaue Box"), stellen Sie sicher, dass die Farben für Menschen mit Farbsehschwäche unterscheidbar sind. Streben Sie ein Kontrastverhältnis von mindestens 4,5:1 [Kontrastverhältnis](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (WCAG AA) zwischen Text und Hintergrund an.

## Kommentare

Verwenden Sie CSS-Style-Kommentare, um Code zu kommentieren, der nicht selbstdokumentierend ist. Beachten Sie auch, dass Sie einen Abstand zwischen den Sternchen und dem Kommentar lassen sollten.

```css example-good
/* This is a CSS-style comment */
```

Setzen Sie Ihre Kommentare auf separate Zeilen vor dem Code, auf den sie sich beziehen, wie so:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## Schriften

### Schriftfamilien spezifizieren

Geben Sie beim Spezifizieren einer Schriftfamilie stets einen [generischen Schriftartnamen](/de/docs/Web/CSS/Reference/Properties/font-family#generic-name) als letzten Fallback an. Dies stellt sicher, dass wenn die spezifische Schrift nicht verfügbar ist, der Browser eine geeignetere Fallback-Schrift anzeigt. [Websichere Schriften](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) sind von dieser Regel ausgenommen.

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

### Schriftgewichte spezifizieren

Bevorzugen Sie Schlüsselwortwerte wie `normal` und `bold`, und relative Gewichte wie `bolder` und `lighter`. Verwenden Sie Zahlenwerte nur dann, wenn das spezifische Gewicht gewünscht ist. Ersetzen Sie stets `400` durch `normal` und `700` durch `bold`, außer wenn Sie Bereiche mit variablen Schriften deklarieren, oder zur Konsistenz mit anderen ähnlichen Deklarationen.

## Längen

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität über den größtmöglichen Bereich von Geräten hinaus, verwenden Sie standardmäßig relative Einheiten wie `em`, `rem`, Prozentsätze und Ansichtseinheiten (wenn Sie möchten, dass sie je nach Ansichtbreite variieren) für alle Längen. Sie können darüber mehr in unserem [Leitfaden zu CSS-Werten und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) lesen.

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

### Bereichssyntax

Verwenden Sie die moderne Bereichssyntax anstelle von `min-` und `max-`. Erstere ermöglicht die Angabe exklusiver Bereiche, ermöglicht die gleichzeitige Angabe oberer und unterer Grenzen und ist insgesamt prägnanter und lesbarer.

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

Dieses Prinzip erstreckt sich auf die nicht-CSS Verwendung von Media Queries, wie das [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut von `<link>` Elementen oder [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

Wenn Sie unterschiedliche alternative Stile haben, die durch Mediaschwellenwerte ausgewählt werden, seien Sie besonders vorsichtig mit Ihren Media Queries. Denken Sie daran, dass `width` und `height` Bruchwerte sein können; stellen Sie sicher, dass bei jedem Wert ein und nur ein alternativer Stil in Kraft ist.

### Mobile-first Media Queries

In einem Stylesheet, das [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) Stile für unterschiedliche Ziel-Viewportgrößen enthält, inkludieren Sie zuerst die verdünnte Bildschirm-/mobile Gestaltung, bevor andere Media Queries auftreten. Fügen Sie Stile für größere Viewportgrößen mittels aufeinanderfolgender Media Queries hinzu. Die Befolgung dieser Regel hat viele Vorteile, die im [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt sind.

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

Wo immer Anführungszeichen in der CSS-Syntax optional sind, verwenden Sie diese und verwenden Sie doppelte Anführungszeichen. Machen Sie dies:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

Tun Sie dies nicht, da die Art der erlaubten Zeichen eingeschränkter ist und manchmal zu subtilen Syntaxfehlern führen kann:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Verwenden Sie bei der `@import` Anweisung den Modulpfad als Zeichenfolge und nicht als `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - durchstöbern Sie unsere CSS-Eigenschaftsreferenzseiten, um sich einige gute, prägnante, bedeutungsvolle CSS-Snippets anzusehen. Unsere interaktiven Beispiele im Abschnitt "Try it" sind generell geschrieben, um den auf dieser Seite beschriebenen Richtlinien zu folgen.
