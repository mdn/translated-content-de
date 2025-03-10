---
title: Richtlinien für das Schreiben von CSS-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

Die folgenden Richtlinien beschreiben, wie man CSS-Beispielcode für MDN Web Docs schreibt.

## Allgemeine Richtlinien für CSS-Codebeispiele

### Formatwahl

Meinungen über korrekte Einrückungen, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um ablenkende Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln kennenzulernen, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie beachten müssen.

### Planen Sie Ihr CSS

Bevor Sie sich darauf stürzen und große Mengen CSS schreiben, planen Sie Ihre Styles sorgfältig. Welche allgemeinen Styles werden benötigt, welche unterschiedlichen Layouts müssen erstellt werden, welche spezifischen Overrides müssen erstellt werden und sind sie wiederverwendbar? Vor allem sollten Sie versuchen, **zu viele Überschreibungen zu vermeiden**. Wenn Sie immer wieder Styles schreiben und dann einige Regeln weiter unten wieder aufheben, müssen Sie wahrscheinlich Ihre Strategie überdenken.

### Verwenden Sie flexible/relative Einheiten

Für maximale Flexibilität über den größtmöglichen Bereich von Geräten hinweg ist es eine gute Idee, Container, Padding usw. mit relativen Einheiten wie ems und rems oder Prozentsätzen und Viewport-Einheiten zu dimensionieren, wenn sie je nach Viewport-Breite variieren sollen. Sie können mehr darüber in unserem [Leitfaden zu CSS-Werten und -Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units) lesen.

### Keine Präprozessoren verwenden

