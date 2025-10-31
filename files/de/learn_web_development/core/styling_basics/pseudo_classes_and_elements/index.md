---
title: Pseudo-Klassen und Pseudo-Elemente
short-title: Pseudo-Klassen und Elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Der nächste Satz von Selektoren, den wir uns ansehen werden, wird als **Pseudo-Klassen** und **Pseudo-Elemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchgehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, geeignet ist.

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
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Pseudo-Klassen und Pseudo-Elemente.</li>
          <li>Der Unterschied zwischen beiden.</li>
          <li>Kombination von Pseudo-Klassen und Pseudo-Elementen.</li>
          <li>Generierter Inhalt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudo-Klasse?

Eine Pseudo-Klasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z. B. der erste Typ eines Elements oder das Hovering über dem Element mit dem Mauszeiger. Sie verhalten sich oft so, als hätten Sie einer Klasse einen Teil Ihres Dokuments zugewiesen, wodurch Sie überflüssige Klassen in Ihrem Markup reduzieren und flexibleren, wartbareren Code erhalten.

Pseudo-Klassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudo-Klasse.

### Einfaches Pseudo-Klassen-Beispiel

Schauen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett darstellen möchten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen:

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

Dies könnte jedoch lästig zu warten sein — was wäre, wenn am Anfang des Dokuments ein neuer Absatz hinzugefügt würde? Wir müssten die Klasse auf den neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudo-Klassen-Selektor verwenden — dies wird _immer_ das erste Kindelement eines Elements (in diesem Fall das `<article>`) anvisieren, und wir müssten das HTML nicht mehr bearbeiten (das ist möglicherweise sowieso nicht immer möglich, vielleicht weil es von einem CMS generiert wird).

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

Alle Pseudo-Klassen verhalten sich so. Sie zielen auf einen Teil Ihres Dokuments, der sich in einem bestimmten Zustand befindet, und verhalten sich so, als hätten Sie eine Klasse in Ihr HTML eingefügt.

> [!NOTE]
> Es ist gültig, Pseudo-Klassen und Elemente ohne vorausgehenden Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben, und die Regel würde auf _jedes_ Element angewendet werden, das das erste Kind eines `<article>`-Elements ist, nicht nur ein Absatz mit dem ersten Kind — `:first-child` ist äquivalent zu `*:first-child`. Normalerweise möchten Sie jedoch mehr Kontrolle, daher müssen Sie spezifischer sein.

### Benutzeraktionsbezogene Pseudo-Klassen

Einige Pseudo-Klassen gelten nur, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudo-Klassen**, manchmal auch als **dynamische Pseudo-Klassen** bezeichnet, verhalten sich so, als wäre eine Klasse hinzugefügt worden, wenn der Benutzer mit dem Element interagiert. Beispiele beinhalten:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer den Zeiger über ein Element bewegt, typischerweise einen Link.
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

### Mit Pseudo-Klassen spielen

