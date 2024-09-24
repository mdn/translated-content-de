---
title: symbols()
slug: Web/CSS/symbols
l10n:
  sourceCommit: 31e2290d82856fc0abe4ee4f75f2d53f05cf9de0
---

{{CSSRef}}

Die **`symbols()`** CSS-Funktion ermöglicht das Definieren von Zählerstilen direkt als Wert von Eigenschaften wie {{cssxref("list-style")}} und bietet damit eine weniger komplexe, aber einfachere Alternative zur Methode {{cssxref("@counter-style")}}, um einen Zählerstil zu definieren.

Im Gegensatz zu {{cssxref("@counter-style")}}, die einen wiederverwendbaren Zählerstil definiert, ist `symbols()` _anonym_ (d.h., sie kann nur einmal verwendet werden). Diese Funktion akzeptiert Zeichenketten und Bilder als Werte. Im Vergleich dazu akzeptiert der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor von {{cssxref("@counter-style")}} auch Bezeichner.

## Syntax

```css
symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );
```

`<symbols-type>` kann einer der folgenden sein:

- `cyclic`: Das System durchläuft die angegebenen Werte in der Reihenfolge ihrer Definition und kehrt zum Anfang zurück, wenn es das Ende erreicht.
- `numeric`: Das System interpretiert die angegebenen Werte als aufeinanderfolgende Einheiten eines Stellenwert-Zahlensystems.
- `alphabetic`: Das System interpretiert die angegebenen Werte als Ziffern eines alphabetischen Zahlensystems, ähnlich einem Stellenwert-Zahlensystem, jedoch ohne `0`.
- `symbolic`: Das System durchläuft die Werte und druckt sie bei jedem Zyklus in zunehmender Anzahl (einmal für den ersten Zyklus, zweimal für den zweiten usw.).
- `fixed`: Das System durchläuft die angegebenen Werte einmal und wechselt dann zu arabischen Ziffern.

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
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
