---
title: "`ruby-overhang` CSS property"
short-title: ruby-overhang
slug: Web/CSS/Reference/Properties/ruby-overhang
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die CSS-Eigenschaft **`ruby-overhang`** gibt an, ob eine {{htmlelement("ruby")}}-Annotation über den umgebenden Text hinausragt oder nicht.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwörter angegeben:

- `auto`
  - : Wenn ein Ruby-Annotationscontainer länger als sein entsprechender Basiskontainer ist, kann die Annotation teilweise angrenzenden Text überlappen.
    Ob, und wie viel überlappend, wird vom Benutzeragenten bestimmt.
- `none`
  - : Ein Schlüsselwort, das angibt, dass die Ruby-Annahme niemals erlaubt ist, über angrenzende Container hinauszugehen.

## Beschreibung

Die Eigenschaft `ruby-overhang` steuert, ob die Ruby-Annotationstextbox ({{htmlelement("rt")}}) angrenzenden Text außerhalb der `<ruby>`-Containerbox überlappen darf.

Wenn die Ruby-Annotation nicht überhängen darf &mdash; wenn `ruby-overhang: none` auf das `<ruby>`-Element gesetzt ist &mdash; verhält sich dieses Element wie eine Inline-Box, als ob seine {{cssxref("display")}}-Eigenschaft auf `inline` gesetzt wäre, mit nur seinem eigenen Inhalt innerhalb seiner Grenzen und angrenzenden Elementen, die die Begrenzungsbox nicht überschreiten.

Standardmäßig darf der Inhalt eines `<rt>`-Elements überhängen, sodass der Inhalt die `<ruby>`-Containerbox überlappen kann und teilweise über oder unter umgebenden Inline-Inhalten gerendert wird. Bei `auto`, dem Standardwert, darf der Inhalt überhängen, aber er wird nicht überhängen, wenn dadurch angrenzende `<rt>`-Elemente oder Elemente mit einem `display`-Wert, der zu `ruby-base` oder `ruby-text` aufgelöst wird, überlappt würden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby überhängender Basistext

Dieses Beispiel demonstriert beide Werte der `ruby-overhang`-Eigenschaft.

#### HTML

Wir enthalten zwei Absätze mit identischem `<ruby>`-Inhalt und -Strukturen, außer ihren Klassennamen.

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

Eine rote `outline` von `1px` hilft, die Textannotation von {{htmlelement("rt")}}-Elementen hervorzuheben. Der erste Absatz hat `ruby-overhang: auto` und der zweite `ruby-overhang: none`.

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

Wenn `ruby-overhang` auf `none` gesetzt ist, darf der Annotationstext die angrenzenden Boxen des Basis-Ruby-Textes nicht überlappen. Wenn Sie genau hinsehen, werden Sie bemerken, dass im ersten Absatz die rote Box, die den Ruby-Text umschließt, Teile des nicht zugehörigen `<ruby>`-Inhalts leicht überlappt, während im `none`-Beispiel in unterstützenden Browsern keine Überlappung zwischen Ruby-Inhalten und nicht zugehörigem Ruby-Text vorhanden ist.

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
