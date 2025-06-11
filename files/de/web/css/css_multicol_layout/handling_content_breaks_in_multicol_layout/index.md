---
title: Umgang mit Inhaltsumbrüchen im Mehrspalten-Layout
short-title: Umgang mit Inhaltsumbrüchen
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Inhalt zwischen Spaltenboxen in einem Mehrspalten-Layout bricht auf die gleiche Weise, wie er zwischen Seiten in Medien mit Seitenaufteilung bricht. In beiden Kontexten können Sie steuern, wo und wie Inhalte brechen, indem Sie Eigenschaften des [CSS-Fragmentierungsmoduls](/de/docs/Web/CSS/CSS_fragmentation) verwenden. In diesem Leitfaden erfahren Sie, wie Fragmentierung in einem _Mehrspalten-Container_ oder kurz _Multicol-Container_ funktioniert.

## Grundlagen der Fragmentierung

Das CSS-Fragmentierungsmodul liefert Details dazu, wie Inhalte zwischen den Fragmentierungscontainern oder _Fragmentainern_ brechen. Das [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)-Modul definiert die Eigenschaften {{cssxref("break-after")}}, {{cssxref("break-before")}} und {{cssxref("break-inside")}}, die eine gewisse Kontrolle innerhalb und zwischen Spalten bieten. In einem Mehrspalten-Layout ist eine Spaltenbox ein Fragment-Container.

Eine Spaltenbox kann andere Markup-Elemente enthalten, und es gibt viele Stellen, an denen ein Umbruch nicht ideal wäre. Zum Beispiel wäre es uns im Allgemeinen lieber, dass die Bildunterschrift eines Bildes nicht in eine neue Spalte getrennt wird, weg von dem Bild, auf das sie sich bezieht. Auch das Beenden einer Spalte mit einer Überschrift sieht seltsam aus. Die Multicol-Fragmentierungseigenschaften geben uns Möglichkeiten, diese Umbrüche teilweise zu kontrollieren.

Es gibt verschiedene Stellen, an denen wir unsere Umbrüche kontrollieren möchten:

- Umbrüche innerhalb von Boxen, zum Beispiel innerhalb eines figure-Elements.
- Umbrüche vor und nach Boxen, was unser obiges Überschriftenbeispiel einschließen würde.
- Umbrüche zwischen Zeilen.

## Umbrüche innerhalb von Boxen

Um Umbrüche innerhalb von Boxen zu kontrollieren, verwenden Sie die Eigenschaft {{cssxref("break-inside")}}. Diese Eigenschaft nimmt folgende Werte an:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Im untenstehenden Beispiel haben wir `break-inside` auf das figure-Element angewendet, um zu verhindern, dass die Bildunterschrift vom Bild getrennt wird.

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
  border-bottom: 2px solid #999;
}
.container {
  column-width: 200px;
}
```

{{EmbedLiveSample("break-inside", "", "230px")}}

## Umbrüche vor und nach Boxen

Die Eigenschaften {{cssxref("break-before")}} und {{cssxref("break-after")}} werden verwendet, um Umbrüche vor und nach Elementen zu kontrollieren. Sie nehmen folgende Werte an, wenn sie in einem Mehrspalten-Kontext verwendet werden:

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

Die Eigenschaften {{cssxref("orphans")}} und {{cssxref("widows")}}, die Teil des CSS-Fragmentierungsmoduls sind, sind ebenfalls nützlich und erwähnenswert. Die Eigenschaft `orphans` steuert die Anzahl der Zeilen, die am Ende eines Fragments allein stehen. Die Eigenschaft `widows` steuert die Anzahl der Zeilen, die am Anfang eines Fragments allein stehen.

Die Eigenschaften `orphans` und `widows` nehmen einen {{CSSXref("integer")}} als Wert, der die Anzahl der Zeilen darstellt, die am Ende beziehungsweise Anfang eines Fragments zusammengehalten werden sollen. Beachten Sie, dass diese Eigenschaften nur innerhalb eines Block-Containers funktionieren, zum Beispiel eines Absatzes. Wenn der Block weniger Zeilen enthält, als der Wert, den Sie angegeben haben, werden alle Zeilen zusammengehalten.

Im untenstehenden Beispiel verwenden wir die Eigenschaft `orphans`, um die Anzahl der Zeilen zu kontrollieren, die am unteren Rand einer Spalte verbleiben. Sie können diesen Wert ändern, um die Auswirkungen auf den Umbruch des Inhalts zu sehen.

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

## Wenn Dinge nicht wie erwartet funktionieren

Wenn Sie kleine Mengen von Inhalten haben und versuchen, Umbrüche bei mehreren Elementen zu kontrollieren, muss Ihr Inhalt irgendwo brechen, sodass Sie möglicherweise nicht immer das gewünschte Ergebnis erhalten. In gewisser Weise ist Ihre Verwendung von Fragmentierung immer eine Empfehlung an den Browser, die Umbrüche so zu steuern, wenn es möglich ist. Wenn der Inhalt nicht dort umbricht, wo Sie es beabsichtigt haben, mag das Ergebnis unordentlich sein, aber der Inhalt ist dennoch für Ihre Nutzer verfügbar.
