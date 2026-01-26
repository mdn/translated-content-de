---
title: Pseudo-Klassen und Pseudo-Elemente
short-title: Pseudo-Klassen und Elemente
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Die nächste Gruppe von Selektoren, die wir uns ansehen werden, wird als **Pseudo-Klassen** und **Pseudo-Elemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob etwas für die Aufgabe funktioniert, die Sie erreichen möchten.

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
          <li>Der Unterschied zwischen beiden.</li>
          <li>Kombinieren von Pseudo-Klassen und Pseudo-Elementen.</li>
          <li>Generierte Inhalte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudo-Klasse?

Eine Pseudo-Klasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, zum Beispiel, wenn sie das erste Element ihres Typs sind oder wenn sie vom Mauszeiger überfahren werden. Sie verhalten sich oft so, als hätten Sie einer Textstelle Ihres Dokuments eine Klasse hinzugefügt, wodurch Sie überflüssige Klassen in Ihrem Markup reduzieren und flexibleren, besser wartbaren Code erstellen können.

Pseudo-Klassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudo-Klasse.

### Einfaches Beispiel für eine Pseudo-Klasse

Schauen wir uns ein einfaches Beispiel an. Wenn wir möchten, dass der erste Absatz in einem Artikel größer und fett ist, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS in dieser Klasse anwenden:

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

Dies könnte jedoch mühsam zu pflegen sein – was, wenn ein neuer Absatz oben im Dokument hinzugefügt wird? Wir müssten die Klasse in den neuen Absatz verschieben. Anstelle des Hinzufügens der Klasse könnten wir den {{cssxref(":first-child")}} Pseudo-Klassen-Selektor verwenden – dieser wird _immer_ das erste Kind-Element eines Elements ansprechen (in diesem Fall das `<article>`), und wir müssten das HTML nicht mehr bearbeiten (was möglicherweise sowieso nicht immer möglich ist, vielleicht, weil es von einem CMS generiert wird).

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

Alle Pseudo-Klassen verhalten sich auf diese Weise. Sie zielen auf einen bestimmten Teil Ihres Dokuments, der sich in einem bestimmten Zustand befindet, und verhalten sich so, als hätten Sie eine Klasse in Ihr HTML hinzugefügt.

> [!NOTE]
> Es ist zulässig, Pseudo-Klassen und -Elemente ohne vorangestellten Element-Selektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben und die Regel würde auf _jedes_ Element angewendet, das das erste Kind eines `<article>`-Elements ist, nicht nur ein Absatz-Erstkind — `:first-child` ist gleichbedeutend mit `*:first-child`. Normalerweise möchten Sie jedoch mehr Kontrolle als das, also müssen Sie spezifischer sein.

### Benutzeraktions-Pseudo-Klassen

Einige Pseudo-Klassen gelten nur, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudo-Klassen**, manchmal auch als **dynamische Pseudo-Klassen** bezeichnet, verhalten sich so, als wäre eine Klasse dem Element hinzugefügt worden, wenn der Benutzer mit ihm interagiert. Beispiele hierfür sind:

- {{cssxref(":hover")}} — wie oben erwähnt; dies gilt nur, wenn der Benutzer den Zeiger über ein Element bewegt, typischerweise einen Link.
- {{cssxref(":focus")}} — gilt nur, wenn der Benutzer das Element durch Klicken oder Verwenden von Tastatursteuerungen fokussiert.

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

