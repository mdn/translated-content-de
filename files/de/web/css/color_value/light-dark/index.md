---
title: light-dark()
slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Functions#color_functions) ermöglicht das Setzen von zwei Farben für eine Eigenschaft. Dabei wird eine der beiden Farboptionen zurückgegeben, indem erkannt wird, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat – ohne die thematischen Farben innerhalb einer Abfrage der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) eingrenzen zu müssen. Benutzer können ihre Farbthemenpräferenz über ihre Betriebssystemeinstellungen (z. B. heller oder dunkler Modus) oder ihre Benutzereinstellungen angeben. Die `light-dark()` Funktion ermöglicht die Bereitstellung von zwei Farbwerten, wobei jeder `<color>` Wert akzeptiert wird. Die `light-dark()` CSS-Funktion gibt den ersten Wert zurück, wenn die Benutzerpräferenz auf `light` gesetzt ist, oder wenn keine Präferenz festgelegt ist, und den zweiten Wert, wenn die Benutzerpräferenz auf `dark` gesetzt ist.

Um die Unterstützung für die `light-dark()` Farb-Funktion zu aktivieren, muss die {{CSSXref("color-scheme")}} den Wert `light dark` haben, üblicherweise festgelegt auf der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes).

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

Funktionsnotation: `light-dark(light-color, dark-color)`

- `light-color`

  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das helle {{CSSXref("color-scheme")}} gesetzt wird.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das dunkle {{CSSXref("color-scheme")}} gesetzt wird.

### Formale Syntax

{{csssyntax}}

## Beispiel

### Farben basierend auf dem Farbschema setzen

Standardmäßig hängt die Farbe, die durch die `light-dark()` Funktion in unterstützenden Browsern zurückgegeben wird, von der Benutzervorliebe ab, die über die Einstellungen des Betriebssystems (z. B. heller oder dunkler Modus) oder über eine Benutzereinstellung vorgenommen wurde. Diese Einstellung kann auch in den [Entwicklertools](/de/docs/Glossary/developer_tools) des Browsers geändert werden.

#### HTML

Wir inkludieren drei Abschnitte, um auf helle Farben, dunkle Farben und die basierend auf dem Farbthema des Nutzers ausgewählten Farben abzuzielen.

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

Wir definieren Farben sowohl für helle als auch dunkle Themen. Ebenso definieren wir `color-scheme` für das Dokument im `:root`, um die `light-dark()` Farb-Funktion für das gesamte Dokument zu aktivieren.

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

Neben der Aktivierung der `light-dark()` Funktion ermöglicht die `color-scheme` Eigenschaft das Überschreiben des Farbthemas eines Benutzers für Dokumentabschnitte. Um einen Seitenabschnitt nur mit einem hellen oder dunklen Farbschema zu verwenden, kann die `color-scheme` Eigenschaft auf `light` oder `dark` gesetzt werden.

> [!NOTE]
> Generell sollte dies nicht gemacht werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Nutzer eine Präferenz gesetzt hat, sollte diese im Allgemeinen nicht überschrieben werden.

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
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) {{cssxref("@media")}} Funktion
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und {{cssxref("var")}}
