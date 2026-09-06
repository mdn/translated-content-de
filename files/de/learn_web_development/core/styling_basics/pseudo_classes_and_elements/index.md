---
title: Pseudoklassen und -elemente
short-title: Pseudoklassen und -elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 3fbc8b2ba17c1cf331fb67ce2e6561b15bf4f197
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Die nächste Gruppe von Selektoren, die wir betrachten werden, wird als **Pseudoklassen** und **Pseudo-Elemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchsuchen, um zu sehen, ob etwas dabei ist, was für die von Ihnen angestrebte Aufgabe geeignet ist.

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
          <li>Pseudoklassen und Pseudo-Elemente.</li>
          <li>Der Unterschied zwischen beiden.</li>
          <li>Kombinieren von Pseudoklassen und Pseudo-Elementen.</li>
          <li>Generierte Inhalte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudoklasse?

Eine Pseudoklasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, beispielsweise das erste Element ihres Typs sind oder durch den Mauszeiger überfahren werden. Sie verhalten sich häufig so, als ob Sie einer bestimmten Stelle in Ihrem Dokument eine Klasse zugewiesen hätten, was Ihnen dabei hilft, überflüssige Klassen in Ihrem Markup zu reduzieren und flexibleren, wartungsfreundlicheren Code zu erhalten.

Pseudoklassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudoklasse.

### Einfaches Pseudoklassen-Beispiel

Schauen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett darstellen möchten, könnten wir diesem Absatz eine Klasse hinzufügen und diese Klasse dann mit CSS gestalten:

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

Dies zu pflegen, könnte jedoch lästig sein — was wäre, wenn ein neuer Absatz an den Anfang des Dokuments hinzugefügt würde? Wir müssten die Klasse auf den neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}}-Pseudoklassen-Selektor verwenden — dieser wird _immer_ das erste Kindelement eines Elements (in diesem Fall das `<article>`) anvisieren, und wir müssen das HTML nicht mehr bearbeiten (was möglicherweise sowieso nicht möglich ist, vielleicht weil es von einem CMS generiert wird).

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

Alle Pseudoklassen verhalten sich so. Sie richten sich auf einen Teil Ihres Dokuments, der sich in einem bestimmten Zustand befindet, und verhalten sich, als hätten Sie eine Klasse in Ihr HTML eingefügt.

> [!NOTE]
> Es ist zulässig, Pseudoklassen und -elemente ohne nachfolgenden Element-Selektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben, und die Regel würde auf _jedes_ Element angewendet, das das erste Kind eines `<article>`-Elements ist, nicht nur auf den ersten Absatz — `:first-child` ist gleichbedeutend mit `*:first-child`. Normalerweise möchten Sie jedoch mehr Kontrolle als das, daher müssen Sie genauer sein.

### Benutzeraktions-Pseudoklassen

Einige Pseudoklassen gelten nur, wenn der Benutzer in gewisser Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudoklassen**, manchmal auch als **dynamische Pseudoklassen** bezeichnet, verhalten sich so, als ob beim Benutzer eine Klasse zum Element hinzugefügt würde. Beispiele umfassen:

- {{cssxref(":hover")}} — oben erwähnt; dies gilt nur, wenn der Benutzer mit dem Mauszeiger über ein Element, normalerweise einen Link, fährt.
- {{cssxref(":focus")}} — gilt nur, wenn der Benutzer das Element fokussiert, indem er darauf klickt oder Tastatursteuerungen verwendet.

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

### Mit Pseudoklassen spielen

