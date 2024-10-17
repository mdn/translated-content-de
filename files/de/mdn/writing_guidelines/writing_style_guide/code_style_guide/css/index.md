---
title: Richtlinien für das Schreiben von CSS-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{MDNSidebar}}

Die folgenden Richtlinien behandeln das Schreiben von CSS-Beispielcode für MDN Web Docs.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Auswahl eines Formats

Meinungen zur richtigen Einrückung, Leerzeichen und Zeilenlängen sind seit jeher umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie sich in das Schreiben großer CSS-Blöcke stürzen, planen Sie Ihre Stile sorgfältig. Welche allgemeinen Stile werden benötigt, welche unterschiedlichen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem müssen Sie versuchen, **zu viel Überschreibung zu vermeiden**. Wenn Sie feststellen, dass Sie ständig Stile schreiben und diese dann ein paar Regeln später wieder aufheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität über ein möglichst breites Spektrum an Geräten ist es eine gute Idee, Container, Abstände etc. mit relativen Einheiten wie ems und rems oder Prozentsätzen und Ansichtsfenstereinheiten zu dimensionieren, wenn Sie möchten, dass sie je nach Ansichtsfensterbreite variieren. Mehr dazu können Sie in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) lesen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessorsyntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/) im Beispielcode. Auf MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Die Verwendung von Präprozessoren würde das Verständnis der Beispiele nur erschweren und potenziell die Leser verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

Im gleichen Geist wie bei der vorherigen Richtlinie sollten Sie keine Beispielsammlung auf MDN Web Docs mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Auch wenn sie gültige CSS-Syntax sind, können die Namenskonventionen für Personen, die mit diesen Methodologien nicht vertraut sind, verwirrend sein.

### Verwenden Sie keine Resets

Für maximale Kontrolle über CSS auf verschiedenen Plattformen haben viele Menschen früher CSS-Resets verwendet, um jedes Styling zu entfernen, bevor sie es selbst wieder aufgebaut haben. Dies hat sicherlich seine Vorzüge, aber insbesondere in der modernen Welt können CSS-Resets übertrieben sein und zu viel zusätzlicher Zeit führen, die mit der Neuumsetzung von Dingen verbracht wird, die ursprünglich nicht völlig defekt waren, wie Standardabstände, Listenstile usw.

Wenn Sie wirklich das Gefühl haben, dass Sie ein Reset verwenden müssen, ziehen Sie [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht, das darauf abzielt, die Dinge in verschiedenen Browsern konsistenter zu machen, einige Standardärgernisse, die wir immer entfernen (die Abstände auf `<body>`, zum Beispiel), zu beseitigen und einige Bugs zu beheben.

## !important

`!important` ist das letzte Mittel, das im Allgemeinen nur verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis und sollte, wo immer möglich, vermieden werden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-Stilkommentare, um Code zu kommentieren, der nicht selbsterklärend ist. Beachten Sie auch, dass Sie zwischen den Sternchen und dem Kommentar ein Leerzeichen lassen sollten.

```css example-good
/* This is a CSS-style comment */
```

Platzieren Sie Ihre Kommentare auf separaten Zeilen, die dem Code, auf den sie sich beziehen, vorausgehen, wie folgt:

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

## Longhand vs. Shorthand-Regeln

In der Regel ist es beim Vermitteln der Spezifika der CSS-Syntax klarer und offensichtlicher, Langhand-Eigenschaften zu verwenden, anstatt knappe Kurzschreibweisen (es sei denn, Sie erklären die Kurzschreibweise durch das Beispiel). Denken Sie daran, dass der Zweck der Beispiele auf MDN Web Docs darin besteht, den Menschen zu helfen, nicht clever oder effizient zu sein. Wir erklären hier, warum das Schreiben mit Langhand-Regeln empfohlen wird.

- Es ist oft schwieriger zu verstehen, was die Kurzschreibweise tut. Im folgenden Beispiel dauert es eine Weile, genau zu erkennen, was die {{cssxref("font")}}-Syntax macht.

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

- CSS-Kurzschreibweisen haben potenziell zusätzliche Fallstricke – Standardwerte werden für Teile der Syntax festgelegt, die Sie nicht explizit gesetzt haben, was zu unerwarteten Rücksetzungen von Werten führen kann, die Sie zuvor in der Kaskade gesetzt haben, oder zu anderen erwarteten Effekten. Die {{cssxref("grid")}}-Eigenschaft legt beispielsweise alle folgenden Standardwerte für nicht spezifizierte Elemente fest:

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

- Einige Kurzschreibweisen funktionieren nur dann wie erwartet, wenn Sie die unterschiedlichen Wertkomponenten in einer bestimmten Reihenfolge einschließen. Dies ist der Fall bei CSS-Animationen. Im folgenden Beispiel ist die erwartete Reihenfolge als Kommentar geschrieben:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slide-in;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) geparst werden kann, der Eigenschaft [`animation-duration`](/de/docs/Web/CSS/animation-duration) zugewiesen, und der zweite Wert, der als Zeit geparst werden kann, wird der [`animation-delay`](/de/docs/Web/CSS/animation-delay) zugewiesen. (Für mehr Informationen siehe die [animation syntax](/de/docs/Web/CSS/animation#syntax)-Details.)

## Mobile-First-Media-Queries

In einem Stylesheet, das [Media-Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für unterschiedliche Zielansichtsfenstergrößen enthält, fügen Sie zuerst das Styling für schmale Bildschirme/Mobilgeräte ein, bevor andere Media-Queries auftreten. Fügen Sie das Styling für größere Ansichtsfenstergrößen über aufeinanderfolgende Media-Queries hinzu. Die Einhaltung dieser Regel hat viele Vorteile, die im Artikel [Mobile First](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) erläutert werden.

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

- Verwenden Sie keine ID-Selektoren, weil sie:

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

Wenn Sie Grenzen (und andere Eigenschaften, die `0` oder `none` als Werte annehmen können) ausschalten, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) – Durchsuchen Sie unsere CSS-Eigenschaftsreferenzseiten, um sich einige gute, prägnante und aussagekräftige CSS-Ausschnitte anzusehen. Unsere interaktiven Beispiele im Abschnitt „Try it“ sind in der Regel so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
