---
title: symbols()
slug: Web/CSS/symbols
l10n:
  sourceCommit: c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{CSSRef}}

Die **`symbols()`** CSS-Funktion ermöglicht es, Zählerstile direkt als Wert von Eigenschaften wie z.B. {{cssxref("list-style")}} inline zu definieren und bietet damit eine weniger mächtige, aber einfachere Alternative zur {{cssxref("@counter-style")}}-Methode der Definition eines Zählerstils.

Im Gegensatz zu {{cssxref("@counter-style")}}, das einen wiederverwendbaren Zählerstil definiert, ist `symbols()` _anonym_ (d.h. es kann nur einmal verwendet werden). Diese Funktion akzeptiert Zeichenketten und Bilder als Werte. Im Vergleich dazu akzeptiert der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor von {{cssxref("@counter-style")}} auch Bezeichner.

## Syntax

```css
symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );
```

`<symbols-type>` kann einer der folgenden sein:

- `cyclic`: Das System durchläuft die angegebenen Werte in der Reihenfolge ihrer Definition und kehrt zum Anfang zurück, wenn es das Ende erreicht.
- `numeric`: Das System interpretiert die angegebenen Werte als aufeinanderfolgende Einheiten eines Stellenwert-Zahlensystems.
- `alphabetic`: Das System interpretiert die angegebenen Werte als Ziffern eines alphabetischen Zahlensystems, ähnlich einem Stellenwert-Zahlensystem, jedoch ohne `0`.
- `symbolic`: Das System durchläuft die Werte und druckt sie bei jedem Durchlauf zusätzlich aus (einmal für den ersten Durchlauf, zweimal für den zweiten, usw.).
- `fixed`: Das System durchläuft die angegebenen Werte einmal und fällt dann auf arabische Zahlen zurück.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### HTML

```html
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

### CSS

```css
ol {
  list-style: symbols(cyclic "*" "†" "‡");
}
```

### Ergebnis

{{EmbedLiveSample('Examples','100%',200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- List-Stil-Eigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-type")}}
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
