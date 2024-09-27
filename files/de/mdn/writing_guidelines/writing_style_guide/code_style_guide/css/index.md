---
title: Richtlinien für das Schreiben von CSS-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 4680281518d584657960f984b3b720d79b3119ab
---

{{MDNSidebar}}

Die folgenden Richtlinien behandeln, wie CSS-Beispielcode für MDN Web Docs geschrieben werden soll.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Format wählen

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen sind seit jeher umstritten. Diskussionen zu diesen Themen lenken vom Erstellen und Pflegen von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um von Themen abzulenken, die nicht zur Sache gehören). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

### Planen Sie Ihr CSS

Bevor Sie sich in das Schreiben von großen CSS-Blöcken stürzen, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche verschiedenen Layouts müssen erstellt werden, welche spezifischen Überschreibungen müssen erstellt werden und sind diese wiederverwendbar? Vor allem sollten Sie versuchen, **zu viel Überschreiben zu vermeiden**. Wenn Sie immer wieder Styles schreiben und diese dann einige Regeln später wieder aufheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Um maximale Flexibilität für die breitest mögliche Palette von Geräten zu gewährleisten, ist es eine gute Idee, Container, Abstände usw. mit relativen Einheiten wie „ems“ und „rems“ oder Prozentangaben und Ansichteinheiten zu dimensionieren, wenn Sie möchten, dass sie sich je nach Ansichtsbreite variieren. Weitere Informationen dazu finden Sie in unserem [Leitfaden zu CSS-Werten und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units).

### Verwenden Sie keine Präprozessoren

Verwenden Sie keine Präprozessor-Syntax wie [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/) im Beispielcode. Auf MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Der Einsatz von Präprozessoren würde die Verständlichkeit der Beispiele nur erschweren und die Leser möglicherweise verwirren.

### Verwenden Sie keine speziellen CSS-Methodologien

In demselben Sinne wie die vorherige Richtlinie schreiben Sie keine Beispielcodes auf MDN Web Docs mit einer speziellen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/). Auch wenn sie gültige CSS-Syntax darstellen, können die Namenskonventionen für Personen, die mit diesen Methodologien nicht vertraut sind, verwirrend sein.

### Keine Resets verwenden

Um maximale Kontrolle über CSS plattformübergreifend zu erreichen, wurde häufig CSS-Reset eingesetzt, um alle Styles zu entfernen, bevor sie dann selbst wieder aufgebaut werden. Dies hat sicherlich seine Meriten, aber insbesondere in der modernen Welt können CSS-Resets übertrieben sein, was dazu führt, dass viel zusätzliche Zeit damit verbracht wird, Dinge neu zu implementieren, die ursprünglich nicht vollständig defekt waren, wie Standardabstände, Listen-Styles usw.

Wenn Sie dennoch das Gefühl haben, einen Reset verwenden zu müssen, ziehen Sie die Verwendung von [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht, die darauf abzielt, Dinge über Browser hinweg konsistenter zu gestalten, einige Standardärgernisse, die wir immer entfernen, loszuwerden (z. B. die Ränder auf `<body>`) und ein paar Fehler zu beheben.

## !important

`!important` ist das letzte Mittel, das in der Regel nur verwendet wird, wenn etwas überschrieben werden muss und es keinen anderen Weg gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis und sollte wenn möglich vermieden werden.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie CSS-Stil-Kommentare, um Code zu kommentieren, der nicht selbst-dokumentierend ist. Beachten Sie auch, dass Sie zwischen den Sternchen und dem Kommentar ein Leerzeichen lassen sollten.

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

Wo Anführungszeichen enthalten sein können oder sollten, verwenden Sie diese und zwar doppelte Anführungszeichen. Zum Beispiel:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Ausgeschriebene vs. Kurzform-Regeln

In der Regel ist es bei der Vermittlung der CSS-Syntax spezifischer klarer und deutlicher, ausgeschriebene Eigenschaften anstelle von knappen Kurzformen zu verwenden (es sei denn, Sie erklären natürlich die Kurzform anhand des Beispiels). Denken Sie daran, dass der Zweck von Beispielen auf MDN Web Docs darin besteht, Menschen etwas beizubringen und nicht, clever oder effizient zu sein. Hier erklären wir, warum wir empfehlen, mit ausgeschriebenen Regeln zu schreiben.

- Es ist oft schwieriger zu verstehen, was die Kurzform tut. Im folgenden Beispiel dauert es eine Weile, genau zu verstehen, was die {{cssxref("font")}}-Syntax tut.

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

- CSS-Kurzform hat potenziell zusätzliche Fallstricke – Standardwerte werden für Teile der Syntax festgelegt, die Sie nicht explizit festlegen, was zu unerwarteten Zurücksetzungen von zuvor in der Kaskade festgelegten Werten oder anderen erhofften Effekten führen kann. Die {{cssxref("grid")}}-Eigenschaft legt beispielsweise alle folgenden Standardwerte für nicht spezifizierte Elemente fest:

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
  animation: 3s ease-in 1s 2 reverse both paused slidein;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) analysiert werden kann, der [`animation-duration`](/de/docs/Web/CSS/animation-duration)-Eigenschaft zugewiesen, und der zweite Wert, der als Zeit analysiert werden kann, der [`animation-delay`](/de/docs/Web/CSS/animation-delay). (Weitere Informationen finden Sie in den [Animation Syntax](/de/docs/Web/CSS/animation#syntax)-Details.)

## Mobil-erste Media-Queries

In einem Stylesheet, das [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Styles für verschiedene Zielbildschirmgrößen enthält, fügen Sie zuerst die Styling für schmale Bildschirme/Mobilgeräte ein, bevor andere Media Queries eingefügt werden. Fügen Sie übergeordnete Bildschirme über aufeinanderfolgende Media Queries ein. Die Einhaltung dieser Regel hat viele Vorteile, die im Artikel [Mobile First](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) erklärt werden.

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

## Wert zur Deaktivierung von Eigenschaften

Wenn Sie Ränder (und andere Eigenschaften, die `0` oder `none` als Werte annehmen können) ausschalten, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - Durchsuchen Sie unsere CSS-Property-Referenzseiten, um einige gute, prägnante, sinnvolle CSS-Ausschnitte zu finden. Unsere interaktiven Beispiele im „Versuchen Sie es“-Abschnitt sind in der Regel so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
