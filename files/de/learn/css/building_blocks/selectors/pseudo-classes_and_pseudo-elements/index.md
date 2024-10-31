---
title: Pseudo-Klassen und Pseudo-Elemente
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
l10n:
  sourceCommit: 26a87658fdd41e4d55dfd9cd3e9c1025e3038988
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

Die nächste Gruppe von Selektoren, die wir uns ansehen werden, sind sogenannte **Pseudo-Klassen** und **Pseudo-Elemente**. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie Sie sie verwenden, können Sie die Liste durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, geeignet ist. Auch hier ist die entsprechende MDN-Seite für jeden Selektor hilfreich, um die Browser-Unterstützung zu erklären.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS: Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen der Pseudo-Klassen- und Pseudo-Element-Selektoren.</td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudo-Klasse?

Eine Pseudo-Klasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z. B. das erste Element ihres Typs sind oder vom Mauszeiger überfahren werden. Sie verhalten sich oft so, als ob Sie einer Klasse zu einem Teil des Dokuments hinzugefügt hätten, was Ihnen hilft, unnötige Klassen in Ihrem Markup zu reduzieren und Ihnen flexibleren, pflegbareren Code zu geben.

Pseudo-Klassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudo-Klasse.

### Einfaches Pseudo-Klassen-Beispiel

Schauen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann der Klasse CSS hinzufügen, wie im ersten Beispiel unten gezeigt:

