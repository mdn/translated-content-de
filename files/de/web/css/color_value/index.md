---
title: <color>
slug: Web/CSS/color_value
l10n:
  sourceCommit: cd3fbb8b10186d3466ab16d590978d5c10882875
---

Der **`<color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Farbe. Ein `<color>` kann auch einen [Alpha-Kanal](https://en.wikipedia.org/wiki/Alpha_compositing) Transparenzwert enthalten, der angibt, wie die Farbe mit ihrem Hintergrund [komponiert](https://drafts.fxtf.org/compositing-1/#simplealphacompositing) werden soll.

> [!NOTE]
> Auch wenn `<color>`-Werte genau definiert sind, kann ihr tatsächliches Erscheinungsbild von Gerät zu Gerät variieren (manchmal erheblich). Dies liegt daran, dass die meisten Geräte nicht kalibriert sind und einige Browser die [Farbprofile](https://en.wikipedia.org/wiki/ICC_profile) von Ausgabegeräten nicht unterstützen.

## Syntax

```css
/* Named colors */
rebeccapurple
aliceblue

/* RGB Hexadecimal */
#f09
#ff0099

/* RGB (Red, Green, Blue) */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL (Hue, Saturation, Lightness) */
hsl(150 30% 60%)
hsl(150 30% 60% / 80%)

/* HWB (Hue, Whiteness, Blackness) */
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* LAB (Lightness, A-axis, B-axis) */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH (Lightness, Chroma, Hue) */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab (Lightness, A-axis, B-axis) */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* Oklch (Lightness, Chroma, Hue) */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)

/* Relative CSS colors */
/* HSL hue change */
hsl(from red 240deg s l)
/* HWB alpha channel change */
hwb(from green h w b / 0.5)
/* LCH lightness change */
lch(from blue calc(l + 20) c h)

