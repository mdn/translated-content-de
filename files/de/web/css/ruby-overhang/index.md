---
title: ruby-overhang
slug: Web/CSS/ruby-overhang
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`ruby-overhang`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, ob eine {{htmlelement("ruby")}}-Annotation über den umgebenden Text hinausragt oder nicht.

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
  - : Wenn ein Ruby-Annotation-Container länger als sein entsprechender Basis-Container ist, kann die Annotation teilweise benachbarten Text überlappen. Ob und wie weit das Überhängen erlaubt ist, wird vom User-Agent bestimmt.
- `none`
  - : Ein Schlüsselwort, das angibt, dass das Ruby nie über benachbarte Container hinausreichen darf.

## Beschreibung

Die `ruby-overhang` Eigenschaft steuert, ob das Ruby-Annotation-Textfeld ({{htmlelement("rt")}}) benachbarten Text außerhalb des `<ruby>` Containerbox überlappen darf.

Wenn die Ruby-Annotation nicht überhängen darf &mdash; wenn `ruby-overhang: none` auf dem `<ruby>`-Element gesetzt ist &mdash; verhält sich dieses Element wie eine Inline-Box, als ob seine {{cssxref("display")}} Eigenschaft auf `inline` gesetzt wäre, wobei nur die eigenen Inhalte innerhalb seiner Grenzen gerendert werden und angrenzende Elemente die Begrenzungsbox nicht überschreiten.

Standardmäßig darf der Inhalt eines `<rt>`-Elements überhängen, sodass der Inhalt die `<ruby>`-Containerbox überlappen kann und teilweise über oder unter dem umgebenden Inline-Level-Inhalt gerendert wird. Mit `auto`, der Standardeinstellung, darf der Inhalt überhängen, aber er wird nicht überhängen, wenn dies benachbarte `<rt>`-Elemente oder Elemente mit einem `display`-Wert, der sich zu `ruby-base` oder `ruby-text` auflöst, überlappen würde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby überhängt den Basisteil

Dieses Beispiel demonstriert beide Werte der `ruby-overhang` Eigenschaft.

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

Eine rote `outline` von `1px` hilft, die Textannotation der {{htmlelement("rt")}}-Elemente hervorzuheben. Der erste Absatz hat `ruby-overhang: auto` und der zweite hat `ruby-overhang: none`.

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

Wenn `ruby-overhang` auf `none` gesetzt ist, darf der Annotations-Text die angrenzenden Boxen des Basis-Ruby-Texts nicht überlappen. Wenn Sie genau hinschauen, sehen Sie vielleicht, dass im ersten Absatz das rote Kästchen, das den Ruby-Text umhüllt, leicht Teile von nicht-assoziiertem `<ruby>`-Inhalt überlappt, wohingegen im `none`-Beispiel in unterstützenden Browsern keine Überlappung zwischen Ruby-Inhalten und nicht-assoziiertem Ruby-Text besteht.

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
