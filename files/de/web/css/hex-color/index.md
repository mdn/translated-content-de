---
title: <hex-color>
slug: Web/CSS/hex-color
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<hex-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) ist eine Notation zur Beschreibung der _hexadezimalen Farbsyntax_ einer {{Glossary("RGB", "sRGB")}}-Farbe, die die primären Farbkomponenten (Rot, Grün, Blau) als hexadezimale Zahlen sowie deren Transparenz verwendet.

Ein `<hex-color>`-Wert kann überall verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

```plain
#RGB        // The three-value syntax
#RGBA       // The four-value syntax
#RRGGBB     // The six-value syntax
#RRGGBBAA   // The eight-value syntax
```

### Wert

- `R` oder `RR`
  - : Die _rote_ Komponente der Farbe als hexadezimale Zahl, die zwischen `0` und `ff` (255) liegt und nicht zwischen Groß- und Kleinschreibung unterscheidet. Wenn es nur eine Zahl gibt, wird sie verdoppelt: `1` bedeutet `11`.
- `G` oder `GG`
  - : Die _grüne_ Komponente der Farbe als hexadezimale Zahl, die zwischen `0` und `ff` (255) liegt und nicht zwischen Groß- und Kleinschreibung unterscheidet. Wenn es nur eine Zahl gibt, wird sie verdoppelt: `c` bedeutet `cc`.
- `B` oder `BB`
  - : Die _blaue_ Komponente der Farbe als hexadezimale Zahl, die zwischen `0` und `ff` (255) liegt und nicht zwischen Groß- und Kleinschreibung unterscheidet. Wenn es nur eine Zahl gibt, wird sie verdoppelt: `9` bedeutet `99`.
- `A` oder `AA` {{optional_inline}}
  - : Die _Alpha_-Komponente der Farbe, die die Transparenz angibt, als hexadezimale Zahl, die zwischen `0` und `ff` (255) liegt und nicht zwischen Groß- und Kleinschreibung unterscheidet. Wenn es nur eine Zahl gibt, wird sie verdoppelt: `e` bedeutet `ee`. `0` oder `00` steht für eine vollständig transparente Farbe, `f` oder `ff` für eine vollständig undurchsichtige.

> [!NOTE]
> Die Syntax unterscheidet nicht zwischen Groß- und Kleinschreibung: `#00ff00` ist dasselbe wie `#00FF00`.

## Beispiele

### Hexadezimales Hot Pink

Dieses Beispiel zeigt vier Hot Pink Quadrate mit vollständig undurchsichtigen oder halbtransparenten Hintergründen, die mit vier verschiedenen fallunterscheidungsfreien hexadezimalen Farbsyntaxen erstellt wurden.

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

Die Hot Pink Hintergrundfarben werden mit den drei-, vier-, sechs- und achtstelligen hexadezimalen Notationen erstellt, wobei sowohl Groß- als auch Kleinbuchstaben verwendet werden.

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
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
