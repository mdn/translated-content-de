---
title: "`ruby-overhang` CSS property"
short-title: ruby-overhang
slug: Web/CSS/Reference/Properties/ruby-overhang
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`ruby-overhang`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine {{htmlelement("ruby")}}-Annotation über jeglichen umgebenden Text hinausragt oder nicht.

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
  - : Wenn ein Ruby-Annotation-Container länger ist als sein entsprechender Basis-Container, kann die Annotation teilweise den angrenzenden Text überlappen.
    Ob und wie viel überhangen wird, wird vom Benutzeragenten bestimmt.
- `none`
  - : Ein Schlüsselwort, das angibt, dass das Ruby niemals über die angrenzenden Container hinausreichen darf.

## Beschreibung

Die `ruby-overhang`-Eigenschaft steuert, ob der Ruby-Annotationstextkasten ({{htmlelement("rt")}}) angrenzenden Text außerhalb des `<ruby>`-Containerkastens überlappen darf.

Wenn Ruby-Annotationstext nicht hinausragen darf &mdash; wenn `ruby-overhang: none` auf das `<ruby>`-Element gesetzt wird &mdash; verhält sich dieses Element wie eine Inline-Box, als ob seine {{cssxref("display")}}-Eigenschaft auf `inline` gesetzt wäre, wobei nur sein eigener Inhalt innerhalb seiner Grenzen gerendert wird und angrenzende Elemente die Begrenzungsbox nicht überschreiten.

Standardmäßig darf der Inhalt eines `<rt>`-Elements hinausragen, sodass der Inhalt den `<ruby>`-Containerkasten überlappen kann und teilweise über oder unter umgebendem Inhalt auf Inline-Ebene gerendert wird.
Mit `auto`, dem Standardwert, darf der Inhalt hinausragen, aber es wird nicht hinausragen, wenn dadurch angrenzende `<rt>`-Elemente oder Elemente mit einem `display`-Wert, der zu `ruby-base` oder `ruby-text` aufgelöst wird, überlappt würden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ruby, das Basistext überragt

Dieses Beispiel zeigt beide Werte der `ruby-overhang`-Eigenschaft.

#### HTML

Wir schließen zwei Absätze mit identischem `<ruby>`-Inhalt und -Strukturen ein, abgesehen von ihren Klassennamen.

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
Der erste Absatz hat `ruby-overhang: auto` und der zweite hat `ruby-overhang: none`.

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

Wenn `ruby-overhang` auf `none` gesetzt ist, darf der Annotationstext die angrenzenden Boxen des Basis-Ruby-Textes nicht überlappen. Wenn Sie genau hinsehen, können Sie bemerken, dass im ersten Absatz die rote Box, die den Ruby-Text umgibt, leicht Teile des nicht-assoziierten `<ruby>`-Inhalts überlappt, während es im `none`-Beispiel in unterstützenden Browsern keine Überlappung zwischen Ruby-Inhalt und nicht-assoziiertem Ruby-Text gibt.

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
