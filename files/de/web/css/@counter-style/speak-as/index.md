---
title: speak-as
slug: Web/CSS/@counter-style/speak-as
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Der **`speak-as`** Deskriptor legt fest, wie ein mit einem bestimmten {{cssxref('@counter-style')}} erstelltes Zählsymbol in gesprochener Form dargestellt wird. Beispielsweise kann ein Autor festlegen, dass ein Zählsymbol entweder als sein numerischer Wert gesprochen oder einfach durch ein akustisches Signal dargestellt wird.

## Syntax

```css
/* Keyword values */
speak-as: auto;
speak-as: bullets;
speak-as: numbers;
speak-as: words;
speak-as: spell-out;

/* @counter-style name value */
speak-as: <counter-style-name>;
```

### Werte

- `auto`

  - : Wenn der Wert von `speak-as` als `auto` angegeben wird, wird der effektive Wert von `speak-as` basierend auf dem Wert des Deskriptors {{cssxref("@counter-style/system", "system")}} bestimmt:

    - Wenn der Wert von `system` `alphabetic` ist, wird der effektive Wert von `speak-as` `spell-out` sein.
    - Wenn `system` `cyclic` ist, wird der effektive Wert von `speak-as` `bullets` sein.
    - Wenn `system` `extends` ist, ist der Wert von `speak-as` derselbe, als ob `speak-as: auto` im erweiterten Stil angegeben ist.
    - In allen anderen Fällen hat die Angabe von `auto` denselben Effekt wie die Angabe von `speak-as: numbers`.

- `bullets`
  - : Eine vom {{Glossary("user_agent", "User-Agent")}} definierte Phrase oder ein akustisches Signal zur Darstellung eines Listenelements einer ungeordneten Liste wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Dokumentensprache vorgelesen.
- `words`
  - : Der User-Agent generiert einen Zählerwert wie gewohnt und liest ihn als Wort in der Dokumentensprache vor.
- `spell-out`
  - : Der User-Agent generiert eine Zählerdarstellung wie gewohnt und würde sie buchstabieren. Wenn der User-Agent nicht weiß, wie man ein bestimmtes Zählsymbol vorlesen soll, könnte er es wie bei `speak-as: numbers` vorlesen.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als {{cssxref("&lt;custom-ident&gt;")}}. Wenn enthalten, wird der Zähler in der in diesem Zählerstil angegebenen Form ausgesprochen, ähnlich wie bei der Angabe des Deskriptors {{cssxref("@counter-style/fallback", "fallback")}}. Wenn der angegebene Stil nicht existiert, fällt `speak-as` auf `auto` zurück.

## Barrierefreiheit

Die Unterstützung durch unterstützende Technologien für das `speak-as`-Eigenschaft ist sehr begrenzt. Verlassen Sie sich nicht darauf, um Informationen zu übermitteln, die entscheidend für das Verständnis des Zwecks der Seite sind.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die gesprochene Form für einen Zähler festlegen

In diesem Beispiel ist das Zählsystem mit unverständlichen Symbolen für die visuellen Markierungen festgelegt. Der `speak-as` Deskriptor wird jedoch verwendet, um die Listenelement-Markierungen im Accessibility-Tree als Zahlen festzulegen. Wenn unterstützt, werden von Bildschirmlesern Zahlen anstelle von visuellen Markierungen vorgelesen.

Um das Ergebnis des `speak-as` Deskriptors zu erleben, verwenden Sie unterstützende Technologien wie VoiceOver oder einen anderen Bildschirmleser oder betrachten Sie das [Accessibility-Panel](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwicklertools eines Browsers, der `speak-as` unterstützt.

#### HTML

```html
<ul class="list">
  <li>I had one apple</li>
  <li>I ate two bananas</li>
  <li>I devoured three oranges</li>
  <li>I am not hungry for dinner</li>
  <li>But I'll have five scoops of ice cream for dessert</li>
</ul>
```

#### CSS

```css
@counter-style speak-as-example {
  system: fixed;
  symbols:     ;
  suffix: " ";
  speak-as: numbers;
}

.list {
  list-style: speak-as-example;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_the_spoken_form_for_a_counter') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS lists and counters](/de/docs/Web/CSS/CSS_lists) Modul
