---
title: Richtlinien für das Schreiben von CSS-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

Die folgenden Richtlinien beschreiben, wie CSS-Beispielcode für MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Wahl eines Formats

Meinungen über die richtige Einrückung, Leerzeichen und Zeilenlängen waren immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Stil des Codes konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie große Mengen an CSS schreiben, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche unterschiedlichen Layouts müssen erstellt werden, welche speziellen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie immer wieder Styles schreiben, die Sie dann einige Regeln später wieder aufheben, sollten Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität über die größtmögliche Bandbreite an Geräten ist es ratsam, Container, Polsterungen usw. mit relativen Einheiten wie ems und rems oder Prozentsätzen und Ansichtseinheiten zu dimensionieren, wenn Sie möchten, dass sie je nach Ansichtsfeldbreite variieren. Sie können mehr darüber in unserem [Leitfaden zu CSS-Werten und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) lesen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie in den Beispielcodes keine Präprozessor-Syntax, wie zum Beispiel [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/). Auf MDN Web Docs dokumentieren wir die normale CSS-Sprache. Präprozessoren würden die Hürde für das Verständnis der Beispiele erhöhen und die Leser möglicherweise verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

Im gleichen Sinne wie die vorherige Richtlinie sollten Sie auf MDN Web Docs keine Beispielcodes mit spezifischen CSS-Methodologien wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) verfassen. Auch wenn sie gültige CSS-Syntax verwenden, können die Namenskonventionen für Personen, die mit diesen Methodologien nicht vertraut sind, verwirrend sein.

### Verwenden Sie keine Resets

Um maximale Kontrolle über CSS plattformübergreifend zu erlangen, haben viele früher CSS-Resets verwendet, um jeden Stil zu entfernen, bevor sie alles selbst wieder aufgebaut haben. Das hat sicher seine Vorteile, aber gerade in der modernen Welt können CSS-Resets übertrieben sein und dazu führen, dass viel Zeit mit der Neuimplementierung von Dingen verschwendet wird, die ursprünglich nicht vollständig unbrauchbar waren, wie z.B. Standardabstände, Listenstile usw.

Wenn Sie wirklich das Gefühl haben, dass Sie ein Reset benötigen, sollten Sie [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht ziehen, das darauf abzielt, die Dinge einheitlicher über verschiedene Browser hinweg zu gestalten, einige Standardprobleme, die wir immer entfernen, zu beseitigen (z.B. die Abstände auf `<body>`) und ein paar Fehler zu beheben.

## !important

`!important` ist der letzte Ausweg, der in der Regel nur verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, es zu tun. Die Verwendung von `!important` ist eine schlechte Praxis und sollte wann immer möglich vermieden werden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-Stil-Kommentare, um Code zu kommentieren, der sich nicht selbst dokumentiert. Beachten Sie auch, dass Sie ein Leerzeichen zwischen den Sternchen und dem Kommentar lassen sollten.

```css example-good
/* This is a CSS-style comment */
```

Platzieren Sie Ihre Kommentare auf separaten Zeilen vor dem Code, auf den sie sich beziehen, in folgender Art:

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

## Ausführliche vs. kürzere Regeln

In der Regel ist es, wenn man die spezifische CSS-Syntax lehrt, klarer und offensichtlicher, lange statt kurze Eigenschaften zu verwenden (es sei denn, Sie erklären natürlich die Kurzform durch das Beispiel). Denken Sie daran, dass das Ziel der Beispiele auf MDN Web Docs darin besteht, Menschen zu lehren und nicht, clever oder effizient zu sein. Wir erklären hier, warum das Schreiben mit langhand Regeln empfohlen wird.

- Es ist oft schwerer zu verstehen, was die Kurzform tut. In dem folgenden Beispiel dauert es eine Weile, genau zu erkennen, was die {{cssxref("font")}}-Syntax macht.

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

- CSS-Kurzformen kommen mit möglichen zusätzlichen Fallstricken — es werden Standardwerte für Teile der Syntax festgelegt, die Sie nicht explizit festlegen, was zu unerwarteten Rücksetzungen von Werten führen kann, die Sie zuvor in der Kaskade festgelegt haben, oder zu anderen erwarteten Effekten. Das {{cssxref("grid")}}-Eigenschaft setzt zum Beispiel alle folgenden Standardwerte für nicht spezifizierte Einträge:

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

- Einige Kurzformen funktionieren nur dann wie erwartet, wenn Sie die verschiedenen Wertkomponenten in einer bestimmten Reihenfolge einschließen. Dies ist bei CSS-Animationen der Fall. Im Beispiel unten ist die erwartete Reihenfolge als Kommentar geschrieben:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slide-in;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) geparst werden kann, der [`animation-duration`](/de/docs/Web/CSS/animation-duration)-Eigenschaft zugeordnet, und der zweite Wert, der als Zeit geparst werden kann, wird der [`animation-delay`](/de/docs/Web/CSS/animation-delay)-Eigenschaft zugeordnet. (Für weitere Informationen siehe [Animation Syntax](/de/docs/Web/CSS/animation#syntax)-Details.)

## Mobile-First-Media-Queries

In einem Stylesheet, das [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für verschiedene Zielansichtfeldgrößen enthält, sollten Sie zuerst die schmalen Bildschirm-/Mobil-Stile einfügen, bevor andere Medienabfragen auftreten. Fügen Sie Styling für größere Ansichtsfeldgrößen über aufeinanderfolgende Medienabfragen hinzu. Diese Regel zu befolgen hat viele Vorteile, die im [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

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

## Wert zum Ausschalten von Eigenschaften

Wenn Sie Ränder (und alle anderen Eigenschaften, die `0` oder `none` als Werte annehmen können) ausschalten, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - durchstöbern Sie unsere Referenzseiten für CSS-Eigenschaften, um einige gute, prägnante und aussagekräftige CSS-Beispielschnipsel zu entdecken. Unsere interaktiven Beispiele im Abschnitt "Try it" sind in der Regel so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
