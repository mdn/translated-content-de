---
title: "`ruby-align` CSS property"
short-title: ruby-align
slug: Web/CSS/Reference/Properties/ruby-align
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`ruby-align`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Verteilung der verschiedenen Ruby-Elemente über die Basis.

## Syntax

```css
/* Keyword values */
ruby-align: start;
ruby-align: center;
ruby-align: space-between;
ruby-align: space-around;

/* Global values */
ruby-align: inherit;
ruby-align: initial;
ruby-align: revert;
ruby-align: revert-layer;
ruby-align: unset;
```

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwörter angegeben:

- `start`
  - : Ist ein Schlüsselwort, das angibt, dass das Ruby mit dem Start des Basistextes ausgerichtet wird.
- `center`
  - : Ist ein Schlüsselwort, das angibt, dass das Ruby in der Mitte des Basistextes ausgerichtet wird.
- `space-between`
  - : Ist ein Schlüsselwort, das angibt, dass der zusätzliche Raum zwischen den Elementen des Ruby verteilt wird.
- `space-around`
  - : Ist ein Schlüsselwort, das angibt, dass der zusätzliche Raum zwischen und um die Elemente des Ruby verteilt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby, das am Anfang des Basistextes ausgerichtet ist

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

### Ruby, das in der Mitte des Basistextes ausgerichtet ist

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

### Zusätzlicher Raum, der zwischen Ruby-Elementen verteilt wird

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

### Zusätzlicher Raum, der zwischen und um Ruby-Elemente verteilt wird

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

- {{cssxref("ruby-position")}}
- [CSS Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
- HTML-Ruby-Elemente: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, und {{HTMLElement("rtc")}}
