---
title: Nachfolgender Geschwisterkombinator
slug: Web/CSS/Subsequent-sibling_combinator
l10n:
  sourceCommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{CSSRef}}

Der **nachfolgende Geschwisterkombinator** (`~`, eine Tilde) trennt zwei Selektoren und trifft auf _alle Instanzen_ des zweiten Elements, die dem ersten Element folgen (nicht unbedingt unmittelbar) und dasselbe übergeordnete Element haben.

Im folgenden Beispiel hilft der nachfolgende Geschwisterkombinator (`~`), Absätze zu selektieren und zu gestalten, die sowohl Geschwister eines Bildes sind und nach einem beliebigen Bild erscheinen.

```css
img ~ p {
  color: red;
}
```

## Syntax

```css-nolint
/* Der Leerraum um den ~ Kombinator ist optional, wird aber empfohlen. */
former_element ~ target_element { style properties }
```

## Beispiele

### Verwenden des Kombinators mit einfachen Selektoren

Dieses Beispiel zeigt die Verwendung des `~` Kombinators, wenn beide Selektoren einfache Selektoren sind (`p` und `span`).

```html
<article>
  <span>Dies ist nicht rot, weil es vor einem beliebigen Absatz erscheint.</span>
  <p>Hier ist ein Absatz.</p>
  <code>Hier ist etwas Code.</code>
  <span>
    Dieses Span ist rot, weil es nach dem Absatz erscheint, obwohl es dazwischen
    andere Knoten gibt.
  </span>
  <p>Egal was es sein mag, behalten Sie Ihr Lächeln bei.</p>
  <h1>Groß träumen</h1>
  <span>
    Es ist egal, wie viele oder welche Art von Knoten dazwischen liegen, alle
    Span von demselben übergeordneten Element nach einem Absatz sind rot.
  </span>
</article>
<span>
  Dieses Span ist nicht rot, weil es keinen übergeordneten Element mit einem Absatz teilt.
</span>
```

```css
p ~ span {
  color: red;
}
```

{{EmbedLiveSample("Using the combinator with simple selectors", "auto", 300)}}

### Verwenden des Kombinators mit komplexen Selektoren

Dieses Beispiel enthält zwei [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector), beide unter Verwendung des nachfolgenden Geschwisterkombinators: `.foo p ~ span` und `.foo p ~ .foo span`.

- Der erste komplexe Selektor, `.foo p ~ span`, trifft auf alle Spans, die nach einem Absatz kommen, _wenn_ der Span und der Absatz dasselbe übergeordnete Element teilen **und** dieses übergeordnete Element oder ein Vorfahr dieses übergeordneten Elements die Klasse `.foo` hat.
- Der zweite komplexe Selektor, `.foo p ~ .foo span`, trifft auf alle Spans, die ein Nachkomme des Elements mit der Klasse `.foo` sind, _wenn_ dieses Element ein Geschwister des zuvor genannten Absatzes ist.

Das Beispiel unten zeigt, dass das Zielelement im komplexen Selektor dasselbe übergeordnete Element wie das anfängliche Element im komplexen Selektor teilen muss.

```html
<h1>Groß träumen</h1>
<span>Und wieder einmal ist dies ein rotes Span!</span>
<div class="foo">
  <p>Hier ist ein weiterer Absatz.</p>
  <span>Ein blaues Span</span>
  <div class="foo">
    <span>Ein grünes Span</span>
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

{{EmbedLiveSample("Using the combinator with complex selectors", "auto", 200)}}

Im obigen HTML sind die beiden Geschwister von `.foo p` `span` und `.foo`. Das grüne `span` ist ein Nachkomme der `.foo` Klasse, die ein Geschwister von `p` ist.

- Wenn der Zielselektor `span` ist, wird das `span` Element ausgewählt, das ein Geschwister von `p` ist. Das `p` Element ist ein Nachkomme von `.foo`, ebenso wie seine `span` Geschwister.
- In `.foo p ~ .foo span` ist der Zielselektor `span`, das ein Nachkomme von `.foo` ist. In diesem Fall wird das `span` Element ausgewählt, das ein Nachkomme von `.foo` ist, wenn dieses `.foo` ein Geschwister von `p` ist; im Wesentlichen sind beide in einem Vorfahr von `.foo` verschachtelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nächster Geschwisterkombinator](/de/docs/Web/CSS/Next-sibling_combinator)
