---
title: speak-as
slug: Web/CSS/@counter-style/speak-as
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`speak-as`** Deskriptor gibt an, wie ein Zählersymbol, das mit einem bestimmten {{cssxref('@counter-style')}} erstellt wurde, in gesprochener Form dargestellt wird. Zum Beispiel kann ein Autor angeben, dass ein Zählersymbol entweder als sein numerischer Wert gesprochen oder nur mit einem akustischen Hinweis dargestellt wird.

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
  - : Wenn der Wert von `speak-as` als `auto` angegeben ist, wird der effektive Wert von `speak-as` basierend auf dem Wert des {{cssxref("@counter-style/system", "system")}} Deskriptors bestimmt:
    - Wenn der Wert von `system` `alphabetic` ist, wird der effektive Wert von `speak-as` `spell-out` sein.
    - Wenn `system` `cyclic` ist, wird der effektive Wert von `speak-as` `bullets` sein.
    - Wenn `system` `extends` ist, wird der Wert von `speak-as` derselbe sein, als ob `speak-as: auto` auf dem erweiterten Stil angegeben wird.
    - In allen anderen Fällen hat das Angeben von `auto` denselben Effekt, als ob `speak-as: numbers` angegeben wird.

- `bullets`
  - : Eine vom {{Glossary("user_agent", "User-Agent")}} definierte Phrase oder ein akustisches Signal zur Darstellung eines Listenelements ohne Ordnung wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Sprache des Dokuments vorgelesen.
- `words`
  - : Der User-Agent generiert einen Zählerwert wie gewohnt und liest ihn als Wort in der Sprache des Dokuments vor.
- `spell-out`
  - : Der User-Agent generiert eine Zählerdarstellung wie gewohnt und liest sie Buchstabe für Buchstabe vor. Wenn der User-Agent nicht weiß, wie ein bestimmtes Zählersymbol vorgelesen werden soll, kann er es so vorlesen, als wäre der Wert von `speak-as` `numbers`.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als {{cssxref("&lt;custom-ident&gt;")}}. Wenn eingeschlossen, wird der Zähler in der Form vorgelesen, die in diesem Zählerstil angegeben ist, ähnlich wie beim Angeben des {{cssxref("@counter-style/fallback", "fallback")}} Deskriptors. Wenn der angegebene Stil nicht existiert, standardmäßig `speak-as` zu `auto`.

## Zugänglichkeit

Die Unterstützung assistiver Technologien für die Eigenschaft `speak-as` ist sehr begrenzt. Verlassen Sie sich nicht darauf, um informationen bereitzustellen, die entscheidend für das Verständnis des Zwecks der Seite sind.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der gesprochenen Form für einen Zähler

In diesem Beispiel ist das Zählsystem mit unverständlichen Symbolen für die visuellen Markierungen festgelegt. Der `speak-as` Deskriptor wird jedoch verwendet, um die Listenpunkt-Markierungen in der Zugänglichkeitsbaum als Zahlen festzulegen. Wenn unterstützt, werden Zahlen anstelle der visuellen Markierungen von Screenreadern vorgelesen.

Um das Ergebnis des `speak-as` Deskriptors zu erleben, verwenden Sie assistive Technologien wie VoiceOver oder einen anderen Screenreader oder betrachten Sie das [Zugänglichkeitspanel](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwicklerwerkzeugen eines Browsers, der `speak-as` unterstützt.

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
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zum Erstellen anonymer Zählerstile.
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS lists and counters](/de/docs/Web/CSS/CSS_lists) Modul
