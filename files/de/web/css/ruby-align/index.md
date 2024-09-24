---
title: ruby-align
slug: Web/CSS/ruby-align
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`ruby-align`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Verteilung der verschiedenen Ruby-Elemente über die Basis.

## Syntax

```css
/* Schlüsselwort-Werte */
ruby-align: start;
ruby-align: center;
ruby-align: space-between;
ruby-align: space-around;

/* Globale Werte */
ruby-align: inherit;
ruby-align: initial;
ruby-align: revert;
ruby-align: revert-layer;
ruby-align: unset;
```

### Werte

- `start`
  - : Ist ein Schlüsselwort, das angibt, dass das Ruby am Anfang des Basistextes ausgerichtet wird.
- `center`
  - : Ist ein Schlüsselwort, das angibt, dass das Ruby in der Mitte des Basistextes ausgerichtet wird.
- `space-between`
  - : Ist ein Schlüsselwort, das angibt, dass der zusätzliche Raum zwischen den Elementen des Rubys verteilt wird.
- `space-around`
  - : Ist ein Schlüsselwort, das angibt, dass der zusätzliche Raum zwischen den Elementen des Rubys und um sie herum verteilt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby am Anfang des Basistextes ausgerichtet

#### HTML

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: start;
}
```

#### Ergebnis

{{EmbedLiveSample("Ruby_aligned_at_the_start_of_the_base_text", 180, 40)}}

### Ruby in der Mitte des Basistextes ausgerichtet

#### HTML

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("Ruby_aligned_at_the_center_of_the_base_text", 180, 40)}}

### Zusätzlicher Raum zwischen Ruby-Elementen verteilt

#### HTML

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: space-between;
}
```

#### Ergebnis

{{EmbedLiveSample("Extra_space_distributed_between_ruby_elements", 180, 40)}}

### Zusätzlicher Raum zwischen und um Ruby-Elemente verteilt

#### HTML

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: space-around;
}
```

#### Ergebnis

{{EmbedLiveSample("Extra_space_distributed_between_and_around_ruby_elements", 180, 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML Ruby-Elemente: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, und {{HTMLElement("rtc")}}.
- CSS Ruby-Eigenschaften: {{cssxref("ruby-position")}}, {{cssxref("ruby-merge")}}.
