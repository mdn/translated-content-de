---
title: speak-as
slug: Web/CSS/Reference/At-rules/@counter-style/speak-as
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`speak-as`** Deskriptor gibt an, wie ein Zählersymbol, das mit einem gegebenen {{cssxref('@counter-style')}} erstellt wurde, in gesprochener Form dargestellt wird. Beispielsweise kann ein Autor festlegen, dass ein Zählersymbol entweder als sein numerischer Wert ausgesprochen oder einfach nur mit einem akustischen Hinweis dargestellt wird.

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
  - : Wenn der Wert von `speak-as` als `auto` angegeben wird, wird der effektive Wert von `speak-as` basierend auf dem Wert des {{cssxref("@counter-style/system", "system")}} Deskriptors bestimmt:
    - Wenn der Wert von `system` `alphabetic` ist, wird der effektive Wert von `speak-as` `spell-out` sein.
    - Wenn `system` `cyclic` ist, wird der effektive Wert von `speak-as` `bullets` sein.
    - Wenn `system` `extends` ist, entspricht der Wert von `speak-as` dem, der angegeben würde, wenn `speak-as: auto` im erweiterten Stil angegeben ist.
    - In allen anderen Fällen hat die Angabe von `auto` die gleiche Wirkung wie die Angabe von `speak-as: numbers`.

- `bullets`
  - : Eine vom {{Glossary("user_agent", "User-Agent")}} definierte Phrase oder ein akustisches Signal zur Darstellung eines Elements einer ungeordneten Liste wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Dokumentsprache vorgelesen.
- `words`
  - : Der User-Agent generiert einen Zählerwert wie üblich und liest ihn als Wort in der Dokumentsprache vor.
- `spell-out`
  - : Der User-Agent generiert eine Zählerdarstellung wie üblich und liest diese buchstabenweise vor. Wenn der User-Agent nicht weiß, wie ein bestimmtes Zählersymbol vorgelesen werden soll, könnte der User-Agent es so vorlesen, als wäre der Wert von `speak-as` `numbers`.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als {{cssxref("&lt;custom-ident&gt;")}}. Wenn enthalten, wird der Zähler in der in diesem Zählerstil angegebenen Form ausgesprochen, ähnlich wie beim Angeben des Deskriptors {{cssxref("@counter-style/fallback", "fallback")}}. Wenn der angegebene Stil nicht existiert, wird `speak-as` standardmäßig auf `auto` gesetzt.

## Barrierefreiheit

Die Unterstützung durch Hilfstechnologie für die `speak-as` Eigenschaft ist sehr begrenzt. Verlassen Sie sich nicht darauf, um Informationen zu vermitteln, die für das Verständnis des Seitenzwecks entscheidend sind.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die gesprochene Form für einen Zähler festlegen

In diesem Beispiel ist das Zählsystem mit unverständlichen Symbolen für die visuellen Markierungen festgelegt. Der `speak-as` Deskriptor wird jedoch verwendet, um die Listenelement-Markierungen im Accessibility-Baum als Zahlen zu setzen. Wenn unterstützt, werden Zahlen anstelle visueller Markierungen von Screenreadern vorgelesen.

Um das Ergebnis des `speak-as` Deskriptors zu erleben, verwenden Sie Hilfstechnologie wie VoiceOver oder einen anderen Screenreader oder betrachten Sie das [Accessibility-Panel](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwickler-Tools eines Browsers, der `speak-as` unterstützt.

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
