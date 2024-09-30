---
title: Richtlinien für das Schreiben von CSS-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 4680281518d584657960f984b3b720d79b3119ab
---

{{MDNSidebar}}

Die folgenden Richtlinien beschreiben, wie CSS-Beispielcode für MDN Web Docs geschrieben wird.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Wahl eines Formats

Meinungen zum richtigen Einrücken, zu Leerzeichen und Zeilenlängen sind immer umstritten gewesen. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Stil des Codes konsistent zu halten (und um vom Thema abschweifende Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie beachten müssen.

### Planen Sie Ihr CSS

Bevor Sie sich in das Schreiben großer CSS-Blöcke stürzen, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche unterschiedlichen Layouts müssen erstellt werden, welche speziellen Overrides müssen erstellt werden, und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viel überschreibende Styles zu vermeiden**. Wenn Sie immer wieder Styles schreiben und diese dann wenige Regeln später wieder aufheben, sollten Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität auf einer möglichst breiten Palette von Geräten ist es eine gute Idee, Container, Abstände usw. mit relativen Einheiten wie ems und rems oder Prozentsätzen und Viewport-Einheiten zu dimensionieren, wenn Sie möchten, dass sie in Abhängigkeit von der Viewport-Breite variieren. Weitere Informationen dazu finden Sie in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units).

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessorsyntax, wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/), im Beispielcode. Auf MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Die Verwendung von Präprozessoren würde nur die Hürde zum Verständnis der Beispiele erhöhen und die Leser möglicherweise verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

In demselben Geist wie die vorherige Richtlinie: Schreiben Sie keine Beispielcodes auf MDN Web Docs mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/). Auch wenn sie gültige CSS-Syntax sind, können die Namenskonventionen verwirrend sein für Personen, die nicht mit diesen Methodologien vertraut sind.

### Verwenden Sie keine Resets

Für maximale Kontrolle über CSS auf verschiedenen Plattformen verwendeten früher viele Leute CSS-Resets, um jeden Style zu entfernen, bevor sie ihn neu aufbauten. Das hat sicherlich seine Vorzüge, aber besonders in der modernen Welt können CSS-Resets übertrieben sein, was zu viel zusätzlicher Zeit führt, die mit der erneuten Implementierung von Dingen verbracht wird, die nicht von vornherein vollständig kaputt waren, wie Standardabstände, Listenstile usw.

