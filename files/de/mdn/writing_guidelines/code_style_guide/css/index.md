---
title: Richtlinien zum Schreiben von CSS-Codebeispielen
short-title: CSS examples
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Die folgenden Richtlinien beschreiben, wie CSS-Beispielcode für die MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Format wählen

Meinungen über die korrekte Einrückung, Leerzeichen und Zeilenlängen sind schon immer umstritten gewesen. Diskussionen über diese Themen lenken von der Erstellung und Wartung von Inhalten ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Es gibt jedoch einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie sich in große CSS-Blöcke stürzen, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche verschiedenen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie ständig Stile schreiben und diese dann ein paar Regeln später wieder aufheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität über ein möglichst breites Spektrum von Geräten ist es eine gute Idee, Container, Abstände usw. mit relativen Einheiten wie ems und rems oder Prozentwerten und Viewport-Einheiten zu dimensionieren, wenn Sie möchten, dass diese je nach Viewport-Breite variieren. Mehr darüber erfahren Sie in unserem [Leitfaden zu CSS-Werten und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units).

### Verwenden Sie keine Präprozessoren

Verwenden Sie in den Beispielcodes keine Präprozessor-Syntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/). Auf MDN Web Docs dokumentieren wir die ursprüngliche CSS-Sprache. Die Verwendung von Präprozessoren würde nur das Verständnis der Beispiele erschweren und die Leser verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

In demselben Geist wie die vorherige Richtlinie sollten Sie keine Beispielcodes auf MDN Web Docs mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Obwohl sie gültige CSS-Syntax sind, können die Namenskonventionen Menschen verwirren, die mit diesen Methodologien nicht vertraut sind.

### Verwenden Sie keine Resets

Um maximale Kontrolle über CSS auf verschiedenen Plattformen zu haben, haben viele in der Vergangenheit CSS-Resets verwendet, um jeden Stil zu entfernen, bevor sie dann alles selbst wieder aufbauen. Das hat sicherlich seine Vorteile, aber besonders in der modernen Welt können CSS-Resets überflüssig sein und führen dazu, dass viel Zeit damit verbracht wird, Dinge neu zu implementieren, die von Anfang an nicht völlig kaputt waren, wie z.B. Standardränder, Listenstile usw.

Wenn Sie wirklich das Gefühl haben, einen Reset verwenden zu müssen, sollten Sie [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht ziehen, das darauf abzielt, Dinge über Browser hinweg konsistenter zu machen, einige Standardärgernisse zu beheben, die wir immer entfernen (zum Beispiel die Ränder auf `<body>`) und ein paar Fehler zu beheben.

## !important

`!important` ist das letzte Mittel, das in der Regel nur dann verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis und sollte wann immer möglich vermieden werden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-Stilkommentare, um Code zu kommentieren, der sich nicht selbst dokumentiert. Beachten Sie auch, dass Sie zwischen den Sternchen und dem Kommentar einen Leerraum lassen sollten.

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

Wo Anführungszeichen enthalten sein können oder sollten, verwenden Sie diese und verwenden Sie doppelte Anführungszeichen. Zum Beispiel:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Langform- vs. Kurzform-Regeln

In der Regel ist es klarer und offensichtlicher, die detaillierten Langform-Eigenschaften zu verwenden, wenn man die Details der CSS-Syntax lehrt, anstatt die knappe Kurzform (es sei denn, natürlich, man erklärt die Kurzform durch das Beispiel). Denken Sie daran, dass der Zweck von Beispielen auf MDN Web Docs darin besteht, Menschen zu lehren, nicht clever oder effizient zu sein. Wir erklären hier, warum das Schreiben mit Langform-Regeln empfohlen wird.

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

- CSS-Kurzformen bergen potenzielle zusätzliche Fallstricke — Standardwerte werden für Teile der Syntax festgelegt, die Sie nicht explizit festlegen, was zu unerwarteten Zurücksetzungen von Werten führen kann, die Sie zuvor in der Kaskade oder anderen erwarteten Effekten gesetzt haben. Die {{cssxref("grid")}}-Eigenschaft beispielsweise setzt alle folgenden Standardwerte für nicht spezifizierte Elemente:

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

- Einige Kurzformen funktionieren nur dann wie erwartet, wenn Sie die verschiedenen Wertkomponenten in einer bestimmten Reihenfolge angeben. Dies ist bei CSS-Animationen der Fall. Im folgenden Beispiel ist die erwartete Reihenfolge als Kommentar geschrieben:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slide-in;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) geparst werden kann, der [`animation-duration`](/de/docs/Web/CSS/animation-duration)-Eigenschaft zugewiesen, und der zweite Wert, der als Zeit parst, wird der [`animation-delay`](/de/docs/Web/CSS/animation-delay)-Eigenschaft zugewiesen. (Weitere Informationen finden Sie in den Details zur [Animationssyntax](/de/docs/Web/CSS/animation#syntax).)

## Mobile-first Media Queries

In einem Stylesheet, das [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für verschiedene Ziel-Viewport-Größen enthält, sollten zunächst die Stile für schmale Bildschirme/Mobilgeräte eingefügt werden, bevor andere Media Queries auftreten. Fügen Sie Stile für größere Viewport-Größen über nachfolgende Media Queries hinzu. Die Befolgung dieser Regel hat viele Vorteile, die im [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

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

  - weniger flexibel sind; Sie können nicht mehr hinzufügen, wenn Sie feststellen, dass Sie mehr als einen benötigen.
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

Wenn Sie Ränder (und andere Eigenschaften, die `0` oder `none` als Werte annehmen können) deaktivieren, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - Durchstöbern Sie unsere CSS-Property-Referenzseiten, um sich einige gute, prägnante und bedeutungsvolle CSS-Snippets anzusehen. Unsere interaktiven Beispiele im Abschnitt "Try it" sind im Allgemeinen so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
