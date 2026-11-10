---
title: CSS-Schlüsselwort `inherit`
short-title: inherit
slug: Web/CSS/Reference/Values/inherit
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [CSS](/de/docs/Web/CSS)-Schlüsselwort **`inherit`** bewirkt, dass ein Element den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) einer Eigenschaft von seinem Elternelement übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) bekräftigt dies das Standardverhalten und ist nur erforderlich, um eine andere Regel zu überschreiben.

> [!NOTE]
> Die Vererbung erfolgt immer vom Elternelement im Dokumentbaum, auch wenn das Elternelement nicht der umschließende Block ist.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel veranschaulichen wir die Wirkung des Schlüsselworts `inherit`, indem wir zwei Absätze mit verschachtelten Elementen vergleichen: Die Inline-Elemente im einen Absatz verwenden ihre Browser-Standardstile, während die im anderen einzelne Eigenschaftswerte von ihrem Elternelement erben.

#### HTML

Wir verwenden zwei identische Absätze mit mehreren Inline-Elementen.

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

Die Inline-Elemente im ersten Absatz erhalten keine eigenen Stilregeln und verwenden daher ihre Browser-Standardstile.
Im zweiten Absatz setzen wir Eigenschaften für jedes Inline-Element auf `inherit`, sodass sie die berechneten Werte vom übergeordneten {{htmlelement("p")}}-Element erhalten.

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

In diesem Beispiel verwenden wir dasselbe HTML wie im vorherigen Beispiel, um Probleme zu veranschaulichen, die auftreten können, wenn das Schlüsselwort `inherit` auf alle Eigenschaften angewendet wird.

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

Im zweiten Absatz setzen wir nicht einzelne Eigenschaften auf `inherit`, sondern die Eigenschaft {{cssxref("all")}} für alle Inline-Elemente. Dadurch erhalten sie alle berechneten Eigenschaftswerte von ihrem übergeordneten {{htmlelement("p")}}-Element.

```css
p:nth-of-type(2) > * {
  all: inherit;
}
```

#### Ergebnis

{{EmbedLiveSample("Inheriting all property values", "100%", 270)}}

Beachten Sie, dass die Inline-Elemente alle Eigenschaften des übergeordneten `<p>`-Elements erben, einschließlich seines {{cssxref("display")}}-Werts für ein Blockelement. Das ist wahrscheinlich nicht das gewünschte Ergebnis.

### Ausgewählte Elemente von einer Regel ausnehmen

Dieses Beispiel zeigt, wie sich mit dem Schlüsselwort `inherit` ausgewählte Elemente von einer Farbregel ausnehmen lassen, damit sie stattdessen die Farbe ihres Elternelements übernehmen.

#### HTML

Wir verwenden semantisch strukturierten Inhalt.

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

Wir setzen die Textfarbe des `<main>`-Elements auf `blue` und die aller `<h2>`-Elemente auf `green` mit der Schriftart `monospace`. Die `<h2>`-Elemente innerhalb eines `<section>`-Elements werden auf `inherit` gesetzt, damit sie die Textfarbe ihres Elternelements erben.

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

{{EmbedLiveSample("excluding_selected_elements_from_a_rule", "100%", 470)}}

Die `<h2>`-Elemente sind alle `green`. Sind sie jedoch in ein {{htmlelement("section")}}-Element verschachtelt, erben sie ihre Farbe vom Elternelement. Innerhalb von {{htmlelement("main")}} ist diese Farbe `blue`. Andernfalls ist die Standard-Textfarbe Schwarz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schlüsselwörter {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("revert-rule")}} und {{cssxref("unset")}}
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
