---
title: symbols()
slug: Web/CSS/Reference/Values/symbols
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`symbols()`** [CSS](/de/docs/Web/CSS)-Funktion ermöglicht es, Zählerstile direkt inline als Wert von Eigenschaften wie {{cssxref("list-style")}} zu definieren. Sie bietet eine weniger leistungsfähige, aber einfachere Alternative zur Methode {{cssxref("@counter-style")}} zur Definition eines Zählerstils.

Im Gegensatz zu {{cssxref("@counter-style")}}, das einen wiederverwendbaren Zählerstil definiert, ist `symbols()` _anonym_ (d.h. es kann nur einmal verwendet werden). Diese Funktion akzeptiert Strings und Bilder als Werte. Im Vergleich dazu akzeptiert der [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols)-Deskriptor von {{cssxref("@counter-style")}} ebenfalls Bezeichner.

## Syntax

```css
symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );
```

`<symbols-type>` kann einer der folgenden sein:

- `cyclic`: Das System durchläuft die angegebenen Werte in der Reihenfolge ihrer Definition und kehrt zum Anfang zurück, wenn das Ende erreicht ist.
- `numeric`: Das System interpretiert die angegebenen Werte als die aufeinanderfolgenden Einheiten eines Stellenwert-Zahlensystems.
- `alphabetic`: Das System interpretiert die angegebenen Werte als die Ziffern eines alphabetischen Zahlensystems, ähnlich einem Stellenwert-Zahlensystem, jedoch ohne `0`.
- `symbolic`: Das System durchläuft die Werte und gibt sie bei jedem Zyklus zusätzlich aus (einmal für den ersten Zyklus, zweimal für den zweiten, usw.).
- `fixed`: Das System durchläuft die angegebenen Werte einmal und greift dann auf arabische Ziffern zurück.

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
- Listeneigenschaften: {{cssxref("list-style")}}, {{cssxref("list-style-type")}}
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles)-Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul
