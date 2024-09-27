---
title: speak-as
slug: Web/CSS/@counter-style/speak-as
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Der **`speak-as`** Deskriptor gibt an, wie ein Zählersymbol, das mit einem bestimmten {{cssxref('@counter-style')}} erstellt wurde, in gesprochener Form dargestellt wird. Ein Autor kann beispielsweise angeben, dass ein Zählersymbol entweder als sein numerischer Wert gesprochen oder einfach mit einem Audiokennzeichen dargestellt wird.

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
    - Wenn `system` `extends` ist, wird der Wert von `speak-as` derselbe sein, als wenn `speak-as: auto` auf dem erweiterten Stil angegeben ist.
    - In allen anderen Fällen hat das Angeben von `auto` den gleichen Effekt wie das Angeben von `speak-as: numbers`.

- `bullets`
  - : Ein vom [Benutzeragenten](/de/docs/Glossary/user_agent) definiertes Phrasensymbol oder Audiokennzeichen zur Darstellung eines Elements einer ungeordneten Liste wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Dokumentensprache vorgelesen.
- `words`
  - : Der Benutzeragent generiert einen Zählerwert wie normal und liest ihn als Wort in der Dokumentensprache vor.
- `spell-out`
  - : Der Benutzeragent generiert eine Zählerdarstellung wie normal und liest sie buchstabenweise vor. Wenn der Benutzeragent nicht weiß, wie ein bestimmtes Zählersymbol vorgelesen werden soll, könnte der Benutzeragent es so vorlesen, als ob der Wert von `speak-as` `numbers` wäre.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als {{cssxref("&lt;custom-ident&gt;")}}. Wenn enthalten, wird der Zähler in der Form ausgesprochen, die in diesem Zählerstil angegeben ist, ähnlich wie beim Angeben des {{cssxref("@counter-style/fallback", "fallback")}} Deskriptors. Wenn der angegebene Stil nicht existiert, wird `speak-as` standardmäßig auf `auto` gesetzt.

## Barrierefreiheit

Die Unterstützung der `speak-as` Eigenschaft durch unterstützende Technologien ist sehr begrenzt. Verlassen Sie sich nicht darauf, um Informationen zu vermitteln, die für das Verständnis des Zwecks der Seite entscheidend sind.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der gesprochenen Form für einen Zähler

In diesem Beispiel ist das Zähler-System mit unverständlichen Symbolen als visuelle Markierungen festgelegt. Der `speak-as` Deskriptor wird jedoch verwendet, um die Listenmarkierungen in der Barrierefreiheitshierarchie als Zahlen zu setzen. Wenn unterstützt, werden Zahlen anstelle von visuellen Markierungen von Screenreadern vorgelesen.

Um das Ergebnis des `speak-as` Deskriptors zu erleben, verwenden Sie unterstützende Technologien wie VoiceOver oder einen anderen Screenreader oder betrachten Sie das [Zugänglichkeitspanel](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwicklerwerkzeugen eines Browsers, der `speak-as` unterstützt.

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
- {{cssxref("symbols", "symbols()")}}: Die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
