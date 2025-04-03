---
title: Pseudoklassen und Pseudoelemente
short-title: Pseudoklassen und Elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Die nächste Gruppe von Selektoren, die wir uns ansehen werden, sind **Pseudoklassen** und **Pseudoelemente**. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe geeignet ist, die Sie erreichen möchten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Pseudoklassen und Pseudoelemente.</li>
          <li>Der Unterschied zwischen den beiden.</li>
          <li>Kombinieren von Pseudoklassen und Pseudoelementen.</li>
          <li>Generierter Inhalt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudoklasse?

Eine Pseudoklasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z. B. das erste Element ihres Typs oder Elemente, über die der Mauszeiger bewegt wird. Sie verhalten sich oft so, als hätten Sie eine Klasse auf einen Teil Ihres Dokuments angewendet, wodurch Sie überschüssige Klassen in Ihrem Markup reduzieren und flexibleren, wartbareren Code erhalten können.

Pseudoklassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudoklasse.

### Grundlegendes Pseudoklassen-Beispiel

Schauen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen, wie im ersten Beispiel unten gezeigt:

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

Dies könnte jedoch nervig sein, um es zu pflegen – was, wenn ein neuer Absatz oben im Dokument hinzugefügt wird? Wir müssten die Klasse zum neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudoklassenselektor verwenden – dieser wird _immer_ das erste Kindelement im Artikel anwählen, und wir müssten das HTML nicht mehr bearbeiten (was möglicherweise nicht immer möglich ist, vielleicht aufgrund der Generierung durch ein CMS).

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

Alle Pseudoklassen verhalten sich auf diese Weise. Sie zielen auf einen Teil Ihres Dokuments, der sich in einem bestimmten Zustand befindet, und verhalten sich so, als hätten Sie eine Klasse in Ihr HTML hinzugefügt. Sehen Sie sich einige andere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist gültig, Pseudoklassen und -elemente ohne einen vorhergehenden Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben und die Regel würde auf _jedes_ Element angewendet, das das erste Kind eines `<article>`-Elements ist, nicht nur ein Absatz erstes Kind — `:first-child` ist gleichbedeutend mit `*:first-child`. Meistens will man jedoch mehr Kontrolle darüber haben, weshalb man spezifischer sein muss.

### Benutzeraktions-Pseudoklassen

Einige Pseudoklassen gelten nur, wenn der Benutzer auf eine bestimmte Weise mit dem Dokument interagiert. Diese **Benutzeraktions**-Pseudoklassen, manchmal auch als **dynamische Pseudoklassen** bezeichnet, agieren so, als ob eine Klasse zu dem Element hinzugefügt worden wäre, wenn der Benutzer mit ihm interagiert. Beispiele sind:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer seinen Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element durch Klicken oder Verwenden von Tastatursteuerungen fokussiert.

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

## Was ist ein Pseudoelement?

Pseudoelemente verhalten sich auf ähnliche Weise. Sie agieren jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt eine Klasse zu vorhandenen Elementen hinzuzufügen.

Pseudoelemente beginnen mit einem Doppeldoppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudoelement.

> [!NOTE]
> Einige frühe Pseudoelemente verwendeten die Einzel-Doppelpunkt-Syntax, daher sehen Sie diese manchmal in Code oder Beispielen. Moderne Browser unterstützen die frühen Pseudoelemente mit Einzel- oder Doppel-Doppelpunkt-Syntax für die Abwärtskompatibilität.

Beispielsweise könnte man, wenn man die erste Zeile eines Absatzes auswählen möchte, sie in ein `<span>`-Element einwickeln und einen Element-Selektor verwenden; das würde jedoch fehlschlagen, wenn die Anzahl der umbrochenen Wörter länger oder kürzer als die Breite des Elternelements wäre. Da wir tendenziell nicht wissen, wie viele Wörter in eine Zeile passen – da sich das ändern wird, wenn die Bildschirmbreite oder die Schriftgröße geändert wird – ist es unmöglich, dies durch Hinzufügen von HTML robust zu tun.