/* light-dark */
light-dark(white, black)
light-dark(rgb(255 255 255), rgb(0 0 0))
```

Ein `<color>`-Wert kann auf eine der folgenden Arten angegeben werden:

- Durch Schlüsselwörter: {{CSSXref("&lt;named-color&gt;")}} (wie `blue` oder `pink`), {{CSSXref("&lt;system-color&gt;")}} und [`currentColor`](#currentcolor_keyword).
- Durch hexadezimale Notationen: {{CSSXref("&lt;hex-color&gt;")}} (wie `#ff0000`).
- Durch `<color-function>`, mit Parametern in einem {{Glossary("color_space", "Farbraum")}} unter Verwendung funktionaler Notationen:
  - [sRGB](https://en.wikipedia.org/wiki/SRGB)-Farbraum: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}}, und {{CSSXref("color_value/rgb", "rgb()")}}.
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space)-Farbraum: {{CSSXref("color_value/lab", "lab()")}} und {{CSSXref("color_value/lch", "lch()")}}.
  - [Oklab](https://bottosson.github.io/posts/oklab/)-Farbraum: {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}.
  - Andere Farbräume: {{CSSXref("color_value/color", "color()")}}, {{CSSXref("color_value/device-cmyk", "device-cmyk()")}}.
- Durch Verwendung der [relativen Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors), um eine neue Farbe basierend auf einer vorhandenen Farbe auszugeben. Jede der oben genannten Farbfunktionen kann eine **Ursprungsfarbe** aufnehmen, vorangestellt durch das Schlüsselwort `from` und gefolgt von Definitionen der Kanalwerte für die neue **Ausgabefarbe**.
- Durch Mischen von zwei Farben: {{CSSXref("color_value/color-mix", "color-mix()")}}.
- Durch Spezifizierung einer Farbe, für die Sie eine kontrastierende Farbe zurückgegeben haben möchten: {{CSSXref("color_value/contrast-color", "contrast-color()")}}.
- Durch Angabe von zwei Farben, wobei die erste für helle Farbschemata und die zweite für dunkle Farbschemata verwendet wird: {{CSSXref("color_value/light-dark", "light-dark()")}}.

### `currentColor` Schlüsselwort

Das Schlüsselwort `currentColor` repräsentiert den Wert der {{Cssxref("color")}}-Eigenschaft eines Elements. Dadurch können Sie den `color`-Wert für Eigenschaften verwenden, die diesen standardmäßig nicht erhalten.

Wenn `currentColor` als Wert der `color`-Eigenschaft verwendet wird, nimmt es stattdessen seinen Wert vom geerbten Wert der `color`-Eigenschaft.

```html
<div class="container">
  The color of this text is blue.
  <div class="child"></div>
  This block is surrounded by a blue border.
</div>
```

```css
.container {
  color: blue;
  border: 1px dashed currentColor;
}
.child {
  background: currentColor;
  height: 9px;
}
```

{{EmbedLiveSample("currentcolor_keyword", "100%", 80)}}

### Fehlende Farbkomponenten

Jede Komponente von CSS-Farbfunktionen - mit Ausnahme derjenigen, die die veraltete komma-separierte Syntax verwenden - kann als Schlüsselwort `none` angegeben werden, um eine fehlende Komponente darzustellen.

Das explizite Angeben von [fehltenden Komponenten bei der Farbinterpolation](#interpolation_mit_fehlenden_komponenten) ist nützlich für Fälle, in denen Sie einige Farbkomponenten interpolieren möchten, aber nicht alle. Für alle anderen Zwecke wird eine fehlende Komponente effektiv einen Nullwert in einer geeigneten Einheit haben: `0`, `0%` oder `0deg`. Zum Beispiel sind die folgenden Farben gleichwertig, wenn sie außerhalb der Interpolation verwendet werden:

```css
/* These are equivalent */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* These are equivalent */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## Interpolation

Farbinterpolation erfolgt bei [Verläufen](/de/docs/Web/CSS/gradient), [Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) und [Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Beim Interpolieren von `<color>`-Werten werden diese zunächst in einen gegebenen Farbraum konvertiert. Dann werden jede Komponente der [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) linear interpoliert, wobei die Geschwindigkeit der Interpolation durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) in Übergängen und Animationen bestimmt wird. Der Interpolationsfarbraum ist standardmäßig Oklab, kann jedoch in einigen farbbezogenen funktionalen Notationen durch {{CSSXref("&lt;color-interpolation-method&gt;")}} überschrieben werden.

### Interpolation mit fehlenden Komponenten

#### Interpolieren von Farben im selben Raum

Wenn Farben interpoliert werden, die sich genau im Interpolationsfarbraum befinden, werden fehlende Komponenten aus einer Farbe durch vorhandene Werte derselben Komponenten aus der anderen Farbe ersetzt. Zum Beispiel sind die folgenden zwei Ausdrücke gleichwertig:

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> [!NOTE]
> Wenn eine Komponente bei beiden Farben fehlt, wird diese Komponente nach der Interpolation fehlen.

#### Interpolieren von Farben aus unterschiedlichen Räumen: analoge Komponenten

Wenn eine zu interpolierende Farbe nicht im Interpolationsfarbraum liegt, werden ihre fehlenden Komponenten auf der Grundlage **analoger Komponenten** derselben Kategorie in die konvertierte Farbe übertragen, wie in der folgenden Tabelle beschrieben:

| Kategorie  | Analoge Komponenten |
| ---------- | ------------------- |
| Rot        | `R`, `X`            |
| Grün       | `G`, `Y`            |
| Blau       | `B`, `Z`            |
| Helligkeit | `L`                 |
| Farbigkeit | `C`, `S`            |
| Farbton    | `H`                 |
| a          | `a`                 |
| b          | `b`                 |

Zum Beispiel:

- `X` (`0.2`) in `color(xyz 0.2 0.1 0.6)` ist analog zu `R` (`50%`) in `rgb(50% 70% 30%)`.
- `H` (`0deg`) in `hsl(0deg 100% 80%)` ist analog zu `H` (`140`) in `oklch(80% 0.1 140)`.

Verwendung von Oklch als Interpolationsfarbraum und den beiden Farben unten als Beispiel:

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

Der Vorverarbeitungsprozess ist:

1. Ersetzen Sie die fehlenden Komponenten in beiden Farben durch einen Nullwert:

   ```css
   lch(80% 30 0)
   color(display-p3 0.7 0.5 0)
   ```

2. Konvertieren Sie beide Farben in den Interpolationsfarbraum:

   ```css
   oklch(83.915% 0.0902 0.28)
   oklch(63.612% 0.1522 78.748)
   ```

3. Wenn eine Komponente der konvertierten Farben eine analoge Komponente zu einer fehlenden Komponente in der entsprechenden Originalfarbe ist, setzen Sie sie als fehlende Komponente zurück:

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. Ersetzen Sie jede fehlende Komponente durch dieselbe Komponente aus der anderen konvertierten Farbe:

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## Zugänglichkeit

Einige Menschen haben Schwierigkeiten, Farben zu unterscheiden. Die [WCAG 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color) Empfehlung rät dringend davon ab, Farbe als einziges Mittel zur Kommunikation einer bestimmten Nachricht, Aktion oder eines Ergebnisses zu verwenden. Siehe [Farbe und Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) für mehr Informationen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erkunden von Farbwerten

In diesem Beispiel bieten wir ein `<div>` und ein Texteingabefeld an. Beim Eingeben einer gültigen Farbe in das Eingabefeld nimmt das `<div>` diese Farbe an, sodass Sie unsere Farbewerte testen können.

#### HTML

```html
<div></div>
<hr />
<label for="color">Enter a valid color value:</label>
<input type="text" id="color" />
```

```css hidden
div {
  height: 200px;
  width: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "inherit" || stringToTest === "transparent") {
    return false;
  }

  const div = document.createElement("div");
  div.style.color = stringToTest;
  return !!div.style.color;
}

inputElem.addEventListener("input", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.removeAttribute("style");
    divElem.textContent = "Invalid color value";
  }
});
```

#### Ergebnis

{{EmbedLiveSample("exploring_color_values", "100%", 300)}}

### Erzeugung vollständig gesättigter sRGB-Farben

Dieses Beispiel zeigt vollständig gesättigte sRGB-Farben im sRGB-Farbraum.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 50%);
}
div:nth-child(2) {
  background-color: hsl(30 100% 50%);
}
div:nth-child(3) {
  background-color: hsl(60 100% 50%);
}
div:nth-child(4) {
  background-color: hsl(90 100% 50%);
}
div:nth-child(5) {
  background-color: hsl(120 100% 50%);
}
div:nth-child(6) {
  background-color: hsl(150 100% 50%);
}
div:nth-child(7) {
  background-color: hsl(180 100% 50%);
}
div:nth-child(8) {
  background-color: hsl(210 100% 50%);
}
div:nth-child(9) {
  background-color: hsl(240 100% 50%);
}
div:nth-child(10) {
  background-color: hsl(270 100% 50%);
}
div:nth-child(11) {
  background-color: hsl(300 100% 50%);
}
div:nth-child(12) {
  background-color: hsl(330 100% 50%);
}
```

