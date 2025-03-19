---
title: Pseudo-Klassen und Pseudo-Elemente
short-title: Pseudo-Klassen und Elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Der nächste Satz von Selektoren, den wir uns ansehen, wird als **Pseudo-Klassen** und **Pseudo-Elemente** bezeichnet. Es gibt eine große Anzahl dieser Selektoren, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie Sie sie nutzen, können Sie die verschiedenen Typen durchstöbern, um zu sehen, ob etwas für die Aufgabe, die Sie erreichen möchten, geeignet ist.

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
          <li>Pseudo-Klassen und Pseudo-Elemente.</li>
          <li>Der Unterschied zwischen beiden.</li>
          <li>Kombinieren von Pseudo-Klassen und Pseudo-Elementen.</li>
          <li>Generierter Inhalt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudo-Klasse?

Eine Pseudo-Klasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z.B. sie sind das erste Element ihres Typs oder die Maus zeigt auf sie. Sie verhalten sich, als ob Sie einer bestimmten Stelle Ihres Dokuments eine Klasse hinzugefügt hätten, und helfen oft dabei, überschüssige Klassen in Ihrem Markup zu reduzieren und flexibleren, wartbaren Code zu erstellen.

Pseudo-Klassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudo-Klasse.

### Einfaches Beispiel einer Pseudo-Klasse

Lassen Sie uns ein einfaches Beispiel betrachten. Wenn wir den ersten Absatz in einem Artikel größer und fett gestalten wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen, wie im ersten Beispiel unten gezeigt:

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

Dies könnte jedoch bei der Wartung lästig werden — was, wenn ein neuer Absatz oben im Dokument hinzugefügt wird? Wir müssten die Klasse auf den neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudo-Klassen-Selektor verwenden — dieser wird _immer_ das erste Kind-Element im Artikel ansprechen und wir müssten das HTML nicht mehr bearbeiten (was möglicherweise ohnehin nicht möglich ist, z.B. bei generiertem Inhalt durch ein CMS).

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

Alle Pseudo-Klassen verhalten sich auf diese Weise. Sie zielen auf einen Teil Ihres Dokuments ab, der sich in einem bestimmten Zustand befindet, als ob Sie eine Klasse in Ihr HTML eingefügt hätten. Schauen Sie sich einige andere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist gültig, Pseudo-Klassen und -Elemente zu schreiben, ohne dass ihnen ein Element-Selektor vorangestellt ist. Im obigen Beispiel könnten Sie `:first-child` schreiben und die Regel würde auf _jedes_ Element angewendet, das das erste Kind eines `<article>` Elements ist, nicht nur ein Absatz erstes Kind — `:first-child` ist gleichbedeutend mit `*:first-child`. Allerdings möchten Sie normalerweise mehr Kontrolle, sodass Sie spezifischer sein müssen.

### Benutzeraktions-Pseudo-Klassen

Einige Pseudo-Klassen gelten nur, wenn der Benutzer auf eine bestimmte Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudo-Klassen**, die manchmal als **dynamische Pseudo-Klassen** bezeichnet werden, verhalten sich so, als ob eine Klasse zum Element hinzugefügt wurde, wenn der Benutzer damit interagiert. Beispiele beinhalten:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer den Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element fokussiert, indem er darauf klickt oder Tastatursteuerungen verwendet.

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

Pseudo-Elemente verhalten sich auf ähnliche Weise. Allerdings verhalten sie sich so, als hätten Sie ein komplett neues HTML-Element in das Markup eingefügt, anstatt einer vorhandenen Elementklasse eine Klasse hinzuzufügen.

Pseudo-Elemente fangen mit einem Doppelpunkt `::` an. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten das Syntax mit einem einfachen Doppelpunkt, sodass Sie dies manchmal im Code oder in Beispielen sehen können. Moderne Browser unterstützen die frühen Pseudo-Elemente mit einfacher oder doppelter Doppelpunkt-Syntax für die Abwärtskompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen wollten, könnten Sie sie in ein `<span>` Element einwickeln und einen Element-Selektor verwenden; jedoch würde dies fehlschlagen, wenn die Anzahl der umbrochenen Wörter länger oder kürzer als die Breite des Elternelements wäre. Da wir tendenziell nicht wissen, wie viele Wörter auf eine Zeile passen — da dies sich ändert, wenn sich die Bildschirmbreite oder die Schriftgröße ändert — ist es unmöglich, dies robust durch Hinzufügen von HTML zu tun.

