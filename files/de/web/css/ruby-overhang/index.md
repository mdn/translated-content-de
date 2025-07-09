---
title: ruby-overhang
slug: Web/CSS/ruby-overhang
l10n:
  sourceCommit: 54090ab3b7450b92a8eb6b8c67eb59dd33154852
---

{{CSSRef}}

Die **`ruby-overhang`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob eine {{htmlelement("ruby")}}-Annotation über umliegenden Text hinausragt oder nicht.

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
  - : Wenn ein Ruby-Annotation-Container länger ist als sein entsprechender Basis-Container, kann die Annotation teilweise angrenzenden Text überlappen.
    Ob und wie viel überhängt wird, wird durch das User-Agent bestimmt.
- `none`
  - : Ein Schlüsselwort, das anzeigt, dass Ruby nie über angrenzende Container hinausragen darf.

## Beschreibung

Die Eigenschaft `ruby-overhang` steuert, ob das Ruby-Annotation-Textfeld ({{htmlelement("rt")}}) angrenzenden Text außerhalb des `<ruby>`-Containerrahmens überlappen darf.

Wenn Ruby-Annotation-Text nicht überhängen darf &mdash; wenn `ruby-overhang: none` auf dem `<ruby>`-Element gesetzt ist &mdash; verhält sich dieses Element wie eine Inline-Box, als ob seine {{cssxref("display")}}-Eigenschaft auf `inline` gesetzt wäre, wobei nur der eigene Inhalt innerhalb seiner Grenzen gerendert wird und angrenzende Elemente die Begrenzungsbox nicht überschreiten.

Standardmäßig darf der Inhalt eines `<rt>`-Elements überhängen, sodass der Inhalt den `<ruby>`-Containerrahmen überlappen kann, teilweise über oder unter umgebenden Inline-Level-Inhalten. Mit `auto`, dem Standardwert, darf der Inhalt überhängen, jedoch nicht, wenn dadurch angrenzende `<rt>`-Elemente oder Elemente mit einem `display`-Wert, der zu `ruby-base` oder `ruby-text` aufgelöst wird, überlappt würden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby überhängender Basistext

Dieses Beispiel demonstriert beide Werte der `ruby-overhang`-Eigenschaft.

#### HTML

Wir fügen zwei Absätze mit identischem `<ruby>`-Inhalt und -Strukturen ein, abgesehen von ihren Klassennamen.

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

Ein roter `outline` von `1px` hebt die Textannotation der {{htmlelement("rt")}}-Elemente hervor.
Der erste Absatz hat `ruby-overhang: auto`, und der zweite hat `ruby-overhang: none`.

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

Wenn `ruby-overhang` auf `none` gesetzt ist, darf der Annotierungstext die angrenzenden Rahmen der Basis-Ruby-Texte nicht überlappen. Wenn Sie genau hinsehen, werden Sie bemerken, dass im ersten Absatz die rote Box, die den Ruby-Text umschließt, teilweise Teile des nicht assoziierten `<ruby>`-Inhalts überlappt, während im `none`-Beispiel in unterstützten Browsern kein Überlappen zwischen Ruby-Inhalten und nicht assoziiertem Ruby-Text vorhanden ist.

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
