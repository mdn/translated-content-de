---
title: Richtlinien zum Schreiben von CSS-Codebeispielen
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die folgenden Richtlinien beschreiben, wie man CSS-Beispielcode für MDN Web Docs schreibt.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Auswahl eines Formats

Meinungen zur korrekten Einrückung, Leerzeichen und Zeilenlängen sind schon immer umstritten gewesen. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln kennenzulernen, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie beachten müssen.

### Planen Sie Ihr CSS

Bevor Sie riesige Mengen an CSS schreiben, planen Sie Ihre Stile sorgfältig. Welche allgemeinen Stile werden benötigt, welche unterschiedlichen Layouts müssen Sie erstellen, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem müssen Sie versuchen, **zu viel Überschreiben zu vermeiden**. Wenn Sie ständig Stile schreiben und dann ein paar Regeln weiter wieder aufheben, sollten Sie Ihre Strategie überdenken.

### Verwenden Sie moderne CSS-Funktionen, wenn sie unterstützt werden

Sie können neue Funktionen verwenden, sobald jeder große Browser — Chrome, Edge, Firefox und Safari — sie unterstützt (auch bekannt als {{Glossary("Baseline", "Baseline")}}).

Diese Regel gilt nicht für die CSS-Funktion, die auf der Seite dokumentiert wird (die stattdessen von den [Kriterien für die Aufnahme](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) diktiert wird). Beispielsweise können Sie [nicht standardisierte oder experimentelle](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen dokumentieren und vollständige Beispiele schreiben, die ihr Verhalten demonstrieren. Sie sollten jedoch davon absehen, diese Funktionen in Demos für andere, nicht verwandte Funktionen, wie eine Web-API, zu verwenden.

### Befolgen Sie allgemeine Best Practices

Es gibt einige allgemein anerkannte Prinzipien, die wir hier nicht umfassend darstellen müssen:

- Stellen Sie sicher, dass Ihr Code keine Syntaxfehler hat, die dazu führen können, dass die [Eigenschaft oder Deklaration ignoriert wird](/de/docs/Web/CSS/CSS_syntax/Error_handling). Standard-Syntax, die noch nicht implementiert wurde, ist akzeptabel, wenn sie unserer [allgemeinen Regel zu modernen CSS-Funktionen](#verwenden_sie_moderne_css-funktionen,_wenn_sie_unterstützt_werden) entspricht.
- Verwenden Sie keine [nicht standardisierten, veralteten oder obsoleten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) Funktionen. Diese Richtlinie erstreckt sich auf {{Glossary("Vendor_Prefix#css_prefixes", "geprefixten Funktionen")}}: Verwenden Sie die geprefixte Alternative _nur wenn_ die Standardfunktion nicht verfügbar ist (siehe unsere [allgemeine Regel zu modernen CSS-Funktionen](#verwenden_sie_moderne_css-funktionen,_wenn_sie_unterstützt_werden)). Falls der Leser eine breitere Kompatibilität benötigt, kann er selbst die geprefixte Rückfallebene hinzufügen oder einen CSS-Postprozessor verwenden.
- Schreiben Sie keinen redundanten oder nicht funktionalen Code, der häufig ein Indikator für Bugs oder Überbleibsel von Refactorings ist. Dazu gehören wiederholte Eigenschaften in einer Deklaration, leere Deklarationen, leere Kommentare oder Selektoren, die keine Elemente treffen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessor-Syntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/) im Beispielcode. Auf MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Das Verwenden von Präprozessoren würde nur die Hürde zum Verständnis der Beispiele erhöhen und Leser möglicherweise verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

Im selben Geist der vorherigen Richtlinie schreiben Sie keine Beispielcodes auf den MDN Web Docs, die eine spezifische CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) nutzen. Auch wenn sie gültige CSS-Syntax sind, können die Namenskonventionen für Personen, die nicht mit diesen Methodologien vertraut sind, verwirrend sein.

### Verwenden Sie keine Resets

Um maximale Kontrolle über CSS auf verschiedenen Plattformen zu haben, verwendeten viele Menschen früher CSS-Resets, um alle Stile zu entfernen, bevor sie sie wieder neu aufbauten. Dies hat sicherlich seine Vorteile, aber insbesondere in der modernen Welt können CSS-Resets übertrieben sein, was dazu führt, dass viel zusätzliche Zeit damit verbracht wird, Dinge neu zu implementieren, die ursprünglich nicht vollständig kaputt waren, wie Standardmargen und Listenelemente.

### Formale Syntax und Pseudocode

Formale Syntax ist ein integraler Bestandteil der MDN-CSS-Dokumentation (ein Beispiel sehen Sie im Abschnitt [Formale Syntax](/de/docs/Web/CSS/Reference/Properties/background-image#formal_syntax) auf der Seite zur `background-image`-Eigenschaft). Da viele Entwickler mit der Syntax in diesem Format vertraut sind, ist es akzeptabel, Pseudocode in einer formal-syntax-ähnlichen Art und Weise in Beschreibungen und Beispielen zu schreiben. Jeder Code, der nicht syntaktisch korrektes CSS ist, sollte jedoch nicht als CSS markiert werden. Syntaxfehler in `css`-Codeblöcken führen dazu, dass der Code von statischen Prüfprogrammen nicht geparst werden kann, Leser verwirren, die mit gültigem CSS-Code rechnen, und möglicherweise zu unsinnigem Syntax-Highlighting führen. Markieren Sie entweder Ihren Codeblock als `plain` oder verwenden Sie das `CSSSyntaxRaw`-Makro, um die gesamte formale Syntax anzuzeigen.

Schreiben Sie keine Beschreibungen wie diese (dies ist keine echte formale Syntax; es ist nur pseudo-CSS mit einigen Platzhaltern):

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

Oder, wann immer Sie es für angemessen halten, schreiben Sie tatsächliche formale Syntax mit dem `CSSSyntaxRaw`-Makro:

```md example-good
The `border` property is specified as a line width, a line style, and a color, in any order:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

Außerdem ist ein einzelner Wert kein syntaktisch korrektes CSS. CSS-Code erfordert mindestens eine Eigenschaft und ihren Wert. Wenn Sie die `rgb()`-Funktion dokumentieren, schreiben Sie dies:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

Verwenden Sie nicht diesen Stil:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

Beachten Sie, dass diese Regel nicht für den ersten Codeblock im Abschnitt "Syntax" gilt, der stattdessen durch [Syntax-Abschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax) angegeben ist und erfordert, dass Funktionen ohne den Eigenschaftsnamen geschrieben werden.

## Animationen

### Keyframe-Selektoren

Beim Spezifizieren von Keyframe-Selektoren können die Selektoren `0%` und `100%` auch als `from` und `to` geschrieben werden. Wenn eine `@keyframes`-Regel _nur_ diese beiden Selektoren enthält, verwenden Sie `from` und `to` statt `0%` und `100%`. Dies macht Ihren Code semantischer.

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

Andererseits, wenn Ihre `@keyframes`-Regel mehr als nur die Start- und Endframes enthält, verwenden Sie die Selektoren `0%` und `100%` für Einheitlichkeit.

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

Wenn möglich, vermeiden Sie Überraschungen durch Erhöhen oder Verringern der Spezifität, wie z.B. die übermäßige Nutzung der [`:where()`](/de/docs/Web/CSS/:where)-Pseudoklasse oder das Duplizieren von Selektoren. Erwägen Sie stattdessen die folgenden Techniken, um die Spezifität zu verwalten:

- Ändern der Reihenfolge der Deklarationen, um die Vorteile der Kaskade zu nutzen
- Umordnen von Eigenschaften in jeder Deklaration, sodass sie sich nicht gegenseitig überschreiben
- Verwenden von ID-Selektoren in Fällen, in denen das HTML-`id` selbst gerechtfertigt ist (siehe [Verwenden von Klassenselektoren](#verwenden_sie_klassenselektoren))

### !important

`!important` ist das letzte Mittel, das im Allgemeinen nur verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis und sollte vermieden werden, wo immer es möglich ist.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Reihenfolge

Im Allgemeinen sollte, wenn zwei Deklarationen auf dasselbe Element oder dieselben Elemente abzielen, diejenige mit höherer Spezifität später im Stylesheet stehen.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Innerhalb einer Deklaration sollten verwandte Eigenschaften (wie Größenanpassung, Positionierung und Farbe) zusammengefasst werden. Benutzerdefinierte Eigenschaften sollten oben im Deklarationsblock deklariert werden, was eine schnelle Identifizierung aller verfügbaren benutzerdefinierten Eigenschaften ermöglicht.

### Leere Zeilen

Leere Zeilen zwischen Deklarationsblöcken werden empfohlen. Sie können sie entfernen, wenn aufeinanderfolgende Deklarationen stark miteinander verwandt sind, z.B. Variationen derselben Dienstleistungsklasse.

Leere Zeilen zwischen Eigenschaften sollten sparsam verwendet werden. Fügen Sie sie nur hinzu, wenn jede Gruppe von Eigenschaften einen klaren semantischen Block bildet.

### Shorthand-Eigenschaften

- Wenn _jede_ Bestandteilseigenschaft einer Shorthand-Eigenschaft einen nicht standardmäßigen Wert zugewiesen bekommt, verwenden Sie die Shorthand-Eigenschaft an Stelle der langen Eigenschaften. Das macht Ihren Code kürzer und leichter lesbar.

  Ersetzen Sie diese langen Eigenschaften:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  durch ihre entsprechenden Shorthand-Eigenschaften:

  ```css example-good
  margin: 1em 2em;
  ```

- Wenn nur _einige_ Bestandteilseigenschaften einer Shorthand-Eigenschaft einen nicht standardmäßigen Wert zugewiesen bekommen, ist die Verwendung der Shorthand-Eigenschaft optional. Beide sind akzeptabel:

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

- Für jede Shorthand sollten Sie entweder diese oder ihre langen Bestandteile verwenden, niemals eine Mischung aus beiden, da das Überschreibungsverhältnis komplex und fehleranfällig ist. Vermeiden Sie diese:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oops, margin-top is ignored */

  border-width: 1px;
  border-bottom-width: 5px; /* Overrides one border's width *only* */
  ```

### Verwenden Sie Klassenselektoren

In der Regel sollten [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) bevorzugt (und `class` anstelle von `id` in Ihrem HTML verwendet) werden. Sie können zusammengesetzt werden: Mehrere Elemente können dieselbe Klasse nutzen, und dieselbe Klasse kann für mehrere Elemente verwendet werden.

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

Verwenden Sie Klassen für das Styling und reservieren Sie IDs für nicht-CSS-Zwecke, wie z.B. für die Verwendung in JavaScript oder zum Verlinken zu eindeutigen Seitenankern (`<a href="#section1">`). In dem Fall, dass die Verwendung einer ID gerechtfertigt ist, können Sie sie als Selektor verwenden, um möglicherweise die [Spezifität zu steuern](#steuerung_der_spezifität).

### Alte Pseudoelement-Selektoren

Die Pseudoelemente `::before`, `::after`, `::first-letter` und `::first-line` können auch mit einfachen Doppelpunkten (wie `:before`) geschrieben werden. Vermeiden Sie die einfache Doppelpunktsyntax, da sie nicht empfohlen wird und von Lesern möglicherweise als [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) (`:hover`) falsch erkannt werden könnte.

### Komplexe Selektorlisten

Die Pseudoklassen `:is()`, `:where()` und `:not()` akzeptieren [komplexe Selektorlisten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector). Verwenden Sie sie, um Ihren Selektor zu verkürzen.

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

## Groß-/Kleinschreibung

Standardmäßig sollten alle Bezeichner kleingeschrieben werden. Dies gilt für Selektoren, Funktionen und Schlüsselwörter. Benutzerdefinierte Bezeichner sollten {{Glossary("Kebab_case", "kebab-case")}} verwenden, wie `--custom-property` oder `my-animation`. Sehen Sie die [HTML-Stilrichtlinie](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn) für Groß-/Kleinschreibungs-Konventionen von HTML-IDs und Klassen, die als CSS-Selektoren referenziert werden.

Ausnahmen umfassen Schlüsselwortwerte, die im SVG für historische Gründe im {{Glossary("Camel_case", "camelCase")}} definiert sind und so geschrieben werden sollten, um die Lesbarkeit zu steigern. Diese Schlüsselwörter umfassen: [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), {{cssxref("text-rendering")}}-Werte, {{cssxref("shape-rendering")}}-Werte, {{cssxref("pointer-events")}}-Werte und {{cssxref("color-interpolation-filters")}}-Werte.

## Farben

### Auswahl einer Notation

Im Allgemeinen, wenn eine spezifische Farbpalette keine Rolle spielt, verwenden Sie bevorzugt benannte Farben. Verwenden Sie beispielsweise `black` anstelle von `rgb(0 0 0)` oder `#000000`, und `green` statt `chartreuse`.

Falls eine spezifische Farbe benötigt wird, verwenden Sie bevorzugt die `rgb()`-Notation. `hsl()` und andere Funktionen sollten nur genutzt werden, wenn die spezielle Repräsentation eine Bedeutung hat (zum Beispiel ein Farbkreis oder ein Verlauf). Die hexadezimale Notation ist kürzer, kann aber weniger lesbar sein; sie ist je nach Bequemlichkeit austauschbar mit `rgb()`.

Welche Farb-Funktion Sie auch nutzen, verwenden Sie immer die moderne Syntax (`rgb(31 41 59 / 0.26)`), nicht die veraltete, kommagetrennte. Verwenden Sie die Funktion ohne das `a`-Suffix (`rgb` statt `rgba`), da es kürzer ist und der Name nicht geändert werden muss, wenn Sie sich später entscheiden, den Alpha-Kanal hinzuzufügen oder zu entfernen.

Bei der Verwendung der hexadezimalen Notation verwenden Sie immer die sechs (oder acht) Stellen-Version, um die kognitive Last zu vermeiden: `#aabbcc` statt `#abc`.

### Farbparameter

Zur Konsistenz sollten alle Parameter standardmäßig Zahlen anstelle von Prozentwerten oder Graden verwenden. Dies gilt auch für den Alpha-Kanal. Jedoch, wenn eine spezifische Darstellung sinnvoll ist (z.B. bei Animationen, Verläufen oder Berechnungen), verwenden Sie den geeigneten Typ im Kontext.

Wenn der Alpha-Kanal `1` ist, lassen Sie ihn weg. Schreiben Sie `rgb(31 41 59)` statt `rgb(31 41 59 / 1)`.

### Farben auswählen

Zusätzlich zur Empfehlung, benannte Farben zu verwenden, sollte Ihre Farbpalette unseren [Barrierefreiheitsrichtlinien](/de/docs/Web/Accessibility/Guides/Colors_and_Luminance) entsprechen. Insbesondere, wenn die Farben Elemente unterscheiden (wie eine "rote Box" und eine "blaue Box"), stellen Sie sicher, dass die Farben für Menschen mit Farbsehschwäche unterscheidbar sind. Streben Sie ein Verhältnis von mindestens 4,5:1 [Kontrastverhältnis](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (WCAG AA) zwischen Text und Hintergrund an.

## Kommentare

Verwenden Sie CSS-Stilkommentare, um Code zu kommentieren, der sich nicht selbst dokumentiert. Beachten Sie auch, dass Sie einen Abstand zwischen den Sternchen und dem Kommentar lassen sollten.

```css example-good
/* This is a CSS-style comment */
```

Platzieren Sie Ihre Kommentare auf separaten Zeilen vor dem Code, auf den sie sich beziehen, so wie hier:

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

Geben Sie bei der Angabe einer Schriftfamilie immer einen [generischen Schriftfamiliennamen](/de/docs/Web/CSS/Reference/Properties/font-family#generic-name) als letzte Rückfalloption an. Dadurch wird sichergestellt, dass, wenn die angegebene Schriftart nicht verfügbar ist, der Browser eine besser geeignete Ersatzschriftart anzeigt. [Web-sichere Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) sind von dieser Regel ausgenommen.

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

Bevorzugen Sie Schlüsselwortwerte wie `normal` und `bold`, sowie relative Stärken wie `bolder` und `lighter`. Verwenden Sie Zahlenwerte nur, wenn das spezifische Gewicht gewünscht ist. Sie sollten immer `400` durch `normal` und `700` durch `bold` ersetzen, außer beim Deklarieren von Bereichen mit variablen Schriftarten oder aus Konsistenz mit anderen ähnlichen Deklarationen.

## Längen

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität über den größtmöglichen Bereich von Geräten, verwenden Sie standardmäßig relative Einheiten wie `em`, `rem`, Prozentwerte und Ansichtsbreiteneinheiten (wenn Sie wollen, dass sie je nach Ansichtsbreite variieren), für alle Längen. Lesen Sie mehr dazu in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units).

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

Verwenden Sie die moderne Bereichssyntax an Stelle von `min-` und `max-`. Erstere ermöglicht die Spezifikation exklusiver Bereiche, erlaubt das gleichzeitige Festlegen von oberen und unteren Grenzen und ist insgesamt prägnanter und lesbarer.

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

Dieses Prinzip erstreckt sich auch auf die nicht-CSS-Verwendung von Media Queries, wie das [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribut von `<link>`-Elementen oder [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia).

Wenn Sie verschiedene alternative Stile durch Mediaschwellen ausgewählt haben, seien Sie besonders vorsichtig mit Ihren Media Queries. Denken Sie daran, dass `width` und `height` gebrochene Werte sein können; stellen Sie sicher, dass bei jedem Wert nur genau ein alternativer Stil in Kraft tritt.

### Mobile-First-Media-Queries

In einem Stylesheet, das [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für verschiedene Ziel-Viewport-Größen enthält, fügen Sie zuerst das schmalere Bildschirm/Handy-Styling ein, bevor weitere Media Queries auftreten. Fügen Sie dann Styling für breitere Viewport-Größen über aufeinanderfolgende Media Queries hinzu. Das Befolgen dieser Regel hat viele Vorteile, die in [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

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

Wo auch immer Anführungszeichen in der CSS-Syntax optional sind, verwenden Sie sie und nutzen Sie doppelte Anführungszeichen. Machen Sie dies:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

Vermeiden Sie das folgende, da die Art der zugelassenen Zeichen stärker eingeschränkt ist und manchmal zu subtilen Syntaxfehlern führt:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Beim `@import`-At-Zeichen spezifizieren Sie den Modulpfad als Zeichenkette, nicht als `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - Durchsuchen Sie unsere CSS-Property-Referenzseiten, um einige gute, prägnante, bedeutungsvolle CSS-Snippets zu überprüfen. Unsere interaktiven Beispiele im "Try it"-Abschnitt sind in der Regel so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
