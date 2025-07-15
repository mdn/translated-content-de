---
title: <hex-color>
slug: Web/CSS/hex-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<hex-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) ist eine Notation zur Beschreibung der _hexadezimalen Farbsyntax_ einer {{Glossary("RGB", "sRGB")}}-Farbe unter Verwendung ihrer primären Farbkomponenten (rot, grün, blau), die als hexadezimale Zahlen geschrieben werden, sowie ihrer Transparenz.

Ein `<hex-color>`-Wert kann überall dort verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

```plain
#RGB        // The three-value syntax
#RGBA       // The four-value syntax
#RRGGBB     // The six-value syntax
#RRGGBBAA   // The eight-value syntax
```

### Wert

- `R` oder `RR`
  - : Die _rote_ Komponente der Farbe, als nicht zwischen Groß- und Kleinschreibung unterscheidende hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl angegeben ist, wird sie verdoppelt: `1` bedeutet `11`.
- `G` oder `GG`
  - : Die _grüne_ Komponente der Farbe, als nicht zwischen Groß- und Kleinschreibung unterscheidende hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl angegeben ist, wird sie verdoppelt: `c` bedeutet `cc`.
- `B` oder `BB`
  - : Die _blaue_ Komponente der Farbe, als nicht zwischen Groß- und Kleinschreibung unterscheidende hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl angegeben ist, wird sie verdoppelt: `9` bedeutet `99`.
- `A` oder `AA` {{optional_inline}}
  - : Die _alpha_ Komponente der Farbe, die ihre Transparenz angibt, als nicht zwischen Groß- und Kleinschreibung unterscheidende hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl angegeben ist, wird sie verdoppelt: `e` bedeutet `ee`. `0` oder `00` repräsentiert eine vollständig transparente Farbe und `f` oder `ff` eine vollständig opake.

> [!NOTE]
> Die Syntax unterscheidet nicht zwischen Groß- und Kleinschreibung: `#00ff00` ist dasselbe wie `#00FF00`.

## Beispiele

### Hexadezimales Hot Pink

In diesem Beispiel sind vier Hot Pink Quadrate enthalten, mit vollständig opaken oder halbtransparenten Hintergründen, die unter Verwendung von vier unterschiedlich langen und nicht von der Groß- und Kleinschreibung abhängigen Hex-Farbsyntaxen erstellt wurden.

#### HTML

```html
<div>
  #F09
  <div class="c1"></div>
</div>
<div>
  #f09a
  <div class="c2"></div>
</div>
<div>
  #ff0099
  <div class="c3"></div>
</div>
<div>
  #FF0099AA
  <div class="c4"></div>
</div>
```

#### CSS

Die Hot Pink Hintergrundfarben werden unter Verwendung der drei-, vier-, sechs- und achtstelligen Hex-Notation erstellt, unter Verwendung von Groß- und Kleinbuchstaben.

```css hidden
body {
  display: flex;
  justify-content: space-evenly;
  font-family: monospace;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

```css
[class] {
  width: 40px;
  height: 40px;
}
.c1 {
  background: #f09;
}
.c2 {
  background: #f09a;
}
.c3 {
  background: #ff0099;
}
.c4 {
  background: #ff0099aa;
}
```

#### Ergebnis

{{EmbedLiveSample("Hexadecimal_hot_pink", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value) Datentyp
- {{cssxref("named-color")}} Datentyp
- [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farb-Funktion
- [CSS Farbe](/de/docs/Web/CSS/CSS_colors) Modul
