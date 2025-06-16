---
title: Pseudo-Klassen und Pseudo-Elemente
short-title: Pseudo-Klassen und Elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Die nächste Gruppe von Selektoren, die wir uns ansehen werden, sind **Pseudo-Klassen** und **Pseudo-Elemente**. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchsehen, um festzustellen, ob etwas dabei ist, das für die Aufgabe, die Sie zu erreichen versuchen, geeignet ist.

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
          <li>Pseudo-Klassen und Pseudo-Elemente.</li>
          <li>Der Unterschied zwischen den beiden.</li>
          <li>Kombinieren von Pseudo-Klassen und Pseudo-Elementen.</li>
          <li>Generierter Inhalt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudo-Klasse?

Eine Pseudo-Klasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z.B. das erste Element ihres Typs sind oder vom Mauszeiger überfahren werden. Sie wirken oft, als hätten Sie eine Klasse auf einen Teil Ihres Dokuments angewendet, wodurch Sie überflüssige Klassen in Ihrem Markup vermeiden und flexibleren, wartungsfreundlicheren Code erhalten.

Pseudo-Klassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudo-Klasse.

### Einfaches Beispiel für eine Pseudo-Klasse

Schauen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS für diese Klasse hinzufügen:

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

Dies könnte jedoch mühsam zu pflegen sein — was, wenn ein neuer Absatz am Anfang des Dokuments hinzugefügt wird? Wir müssten die Klasse auf den neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudo-Klassen-Selektor verwenden — dieser wird _immer_ das erste Kindelement eines Elements (in diesem Fall das `<article>`) anvisieren, und wir müssten das HTML nicht mehr bearbeiten (was möglicherweise sowieso nicht möglich ist, vielleicht weil es von einem CMS generiert wird).

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

Alle Pseudo-Klassen verhalten sich so. Sie zielen auf einen Teil Ihres Dokuments ab, der sich in einem bestimmten Zustand befindet, als hätten Sie eine Klasse in Ihr HTML eingefügt.

> [!NOTE]
> Es ist zulässig, Pseudo-Klassen und -Elemente ohne vorangegangenen Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben, und die Regel würde auf _jedes_ Element angewendet, das das erste Kind eines `<article>`-Elements ist, nicht nur auf einen Absatz als erstes Kind — `:first-child` ist äquivalent zu `*:first-child`. Normalerweise möchte man jedoch mehr Kontrolle darüber, daher müssen Sie spezifischer sein.

### Benutzeraktions-Pseudo-Klassen

Einige Pseudo-Klassen wenden sich nur an, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudo-Klassen**, manchmal auch **dynamische Pseudo-Klassen** genannt, verhalten sich so, als wäre eine Klasse hinzugefügt worden, wenn der Benutzer mit dem Element interagiert. Beispiele sind:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer seinen Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element durch Klicken oder Verwenden der Tastatursteuerelemente fokussiert.

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

### Spielen mit Pseudo-Klassen

