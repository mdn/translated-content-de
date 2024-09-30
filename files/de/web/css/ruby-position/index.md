---
title: ruby-position
slug: Web/CSS/ruby-position
l10n:
  sourceCommit: 5a40cb3c8f48b0911e228f1f397f7ba40746d1a5
---

{{CSSRef}}

Die **`ruby-position`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Position eines Ruby-Elements relativ zu seinem Basiselement. Es kann über dem Element (`over`), unter ihm (`under`) oder zwischen den Zeichen auf der rechten Seite (`inter-character`) positioniert werden.

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
  - : ![Over example](screen_shot_2015-03-04_at_13.02.20.png)
    Ist ein Schlüsselwort, das angibt, dass das Ruby für horizontale Schriftarten über dem Haupttext und für vertikale Schriftarten rechts davon platziert werden muss.
- `under`
  - : ![Under example](screen_shot_2015-03-04_at_13.02.07.png)
    Ist ein Schlüsselwort, das angibt, dass das Ruby für horizontale Schriftarten unter dem Haupttext und für vertikale Schriftarten links davon platziert werden muss.
- `alternate`
  - : Ist ein Schlüsselwort, das angibt, dass das Ruby bei mehreren Annotationsebene zwischen `over` und `under` wechselt.
- `inter-character`
  - : Wenn angegeben, verhält es sich wie `over` in vertikalen Schreibrichtungen. Andernfalls gibt es an, dass das Ruby zwischen den verschiedenen Zeichen platziert werden muss, erscheint auf der rechten Seite des Basiselements im horizontalen Text und erzwingt, dass die Kinder des Ruby-Anmerkungscontainers einen `vertical-rl` Schreibmodus haben.

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
