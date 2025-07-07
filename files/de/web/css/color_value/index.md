---
title: <color>
slug: Web/CSS/color_value
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{CSSRef}}

Der **`<color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Farbe.
Ein `<color>` kann auch einen [Alpha-Kanal](https://en.wikipedia.org/wiki/Alpha_compositing) _Transparenzwert_ enthalten, der angibt, wie die Farbe mit ihrem Hintergrund [komponiert](https://drafts.fxtf.org/compositing-1/#simplealphacompositing) werden soll.

> [!NOTE]
> Obwohl `<color>`-Werte präzise definiert sind, kann ihr tatsächliches Erscheinungsbild (manchmal erheblich) von Gerät zu Gerät variieren. Dies liegt daran, dass die meisten Geräte nicht kalibriert sind und einige Browser die [Farbprofile](https://en.wikipedia.org/wiki/ICC_profile) der Ausgabegeräte nicht unterstützen.

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

Ein `<color>`-Wert kann mit einer der unten aufgeführten Methoden angegeben werden:

- Durch Schlüsselwörter: {{CSSXref("&lt;named-color&gt;")}} (wie `blue` oder `pink`), {{CSSXref("&lt;system-color&gt;")}} und [`currentcolor`](#currentcolor_keyword).
- Durch hexadezimale Notationen: {{CSSXref("&lt;hex-color&gt;")}} (wie `#ff0000`).
- Durch `<color-function>`, mit Parametern in einem {{Glossary("color_space", "Farbraum")}} unter Verwendung von Funktionsnotationen:
  - [sRGB](https://en.wikipedia.org/wiki/SRGB) Farbraum: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}} und {{CSSXref("color_value/rgb", "rgb()")}}.
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) Farbraum: {{CSSXref("color_value/lab", "lab()")}} und {{CSSXref("color_value/lch", "lch()")}}.
  - [Oklab](https://bottosson.github.io/posts/oklab/) Farbraum: {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}.
  - Andere Farbräume: {{CSSXref("color_value/color", "color()")}}, {{CSSXref("color_value/device-cmyk", "device-cmyk()")}}.
- Indem Sie die [relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) verwenden, um eine neue Farbe basierend auf einer vorhandenen Farbe auszugeben. Jede der oben genannten Farbmethoden kann eine **Ausgangsfarbe** mit dem Schlüsselwort `from` gefolgt von Definitionen der Kanalwerte für die neue **Ausgabefarbe** verwenden.
- Durch Mischen zweier Farben: {{CSSXref("color_value/color-mix", "color-mix()")}}.
- Indem Sie eine Farbe angeben, für die Sie eine kontrastierende Farbe zurückgegeben haben möchten: {{CSSXref("color_value/contrast-color", "contrast-color()")}}.
- Indem Sie zwei Farben angeben, wobei die erste für helle Farbschemata und die zweite für dunkle Farbschemata verwendet wird: {{CSSXref("color_value/light-dark", "light-dark()")}}.

### `currentcolor` Schlüsselwort

Das `currentcolor`-Schlüsselwort repräsentiert den Wert der {{Cssxref("color")}}-Eigenschaft eines Elements. Dies ermöglicht es Ihnen, den `color`-Wert bei Eigenschaften zu verwenden, die diesen nicht standardmäßig erhalten.

Wenn `currentcolor` als Wert der `color`-Eigenschaft verwendet wird, übernimmt er stattdessen seinen Wert aus dem geerbten Wert der `color`-Eigenschaft.

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
  border: 1px dashed currentcolor;
}
.child {
  background: currentcolor;
  height: 9px;
}
```

{{EmbedLiveSample("currentcolor_keyword", "100%", 80)}}

### Fehlende Farbkomponenten

Jede Komponente aller CSS-Farbmethoden - mit Ausnahme derjenigen, die die veraltete komma-separierte Syntax verwenden - kann als Schlüsselwort `none` angegeben werden, um eine fehlende Komponente zu sein.

Das explizite Angeben von [fehlenden Komponenten in der Farbinterpolation](#interpolation_mit_fehlenden_komponenten) ist nützlich für Fälle, in denen Sie einige Farbkomponenten interpolieren, aber andere nicht interpolieren möchten. Für alle anderen Zwecke hat eine fehlende Komponente effektiv einen Nullwert in einer geeigneten Einheit: `0`, `0%` oder `0deg`. Zum Beispiel sind die folgenden Farben äquivalent, wenn sie außerhalb der Interpolation verwendet werden:

```css
/* These are equivalent */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* These are equivalent */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## Interpolation

