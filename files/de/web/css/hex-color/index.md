---
title: <hex-farbe>
slug: Web/CSS/hex-color
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<hex-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) ist eine Notation zur Beschreibung der _hexadezimalen Farbsyntax_ einer [sRGB](/de/docs/Glossary/RGB)-Farbe unter Verwendung ihrer Primärfarbkomponenten (Rot, Grün, Blau), die als hexadezimale Zahlen geschrieben sind, sowie ihrer Transparenz.

Ein `<hex-color>`-Wert kann überall dort verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

```plain
#RGB        // Die Drei-Werte-Syntax
#RGBA       // Die Vier-Werte-Syntax
#RRGGBB     // Die Sechs-Werte-Syntax
#RRGGBBAA   // Die Acht-Werte-Syntax
```

### Wert

- `R` oder `RR`
  - : Die _rote_ Komponente der Farbe, als ein nicht-case-sensitiver hexadezimaler Zahlwert zwischen `0` und `ff` (255). Wenn es nur eine Zahl gibt, wird sie dupliziert: `1` bedeutet `11`.
- `G` oder `GG`
  - : Die _grüne_ Komponente der Farbe, als ein nicht-case-sensitiver hexadezimaler Zahlwert zwischen `0` und `ff` (255). Wenn es nur eine Zahl gibt, wird sie dupliziert: `c` bedeutet `cc`.
- `B` oder `BB`
  - : Die _blaue_ Komponente der Farbe, als ein nicht-case-sensitiver hexadezimaler Zahlwert zwischen `0` und `ff` (255). Wenn es nur eine Zahl gibt, wird sie dupliziert: `9` bedeutet `99`.
- `A` oder `AA` {{optional_inline}}
  - : Die _Alpha_-Komponente der Farbe, die ihre Transparenz angibt, als ein nicht-case-sensitiver hexadezimaler Zahlwert zwischen `0` und `ff` (255). Wenn es nur eine Zahl gibt, wird sie dupliziert: `e` bedeutet `ee`. `0`, oder `00`, steht für eine vollständig transparente Farbe, und `f`, oder `ff`, für eine vollständig opake.

> [!NOTE]
> Die Syntax ist nicht-case-sensitiv: `#00ff00` ist dasselbe wie `#00FF00`.

## Beispiele

### Hexadezimales Pink

Dieses Beispiel enthält vier pinke Quadrate mit vollständig opaken oder halbtransparenten Hintergründen, erstellt mit vier unterschiedlich langen nicht-case-sensitiven Hex-Farbsytnaxen.

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

Die pinken Hintergrundfarben werden mit den Drei-, Vier-, Sechs- und Acht-Wert-Hex-Notationen erstellt, unter Verwendung sowohl von Groß- als auch von Kleinbuchstaben.

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
- [CSS-Farbmodul](/de/docs/Web/CSS/CSS_colors)
