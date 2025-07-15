---
title: Umgang mit Inhaltsunterbrechungen im Mehrspalten-Layout
short-title: Umgang mit Inhaltsunterbrechungen
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Inhalte zwischen Spaltenboxen in einem Mehrspalten-Layout werden ähnlich unterbrochen wie zwischen Seiten in paginierten Medien. In beiden Fällen können Sie steuern, wo und wie Inhalte unterbrochen werden, indem Sie Eigenschaften des [CSS-Fragmentierungsmoduls](/de/docs/Web/CSS/CSS_fragmentation) verwenden. In diesem Leitfaden sehen wir, wie Fragmentierung in einem _Mehrspalten-Container_ oder kurz _Multicol-Container_ funktioniert.

## Grundlagen der Fragmentierung

Das CSS-Fragmentierungsmodul liefert Details darüber, wie Inhalte zwischen den Fragmentierungscontainern oder _Fragmentainern_ unterbrochen werden. Das [Mehrspalten-Layoutmodul](/de/docs/Web/CSS/CSS_multicol_layout) hingegen definiert die Eigenschaften {{cssxref("break-after")}}, {{cssxref("break-before")}} und {{cssxref("break-inside")}}, die innerhalb und zwischen Spalten Kontrolle bieten. In einem Mehrspalten-Layout ist eine Spaltenbox ein Fragment-Container.

Eine Spaltenbox kann andere Markup-Elemente enthalten, und es gibt viele Stellen, an denen eine Unterbrechung nicht ideal wäre. Zum Beispiel möchten wir im Allgemeinen, dass die Bildunterschrift eines Bildes nicht in eine neue Spalte getrennt wird, weit weg von dem zugehörigen Bild. Auch sieht es merkwürdig aus, eine Spalte mit einer Überschrift enden zu lassen. Die Fragmentierungseigenschaften für Mehrspalten bieten uns Möglichkeiten, hierüber ein gewisses Maß an Kontrolle auszuüben.

Es gibt verschiedene Orte, an denen wir unsere Unterbrechungen kontrollieren möchten:

- Unterbrechungen innerhalb von Boxen, zum Beispiel innerhalb eines `figure` Elements.
- Unterbrechungen vor und nach Boxen, was unser obiges Beispiel mit der Überschrift einschließen würde.
- Unterbrechungen zwischen Zeilen.

## Unterbrechungen innerhalb von Boxen

Um Unterbrechungen innerhalb von Boxen zu kontrollieren, verwenden Sie die Eigenschaft {{cssxref("break-inside")}}. Diese Eigenschaft nimmt folgende Werte an:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Im folgenden Beispiel haben wir `break-inside` auf das `figure` Element angewendet, um zu verhindern, dass die Bildunterschrift vom Bild getrennt wird.

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

## Unterbrechungen vor und nach Boxen

Die Eigenschaften {{cssxref("break-before")}} und {{cssxref("break-after")}} werden verwendet, um Unterbrechungen vor und nach Elementen zu steuern. Sie nehmen in einem Mehrspaltenkontext folgende Werte an:

- auto
- avoid
- avoid-column
- column

Im nächsten Beispiel erzwingen wir einen Spaltenumbruch vor einem `h2` Element.

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

## Unterbrechungen zwischen Zeilen

Die Eigenschaften {{cssxref("orphans")}} und {{cssxref("widows")}}, Teil des CSS-Fragmentierungsmoduls, sind ebenfalls nützlich und erwähnenswert. Die Eigenschaft `orphans` steuert die Anzahl der Zeilen, die am Ende eines Fragments alleine gelassen werden. Die Eigenschaft `widows` steuert die Anzahl, die am Anfang eines Fragments alleine gelassen wird.

Die Eigenschaften `orphans` und `widows` nehmen einen {{CSSXref("integer")}} als Wert, der die Anzahl der Zeilen darstellt, die am Ende und Anfang eines Fragments zusammengehalten werden sollen. Beachten Sie, dass diese Eigenschaften nur innerhalb eines Block-Containers funktionieren, wie einem Absatz. Wenn der Block weniger Zeilen enthält als die Anzahl, die Sie als Wert angeben, werden alle Zeilen zusammengehalten.

Im folgenden Beispiel verwenden wir die Eigenschaft `orphans`, um die Anzahl der Zeilen zu steuern, die am unteren Rand einer Spalte verbleiben. Sie können diesen Wert ändern, um die Auswirkungen auf die Unterbrechung des Inhalts zu sehen.

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

## Wenn etwas nicht wie erwartet funktioniert

Wenn Sie kleine Mengen an Inhalt haben und versuchen, Unterbrechungen bei mehreren Elementen zu steuern, muss Ihr Inhalt irgendwo unterbrochen werden, sodass Sie möglicherweise nicht immer das gewünschte Ergebnis erhalten. Ihr Einsatz von Fragmentierung ist bis zu einem gewissen Grad immer ein Vorschlag an den Browser, die Unterbrechungen auf diese Weise zu steuern, wenn es möglich ist. Wenn der Inhalt nicht dort unterbrochen wird, wo Sie es beabsichtigt hatten, könnte das Ergebnis unordentlich sein, aber der Inhalt steht Ihren Benutzern dennoch zur Verfügung.