Gehen Sie zurück zu unserem [ersten Pseudo-Klassen-Beispiel](#einfaches_beispiel_für_eine_pseudo-klasse) und bearbeiten Sie das CSS mit dem MDN-Spielplatz:

1. Fügen Sie eine Regel hinzu, die den Text des Absatzes `blau` färbt, wenn er überfahren wird.
2. Fügen Sie eine Regel hinzu, die nur den letzten Absatz innerhalb des Artikels auswählt und ihm eine `orange` `background-color` zuweist.

Sie finden Informationen zu allen anderen verfügbaren Pseudo-Klassen auf der MDN [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) Referenzseite.

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich auf ähnliche Weise. Sie wirken jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt eine Klasse auf vorhandene Elemente anzuwenden.

Pseudo-Elemente beginnen mit einem Doppel-Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten die Syntax mit einem einzelnen Doppelpunkt, sodass Sie dies manchmal im Code oder in Beispielen sehen können. Moderne Browser unterstützen die frühen Pseudo-Elemente mit Einzel- oder Doppel-Doppelpunkt-Syntax für die Abwärtskompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen wollten, könnten Sie sie in ein `<span>`-Element einwickeln und einen Elementselektor verwenden; jedoch würde das fehlschlagen, wenn die Anzahl der eingebundenen Wörter länger oder kürzer als die Breite des übergeordneten Elements wäre. Da wir tendenziell nicht wissen, wie viele Wörter in eine Zeile passen werden — da sich dies ändern wird, wenn sich die Bildschirmbreite oder Schriftgröße ändert — ist es unmöglich, dies durch Hinzufügen von HTML robust zu erreichen.

Der `::first-line` Pseudo-Element-Selektor wird dies zuverlässig für Sie tun — wenn sich die Anzahl der Wörter erhöht oder verringert, wird er dennoch nur die erste Zeile auswählen.

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

Es wirkt so, als wäre ein `<span>` magisch um diese erste formatierte Zeile gewickelt und würde jedes Mal aktualisiert, wenn sich die Zeilenlänge ändert.

Sie sehen, dass dies die erste Zeile beider Absätze auswählt.

### Spielen mit Pseudo-Elementen

Bearbeiten Sie das CSS des vorherigen Beispiels mit dem MDN-Spielplatz:

1. Fügen Sie eine Regel hinzu, die den Bereich des Textes, der mit dem Mauszeiger ausgewählt wurde, eine `rote` `background-color` gibt (Sie benötigen dafür das {{cssxref("::selection")}} Pseudo-Element). Wählen Sie etwas Text aus, um es zu testen.
2. Fügen Sie eine Regel hinzu, die dem ersten Buchstaben jedes `<p>` innerhalb des `<article>`:

- Eine `gelbe` `background-color`.
- Einen `1px solid schwarzen` `Rand`.
- Eine `Schriftgröße` von `2rem`.

Sie finden Informationen zu allen anderen verfügbaren Pseudo-Elementen auf der MDN [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) Referenzseite.

## Kombinieren von Pseudo-Klassen und Pseudo-Elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen wollten, könnten Sie die `:first-child` und `::first-line` Selektoren zusammenketten.

Versuchen Sie, das vorherige Beispiel so zu bearbeiten, dass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen wollen, das sich innerhalb eines `<article>`-Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Generieren von Inhalten mit ::before und ::after

Es gibt ein paar spezielle Pseudo-Elemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwendet werden, um Inhalte mit CSS in Ihr Dokument einzufügen. Diese Technik wird als **generierter Inhalt** bezeichnet.

Sie könnten es verwenden, um eine Zeichenfolge einzufügen, wie im Beispiel unten. Wir haben dem generierten Inhalt auch einen `gelben` Hintergrund gegeben, damit er sich leicht von den Absatzinhalten unterscheiden lässt.

```html live-sample___before
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before
.box::before {
  content: "This should show before the other content. ";
  background-color: yellow;
}
```

{{EmbedLiveSample("before")}}

### Spielen mit generierten Inhalten

Versuchen Sie, das vorherige Beispiel wie folgt zu bearbeiten:

- Ändern Sie den Textwert der {{cssxref("content")}} Eigenschaft und sehen Sie, wie er sich in der Ausgabe ändert.
- Ändern Sie das `::before` Pseudo-Element zu `::after` und sehen Sie, wie der Text am Ende des Elements statt zu Beginn eingefügt wird.

### Generierte Inhalts-Symbole

Das obige Beispiel ist gültiges CSS. Allerdings ist das Einfügen von Textzeichenfolgen aus CSS etwas, das wir nicht sehr oft tun, da dieser Text für einige Screenreader unzugänglich ist und es schwierig sein könnte, ihn in Zukunft zu finden und zu bearbeiten. Eine valide Verwendung dieser Pseudo-Elemente ist es, ein Symbol einzufügen, zum Beispiel den kleinen Pfeil, der im Beispiel unten hinzugefügt wird, der ein visuelles Indiz ist, das nicht von einem Screenreader vorgelesen werden soll:

```html live-sample___after-icon
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

### Generierte Formen

Generierte Inhalte werden auch häufig verwendet, um eine leere Zeichenfolge einzufügen, die dann wie jedes Element auf der Seite gestylt werden kann.

In diesem nächsten Beispiel haben wir eine leere Zeichenfolge mit dem `::before` Pseudo-Element hinzugefügt. Wir haben dies auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe stylen können und eine quadratische Form erstellen. Dann verwenden wir CSS, um es wie jedes andere Element zu stylen.

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

Versuchen Sie mit dem obigen CSS herumzuspielen, um zu ändern, wie die generierte Form aussieht und sich verhält.

Sie werden regelmäßig sehen, dass generierte Inhalte für verschiedene andere Aufgaben verwendet werden. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu erstellen. Sehen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in Verwendung sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}} Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudo-Klassen und Pseudo-Elemente vorgestellt, die besondere Arten von Selektoren sind.

Pseudo-Klassen ermöglichen es Ihnen, ein Element anzusprechen, wenn es sich in einem bestimmten Zustand befindet, als hätten Sie eine Klasse für diesen Zustand dem DOM hinzugefügt. Pseudo-Elemente wirken so, als hätten Sie ein ganz neues Element zum DOM hinzugefügt und ermöglichen es Ihnen, dieses zu stylen. Die `::before` und `::after` Pseudo-Elemente ermöglichen es Ihnen, Inhalte unter Verwendung von CSS in das Dokument einzufügen.

Im nächsten Artikel werden wir über Kombinatoren lernen.

## Siehe auch

- [Pseudo-Klassen Übersicht](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudo-Elemente Übersicht](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
