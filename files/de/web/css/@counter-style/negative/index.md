---
title: negative
slug: Web/CSS/@counter-style/negative
l10n:
  sourceCommit: fdb4929ef7e0ca815d61fe4e5e2c39eae1f47acf
---

{{CSSRef}}

Der **`negative`** Deskriptor der @-Regel {{cssxref("@counter-style")}} ermöglicht es Ihnen, zu definieren, wie negative Zählerwerte dargestellt werden, wenn benutzerdefinierte Zählerstile definiert werden. Der Wert des `negative` Deskriptors definiert die Symbole, die vor und nach der Zählerdarstellung hinzugefügt werden, wenn der Zählerwert negativ ist.

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
  - : Wenn nur ein Wert angegeben wird, wird er vor der Zählerdarstellung hinzugefügt, wenn der Zähler negativ ist. Wenn zwei Werte angegeben werden, wird der erste vor und der zweite nach der Zählerdarstellung hinzugefügt, wenn der Zähler negativ ist.

## Beschreibung

Falls der Zählerwert negativ ist, wird das angegebene `<symbol>` für den `negative` Deskriptor vor der Zählerdarstellung hinzugefügt und ersetzt das Standard-`-` für negative Werte. Das zweite `<symbol>`, falls angegeben, wird nach der Zählerdarstellung hinzugefügt.

Der `negative` Deskriptor ist in zwei Fällen relevant: Wenn Zählerstile den `system`-Wert von `symbolic`, `alphabetic`, `numeric` und `additive` haben und der Zähler negativ ist; und wenn der `system`-Wert `extends` ist und der erweiterte Zählerstil das negative Zeichen selbst verwendet. Für Systeme, die keine negativen Zählerwerte unterstützen, hat die Angabe des `negative` Deskriptors keine Wirkung und wird ignoriert.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Darstellung negativer Zähler

Dieses Beispiel [erweitert](/de/docs/Web/CSS/@counter-style/system#extends) den [`decimal`](/de/docs/Web/CSS/list-style-type#decimal) Listenstil. Der `negative` Deskriptor wird verwendet, um `(-` und `)` vor und nach negativen Zählerwerten hinzuzufügen.

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

Das Präfix und Suffix, die als Wert des `negative` Deskriptors gelistet sind, werden dem Marker nur hinzugefügt, wenn der Zählerwert kleiner als null ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Deskriptoren von {{cssxref("@counter-style")}}: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listeneigenschaften: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion zum Erstellen anonymer Zählerstile
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