Gehen Sie zurück zu unserem [ersten Pseudoklassen-Beispiel](#einfaches_pseudoklassen-beispiel) und bearbeiten Sie das CSS mit dem MDN-Playground:

1. Fügen Sie eine Regel hinzu, die den Text der Absätze `blau` färbt, wenn er überfahren wird.
2. Fügen Sie eine Regel hinzu, die nur den letzten Absatz innerhalb des Artikels auswählt und ihm eine `orange` `background-color` gibt.

Sie können Informationen über alle anderen verfügbaren Pseudoklassen auf der MDN-Referenzseite [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) finden.

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich ähnlich. Sie wirken jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt eine Klasse auf vorhandene Elemente anzuwenden.

Pseudo-Elemente beginnen mit einem doppelten Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten die Syntax mit einem einzelnen Doppelpunkt, daher kann es vorkommen, dass Sie dies im Code oder in Beispielen sehen. Moderne Browser unterstützen die frühen Pseudo-Elemente mit der Syntax mit einem oder zwei Doppelpunkten aus Gründen der Abwärtskompatibilität.

Wenn Sie zum Beispiel die erste Zeile eines Absatzes auswählen möchten, könnten Sie sie in ein `<span>`-Element einschließen und einen Element-Selektor verwenden; dies würde jedoch fehlschlagen, wenn die von Ihnen eingeschlossenen Wörter länger oder kürzer als die Breite des übergeordneten Elements wären. Da wir tendenziell nicht wissen, wie viele Wörter in eine Zeile passen werden — da sich dies ändern wird, wenn sich die Bildschirmbreite oder die Schriftgröße ändert — ist es unmöglich, dies robust durch Hinzufügen von HTML zu tun.

Der `::first-line`-Pseudo-Element-Selektor wird dies zuverlässig für Sie tun — wenn die Anzahl der Wörter steigt oder sinkt, wird er trotzdem nur die erste Zeile auswählen.

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

Es wirkt, als wäre ein `<span>` magisch um diese erste formatierte Zeile gewickelt und wird jedes Mal aktualisiert, wenn sich die Zeilenlänge ändert.

Sie sehen, dass damit die erste Zeile beider Absätze ausgewählt wird.

### Mit Pseudo-Elementen spielen

Bearbeiten Sie das CSS des vorherigen Beispiels mit dem MDN-Playground:

1. Fügen Sie eine Regel hinzu, die dem mit dem Mauszeiger ausgewählten Text eine `rote` `background-color` gibt (Sie benötigen dafür das {{cssxref("::selection")}}-Pseudo-Element). Wählen Sie einen Text aus, um es zu testen.
2. Fügen Sie eine Regel hinzu, die dem ersten Buchstaben jedes `<p>` innerhalb des `<article>`:

- Eine `gelbe` `background-color`.
- Einen `1px solid black` `border`.
- Eine `font-size` von `2rem` gibt.

Sie können Informationen über alle anderen verfügbaren Pseudo-Elemente auf der MDN-Referenzseite [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) finden.

## Kombinieren von Pseudoklassen und -elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen möchten, könnten Sie die Selektoren `:first-child` und `::first-line` zusammen verketten.

Versuchen Sie, das vorherige Beispiel so zu bearbeiten, dass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich innerhalb eines `<article>`-Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Inhalte mit ::before und ::after generieren

Es gibt ein paar spezielle Pseudo-Elemente, die zusammen mit der {{cssxref("content")}}-Eigenschaft verwendet werden, um Inhalte mit CSS in Ihr Dokument einzufügen. Diese Technik wird als **generierter Inhalt** bezeichnet.

Sie könnten es verwenden, um einen Textstring einzufügen, wie im folgenden Beispiel. Wir haben dem generierten Inhalt auch eine `gelbe` Hintergrundfarbe gegeben, damit er leicht vom Inhalt des Absatzes unterschieden werden kann.

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

- Ändern Sie den Textwert der {{cssxref("content")}}-Eigenschaft und sehen Sie zu, wie er sich in der Ausgabe ändert.
- Ändern Sie das `::before`-Pseudo-Element in `::after` und sehen Sie, wie der Text am Ende des Elements statt am Anfang eingefügt wird.

### Generierte Inhalts-Icons

Das obige Beispiel ist gültiges CSS. Das Einfügen von Textstrings aus CSS ist jedoch nicht wirklich etwas, das wir sehr oft tun, da dieser Text für einige Screenreader unzugänglich ist und es schwierig sein könnte, ihn in Zukunft zu finden und zu bearbeiten. Eine gültigere Verwendung dieser Pseudo-Elemente ist das Einfügen eines Icons, zum Beispiel der kleine Pfeil, der im folgenden Beispiel hinzugefügt wird und ein visueller Indikator ist, den wir nicht von einem Screenreader vorlesen lassen möchten:

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

Generierte Inhalte werden auch häufig verwendet, um einen leeren String einzufügen, der dann wie jedes andere Element auf der Seite gestaltet werden kann.

In diesem nächsten Beispiel haben wir einen leeren String mit dem `::before`-Pseudo-Element eingefügt. Wir haben dieses auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe gestalten können, um eine quadratische Form zu erstellen. Danach verwenden wir CSS, um es wie jedes andere Element zu gestalten.

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

Versuchen Sie, mit dem obigen CSS zu spielen, um zu ändern, wie die generierte Form aussieht und sich verhält.

Sie werden häufig sehen, dass generierte Inhalte für verschiedene andere Aufgaben verwendet werden. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu erstellen. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in Gebrauch sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}}-Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudoklassen und -elemente vorgestellt, die spezielle Arten von Selektoren sind.

Pseudoklassen ermöglichen es Ihnen, ein Element zu selektieren, wenn es sich in einem bestimmten Zustand befindet, als ob Sie eine Klasse für diesen Zustand zum DOM hinzugefügt hätten. Pseudo-Elemente verhalten sich, als hätten Sie ein ganz neues Element zum DOM hinzugefügt, und erlauben es Ihnen, dieses zu gestalten. Die `::before` und `::after` Pseudo-Elemente ermöglichen es Ihnen, mit CSS Inhalte in das Dokument einzufügen.

Im nächsten Artikel werden wir über Kombinatoren lernen.

## Siehe auch

- [Pseudoklassen-Referenz](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Pseudo-Elemente-Referenz](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
