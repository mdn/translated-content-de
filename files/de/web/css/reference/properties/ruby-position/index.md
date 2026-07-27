---
title: "`ruby-position` CSS property"
short-title: ruby-position
slug: Web/CSS/Reference/Properties/ruby-position
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`ruby-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Position eines Ruby-Elements relativ zu seinem Basiselement. Es kann über dem Element (`over`), unter ihm (`under`) oder rechts davon (`inter-character`) positioniert werden.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `over`
  - : ![Over example](screen_shot_2015-03-04_at_13.02.20.png)
    Ist ein Schlüsselwort, das angibt, dass Ruby über dem Haupttext für horizontale Schriften und rechts davon für vertikale Schriften platziert werden muss.
- `under`
  - : ![Under example](screen_shot_2015-03-04_at_13.02.07.png)
    Ist ein Schlüsselwort, das angibt, dass Ruby unter dem Haupttext für horizontale Schriften und links davon für vertikale Schriften platziert werden muss.
- `alternate`
  - : Ist ein Schlüsselwort, das angibt, dass Ruby zwischen über und unter wechselt, wenn es mehrere Ebenen der Annotation gibt.
- `inter-character`
  - : Ist ein Schlüsselwort, das angibt, dass die Ruby-Annotation rechts von den Basistextzeichen platziert wird. Dieser Wert ist für Bopomofo-Ruby (Zhuyin Fuhao) gedacht.

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
- [CSS Ruby Layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
