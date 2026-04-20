---
title: "`speak-as` CSS At-Regel-Deskriptor"
short-title: speak-as
slug: Web/CSS/Reference/At-rules/@counter-style/speak-as
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`speak-as`**-Deskriptor spezifiziert, wie ein Zählersymbol, das mit einem gegebenen {{cssxref('@counter-style')}} erstellt wurde, in gesprochener Form dargestellt wird. Zum Beispiel kann ein Autor festlegen, dass ein Zählersymbol entweder als sein numerischer Wert gesprochen oder nur mit einem akustischen Hinweis dargestellt wird.

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
  - : Wenn der Wert von `speak-as` als `auto` angegeben ist, wird der effektive Wert von `speak-as` basierend auf dem Wert des {{cssxref("@counter-style/system", "system")}}-Deskriptors bestimmt:
    - Wenn der Wert von `system` `alphabetic` ist, wird der effektive Wert von `speak-as` `spell-out` sein.
    - Wenn `system` `cyclic` ist, wird der effektive Wert von `speak-as` `bullets` sein.
    - Wenn `system` `extends` ist, wird der Wert von `speak-as` derselbe sein, als ob `speak-as: auto` im erweiterten Stil angegeben ist.
    - In allen anderen Fällen hat die Angabe von `auto` die gleiche Wirkung wie die Angabe von `speak-as: numbers`.

- `bullets`
  - : Eine vom {{Glossary("user_agent", "User-Agent")}} definierte Phrase oder ein akustischer Hinweis zur Darstellung eines ungeordneten Listenelements wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Dokumentensprache vorgelesen.
- `words`
  - : Der User-Agent generiert einen Zählerwert wie gewohnt und liest ihn als Wort in der Dokumentensprache vor.
- `spell-out`
  - : Der User-Agent erstellt wie gewohnt eine Zählerdarstellung und liest sie buchstabiert vor. Wenn der User-Agent nicht weiß, wie ein bestimmtes Zählersymbol vorgelesen werden soll, könnte der User-Agent es vorlesen, als ob der Wert von `speak-as` `numbers` wäre.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als ein {{cssxref("&lt;custom-ident&gt;")}}. Wenn enthalten, wird der Zähler in der Form gesprochen, wie sie in diesem Zählerstil angegeben ist, ähnlich wie die Angabe des {{cssxref("@counter-style/fallback", "fallback")}}-Deskriptors. Wenn der angegebene Stil nicht existiert, nimmt `speak-as` den Standardwert `auto` an.

## Barrierefreiheit

Die Unterstützung für die `speak-as`-Eigenschaft durch unterstützende Technologien ist sehr begrenzt. Verlassen Sie sich nicht darauf, um Informationen darzustellen, die zum Verständnis des Zwecks der Seite kritisch sind.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der gesprochenen Form für einen Zähler

In diesem Beispiel ist das Zählersystem mit unverständlichen Symbolen für die visuellen Markierungen festgelegt. Der `speak-as`-Deskriptor wird jedoch verwendet, um die Listenelemente im Barrierefreiheit-Baum als Zahlen festzulegen. Wenn dies unterstützt wird, werden Bildschirmleseprogramme Zahlen anstatt visueller Markierungen vorlesen.

Um das Ergebnis des `speak-as`-Deskriptors zu erleben, verwenden Sie unterstützende Technologien wie VoiceOver oder einen anderen Bildschirmleser oder sehen Sie sich das [Barrierefreiheit-Panel](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwicklerwerkzeugen eines Browsers an, der `speak-as` unterstützt.

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
- {{cssxref("symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
