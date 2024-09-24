---
title: negative
slug: Web/CSS/@counter-style/negative
l10n:
  sourceCommit: fdb4929ef7e0ca815d61fe4e5e2c39eae1f47acf
---

{{CSSRef}}

Der **`negative`**-Deskriptor der @counter-style-Regel von {{cssxref("@counter-style")}} ermöglicht es Ihnen, festzulegen, wie negative Zählerwerte dargestellt werden, wenn benutzerdefinierte Zählerstile definiert werden. Der Wert des `negative`-Deskriptors definiert die Symbole, die vor und nach der Zählerdarstellung hinzugefügt werden, wenn der Zählerwert negativ ist.

## Syntax

```css
/* Ein <symbol>-Wert */
negative: "--"; /* Fügt '--' voran, wenn der Zählerwert negativ ist */

/* Zwei <symbol>-Werte */
negative: "(" ")"; /* Fügt '(-' voran und ')' nach, wenn der Zählerwert negativ ist */
```

### Werte

Der `negative`-Deskriptor akzeptiert bis zu zwei [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#values)-Werte.

- `<symbol>`
  - : Wenn nur ein Wert angegeben ist, wird er vor der Zählerdarstellung hinzugefügt, wenn der Zähler negativ ist. Bei zwei angegebenen Werten wird der erste Wert vor und der zweite Wert nach der Zählerdarstellung hinzugefügt, wenn der Zähler negativ ist.

## Beschreibung

Wenn der Zählerwert negativ ist, wird das angegebene `<symbol>` für den `negative`-Deskriptor vor der Zählerdarstellung hinzugefügt und ersetzt das Standard-`-` für negative Werte. Das zweite `<symbol>`, falls angegeben, wird nach der Zählerdarstellung hinzugefügt.

Der `negative`-Deskriptor ist in zwei Fällen relevant: Wenn Zählerstile den `system`-Wert von `symbolic`, `alphabetic`, `numeric` und `additive` haben und der Zähler negativ ist; und wenn der `system`-Wert `extends` ist und der erweiterte Zählerstil selbst ein negatives Vorzeichen verwendet. Bei Systemen, die keine negativen Zählerwerte unterstützen, hat das Angeben des `negative`-Deskriptors keine Auswirkungen und wird ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Darstellung negativer Zähler

Dieses Beispiel [erweitert](/de/docs/Web/CSS/@counter-style/system#extends) den [`decimal`](/de/docs/Web/CSS/list-style-type#decimal) Listenstil. Der `negative`-Deskriptor wird verwendet, um `(-` und `)` vor und nach negativen Zählerwerten hinzuzufügen.

#### HTML

```html
<ol start="-3">
  <li>Negative drei</li>
  <li>Negative zwei</li>
  <li>Negative eins</li>
  <li>Null</li>
  <li>Eins</li>
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

Das als Wert des `negative`-Deskriptors angegebene Präfix und Suffix werden dem Marker nur hinzugefügt, wenn der Zählerwert kleiner als null ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listenstil-Eigenschaften: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}-Funktion zur Erstellung anonymer Zählerstile
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)-Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul
