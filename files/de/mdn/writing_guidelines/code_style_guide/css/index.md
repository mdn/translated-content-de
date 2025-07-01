---
title: Richtlinien zum Schreiben von CSS-Beispielcode
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

Die folgenden Richtlinien behandeln, wie man CSS-Beispielcode für MDN Web Docs schreibt.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Format wählen

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Stil des Codes konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um sich über die aktuellen Regeln zu informieren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und sorgt für Konsistenz im Stil. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie große Mengen an CSS schreiben, planen Sie Ihre Stile sorgfältig. Welche allgemeinen Stile werden benötigt, welche verschiedenen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viel Überschreiben zu vermeiden**. Wenn Sie feststellen, dass Sie Stile schreiben und dann ein paar Regeln später wieder aufheben, sollten Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Um maximale Flexibilität über eine möglichst große Bandbreite an Geräten zu erreichen, ist es eine gute Idee, Container, Abstände usw. mit relativen Einheiten wie ems und rems oder Prozentwerten und Viewport-Einheiten zu dimensionieren, wenn Sie möchten, dass sie je nach Viewport-Breite variieren. Sie können mehr darüber in unserem [Leitfaden zu CSS-Werten und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) nachlesen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie in den Beispielcodes keine Präprozessor-Syntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/). Auf MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Die Verwendung von Präprozessoren würde die Verständlichkeit der Beispiele nur erschweren und potenziell verwirrend für die Leser sein.

### Verwenden Sie keine spezifischen CSS-Methodologien

Im Geiste der vorherigen Richtlinie sollten Sie auf MDN Web Docs keine Beispielcodes mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Auch wenn diese Syntaxen gültig sind, können die Namenskonventionen für Personen, die mit diesen Methodologien nicht vertraut sind, verwirrend sein.

### Verwenden Sie keine Resets

Um die Kontrolle über CSS-Plattformen zu maximieren, haben viele früher CSS-Resets verwendet, um jeden Stil zu entfernen, bevor sie alles wieder selbst aufgebaut haben. Das hat sicherlich seine Vorzüge, aber gerade in der heutigen Zeit können CSS-Resets übertrieben sein und zu viel Zeit damit vergeudet werden, Dinge neu zu implementieren, die ursprünglich nicht wirklich defekt waren, wie Standardabstände, List Styles usw.

Wenn Sie wirklich das Bedürfnis verspüren, ein Reset zu verwenden, sollten Sie [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht ziehen, das darauf abzielt, die Dinge konsistenter über Browser hinweg zu gestalten, einige Standardärgernisse, die wir immer entfernen (zum Beispiel die Ränder auf `<body>`), zu beseitigen und einige Fehler zu beheben.

## !important

`!important` ist die letzte Option, die im Allgemeinen nur verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, es zu tun. Die Verwendung von `!important` gilt als schlechte Praxis, und Sie sollten sie, wann immer möglich, vermeiden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-Stil-Kommentare, um Code zu kommentieren, der sich nicht selbst erklärt. Beachten Sie auch, dass Sie ein Leerzeichen zwischen den Sternchen und dem Kommentar lassen sollten.

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

## Doppelte Anführungszeichen um Werte

Wo Anführungszeichen enthalten sein können oder sollten, verwenden Sie sie und benutzen Sie doppelte Anführungszeichen. Zum Beispiel:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Langform- versus Kurzform-Regeln

Normalerweise, wenn man die Besonderheiten der CSS-Syntax lehrt, ist es klarer und offensichtlicher, Langform-Eigenschaften zu verwenden, anstatt knapper Kurzformen (es sei denn, Sie erklären natürlich die Kurzform durch das Beispiel). Denken Sie daran, dass der Zweck der Beispiele auf MDN Web Docs darin besteht, Menschen zu lehren, nicht clever oder effizient zu sein. Wir erläutern hier, warum das Schreiben mit Langform-Regeln empfohlen wird.

- Oft ist es schwieriger zu verstehen, was die Kurzform tut. Im folgenden Beispiel dauert es eine Weile, genau zu entschlüsseln, was die {{cssxref("font")}}-Syntax tut.

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

- CSS-Kurzformen haben potenziell zusätzliche Fallstricke — Standardwerte werden für Teile der Syntax gesetzt, die Sie nicht explizit setzen, was zu unerwarteten Rücksetzungen von Werten führen kann, die Sie früher in der Kaskade festgelegt haben, oder anderen erwarteten Effekten. Die {{cssxref("grid")}}-Eigenschaft zum Beispiel setzt alle der folgenden Standardwerte für nicht spezifizierte Elemente:
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

- Einige Kurzformen funktionieren nur wie erwartet, wenn Sie die verschiedenen Wertelemente in einer bestimmten Reihenfolge einfügen. Dies ist bei CSS-Animationen der Fall. Im folgenden Beispiel ist die erwartete Reihenfolge als Kommentar geschrieben:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slide-in;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) geparst werden kann, der [`animation-duration`](/de/docs/Web/CSS/animation-duration) Eigenschaft zugewiesen, und der zweite Wert, der als Zeit geparst werden kann, wird [`animation-delay`](/de/docs/Web/CSS/animation-delay) zugewiesen. (Für weitere Informationen siehe [Animation-Syntax](/de/docs/Web/CSS/animation#syntax)-Details.)

## Mobile-First Media Queries

In einem Stylesheet, das [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für verschiedene Ziel-Viewportgrößen enthält, sollten Sie zuerst die schmalen Bildschirm-/Mobilstile vor jedem anderen Media Query einfügen. Fügen Sie Styling für größere Viewportgrößen über aufeinanderfolgende Media Queries hinzu. Das Befolgen dieser Regel hat viele Vorteile, die im [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erläutert werden.

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

## Selektoren

- Verwenden Sie keine ID-Selektoren, da sie:
  - weniger flexibel sind; Sie können keine weiteren hinzufügen, wenn Sie feststellen, dass Sie mehr als einen benötigen.
  - schwerer zu überschreiben sind, da sie eine höhere Spezifität als Klassen haben.

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

## Wert zum Ausschalten von Eigenschaften

Wenn Sie Grenzen (und alle anderen Eigenschaften, die `0` oder `none` als Werte annehmen können) ausschalten, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - stöbern Sie durch unsere CSS-Eigenschaften-Referenzseiten, um sich einige gute, prägnante, bedeutungsvolle CSS-Snippets anzusehen. Unsere interaktiven Beispiele im Abschnitt "Try it" sind im Allgemeinen so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