Gehen Sie zurück zu unserem [ersten Pseudo-Klassen-Beispiel](#einfaches_pseudo-klassen-beispiel) und bearbeiten Sie das CSS mit dem MDN Playground:

1. Fügen Sie eine Regel hinzu, die den Text des Absatzes `blau` färbt, wenn sie darüber schweben.
2. Fügen Sie eine Regel hinzu, die nur den letzten Absatz im Artikel auswählt und ihm eine `orange` `background-color` gibt.

Im MDN [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) Referenzleitfaden finden Sie Informationen zu allen anderen verfügbaren Pseudo-Klassen.

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich auf ähnliche Weise. Sie verhalten sich jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt eine Klasse auf vorhandene Elemente anzuwenden.

Pseudo-Elemente beginnen mit einem Doppelkolon `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten die Einzelkolon-Syntax, daher können Sie dies manchmal in Code oder Beispielen sehen. Moderne Browser unterstützen die frühen Pseudo-Elemente mit Einzel- oder Doppelkolon-Syntax für die Abwärtskompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen wollten, könnten Sie sie in ein `<span>`-Element einfügen und einen Elementselektor verwenden; dies würde jedoch fehlschlagen, wenn die Anzahl der eingefügten Wörter länger oder kürzer als die Breite des Elternelements wäre. Da wir oft nicht wissen, wie viele Wörter in eine Zeile passen — da sich das ändert, wenn sich die Bildschirmbreite oder die Schriftgröße ändert — ist es unmöglich, dies durch das Hinzufügen von HTML robust zu erledigen.

Der `::first-line` Pseudo-Element-Selektor wird dies zuverlässig für Sie erledigen — wenn sich die Anzahl der Wörter erhöht oder verringert, wird dennoch nur die erste Zeile ausgewählt.

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

Es verhält sich so, als ob ein `<span>` magisch um diese erste formatierte Zeile gewickelt wäre und jedes Mal aktualisiert würde, wenn sich die Zeilenlänge änderte.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

### Mit Pseudo-Elementen spielen

Bearbeiten Sie das CSS des vorherigen Beispiels mit dem MDN Playground:

1. Fügen Sie eine Regel hinzu, die den Teil des Textes, der mit dem Mauszeiger ausgewählt wurde, eine `rote` `background-color` gibt (Sie benötigen das {{cssxref("::selection")}} Pseudo-Element hierfür). Wählen Sie etwas Text aus, um es zu testen.
2. Fügen Sie eine Regel hinzu, die dem ersten Buchstaben jedes `<p>` innerhalb des `<article>`:

- Eine `gelbe` `background-color`.
- Eine `1px solid schwarze` `border`.
- Eine `font-size` von `2rem`.

Im MDN [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) Referenzleitfaden finden Sie Informationen zu allen anderen verfügbaren Pseudo-Elementen.

## Kombination von Pseudo-Klassen und Pseudo-Elementen

Wenn Sie wollten, dass die erste Zeile des ersten Absatzes fett ist, könnten Sie die `:first-child` und `::first-line` Selektoren zusammenketten.

Versuchen Sie, das vorherige Beispiel so zu bearbeiten, dass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich in einem `<article>`-Element befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Generierte Inhalte mit ::before und ::after

Es gibt ein paar spezielle Pseudo-Elemente, die zusammen mit der [`content`](/de/docs/Web/CSS/Reference/Properties/content) -Eigenschaft verwendet werden, um Inhalte mit CSS in Ihr Dokument einzufügen. Diese Technik wird als **generierte Inhalte** bezeichnet.

Sie könnten es beispielsweise verwenden, um einen Textstring einzufügen, wie im folgenden Beispiel. Wir haben dem generierten Inhalt auch eine `gelbe` Hintergrundfarbe gegeben, damit er leicht von den Absatzinhalten zu unterscheiden ist.

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

### Mit generierten Inhalten spielen

Versuchen Sie, das vorherige Beispiel wie folgt zu bearbeiten:

- Ändern Sie den Textwert der {{cssxref("content")}}-Eigenschaft und sehen Sie, wie er sich im Ergebnis ändert.
- Ändern Sie das `::before` Pseudo-Element in `::after` und sehen Sie, wie der Text am Ende des Elements anstatt am Anfang eingefügt wird.

### Generierte Inhaltsicons

Das obige Beispiel ist gültiges CSS. Einfügen von Textstrings aus CSS ist jedoch wirklich etwas, das wir nicht sehr oft tun, da dieser Text für einige Screenreader nicht zugänglich ist und jemandem schwer finden und bearbeiten könnte. Eine sinnvollere Nutzung dieser Pseudo-Elemente ist das Einfügen eines Symbols, beispielsweise der kleine Pfeil, der unten im Beispiel hinzugefügt wird und ein visuelles Indiz dafür ist, dass wir es nicht von einem Screenreader vorlesen lassen möchten:

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

Generierte Inhalte werden auch häufig verwendet, um eine leere Zeichenfolge einzufügen, die dann wie jedes Element auf der Seite gestaltet werden kann.

Im nächsten Beispiel haben wir eine leere Zeichenfolge mit dem `::before` Pseudo-Element hinzugefügt. Wir haben dies auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe stylen und eine quadratische Form erstellen können. Wir verwenden dann CSS, um es wie jedes Element zu stylen.

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

Versuchen Sie, mit dem obigen CSS zu spielen, um das Aussehen und Verhalten der erzeugten Form zu ändern.

Sie werden regelmäßig generierte Inhalte für verschiedene andere Aufgaben verwenden sehen. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, mit CSS einen Pfeil zu erstellen. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die Pseudo-Elemente {{cssxref("::before")}} und {{cssxref("::after")}} in Verwendung sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}}-Eigenschaft an, um zu sehen, was zum HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudo-Klassen und Pseudo-Elemente eingeführt, die besondere Arten von Selektoren sind.

Pseudo-Klassen ermöglichen es Ihnen, ein Element in einem bestimmten Zustand anzuvisieren, als ob Sie eine Klasse für diesen Zustand zum DOM hinzugefügt hätten. Pseudo-Elemente verhalten sich so, als hätten Sie ein ganz neues Element zum DOM hinzugefügt, und ermöglichen es Ihnen, dieses zu gestalten. Die Pseudo-Elemente `::before` und `::after` ermöglichen es Ihnen, Inhalte mit CSS in das Dokument einzufügen.

Im nächsten Artikel lernen wir über Kombinatoren.

## Siehe auch

- [Pseudo-Klassen-Referenz](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudo-Elemente-Referenz](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
