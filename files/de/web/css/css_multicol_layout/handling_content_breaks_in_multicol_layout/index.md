---
title: Umgang mit Inhaltsumbrüchen im Mehrspalten-Layout
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

Inhalte zwischen Spaltenkästen in einem Mehrspaltenlayout brechen auf die gleiche Weise, wie sie zwischen Seiten in einem paginierten Medium brechen. In beiden Kontexten können Sie steuern, wo und wie Inhalte brechen, indem Sie Eigenschaften des [CSS-Fragmentierungsmoduls](/de/docs/Web/CSS/CSS_fragmentation) verwenden. In diesem Leitfaden sehen wir, wie Fragmentierung in einem _Mehrspalten-Container_ oder kurz _multicol-Container_ funktioniert.

## Grundlagen der Fragmentierung

Das CSS-Fragmentierungsmodul bietet Details darüber, wie Inhalte zwischen den Fragmentierungscontainern oder _Fragmentierern_ brechen. Das [Mehrspaltenlayoutmodul](/de/docs/Web/CSS/CSS_multicol_layout) definiert dagegen die {{cssxref("break-after")}}, {{cssxref("break-before")}} und {{cssxref("break-inside")}} Eigenschaften, die einige Kontrolle innerhalb und zwischen den Spalten bieten. In einem Mehrspaltenlayout ist ein Spaltenkasten ein Fragmentierungscontainer.

Ein Spaltenkasten kann weiteres Markup enthalten und es gibt viele Stellen, an denen ein Umbruch nicht ideal wäre. Beispielsweise würden wir generell bevorzugen, dass die Bildunterschrift eines Bildes nicht in eine neue Spalte verschoben wird, die vom referenzierten Bild getrennt ist. Außerdem sieht es seltsam aus, eine Spalte mit einer Überschrift enden zu lassen. Die Mehrspalten-Fragmentierungseigenschaften geben uns Möglichkeiten, dies zu steuern.

Es gibt verschiedene Stellen, an denen wir unsere Umbrüche steuern möchten:

- Umbrüche innerhalb von Kästen, beispielsweise innerhalb eines `figure`-Elements.
- Umbrüche vor und nach Kästen, was unser oben genanntes Beispiel einer Überschrift einschließt.
- Umbrüche zwischen Zeilen.

## Umbrüche innerhalb von Kästen

Um Umbrüche innerhalb von Kästen zu steuern, verwenden Sie die {{cssxref("break-inside")}}-Eigenschaft. Diese Eigenschaft nimmt die folgenden Werte an:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Im unten stehenden Beispiel haben wir `break-inside` auf das `figure`-Element angewendet, um zu verhindern, dass die Bildunterschrift vom Bild getrennt wird.

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

## Umbrüche vor und nach Kästen

Die Eigenschaften {{cssxref("break-before")}} und {{cssxref("break-after")}} werden verwendet, um Umbrüche vor und nach Elementen zu steuern. Sie nehmen die folgenden Werte im Mehrspaltenkontext an:

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

Die Eigenschaften {{cssxref("orphans")}} und {{cssxref("widows")}}, die Teil des CSS-Fragmentierungsmoduls sind, sind ebenfalls nützlich und erwähnenswert. Die `orphans`-Eigenschaft steuert die Anzahl der Zeilen, die am Ende eines Fragments alleine bleiben. Die `widows`-Eigenschaft steuert die Anzahl der Zeilen, die zu Beginn eines Fragments alleine bleiben.

Die `orphans`- und `widows`-Eigenschaften nehmen ein {{CSSXref("integer")}} als Wert, welcher die Anzahl der Zeilen repräsentiert, die am Ende bzw. Beginn eines Fragments zusammengehalten werden sollen. Beachten Sie, dass diese Eigenschaften nur innerhalb eines Blockcontainers wie eines Paragraphen funktionieren. Wenn der Block weniger Zeilen enthält als die angegebene Anzahl als Wert, werden alle Zeilen zusammengehalten.

Im unten stehenden Beispiel verwenden wir die `orphans`-Eigenschaft, um die Anzahl der Zeilen zu steuern, die am Ende einer Spalte verbleiben. Sie können diesen Wert ändern, um die Auswirkungen auf den Umbruch der Inhalte zu sehen.

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

Wenn Sie nur kleine Inhaltsmengen haben und versuchen, Umbrüche bei mehreren Elementen zu steuern, muss Ihr Inhalt irgendwo brechen, sodass Sie möglicherweise nicht immer das gewünschte Ergebnis erzielen. Bis zu einem gewissen Grad ist die Verwendung von Fragmentierung immer ein Vorschlag an den Browser, die Umbrüche auf diese Weise zu steuern, wenn es möglich ist. Wenn der Inhalt nicht da bricht, wo Sie es beabsichtigt haben, kann das Ergebnis unordentlich sein, aber der Inhalt steht Ihren Benutzern weiterhin zur Verfügung.