Verwenden Sie keine Präprozessor-Syntax, wie z. B. [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) oder [Stylus](https://stylus-lang.com/), im Beispielcode. Auf MDN Web Docs dokumentieren wir die Vanilla-CSS-Sprache. Die Verwendung von Präprozessoren würde nur die Hürden zum Verständnis der Beispiele erhöhen und die Leser möglicherweise verwirren.

### Keine spezifischen CSS-Methodologien verwenden

Im gleichen Geist wie die vorherige Richtlinie sollten Sie keine Beispielcodes auf MDN Web Docs mit einer spezifischen CSS-Methodologie wie [BEM](https://getbem.com/naming/) oder [SMACSS](https://smacss.com/) schreiben. Obwohl sie gültige CSS-Syntaxen sind, können die Namenskonventionen für Personen, die mit diesen Methodologien nicht vertraut sind, verwirrend sein.

### Keine Resets verwenden

Um maximale Kontrolle über CSS auf verschiedenen Plattformen zu haben, haben viele Menschen früher CSS-Resets verwendet, um jeden Style zu entfernen, bevor sie dann alles wieder selbst aufgebaut haben. Das hat sicherlich seine Vorteile, aber insbesondere in der modernen Welt können CSS-Resets ein Overkill sein, was dazu führt, dass viel zusätzliche Zeit für die Neuerstellung von Dingen aufgewendet wird, die ursprünglich nicht vollständig fehlerhaft waren, wie z. B. Standardabstände, Listenstile usw.

Wenn Sie wirklich das Gefühl haben, dass Sie ein Reset benötigen, sollten Sie [normalize.css von Nicolas Gallagher](https://necolas.github.io/normalize.css/) in Betracht ziehen, das darauf abzielt, Dinge konsistenter über Browser hinweg zu machen, einige standardmäßige Ärgernisse zu beseitigen, die wir immer entfernen (zum Beispiel die Margins auf `<body>`) und ein paar Fehler zu beheben.

## !important

`!important` ist das letzte Mittel, das in der Regel nur verwendet wird, wenn Sie etwas überschreiben müssen und es keinen anderen Weg gibt, dies zu tun. Die Verwendung von `!important` ist eine schlechte Praxis, und Sie sollten es vermeiden, wo immer möglich.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## CSS-Kommentare

Verwenden Sie Kommentare im CSS-Stil, um Code zu kommentieren, der sich nicht selbst dokumentiert. Beachten Sie auch, dass Sie ein Leerzeichen zwischen die Sternchen und den Kommentar setzen sollten.

```css example-good
/* This is a CSS-style comment */
```

Platzieren Sie Ihre Kommentare auf separaten Zeilen, die dem Code vorangehen, auf den sie sich beziehen, wie folgt:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## Doppelte Anführungszeichen um Werte

Wo Anführungszeichen erscheinen können oder sollten, verwenden Sie sie, und verwenden Sie doppelte Anführungszeichen. Zum Beispiel:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

## Langform- vs. Kurzform-Regeln

In der Regel, wenn man die Details der CSS-Syntax lehrt, ist es klarer und offensichtlicher, Langform-Eigenschaften zu verwenden, anstatt knappe Kurzformen (außer natürlich, Sie erklären die Kurzform anhand des Beispiels). Denken Sie daran, dass der Zweck von Beispielen auf den MDN Web Docs darin besteht, Menschen zu lehren, nicht clever oder effizient zu sein. Wir erklären hier, warum das Schreiben mit Langform-Regeln empfohlen wird.

- Es ist oft schwieriger zu verstehen, was die Kurzform macht. Im Beispiel unten dauert es eine Weile, genau zu verstehen, was die {{cssxref("font")}}-Syntax macht.

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

- CSS-Kurzform bringt potenzielle zusätzliche Fallstricke mit sich — Standardwerte werden für Teile der Syntax gesetzt, die Sie nicht explizit festlegen, was zu unerwarteten Zurücksetzungen von Werten führen kann, die Sie früher in der Kaskade festgelegt haben, oder zu anderen unerwarteten Effekten. Die {{cssxref("grid")}}-Eigenschaft setzt zum Beispiel alle folgenden Standardwerte für Elemente, die nicht spezifiziert sind:

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

- Einige Kurzformen funktionieren nur dann wie erwartet, wenn Sie die verschiedenen Wertkomponenten in einer bestimmten Reihenfolge einschließen. Dies ist im Fall von CSS-Animationen der Fall. Im Beispiel unten ist die erwartete Reihenfolge als Kommentar vermerkt:

  ```css
  /* duration | timing-function | delay | iteration-count
    direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slide-in;
  ```

  In diesem Beispiel wird der erste Wert, der als [`<time>`](/de/docs/Web/CSS/time) geparst werden kann, der Eigenschaft [`animation-duration`](/de/docs/Web/CSS/animation-duration) zugewiesen, und der zweite Wert, der als Zeit geparst werden kann, wird [`animation-delay`](/de/docs/Web/CSS/animation-delay) zugewiesen. (Weitere Informationen finden Sie in den [Animationsyntax](/de/docs/Web/CSS/animation#syntax)-Details.)

## Mobile-First-Media Queries

In einem Stylesheet, das [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)-Stile für verschiedene Ziel-Viewport-Größen enthält, fügen Sie zuerst die schmalen Bildschirm-/Mobil-Stile ein, bevor andere Media Queries angetroffen werden. Fügen Sie Styles für größere Viewport-Größen über aufeinanderfolgende Media Queries hinzu. Das Befolgen dieser Regel hat viele Vorteile, die im [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) erklärt werden.

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

## Wert zum Deaktivieren von Eigenschaften

Wenn Sie Ränder (und andere Eigenschaften, die `0` oder `none` als Werte akzeptieren) deaktivieren, verwenden Sie `0` anstelle von `none`:

```css example-good
border: 0;
```

## Siehe auch

[CSS-Referenzindex](/de/docs/Web/CSS/Reference#index) - Durchsuchen Sie unsere Referenzseiten zu CSS-Eigenschaften, um einige gute, prägnante, aussagekräftige CSS-Beispiele zu entdecken. Unsere interaktiven Beispiele im Abschnitt "Try it" sind allgemein so geschrieben, dass sie den auf dieser Seite beschriebenen Richtlinien folgen.
