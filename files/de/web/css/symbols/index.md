---
title: symbols()
slug: Web/CSS/symbols
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`symbols()`** CSS-Funktion ermöglicht die Definition von Zählerstilen direkt als Wert von Eigenschaften wie {{cssxref("list-style")}}, und bietet eine weniger mächtige, aber einfachere Alternative zur Methode {{cssxref("@counter-style")}} zur Definition eines Zählerstils.

Im Gegensatz zu {{cssxref("@counter-style")}}, das einen wiederverwendbaren Zählerstil definiert, ist `symbols()` _anonym_ (d.h. es kann nur einmal verwendet werden). Diese Funktion akzeptiert Zeichenketten und Bilder als Werte. Im Vergleich dazu akzeptiert der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor von {{cssxref("@counter-style")}} auch Bezeichner.

## Syntax

```css
symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );
```

`<symbols-type>` kann eines der folgenden sein:

- `cyclic`: Das System durchläuft die angegebenen Werte in der Reihenfolge ihrer Definition und kehrt am Ende zum Anfang zurück.
- `numeric`: Das System interpretiert die gegebenen Werte als aufeinanderfolgende Einheiten eines Stellenwert-Zahlensystems.
- `alphabetic`: Das System interpretiert die gegebenen Werte als Ziffern eines alphabetischen Zahlensystems, ähnlich einem Stellenwert-Zahlensystem, jedoch ohne `0`.
- `symbolic`: Das System durchläuft die Werte und druckt sie bei jedem Zyklus erneut (einmal für den ersten Zyklus, zweimal für den zweiten usw.).
- `fixed`: Das System durchläuft die angegebenen Werte einmal und fällt dann auf arabische Ziffern zurück.

## Formaler Syntax

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

- Deskriptoren des {{cssxref("@counter-style")}}: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listeneigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-type")}}
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
