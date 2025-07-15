---
title: ruby-position
slug: Web/CSS/ruby-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`ruby-position`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Position eines Ruby-Elements relativ zu seinem Basiselement. Es kann über dem Element (`over`), unter ihm (`under`) oder zwischen den Zeichen auf ihrer rechten Seite (`inter-character`) positioniert werden.

{{InteractiveExample("CSS Demo: ruby-position")}}

```css interactive-example-choice
ruby-position: over;
```

```css interactive-example-choice
ruby-position: under;
```

```html interactive-example
<section id="default-example">
  <ruby id="example-element"> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
</section>
```

```css interactive-example
#example-element {
  font-size: 2em;
}
```

## Syntax

```css
/* Keyword values */
ruby-position: over;
ruby-position: under;
ruby-position: alternate;
ruby-position: alternate over;
ruby-position: alternate under;
ruby-position: inter-character;

/* Global values */
ruby-position: inherit;
ruby-position: initial;
ruby-position: revert;
ruby-position: revert-layer;
ruby-position: unset;
```

### Werte

- `over`
  - : ![Over example](screen_shot_2015-03-04_at_13.02.20.png)
    Ein Schlüsselwort, das angibt, dass das Ruby über dem Haupttext für horizontale Schriften und rechts davon für vertikale Schriften platziert werden muss.
- `under`
  - : ![Under example](screen_shot_2015-03-04_at_13.02.07.png)
    Ein Schlüsselwort, das angibt, dass das Ruby unter dem Haupttext für horizontale Schriften und links davon für vertikale Schriften platziert werden muss.
- `alternate`
  - : Ein Schlüsselwort, das angibt, dass das Ruby zwischen über und unter wechselt, wenn mehrere Ebenen von Annotationen vorhanden sind.
- `inter-character`
  - : Wenn angegeben, verhält es sich wie `over` in vertikalen Schreibrichtungen. Andernfalls gibt es an, dass das Ruby zwischen den verschiedenen Zeichen platziert werden muss, wobei es in horizontalem Text rechts von der Basis erscheint und die Kinder des Ruby-Anmerkungscontainers dazu zwingt, einen `vertical-rl` Schreibmodus zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby über dem Text positioniert

#### HTML

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-position: over;
}
```

#### Ergebnis

{{EmbedLiveSample("Ruby_positioned_over_the_text", 100, 40)}}

### Ruby unter dem Text positioniert

#### HTML

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-position: under;
}
```

#### Ergebnis

{{EmbedLiveSample("Ruby_positioned_under_the_text", 100, 40)}}

### Ruby alternierend

#### HTML

```html
<ruby>
  <rb>A</rb><rb>B</rb><rb>C</rb>
  <rtc>Above</rtc>
  <rtc>Below</rtc>
</ruby>
```

#### CSS

```css
ruby {
  ruby-position: alternate; /* this is also the initial value */
}
```

#### Ergebnis

{{EmbedLiveSample("Ruby_alternate", 100, 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, und {{HTMLElement("rtc")}} HTML-Elemente
- {{cssxref("ruby-align")}}
