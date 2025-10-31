---
title: negative
slug: Web/CSS/@counter-style/negative
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **`negative`** Deskriptor der {{cssxref("@counter-style")}} At-Regel ermöglicht es Ihnen zu definieren, wie negative Zählerwerte dargestellt werden, wenn benutzerdefinierte Zählerstile definiert werden. Der Wert des `negative` Deskriptors legt die Symbole fest, die vor und nach der Zähldarstellung hinzugefügt werden sollen, wenn der Zählerwert negativ ist.

## Syntax

```css
/* One <symbol> value */
negative: "--"; /* Adds '--' before if counter value is negative */

/* Two <symbol> values */
negative: "(" ")"; /* Adds '(- before and ')' after if counter value is negative */
```

### Werte

Der `negative` Deskriptor akzeptiert bis zu zwei [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#values) Werte.

- `<symbol>`
  - : Wenn nur ein Wert angegeben wird, wird er vor der Zähldarstellung hinzugefügt, wenn der Zähler negativ ist. Wenn zwei Werte angegeben werden, wird der erste vor und der zweite nach der Zähldarstellung hinzugefügt, wenn der Zähler negativ ist.

## Beschreibung

Wenn der Zählerwert negativ ist, wird das angegebene `<symbol>` für den `negative` Deskriptor vor der Zähldarstellung hinzugefügt und ersetzt das Standard- `-` für negative Werte. Das zweite `<symbol>`, falls angegeben, wird nach der Zähldarstellung hinzugefügt.

Der `negative` Deskriptor ist in zwei Fällen relevant: wenn Zählerstile den `system` Wert von `symbolic`, `alphabetic`, `numeric` und `additive` haben und die Zählung negativ ist; und wenn der `system` Wert `extends` ist und der erweiterte Zählerstil selbst ein negatives Zeichen verwendet. Für Systeme, die negative Zählerwerte nicht unterstützen, hat die Angabe des `negative` Deskriptors keine Wirkung und wird ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rendering negativer Zähler

Dieses Beispiel [erweitert](/de/docs/Web/CSS/@counter-style/system#extends) den [`decimal`](/de/docs/Web/CSS/Reference/Properties/list-style-type#decimal) Liststil. Der `negative` Deskriptor wird verwendet, um `(-` und `)` vor und nach negativen Zählerwerten hinzuzufügen.

#### HTML

```html
<ol start="-3">
  <li>Negative three</li>
  <li>Negative two</li>
  <li>Negative one</li>
  <li>Zero</li>
  <li>One</li>
</ol>
```

#### CSS

```css
@counter-style neg {
  system: extends decimal;
  negative: "(-" ")";
  suffix: ": ";
}

ol {
  list-style: neg;
}
```

#### Ergebnis

{{ EmbedLiveSample('Rendering negative counters') }}

Das Präfix und Suffix, das als Wert des `negative` Deskriptors aufgeführt ist, wird nur dann dem Marker hinzugefügt, wenn der Zählerwert kleiner als null ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listeneigenschaften: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion zur Erstellung anonymer Zählerstile
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