Der `::first-line` Pseudo-Element-Selektor erledigt dies zuverlässig — wenn sich die Anzahl der Wörter erhöht oder verringert, wird trotzdem nur die erste Zeile ausgewählt.

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

Es verhält sich, als wäre ein `<span>` magisch um diese erste formatierte Zeile gewickelt und aktualisiert sich jedes Mal, wenn sich die Zeilenlänge ändert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Kombinieren von Pseudo-Klassen und Pseudo-Elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen wollten, könnten Sie die Selektoren `:first-child` und `::first-line` zusammenkoppeln. Versuchen Sie, das vorherige Live-Beispiel so zu bearbeiten, dass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>` Elements auswählen wollen, welches sich innerhalb eines `<article>` Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Generieren von Inhalten mit ::before und ::after

Es gibt ein paar besondere Pseudo-Elemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwendet werden, um Inhalt mit CSS in Ihr Dokument einzufügen.

Sie könnten diese verwenden, um eine Textzeichenfolge einzufügen, wie im Live-Beispiel unten. Versuchen Sie, den Textwert der {{cssxref("content")}} Eigenschaft zu ändern und sehen Sie, wie er sich im Ausgabeergebnis verändert. Sie könnten auch das `::before` Pseudo-Element zu `::after` ändern und sehen, wie der Text am Ende des Elements statt am Anfang eingefügt wird.

```html live-sample___before
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before
.box::before {
  content: "This should show before the other content. ";
}
```

{{EmbedLiveSample("before")}}

Das Einfügen von Textzeichenfolgen aus CSS wird im Web jedoch nicht sehr oft gemacht, da diese Texte für einige Screenreader unzugänglich sind und für jemanden schwer zu finden und in der Zukunft zu bearbeiten sein könnten.

Eine validere Verwendung dieser Pseudo-Elemente besteht darin, ein Symbol einzufügen, wie z.B. den kleinen Pfeil, der im folgenden Beispiel hinzugefügt wird, das ein visuelles Indiz ist, das wir nicht von einem Screenreader vorgelesen haben möchten:

```html live-sample___after-icon
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

Diese Pseudo-Elemente werden auch häufig verwendet, um eine leere Zeichenfolge einzufügen, die dann genau wie jedes Element auf der Seite gestaltet werden kann.

Im nächsten Beispiel haben wir eine leere Zeichenfolge mit dem `::before` Pseudo-Element hinzugefügt. Wir haben dies auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe gestalten können. Dann verwenden wir CSS, um es genau wie ein Element zu gestalten. Sie können mit dem CSS herumspielen und ändern, wie es aussieht und sich verhält.

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

Die Verwendung der `::before` und `::after` Pseudo-Elemente zusammen mit der `content` Eigenschaft wird als "Generierter Inhalt" in CSS bezeichnet, und Sie werden häufig sehen, dass diese Technik für verschiedene Aufgaben verwendet wird. Ein großartiges Beispiel ist die Website [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu generieren. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in Verwendung sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}} Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS Pseudo-Klassen und Pseudo-Elemente eingeführt, die besondere Arten von Selektoren sind.

Pseudo-Klassen ermöglichen es Ihnen, ein Element in einem bestimmten Zustand anzusprechen, als ob Sie eine Klasse für diesen Zustand dem DOM hinzugefügt hätten. Pseudo-Elemente verhalten sich so, als hätten Sie ein ganz neues Element zum DOM hinzugefügt und ermöglichen es Ihnen, dieses zu gestalten. Die `::before` und `::after` Pseudo-Elemente ermöglichen es Ihnen, mittels CSS Inhalte in das Dokument einzufügen.

Im nächsten Artikel lernen wir über Kombinatoren.

## Siehe auch

- [Pseudo-Klassen Referenz](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudo-Elemente Referenz](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
