---
title: <Farbe>
slug: Web/CSS/color_value
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{CSSRef}}

Der **`<color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Farbe.
Ein `<color>` kann auch einen [Alpha-Kanal](https://en.wikipedia.org/wiki/Alpha_compositing) _Transparenzwert_ beinhalten, der angibt, wie die Farbe mit ihrem Hintergrund [kombiniert](https://www.w3.org/TR/compositing-1/#simplealphacompositing) werden soll.

> [!NOTE]
> Obwohl `<color>`-Werte präzise definiert sind, kann ihr tatsächliches Aussehen (manchmal erheblich) von Gerät zu Gerät variieren. Dies liegt daran, dass die meisten Geräte nicht kalibriert sind und einige Browser die [Farbprofile](https://en.wikipedia.org/wiki/ICC_profile) der Ausgabegeräte nicht unterstützen.

## Syntax

```css
/* Benannte Farben */
rebeccapurple
aliceblue

/* RGB Hexadezimal */
#f09
#ff0099

/* RGB (Rot, Grün, Blau) */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL (Farbton, Sättigung, Helligkeit) */
hsl(150 30% 60%)
hsl(150 30% 60% / 80%)

/* HWB (Farbton, Weiße, Schwarze) */
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* LAB (Helligkeit, A-Achse, B-Achse) */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH (Helligkeit, Chroma, Farbton) */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab (Licht, A-Achse, B-Achse) */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* Oklch (Licht, Chroma, Farbton) */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)

/* Relative CSS-Farben */
/* HSL Farbtonänderung */
hsl(from red 240deg s l)
/* HWB Alphakanaländerung */
hwb(from green h w b / 0.5)
/* LCH Helligkeitsänderung */
lch(from blue calc(l + 20) c h)

