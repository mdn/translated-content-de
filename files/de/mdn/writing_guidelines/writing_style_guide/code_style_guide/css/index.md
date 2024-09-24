---
title: Richtlinien zum Schreiben von CSS-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 4680281518d584657960f984b3b720d79b3119ab
---

{{MDNSidebar}}

Die folgenden Richtlinien behandeln, wie CSS-Beispielcode für MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Wahl eines Formats

Meinungen zu korrekter Einrückung, Leerraum und Zeilenlängen sind stets umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Stil des Codes konsistent zu halten (und um Themen abseits des Themas zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie beginnen und große Mengen an CSS schreiben, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche verschiedenen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden und sind sie wiederverwendbar? Vor allem müssen Sie **zu viel Überschreiben vermeiden**. Wenn Sie sich häufig dabei ertappen, Styles zu schreiben und sie dann wieder ein paar Regeln später aufzuheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität auf der größtmöglichen Anzahl von Geräten ist es eine gute Idee, Containergrößen, Abstände usw. mit relativen Einheiten wie ems und rems oder Prozentangaben und Viewport-Einheiten zu bestimmen, wenn Sie möchten, dass sie sich je nach Viewport-Breite ändern. Sie können mehr darüber in unserem [Leitfaden zu CSS-Werten und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) lesen.

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessor-Syntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/) im Beispielcode. Auf MDN Web Docs dokumentieren wir die grundlegende CSS-Sprache. Die Verwendung von Präprozessoren erhöht lediglich den Schwierigkeitsgrad für das Verständnis der Beispiele und könnte die Leser verwirren.

### Verwenden Sie keine spezifischen CSS-Methodologien

In der gleichen Weise wie bei der vorherigen Richtlinie sollten auf MDN Web Docs keine Beispielcodes mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) geschrieben werden. Auch wenn sie gültige CSS-Syntax sind, können die Namenskonventionen für Personen verwirrend sein, die mit diesen Methodologien nicht vertraut sind.

### Verwenden Sie keine Resets

Um maximale Kontrolle über CSS auf verschiedenen Plattformen zu erreichen, nutzten viele Leute früher CSS-Resets, um jeden Style zu entfernen, bevor sie dann alles wieder aufbauen. Das hat sicherlich seine Vorteile, aber vor allem in der modernen Welt können CSS-Resets überflüssig sein und eine Menge Extra-Zeit für die erneute Implementierung von Dingen bedeuten, die ursprünglich nicht völlig defekt waren, wie Standardabstände, Listenstile usw.

Wenn Sie wirklich das Gefühl haben, einen Reset verwenden zu müssen, sollten Sie [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht ziehen, das darauf abzielt, die Dinge über verschiedene Browser hinweg konsistenter zu machen, einige Standardärgernisse, die wir immer entfernen (wie die Ränder auf `<body>`), loszuwerden und einige Fehler zu beheben.

## !important

`!important` ist das letzte Mittel, das generell nur benutzt wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt. Die Verwendung von `!important` ist eine schlechte Praxis und sollte wann immer möglich vermieden werden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-Stil-Kommentare, um Code zu kommentieren, der nicht selbsterklärend ist. Beachten Sie auch, dass Sie zwischen den Sternchen und dem Kommentar ein Leerzeichen lassen sollten.

```css example-good
/* Das ist ein CSS-Stil-Kommentar */
```

Platzieren Sie Ihre Kommentare auf separaten Zeilen vor dem Code, auf den sie sich beziehen, wie folgt:

```css example-good
h3 {
  /* Erzeugt einen roten Schlagschatten, 1px nach rechts und unten verschoben, mit 2px Unschärferadius */
  text-shadow: 1px 1px 2px red;
  /* Setzt die Schriftgröße auf das Doppelte der Standard-Dokument-Schriftgröße */
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

## Ausführliche vs. Kurzform-Regeln

In der Regel ist es bei der Vermittlung der Besonderheiten der CSS-Syntax klarer und offensichtlicher, ausführliche Eigenschaften statt knapper Kurzformen zu verwenden (es sei denn, Sie erklären die Kurzform anhand des Beispiels). Denken Sie daran, dass der Punkt der Beispiele auf MDN Web Docs darin besteht, Menschen zu unterrichten, nicht clever oder effizient zu sein. Wir erklären hier, warum das Schreiben mit ausführlichen Regeln empfohlen wird.

- Oft ist es schwerer zu verstehen, was die Kurzform macht. Im Beispiel unten dauert es eine Weile, genau zu verstehen, was die {{cssxref("font")}}-Syntax macht.

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

- CSS-Kurzformen kommen mit potenziell zusätzlichen Fallstricken — Standardwerte werden für Teile der Syntax gesetzt, die Sie nicht explizit festlegen, was zu unerwarteten Zurücksetzungen von Werten führen kann, die Sie zuvor in der Kaskade festgelegt haben oder zu anderen erwarteten Effekten. Die {{cssxref("grid")}}-Eigenschaft beispielsweise setzt alle folgenden Standardwerte für nicht spezifizierte Elemente:

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

- Einige Kurzformen funktionieren nur wie erwartet, wenn Sie die verschiedenen Wertkomponenten in einer bestimmten Reihenfolge einfügen. Dies ist der Fall bei CSS-Animationen. Im untenstehenden Beispiel ist die erwartete Reihenfolge als Kommentar geschrieben:

  ```css
  /* Dauer | Timing-Funktion | Verzögerung | Wiederholungsanzahl
    Richtung | Füllmodus | Spielstatus | Name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) geparst werden kann, der [`animation-duration`](/de/docs/Web/CSS/animation-duration)-Eigenschaft zugewiesen und der zweite Wert, der als Zeit geparst werden kann, [`animation-delay`](/de/docs/Web/CSS/animation-delay) zugewiesen. (Für weitere Informationen, siehe [Animation-Syntax](/de/docs/Web/CSS/animation#syntax)-Details.)

## Mobilerste Medienabfragen

In einem Stylesheet, das [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für unterschiedliche Ziel-Viewport-Größen enthält, sollten zuerst die Styling für schmale Bildschirme/Mobilgeräte enthalten sein, bevor andere Medienabfragen erfolgen. Fügen Sie das Styling für breitere Viewport-Größen über aufeinanderfolgende Medienabfragen hinzu. Das Befolgen dieser Regel hat viele Vorteile, die im [Mobile First](/de/docs/Learn/CSS/CSS_layout/Responsive_Design)-Artikel erklärt werden.

```css example-good
/* Standard-CSS-Layout für schmale Bildschirme */

@media (min-width: 480px) {
  /* CSS für mittelgroße Bildschirme */
}

@media (min-width: 800px) {
  /* CSS für breite Bildschirme */
}

@media (min-width: 1100px) {
  /* CSS für sehr breite Bildschirme */
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

## Wert zum Deaktivieren von Eigenschaften

Wenn Sie Ränder (und alle anderen Eigenschaften, die `0` oder `none` als Wert annehmen können) deaktivieren, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - Durchsuchen Sie unsere Referenzseiten zu CSS-Eigenschaften, um einige gute, prägnante, bedeutungsvolle CSS-Code-Snippets zu sehen. Unsere interaktiven Beispiele im Abschnitt "Try it" sind generell so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
