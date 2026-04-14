---
title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
l10n:
  sourceCommit: f07826b83e8d2af50d69e3ff28c527d4ef572c19
---

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) akzeptiert zwei Farben oder zwei Bilder und gibt basierend auf dem aktiven Farbschema eine Farbe oder ein Bild zurück, ohne ein [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) [Medienmerkmal](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) zu benötigen.

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

Die `light-dark()`-Funktion hat zwei Formen:

- Akzeptiert zwei `<color>` Werte:
  - `<color>` (hell)
    - : Der {{CSSXref("&lt;color&gt;")}}-Wert wird verwendet, wenn das {{CSSXref("color-scheme")}} `light` ist oder keine Präferenz gesetzt ist.
  - `<color>` (dunkel)
    - : Der {{CSSXref("&lt;color&gt;")}}-Wert wird verwendet, wenn das {{CSSXref("color-scheme")}} `dark` ist.
- Akzeptiert zwei `<image>` Werte:
  - `<image>` (hell)
    - : Der {{CSSXref("&lt;image&gt;")}}-Wert wird verwendet, wenn das {{CSSXref("color-scheme")}} `light` ist oder keine Präferenz gesetzt ist.
  - `<image>` (dunkel)
    - : Der {{CSSXref("&lt;image&gt;")}}-Wert wird verwendet, wenn das {{CSSXref("color-scheme")}} `dark` ist.
  - `none`
    - : Das `none`-Schlüsselwort erzeugt ein vollständig transparentes Bild ohne natürliche Größe.

## Beschreibung

Benutzer können ihre Farbschema-Präferenz über ihre Betriebssystemeinstellungen (z. B. hell oder dunkel Modus) oder ihre Benutzeragenten-Einstellungen angeben. Die `light-dark()` Funktion ermöglicht es, entweder zwei Farbwerte, wobei jeder `<color>`-Wert akzeptiert wird, oder zwei Bildwerte, wobei jeder `<image>`-Wert akzeptiert wird, bereitzustellen. Die `light-dark()` Funktion gibt den ersten Wert zurück, wenn das verwendete Farbschema `light` ist oder keine Präferenz gesetzt ist, und den zweiten Wert, wenn das verwendete Farbschema `dark` ist.

Um die Unterstützung für die `light-dark()`-Farb-Funktion zu aktivieren, muss das {{CSSXref("color-scheme")}} den Wert `light dark` haben, normalerweise auf der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) gesetzt.

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

### Farben basierend auf einem Farbschema setzen

Standardmäßig hängt in unterstützenden Browsern die von der `light-dark()`-Farb-Funktion zurückgegebene Farbe von der Benutzerpräferenz ab, die über die Einstellungen eines Betriebssystems (z. B. hell oder dunkel Modus) oder von einer Benutzeragenten-Einstellung festgelegt wurde. Sie können diese Einstellung auch in den {{Glossary("developer_tools", "Entwicklerwerkzeuge")}} des Browsers ändern.

#### HTML

Wir fügen drei Abschnitte hinzu, um helle Farben, dunkle Farben und die Farben anzusteuern, die basierend auf dem bevorzugten Farbschema des Benutzers ausgewählt wurden.

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

Wir fügen Farben für sowohl helle als auch dunkle Themen hinzu. Wir definieren auch `color-scheme` für das Dokument auf dem `:root`, um die `light-dark()`-Farb-Funktion für das gesamte Dokument zu aktivieren.

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

Zusätzlich zur Aktivierung der `light-dark()`-Funktion ermöglicht die `color-scheme`-Eigenschaft, das Farbschema eines Benutzers für Dokumentabschnitte zu überschreiben. Um einen Seitenteil nur ein helles oder dunkles Farbschema verwenden zu lassen, kann die `color-scheme`-Eigenschaft auf `light` oder `dark` gesetzt werden.

> [!NOTE]
> Dies sollte im Allgemeinen nicht getan werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Benutzer eine Präferenz festgelegt hat, sollten Sie diese im Allgemeinen nicht überschreiben.

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

{{EmbedLiveSample("setting_colors_based_on_color_scheme", "100%", 500)}}

### Verlaufs-Hintergrund basierend auf einem Farbschema setzen

Dieses Beispiel verwendet denselben HTML-Code wie das vorherige Beispiel, aber mit einem `<div>` anstelle eines `<p>`.

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

Zuerst definieren wir helle und dunkle `linear-gradient()`-Werte als benutzerdefinierte Eigenschaften.

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

Dann verwenden wir die benutzerdefinierten Eigenschaften mit `light-dark()`, um die `background-image`-Eigenschaft basierend auf dem aktiven Farbschema festzulegen.

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
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) {{cssxref("@media")}} Merkmal
- [`contrast()`](/de/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
