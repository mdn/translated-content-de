---
title: suffix
slug: Web/CSS/@counter-style/suffix
l10n:
  sourceCommit: f75fd658f627b5730a14ada901120cfa4ee01bda
---

{{CSSRef}}

Der **`suffix`** Deskriptor der {{cssxref("@counter-style")}} Regel spezifiziert Inhalt, der am Ende der Markerdarstellung hinzugefügt wird.

## Syntax

```css
/* <symbol> value: string, image, or identifier  */
suffix: "";
suffix: ") ";
suffix: url(bullet.png);
```

### Werte

Der **`suffix`** Deskriptor nimmt als Wert ein einzelnes `<symbol>` an:

- `<symbol>`
  - : Gibt ein `<symbol>` an, das an die Markerdarstellung angehängt wird. Es kann sich um einen {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}} oder {{cssxref("&lt;custom-ident&gt;")}} handeln.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines Suffixes für einen Zähler

#### HTML

```html
<ul class="choices">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>None of the above</li>
</ul>
```

#### CSS

```css
@counter-style options {
  system: fixed;
  symbols: A B C D;
  suffix: ") ";
}

.choices {
  list-style: options;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_a_suffix_for_a_counter')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: Die funktionale Notation zur Erstellung anonymer Zählerstile
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Lists und Counters](/de/docs/Web/CSS/CSS_lists) Modul
