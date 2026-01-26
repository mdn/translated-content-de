---
title: speak-as
slug: Web/CSS/Reference/At-rules/@counter-style/speak-as
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`speak-as`** Deskriptor gibt an, wie ein mit einem gegebenen {{cssxref('@counter-style')}} konstruierter Zählersymbol in gesprochener Form dargestellt wird. Zum Beispiel kann ein Autor angeben, dass ein Zählersymbol entweder als sein numerischer Wert ausgesprochen oder einfach mit einem Audiohinweis dargestellt werden soll.

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
    - Ist `system` `cyclic`, wird der effektive Wert von `speak-as` `bullets` sein.
    - Wenn `system` `extends` ist, entspricht der Wert von `speak-as` dem Wert, der angegeben wäre, wenn `speak-as: auto` im erweiterten Stil angewendet wird.
    - In allen anderen Fällen hat die Angabe von `auto` denselben Effekt wie die Angabe von `speak-as: numbers`.

- `bullets`
  - : Ein vom {{Glossary("user_agent", "Benutzeragenten")}} definierter Satz oder Audiohinweis zur Darstellung eines Listenelements ohne spezielle Reihenfolge wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Sprache des Dokuments vorgelesen.
- `words`
  - : Der Benutzeragent erzeugt einen Zählerwert wie gewöhnlich und liest ihn als Wort in der Sprache des Dokuments vor.
- `spell-out`
  - : Der Benutzeragent erzeugt eine Zählerdarstellung wie gewöhnlich und buchstabiert sie aus. Wenn der Benutzeragent nicht weiß, wie ein bestimmtes Zählersymbol vorgelesen wird, könnte er es wie `numbers` vorlesen.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als ein {{cssxref("&lt;custom-ident&gt;")}}. Wenn er enthalten ist, wird der Zähler in der Form, die in diesem Zählerstil angegeben ist, ausgesprochen, ähnlich wie beim Deskriptor {{cssxref("@counter-style/fallback", "fallback")}}. Wenn der angegebene Stil nicht existiert, wird `speak-as` auf `auto` zurückgesetzt.

## Barrierefreiheit

Die Unterstützung von assistiven Technologien für die Eigenschaft `speak-as` ist sehr eingeschränkt. Verlassen Sie sich nicht darauf, um Informationen zu übermitteln, die entscheidend sind, um den Zweck der Seite zu verstehen.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der gesprochenen Form für einen Zähler

In diesem Beispiel wird das Zählsystem mit unverständlichen Symbolen für die visuellen Markierungen festgelegt. Der `speak-as` Deskriptor wird jedoch verwendet, um die Listenelemente in der Zugänglichkeitsbaumstruktur als Zahlen festzulegen. Wenn unterstützt, werden statt der visuellen Markierungen die Zahlen von Bildschirmleseprogrammen vorgelesen.

Um das Ergebnis des `speak-as` Deskriptors zu erleben, nutzen Sie assistive Technologien wie VoiceOver oder ein anderes Bildschirmleseprogramm oder betrachten Sie das [Barrierefreiheits-Panel](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwicklerwerkzeugen eines Browsers, der `speak-as` unterstützt.

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
- [CSS counter styles](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS lists and counters](/de/docs/Web/CSS/Guides/Lists) Modul
