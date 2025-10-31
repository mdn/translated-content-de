---
title: ruby-overhang
slug: Web/CSS/Reference/Properties/ruby-overhang
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`ruby-overhang`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob eine {{htmlelement("ruby")}}-Annotation irgendeinen umgebenden Text überhängen soll oder nicht.

{{InteractiveExample("CSS Demo: ruby-overhang")}}

```css interactive-example-choice
ruby-overhang: auto;
```

```css interactive-example-choice
ruby-overhang: none;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
    ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
  </p>
</section>
```

```css interactive-example
#default-example {
  font-size: 2em;
}
```

## Syntax

```css
/* Keyword values */
ruby-overhang: auto;
ruby-overhang: none;

/* Global values */
ruby-overhang: inherit;
ruby-overhang: initial;
ruby-overhang: revert;
ruby-overhang: revert-layer;
ruby-overhang: unset;
```

### Werte

- `auto`
  - : Wenn ein Ruby-Anmerkungscontainer länger ist als sein entsprechender Basiskontainer, kann die Anmerkung teilweise benachbarten Text überlappen.
    Ob, und wie viel überhängt wird, wird durch das Benutzeragent bestimmt.
- `none`
  - : Ein Schlüsselwort, das angibt, dass das Ruby niemals über angrenzende Container hinausgehen darf.

## Beschreibung

Die `ruby-overhang` Eigenschaft steuert, ob die Ruby-Annotationstextbox ({{htmlelement("rt")}}) angrenzenden Text außerhalb des `<ruby>`-Containerrahmens überlappen darf.

Wenn Ruby-Annotationstext nicht überhängen darf &mdash; wenn `ruby-overhang: none` auf dem `<ruby>`-Element gesetzt ist &mdash; verhält sich dieses Element wie eine Inline-Box, als ob seine {{cssxref("display")}} Eigenschaft auf `inline` gesetzt wäre, wobei nur die eigenen Inhalte innerhalb seiner Grenzen gerendert werden und benachbarte Elemente nicht die Begrenzungsbox überschreiten.

Standardmäßig darf der Inhalt eines `<rt>`-Elements überhängen, sodass der Inhalt den `<ruby>`-Containerrahmen überlappen kann, teilweise über oder unter dem umliegenden Inline-Inhaltslevel gerendert werden kann. Bei `auto`, dem Standard, darf der Inhalt überhängen, aber er wird nicht überhängen, wenn dies benachbarte `<rt>`-Elemente oder Elemente mit einem `display`-Wert, der zu `ruby-base` oder `ruby-text` aufgelöst wird, überlappen würde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby überhängt Basistext

Dieses Beispiel demonstriert beide Werte der `ruby-overhang` Eigenschaft.

#### HTML

Wir fügen zwei Absätze mit identischem `<ruby>`-Inhalt und -Strukturen ein, die sich nur durch ihre Klassennamen unterscheiden.

```html
<p class="auto">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>

<p class="none">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>
```

#### CSS

Ein rotes `outline` von `1px` hilft, die Textannotation von {{htmlelement("rt")}}-Elementen hervorzuheben. Der erste Absatz hat `ruby-overhang: auto` und der zweite hat `ruby-overhang: none`.

```css
p {
  font-size: 40px;
  display: block;
  margin: 0.5rem;
}
rt {
  font-size: 28px;
  outline: 1px solid red;
}
.auto {
  ruby-overhang: auto;
}
.none {
  ruby-overhang: none;
}
```

#### Ergebnisse

{{EmbedLiveSample("ruby_overhanging_base_text", , "350")}}

Wenn `ruby-overhang` auf `none` gesetzt ist, darf der Annotationstext die angrenzenden Boxen des Basistextes von Ruby nicht überlappen. Wenn Sie genau hinsehen, können Sie bemerken, dass im ersten Absatz die rote Box, die den Ruby-Text umschließt, leicht Teile nicht assoziierter `<ruby>`-Inhalte überlappt, während es im `none`-Beispiel in unterstützenden Browsern keine Überlappung zwischen Ruby-Inhalt und nicht-assoziiertem Ruby-Text gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("ruby-align")}}
- {{CSSxRef("text-transform")}}: full-size-kana
- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
