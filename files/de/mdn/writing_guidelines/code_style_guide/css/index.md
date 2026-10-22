---
title: Richtlinien zum Schreiben von CSS-Codebeispielen
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

Die folgenden Richtlinien beschreiben, wie Sie CSS-Codebeispiele für MDN Web Docs schreiben.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Ein Format wählen

Die Meinungen über die richtige Einrückung, Leerzeichen und Zeilenlängen gehen seit jeher auseinander. Diskussionen darüber lenken vom Erstellen und Pflegen der Inhalte ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) zur Codeformatierung, um einen einheitlichen Codestil zu gewährleisten und fachfremde Diskussionen zu vermeiden. Die aktuellen Regeln finden Sie in unserer [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json); weitere Informationen bietet die [Prettier-Dokumentation](https://prettier.io/docs/index.html).

Prettier formatiert den gesamten Code und sorgt für einen einheitlichen Stil. Dennoch gibt es einige zusätzliche Regeln, die Sie beachten müssen.

### Planen Sie Ihr CSS

Bevor Sie umfangreichen CSS-Code schreiben, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt? Welche unterschiedlichen Layouts müssen Sie erstellen? Welche gezielten Überschreibungen sind erforderlich, und lassen sie sich wiederverwenden? Vor allem sollten Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie immer wieder Styles schreiben und sie wenige Regeln später wieder aufheben, sollten Sie Ihre Strategie wahrscheinlich überdenken.

### Verwenden Sie moderne CSS-Features, wenn sie unterstützt werden

Sie können neue Features verwenden, sobald alle großen Browser – Chrome, Edge, Firefox und Safari – sie unterstützen (siehe {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für das CSS-Feature, das auf der jeweiligen Seite dokumentiert wird. Dafür gelten stattdessen die [Aufnahmekriterien](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion). Sie können beispielsweise [nicht standardisierte oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Features dokumentieren und vollständige Beispiele schreiben, die deren Verhalten veranschaulichen. Verwenden Sie solche Features jedoch nicht in Demos zu anderen, nicht damit zusammenhängenden Features, etwa einer Web-API.

### Befolgen Sie gängige bewährte Vorgehensweisen

Einige allgemein anerkannte Grundsätze müssen wir hier nicht ausführlich erläutern:

- Achten Sie darauf, dass Ihr Code keine Syntaxfehler enthält, durch die eine [Property oder Deklaration ignoriert werden](/de/docs/Web/CSS/Guides/Syntax/Error_handling) könnte. Standardsyntax, die noch nicht implementiert wurde, ist zulässig, sofern sie unserer [allgemeinen Regel zu modernen CSS-Features](#verwenden_sie_moderne_css-features,_wenn_sie_unterstützt_werden) entspricht.
- Verwenden Sie keine [nicht standardisierten, veralteten oder obsoleten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Features. Diese Richtlinie gilt auch für {{Glossary("Vendor_Prefix#css_prefixes", "Features mit Präfix")}}: Verwenden Sie die Variante mit Präfix _nur dann_, wenn das standardisierte Feature nicht verfügbar ist (siehe unsere [allgemeine Regel zu modernen CSS-Features](#verwenden_sie_moderne_css-features,_wenn_sie_unterstützt_werden)). Wenn Lesende eine breitere Kompatibilität benötigen, können sie selbst eine Fallback-Variante mit Präfix ergänzen oder einen CSS-Postprozessor verwenden.
- Schreiben Sie keinen redundanten oder wirkungslosen Code, da dieser häufig auf Fehler oder Überbleibsel einer Umstrukturierung hinweist. Dazu gehören wiederholte Properties innerhalb eines Deklarationsblocks, leere Deklarationen, leere Kommentare und Selektoren, die auf keine Elemente zutreffen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie in Beispielcode keine Präprozessorsyntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/). Auf MDN Web Docs dokumentieren wir reines CSS. Präprozessoren erschweren lediglich das Verständnis der Beispiele und können Lesende verwirren.

### Verwenden Sie keine bestimmten CSS-Methodologien

Schreiben Sie im Sinne der vorherigen Richtlinie auf MDN Web Docs keinen Beispielcode, der einer bestimmten CSS-Methodologie wie [BEM](https://css-tricks.com/bem-101/) oder [SMACSS](https://smacss.com/) folgt. Obwohl die resultierende Syntax gültiges CSS ist, können die Namenskonventionen Menschen verwirren, die mit diesen Methodologien nicht vertraut sind.

### Verwenden Sie keine CSS-Resets

Um CSS plattformübergreifend möglichst umfassend zu kontrollieren, verwendeten früher viele Menschen CSS-Resets: Sie entfernten zunächst sämtliche Styles, um anschließend alles selbst neu aufzubauen. Das hat durchaus Vorteile. Gerade heute können CSS-Resets jedoch übertrieben sein, weil dadurch viel zusätzliche Zeit in die erneute Implementierung von Dingen fließt, die ursprünglich nicht unbedingt problematisch waren – etwa Standardabstände und Listenformatierungen.

### Formale Syntax und Pseudocode

Formale Syntax ist ein wesentlicher Bestandteil der CSS-Dokumentation von MDN. Ein Beispiel finden Sie im Abschnitt [Formale Syntax](/de/docs/Web/CSS/Reference/Properties/background-image#formal_syntax) auf der Seite zur Property `background-image`. Da viele Entwicklerinnen und Entwickler mit diesem Syntaxformat vertraut sind, können Sie in Beschreibungen und Beispielen Pseudocode verwenden, der an formale Syntax angelehnt ist. Code, der kein syntaktisch korrektes CSS ist, darf jedoch nicht als CSS gekennzeichnet werden. Syntaxfehler in `css`-Codeblöcken verhindern, dass statische Prüfprogramme den Code parsen können, verwirren Lesende, die gültigen CSS-Code erwarten, und können sogar zu unsinniger Syntaxhervorhebung führen. Kennzeichnen Sie den Codeblock stattdessen als `plain`, oder verwenden Sie das Makro `CSSSyntaxRaw`, um die vollständige formale Syntax darzustellen.

Schreiben Sie Beschreibungen nicht so (dies ist ohnehin keine echte formale Syntax, sondern lediglich Pseudo-CSS mit Platzhaltern):

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

Oder schreiben Sie, wenn es angemessen erscheint, echte formale Syntax mit dem Makro `CSSSyntaxRaw`:

```md example-good
The `border` property is specified as a line width, a line style, and a color, in any order:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

Außerdem ist ein einzelner Wert kein syntaktisch korrektes CSS. CSS erfordert mindestens eine Property und ihren Wert. Wenn Sie die Funktion `rgb()` dokumentieren, schreiben Sie Folgendes:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

Verwenden Sie nicht diesen Stil:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

Beachten Sie, dass diese Regel nicht für den ersten Codeblock im Abschnitt „Syntax“ gilt. Für diesen gelten stattdessen die Vorgaben für [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax), nach denen Funktionen ohne Property-Namen geschrieben werden müssen.

## Animationen

### Keyframe-Selektoren

Bei der Angabe von Keyframes können die Selektoren `0%` und `100%` auch als `from` und `to` geschrieben werden. Wenn eine `@keyframes`-Regel _nur diese beiden Selektoren enthält_, verwenden Sie `from` und `to` statt `0%` und `100%`. Dadurch wird Ihr Code aussagekräftiger.

Vermeiden Sie also Folgendes:

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

Wenn Ihre `@keyframes`-Regel hingegen mehr als nur den Anfangs- und den Endzustand enthält, verwenden Sie aus Gründen der Einheitlichkeit die Selektoren `0%` und `100%`.

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

## Kaskade, Properties und Selektoren

### Spezifität steuern

Vermeiden Sie nach Möglichkeit unerwartete Effekte beim Erhöhen oder Verringern der Spezifität, etwa durch übermäßigen Einsatz der Pseudoklasse [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) oder durch das Duplizieren von Selektoren. Ziehen Sie stattdessen folgende Techniken in Betracht, um die Spezifität zu steuern:

- Die Reihenfolge der Deklarationen ändern, um die Kaskade zu nutzen
- Properties innerhalb der Deklarationsblöcke so umordnen, dass sie sich nicht gegenseitig überschreiben
- ID-Selektoren verwenden, wenn das HTML-Attribut [`id` selbst gerechtfertigt ist](#verwenden_sie_klassenselektoren)

### !important

`!important` ist das letzte Mittel und sollte im Allgemeinen nur verwendet werden, wenn Sie etwas überschreiben müssen und es keine andere Möglichkeit gibt. Die Verwendung von `!important` gilt als schlechte Praxis und sollte möglichst vermieden werden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Reihenfolge

Wenn sich zwei Deklarationsblöcke auf dasselbe Element oder dieselben Elemente beziehen, sollte der Block mit der höheren Spezifität im Stylesheet im Allgemeinen später stehen.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Ordnen Sie innerhalb eines Deklarationsblocks zusammengehörige Properties möglichst nebeneinander an, etwa solche für Größe, Positionierung und Farbe. Custom Properties sollten am Anfang des Deklarationsblocks stehen, damit alle verfügbaren Custom Properties schnell zu erkennen sind.

### Leerzeilen

Leerzeilen zwischen Deklarationsblöcken werden empfohlen. Sie können darauf verzichten, wenn aufeinanderfolgende Blöcke eng zusammenhängen, etwa bei Varianten derselben Utility-Klasse.

Setzen Sie Leerzeilen zwischen Properties sparsam ein. Fügen Sie sie nur hinzu, wenn jede Property-Gruppe einen klar abgegrenzten inhaltlichen Bereich bildet.

### Shorthand-Properties

- Wenn _jede_ einzelne Property einer Shorthand-Property einen Wert erhält, der vom Standardwert abweicht, verwenden Sie die Shorthand-Property statt der einzelnen Longhand-Properties. Dadurch wird Ihr Code kürzer und leichter lesbar.

  Ersetzen Sie diese Longhand-Properties:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  durch die entsprechende Shorthand-Property:

  ```css example-good
  margin: 1em 2em;
  ```

- Wenn nur _einige_ der einzelnen Properties einer Shorthand-Property Werte erhalten, die vom Standardwert abweichen, ist die Verwendung der Shorthand-Property optional. Beide Varianten sind zulässig:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Verwenden Sie die kürzeste verfügbare Shorthand-Syntax. Schreiben Sie:

  ```css example-good
  margin: 1em;
  ```

  Vermeiden Sie:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Schreiben Sie Shorthand-Properties in der {{Glossary("Canonical_order", "kanonischen Reihenfolge")}}. Schreiben Sie:

  ```css example-good
  /* width style color */
  border: 1px solid red;
  ```

  Schreiben Sie nicht:

  ```css example-bad
  border: solid red 1px;
  ```

- Verwenden Sie bei jeder Shorthand-Property entweder diese oder ihre einzelnen Longhand-Properties, aber niemals eine Mischung aus beidem. Das Zusammenspiel bei Überschreibungen ist komplex und fehleranfällig. Vermeiden Sie:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */

  border-width: 1px;
  border-bottom-width: 5px; /* Overrides one border's width *only* */
  ```

### Verwenden Sie Klassenselektoren

Bevorzugen Sie im Allgemeinen [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) (und verwenden Sie in Ihrem HTML `class` statt `id`). Klassen sind flexibel einsetzbar: Mehrere Elemente können dieselbe Klasse verwenden, und einem Element können mehrere Klassen zugewiesen werden.

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

Verwenden Sie Klassen für die Gestaltung und reservieren Sie IDs für Zwecke außerhalb von CSS, beispielsweise für JavaScript oder für Links zu eindeutigen Ankern auf einer Seite (`<a href="#section1">`). Wenn die Verwendung einer ID gerechtfertigt ist, können Sie sie auch als Selektor einsetzen, gegebenenfalls um die [Spezifität zu steuern](#spezifität_steuern).

### Ältere Schreibweise von Pseudoelement-Selektoren

Die [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::before`, `::after`, `::first-letter` und `::first-line` können auch mit einem einzelnen Doppelpunkt geschrieben werden (etwa `:before`). Vermeiden Sie diese Schreibweise, da von ihr abgeraten wird und Lesende sie mit einer [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wie `:hover` verwechseln könnten.

### Komplexe Selektorlisten

Die Pseudoklassen `:is()`, `:where()` und `:not()` akzeptieren [komplexe Selektorlisten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector). Nutzen Sie sie, um Ihre Selektoren zu verkürzen.

Schreiben Sie:

```css example-good
input:not(:checked, :disabled) {
  /* ... */
}
```

Schreiben Sie nicht:

```css example-bad
input:not(:checked):not(:disabled) {
  /* ... */
}
```

## Groß- und Kleinschreibung

Standardmäßig sollten alle Bezeichner kleingeschrieben werden. Das gilt für Selektoren, Funktionen und Schlüsselwörter. Benutzerdefinierte Bezeichner sollten {{Glossary("Kebab_case", "Kebab-Case")}} verwenden, etwa `--custom-property` oder `my-animation`. Die Konventionen zur Groß- und Kleinschreibung von HTML-IDs und -Klassen, die als CSS-Selektoren referenziert werden, finden Sie im [HTML-Stilleitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn).

Eine Ausnahme bilden Schlüsselwortwerte, die in SVG definiert sind. Aus historischen Gründen verwenden sie {{Glossary("Camel_case", "camelCase")}} und sollten der Lesbarkeit halber auch so geschrieben werden. Dazu gehören [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) sowie Werte von {{cssxref("text-rendering")}}, {{cssxref("shape-rendering")}}, {{cssxref("pointer-events")}} und {{cssxref("color-interpolation-filters")}}.

## Farben

### Eine Schreibweise wählen

Wenn die genaue Farbpalette keine Rolle spielt, verwenden Sie grundsätzlich gebräuchliche Farbnamen. Verwenden Sie beispielsweise `black` statt `rgb(0 0 0)` oder `#000000` und `green` statt `chartreuse`.

Wenn eine bestimmte Farbe benötigt wird, verwenden Sie standardmäßig die Schreibweise `rgb()`. `hsl()` und andere Funktionen sollten Sie nur verwenden, wenn die jeweilige Darstellungsform eine Bedeutung hat, etwa bei einem Farbkreis oder einem Farbverlauf. Die Hexadezimalschreibweise ist kürzer, kann aber schlechter lesbar sein. Sie können sie anstelle von `rgb()` verwenden, wenn das für Sie praktischer ist.

Unabhängig davon, welche Farbfunktion Sie verwenden, nutzen Sie immer die moderne Syntax (`rgb(31 41 59 / 0.26)`) und nicht die ältere, kommagetrennte Syntax. Verwenden Sie die Funktion immer ohne das Suffix `a` (`rgb` statt `rgba`): Das ist kürzer, und Sie müssen den Funktionsnamen nicht ändern, wenn Sie später den Alphakanal hinzufügen oder entfernen.

Verwenden Sie bei der Hexadezimalschreibweise immer die Version mit sechs beziehungsweise acht Stellen, um die Lesbarkeit zu erleichtern: `#aabbcc` statt `#abc`.

### Farbparameter

Verwenden Sie aus Gründen der Einheitlichkeit für alle Parameter standardmäßig Zahlen statt Prozentangaben oder Gradwerten. Das gilt auch für den Alphakanal. Wenn eine bestimmte Darstellungsform jedoch sinnvoll ist, etwa bei Animationen, Farbverläufen oder Berechnungen, verwenden Sie den für den Kontext passenden Typ.

Wenn der Alphakanal `1` ist, lassen Sie ihn weg. Schreiben Sie `rgb(31 41 59)` statt `rgb(31 41 59 / 1)`.

### Farben auswählen

Zusätzlich zur Empfehlung, gebräuchliche Farbnamen zu verwenden, sollte Ihre Farbpalette unseren [Richtlinien zur Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) entsprechen. Wenn Farben Elemente voneinander unterscheiden sollen, etwa ein „rotes Kästchen“ und ein „blaues Kästchen“, achten Sie insbesondere darauf, dass Menschen mit Farbsehschwäche diese Farben unterscheiden können. Streben Sie zwischen Text und Hintergrund ein [Kontrastverhältnis](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) von mindestens 4,5:1 an (WCAG AA).

## Kommentare

Verwenden Sie CSS-Kommentare, um Code zu erläutern, der nicht für sich selbst spricht. Achten Sie darauf, zwischen den Sternchen und dem Kommentartext jeweils ein Leerzeichen zu lassen.

```css example-good
/* This is a CSS-style comment */
```

Schreiben Sie Kommentare in eigene Zeilen unmittelbar vor den Code, auf den sie sich beziehen:

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

Fügen Sie bei der Angabe einer Schriftfamilie immer als letzten Fallback den Namen einer [generischen Schriftfamilie](/de/docs/Web/CSS/Reference/Properties/font-family#generic-name) hinzu. So stellt der Browser den Text in einer besser geeigneten Ersatzschrift dar, wenn die angegebene Schrift nicht verfügbar ist. [Websichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) sind von dieser Regel ausgenommen.

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

### Schriftstärken angeben

Bevorzugen Sie Schlüsselwortwerte wie `normal` und `bold` sowie relative Stärken wie `bolder` und `lighter`. Verwenden Sie Zahlenwerte nur, wenn eine bestimmte Schriftstärke gewünscht ist. Ersetzen Sie `400` immer durch `normal` und `700` durch `bold`, außer wenn Sie Wertebereiche für variable Schriftarten deklarieren oder die Einheitlichkeit mit anderen ähnlichen Deklarationen wahren möchten.

## Längen

### Verwenden Sie flexible oder relative Einheiten

Für größtmögliche Flexibilität auf möglichst vielen Geräten sollten Sie für alle Längen standardmäßig relative Einheiten wie `em`, `rem`, Prozentwerte und Viewport-Einheiten verwenden (Letztere, wenn die Werte von der Viewport-Breite abhängen sollen). Weitere Informationen finden Sie in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units).

Schreiben Sie:

```css example-good
margin: 0.5em;
max-width: 50%;
```

Vermeiden Sie:

```css example-bad
margin: 20px;
max-width: 500px;
```

## Media Queries

### Bereichssyntax

Verwenden Sie die moderne Bereichssyntax statt `min-` und `max-`. Damit lassen sich exklusive Bereiche sowie obere und untere Grenzen gleichzeitig angeben. Insgesamt ist sie zudem kürzer und leichter lesbar.

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

Dieser Grundsatz gilt auch für die Verwendung von Media Queries außerhalb von CSS, etwa im Attribut [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) von `<link>`-Elementen oder in [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

Wenn Sie unterschiedliche alternative Styles anhand von Media-Schwellenwerten auswählen, achten Sie besonders sorgfältig auf Ihre Media Queries. Denken Sie daran, dass `width` und `height` auch Bruchwerte annehmen können. Stellen Sie sicher, dass für jeden Wert genau einer der alternativen Styles wirksam ist.

### Mobile-First-Media-Queries

Wenn ein Stylesheet [Media-Query](/de/docs/Web/CSS/Guides/Media_queries/Using)-Styles für unterschiedliche Viewport-Größen enthält, definieren Sie zuerst die Styles für schmale Bildschirme beziehungsweise Mobilgeräte, bevor die erste Media Query erscheint. Ergänzen Sie anschließend in aufeinanderfolgenden Media Queries die Styles für breitere Viewports. Dieser Ansatz bietet viele Vorteile, die unter [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erläutert werden.

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

Setzen Sie überall dort, wo Anführungszeichen in der CSS-Syntax optional sind, doppelte Anführungszeichen. Gehen Sie so vor:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

Vermeiden Sie Folgendes, da die zulässigen Zeichen dabei stärker eingeschränkt sind und mitunter schwer erkennbare Syntaxfehler entstehen:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Geben Sie bei der At-Regel `@import` den Modulpfad als Zeichenfolge an, nicht als `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) – auf unseren Referenzseiten zu CSS-Properties finden Sie gute, knappe und aussagekräftige CSS-Beispiele. Die interaktiven Beispiele im Abschnitt „Ausprobieren“ folgen im Allgemeinen den Richtlinien auf dieser Seite.