Der `::first-line` Pseudoelement-Selektor wird dies für Sie zuverlässig tun – wenn die Anzahl der Wörter zu- oder abnimmt, wird er dennoch nur die erste Zeile auswählen.

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

Es verhält sich, als ob ein `<span>` magisch um diese erste formatierte Zeile gewickelt wäre und aktualisiert würde, jedes Mal wenn sich die Zeilenlänge ändert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Kombinieren von Pseudoklassen und -elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen möchten, könnten Sie die `:first-child` und `::first-line` Selektoren kombinieren. Versuchen Sie, das vorherige Live-Beispiel zu bearbeiten, sodass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>` Elements auswählen wollen, welches sich in einem `<article>` Element befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Generierten Inhalt mit ::before und ::after erzeugen

Es gibt ein paar spezielle Pseudoelemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwendet werden, um Inhalt mit CSS in Ihr Dokument einzufügen.

Diese könnten verwendet werden, um eine Zeichenkette einzufügen, wie im folgenden Live-Beispiel. Versuchen Sie, den Textwert der {{cssxref("content")}} Eigenschaft zu ändern, und sehen Sie, wie sich der Output verändert. Sie könnten auch das `::before` Pseudoelement in `::after` ändern und sehen, dass der Text am Ende des Elements anstatt am Anfang eingefügt wird.

```html live-sample___before
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before
.box::before {
  content: "This should show before the other content. ";
}
```

{{EmbedLiveSample("before")}}

Das Einfügen von Textzeichenketten aus CSS ist jedoch nicht wirklich etwas, was wir sehr oft im Web tun, da dieser Text für einige Screenreader unzugänglich ist und es schwierig sein kann, ihn wiederzufinden und zu bearbeiten.

Eine validere Verwendung dieser Pseudoelemente ist das Einfügen eines Symbols, zum Beispiel des kleinen Pfeils im folgenden Beispiel, welches ein visueller Indikator ist, den wir nicht von einem Screenreader vorgelesen haben möchten:

```html live-sample___after-icon
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

Diese Pseudoelemente werden auch häufig verwendet, um eine leere Zeichenkette einzufügen, die dann wie jedes andere Element auf der Seite gestylt werden kann.

Im nächsten Beispiel haben wir eine leere Zeichenkette mit dem `::before` Pseudoelement hinzugefügt. Wir haben dies auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe stylen können. Wir verwenden dann CSS, um es wie jedes Element zu stylen. Sie können mit dem CSS herumspielen und ändern, wie es aussieht und sich verhält.

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

{{EmbedLiveSample("before-styled", "", "160")}}

Die Verwendung von `::before` und `::after` Pseudoelementen zusammen mit der `content` Eigenschaft wird in CSS als "Generierter Inhalt" bezeichnet, und Sie werden oft sehen, dass diese Technik für verschiedene Aufgaben verwendet wird. Ein großartiges Beispiel ist die Webseite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu erstellen. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente in Verwendung sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}} Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudoklassen und -elemente eingeführt, die spezielle Arten von Selektoren sind.

Pseudoklassen ermöglichen es Ihnen, ein Element anzuwählen, wenn es sich in einem bestimmten Zustand befindet, als ob Sie eine Klasse für diesen Zustand zum DOM hinzugefügt hätten. Pseudoelemente agieren so, als hätten Sie ein ganz neues Element zum DOM hinzugefügt und ermöglichen es Ihnen, dies zu stylen. Die `::before` und `::after` Pseudoelemente ermöglichen es Ihnen, Inhalte mit CSS in das Dokument einzufügen.

Im nächsten Artikel lernen wir über Kombinatoren.

## Siehe auch

- [Pseudoklassen-Referenz](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoelemente-Referenz](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
