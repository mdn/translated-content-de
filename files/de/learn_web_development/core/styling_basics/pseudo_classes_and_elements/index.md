---
title: Pseudoklassen und Pseudo-Elemente
short-title: Pseudoklassen und -elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Die nächste Gruppe von Selektoren, die wir betrachten werden, sind sogenannte **Pseudoklassen** und **Pseudo-Elemente**. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das zu der Aufgabe passt, die Sie erreichen möchten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
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
          <li>Der Unterschied zwischen den beiden.</li>
          <li>Das Kombinieren von Pseudoklassen und Pseudo-Elementen.</li>
          <li>Erzeugter Inhalt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudoklasse?

Eine Pseudoklasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, zum Beispiel das erste Element ihres Typs sind oder vom Mauszeiger überfahren werden. Sie verhalten sich oft so, als hätten Sie einer bestimmten Stelle Ihres Dokuments eine Klasse hinzugefügt, was Ihnen hilft, überflüssige Klassen in Ihrem Markup zu reduzieren und flexibleren, wartbareren Code zu erhalten.

Pseudoklassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudoklasse.

### Einfaches Beispiel für eine Pseudoklasse

Sehen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen:

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

Dies könnte jedoch ärgerlich zu warten sein — was wäre, wenn ein neuer Absatz an den Anfang des Dokuments hinzugefügt würde? Wir müssten die Klasse zum neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudoklassen-Selektor verwenden — dieser wird _immer_ das erste Kindelement eines Elements anvisieren (in diesem Fall das `<article>`), und wir müssten das HTML nicht mehr bearbeiten (was möglicherweise ohnehin nicht immer möglich ist, vielleicht weil es von einem CMS generiert wird).

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

Alle Pseudoklassen verhalten sich so. Sie zielen auf einen Teil Ihres Dokuments, der sich in einem bestimmten Zustand befindet, und verhalten sich so, als hätten Sie eine Klasse zu Ihrem HTML hinzugefügt.

> [!NOTE]
> Es ist zulässig, Pseudoklassen und -elemente ohne vorausgehenden Element-Selektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben und die Regel würde auf _jedes_ Element angewendet, das das erste Kind eines `<article>` Elements ist, und nicht nur auf einen Absatz als erstes Kind — `:first-child` ist gleichbedeutend mit `*:first-child`. In der Regel möchten Sie jedoch mehr Kontrolle, daher müssen Sie spezifischer sein.

### Pseudo-Klassen für Benutzeraktionen

Einige Pseudoklassen gelten nur, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudoklassen**, manchmal als **dynamische Pseudoklassen** bezeichnet, verhalten sich so, als wäre eine Klasse zum Element hinzugefügt worden, wenn der Benutzer damit interagiert. Beispiele beinhalten:

- [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer seinen Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus) — gilt nur, wenn der Benutzer das Element durch Klicken oder mit Tastatursteuerungen fokussiert.

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

### Mit Pseudoklassen experimentieren

