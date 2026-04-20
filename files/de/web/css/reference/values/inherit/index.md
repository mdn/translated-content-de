---
title: "`inherit` CSS-Schlüsselwort"
short-title: inherit
slug: Web/CSS/Reference/Values/inherit
l10n:
  sourceCommit: aaedffba9f47d6dce7967a4191963378026d9406
---

Das **`inherit`** [CSS](/de/docs/Web/CSS) Schlüsselwort bewirkt, dass das Element den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der Eigenschaft von seinem Elternelement übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzeigenschaft {{cssxref("all")}}.

Für [vererbte Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und ist nur erforderlich, um eine andere Regel zu überschreiben.

> [!NOTE]
> Vererbung erfolgt immer vom Elternelement im Dokumentbaum, auch wenn das Elternelement nicht der enthaltende Block ist.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel demonstrieren wir die Wirkung des `inherit` Schlüsselworts, indem wir zwei Absätze mit verschachtelten Elementen vergleichen: Die Inline-Elemente in einem verwenden ihre Standard-Browserstile, während diejenigen im anderen einzelne Eigenschaftswerte von ihrem Elternteil erben.

#### HTML

Wir fügen zwei identische Absätze mit mehreren Inline-Elementen hinzu.

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

Wir stylen die Inline-Elemente im ersten Absatz nicht, sodass sie ihre Standard-Browserstile verwenden. Im zweiten Absatz setzen wir die Eigenschaften jedes Inline-Elements auf `inherit`, sodass sie die berechneten Stile vom übergeordneten {{htmlelement("p")}} Element übernehmen.

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

In diesem Beispiel verwenden wir das gleiche HTML wie im vorherigen Beispiel, um die Probleme zu demonstrieren, die auftreten können, wenn das `inherit` Schlüsselwort auf alle Eigenschaften angewendet wird.

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

Im zweiten Absatz setzen wir statt einzelner Eigenschaften die {{cssxref("all")}} Eigenschaft auf allen Inline-Elementen auf `inherit`, sodass sie alle berechneten Stile vom übergeordneten {{htmlelement("p")}} Element erhalten.

```css
p:nth-of-type(2) > * {
  all: inherit;
}
```

#### Ergebnis

{{EmbedLiveSample("Inheriting all property values", "100%", 270)}}

Beachten Sie, wie das Inline-Element alle Eigenschaften des übergeordneten `<p>` erbt, einschließlich des Block-Level-{{cssxref("display")}}-Werts des Absatzes. Dies ist wahrscheinlich nicht der gewünschte Effekt.

### Ausgewählte Elemente von einer Regel ausschließen

Dieses Beispiel zeigt, wie das `inherit` Schlüsselwort verwendet werden kann, um ausgewählte Elemente von einer Farbvorgabe auszuschließen, sodass sie die Farbe ihres Elternteils verwenden.

#### HTML

Wir fügen semantisch strukturierte Inhalte hinzu.

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

Wir setzen die Textfarbe des `<main>` Elements auf `blau` und alle `<h2>` Elemente auf `grün` in `monospace` Schriftart. Die `<h2>` Elemente innerhalb eines `<section>` erben die Textfarbe ihres Elternteils.

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

Die `<h2>` Elemente sind alle `grün`. Wenn sie jedoch in einem {{htmlelement("section")}} Element verschachtelt sind, erben sie ihre Farbe von ihrem Elternteil, welches innerhalb von {{htmlelement("main")}} `blau` ist. Die Standard-Textfarbe ist ansonsten schwarz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}} Schlüsselwörter
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
