---
title: Umgang mit Inhaltsumbrüchen im Mehrspaltenlayout
short-title: Umgang mit Inhaltsumbrüchen
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Inhalte zwischen Spaltenkästen in einem Mehrspaltenlayout brechen auf die gleiche Weise, wie sie zwischen Seiten in Medien mit Seitenumbruch brechen. In beiden Kontexten können Sie steuern, wo und wie Inhalte mit den Eigenschaften des [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Moduls brechen. In diesem Leitfaden sehen wir, wie Fragmentierung in einem _Mehrspalten-Container_ oder einfach _multicol-Container_ funktioniert.

## Grundlagen der Fragmentierung

Das CSS-Fragmentierungsmodul liefert Details darüber, wie Inhalte zwischen den Fragmentierungscontainenern oder _Fragmentaineren_ brechen. Das [Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul definiert hingegen die {{cssxref("break-after")}}, {{cssxref("break-before")}} und {{cssxref("break-inside")}} Eigenschaften, die eine gewisse Kontrolle innerhalb und zwischen den Spalten bieten. In einem Mehrspaltenlayout ist ein Spaltenkasten ein Fragmentierungscontainer.

Ein Spaltenkasten kann andere Markups enthalten, und es gibt viele Stellen, an denen ein Umbruch nicht ideal wäre. Beispielsweise würden wir im Allgemeinen bevorzugen, dass die Bildunterschrift eines Bildes nicht in eine neue Spalte von dem Bild, auf das sie sich bezieht, verschoben wird. Auch das Beenden einer Spalte mit einer Überschrift sieht merkwürdig aus. Die Multicol-Fragmentierungseigenschaften bieten uns Möglichkeiten, um dies zu steuern.

Es gibt verschiedene Orte, an denen wir unsere Umbrüche kontrollieren möchten:

- Umbrüche in Boxen, beispielsweise innerhalb eines figure-Elements.
- Umbrüche vor und nach Boxen, was unser Beispiel mit der Überschrift oben einschließen würde.
- Umbrüche zwischen Zeilen.

## Umbrüche in Boxen

Um Umbrüche in Boxen zu steuern, verwenden Sie die {{cssxref("break-inside")}} Eigenschaft. Diese Eigenschaft nimmt die Werte an:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Im folgenden Beispiel haben wir break-inside auf das figure-Element angewendet, um zu verhindern, dass die Bildunterschrift von dem Bild getrennt wird.

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

Die Eigenschaften {{cssxref("break-before")}} und {{cssxref("break-after")}} werden verwendet, um Umbrüche vor und nach Elementen zu steuern. Sie nehmen im Mehrspaltenkontext die folgenden Werte an:

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

Die zum CSS-Fragmentierungsmodul gehörenden Eigenschaften {{cssxref("orphans")}} und {{cssxref("widows")}} sind ebenfalls nützlich und erwähnenswert. Die Eigenschaft `orphans` steuert die Anzahl der Zeilen, die am Ende eines Fragments alleine stehen. Die Eigenschaft `widows` steuert die Anzahl, die zu Beginn eines Fragments alleine stehen.

Die Eigenschaften `orphans` und `widows` nehmen einen {{CSSXref("integer")}} als Wert, der die Anzahl der Zeilen darstellt, die am Ende bzw. am Anfang eines Fragments zusammengehalten werden sollen. Beachten Sie, dass diese Eigenschaften nur innerhalb eines Blockcontainers wie einem Absatz funktionieren. Wenn der Block weniger Zeilen enthält als die Zahl, die Sie als Wert angeben, werden alle Zeilen zusammengehalten.

Im folgenden Beispiel verwenden wir die `orphans`-Eigenschaft, um die Anzahl der Zeilen zu steuern, die am unteren Rand einer Spalte verbleiben. Sie können diesen Wert ändern, um die Wirkung auf den Umbruch des Inhalts zu sehen.

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

Wenn Sie kleine Mengen von Inhalten haben und versuchen, Umbrüche auf mehreren Elementen zu steuern, muss Ihr Inhalt irgendwo brechen, sodass Sie möglicherweise nicht immer das gewünschte Ergebnis erzielen. In gewissem Maße ist Ihre Nutzung der Fragmentierung immer ein Vorschlag an den Browser, Umbrüche auf diese Weise zu steuern, wenn es möglich ist. Wenn der Inhalt nicht dort bricht, wo Sie es beabsichtigten, könnte das Ergebnis unordentlich sein, aber der Inhalt bleibt Ihren Nutzern dennoch zugänglich.