Wenn Sie wirklich das Gefühl haben, einen Reset verwenden zu müssen, ziehen Sie die Verwendung von [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht, das darauf abzielt, Dinge über Browser hinweg konsistenter zu machen, ein paar Standardärgernisse, die wir immer entfernen (wie die Abstände auf `<body>`), loszuwerden und ein paar Fehler zu beheben.

## !important

`!important` ist der letzte Ausweg, der normalerweise nur dann verwendet wird, wenn Sie etwas überschreiben müssen und es keine andere Möglichkeit gibt, dies zu tun. Die Verwendung von `!important` gilt als schlechte Praxis und Sie sollten sie wann immer möglich vermeiden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-Style-Kommentare, um Code, der sich nicht selbst dokumentiert, zu kommentieren. Beachten Sie auch, dass Sie ein Leerzeichen zwischen den Sternen und dem Kommentar lassen sollten.

```css example-good
/* This is a CSS-style comment */
```

Setzen Sie Ihre Kommentare in separate Zeilen, die dem Code vorausgehen, auf den sie sich beziehen, wie folgt:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## Doppelte Anführungszeichen um Werte

Wo Anführungszeichen enthalten sein können oder sollten, verwenden Sie sie und verwenden Sie doppelte Anführungszeichen. Zum Beispiel:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Langform vs. Kurzform Regeln

In der Regel ist es, wenn man die Spezifika der CSS-Syntax lehrt, klarer und offensichtlicher, Langform-Eigenschaften zu verwenden, anstatt knapper Kurzformen (es sei denn, Sie erklären gerade die Kurzform durch das Beispiel). Denken Sie daran, dass der Sinn von Beispielen auf MDN Web Docs darin besteht, Menschen zu unterrichten, nicht darin, clever oder effizient zu sein. Wir erklären hier, warum es empfohlen wird, mit Langform-Regeln zu schreiben.

- Es ist oft schwieriger zu verstehen, was die Kurzform tut. Im folgenden Beispiel dauert es eine Weile, genau zu erfassen, was die {{cssxref("font")}}-Syntax tut.

  ```css
  font: small-caps bold 2rem/1.5 sans-serif;
  ```

  Während der folgende Stil klarer ist:

  ```css
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;
  font-family: sans-serif;
  ```

- CSS-Kurzformen bringen potenziell zusätzliche Fallstricke mit sich — für Teile der Syntax, die Sie nicht explizit festgelegt haben, werden Standardwerte festgelegt, was zu unerwarteten Rücksetzungen von Werten führen kann, die Sie früher in der Kaskade explizit eingestellt hatten oder zu anderen erwarteten Effekten. Die {{cssxref("grid")}}-Eigenschaft, zum Beispiel, setzt all die folgenden Standardwerte für nicht spezifizierte Elemente fest:

  - {{cssxref("grid-template-rows")}}: `none`
  - {{cssxref("grid-template-columns")}}: `none`
  - {{cssxref("grid-template-areas")}}: `none`
  - {{cssxref("grid-auto-rows")}}: `auto`
  - {{cssxref("grid-auto-columns")}}: `auto`
  - {{cssxref("grid-auto-flow")}}: `row`
  - {{cssxref("column-gap")}}: `0`
  - {{cssxref("row-gap")}}: `0`
  - {{cssxref("column-gap")}}: `normal`
  - {{cssxref("row-gap")}}: `normal`

- Einige Kurzformen funktionieren nur wie erwartet, wenn Sie die unterschiedlichen Wertkomponenten in einer bestimmten Reihenfolge einfügen. Dies ist der Fall bei CSS-Animationen. Im folgenden Beispiel ist die erwartete Reihenfolge als Kommentar geschrieben:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) interpretiert werden kann, der [`animation-duration`](/de/docs/Web/CSS/animation-duration)-Eigenschaft zugewiesen, und der zweite Wert, der als Zeit interpretiert werden kann, wird der [`animation-delay`](/de/docs/Web/CSS/animation-delay)-Eigenschaft zugewiesen. (Für weitere Informationen siehe die [Details zur Animationssyntax](/de/docs/Web/CSS/animation#syntax).)

## Mobile-First-Media-Queries

In einem Stylesheet, das [Medienabfrage-](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)Styles für verschiedene Ziel-Viewport-Größen enthält, fügen Sie zuerst die schmalen Bildschirm-/Mobil-Stile ein, bevor andere Medienabfragen auftreten. Fügen Sie dann die Stile für größere Viewport-Größen über aufeinanderfolgende Medienabfragen hinzu. Das Befolgen dieser Regel hat viele Vorteile, die im [Mobile First](/de/docs/Learn/CSS/CSS_layout/Responsive_Design)-Artikel erklärt werden.

```css example-good
/* Default CSS layout for narrow screens */

@media (min-width: 480px) {
  /* CSS for medium width screens */
}

@media (min-width: 800px) {
  /* CSS for wide screens */
}

@media (min-width: 1100px) {
  /* CSS for really wide screens */
}
```

## Selektoren

- Verwenden Sie keine ID-Selektoren, da sie:

  - weniger flexibel sind; Sie können keine weiteren hinzufügen, wenn Sie feststellen, dass Sie mehr als einen benötigen.
  - schwerer zu überschreiben sind, da sie eine höhere Spezifität als Klassen besitzen.

  ```css example-good
  .editorial-summary {
    /* ... */
  }
  ```

  ```css example-bad
  #editorial-summary {
    /* ... */
  }
  ```

## Wert zum Deaktivieren von Eigenschaften

Wenn Sie Ränder (und andere Eigenschaften, die `0` oder `none` als Werte annehmen können) deaktivieren, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - durchstöbern Sie unsere CSS-Eigenschaftsreferenzseiten, um einige gute, prägnante, sinnvolle CSS-Snippets zu sehen. Unsere interaktiven Beispiele im "Try it"-Abschnitt sind in der Regel so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
