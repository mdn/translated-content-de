---
title: Pseudoklassen und Pseudoelemente
short-title: Pseudoklassen und Elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Der nächste Satz von Selektoren, den wir uns ansehen werden, wird als **Pseudoklassen** und **Pseudoelemente** bezeichnet. Davon gibt es viele, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um zu prüfen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >HTML-Grundsyntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Pseudoklassen und Pseudoelemente.</li>
          <li>Der Unterschied zwischen beiden.</li>
          <li>Kombinieren von Pseudoklassen und Pseudoelementen.</li>
          <li>Generierte Inhalte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudoklasse?

Eine Pseudoklasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z. B. das erste Element ihres Typs sind oder durch den Mauszeiger schwebend berührt werden. Sie wirken oft so, als hätten Sie einer Klasse einen Teil Ihres Dokuments zugewiesen, was Ihnen hilft, überflüssige Klassen in Ihrem Markup zu reduzieren und flexibleren, wartbaren Code zu erstellen.

Pseudoklassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudoklasse.

### Ein einfaches Pseudoklassenbeispiel

Schauen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann dieser Klasse CSS hinzufügen, wie im ersten Beispiel unten gezeigt:

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

Dies könnte jedoch lästig zu pflegen sein — was, wenn ein neuer Absatz oben in das Dokument eingefügt wird? Wir müssten die Klasse zu dem neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den Pseudoklassen-Selektor {{cssxref(":first-child")}} verwenden — dieser wird _immer_ das erste Kindelement im Artikel anvisieren, und wir müssten das HTML nicht mehr bearbeiten (was möglicherweise ohnehin nicht immer möglich ist, vielleicht, weil es von einem CMS generiert wird).

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

Alle Pseudoklassen verhalten sich auf ähnliche Weise. Sie zielen auf einen Teil Ihres Dokuments ab, der sich in einem bestimmten Zustand befindet, und verhalten sich, als ob Sie eine Klasse in Ihr HTML eingefügt hätten. Schauen Sie sich einige andere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist gültig, Pseudoklassen und -elemente ohne vorausgehenden Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben, und die Regel würde auf _jedes_ Element angewendet, das das erste Kind eines `<article>`-Elements ist, nicht nur auf einen ersten Absatz — `:first-child` ist gleichbedeutend mit `*:first-child`. In der Regel möchten Sie jedoch mehr Kontrolle, sodass Sie spezifischer sein müssen.

### Pseudoklassen für Benutzeraktionen

Einige Pseudoklassen gelten nur, wenn der Benutzer auf irgendeine Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudoklassen**, manchmal auch als **dynamische Pseudoklassen** bezeichnet, verhalten sich, als wäre dem Element eine Klasse hinzugefügt worden, wenn der Benutzer damit interagiert. Beispiele beinhalten:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer seinen Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element durch Klicken oder mit Tastatursteuerungen fokussiert.

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

Pseudoelemente verhalten sich auf ähnliche Weise. Sie tun jedoch so, als ob Sie ein ganz neues HTML-Element in das Markup eingefügt hätten, anstatt einer bestehenden Klassen von Elementen eine Klasse zuzuweisen.

Pseudoelemente beginnen mit einem doppelten Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudoelement.

> [!NOTE]
> Einige frühere Pseudoelemente verwendeten die Syntax mit einem einzigen Doppelpunkt, daher können Sie dies manchmal in Code oder Beispielen sehen. Moderne Browser unterstützen die früheren Pseudoelemente mit sowohl Einzel- als auch Doppelpunkt-Syntax aus Kompatibilitätsgründen.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen wollten, könnten Sie sie in ein `<span>`-Element einwickeln und einen Elementselektor verwenden; das würde jedoch fehlschlagen, wenn die Anzahl der umwickelten Wörter länger oder kürzer als die Breite des Elternelements wäre. Da wir normalerweise nicht wissen, wie viele Wörter in eine Zeile passen — da sich das ändern würde, wenn sich die Bildschirmbreite oder Schriftgröße ändert — ist es unmöglich, dies robust zu tun, indem HTML hinzugefügt wird.

Der Pseudoelementselektor `::first-line` wird dies zuverlässig für Sie tun — wenn die Anzahl der Wörter zunimmt oder abnimmt, wird trotzdem nur die erste Zeile ausgewählt.

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

Es verhält sich, als ob ein `<span>` magisch um diese erste formatierte Zeile gewickelt wäre und sich jedes Mal aktualisiert, wenn sich die Zeilenlänge ändert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Kombinieren von Pseudoklassen und Pseudoelementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen wollten, könnten Sie die Selektoren `:first-child` und `::first-line` miteinander verketten. Bearbeiten Sie das vorherige Live-Beispiel so, dass es den folgenden CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich in einem `<article>`-Element befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Generieren von Inhalten mit ::before und ::after

Es gibt ein paar spezielle Pseudoelemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwendet werden, um Inhalte mit CSS in Ihr Dokument einzufügen.

Sie könnten diese verwenden, um einen Textstring einzufügen, wie im folgenden Live-Beispiel. Versuchen Sie, den Textwert der {{cssxref("content")}}-Eigenschaft zu ändern und sehen Sie, wie er sich in der Ausgabe ändert. Sie könnten auch das Pseudoelement `::before` in `::after` ändern und sehen, dass der Text am Ende des Elements anstatt am Anfang eingefügt wird.

```html live-sample___before
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before
.box::before {
  content: "This should show before the other content. ";
}
```

{{EmbedLiveSample("before")}}

Das Einfügen von Textstrings aus CSS machen wir jedoch nicht oft im Web, da dieser Text für einige Screenreader unzugänglich ist und für jemanden in der Zukunft schwer zu finden und zu bearbeiten sein könnte.

Eine sinnvolle Anwendung dieser Pseudoelemente besteht darin, ein Symbol einzufügen, zum Beispiel den kleinen Pfeil, der im folgenden Beispiel hinzugefügt wird, welcher ein visuelles Zeichen ist, das wir nicht von einem Screenreader vorlesen lassen möchten:

```html live-sample___after-icon
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

Diese Pseudoelemente werden auch häufig verwendet, um einen leeren String einzufügen, der dann wie jedes Element auf der Seite gestylt werden kann.

Im nächsten Beispiel haben wir einen leeren String mit dem Pseudoelement `::before` hinzugefügt. Wir haben es auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe gestalten können. Wir verwenden dann CSS, um es wie jedes Element zu stylen. Sie können mit dem CSS spielen und ändern, wie es aussieht und sich verhält.

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

Die Verwendung der `::before` und `::after` Pseudoelemente zusammen mit der `content`-Eigenschaft wird als "Generated Content" in CSS bezeichnet, und Sie werden diese Technik häufig für verschiedene Aufgaben sehen. Ein großartiges Beispiel ist die Website [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu generieren. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente in Aktion sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}}-Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudoklassen und -Pseudoelemente eingeführt, die besondere Arten von Selektoren sind.

Pseudoklassen ermöglichen es Ihnen, ein Element in einem bestimmten Zustand zu selektieren, als ob Sie dem DOM eine Klasse für diesen Zustand hinzugefügt hätten. Pseudoelemente verhalten sich so, als ob Sie ein ganz neues Element zum DOM hinzugefügt hätten, und ermöglichen es Ihnen, dieses zu stylen. Die `::before` und `::after`-Pseudoelemente ermöglichen es Ihnen, Inhalte mit CSS in das Dokument einzufügen.

Im nächsten Artikel werden wir über Kombinatoren lernen.

## Siehe auch

- [Pseudoklassen-Referenz](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoelemente-Referenz](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
