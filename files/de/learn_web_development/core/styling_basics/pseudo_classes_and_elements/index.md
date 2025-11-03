---
title: Pseudo-Klassen und Pseudo-Elemente
short-title: Pseudo-Klassen und -Elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Die nächste Gruppe von Selektoren, die wir betrachten werden, sind **Pseudo-Klassen** und **Pseudo-Elemente**. Es gibt eine große Anzahl von ihnen, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchgehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen wollen, geeignet ist.

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

Eine Pseudo-Klasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, zum Beispiel das erste Element ihres Typs sind oder über die der Mauszeiger bewegt wird. Sie verhalten sich oft so, als ob Sie einer bestimmten Stelle in Ihrem Dokument eine Klasse hinzugefügt hätten, und helfen Ihnen oft, überflüssige Klassen in Ihrem Markup zu reduzieren und Ihnen einen flexibleren, wartbaren Code zu geben.

Pseudo-Klassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudo-Klasse.

### Beispiel für eine grundlegende Pseudo-Klasse

Betrachten wir ein einfaches Beispiel. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen:

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

Dies könnte jedoch lästig zu pflegen sein – was, wenn ein neuer Absatz an die Spitze des Dokuments hinzugefügt wird? Wir müssten die Klasse auf den neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudo-Klassen-Selektor verwenden – dieser wird _immer_ das erste Kindelement eines Elements (in diesem Fall das `<article>`) anvisieren, und wir müssen das HTML nicht mehr bearbeiten (möglicherweise ist dies aufgrund der Generierung durch ein CMS ohnehin nicht immer möglich).

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

Alle Pseudo-Klassen verhalten sich so. Sie richten sich an einen Teil Ihres Dokuments, der sich in einem bestimmten Zustand befindet, und verhalten sich, als hätten Sie eine Klasse in Ihr HTML eingefügt.

> [!NOTE]
> Es ist gültig, Pseudo-Klassen und -Elemente ohne vorausgehenden Element-Selektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben, und die Regel würde auf _jedes_ Element zutreffen, das das erste Kind eines `<article>`-Elements ist, nicht nur ein Absatz als erstes Kind – `:first-child` ist äquivalent zu `*:first-child`. Normalerweise möchten Sie jedoch mehr Kontrolle als das, daher müssen Sie spezifischer sein.

### Benutzeraktions-Pseudo-Klassen

Einige Pseudo-Klassen gelten nur, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudo-Klassen**, manchmal auch als **dynamische Pseudo-Klassen** bezeichnet, verhalten sich so, als wäre eine Klasse zu dem Element hinzugefügt worden, wenn der Benutzer damit interagiert. Beispiele sind:

- [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) – oben erwähnt; dies gilt nur, wenn der Benutzer seinen Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) – gilt nur, wenn der Benutzer das Element fokussiert, indem er darauf klickt oder die Tastatursteuerung verwendet.

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

