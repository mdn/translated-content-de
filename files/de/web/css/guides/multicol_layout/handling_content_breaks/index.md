---
title: Umgang mit Umbrüchen in einem Mehrspalten-Layout
short-title: Umgang mit Umbrüchen
slug: Web/CSS/Guides/Multicol_layout/Handling_content_breaks
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In einem Mehrspalten-Layout unterbrechen Inhalte zwischen Spaltenboxen auf die gleiche Weise, wie sie in einem Paginierungsmedium zwischen Seiten unterbrochen werden. In beiden Kontexten können Sie steuern, wo und wie Inhalte unterbrochen werden, indem Sie Eigenschaften des [CSS-Fragmentierungsmoduls](/de/docs/Web/CSS/Guides/Fragmentation) verwenden. In diesem Leitfaden sehen wir, wie Fragmentierung in einem _Mehrspalten-Container_ oder kurz _Multicol-Container_ funktioniert.

## Grundlagen der Fragmentierung

Das CSS-Fragmentierungsmodul liefert Details darüber, wie Inhalte zwischen den Fragmentierungscontainern oder _Fragmentainern_ unterbrochen werden. Das [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout)-Modul hingegen definiert die {{cssxref("break-after")}}, {{cssxref("break-before")}} und {{cssxref("break-inside")}} Eigenschaften, die eine gewisse Kontrolle innerhalb und zwischen den Spalten ermöglichen. In einem Mehrspalten-Layout ist eine Spaltenbox ein Fragmentcontainer.

Eine Spaltenbox kann andere Markups enthalten, und es gibt viele Stellen, an denen ein Umbruch nicht ideal wäre. Zum Beispiel möchten wir im Allgemeinen, dass die Bildunterschrift eines Bildes nicht in eine neue Spalte getrennt wird, entfernt von dem Bild, auf das sie sich bezieht. Außerdem sieht es merkwürdig aus, wenn eine Spalte mit einer Überschrift endet. Die Multicol-Fragmentierungs-Eigenschaften geben uns Möglichkeiten, hierüber ein gewisses Maß an Kontrolle auszuüben.

Es gibt verschiedene Stellen, an denen wir unsere Umbrüche kontrollieren möchten:

- Umbrüche innerhalb von Boxen, zum Beispiel innerhalb eines figure-Elements.
- Umbrüche vor und nach Boxen, was unser oben genanntes Beispiel mit der Überschrift umfasst.
- Umbrüche zwischen Zeilen.

## Umbrüche innerhalb von Boxen

Um Umbrüche innerhalb von Boxen zu kontrollieren, verwenden Sie die Eigenschaft {{cssxref("break-inside")}}. Diese Eigenschaft nimmt folgende Werte an:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Im folgenden Beispiel haben wir break-inside auf das figure-Element angewendet, um zu verhindern, dass die Bildunterschrift vom Bild getrennt wird.

```html live-sample___break-inside
<div class="container">
  <figure>
    <img
      alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
    <figcaption>Balloons</figcaption>
  </figure>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
  </p>
</div>
```

```css live-sample___break-inside
body {
  font: 1.2em / 1.5 sans-serif;
}

img {
  max-width: 100%;
}
figure {
  margin: 0;
  break-inside: avoid;
}
figcaption {
  font-weight: bold;
  border-bottom: 2px solid #999999;
}
.container {
  column-width: 200px;
}
```

{{EmbedLiveSample("break-inside", "", "230px")}}

## Umbrüche vor und nach Boxen

Die Eigenschaften {{cssxref("break-before")}} und {{cssxref("break-after")}} werden verwendet, um Umbrüche vor und nach Elementen zu steuern. Sie nehmen im Multicol-Kontext folgende Werte an:

- auto
- avoid
- avoid-column
- column

Im nächsten Beispiel erzwingen wir einen Spaltenumbruch vor einem `h2`-Element.

```html live-sample___break-before
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon.
  </p>
  <h2>My heading</h2>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce.</p>
</div>
```

```css live-sample___break-before
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  break-before: column;
}
```

{{EmbedLiveSample("break-before", "", "250px")}}

## Umbrüche zwischen Zeilen

Die Eigenschaften {{cssxref("orphans")}} und {{cssxref("widows")}}, Teil des CSS-Fragmentierungsmoduls, sind ebenfalls nützlich und erwähnenswert. Die `orphans`-Eigenschaft steuert die Anzahl der Zeilen, die am Ende eines Fragments alleine stehen. Die `widows`-Eigenschaft steuert die Anzahl der am Anfang eines Fragments alleine stehenden Zeilen.

Die Eigenschaften `orphans` und `widows` nehmen einen {{CSSXref("integer")}} als Wert an, der die Anzahl der zusammenzuhaltenden Zeilen am Ende bzw. Anfang eines Fragments darstellt. Beachten Sie, dass diese Eigenschaften nur innerhalb eines Blockcontainers wie eines Absatzes funktionieren. Wenn der Block weniger Zeilen enthält als die von Ihnen angegebene Anzahl, werden alle Zeilen zusammengehalten.

Im Beispiel unten verwenden wir die `orphans`-Eigenschaft, um die Anzahl der Zeilen am unteren Ende einer Spalte zu steuern. Sie können diesen Wert ändern, um die Auswirkungen auf die Aufteilung des Inhalts zu sehen.

```html live-sample___orphans
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce.</p>
</div>
```

```css live-sample___orphans
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
  orphans: 3;
}
```

{{EmbedLiveSample("orphans", "", "240px")}}

## Wenn die Dinge nicht wie erwartet funktionieren

Wenn Sie kleine Inhaltsmengen haben und versuchen, Umbrüche auf mehreren Elementen zu steuern, muss Ihr Inhalt irgendwo unterbrochen werden, sodass das Ergebnis möglicherweise nicht immer das ist, was Sie beabsichtigt haben. In gewisser Weise ist Ihr Einsatz von Fragmentierung immer ein Vorschlag an den Browser, Umbrüche auf diese Weise zu steuern, wenn es möglich ist. Wenn der Inhalt nicht dort bricht, wo Sie es vorgesehen haben, mag das Ergebnis unordentlich sein, aber der Inhalt bleibt für Ihre Benutzer weiterhin verfügbar.
