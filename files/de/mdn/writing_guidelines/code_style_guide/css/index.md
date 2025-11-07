---
title: Leitlinien zum Schreiben von CSS-Codebeispielen
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die folgenden Leitlinien beschreiben, wie CSS-Beispielcode für MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Auswahl eines Formats

Meinungen über die richtige Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Stil konsistent zu halten (und um ablenkende Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln kennenzulernen und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie sich in das Schreiben großer CSS-Blöcke stürzen, planen Sie Ihre Stile sorgfältig. Welche allgemeinen Stile werden benötigt, welche verschiedenen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie immer wieder Stile schreiben und diese dann in nachfolgenden Regeln wieder aufheben, sollten Sie Ihre Strategie wahrscheinlich überdenken.

### Verwenden Sie moderne CSS-Funktionen, wenn sie unterstützt werden

Sie können neue Funktionen verwenden, sobald sie von allen großen Browsern — Chrome, Edge, Firefox und Safari — unterstützt werden (bekannt als {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für die CSS-Funktion, die auf der Seite dokumentiert wird (was stattdessen von den [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) bestimmt wird). Zum Beispiel können Sie [nicht-standardisierte oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen dokumentieren und vollständige Beispiele schreiben, die deren Verhalten demonstrieren, aber Sie sollten es vermeiden, diese Funktionen in Demos für andere nicht verwandte Funktionen zu verwenden, wie zum Beispiel eine Web-API.

### Befolgen Sie allgemeine Best Practices

Es gibt einige allgemein anerkannte Prinzipien, die wir hier nicht erschöpfend aufführen müssen:

- Stellen Sie sicher, dass Ihr Code keine Syntaxfehler enthält, die dazu führen können, dass die [Eigenschaft oder Deklaration ignoriert wird](/de/docs/Web/CSS/CSS_syntax/Error_handling). Standardsyntax, die nicht implementiert wurde, ist akzeptabel, wenn sie zu unserer [allgemeinen Regel über moderne CSS-Funktionen](#verwenden_sie_moderne_css-funktionen,_wenn_sie_unterstützt_werden) passt.
- Verwenden Sie keine [nicht-standardisierten, veralteten oder obsoleten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen. Diese Richtlinie erstreckt sich auf {{Glossary("Vendor_Prefix#css_prefixes", "präfixierte Funktionen")}}: Verwenden Sie die präfixierte Alternative _nur wenn_ die Standardfunktion nicht verfügbar ist (siehe unsere [allgemeine Regel über moderne CSS-Funktionen](#verwenden_sie_moderne_css-funktionen,_wenn_sie_unterstützt_werden)). Wenn der Leser eine breitere Kompatibilität benötigt, kann er entweder die präfixierte Fallback-Option selbst hinzufügen oder einen CSS-Postprozessor verwenden.
- Schreiben Sie keinen redundanten oder nicht-funktionalen Code, was ein häufiger Indikator für Bugs oder Refaktorierungsüberreste ist. Dazu gehören wiederholte Eigenschaften in einer Deklaration, leere Deklarationen, leere Kommentare oder Selektoren, die keine Elemente treffen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessor-Syntax, wie sie z.B. von [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/) angeboten wird, im Beispielcode. Auf MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Die Verwendung von Präprozessoren würde nur die Hürde für das Verständnis der Beispiele erhöhen und Leser verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

Im gleichen Geist wie die vorherige Richtlinie sollten Sie keine Beispielcodierungen auf MDN Web Docs mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Auch wenn sie gültige CSS-Syntax sind, können die Namenskonventionen für Personen, die mit diesen Methodologien nicht vertraut sind, verwirrend sein.

### Verwenden Sie keine Resets

Um maximale Kontrolle über CSS plattformübergreifend zu haben, haben viele Menschen früher CSS-Resets verwendet, um alle Stile zu entfernen, bevor sie dann alles wieder aufbauen. Das hat sicherlich seine Vorzüge, aber gerade in der modernen Welt können CSS-Resets übertrieben sein, was zu viel zusätzlicher Zeit führt, die damit verbracht wird, Dinge zu implementieren, die ursprünglich nicht vollständig kaputt waren, wie z.B. Standardabstände und Liststyles.

### Formale Syntax und Pseudocode

Die formale Syntax ist ein integraler Bestandteil der CSS-Dokumentation auf MDN (siehe z.B. den Abschnitt [Formale Syntax](/de/docs/Web/CSS/Reference/Properties/background-image#formal_syntax) auf der `background-image`-Eigenschaftsseite). Da viele Entwickler mit der Syntax in diesem Format vertraut sind, ist es akzeptabel, Pseudocode in einer formal-syntax-ähnlichen Weise in Beschreibungen und Beispielen zu schreiben. Allerdings sollte jeglicher Code, der nicht syntaktisch korrektes CSS ist, nicht als CSS markiert werden. Syntaxfehler in `css`-Codeblöcken führen dazu, dass der Code von statischen Überprüfern nicht parsierbar ist, verwirren Leser, die gültigen CSS-Code sehen wollen, und können sogar zu unsinnigem Syntax-Highlighting führen. Markieren Sie Ihren Codeblock entweder als `plain` oder verwenden Sie das `CSSSyntaxRaw` Makro, um die vollständige formale Syntax darzustellen.

Schreiben Sie keine Beschreibungen wie diese (dies ist sowieso keine echte formale Syntax; es ist nur Pseudo-CSS mit einigen Platzhaltern):

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

Oder, wenn Sie es für angebracht halten, schreiben Sie die tatsächliche formale Syntax mit dem `CSSSyntaxRaw` Makro:

```md example-good
The `border` property is specified as a line width, a line style, and a color, in any order:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

Darüber hinaus ist ein einzelner Wert kein syntaktisch wohlgeformtes CSS. CSS-Code erfordert mindestens eine Eigenschaft und ihren Wert. Wenn Sie die `rgb()` Funktion dokumentieren, schreiben Sie Folgendes:

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

Beim Angeben von Keyframes können die Selektoren `0%` und `100%` auch als `from` und `to` geschrieben werden. Wenn eine `@keyframes`-Regel _nur_ diese beiden Selektoren enthält, verwenden Sie `from` und `to` anstelle von `0%` und `100%`. Dadurch wird Ihr Code semantischer.

Vermeiden Sie daher Folgendes:

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

Wenn Ihre `@keyframes`-Regel jedoch mehr als nur die Start- und Endbilder enthält, verwenden Sie für die Einheitlichkeit die Selektoren `0%` und `100%`.

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

### Steuerung der Spezifität

Vermeiden Sie nach Möglichkeit Überraschungen beim Erhöhen oder Verringern der Spezifität, wie zum Beispiel die Übernutzung der [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklasse oder das Duplizieren von Selektoren. Ziehen Sie stattdessen die folgenden Techniken in Betracht, um die Spezifität zu verwalten:

- Ändern der Reihenfolge der Deklarationen, um die Kaskade auszunutzen
- Umordnung der Eigenschaften in jeder Deklaration, sodass sie sich nicht gegenseitig überschreiben
- Verwendung von ID-Selektoren, in Fällen, in denen die HTML [`id` selbst gerechtfertigt ist](#verwenden_sie_klassenselektoren)

### !important

`!important` ist das letzte Mittel, das im Allgemeinen nur verwendet wird, wenn Sie etwas überschreiben müssen und es keine andere Möglichkeit gibt. Die Verwendung von `!important` ist eine schlechte Praxis, und Sie sollten es nach Möglichkeit vermeiden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Reihenfolge

Im Allgemeinen, wenn zwei Deklarationen auf dieselben Elemente abzielen, sollte diejenige mit höherer Spezifität später im Stylesheet kommen.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Innerhalb einer Deklaration sollten verwandte Eigenschaften (wie für Größenänderung, Positionierung und Farbe) zusammen sein. Benutzerdefinierte Eigenschaften sollten oben im Deklarationsblock deklariert werden, um eine schnelle Identifizierung aller verfügbaren benutzerdefinierten Eigenschaften zu ermöglichen.

### Leere Zeilen

Leere Zeilen zwischen Deklarationsblöcken sind empfohlen. Sie können sie entfernen, wenn aufeinanderfolgende Deklarationen stark verwandt sind, wie z.B. Variationen derselben Utility-Klasse.

Leere Zeilen zwischen Eigenschaften sollten sparsam verwendet werden. Fügen Sie sie nur hinzu, wenn jede Gruppe von Eigenschaften einen klaren semantischen Block bildet.

### Kurzschreibweise von Eigenschaften

- Wenn _jede_ Komponenteigenschaft einer Kurzschreibweise einen Nicht-Standardwert zugewiesen ist, verwenden Sie die Kurzschreibweise anstelle der langen Eigenschaft. Dies macht Ihren Code kürzer und leichter lesbar.

  Ersetzen Sie diese langen Eigenschaften:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  durch ihre entsprechende Kurzschreibweise:

  ```css example-good
  margin: 1em 2em;
  ```

- Wenn nur _einige_ Komponenteigenschaften einer Kurzschreibweise einen Nicht-Standardwert zugewiesen sind, ist die Verwendung der Kurzschreibweise optional. Beide sind akzeptabel:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Verwenden Sie die kürzeste verfügbare Kurzschreibweise. Schreiben Sie Folgendes:

  ```css example-good
  margin: 1em;
  ```

  Vermeiden Sie diese:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Schreiben Sie Kurzschreibweisen in der {{Glossary("Canonical_order", "kanonischen Reihenfolge")}}. Schreiben Sie Folgendes:

  ```css example-good
  /* width style color */
  border: 1px solid red;
  ```

  Schreiben Sie nicht dies:

  ```css example-bad
  border: solid red 1px;
  ```

- Für jede Kurzschreibweise verwenden Sie entweder sie oder ihre langen Komponenten, und niemals eine Mischung aus beiden, da die Überschreibungsbeziehung komplex und fehleranfällig ist. Vermeiden Sie diese:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */

  border-width: 1px;
  border-bottom-width: 5px; /* Overrides one border's width *only* */
  ```

### Verwenden Sie Klassenselektoren

Im Allgemeinen bevorzugen Sie [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) (und verwenden `class` anstelle von `id` in Ihrem HTML). Sie können kombiniert werden: Mehrere Elemente können dieselbe Klasse verwenden, und dieselbe Klasse kann für mehrere Elemente verwendet werden.

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

Verwenden Sie Klassen für das Styling und reservieren Sie IDs für nicht-CSS-Zwecke, wie z.B. für die Verwendung in JavaScript oder zum Verlinken zu einzigartigen Seitenankern (`<a href="#section1">`). In dem Fall, dass die Verwendung einer ID gerechtfertigt ist, können Sie sie als Selektor verwenden, möglicherweise um die [Spezifität zu steuern](#steuerung_der_spezifität).

### Alte Pseudo-Element-Selektoren

Die `::before`, `::after`, `::first-letter`, und `::first-line` [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) können auch mit einem einzelnen Doppelpunkt geschrieben werden (wie `:before`). Vermeiden Sie die Ein-Doppelpunkt-Syntax, da sie nicht empfohlen wird und von den Lesern als [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (`:hover`) missverstanden werden könnte.

### Komplexe Selektorlisten

Die Pseudoklassen `:is()`, `:where()`, und `:not()` akzeptieren [komplexe Selektorlisten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector). Verwenden Sie sie, um Ihren Selektor zu verkürzen.

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

Standardmäßig sollten alle Bezeichner klein geschrieben werden. Das gilt für Selektoren, Funktionen und Schlüsselwörter. Benutzerdefinierte Bezeichner sollten {{Glossary("Kebab_case", "Kebab-Case")}} verwenden, wie `--custom-property` oder `my-animation`. Siehe den [HTML-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn) für Konventionen zur Groß- und Kleinschreibung von HTML-IDs und -Klassen, die als CSS-Selektoren referenziert werden.

Ausnahmen sind Schlüsselwortwerte, die in SVG definiert sind und aus historischen Gründen {{Glossary("Camel_case", "CamelCase")}} sind und als solche geschrieben werden sollten, um die Lesbarkeit zu verbessern. Zu diesen Schlüsselwörtern gehören: [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword), {{cssxref("text-rendering")}} Werte, {{cssxref("shape-rendering")}} Werte, {{cssxref("pointer-events")}} Werte und {{cssxref("color-interpolation-filters")}} Werte.

## Farben

### Auswahl einer Notation

Im Allgemeinen, wenn die spezifische Farbpalette keine Rolle spielt, verwenden Sie standardmäßig gängige Farbnamen. Verwenden Sie beispielsweise `black` anstelle von `rgb(0 0 0)` oder `#000000`, und `green` anstelle von `chartreuse`.

Wenn eine spezifische Farbe benötigt wird, verwenden Sie standardmäßig die `rgb()` Notation. `hsl()` und andere Funktionen sollten nur verwendet werden, wo die besondere Darstellung eine Bedeutung hat (zum Beispiel, ein Farbrad oder ein Verlauf). Die hexadezimale Notation ist kürzer, aber möglicherweise weniger lesbar; sie ist mit `rgb()` austauschbar, je nachdem, welche Ihnen bequemer ist.

Egal welche Farbdefinition verwendet wird, verwenden Sie immer die aktuelle Syntax (`rgb(31 41 59 / 0.26)`), nicht die alte, komma-separierte. Verwenden Sie die Funktion ohne das `a`-Suffix (`rgb` statt `rgba`), da sie kürzer ist und keine Namensänderung erfordert, wenn Sie später entscheiden, den Alphakanal hinzuzufügen oder zu entfernen.

Wenn Sie die hexadezimale Notation verwenden, verwenden Sie immer die sechs (oder acht)stellige Version, um die kognitive Belastung zu vermeiden: `#aabbcc` statt `#abc`.

### Farbparameter

Zur Konsistenz sollten alle Parameter standardmäßig Zahlen anstelle von Prozentangaben oder Graden verwenden. Dies gilt auch für den Alphakanal. Wenn jedoch eine spezifische Darstellung sinnvoll ist (zum Beispiel bei Animationen, Verläufen oder Berechnungen), verwenden Sie den geeigneten Typ im jeweiligen Kontext.

Wenn der Alphakanal `1` beträgt, lassen Sie ihn weg. Schreiben Sie `rgb(31 41 59)` statt `rgb(31 41 59 / 1)`.

### Farbauswahl

Zusätzlich zur Empfehlung, gebräuchliche Farbnamen zu verwenden, sollte Ihre Farbpalette unseren [Zugänglichkeitsrichtlinien](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) entsprechen. Insbesondere, wenn die Farben Elemente unterscheiden (wie ein "rotes Feld" und ein "blaues Feld"), stellen Sie sicher, dass die Farben auch für Menschen mit Farbsehschwäche unterscheidbar sind. Streben Sie mindestens ein Kontrastverhältnis von 4.5:1 [Kontrastverhältnis](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (WCAG AA) zwischen Text und Hintergrund an.

## Kommentare

Verwenden Sie CSS-Kommentare, um Code zu kommentieren, der nicht selbsterklärend ist. Beachten Sie auch, dass Sie einen Abstand zwischen den Sternchen und dem Kommentar lassen sollten.

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

### Angeben von Schriftfamilien

Beim Angeben einer Schriftfamilie sollten Sie immer einen [allgemeinen Schriftfamiliennamen](/de/docs/Web/CSS/Reference/Properties/font-family#generic-name) als letzte Alternative hinzufügen. Dies stellt sicher, dass, wenn die angegebene Schriftart nicht verfügbar ist, der Browser eine passendere alternative Schriftart anzeigt. [Websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) sind von dieser Regel ausgenommen.

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

### Angeben von Schriftstärken

Bevorzugen Sie Schlüsselwortwerte wie `normal` und `bold`, sowie relative Gewichte wie `bolder` und `lighter`. Verwenden Sie Zahlenwerte nur, wenn das spezifische Gewicht gewünscht ist. Sie sollten immer `400` mit `normal` und `700` mit `bold` ersetzen, außer wenn Sie Bereiche mit variablen Schriftarten deklarieren oder zur Konsistenz mit anderen ähnlichen Deklarationen.

## Längen

### Verwenden Sie flexible/relative Einheiten

Um maximale Flexibilität über die größtmögliche Bandbreite an Geräten zu erreichen, verwenden Sie standardmäßig relative Einheiten wie `em`, `rem`, Prozentangaben und Viewport-Einheiten (wenn Sie möchten, dass sie je nach Viewport-Breite variieren) für alle Längen. Sie können mehr darüber in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) lesen.

Schreiben Sie Folgendes:

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

Verwenden Sie die moderne Bereichssyntax anstelle von `min-` und `max-`. Die erstere ermöglicht das Spezifizieren exklusiver Bereiche, ermöglicht gleichzeitig die Angabe oberer und unterer Grenzen, und ist insgesamt prägnanter und lesbarer.

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

Wenn Sie verschiedene alternative Stile haben, die durch Medienschwellenwerte ausgewählt werden, seien Sie besonders vorsichtig mit Ihren Media Queries. Denken Sie daran, dass `width` und `height` Bruchwerte sein können; stellen Sie sicher, dass bei jedem Wert nur ein alternativer Stil in Kraft ist.

### Mobile-First Media Queries

In einem Stylesheet, das [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) Stile für verschiedene Ziel-Viewport-Größen enthält, fügen Sie zuerst das Styling für den schmalen Bildschirm/Mobilgeräte ein, bevor andere Media Queries auftreten. Fügen Sie Styles für breitere Viewport-Größen durch aufeinanderfolgende Media Queries hinzu. Das Befolgen dieser Regel hat viele Vorteile, die in [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt sind.

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

## Strings

Wo auch immer Anführungszeichen in der CSS-Syntax optional sind, verwenden Sie sie, und verwenden Sie doppelte Anführungszeichen. Tun Sie Folgendes:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

Tun Sie nicht Folgendes, da die Arten von erlaubten Zeichen begrenzter sind und manchmal zu subtilen Syntaxfehlern führen können:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Beim `@import` At-Regel geben Sie den Modulpfad als String an, nicht als `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - stöbern Sie durch unsere CSS-Eigenschaftsreferenzseiten, um einige gute, prägnante, sinnvolle CSS-Schnipsel zu sehen. Unsere interaktiven Beispiele im Abschnitt "Versuchen Sie es" sind generell so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
