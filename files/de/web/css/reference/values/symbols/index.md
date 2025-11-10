---
title: symbols()
slug: Web/CSS/Reference/Values/symbols
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`symbols()`**-[CSS](/de/docs/Web/CSS)-Funktion ermöglicht es, Zählerstile inline direkt als Wert von Eigenschaften wie {{cssxref("list-style")}} zu definieren und bietet eine weniger leistungsstarke, aber einfachere Alternative zur Methode {{cssxref("@counter-style")}} zur Definition eines Zählerstils.

Im Gegensatz zu {{cssxref("@counter-style")}}, das einen wiederverwendbaren Zählerstil definiert, ist `symbols()` _anonym_ (d.h. es kann nur einmal verwendet werden). Diese Funktion akzeptiert Zeichenfolgen und Bilder als Werte. Im Vergleich dazu akzeptiert der [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols)-Deskriptor von {{cssxref("@counter-style")}} auch Bezeichner.

## Syntax

```css
symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );
```

`<symbols-type>` kann einer der folgenden sein:

- `cyclic`: Das System durchläuft die definierten Werte in der Reihenfolge ihrer Definition und kehrt am Ende zu Beginn zurück.
- `numeric`: Das System interpretiert die angegebenen Werte als aufeinanderfolgende Einheiten eines Stellenwert-Zahlensystems.
- `alphabetic`: Das System interpretiert die angegebenen Werte als Ziffern eines alphabetischen Zahlensystems, ähnlich einem Stellenwert-Zahlensystem, jedoch ohne `0`.
- `symbolic`: Das System durchläuft die Werte und gibt sie bei jedem Zyklus ein weiteres Mal aus (einmal im ersten Zyklus, zweimal im zweiten usw.).
- `fixed`: Das System durchläuft die angegebenen Werte einmal und verfällt dann in Arabische Ziffern.

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
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)-Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists)-Modul
