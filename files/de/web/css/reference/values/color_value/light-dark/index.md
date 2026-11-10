---
title: "`light-dark()`-CSS-Funktion"
short-title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die **`light-dark()`**-[CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) akzeptiert zwei Farben oder zwei Bilder und gibt abhängig vom aktiven Farbschema eine Farbe oder ein Bild zurück, ohne dass das [Medienmerkmal](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) benötigt wird.

## Syntax

```css-nolint
/* Named color values */
light-dark(
  black,
  white
);

/* RGB color values */
light-dark(
  rgb(0 0 0),
  rgb(255 255 255)
);

/* image url values */
light-dark(
  url("light-icon.png"),
  url("dark-icon.png")
);

/* linear-gradient values */
light-dark(
  linear-gradient(135deg, ghostwhite 20%, tomato),
  linear-gradient(45deg, darkslategray 20%, gold)
);

/* Custom properties */
light-dark(
  var(--light),
  var(--dark)
);
```

### Werte

Die Funktion `light-dark()` hat zwei Formen:

- Sie akzeptiert zwei `<color>`-Werte:
  - `<color>` (hell)
    - : Der {{CSSXref("&lt;color&gt;")}}-Wert, der verwendet wird, wenn das {{CSSXref("color-scheme")}} `light` ist oder keine Präferenz festgelegt wurde.
  - `<color>` (dunkel)
    - : Der {{CSSXref("&lt;color&gt;")}}-Wert, der verwendet wird, wenn das {{CSSXref("color-scheme")}} `dark` ist.
- Sie akzeptiert zwei `<image>`-Werte:
  - `<image>` (hell)
    - : Der {{CSSXref("&lt;image&gt;")}}-Wert, der verwendet wird, wenn das {{CSSXref("color-scheme")}} `light` ist oder keine Präferenz festgelegt wurde.
  - `<image>` (dunkel)
    - : Der {{CSSXref("&lt;image&gt;")}}-Wert, der verwendet wird, wenn das {{CSSXref("color-scheme")}} `dark` ist.
  - `none`
    - : Das Schlüsselwort `none` erzeugt ein vollständig transparentes Bild ohne natürliche Größe.

## Beschreibung

Benutzer können ihre Präferenz für ein Farbschema über die Einstellungen ihres Betriebssystems (z. B. heller oder dunkler Modus) oder ihres User Agents angeben. Mit der Funktion `light-dark()` können entweder zwei Farbwerte angegeben werden, wobei jeder `<color>`-Wert zulässig ist, oder zwei Bildwerte, wobei jeder `<image>`-Wert zulässig ist. Die Funktion `light-dark()` gibt den ersten Wert zurück, wenn das verwendete Farbschema `light` ist oder keine Präferenz festgelegt wurde, und den zweiten Wert, wenn das verwendete Farbschema `dark` ist.

Damit die Farbfunktion `light-dark()` unterstützt wird, muss {{CSSXref("color-scheme")}} den Wert `light dark` haben. Dieser wird üblicherweise auf der [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{CSSXref(":root")}} festgelegt.

```css
:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Farben anhand eines Farbschemas festlegen

In Browsern, die die Funktion unterstützen, hängt die von der Farbfunktion `light-dark()` zurückgegebene Farbe standardmäßig von der Präferenz ab, die in den Einstellungen des Betriebssystems (z. B. heller oder dunkler Modus) oder des User Agents festgelegt wurde. Sie können diese Einstellung auch in den {{Glossary("developer_tools", "Entwicklerwerkzeugen")}} des Browsers ändern.

#### HTML

Wir fügen drei Abschnitte ein, um helle Farben, dunkle Farben und die anhand des bevorzugten Farbschemas des Benutzers ausgewählten Farben gezielt ansprechen zu können.

```html
<h1><code>light-dark()</code> CSS function</h1>
<section>
  <h2>Automatic</h2>
  <p>This section will react to the users system or user agent setting.</p>
</section>
<section class="light">
  <h2>Light</h2>
  <p>
    This section will be light due to the <code>color-scheme: light;</code>.
  </p>
