---
title: Nachfolgender Geschwisterkombinator
slug: Web/CSS/Subsequent-sibling_combinator
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **nachfolgende Geschwisterkombinator** (`~`, eine Tilde) trennt zwei Selektoren und erfasst _alle Instanzen_ des zweiten Elements, die dem ersten Element nachfolgen (nicht unbedingt unmittelbar) und das gleiche Elternelement teilen.

Im folgenden Beispiel hilft der nachfolgende Geschwisterkombinator (`~`), Absätze auszuwählen und zu gestalten, die sowohl Geschwister eines Bildes sind als auch nach einem Bild erscheinen.

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

Dieses Beispiel enthält zwei [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector), die beide den nachfolgenden Geschwisterkombinator verwenden: `.foo p ~ span` und `.foo p ~ .foo span`.

- Der erste komplexe Selektor `.foo p ~ span` erfasst alle `span`, die nach einem `p` erscheinen, _wenn_ `span` und `p` das gleiche Elternelement teilen **und** dieses Elternelement oder ein Vorfahre dieses Elternelements die Klasse `.foo` hat.
- Der zweite komplexe Selektor `.foo p ~ .foo span` erfasst alle `span`, die ein Nachfahre des Elements mit der Klasse `.foo` sind, _wenn_ dieses Element ein Geschwister des zuvor erwähnten `p` ist.

Das untenstehende Beispiel zeigt, dass das Zielelement im komplexen Selektor das gleiche Elternelement wie das Anfangselement im komplexen Selektor teilen muss.

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

Im obigen HTML sind die beiden Geschwister von `.foo p` `span` und `.foo`. Der grüne `span` ist ein Nachfahre der `.foo`-Klasse, die ein Geschwister von `p` ist.

- Wenn der Zielselektor `span` ist, wird das `span`-Element ausgewählt, das ein Geschwister von `p` ist. Das `p`-Element ist ein Nachfahre von `.foo`, ebenso wie seine `span`-Geschwister.
- In `.foo p ~ .foo span` ist der Zielselektor `span`, das ein Nachfahre von `.foo` ist. In diesem Fall wird das `span`-Element ausgewählt, das ein Nachfahre von `.foo` ist, wenn dieses `.foo` ein Geschwister von `p` ist; im Wesentlichen sind beide in einem Vorfahren von `.foo` eingebettet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nachfolgender Geschwisterkombinator](/de/docs/Web/CSS/Next-sibling_combinator)
