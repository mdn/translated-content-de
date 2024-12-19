---
title: Pseudoklassen und Pseudoelemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Die nächste Gruppe von Selektoren, die wir uns ansehen werden, sind **Pseudoklassen** und **Pseudoelemente**. Es gibt eine große Anzahl von ihnen, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren<a>.
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

Eine Pseudoklasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z. B. das erste Element ihres Typs sind oder gerade vom Mauszeiger überfahren werden. Sie verhalten sich oft so, als hätten Sie einer Klasse einen Teil Ihres Dokuments zugewiesen, was Ihnen hilft, überflüssige Klassen in Ihrem Markup zu vermeiden und flexibleren, wartbaren Code zu schreiben.

Pseudoklassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudoklasse.

### Grundlegendes Beispiel für eine Pseudoklasse

Schauen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und Fett machen wollten, könnten wir dieser Absatz eine Klasse hinzufügen und dann in CSS auf diese Klasse anwenden, wie im ersten Beispiel unten gezeigt:

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

Dies könnte jedoch problematisch in der Wartung sein – was passiert, wenn ein neuer Absatz an den Anfang des Dokuments eingefügt wird? Wir müssten die Klasse auf den neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudoklassenselektor verwenden – dies wird _immer_ das erste Kindelement im Artikel anvisieren, und wir müssten das HTML nicht mehr bearbeiten (was ohnehin manchmal nicht möglich ist, vielleicht weil es von einem CMS generiert wird).

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

Alle Pseudoklassen verhalten sich auf dieselbe Weise. Sie zielen auf einen Teil Ihres Dokuments, der sich in einem bestimmten Zustand befindet, und verhalten sich, als ob Sie eine Klasse in Ihr HTML hinzugefügt hätten. Schauen Sie sich einige weitere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist zulässig, Pseudoklassen und Pseudoelemente ohne einen davor stehenden Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben und die Regel würde für _jedes_ Element gelten, das das erste Kind eines `<article>`-Elements ist, nicht nur für einen ersten Absatz – `:first-child` ist gleichwertig zu `*:first-child`. Normalerweise möchten Sie jedoch mehr Kontrolle, sodass Sie spezifischer sein müssen.

### Benutzeraktions-Pseudoklassen

Einige Pseudoklassen gelten nur dann, wenn der Benutzer auf irgendeine Weise mit dem Dokument interagiert. Diese **Benutzeraktions**-Pseudoklassen, manchmal auch als **dynamische Pseudoklassen** bezeichnet, verhalten sich so, als ob eine Klasse zu dem Element hinzugefügt worden wäre, wenn der Benutzer mit ihm interagiert. Beispiele sind:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer den Mauszeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element fokussiert, indem er klickt oder Tastatursteuerungen verwendet.

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

Pseudoelemente verhalten sich auf ähnliche Weise. Sie agieren jedoch, als ob Sie ein ganz neues HTML-Element in das Markup eingefügt hätten, anstatt einer bestehenden Klasse.

Pseudoelemente beginnen mit einem Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudoelement.

> [!NOTE]
> Einige frühe Pseudoelemente verwendeten die Single-Colon-Syntax, daher können Sie dies manchmal in Code oder Beispielen sehen. Moderne Browser unterstützen die frühen Pseudoelemente mit der Single- oder Double-Colon-Syntax für die Rückwärtskompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen wollten, könnten Sie sie in ein `<span>`-Element einwickeln und einen Elementselektor verwenden; dies würde jedoch fehlschlagen, wenn die Anzahl der eingebetteten Wörter länger oder kürzer wäre als die Breite des Elternelements. Da wir meistens nicht wissen, wie viele Wörter in eine Zeile passen – das wird sich ändern, wenn die Bildschirmbreite oder Schriftgröße sich ändert – ist es unmöglich, dies robust zu erreichen, indem man HTML hinzufügt.

Der `::first-line` Pseudoelementselektor macht dies zuverlässig für Sie – wenn die Anzahl der Wörter zunimmt oder abnimmt, wird trotzdem nur die erste Zeile ausgewählt.

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

Es verhält sich so, als ob ein `<span>` magisch um die erste formatierte Zeile gewickelt wäre und jedes Mal aktualisiert, wenn sich die Zeilenlänge ändert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Kombinieren von Pseudoklassen und Pseudoelementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen möchten, könnten Sie die Selektoren `:first-child` und `::first-line` zusammenketten. Versuchen Sie, das vorherige Live-Beispiel so zu bearbeiten, dass es den folgenden CSS verwendet. Wir sagen damit, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich in einem `<article>`-Element befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Generieren von Inhalten mit ::before und ::after

Es gibt ein paar spezielle Pseudoelemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwendet werden, um Inhalt in Ihr Dokument mit CSS einzufügen.

Sie könnten diese verwenden, um eine Zeichenkette einzufügen, wie im Live-Beispiel unten gezeigt. Versuchen Sie, den Textwert der {{cssxref("content")}} Eigenschaft zu ändern, und sehen Sie, wie er sich in der Ausgabe ändert. Sie könnten auch das Pseudoelement `::before` zu `::after` ändern und sehen, wie der Text am Ende des Elements statt am Anfang eingefügt wird.

```html live-sample___before
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before
.box::before {
  content: "This should show before the other content. ";
}
```

{{EmbedLiveSample("before")}}

Zeichenketten aus CSS einzufügen, tun wir jedoch selten im Web, da dieser Text für einige Screenreader unzugänglich ist und für jemanden schwer auffindbar und editierbar sein könnte.

Eine validere Verwendung dieser Pseudoelemente ist das Einfügen eines Symbols, zum Beispiel der kleine Pfeil im Beispiel unten, der ein visueller Indikator ist, den man nicht von einem Screenreader vorlesen lassen möchte:

```html live-sample___after-icon
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___after-icon
.box::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

Diese Pseudoelemente werden auch häufig verwendet, um eine leere Zeichenkette einzufügen, die dann wie jedes Element auf der Seite gestylt werden kann.

Im nächsten Beispiel haben wir einen leeren String mit dem Pseudoelement `::before` hinzugefügt. Wir haben dies auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe stylen können. Dann verwenden wir CSS, um es wie ein beliebiges Element zu stylen. Sie können mit dem CSS experimentieren und ändern, wie es aussieht und sich verhält.

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

Die Verwendung der Pseudoelemente `::before` und `::after` zusammen mit der `content`-Eigenschaft wird in CSS als "Generierter Inhalt" bezeichnet, und Sie werden oft sehen, dass diese Technik für verschiedene Aufgaben verwendet wird. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu generieren. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente in Verwendung sehen. Wann immer Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}} Eigenschaft an, um zu sehen, was zum HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudoklassen und -Pseudoelemente eingeführt, die spezielle Arten von Selektoren sind.

Pseudoklassen ermöglichen es Ihnen, ein Element in einem bestimmten Zustand anzuvisieren, als hätten Sie für diesen Zustand eine Klasse im DOM hinzugefügt. Pseudoelemente verhalten sich so, als hätten Sie ein ganz neues Element in das DOM eingefügt und ermöglichen es Ihnen, dieses zu stylen. Die Pseudoelemente `::before` und `::after` ermöglichen es Ihnen, Inhalte mit CSS in das Dokument einzufügen.

Im nächsten Artikel werden wir über Kombinatoren lernen.

## Siehe auch

- [Referenz für Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- [Referenz für Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
