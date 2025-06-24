---
title: speak-as
slug: Web/CSS/@counter-style/speak-as
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`speak-as`** Deskriptor legt fest, wie ein Zählersymbol, das mit einem bestimmten {{cssxref('@counter-style')}} erstellt wurde, in gesprochener Form dargestellt wird. Zum Beispiel kann ein Autor angeben, dass ein Zählersymbol entweder als sein numerischer Wert gesprochen oder nur mit einem akustischen Signal dargestellt werden soll.

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

  - : Wenn der Wert von `speak-as` auf `auto` festgelegt ist, wird der effektive Wert von `speak-as` basierend auf dem Wert des {{cssxref("@counter-style/system", "system")}} Deskriptors bestimmt:
    - Ist der Wert von `system` `alphabetic`, wird der effektive Wert von `speak-as` `spell-out` sein.
    - Ist `system` `cyclic`, wird der effektive Wert von `speak-as` `bullets` sein.
    - Ist `system` `extends`, ist der Wert von `speak-as` derselbe, als ob `speak-as: auto` im erweiterten Stil angegeben wäre.
    - In allen anderen Fällen hat die Angabe von `auto` denselben Effekt wie die Angabe von `speak-as: numbers`.

- `bullets`
  - : Eine vom {{Glossary("user_agent", "User-Agent")}} definierte Phrase oder ein akustisches Signal zur Darstellung eines Elements einer ungeordneten Liste wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Dokumentsprache vorgelesen.
- `words`
  - : Der User-Agent generiert einen Zählerwert wie gewohnt und liest ihn als Wort in der Dokumentsprache vor.
- `spell-out`
  - : Der User-Agent erstellt eine Zählerdarstellung wie gewohnt und würde sie Buchstabe für Buchstabe vorlesen. Wenn der User-Agent nicht weiß, wie ein bestimmtes Zählersymbol vorgelesen werden soll, könnte er es so vorlesen, als ob der Wert von `speak-as` `numbers` wäre.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als ein {{cssxref("&lt;custom-ident&gt;")}}. Wenn enthalten, wird der Zähler in der in diesem Zählerstil angegebenen Form vorgelesen, ähnlich wie die Angabe des {{cssxref("@counter-style/fallback", "fallback")}} Deskriptors. Wenn der angegebene Stil nicht existiert, fällt `speak-as` standardmäßig auf `auto` zurück.

## Barrierefreiheit

Die Unterstützung für die `speak-as` Eigenschaft durch unterstützende Technologien ist sehr begrenzt. Verlassen Sie sich nicht darauf, um Informationen zu vermitteln, die für das Verständnis des Zwecks der Seite entscheidend sind.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der gesprochenen Form für einen Zähler

In diesem Beispiel wird das Zählsystem mit unverständlichen Symbolen für die visuellen Markierungen fixiert. Der `speak-as` Deskriptor wird jedoch verwendet, um die Markierungen der Listeneinträge als Zahlen im Barrierefreiheitsbaum festzulegen. Wenn unterstützt, werden Zahlen anstelle von visuellen Markierungen von Screenreadern vorgelesen.

Um das Ergebnis des `speak-as` Deskriptors zu erleben, verwenden Sie unterstützende Technologien wie VoiceOver oder einen anderen Screenreader oder sehen Sie sich das [Barrierefreiheitspanel](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwicklerwerkzeugen eines Browsers an, der `speak-as` unterstützt.

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
- {{cssxref("symbols", "symbols()")}}: Die Funktionsnotation zum Erstellen anonymer Zählerstile.
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
