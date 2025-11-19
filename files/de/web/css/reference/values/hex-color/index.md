---
title: <hex-color>
slug: Web/CSS/Reference/Values/hex-color
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Der **`<hex-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist eine Notation zur Beschreibung der _hexadezimalen Farbsyntax_ einer {{Glossary("RGB", "sRGB")}} Farbe unter Verwendung ihrer primären Farbkomponenten (Rot, Grün, Blau), die als hexadezimale Zahlen geschrieben sind, sowie ihrer Transparenz.

Ein `<hex-color>`-Wert kann überall verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) verwendet werden kann.

## Syntax

```plain
#RGB        // The three-value syntax
#RGBA       // The four-value syntax
#RRGGBB     // The six-value syntax
#RRGGBBAA   // The eight-value syntax
```

### Wert

- `R` oder `RR`
  - : Die _rote_ Komponente der Farbe, als nicht-empfindliche hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl vorhanden ist, wird sie dupliziert: `1` bedeutet `11`.
- `G` oder `GG`
  - : Die _grüne_ Komponente der Farbe, als nicht-empfindliche hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl vorhanden ist, wird sie dupliziert: `c` bedeutet `cc`.
- `B` oder `BB`
  - : Die _blaue_ Komponente der Farbe, als nicht-empfindliche hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl vorhanden ist, wird sie dupliziert: `9` bedeutet `99`.
- `A` oder `AA` {{optional_inline}}
  - : Die _alpha_ Komponente der Farbe, die ihre Transparenz angibt, als nicht-empfindliche hexadezimale Zahl zwischen `0` und `ff` (255). Wenn nur eine Zahl vorhanden ist, wird sie dupliziert: `e` bedeutet `ee`. `0` oder `00` steht für eine vollständig transparente Farbe und `f` oder `ff` für eine vollständig deckende.

> [!NOTE]
> Die Syntax ist nicht-empfindlich: `#00ff00` ist dasselbe wie `#00FF00`.

## Beispiele

### Hexadezimales Pink

Dieses Beispiel enthält vier pinkfarbene Quadrate mit vollständig und halbtransparenten Hintergründen, erstellt mit vier unterschiedlich langen, nicht-empfindlichen hexadezimalen Farbsyntaxen.

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

Die pinkfarbenen Hintergrundfarben werden mit den drei-, vier-, sechs- und achtwertigen hexadezimalen Notationen erstellt, sowohl mit Groß- als auch Kleinbuchstaben.

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

- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp
- {{cssxref("named-color")}} Datentyp
- [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Farb-Funktion
- [CSS Farbe](/de/docs/Web/CSS/Guides/Colors) Modul
