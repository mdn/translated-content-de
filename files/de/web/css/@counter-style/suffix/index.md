---
title: suffix
slug: Web/CSS/@counter-style/suffix
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`suffix`** Deskriptor der {{cssxref("@counter-style")}} Regel spezifiziert Inhalt, der am Ende der Markierungsdarstellung hinzugefügt wird.

## Syntax

```css
/* <symbol> value: string, image, or identifier  */
suffix: "";
suffix: ") ";
suffix: url(bullet.png);
```

### Werte

Der **`suffix`** Deskriptor nimmt als seinen Wert ein einzelnes `<symbol>`:

- `<symbol>`
  - : Spezifiziert ein `<symbol>`, das an die Markierungsdarstellung angehängt wird. Es kann ein {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}} oder {{cssxref("&lt;custom-ident&gt;")}} sein.

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

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zum Erstellen anonymer Zählerstile
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
