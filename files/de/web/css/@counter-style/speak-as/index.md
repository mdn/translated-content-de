---
title: speak-as
slug: Web/CSS/@counter-style/speak-as
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Der **`speak-as`** Descriptor legt fest, wie ein Zählersymbol, das mit einem gegebenen {{cssxref('@counter-style')}} erstellt wurde, in gesprochener Form dargestellt wird. Zum Beispiel kann ein Autor festlegen, dass ein Zählersymbol entweder als numerischer Wert gesprochen wird oder einfach mit einem Audiohinweis dargestellt wird.

## Syntax

```css
/* Schlüsselwort-Werte */
speak-as: auto;
speak-as: bullets;
speak-as: numbers;
speak-as: words;
speak-as: spell-out;

/* @counter-style Namewert */
speak-as: <counter-style-name>;
```

### Werte

- `auto`

  - : Wenn der Wert von `speak-as` als `auto` angegeben ist, wird der effektive Wert von `speak-as` basierend auf dem Wert des {{cssxref("@counter-style/system", "system")}} Descriptors bestimmt:

    - Wenn der Wert von `system` `alphabetic` ist, wird der effektive Wert von `speak-as` `spell-out` sein.
    - Ist `system` `cyclic`, wird der effektive Wert von `speak-as` `bullets` sein.
    - Ist `system` `extends`, entspricht der Wert von `speak-as` dem, als wäre `speak-as: auto` beim erweiterten Stil angegeben.
    - In allen anderen Fällen hat die Angabe von `auto` die gleiche Wirkung wie die Angabe von `speak-as: numbers`.

- `bullets`
  - : Ein vom {{Glossary("User Agent")}} definiertes Wort oder ein Audiohinweis zur Darstellung eines Elements einer ungeordneten Liste wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Dokumentensprache vorgelesen.
- `words`
  - : Der User Agent generiert einen Zählerwert wie gewohnt und liest ihn als Wort in der Dokumentensprache vor.
- `spell-out`
  - : Der User Agent generiert eine Zählerdarstellung wie gewohnt und würde sie buchstabenweise vorlesen. Wenn der User Agent nicht weiß, wie er ein bestimmtes Zählersymbol vorlesen soll, könnte er es vorlesen, als wäre der Wert von `speak-as` `numbers`.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als {{cssxref("&lt;custom-ident&gt;")}}. Wenn enthalten, wird der Zähler in der Form ausgesprochen, die in diesem Zählerstil angegeben ist, ähnlich der Angabe des {{cssxref("@counter-style/fallback", "fallback")}} Descriptors. Wenn der angegebene Stil nicht existiert, fällt `speak-as` auf `auto` zurück.

## Barrierefreiheit

Der Support für die `speak-as` Eigenschaft durch unterstützende Technologien ist sehr begrenzt. Verlassen Sie sich nicht darauf, um Informationen zu vermitteln, die für das Verständnis des Zwecks der Seite entscheidend sind.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der gesprochenen Form für einen Zähler

In diesem Beispiel ist das Zählsystem mit unverständlichen Symbolen festgelegt, die für die visuellen Marker verwendet werden. Der `speak-as` Descriptor wird jedoch verwendet, um die Listenelementmarkierungen als Zahlen im Barrierefreiheitsbaum festzulegen. Wenn unterstützt, werden Zahlen statt visueller Marker von Bildschirmlesegeräten vorgelesen.

Um das Ergebnis des `speak-as` Descriptors zu erleben, verwenden Sie unterstützende Technologien wie VoiceOver oder einen anderen Bildschirmleser oder zeigen Sie das [Barrierefreiheitsfenster](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwickler-Tools eines Browsers an, der `speak-as` unterstützt.

#### HTML

```html
<ul class="list">
  <li>I had one apple</li>
  <li>I ate two bananas</li>
  <li>I devoured three oranges</li>
  <li>I am not hungry for dinner</li>
  <li>But I'll have five scopps of ice cream for desert</li>
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Weitere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
