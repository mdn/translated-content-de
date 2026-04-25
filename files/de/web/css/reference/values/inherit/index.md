---
title: "`inherit` CSS-Schlüsselwort"
short-title: inherit
slug: Web/CSS/Reference/Values/inherit
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Das **`inherit`**-Schlüsselwort von [CSS](/de/docs/Web/CSS) sorgt dafür, dass das Element den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der Eigenschaft von seinem Elternelement übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und wird nur benötigt, um eine andere Regel zu übersteuern.

> [!NOTE]
> Die Vererbung erfolgt immer vom Elternelement im Dokumentenbaum, auch wenn das Elternelement nicht der enthaltende Block ist.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel demonstrieren wir die Wirkung des `inherit`-Schlüsselworts, indem wir zwei Absätze mit verschachtelten Elementen vergleichen: Die Inline-Elemente in einem verwenden ihre Standard-Stilvorlagen des Browsers, während die im anderen einzelne Eigenschaftswerte von ihren Eltern erben.

#### HTML

Wir fügen zwei identische Absätze mit mehreren Inline-Elementen ein.

```html
<p>
  This paragraph has <em>emphasized text</em>, <strong>strong text</strong>, and
  <a href="#">a link to top</a>.
</p>
<p>
  This paragraph has <em>emphasized text</em>, <strong>strong text</strong>, and
  <a href="#">a link to top</a>.
</p>
```

#### CSS

Wir stylen die Inline-Elemente im ersten Absatz nicht, daher nutzen sie ihre Standard-Browserstile.
Im zweiten Absatz setzen wir Eigenschaften für jedes Inline-Element auf `inherit`, sodass sie die berechneten Stile vom Elternelement {{htmlelement("p")}} erhalten.

```css
p:nth-of-type(2) {
  a {
    text-decoration: inherit;
    color: inherit;
  }
  em {
    font-style: inherit;
  }
  strong {
    font-weight: inherit;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "100%", 100)}}

### Alle Eigenschaftswerte erben

In diesem Beispiel verwenden wir das gleiche HTML wie im vorherigen Beispiel, um die Probleme zu demonstrieren, die auftreten können, wenn das `inherit`-Schlüsselwort auf alle Eigenschaften angewendet wird.

```html hidden
<p>
  This paragraph has <em>emphasized text</em>, <strong>strong text</strong>, and
  <a href="#">a link to top</a>.
</p>
<p>
  This paragraph has <em>emphasized text</em>, <strong>strong text</strong>, and
  <a href="#">a link to top</a>.
</p>
```

#### CSS

Im zweiten Absatz setzen wir anstelle einzelner Eigenschaften die {{cssxref("all")}} Eigenschaft auf alle Inline-Elemente auf `inherit`, sodass sie alle berechneten Stile von ihrem Elternelement {{htmlelement("p")}} übernehmen.

```css
p:nth-of-type(2) > * {
  all: inherit;
}
```

#### Ergebnis

{{EmbedLiveSample("Inheriting all property values", "100%", 270)}}

Beachten Sie, wie das Inline-Element alle Eigenschaften des Elternelements `<p>` erbt, einschließlich des Block-Level-{{cssxref("display")}}-Werts des Absatzes. Dies ist wahrscheinlich nicht der Effekt, den Sie wünschen würden.

### Ausgewählte Elemente von einer Regel ausschließen

Dieses Beispiel zeigt, wie das `inherit`-Schlüsselwort verwendet werden kann, um ausgewählte Elemente von einer Farbregel auszuschließen, sodass sie die Farbe ihres Elternelements verwenden.

#### HTML

Wir fügen einige semantisch strukturierte Inhalte ein.

```html
<header>
  <h1>This is my blog</h1>
  <h2>This is the subtitle of my blog in the HEADER</h2>
  <p>My blog is not very interesting</p>
</header>
<main>
  <h2>This first blog post in MAIN</h2>
  <p>I really have nothing to say.</p>
  <section>
    <h2>This second blog post is in a SECTION within MAIN</h2>
    <p>
      It is in a section because it is important even though it isn't the least
      bit interesting.
    </p>
  </section>
</main>
<footer>
  <h2>Contact in FOOTER</h2>
  <p>Find me on Mastodon</p>
  <section>
    <h2>Copyright in SECTION within FOOTER</h2>
    <p>1996</p>
  </section>
</footer>
```

#### CSS

Wir setzen die Textfarbe des `<main>`-Elements auf `blue` und aller `<h2>`-Elemente auf `green` in `monospace` Schriftart. Die `<h2>`-Elemente in einem `<section>` sind so eingestellt, dass sie die Textfarbe ihres Elternteils `inherit` übernehmen.

```css
main {
  color: blue;
}

h2 {
  color: green;
  font-family: monospace;
}

section h2 {
  color: inherit;
}
```

#### Ergebnis

{{EmbedLiveSample("Exclude selected elements from a rule", "100%", 470)}}

Die `<h2>`-Elemente sind alle `green`. Wenn sie jedoch in einem {{htmlelement("section")}}-Element verschachtelt sind, übernehmen sie ihre Farbe von ihrem Elternteil, das innerhalb von {{htmlelement("main")}} `blue` ist. Die Standard-Textfarbe ist ansonsten schwarz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("revert-rule")}}, und {{cssxref("unset")}} Schlüsselwörter
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