#### Ergebnis

{{EmbedLiveSample("generating_fully_saturated_sRGB_colors", "100%", 200)}}

### Erstellen verschiedener Rottöne

Dieses Beispiel zeigt rote Farbtöne unterschiedlicher Abstufungen im sRGB-Farbraum.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  box-sizing: border-box;
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 0%);
}
div:nth-child(2) {
  background-color: hsl(0 100% 20%);
}
div:nth-child(3) {
  background-color: hsl(0 100% 40%);
}
div:nth-child(4) {
  background-color: hsl(0 100% 60%);
}
div:nth-child(5) {
  background-color: hsl(0 100% 80%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 100%);
  border: solid;
}
```

#### Ergebnis

{{EmbedLiveSample("creating_different_shades_of_red", "100%", 150)}}

### Erstellen von Rot in unterschiedlicher Sättigung

Dieses Beispiel zeigt rote Farben in unterschiedlichen Sättigungen im sRGB-Farbraum.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 0% 50%);
}
div:nth-child(2) {
  background-color: hsl(0 20% 50%);
}
div:nth-child(3) {
  background-color: hsl(0 40% 50%);
}
div:nth-child(4) {
  background-color: hsl(0 60% 50%);
}
div:nth-child(5) {
  background-color: hsl(0 80% 50%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 50%);
}
```

#### Ergebnis

{{EmbedLiveSample("creating_reds_of_different_saturation", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("opacity")}}: die Eigenschaft, die die Transparenz auf Elementebene definiert
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der den Winkel des Farbtons einer Farbe darstellt
- {{CSSXref("color")}}, {{CSSXref("background-color")}}, {{CSSXref("border-color")}}, {{CSSXref("box-shadow")}}, {{CSSXref("outline-color")}}, {{CSSXref("text-shadow")}}: gängige Eigenschaften, die `<color>` verwenden
- {{CSSXref("color_value/color")}} Funktion
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Neue Funktionen, Verläufe und Farbtöne in CSS-Farben (Level 4)](/en-US/blog/css-color-module-level-4/) im MDN-Blog (2023)
