---
title: Pseudo-Klassen und Pseudo-Elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Die nächste Gruppe von Selektoren, die wir betrachten werden, wird als **Pseudo-Klassen** und **Pseudo-Elemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie einsetzt, können Sie sich die verschiedenen Typen ansehen, um herauszufinden, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Pseudo-Klassen und Pseudo-Elemente.</li>
          <li>Der Unterschied zwischen den beiden.</li>
          <li>Kombination von Pseudo-Klassen und Pseudo-Elementen.</li>
          <li>Generierte Inhalte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudo-Klasse?

Eine Pseudo-Klasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z. B. sind sie das erste Element ihres Typs oder werden sie vom Mauszeiger überhoben. Sie verhalten sich oft so, als hätten Sie einer bestimmten Stelle Ihres Dokuments eine Klasse zugewiesen. So können Sie übermäßige Klassen in Ihrem Markup reduzieren und flexibleren, wartbaren Code schreiben.

Pseudo-Klassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudo-Klasse.

### Einfaches Beispiel für eine Pseudo-Klasse

Sehen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen, wie im ersten Beispiel unten gezeigt:

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

Dies könnte jedoch mühsam zu warten sein — was, wenn ein neuer Absatz an die Spitze des Dokuments hinzugefügt wird? Wir müssten die Klasse zum neuen Absatz verschieben. Statt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}}-Pseudo-Klassen-Selektor verwenden — dieser wird _immer_ das erste Kindelement im Artikel anvisieren, und wir müssten das HTML nicht mehr bearbeiten (dies ist möglicherweise ohnehin nicht immer möglich, vielleicht weil es von einem CMS generiert wird).

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

Alle Pseudo-Klassen verhalten sich auf diese Art und Weise. Sie zielen auf einen Teil Ihres Dokuments ab, der sich in einem bestimmten Zustand befindet, und verhalten sich, als hätten Sie dem HTML eine Klasse hinzugefügt. Schauen Sie sich einige andere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist gültig, Pseudo-Klassen und -Elemente ohne vorangestellten Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben und die Regel würde für _jedes_ Element gelten, das das erste Kind eines `<article>`-Elements ist, nicht nur ein erster Kind-Absatz — `:first-child` ist äquivalent zu `*:first-child`. Normalerweise möchte man jedoch mehr Kontrolle, sodass Sie spezifischer sein müssen.

### Benutzeraktions-Pseudo-Klassen

Einige Pseudo-Klassen gelten nur, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudo-Klassen**, manchmal als **dynamische Pseudo-Klassen** bezeichnet, verhalten sich so, als wäre dem Element eine Klasse hinzugefügt worden, wenn der Benutzer damit interagiert. Beispiele umfassen:

- [`:hover`](/de/docs/Web/CSS/:hover) — bereits erwähnt; dies gilt nur, wenn der Benutzer den Zeiger über ein Element bewegt, typischerweise einen Link.
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

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich auf ähnliche Weise. Sie wirken jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt einer bestehenden Elementenklasse zuzuweisen.

Pseudo-Elemente beginnen mit einem Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten die Syntax mit einem Doppelpunkt, sodass Sie diese vielleicht manchmal im Code oder in Beispielen sehen. Moderne Browser unterstützen die frühen Pseudo-Elemente mit der Syntax für einen und zwei Doppelpunkte zur Rückwärtskompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen möchten, könnten Sie sie in ein `<span>`-Element einfügen und einen Elementselektor verwenden; dies würde jedoch scheitern, wenn die Anzahl der eingeschlossenen Wörter länger oder kürzer wäre als die Breite des übergeordneten Elements. Da wir dazu neigen, nicht zu wissen, wie viele Wörter in eine Zeile passen — da sich dies ändert, wenn sich die Bildschirmbreite oder die Schriftgröße ändert — ist es unmöglich, dies robust durch einfaches Hinzufügen von HTML zu erreichen.

Der `::first-line` Pseudo-Element-Selektor wird dies für Sie zuverlässig erledigen — wenn die Anzahl der Wörter zunimmt oder abnimmt, wird dennoch nur die erste Zeile ausgewählt.

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

Es wirkt, als ob ein `<span>` auf magische Weise um diese formatierte erste Zeile gewickelt wäre und bei jeder Änderung der Zeilenlänge aktualisiert würde.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Kombination von Pseudo-Klassen und Pseudo-Elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen möchten, können Sie die `:first-child` und `::first-line` Selektoren kombinieren. Versuchen Sie, das vorherige Live-Beispiel zu bearbeiten, sodass es den folgenden CSS-Code verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich in einem `<article>`-Element befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Generierung von Inhalten mit ::before und ::after

Es gibt einige spezielle Pseudo-Elemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwendet werden, um Inhalte mithilfe von CSS in Ihr Dokument einzufügen.

Sie könnten diese verwenden, um einen Textstring einzufügen, wie im Live-Beispiel unten. Versuchen Sie, den Textwert der {{cssxref("content")}}-Eigenschaft zu ändern und beobachten Sie die Änderung in der Ausgabe. Sie könnten auch das `::before`-Pseudo-Element in `::after` ändern und sehen, dass der Text am Ende des Elements statt am Anfang eingefügt wird.

```html live-sample___before
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before
.box::before {
  content: "This should show before the other content. ";
}
```

{{EmbedLiveSample("before")}}

Das Einfügen von Textstrings aus CSS ist jedoch wirklich etwas, das wir im Web nicht sehr oft tun, da dieser Text für einige Bildschirmleseprogramme unzugänglich ist und möglicherweise schwer zu finden und in Zukunft zu bearbeiten ist.

Eine gültigere Verwendung dieser Pseudo-Elemente besteht darin, ein Icon einzufügen, zum Beispiel den kleinen Pfeil, der im folgenden Beispiel hinzugefügt wird, der ein visuelles Indiz ist, das wir nicht von einem Bildschirmleseprogramm vorlesen lassen möchten:

```html live-sample___after-icon
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

Diese Pseudo-Elemente werden auch häufig verwendet, um einen leeren String einzufügen, den man dann genauso wie jedes andere Element auf der Seite gestalten kann.

Im nächsten Beispiel haben wir einen leeren String mit dem `::before`-Pseudo-Element hinzugefügt. Wir haben dies auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe gestalten können. Dann verwenden wir CSS, um es wie jedes andere Element zu gestalten. Sie können mit dem CSS spielen und ändern, wie es aussieht und sich verhält.

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

Die Verwendung der `::before`- und `::after`-Pseudo-Elemente zusammen mit der `content`-Eigenschaft wird in CSS als "Generierte Inhalte" bezeichnet, und Sie werden diese Technik oft für verschiedene Aufgaben sehen. Ein großartiges Beispiel ist die Website [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu generieren. Schauen Sie sich das CSS an, wenn Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in Aktion sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}} Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudo-Klassen und Pseudo-Elemente eingeführt, die spezielle Arten von Selektoren sind.

Pseudo-Klassen ermöglichen es Ihnen, ein Element zu selektieren, wenn es sich in einem bestimmten Zustand befindet, als ob Sie für diesen Zustand eine Klasse zum DOM hinzugefügt hätten. Pseudo-Elemente wirken, als hätten Sie ein ganz neues Element zum DOM hinzugefügt und ermöglichen es Ihnen, dieses zu gestalten. Die `::before` und `::after` Pseudo-Elemente ermöglichen es Ihnen, mit CSS Inhalte in das Dokument einzufügen.

Im nächsten Artikel lernen wir über Kombinatoren.

## Siehe auch

- [Referenz zu Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [Referenz zu Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