</section>
<section class="dark">
  <h2>Dark</h2>
  <p>This section will be dark due to the <code>color-scheme: dark;</code>.</p>
</section>
```

#### CSS

Wir legen Farben für helle und dunkle Designs fest. Außerdem definieren wir `color-scheme` für das Dokument auf `:root`, damit die Farbfunktion `light-dark()` im gesamten Dokument verwendet werden kann.

```css-nolint
:root {
  /* this has to be set to switch between light or dark */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}
* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}
code {
  color: light-dark(var(--light-code), var(--dark-code));
}
```

Die Eigenschaft `color-scheme` ermöglicht nicht nur die Verwendung der Funktion `light-dark()`, sondern auch, das Farbschema des Benutzers für einzelne Dokumentabschnitte zu überschreiben. Wenn ein Seitenabschnitt ausschließlich ein helles oder dunkles Farbschema verwenden soll, können Sie die Eigenschaft `color-scheme` auf `light` beziehungsweise `dark` setzen.

> [!NOTE]
> Im Allgemeinen sollten Sie dies nicht tun; hier dient es nur zur Veranschaulichung. Wenn ein Benutzer eine Präferenz festgelegt hat, sollten Sie diese in der Regel nicht überschreiben.

```css
.light {
  /* forces light color-scheme */
  color-scheme: light;
}
.dark {
  /* forces dark color-scheme */
  color-scheme: dark;
}
```

```css hidden
section {
  padding: 0.8rem;
}
```

#### Ergebnis

{{EmbedLiveSample("setting_colors_based_on_a_color_scheme", "100%", 500)}}

### Hintergrund mit Farbverlauf anhand eines Farbschemas festlegen

Dieses Beispiel verwendet denselben HTML-Code wie das vorherige Beispiel, enthält aber ein `<div>` anstelle eines `<p>`.

```html hidden
<h1><code>light-dark()</code> CSS function with images</h1>
<p class="supports">
  Your browser does not support <code>light-dark()</code> with images.
</p>
<div class="wrapper">
  <section>
    <h2>Automatic</h2>
    <div></div>
  </section>
  <section class="light">
    <h2>Light</h2>
    <div></div>
  </section>
  <section class="dark">
    <h2>Dark</h2>
    <div></div>
  </section>
</div>
```

#### CSS

```css-nolint hidden
:root {
  /* this has to be set to switch between light or dark */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}
* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}
.wrapper {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
}
.light {
  /* forces light color-scheme */
  color-scheme: light;
}
.dark {
  /* forces dark color-scheme */
  color-scheme: dark;
}
section {
  width: 25%;
  padding: 5px;
  color: light-dark(
    var(--light-code),
    var(--dark-code)
  );
  border: 2px solid light-dark(var(--light-code), var(--dark-code));
}
@supports (background-image: light-dark(url("light.png"), url("dark.png"))) {
  .supports {display:none;}
}
```

Zunächst definieren wir helle und dunkle `linear-gradient()`-Werte als benutzerdefinierte Eigenschaften.

```css
:root {
  /*  light dark gradients  */
  --light-grad: linear-gradient(135deg, var(--light-bg) 20%, var(--light-code));
  --dark-grad: linear-gradient(45deg, var(--dark-bg) 30%, var(--dark-code));
}
```

```css hidden
section div {
  width: 80%;
  aspect-ratio: 1/1;
  margin: auto;
  border: 1px solid light-dark(var(--light-code), var(--dark-code));
}
@supports not (
  background-image: light-dark(url("light.png"), url("dark.png"))
) {
  section div {
    width: 60%;
  }
}
```

Anschließend verwenden wir die benutzerdefinierten Eigenschaften mit `light-dark()`, um die Eigenschaft `background-image` anhand des aktiven Farbschemas festzulegen.

```css-nolint
section div {
  background-image: light-dark(
    var(--light-grad),
    var(--dark-grad)
  );
}
```

#### Ergebnis

{{EmbedLiveSample("setting_gradient_background_based_on_a_color_scheme", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("color-scheme")}}
- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;image&gt;")}}
- Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- {{cssxref("@media")}}-Medienmerkmal [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)
- [`contrast()`](/de/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