```html live-sample___first-child
<article>
  <p class="first">
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___first-child
.first {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-child")}}

Dies könnte jedoch ärgerlich zu pflegen sein – was, wenn ein neuer Absatz oben im Dokument hinzugefügt wird? Wir müssten die Klasse auf den neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudo-Klassen-Selektor verwenden – dieser wird _immer_ das erste Kindelement im Artikel anvisieren, und wir müssten das HTML nicht mehr bearbeiten (was vielleicht sowieso nicht immer möglich ist, möglicherweise, weil es von einem CMS generiert wird).

```html live-sample___first-child2
<article>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___first-child2
article p:first-child {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-child2")}}

Alle Pseudo-Klassen verhalten sich auf diese Weise. Sie zielen auf einen Teil Ihres Dokuments ab, der sich in einem bestimmten Zustand befindet, und verhalten sich, als ob Sie eine Klasse in Ihr HTML eingefügt hätten. Sehen Sie sich einige andere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist zulässig, Pseudo-Klassen und Elemente ohne einen vorgelagerten Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben, und die Regel würde auf _jedes_ Element angewendet werden, das das erste Kind eines `<article>`-Elements ist, nicht nur auf einen Absatz als erstes Kind – `:first-child` ist äquivalent zu `*:first-child`. Oftmals möchten Sie jedoch mehr Kontrolle haben, deshalb müssen Sie spezifischer sein.

### Benutzeraktions-Pseudo-Klassen

Einige Pseudo-Klassen gelten nur, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudo-Klassen**, manchmal auch als **dynamische Pseudo-Klassen** bezeichnet, verhalten sich so, als ob eine Klasse zum Element hinzugefügt worden wäre, wenn der Benutzer damit interagiert. Beispiele dafür sind:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer seinen Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element durch Klicken oder die Verwendung von Tastatursteuerungen fokussiert.

```html live-sample___hover
<p><a href="">Hover over me</a></p>
```

```css live-sample___hover
a:link,
a:visited {
  color: rebeccapurple;
  font-weight: bold;
}

a:hover {
  color: hotpink;
}
```

{{EmbedLiveSample("hover")}}

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich ähnlich. Sie verhalten sich jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt einer bestehenden Elementen eine Klasse hinzuzufügen.

Pseudo-Elemente beginnen mit einem Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten die einfache Doppelpunkt-Syntax, daher können Sie dies manchmal in Code oder Beispielen sehen. Moderne Browser unterstützen die frühen Pseudo-Elemente mit einfacher oder doppelter Doppelpunkt-Syntax für die Abwärtskompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen möchten, könnten Sie sie in ein `<span>`-Element einwickeln und einen Elementselektor verwenden; das würde jedoch fehlschlagen, wenn die Anzahl der Worte, die Sie umwickelt haben, länger oder kürzer als die Breite des Elternelements ist. Da wir in der Regel nicht wissen, wie viele Wörter in eine Zeile passen – da sich das ändern wird, wenn sich die Bildschirmbreite oder Schriftgröße ändert – ist es unmöglich, dies durch das Hinzufügen von HTML robust zu tun.

Der `::first-line` Pseudo-Element-Selektor wird dies für Sie zuverlässig tun – wenn die Anzahl der Wörter zunimmt oder abnimmt, wird es immer noch nur die erste Zeile auswählen.

```html live-sample___first-line
<article>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___first-line
article p::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-line")}}

Es verhält sich so, als ob ein `<span>` magisch um diese erste formatierte Zeile gewickelt wäre, und sie jedes Mal aktualisiert würde, wenn sich die Zeilenlänge ändert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Kombination von Pseudo-Klassen und Pseudo-Elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen möchten, könnten Sie die `:first-child` und `::first-line` Selektoren verketten. Versuchen Sie, das vorherige Live-Beispiel zu bearbeiten, sodass es die folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich in einem `<article>`-Element befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Inhalte mit ::before und ::after generieren

Es gibt ein paar spezielle Pseudo-Elemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwendet werden, um Inhalte mit CSS in Ihr Dokument einzufügen.

Sie könnten diese verwenden, um eine Zeichenfolge einzufügen, wie im folgenden Live-Beispiel. Versuchen Sie, den Textwert der {{cssxref("content")}} Eigenschaft zu ändern und sehen Sie, wie er sich im Output ändert. Sie könnten auch das `::before` Pseudo-Element in `::after` ändern und sehen, dass der Text am Ende des Elements eingefügt wird, anstatt am Anfang.

```html live-sample___before
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before
.box::before {
  content: "This should show before the other content. ";
}
```

{{EmbedLiveSample("before")}}

Das Einfügen von Textstrings aus CSS ist allerdings nicht etwas, das wir im Web sehr oft tun, da dieser Text für einige Bildschirmleser unzugänglich ist und möglicherweise schwer für jemanden zu finden und zu bearbeiten ist.

Ein gültigerer Verwendungszweck dieser Pseudo-Elemente ist das Einfügen eines Symbols, zum Beispiel der kleine Pfeil im folgenden Beispiel, der ein visuelles Indiz darstellt, das wir nicht von einem Bildschirmleser vorgelesen haben möchten:

```html live-sample___after-icon
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

Diese Pseudo-Elemente werden auch häufig verwendet, um eine leere Zeichenfolge einzufügen, die dann wie jedes Element auf der Seite gestaltet werden kann.

Im nächsten Beispiel haben wir eine leere Zeichenfolge mit dem `::before` Pseudo-Element hinzugefügt. Wir haben dies auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe gestalten können. Dann verwenden wir CSS, um es wie jedes Element zu gestalten. Sie können mit dem CSS spielen und ändern, wie es aussieht und sich verhält.

```html live-sample___before-styled
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before-styled
.box::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  border: 1px solid black;
}
```

{{EmbedLiveSample("before-styled")}}

Die Verwendung der `::before` und `::after` Pseudo-Elemente zusammen mit der `content`-Eigenschaft wird in CSS als "Generated Content" bezeichnet, und Sie werden diese Technik oft für verschiedene Aufgaben verwendet sehen. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen dabei hilft, einen Pfeil mit CSS zu generieren. Sehen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in Verwendung sehen. Wann immer Sie diese Selektoren sehen, sehen Sie sich die {{cssxref("content")}}-Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudo-Klassen und Pseudo-Elemente eingeführt, die spezielle Arten von Selektoren sind.

Pseudo-Klassen ermöglichen es Ihnen, ein Element in einem bestimmten Zustand anzusprechen, als ob Sie eine Klasse für diesen Zustand dem DOM hinzugefügt hätten. Pseudo-Elemente verhalten sich so, als ob Sie ein ganz neues Element zum DOM hinzugefügt hätten, und ermöglichen es Ihnen, dieses zu gestalten. Die `::before` und `::after` Pseudo-Elemente ermöglichen es Ihnen, Inhalte mit CSS in das Dokument einzufügen.

Im nächsten Artikel werden wir mehr über [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) lernen.

## Siehe auch

- [Referenz zu Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [Referenz zu Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}
