---
title: Subsequent-sibling combinator
slug: Web/CSS/Subsequent-sibling_combinator
l10n:
  sourceCommit: 44f398527f2b0195a7c3b35db0a53c80aebe8e48
---

{{CSSRef}}

Der **subsequent-sibling Kombinator** (`~`, ein Tilde) trennt zwei Selektoren und passt auf _alle Instanzen_ des zweiten Elements, die auf das erste Element folgen (nicht unbedingt direkt) und das gleiche Elternelement teilen.

Im folgenden Beispiel hilft der subsequent-sibling Kombinator (`~`), Absätze auszuwählen und zu stylen, die sowohl Geschwister eines Bildes sind als auch nach einem Bild erscheinen.

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

### Verwendung des Kombinators mit einfachen Selektoren

Dieses Beispiel zeigt die Verwendung des `~` Kombinators, wenn beide Selektoren einfache Selektoren sind (`p` und `span`).

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

{{EmbedLiveSample("Verwendung des Kombinators mit einfachen Selektoren", "auto", 300)}}

### Verwendung des Kombinators mit komplexen Selektoren

Dieses Beispiel enthält zwei [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector), die beide den subsequent-sibling Kombinator verwenden: `.foo p ~ span` und `.foo p ~ .foo span`.

- Der erste komplexe Selektor, `.foo p ~ span`, passt auf alle `span`, die nach einem Absatz kommen, _wenn_ `span` und Absatz dasselbe Elternelement teilen **und** dieses Elternelement oder ein Vorfahr dieses Elternelements die Klasse `.foo` hat.
- Der zweite komplexe Selektor, `.foo p ~ .foo span`, passt auf alle `span`, die ein Nachfahre des Elements mit der Klasse `.foo` sind, _wenn_ dieses Element ein Geschwister des vorher erwähnten Absatzes ist.

Das untenstehende Beispiel zeigt, dass das Zielelement im komplexen Selektor dasselbe Elternelement wie das anfängliche Element im komplexen Selektor teilen muss.

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

{{EmbedLiveSample("Verwendung des Kombinators mit komplexen Selektoren", "auto", 200)}}

Im obigen HTML sind die beiden Geschwister von `.foo p` `span` und `.foo`. Der grüne `span` ist ein Nachfahre der `.foo` Klasse, das ein Geschwister von `p` ist.

- Wenn der Zielselektor `span` ist, wird das `span`-Element, das ein Geschwister von `p` ist, ausgewählt. Das `p`-Element ist ein Nachfahre von `.foo`, ebenso wie seine `span`-Geschwister.
- In `.foo p ~ .foo span` ist der Zielselektor der `span`, der ein Nachfahre von `.foo` ist. In diesem Fall wird das `span`-Element, das ein Nachfahre von `.foo` ist, ausgewählt, wenn diese `.foo` ein Geschwister von `p` ist; im Wesentlichen sind beide in einem Vorfahren von `.foo` eingebettet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Next-sibling Kombinator](/de/docs/Web/CSS/Next-sibling_combinator)
