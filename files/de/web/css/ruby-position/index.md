---
title: ruby-position
slug: Web/CSS/ruby-position
l10n:
  sourceCommit: 5a40cb3c8f48b0911e228f1f397f7ba40746d1a5
---

{{CSSRef}}

Die **`ruby-position`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Position eines `ruby`-Elements relativ zu seinem Basiselement. Es kann über dem Element (`over`), unter diesem (`under`) oder zwischen den Zeichen auf ihrer rechten Seite (`inter-character`) positioniert werden.

{{EmbedInteractiveExample("pages/css/ruby-position.html")}}

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
  - : ![Beispiel Over](screen_shot_2015-03-04_at_13.02.20.png)
    Ist ein Schlüsselwort, das angibt, dass das `ruby` über dem Haupttext für horizontale Schriften und rechts davon für vertikale Schriften platziert werden muss.
- `under`
  - : ![Beispiel Under](screen_shot_2015-03-04_at_13.02.07.png)
    Ist ein Schlüsselwort, das angibt, dass das `ruby` unter dem Haupttext für horizontale Schriften und links davon für vertikale Schriften platziert werden muss.
- `alternate`
  - : Ist ein Schlüsselwort, das angibt, dass das `ruby` zwischen `over` und `under` wechselt, wenn es mehrere Annotationsebenen gibt.
- `inter-character`
  - : Wenn angegeben, verhält es sich wie `over` in vertikalen Schreibmodi. Andernfalls wird angegeben, dass das `ruby` zwischen den verschiedenen Zeichen platziert werden muss, wobei es im horizontalen Text rechts von der Basis erscheint und die Kinder des `ruby`-Annotationscontainers dazu zwingt, einen `vertical-rl` Schreibmodus zu haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### `Ruby` über dem Text positioniert

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

### `Ruby` unter dem Text positioniert

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

### `Ruby` abwechselnd

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