Gehen Sie zurück zu unserem [ersten Pseudo-Klassen-Beispiel](#einfaches_beispiel_für_eine_pseudo-klasse) und bearbeiten Sie das CSS mithilfe des MDN-Playgrounds:

1. Fügen Sie eine Regel hinzu, die den Absatztext `blau` färbt, wenn er überfahren wird.
2. Fügen Sie eine Regel hinzu, die nur den letzten Absatz im Artikel auswählt und ihm einen `orangen` `Hintergrund` gibt.

Sie können Informationen über alle anderen verfügbaren Pseudo-Klassen auf der MDN-[Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)-Referenzseite finden.

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich auf ähnliche Weise. Sie verhalten sich jedoch so, als hätten Sie ein komplett neues HTML-Element in das Markup eingefügt, anstatt einer vorhandenen Elementen eine Klasse hinzuzufügen.

Pseudo-Elemente beginnen mit einem Doppel-Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühe Pseudo-Elemente verwendeten die Ein-Doppelpunkt-Syntax, sodass Sie diese manchmal in Code oder Beispielen sehen können. Moderne Browser unterstützen die frühen Pseudo-Elemente mit Einzel- oder Doppel-Doppelpunkt-Syntax für die rückwärts Kompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen möchten, könnten Sie sie in ein `<span>`-Element einwickeln und einen Element-Selektor verwenden; das würde jedoch scheitern, wenn die Anzahl der von Ihnen umschlossenen Wörter länger oder kürzer als die Breite des übergeordneten Elements wäre. Da wir normalerweise nicht wissen, wie viele Wörter in eine Zeile passen – da sich das ändert, wenn sich die Bildschirmbreite oder Schriftgröße ändert – ist es unmöglich, dies robust durch das Hinzufügen von HTML zu tun.

Der Pseudo-Element-Selektor `::first-line` wird dies zuverlässig für Sie tun – wenn die Anzahl der Wörter zu- oder abnimmt, wird immer noch nur die erste Zeile ausgewählt.

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

Es verhält sich so, als wäre ein `<span>` magisch um diese erste formatierte Zeile gewickelt und aktualisiert sich jedes Mal, wenn sich die Zeilenlänge ändert.

Sie sehen, dass dies die erste Zeile beider Absätze auswählt.

### Spielen mit Pseudo-Elementen

Bearbeiten Sie das CSS des vorherigen Beispiels mithilfe des MDN-Playgrounds:

1. Fügen Sie eine Regel hinzu, die dem mit dem Mauscursor ausgewählten Text einen `roten` `Hintergrund` gibt (Sie benötigen dafür das {{cssxref("::selection")}} Pseudo-Element). Wählen Sie etwas Text aus, um es auszuprobieren.
2. Fügen Sie eine Regel hinzu, die den ersten Buchstaben jedes `<p>` innerhalb des `<article>`-Elements mit folgenden Eigenschaften versieht:

- Ein `gelber` `Hintergrund`.
- Ein `1px solid black` `Rahmen`.
- Eine `Schriftgröße` von `2rem`.

Sie können Informationen über alle anderen verfügbaren Pseudo-Elemente auf der MDN-[Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)-Referenzseite finden.

## Kombinieren von Pseudo-Klassen und Pseudo-Elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen möchten, könnten Sie die `:first-child`- und `::first-line`-Selektoren zusammenführen.

Versuchen Sie, das vorherige Beispiel so zu bearbeiten, dass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich innerhalb eines `<article>`-Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Inhalt mit ::before und ::after generieren

Es gibt ein paar spezielle Pseudo-Elemente, die zusammen mit der {{cssxref("content")}}-Eigenschaft verwendet werden, um Inhalte mit CSS in Ihr Dokument einzufügen. Diese Technik wird als **generierter Inhalt** bezeichnet.

Sie können es verwenden, um eine Textzeichenfolge einzufügen, wie im Beispiel unten. Wir haben dem generierten Inhalt auch eine `gelbe` Hintergrundfarbe gegeben, damit er leicht vom Absatzinhalt unterschieden werden kann.

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

- Ändern Sie den Textwert der {{cssxref("content")}}-Eigenschaft und sehen Sie, wie er sich in der Ausgabe ändert.
- Ändern Sie das `::before` Pseudo-Element in `::after` und sehen Sie, wie der Text am Ende des Elements anstelle des Anfangs eingefügt wird.

### Generierte Inhalts-Icons

Das obige Beispiel ist gültiges CSS. Das Einfügen von Textzeichenfolgen aus CSS ist jedoch nicht wirklich etwas, das wir sehr oft tun, da dieser Text für einige Bildschirmleser unzugänglich ist und jemandem schwer zugänglich sein könnte, um ihn in Zukunft zu finden und zu bearbeiten. Eine gültigere Nutzung dieser Pseudo-Elemente ist das Einfügen eines Symbols, zum Beispiel des kleinen Pfeils, der im folgenden Beispiel hinzugefügt wurde, der ein visueller Indikator ist, den wir nicht möchten, dass ein Bildschirmleser vorgelesen wird:

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

Generierte Inhalte werden auch häufig verwendet, um eine leere Zeichenfolge einzufügen, die dann wie jedes andere Element auf der Seite gestylt werden kann.

In diesem nächsten Beispiel haben wir eine leere Zeichenfolge mit dem `::before` Pseudo-Element hinzugefügt. Wir haben es so eingestellt, dass es `display: block` ist, damit wir es mit einer Breite und Höhe stylen können, um eine quadratische Form zu erstellen. Dann verwenden wir CSS, um es wie jedes andere Element zu stylen.

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

Sie werden regelmäßig sehen, dass generierte Inhalte für verschiedene andere Aufgaben verwendet werden. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu generieren. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in der Anwendung sehen. Jedes Mal, wenn Sie diese Selektoren sehen, schauen Sie sich die {{cssxref("content")}}-Eigenschaft an, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudo-Klassen und Pseudo-Elemente eingeführt, die spezielle Typen von Selektoren sind.

Pseudo-Klassen ermöglichen es Ihnen, ein Element anzusprechen, wenn es sich in einem bestimmten Zustand befindet, als ob Sie dem DOM für diesen Zustand eine Klasse hinzugefügt hätten. Pseudo-Elemente verhalten sich so, als hätten Sie dem DOM ein ganz neues Element hinzugefügt, und ermöglichen es Ihnen, dieses zu stylen. Die Pseudo-Elemente `::before` und `::after` ermöglichen es Ihnen, mit CSS Inhalte in das Dokument einzufügen.

Im nächsten Artikel werden wir Kombinatoren kennenlernen.

## Siehe auch

- [Pseudo-Klassen-Referenz](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Pseudo-Elemente-Referenz](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
