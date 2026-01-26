---
title: <hex-color>
slug: Web/CSS/Reference/Values/hex-color
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<hex-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist eine Notation zur Beschreibung der _hexadezimalen Farbsyntax_ einer {{Glossary("RGB", "sRGB")}} Farbe unter Verwendung ihrer Primärfarbenkomponenten (Rot, Grün, Blau), die als hexadezimale Zahlen geschrieben sind, sowie ihrer Transparenz.

Ein `<hex-color>`-Wert kann überall dort verwendet werden, wo ein {{cssxref("&lt;color&gt;")}} verwendet werden kann.

## Syntax

```plain
#RGB        // The three-value syntax
#RGBA       // The four-value syntax
#RRGGBB     // The six-value syntax
#RRGGBBAA   // The eight-value syntax
```

### Wert

- `R` oder `RR`
  - : Die _rote_ Komponente der Farbe als nicht case-sensitieve hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl angegeben ist, wird sie dupliziert: `1` bedeutet `11`.
- `G` oder `GG`
  - : Die _grüne_ Komponente der Farbe als nicht case-sensitieve hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl angegeben ist, wird sie dupliziert: `c` bedeutet `cc`.
- `B` oder `BB`
  - : Die _blaue_ Komponente der Farbe als nicht case-sensitieve hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl angegeben ist, wird sie dupliziert: `9` bedeutet `99`.
- `A` oder `AA` {{optional_inline}}
  - : Die _alpha_ Komponente der Farbe, die ihre Transparenz angibt, als nicht case-sensitieve hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl angegeben ist, wird sie dupliziert: `e` bedeutet `ee`. `0` oder `00` steht für eine vollständig transparente Farbe, und `f` oder `ff` für eine vollständig undurchsichtige.

> [!NOTE]
> Die Syntax ist nicht case-sensitiv: `#00ff00` ist dasselbe wie `#00FF00`.

## Beispiele

### Hexadezimaler Pink-Farbton

Dieses Beispiel enthält vier Quadrate in einem kräftigen Pink mit vollständig oder halbtransparenten Hintergründen, erstellt mit vier verschiedenen Längen case-insensitieve hex-color-Syntaxen.

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

Die Pink-Hintergrundfarben werden mit den drei-, vier-, sechs- und achtstelligen hexadezimalen Notationen erstellt, wobei sowohl Groß- als auch Kleinbuchstaben verwendet werden.

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

- {{cssxref("&lt;color&gt;")}} Datentyp
- {{cssxref("named-color")}} Datentyp
- [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Farb-Funktion
- [CSS Farbe](/de/docs/Web/CSS/Guides/Colors) Modul