Gehen Sie zu unserem [ersten Pseudoklassen-Beispiel](#einfaches_beispiel_für_eine_pseudoklasse) zurück und bearbeiten Sie das CSS mithilfe des MDN Playground:

1. Fügen Sie eine Regel hinzu, die den Text des Absatzes `blau` färbt, wenn er von der Maus überfahren wird.
2. Fügen Sie eine Regel hinzu, die nur den letzten Absatz innerhalb des Artikels auswählt und ihm eine `orange` `Hintergrundfarbe` gibt.

Informationen zu allen anderen verfügbaren Pseudoklassen finden Sie auf der MDN-Referenzseite [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes).

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich ähnlich. Sie agieren jedoch so, als ob Sie ein völlig neues HTML-Element in das Markup eingefügt hätten, statt einer bestehenden Klasse.

Pseudo-Elemente beginnen mit einem Doppel-Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten die einfache Doppelpunktsyntax, daher kann es sein, dass Sie dies in Code oder Beispielen sehen. Moderne Browser unterstützen die frühen Pseudo-Elemente mit ein- oder zwei-Doppelpunkt-Syntax zur Abwärtskompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen möchten, könnten Sie es in ein `<span>` Element einfügen und einen Element-Selektor verwenden; jedoch würde dies fehlschlagen, wenn die Anzahl der eingefügten Wörter länger oder kürzer als die Breite des Elternelements ist. Da wir in der Regel nicht wissen, wie viele Wörter in eine Zeile passen — da sich das ändern würde, wenn sich die Bildschirmbreite oder Schriftgröße ändert — ist es unmöglich, dies durch Hinzufügen von HTML robust zu tun.

Der `::first-line` Pseudo-Element-Selektor erledigt dies zuverlässig für Sie — wenn die Anzahl der Wörter zu- oder abnimmt, wird weiterhin nur die erste Zeile ausgewählt.

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

Es verhält sich so, als ob ein `<span>` magisch um diese erste formatierte Zeile gewickelt wurde und aktualisiert, wenn sich die Zeilenlänge ändert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

### Mit Pseudo-Elementen experimentieren

Bearbeiten Sie das CSS des vorherigen Beispiels mithilfe des MDN Playgrounds:

1. Fügen Sie eine Regel hinzu, die dem mit dem Mauszeiger ausgewählten Text einen `roten` `Hintergrund` gibt (Sie benötigen dazu das {{cssxref("::selection")}} Pseudo-Element). Wählen Sie etwas Text aus, um es zu testen.
2. Fügen Sie eine Regel hinzu, die den ersten Buchstaben jedes `<p>` innerhalb des `<article>` gibt:

- Eine `gelbe` `Hintergrundfarbe`.
- Einen `1px schwarzen Rand`.
- Eine `Schriftgröße` von `2rem`.

Informationen zu allen anderen verfügbaren Pseudo-Elementen finden Sie auf der MDN-Referenzseite [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

## Pseudoklassen und Pseudo-Elemente kombinieren

Wenn Sie die erste Zeile des ersten Absatzes fett machen möchten, könnten Sie die `:first-child` und `::first-line` Selektoren miteinander verketten.

Versuchen Sie, das vorherige Beispiel so zu bearbeiten, dass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>` Elements auswählen möchten, das sich innerhalb eines `<article>` Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Inhalt mit ::before und ::after generieren

Es gibt ein paar spezielle Pseudo-Elemente, die zusammen mit der [`content`](/de/docs/Web/CSS/Reference/Properties/content) Eigenschaft verwendet werden, um Inhalte mit CSS in Ihr Dokument einzufügen. Diese Technik wird als **erzeugter Inhalt** bezeichnet.

Sie könnten es verwenden, um eine Textzeichenfolge einzufügen, wie im folgenden Beispiel. Wir haben dem erzeugten Inhalt auch eine `gelbe` Hintergrundfarbe gegeben, damit er sich leicht vom Inhalt des Absatzes unterscheiden lässt.

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

### Mit erzeugtem Inhalt experimentieren

Versuchen Sie, das vorherige Beispiel wie folgt zu bearbeiten:

- Ändern Sie den Textwert der {{cssxref("content")}} Eigenschaft und sehen Sie, wie er sich im Ergebnis ändert.
- Ändern Sie das `::before` Pseudo-Element in `::after` und beobachten Sie, wie der Text am Ende des Elements statt am Anfang eingefügt wird.

### Generierte Inhaltsicons

Das obige Beispiel ist gültiges CSS. Allerdings ist es nicht sehr häufig, Zeichenketten von Text mit CSS einzufügen, da dieser Text für einige Screenreader unzugänglich ist und möglicherweise schwer von jemandem zu finden und in der Zukunft zu bearbeiten ist. Eine gültigere Verwendung dieser Pseudo-Elemente ist das Einfügen eines Symbols, zum Beispiel dem kleinen Pfeil, der im folgenden Beispiel hinzugefügt wird, der ein visueller Indikator ist, den wir nicht von einem Screenreader vorgelesen haben möchten:

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

Generierter Inhalt wird auch häufig verwendet, um eine leere Zeichenfolge einzufügen, die dann wie jedes andere Element auf der Seite gestylt werden kann.

Im nächsten Beispiel haben wir eine leere Zeichenfolge mit dem `::before` Pseudo-Element hinzugefügt. Wir haben es auf `display: block` gesetzt, um es mit einer Breite und Höhe zu stylen und eine quadratische Form zu erstellen. Dann verwenden wir CSS, um es wie jedes andere Element zu stylen.

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

Probieren Sie das obige CSS aus, um das Aussehen und Verhalten der generierten Form zu ändern.

Sie werden regelmäßig sehen, dass generierter Inhalt für verschiedene andere Aufgaben verwendet wird. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu generieren. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in Verwendung sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}} Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS Pseudoklassen und Pseudo-Elemente eingeführt, die besondere Arten von Selektoren sind.

Pseudoklassen ermöglichen es Ihnen, ein Element auszuwählen, wenn es sich in einem bestimmten Zustand befindet, als hätten Sie eine Klasse für diesen Zustand im DOM hinzugefügt. Pseudo-Elemente verhalten sich so, als hätten Sie ein völlig neues Element zum DOM hinzugefügt, und ermöglichen es Ihnen, dieses zu stylen. Die `::before` und `::after` Pseudo-Elemente ermöglichen es Ihnen, Inhalt mit CSS in das Dokument einzufügen.

Im nächsten Artikel werden wir über Kombinatoren lernen.

## Siehe auch

- [Referenz der Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Referenz der Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
