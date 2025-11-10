---
title: Subsequent-Sibling-Kombinator
slug: Web/CSS/Reference/Selectors/Subsequent-sibling_combinator
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **subsequent-sibling Kombinator** (`~`, eine Tilde) trennt zwei Selektoren und erfasst _alle Instanzen_ des zweiten Elements, die nach dem ersten Element folgen (nicht unbedingt unmittelbar) und dasselbe Elternelement haben.

Im folgenden Beispiel hilft der subsequent-sibling Kombinator (`~`) dabei, Absätze auszuwählen und zu stylen, die sowohl Geschwister eines Bildes sind als auch nach jedem Bild erscheinen.

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

Dieses Beispiel enthält zwei [komplexe Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector), beide verwenden den subsequent-sibling Kombinator: `.foo p ~ span` und `.foo p ~ .foo span`.

- Der erste komplexe Selektor, `.foo p ~ span`, erfasst alle `span`-Elemente, die nach einem Absatz kommen, _wenn_ das `span` und der Absatz dasselbe Elternelement teilen **und** dieses Elternelement oder ein Vorfahre dieses Elements die Klasse `.foo` hat.
- Der zweite komplexe Selektor, `.foo p ~ .foo span`, erfasst alle `span`-Elemente, die ein Nachfolger des Elements mit der Klasse `.foo` sind, _wenn_ dieses Element ein Geschwister des zuvor erwähnten Absatzes ist.

Das folgende Beispiel zeigt, dass das Ziel-Element im komplexen Selektor dasselbe Elternelement wie das anfängliche Element im komplexen Selektor teilen muss.

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

Im obigen HTML sind die zwei Geschwister von `.foo p` `span` und `.foo`. Das grüne `span` ist ein Nachkomme der Klasse `.foo`, die ein Geschwister von `p` ist.

- Wenn der Zielselektor `span` ist, wird das `span`-Element ausgewählt, das ein Geschwister von `p` ist. Das `p`-Element ist ein Nachkomme von `.foo`, ebenso wie seine `span`-Geschwister.
- In `.foo p ~ .foo span` ist der Zielselektor `span`, das ein Nachkomme von `.foo` ist. In diesem Fall wird das `span`-Element ausgewählt, das ein Nachkomme von `.foo` ist, wenn diese `.foo` ein Geschwister von `p` ist; im Grunde sind beide in einem Vorfahren von `.foo` verschachtelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Next-sibling Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)
