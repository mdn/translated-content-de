---
title: light-dark()
slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Functions#color_functions) ermöglicht es, zwei Farben für eine Eigenschaft festzulegen - eine der beiden Farboptionen wird zurückgegeben, indem erkannt wird, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat - ohne die Themenfarben in einer [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) umschließen zu müssen.
Benutzer können ihre Farbschema-Präferenz über ihre Betriebssystemeinstellungen (z.B. heller oder dunkler Modus) oder ihre Benutzereinstellungen angeben. Die Funktion `light-dark()` ermöglicht es, zwei Farbwerte bereitzustellen, wobei jeder `<color>`-Wert akzeptiert wird. Die CSS-Funktion `light-dark()` gibt den ersten Wert zurück, wenn die Benutzerpräferenz auf `light` eingestellt ist oder keine Präferenz gesetzt ist, und den zweiten Wert, wenn die Benutzerpräferenz auf `dark` eingestellt ist.

Um die Unterstützung für die `light-dark()`-Funktion zu aktivieren, muss der Wert von {{CSSXref("color-scheme")}} auf `light dark` gesetzt sein, normalerweise in der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes).

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
/* Benannte Farbwerte */
color: light-dark(black, white);

/* RGB-Farbwerte */
color: light-dark(rgb(0 0 0), rgb(255 255 255));

/* Benutzerdefinierte Eigenschaften */
color: light-dark(var(--light), var(--dark));
```

### Werte

Funktionale Notation: `light-dark(light-color, dark-color)`

- `light-color`

  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das helle {{CSSXref("color-scheme")}} festgelegt werden soll.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das dunkle {{CSSXref("color-scheme")}} festgelegt werden soll.

### Formale Syntax

{{csssyntax}}

## Beispiel

### Farben basierend auf dem Farbschema festlegen

Standardmäßig hängt die von der Funktion `light-dark()` zurückgegebene Farbe in unterstützenden Browsern von der durch das Betriebssystem oder die Benutzereinstellung festgelegten Benutzerpräferenz ab (z.B. heller oder dunkler Modus). Sie können diese Einstellung auch in den {{glossary("Entwicklerwerkzeugen")}} des Browsers ändern.

#### HTML

Wir fügen drei Abschnitte ein, um helle Farben, dunkle Farben und die Farben gezielt anzusprechen, die basierend auf dem bevorzugten Farbschema des Benutzers ausgewählt werden.

```html
<h1><code>light-dark()</code> CSS-Funktion</h1>
<section>
  <h2>Automatisch</h2>
  <p>Dieser Abschnitt reagiert auf die Systemeinstellung oder die Benutzereinstellung.</p>
</section>
<section class="light">
  <h2>Hell</h2>
  <p>
    Dieser Abschnitt wird hell sein aufgrund des <code>color-scheme: light;</code>.
  </p>
</section>
<section class="dark">
  <h2>Dunkel</h2>
  <p>Dieser Abschnitt wird dunkel sein aufgrund des <code>color-scheme: dark;</code>.</p>
</section>
```

#### CSS

Wir definieren Farben für sowohl helle als auch dunkle Themen. Wir definieren auch `color-scheme` für das Dokument im `:root`, um die `light-dark()`-Funktion für das gesamte Dokument zu aktivieren.

```css-nolint
:root {
  /* dies muss festgelegt werden, um zwischen hell und dunkel zu wechseln */
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

Zusätzlich zur Aktivierung der `light-dark()`-Funktion ermöglicht die `color-scheme`-Eigenschaft das Überschreiben des Farbschemas eines Benutzers für Dokumentabschnitte. Um einen Seitenabschnitt ausschließlich ein helles oder dunkles Farbschema verwenden zu lassen, kann die `color-scheme`-Eigenschaft auf `light` oder `dark` gesetzt werden.

> [!NOTE]
> Im Allgemeinen sollte dies vermieden werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Benutzer eine Präferenz gemacht hat, sollten Sie ihre Präferenzen in der Regel nicht überschreiben.

```css
.light {
  /* erzwingt helles Farbschema */
  color-scheme: light;
}
.dark {
  /* erzwingt dunkles Farbschema */
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
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) {{cssxref("@media")}} Feature
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) und {{cssxref("var")}}