/* light-dark */
light-dark(white, black)
light-dark(rgb(255 255 255), rgb(0 0 0))
```

Ein `<color>`-Wert kann auf eine der folgenden Arten angegeben werden:

- Durch Schlüsselwörter: {{CSSXref("&lt;named-color&gt;")}} (wie `blue` oder `pink`), {{CSSXref("&lt;system-color&gt;")}} und [`currentcolor`](#currentcolor_keyword).
- Durch hexadezimale Notationen: {{CSSXref("&lt;hex-color&gt;")}} (wie `#ff0000`).
- Durch `<color-function>`, mit Parametern in einem {{glossary("color space")}} unter Verwendung funktionaler Notationen:
  - [sRGB](https://en.wikipedia.org/wiki/SRGB) Farbraum: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}} und {{CSSXref("color_value/rgb", "rgb()")}}.
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) Farbraum: {{CSSXref("color_value/lab", "lab()")}} und {{CSSXref("color_value/lch", "lch()")}}.
  - [Oklab](https://bottosson.github.io/posts/oklab/) Farbraum: {{CSSXref("color_value/oklab", "oklab()")}} und {{CSSXref("color_value/oklch", "oklch()")}}.
  - Andere Farbräume: {{CSSXref("color_value/color", "color()")}}.
- Durch die Verwendung der [relativen Farbe](/de/docs/Web/CSS/CSS_colors/Relative_colors) Syntax, um eine neue Farbe basierend auf einer vorhandenen Farbe auszugeben. Jede der oben genannten Farbmethoden kann eine **ursprüngliche Farbe** verwenden, die mit dem `from`-Schlüsselwort angegeben wird, gefolgt von Definitionen der Kanalwerte für die neue **Ausgabefarbe**.
- Durch Mischen von zwei Farben: {{CSSXref("color_value/color-mix", "color-mix()")}}.
- Durch Auswahl einer Farbe basierend auf Kontrastverhältnissen: {{CSSXref("color_value/color-contrast", "color-contrast()")}}.
- Durch die Angabe von zwei Farben, wobei die erste für helle Farbschemata und die zweite für dunkle Farbschemata dient: {{CSSXref("color_value/light-dark", "light-dark()")}}.

### `currentcolor` Schlüsselwort

Das `currentcolor` Schlüsselwort repräsentiert den Wert der {{Cssxref("color")}}-Eigenschaft eines Elements. Damit können Sie den `color`-Wert auf Eigenschaften anwenden, die ihn nicht standardmäßig erhalten.

Wenn `currentcolor` als Wert der `color`-Eigenschaft verwendet wird, übernimmt es stattdessen seinen Wert von der geerbten `color` Eigenschaft.

```html
<div style="color: blue; border: 1px dashed currentcolor;">
  Die Farbe dieses Textes ist blau.
  <div style="background: currentcolor; height:9px;"></div>
  Dieser Block ist von einem blauen Rand umgeben.
</div>
```

{{EmbedLiveSample("currentcolor_keyword", "100%", 80)}}

### Fehlende Farbkomponenten

Jede Komponente von CSS-Farbmethoden - außer denen, die die veraltete komma-separierte Syntax verwenden - kann als das Schlüsselwort `none` angegeben werden, um eine fehlende Komponente darzustellen.

Das explizite Festlegen von [fehlenden Komponenten bei der Farbinterpolation](#interpolation_mit_fehlenden_komponenten) ist nützlich für Fälle, in denen Sie einige Farbkomponenten interpolieren möchten, andere jedoch nicht. In allen anderen Fällen hat eine fehlende Komponente effektiv einen Nullwert in einer geeigneten Einheit: `0`, `0%` oder `0deg`. Zum Beispiel sind die folgenden Farben äquivalent, wenn sie außerhalb der Interpolation verwendet werden:

```css
/* Diese sind äquivalent */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* Diese sind äquivalent */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## Interpolation

Farbinterpolation erfolgt mit [Verläufen (gradients)](/de/docs/Web/CSS/gradient), [Übergängen (transitions)](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) und [Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Beim Interpolieren von `<color>`-Werten werden diese zuerst in einen bestimmten Farbraum umgewandelt und dann jede Komponente der [berechneten Werte](/de/docs/Web/CSS/computed_value) linear interpoliert, wobei die Geschwindigkeit der Interpolation durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bei Übergängen und Animationen bestimmt wird. Der Standardfarbraum für die Interpolation ist Oklab, kann jedoch in einigen farbbezogenen funktionalen Notationen durch {{CSSXref("&lt;color-interpolation-method&gt;")}} überschrieben werden.

### Interpolation mit fehlenden Komponenten

#### Interpolieren von Farben im gleichen Raum

Beim Interpolieren von Farben, die sich exakt im Interpolationsfarbraum befinden, werden fehlende Komponenten einer Farbe durch vorhandene Werte derselben Komponenten der anderen Farbe ersetzt.
Die folgenden beiden Ausdrücke sind beispielsweise äquivalent:

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> [!NOTE]
> Wenn eine Komponente in beiden Farben fehlt, wird diese Komponente nach der Interpolation auch fehlen.

#### Interpolieren von Farben aus verschiedenen Räumen: Analoge Komponenten

Wenn eine zu interpolierende Farbe nicht im Interpolationsfarbraum ist, werden deren fehlende Komponenten anhand von **analogen Komponenten** derselben Kategorie wie in der folgenden Tabelle beschrieben, in die konvertierte Farbe übertragen:

| Kategorie     | Analoge Komponenten     |
| ------------- | ----------------------- |
| Rottöne       | `R`, `X`                |
| Grüntöne      | `G`, `Y`                |
| Blautöne      | `B`, `Z`                |
| Helligkeit    | `L`                     |
| Buntheit      | `C`, `S`                |
| Farbton       | `H`                     |
| a             | `a`                     |
| b             | `b`                     |

Beispielsweise:

- `X` (`0.2`) in `color(xyz 0.2 0.1 0.6)` ist analog zu `R` (`50%`) in `rgb(50% 70% 30%)`.
- `H` (`0deg`) in `hsl(0deg 100% 80%)` ist analog zu `H` (`140`) in `oklch(80% 0.1 140)`.

Verwendung von Oklch als Interpolationsfarbraum und den beiden Farben im Beispiel unten:

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

Das Vorverarbeitungsverfahren ist:

1. Ersetzen Sie die fehlenden Komponenten beider Farben durch einen Nullwert:

   ```css
   lch(80% 30 0)
   color(display-p3 0.7 0.5 0)
   ```

2. Konvertieren Sie beide Farben in den Interpolationsfarbraum:

   ```css
   oklch(83.915% 0.0902 0.28)
   oklch(63.612% 0.1522 78.748)
   ```

3. Wenn eine Komponente der konvertierten Farben analog zu einer fehlenden Komponente in der entsprechenden Originalfarbe ist, setzen Sie sie auf eine fehlende Komponente zurück:

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. Ersetzen Sie jede fehlende Komponente durch dieselbe Komponente aus der anderen konvertierten Farbe:

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## Barrierefreiheit

Einige Menschen haben Schwierigkeiten, Farben zu unterscheiden. Die [WCAG 2.2](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Use_of_color) Empfehlung rät dringend davon ab, Farbe als einziges Mittel zur Übermittlung einer bestimmten Nachricht, Aktion oder eines Ergebnisses zu verwenden. Weitere Informationen finden Sie unter [Farbe und Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast).

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erkundung von Farbwerten

In diesem Beispiel stellen wir ein `<div>` und ein Texteingabefeld bereit. Bei Eingabe eines gültigen Farbwerts in das Eingabefeld nimmt das `<div>` diese Farbe an, sodass Sie unsere Farbwerte testen können.

#### HTML

```html
<div></div>
<hr />
<label for="color">Geben Sie einen gültigen Farbwert ein:</label>
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
    divElem.textContent = "Ungültiger Farbwert";
  }
});
```

#### Ergebnis

{{EmbedLiveSample("exploring_color_values", "100%", 300)}}

### Vollständig gesättigte sRGB-Farben erzeugen

In diesem Beispiel werden vollständig gesättigte sRGB-Farben im sRGB-Farbraum gezeigt.

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

### Erzeugung verschiedener Rottöne

In diesem Beispiel werden Rottöne unterschiedlicher Schattierungen im sRGB-Farbraum gezeigt.

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

### Erstellen von Rottönen mit unterschiedlicher Sättigung

In diesem Beispiel werden Rottöne unterschiedlicher Sättigung im sRGB-Farbraum gezeigt.

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
- {{CSSXref("&lt;hue&gt;")}}: der Datentyp, der den Farbtonwinkel einer Farbe repräsentiert
- {{CSSXref("color")}}, {{CSSXref("background-color")}}, {{CSSXref("border-color")}}, {{CSSXref("box-shadow")}}, {{CSSXref("outline-color")}}, {{CSSXref("text-shadow")}}: häufige Eigenschaften, die `<color>` verwenden
- [Anwenden von Farben auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [Verwendung relativer Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors)
- [Neue Funktionen, Verläufe und Farbtöne in CSS Farben (Level 4)](/en-US/blog/css-color-module-level-4/) im MDN Blog (2023)