Gehen Sie zu unserem [ersten Pseudo-Klassen-Beispiel](#beispiel_für_eine_grundlegende_pseudo-klasse) zurück und bearbeiten Sie das CSS mit dem MDN-Spielplatz:

1. Fügen Sie eine Regel hinzu, die den Text des Absatzes `blau` färbt, wenn mit der Maus darübergefahren wird.
2. Fügen Sie eine Regel hinzu, die nur den letzten Absatz innerhalb des Artikels auswählt und ihm eine `orange` `background-color` gibt.

Sie können Informationen zu allen anderen verfügbaren Pseudo-Klassen auf der MDN-Referenzseite [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) finden.

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich auf ähnliche Weise. Sie agieren jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt einer vorhandenen Klasse eine Klasse hinzuzufügen.

Pseudo-Elemente beginnen mit einem Doppelpunkten `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten die Syntax mit einem einzigen Doppelpunkt, daher sehen Sie dies möglicherweise manchmal in Code oder Beispielen. Moderne Browser unterstützen die frühen Pseudo-Elemente mit der Syntax mit einem oder zwei Doppelpunkten für die Rückwärtskompatibilität.

Zum Beispiel, wenn Sie die erste Zeile eines Absatzes auswählen möchten, könnten Sie sie in ein `<span>`-Element einschließen und einen Element-Selektor verwenden; dies würde jedoch fehlschlagen, wenn die Anzahl der umbrochenen Wörter länger oder kürzer wäre als die Breite des Elternelements. Da wir dazu neigen, nicht zu wissen, wie viele Wörter auf einer Zeile passen – denn dies ändert sich, wenn die Bildschirmbreite oder die Schriftgröße sich ändert – ist es unmöglich, dies robust zu tun, indem HTML hinzugefügt wird.

Der `::first-line` Pseudo-Element-Selektor wird dies zuverlässig für Sie tun – wenn sich die Anzahl der Wörter erhöht oder verringert, wird er trotzdem nur die erste Zeile auswählen.

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

Es verhält sich, als wäre ein `<span>` magisch um diese erste formatierte Zeile gewickelt, und wird jedes Mal aktualisiert, wenn sich die Zeilenlänge ändert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

### Spielen mit Pseudo-Elementen

Bearbeiten Sie das CSS des vorherigen Beispiels mit dem MDN-Spielplatz:

1. Fügen Sie eine Regel hinzu, die dem mit dem Mauszeiger ausgewählten Text einen `roten` `background-color` verleiht (Sie benötigen das {{cssxref("::selection")}} Pseudo-Element dafür). Wählen Sie etwas Text aus, um es zu testen.
2. Fügen Sie eine Regel hinzu, die den ersten Buchstaben jedes `<p>` innerhalb des `<article>` mit den folgenden Eigenschaften versieht:

- Ein `gelber` `background-color`.
- Ein `1px solid black` `border`.
- Eine `font-size` von `2rem`.

Sie können Informationen zu allen anderen verfügbaren Pseudo-Elementen auf der MDN-Referenzseite [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) finden.

## Kombinieren von Pseudo-Klassen und Pseudo-Elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen wollten, könnten Sie die `:first-child` und `::first-line` Selektoren miteinander verketten.

Versuchen Sie, das vorherige Beispiel so zu bearbeiten, dass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich innerhalb eines `<article>`-Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Content-Generierung mit ::before und ::after

Es gibt ein paar besondere Pseudo-Elemente, die zusammen mit der [`content`](/de/docs/Web/CSS/Reference/Properties/content) Eigenschaft verwendet werden, um Inhalt in Ihr Dokument mittels CSS einzufügen. Diese Technik wird als **generierter Inhalt** bezeichnet.

Sie könnten es verwenden, um eine Textfolge einzufügen, wie im folgenden Beispiel. Wir haben dem generierten Inhalt auch eine `gelbe` Hintergrundfarbe gegeben, damit er sich leicht vom Absatzinhalt unterscheidet.

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

### Spielen mit generiertem Inhalt

Versuchen Sie, das vorherige Beispiel wie folgt zu bearbeiten:

- Ändern Sie den Textwert der {{cssxref("content")}} Eigenschaft und sehen Sie, wie er sich in der Ausgabe ändert.
- Ändern Sie das `::before` Pseudo-Element zu `::after` und sehen Sie den Text am Ende des Elements anstelle des Anfangs eingefügt.

### Generierte Content-Icons

Das obige Beispiel ist gültiges CSS. Das Einfügen von Textfolgen über CSS ist jedoch nicht wirklich etwas, was wir sehr oft tun, da dieser Text für einige Screenreader unzugänglich ist und möglicherweise schwer zu finden und in Zukunft zu bearbeiten ist. Eine validere Verwendung dieser Pseudo-Elemente ist es, ein Icon einzufügen, zum Beispiel den kleinen Pfeil, der im unten stehenden Beispiel hinzugefügt wird, der ein visueller Indikator ist, den wir nicht von einem Screenreader vorgelesen haben möchten:

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

Generierter Inhalt wird auch häufig verwendet, um eine leere Zeichenkette einzufügen, die dann wie jedes andere Element auf der Seite gestaltet werden kann.

In diesem nächsten Beispiel haben wir eine leere Zeichenkette mit dem `::before` Pseudo-Element hinzugefügt. Wir haben es auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe gestalten können, um eine quadratische Form zu erstellen. Dann verwenden wir CSS, um es wie jedes andere Element zu gestalten.

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

Versuchen Sie, mit dem obigen CSS zu experimentieren, um zu ändern, wie die generierte Form aussieht und sich verhält.

Sie werden regelmäßig sehen, dass generierter Inhalt für verschiedene andere Aufgaben verwendet wird. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu erstellen. Sehen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in Aktion sehen. Wann immer Sie diese Selektoren sehen, schauen Sie auf die {{cssxref("content")}} Eigenschaft, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudo-Klassen und Pseudo-Elemente vorgestellt, die spezielle Arten von Selektoren sind.

Pseudo-Klassen ermöglichen es Ihnen, ein Element in einem bestimmten Zustand anzusprechen, als ob Sie für diesen Zustand eine Klasse zum DOM hinzugefügt hätten. Pseudo-Elemente verhalten sich, als hätten Sie ein ganz neues Element dem DOM hinzugefügt, und ermöglichen Ihnen, es zu gestalten. Die `::before` und `::after` Pseudo-Elemente ermöglichen Ihnen, Inhalt in das Dokument mithilfe von CSS einzufügen.

Im nächsten Artikel werden wir über Kombinatoren lernen.

## Siehe auch

- [Pseudo-Klassen-Referenz](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Pseudo-Elemente-Referenz](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
