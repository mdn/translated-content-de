---
title: Richtlinien zum Schreiben von CSS-Codebeispielen
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die folgenden Richtlinien beschreiben, wie man CSS-Beispielcode für MDN Web Docs schreibt.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Format auswählen

Meinungen zu richtiger Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken vom Erstellen und Pflegen von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die beachtet werden müssen.

### Planen Sie Ihr CSS

Bevor Sie anfangen und große Mengen CSS schreiben, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche verschiedenen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem sollten Sie **zu viele Überschreibungen vermeiden**. Wenn Sie immer wieder Styles schreiben und sie dann ein paar Regeln weiter wieder aufheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Um eine maximale Flexibilität über die größtmögliche Bandbreite von Geräten zu erreichen, ist es ratsam, Container, Abstände usw. mit relativen Einheiten wie ems und rems oder Prozent- und Viewporteinheiten zu dimensionieren, wenn Sie möchten, dass sie sich je nach Viewport-Breite ändern. Mehr dazu finden Sie in unserem [Leitfaden zu CSS-Werten und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units).

### Verwenden Sie keine Präprozessoren

Verwenden Sie in den Beispielcodes keine Präprozessor-Syntax, wie zum Beispiel [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/). Auf MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Die Verwendung von Präprozessoren würde das Verständnis der Beispiele nur erschweren und die Leser möglicherweise verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

Im selben Sinne wie die vorherige Richtlinie sollten Sie bei MDN Web Docs keine Beispielcodes mit einer bestimmten CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Obwohl sie gültige CSS-Syntax darstellen, können die Benennungskonventionen für Personen verwirrend sein, die mit diesen Methodologien nicht vertraut sind.

### Verwenden Sie keine Resets

Um eine maximale Kontrolle über CSS auf verschiedenen Plattformen zu haben, haben viele Leute früher CSS-Resets verwendet, um jeden Stil zu entfernen, bevor sie dann alles wieder von Grund auf neu aufgebaut haben. Das hat sicherlich seine Vorzüge, aber gerade in der modernen Welt können CSS-Resets überflüssig sein, was dazu führt, dass viel zusätzliche Zeit für die Neuerstellung von Dingen aufgewendet wird, die ursprünglich gar nicht komplett defekt waren, wie z. B. Standardränder, Liststyles usw.

Wenn Sie wirklich das Gefühl haben, einen Reset verwenden zu müssen, sollten Sie den [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht ziehen, der darauf abzielt, Dinge über verschiedene Browser hinweg konsistenter zu machen, einige Standardärgernisse, die wir immer entfernen (z. B. die Ränder auf `<body>`), zu beseitigen und einige Bugs zu beheben.

## !important

`!important` ist die letzte Möglichkeit, die in der Regel nur verwendet wird, wenn Sie etwas überschreiben müssen und es keine andere Möglichkeit gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis und sollte vermieden werden, wo immer es möglich ist.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-Style-Kommentare, um Code zu kommentieren, der sich nicht selbst erklärt. Beachten Sie auch, dass Sie einen Abstand zwischen den Sternen und dem Kommentar lassen sollten.

```css example-good
/* This is a CSS-style comment */
```

Platzieren Sie Ihre Kommentare in separaten Zeilen vor dem Code, auf den sie sich beziehen, wie folgt:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## Doppelte Anführungszeichen um Werte

Wo Anführungszeichen enthalten sein können oder sollten, verwenden Sie sie, und verwenden Sie doppelte Anführungszeichen. Zum Beispiel:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Langform- vs. Kurzformregeln

In der Regel ist es beim Lehren der spezifischen CSS-Syntax klarer und offensichtlicher, Langform-Eigenschaften zu verwenden, anstatt knappe Kurzform (es sei denn, Sie erklären die Kurzform anhand des Beispiels). Denken Sie daran, dass der Punkt der Beispiele auf MDN Web Docs darin besteht, Menschen zu lehren, nicht clever oder effizient zu sein. Wir erklären hier, warum das Schreiben mit Langformregeln empfohlen wird.

- Es ist oft schwerer zu verstehen, was die Kurzform macht. Im folgenden Beispiel dauert es eine Weile, genau zu erkennen, was die {{cssxref("font")}}-Syntax tut.

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

- CSS-Kurzformen beinhalten potenzielle Fallstricke — Standardwerte werden für Teile der Syntax gesetzt, die Sie nicht explizit setzen, was unerwartete Rücksetzungen von Werten, die Sie früher in der Kaskade festgelegt haben, oder andere erwartete Effekte hervorrufen kann. Die {{cssxref("grid")}}-Eigenschaft setzt zum Beispiel alle folgenden Standardwerte für nicht spezifizierte Elemente:

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

- Einige Kurzformen funktionieren nur wie erwartet, wenn Sie die verschiedenen Wertkomponenten in einer bestimmten Reihenfolge einfügen. Dies ist bei CSS-Animationen der Fall. Im folgenden Beispiel ist die erwartete Reihenfolge als Kommentar geschrieben:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slide-in;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) analysiert werden kann, der [`animation-duration`](/de/docs/Web/CSS/animation-duration)-Eigenschaft zugewiesen, und der zweite Wert, der als Zeit analysiert werden kann, wird der [`animation-delay`](/de/docs/Web/CSS/animation-delay)-Eigenschaft zugewiesen. (Für weitere Informationen siehe [animations-Syntax](/de/docs/Web/CSS/animation#syntax) Details.)

## Mobile-First-Mediaqueries

In einem Stylesheet, das [Mediaquery](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für verschiedene Ziel-Viewport-Größen enthält, sollten Sie zuerst das Styling für schmale Bildschirme/Mobile einfügen, bevor andere Mediaqueries berücksichtigt werden. Fügen Sie Styling für größere Viewport-Größen über aufeinanderfolgende Mediaqueries hinzu. Die Einhaltung dieser Regel bietet viele Vorteile, die im [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

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
  - schwieriger zu überschreiben sind, da sie eine höhere Spezifität als Klassen haben.

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

Wenn Sie Grenzen (und andere Eigenschaften, die `0` oder `none` als Werte annehmen können) deaktivieren, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - Durchsuchen Sie unsere CSS-Eigenschaftsreferenzseiten, um einige gute, prägnante, sinnvolle CSS-Snippets zu überprüfen. Unsere interaktiven Beispiele im Abschnitt "Probieren Sie es aus" sind in der Regel so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien entsprechen.
