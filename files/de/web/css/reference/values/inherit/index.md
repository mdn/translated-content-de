---
title: inherit
slug: Web/CSS/Reference/Values/inherit
l10n:
  sourceCommit: d76ae0015414759841076ae52869839b41d6b264
---

Das **`inherit`** [CSS](/de/docs/Web/CSS) Schlüsselwort bewirkt, dass das Element den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der Eigenschaft von seinem übergeordneten Element übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und wird nur benötigt, um eine andere Regel zu überschreiben.

> [!NOTE]
> Die Vererbung erfolgt immer vom übergeordneten Element im Dokumentbaum, selbst wenn das übergeordnete Element nicht der das Element enthaltende Block ist.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel demonstrieren wir die Wirkung des `inherit` Schlüsselworts, indem wir zwei Absätze mit verschachtelten Elementen vergleichen: Die Inline-Elemente in einem verwenden ihre Browser-Standardstile, während die in dem anderen einzelne Eigenschaftswerte von ihrem Elternteil erben.

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

Wir stylen die Inline-Elemente im ersten Absatz nicht, sodass sie ihre Standard-Browserstile verwenden.
Im zweiten Absatz setzen wir Eigenschaften auf jedem Inline-Element auf `inherit`, damit sie die berechneten Stile vom übergeordneten {{htmlelement("p")}} Element übernehmen.

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

### Erben aller Eigenschaftswerte

In diesem Beispiel verwenden wir denselben HTML-Code wie im vorherigen Beispiel, um die Probleme zu demonstrieren, die auftreten können, wenn das `inherit` Schlüsselwort auf alle Eigenschaften angewendet wird.

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

Im zweiten Absatz setzen wir nicht einzelne Eigenschaften auf `inherit`, sondern die {{cssxref("all")}} Eigenschaft auf allen Inline-Elementen auf `inherit`, damit sie alle berechneten Stile vom übergeordneten {{htmlelement("p")}} Element übernehmen.

```css
p:nth-of-type(2) > * {
  all: inherit;
}
```

#### Ergebnis

{{EmbedLiveSample("Inheriting all property values", "100%", 270)}}

Beachten Sie, wie das Inline-Element alle Eigenschaften des übergeordneten `<p>` erbt, einschließlich des block-level {{cssxref("display")}} Werts des Absatzes. Dies ist wahrscheinlich nicht das gewünschte Ergebnis.

### Ausgewählte Elemente von einer Regel ausschließen

Dieses Beispiel demonstriert, wie das `inherit` Schlüsselwort verwendet werden kann, um ausgewählte Elemente von einer Farbregel auszuschließen, sodass sie stattdessen die Farbe ihres übergeordneten Elements verwenden.

#### HTML

Wir fügen etwas semantisch strukturierten Inhalt ein.

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

Wir setzen die Textfarbe des `<main>` Elements auf `blue` und alle `<h2>` Elemente auf `green` in `monospace` Schriftart. Die `<h2>` Elemente innerhalb eines `<section>` erben die Textfarbe ihres übergeordneten Elements.

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

Die `<h2>` Elemente sind alle `green`. Wenn sie jedoch in einem {{htmlelement("section")}} Element verschachtelt sind, erben sie ihre Farbe von ihrem Elternteil, was innerhalb von {{htmlelement("main")}} `blue` ist. Die Standardtextfarbe ist sonst schwarz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}} Schlüsselwörter
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