Farbinterpolation erfolgt mit [Verläufen](/de/docs/Web/CSS/gradient), [Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) und [Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Bei der Interpolation von `<color>`-Werten werden sie zunächst in einen bestimmten Farbraum umgewandelt, und dann werden jede Komponente der [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) linear interpoliert, wobei die Geschwindigkeit der Interpolation durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) in Übergängen und Animationen bestimmt wird. Der Interpolationsfarbraum wird standardmäßig auf Oklab gesetzt, kann jedoch in einigen farbbezogenen Funktionsnotationen durch {{CSSXref("&lt;color-interpolation-method&gt;")}} überschrieben werden.

### Interpolation mit fehlenden Komponenten

#### Interpolation von Farben im gleichen Raum

Bei der Interpolation von Farben, die genau im Interpolationsfarbraum liegen, werden fehlende Komponenten einer Farbe mit bestehenden Werten derselben Komponenten der anderen Farbe ersetzt.
Zum Beispiel sind die folgenden zwei Ausdrücke äquivalent:

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> [!NOTE]
> Wenn eine Komponente in beiden Farben fehlt, wird diese Komponente nach der Interpolation fehlen.

#### Interpolation von Farben aus verschiedenen Räumen: analoge Komponenten

Wenn eine zu interpolierende Farbe nicht im Interpolationsfarbraum liegt, werden ihre fehlenden Komponenten in die umgewandelte Farbe basierend auf **analogen Komponenten** derselben Kategorie übertragen, wie in der folgenden Tabelle beschrieben:

| Kategorie  | Analoge Komponenten |
| ---------- | ------------------- |
| Rottöne    | `R`, `X`            |
| Grüntöne   | `G`, `Y`            |
| Blautöne   | `B`, `Z`            |
| Helligkeit | `L`                 |
| Farbigkeit | `C`, `S`            |
| Farbton    | `H`                 |
| a          | `a`                 |
| b          | `b`                 |

Zum Beispiel:

- `X` (`0.2`) in `color(xyz 0.2 0.1 0.6)` ist analog zu `R` (`50%`) in `rgb(50% 70% 30%)`.
- `H` (`0deg`) in `hsl(0deg 100% 80%)` ist analog zu `H` (`140`) in `oklch(80% 0.1 140)`.

Unter Verwendung von Oklch als Interpolationsfarbraum und den beiden folgenden Farben als Beispiel:

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

Das Vorverarbeitungsverfahren ist:

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

3. Wenn eine Komponente der konvertierten Farben analog zu einer fehlenden Komponente in der entsprechenden Originalfarbe ist, setzen Sie sie als fehlende Komponente zurück:

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. Ersetzen Sie jede fehlende Komponente mit derselben Komponente aus der anderen konvertierten Farbe:

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## Barrierefreiheit

Einige Menschen haben Schwierigkeiten, Farben zu unterscheiden. Die [WCAG 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color)-Empfehlung rät dringend davon ab, Farben als einziges Mittel zur Vermittlung einer bestimmten Nachricht, Handlung oder eines Ergebnisses zu verwenden. Weitere Informationen finden Sie unter [Farbe und Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast).

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erforschung von Farbwerten

In diesem Beispiel stellen wir ein `<div>` und ein Texteingabefeld bereit. Das Eingeben einer gültigen Farbe in das Eingabefeld führt dazu, dass das `<div>` diese Farbe annimmt, wodurch Sie unsere Farbwerte testen können.

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

### Erzeugen von voll gesättigten sRGB-Farben

Dieses Beispiel zeigt voll gesättigte sRGB-Farben im sRGB-Farbraum.

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

Dieses Beispiel zeigt Rot in verschiedenen Schattierungen im sRGB-Farbraum.

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

### Erstellen von Rot mit unterschiedlicher Sättigung

Dieses Beispiel zeigt Rot in unterschiedlicher Sättigung im sRGB-Farbraum.

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

- {{CSSXref("opacity")}}: die Eigenschaft, die Transparenz auf Elementebene definiert
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der den Farbwinkel einer Farbe repräsentiert
- {{CSSXref("color")}}, {{CSSXref("background-color")}}, {{CSSXref("border-color")}}, {{CSSXref("box-shadow")}}, {{CSSXref("outline-color")}}, {{CSSXref("text-shadow")}}: gebräuchliche Eigenschaften, die `<color>` verwenden
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Neue Funktionen, Verläufe und Farbtöne in CSS-Farben (Level 4)](/en-US/blog/css-color-module-level-4/) auf dem MDN-Blog (2023)
