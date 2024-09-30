---
title: light-dark()
slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Functions#color_functions) ermöglicht es, zwei Farben für eine Eigenschaft festzulegen – eine der beiden Farboptionen zurückzugeben, indem erkannt wird, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat – ohne dass die Themenfarben in eine Abfrage der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) eingeschlossen werden müssen. Benutzer können ihre Farbschema-Präferenz über die Einstellungen ihres Betriebssystems angeben (z. B. Licht- oder Dunkelmodus) oder über die Einstellungen ihres Benutzeragenten. Die `light-dark()`-Funktion ermöglicht es, zwei Farbwerte bereitzustellen, wobei jeder `<color>`-Wert akzeptiert wird. Die `light-dark()` CSS-Farbfunktion gibt den ersten Wert zurück, wenn die Benutzerpräferenz auf `light` gesetzt ist oder keine Präferenz gesetzt ist, und den zweiten Wert, wenn die Benutzerpräferenz auf `dark` gesetzt ist.

Um Unterstützung für die `light-dark()`-Farbfunktion zu ermöglichen, muss die {{CSSXref("color-scheme")}} den Wert `light dark` haben, üblicherweise auf der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) gesetzt.

```css
:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

## Syntax

```css
/* Named color values */
color: light-dark(black, white);

/* RGB color values */
color: light-dark(rgb(0 0 0), rgb(255 255 255));

/* Custom properties */
color: light-dark(var(--light), var(--dark));
```

### Werte

Funktionale Notation: `light-dark(light-color, dark-color)`

- `light-color`

  - : {{CSSXref("&lt;color&gt;")}}-Wert, der für das helle {{CSSXref("color-scheme")}} festgelegt werden soll.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}}-Wert, der für das dunkle {{CSSXref("color-scheme")}} festgelegt werden soll.

### Formale Syntax

{{csssyntax}}

## Beispiel

### Farben abhängig vom Farbschema einstellen

Standardmäßig hängt in unterstützten Browsern die von der `light-dark()`-Farbfunktion zurückgegebene Farbe von der Benutzerpräferenz ab, die über die Einstellungen des Betriebssystems festgelegt wurde (z. B. Licht- oder Dunkelmodus) oder von einer Benutzereinstellung im Browser. Sie können diese Einstellung auch in den [Entwicklertools](/de/docs/Glossary/developer_tools) des Browsers ändern.

#### HTML

Wir fügen drei Abschnitte ein, um helle Farben, dunkle Farben und die basierend auf dem bevorzugten Farbschema des Benutzers ausgewählten Farben anzuvisieren.

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

Wir fügen Farben für sowohl helle als auch dunkle Themen ein. Wir definieren auch `color-scheme` für das Dokument im `:root`, um die `light-dark()`-Farbfunktion für das gesamte Dokument zu ermöglichen.

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

Zusätzlich zur Aktivierung der `light-dark()`-Funktion ermöglicht die `color-scheme`-Eigenschaft das Überschreiben des Farbschemas eines Benutzers für Dokumentabschnitte. Das Erzwingen eines Seitenabschnitts, nur ein helles oder dunkles Farbschema zu verwenden, kann durch Setzen der `color-scheme`-Eigenschaft auf `light` oder `dark` erfolgen.

> [!NOTE]
> Im Allgemeinen sollte dies nicht getan werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Benutzer eine Präferenz festgelegt hat, sollten Sie deren Präferenzen im Allgemeinen nicht überschreiben.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXref("color-scheme")}}
- {{CSSXref("&lt;color&gt;")}}
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) {{cssxref("@media")}}-Feature
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [WCAG: Farbenkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und {{cssxref("var")}}
