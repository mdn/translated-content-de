---
title: speak-as
slug: Web/CSS/Reference/At-rules/@counter-style/speak-as
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`speak-as`** Deskriptor legt fest, wie ein mit einem bestimmten {{cssxref('@counter-style')}} konstruierter Zählersymbol in gesprochener Form dargestellt wird. Beispielsweise kann ein Autor festlegen, dass ein Zählersymbol entweder als seine numerische Wertigkeit ausgesprochen oder einfach mit einem Audiohinweis dargestellt wird.

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
    - Wenn `system` `extends` ist, wird der Wert von `speak-as` derselbe sein, als ob `speak-as: auto` im erweiterten Stil angegeben wäre.
    - Für alle anderen Fälle hat die Angabe von `auto` dieselbe Wirkung wie die Angabe von `speak-as: numbers`.

- `bullets`
  - : Eine Phrase oder ein Audiohinweis, der vom {{Glossary("user_agent", "Benutzeragenten")}} definiert wird, um ein Element einer ungeordneten Liste darzustellen, wird vorgelesen.
- `numbers`
  - : Der numerische Wert des Zählers wird in der Dokumentensprache vorgelesen.
- `words`
  - : Der Benutzeragent erstellt wie gewohnt einen Zählerwert und liest ihn als Wort in der Dokumentensprache vor.
- `spell-out`
  - : Der Benutzeragent erstellt wie gewohnt eine Zähldarstellung und liest sie Buchstabe für Buchstabe vor. Wenn der Benutzeragent nicht weiß, wie er ein bestimmtes Zählersymbol vorlesen soll, kann es sein, dass der Benutzeragent es so vorliest, als wäre der Wert von `speak-as` `numbers`.
- `<counter-style-name>`
  - : Der Name eines anderen Zählerstils, angegeben als {{cssxref("&lt;custom-ident&gt;")}}. Wenn eingeschlossen, wird der Zähler in der Form ausgesprochen, die in diesem Zählerstil angegeben ist, ähnlich wie die Angabe des Deskriptors {{cssxref("@counter-style/fallback", "fallback")}}. Wenn der angegebene Stil nicht existiert, fällt `speak-as` auf `auto` zurück.

## Barrierefreiheit

Die Unterstützung durch unterstützende Technologien für die Eigenschaft `speak-as` ist sehr begrenzt. Verlassen Sie sich nicht darauf, um Informationen zu vermitteln, die für das Verständnis des Zwecks der Seite entscheidend sind.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der gesprochenen Form für einen Zähler

In diesem Beispiel ist das Zählsystem fest mit unverständlichen Symbolen für die visuellen Marker. Der `speak-as` Deskriptor wird jedoch verwendet, um die Listenelement-Markierungen im Accessibility-Baum als Zahlen festzulegen. Wenn unterstützt, werden Zahlen statt visueller Markierungen von Bildschirmlesegeräten vorgelesen.

Um das Ergebnis des `speak-as` Deskriptors zu erleben, verwenden Sie unterstützende Technologien wie VoiceOver oder einen anderen Bildschirmleser oder sehen Sie sich das [Barrierefreiheitspanel](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) in den Entwicklertools eines Browsers an, der `speak-as` unterstützt.

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
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
