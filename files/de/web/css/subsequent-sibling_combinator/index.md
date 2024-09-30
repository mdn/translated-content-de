---
title: Subsequent-sibling combinator
slug: Web/CSS/Subsequent-sibling_combinator
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}}

Der **subsequent-sibling combinator** (`~`, eine Tilde) trennt zwei Selektoren und trifft auf _alle Instanzen_ des zweiten Elements zu, die dem ersten Element folgen (nicht notwendigerweise unmittelbar) und das gleiche Elternelement teilen.

Im folgenden Beispiel hilft der subsequent-sibling combinator (`~`), Absätze zu selektieren und zu stylen, die sowohl Geschwister eines Bildes sind als auch nach einem beliebigen Bild erscheinen.

```css
img ~ p {
  color: red;
}
```

## Syntax

```css-nolint
/* The white space around the ~ combinator is optional but recommended. */
former_element ~ target_element { style properties }
```

## Beispiele

### Verwendung des Combinators mit einfachen Selektoren

Dieses Beispiel zeigt die Verwendung des `~` Combinators, wenn beide Selektoren einfache Selektoren sind (`p` und `span`).

```html
<article>
  <span>This is not red because it appears before any paragraph.</span>
  <p>Here is a paragraph.</p>
  <code>Here is some code.</code>
  <span>
    This span is red because it appears after the paragraph, even though there
    are other nodes in between.
  </span>
  <p>Whatever it may be, keep smiling.</p>
  <h1>Dream big</h1>
  <span>
    Doesn't matter how many or what kind of nodes are in between, all spans from
    the same parent after a paragraph are red.
  </span>
</article>
<span>
  This span is not red because it doesn't share a parent with a paragraph.
</span>
```

```css
p ~ span {
  color: red;
}
```

{{EmbedLiveSample("Verwendung des Combinators mit einfachen Selektoren", "auto", 300)}}

### Verwendung des Combinators mit komplexen Selektoren

Dieses Beispiel enthält zwei [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector), die beide den subsequent-sibling combinator verwenden: `.foo p ~ span` und `.foo p ~ .foo span`.

- Der erste komplexe Selektor, `.foo p ~ span`, trifft auf alle 'span'-Elemente zu, die nach einem Absatz kommen, _wenn_ das 'span'-Element und der Absatz das gleiche Elternelement teilen **und** dieses Elternelement oder ein Vorfahre dieses Elternelements die Klasse `.foo` hat.
- Der zweite komplexe Selektor, `.foo p ~ .foo span`, trifft auf alle 'span'-Elemente zu, die ein Nachkomme des Elements mit der Klasse `.foo` sind, _wenn_ dieses Element ein Geschwister des zuvor genannten Absatzes ist.

Das folgende Beispiel zeigt, dass das Ziel-Element im komplexen Selektor das gleiche Elternelement wie das Anfangselement im komplexen Selektor teilen muss.

```html
<h1>Dream big</h1>
<span>And yet again this is a red span!</span>
<div class="foo">
  <p>Here is another paragraph.</p>
  <span>A blue span</span>
  <div class="foo">
    <span>A green span</span>
  </div>
</div>
```

```css
.foo p ~ span {
  color: blue;
}

.foo p ~ .foo span {
  color: green;
}
```

{{EmbedLiveSample("Verwendung des Combinators mit komplexen Selektoren", "auto", 200)}}

Im obigen HTML sind die beiden Geschwister von `.foo p` `span` und `.foo`. Das grüne `span` ist ein Nachkomme der Klasse `.foo`, die ein Geschwister von `p` ist.

- Wenn der Zielselektor `span` ist, wird das `span`-Element selektiert, das ein Geschwister von `p` ist. Das `p`-Element ist ein Nachkomme von `.foo`, ebenso wie seine `span`-Geschwister.
- In `.foo p ~ .foo span`, ist der Zielselektor `span`, das ein Nachkomme von `.foo` ist. In diesem Fall wird das `span`-Element ausgewählt, das ein Nachkomme von `.foo` ist, wenn diese `.foo` ein Geschwister von `p` ist; im Wesentlichen sind beide in einem Vorfahren von `.foo` verschachtelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Next-sibling kombinator](/de/docs/Web/CSS/Next-sibling_combinator)
