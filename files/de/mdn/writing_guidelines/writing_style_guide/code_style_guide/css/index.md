---
title: Richtlinien für das Schreiben von CSS-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Die folgenden Richtlinien behandeln, wie CSS-Beispielcode für MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Format wählen

Meinungen über die richtige Einrückung, Leerzeichen und Zeilenlängen sind immer umstritten gewesen. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie sich darauf stürzen und große Mengen CSS schreiben, planen Sie Ihre Stile sorgfältig. Welche allgemeinen Stile werden benötigt, welche unterschiedlichen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden, und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie feststellen, dass Sie ständig Stile schreiben und dann unmittelbar ein paar Regeln später wieder aufheben, sollten Sie Ihre Strategie wahrscheinlich überdenken.

### Verwenden Sie flexible/relative Einheiten

Um größtmögliche Flexibilität über den größtmöglichen Bereich von Geräten zu gewährleisten, ist es eine gute Idee, Container, Abstände usw. mit relativen Einheiten wie `em`, `rem` oder Prozentsätzen und Viewport-Einheiten zu bemessen, wenn Sie möchten, dass sie je nach Viewport-Breite variieren. Sie können mehr darüber in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) lesen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessorsyntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/) im Beispielcode. Auf MDN Web Docs dokumentieren wir die Plain-CSS-Sprache. Die Verwendung von Präprozessoren würde nur die Hürde zum Verständnis der Beispiele erhöhen und die Leser möglicherweise verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

Im gleichen Sinne wie die vorherige Richtlinie sollten Sie auf MDN Web Docs keine Beispielcodes mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Obwohl sie gültige CSS-Syntax sind, können die Namenskonventionen für Personen, die mit diesen Methodologien nicht vertraut sind, verwirrend sein.

### Verwenden Sie keine Resets

Um größtmögliche Kontrolle über CSS auf allen Plattformen zu haben, verwendeten viele Leute früher CSS-Resets, um jeden Stil zu entfernen, bevor sie dann alles selbst neu aufbauten. Dies hat sicherlich seine Vorzüge, aber besonders in der modernen Welt können CSS-Resets zu viel des Guten sein und zu viel zusätzlicher Zeit führen, die für das Neuimplementieren von Dingen aufgewendet wird, die nicht von vornherein komplett kaputt waren, wie Standard-Randabstände, Listenstile usw.

Wenn Sie wirklich das Gefühl haben, einen Reset verwenden zu müssen, sollten Sie [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht ziehen, das darauf abzielt, Dinge über Browser hinweg konsistenter zu machen, ein paar Standardärgernisse, die wir immer entfernen (z.B. die Ränder des `<body>`), loszuwerden und ein paar Fehler zu beheben.

## !important

`!important` ist das letzte Mittel, das im Allgemeinen nur dann verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis, und Sie sollten sie nach Möglichkeit vermeiden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-kompatible Kommentare, um Code zu kommentieren, der sich nicht selbst erklärt. Außerdem sollten Sie beachten, dass Sie zwischen den Sternchen und dem Kommentar ein Leerzeichen lassen sollten.

```css example-good
/* This is a CSS-style comment */
```

Platzieren Sie Ihre Kommentare auf separaten Zeilen vor dem Code, auf den sie sich beziehen, so:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## Doppelte Anführungszeichen um Werte

Wo Anführungszeichen eingefügt werden können oder sollten, verwenden Sie sie und verwenden Sie doppelte Anführungszeichen. Beispiel:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Langform- vs. Kurzform-Regeln

In der Regel ist es beim Lehren der Besonderheiten von CSS-Syntax klarer und offensichtlicher, Langform-Eigenschaften anstelle der knappen Kurzform zu verwenden (es sei denn natürlich, Sie erklären die Kurzform über das Beispiel). Denken Sie daran, dass der Zweck der Beispiele auf MDN Web Docs darin besteht, Menschen zu lehren, nicht clever oder effizient zu sein. Wir erklären hier, warum das Schreiben mit Langform-Regeln empfohlen wird.

- Es ist oft schwieriger zu verstehen, was die Kurzform tut. Im untenstehenden Beispiel dauert es eine Weile, genau zu verstehen, was die {{cssxref("font")}}-Syntax tut.

  ```css
  font: small-caps bold 2rem/1.5 sans-serif;
  ```

  Wohingegen der folgende Stil klarer ist:

  ```css
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.5;
  font-family: sans-serif;
  ```

- CSS-Kurzformen kommen mit potenziellen zusätzlichen Fallstricken — Standardwerte werden für Teile der Syntax festgelegt, die Sie nicht explizit festlegen, was zu unerwarteten Rückstellungen von Werten führen kann, die Sie früher im Kaskadierungsprozess festgelegt haben, oder zu anderen erwarteten Effekten. Die {{cssxref("grid")}}-Eigenschaft beispielsweise legt all die folgenden Standardwerte für nicht spezifizierte Elemente fest:

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

- Einige Kurzformen funktionieren nur wie erwartet, wenn Sie die verschiedenen Wertkomponenten in einer bestimmten Reihenfolge einfügen. Dies ist bei CSS-Animationen der Fall. Im untenstehenden Beispiel ist die erwartete Reihenfolge als Kommentar geschrieben:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slide-in;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) geparst werden kann, der Eigenschaft [`animation-duration`](/de/docs/Web/CSS/animation-duration) zugewiesen, und der zweite Wert, der als Zeit geparst werden kann, wird der [`animation-delay`](/de/docs/Web/CSS/animation-delay) zugewiesen. (Für weitere Informationen siehe [Animationssyntax](/de/docs/Web/CSS/animation#syntax)-Details.)

## Mobile-first Media Queries

In einem Stylesheet, das [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) für verschiedene Ziel-Viewport-Größen enthält, fügen Sie zuerst das Styling für schmale Bildschirme/Mobile ein, bevor auf andere Media Queries gestoßen wird. Fügen Sie das Styling für größere Viewport-Größen durch aufeinanderfolgende Media Queries hinzu. Die Befolgung dieser Regel hat viele Vorteile, die im [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

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

## Wert zum Deaktivieren von Eigenschaften

Wenn Sie Rahmen (und andere Eigenschaften, die `0` oder `none` als Werte annehmen können) ausschalten, verwenden Sie `0` anstatt `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - durchstöbern Sie unsere CSS-Property-Referenzseiten, um einige gute, prägnante, aussagekräftige CSS-Snippets zu finden. Unsere interaktiven Beispiele im Abschnitt "Try it" sind in der Regel nach den auf dieser Seite beschriebenen Richtlinien geschrieben.
