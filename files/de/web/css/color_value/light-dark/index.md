---
title: light-dark()
slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#color_functions) ermöglicht das Festlegen von zwei Farben für eine Eigenschaft - es wird eine der beiden Farboptionen zurückgegeben, indem erkannt wird, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat - ohne dass die Themenfarben innerhalb einer [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Medienfunktion](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) abgefragt werden müssen. Benutzer können ihre Farbschema-Vorlieben über ihre Betriebssystemeinstellungen (z.B. helles oder dunkles Modus) oder ihre Benutzeragent-Einstellungen angeben. Die `light-dark()`-Funktion ermöglicht es, zwei Farbwerte zu liefern, wobei jeder `<color>` Wert akzeptiert wird. Die `light-dark()` CSS-Funktion gibt den ersten Wert zurück, wenn die Benutzerpräferenz auf `light` gesetzt ist oder keine Präferenz festgelegt ist, und den zweiten Wert, wenn die Benutzerpräferenz auf `dark` gesetzt ist.

Um die Unterstützung für die `light-dark()` Farbfunktion zu ermöglichen, muss das {{CSSXref("color-scheme")}} den Wert `light dark` haben, der normalerweise auf der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) gesetzt ist.

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

Funktionelle Notation: `light-dark(light-color, dark-color)`

- `light-color`

  - : {{CSSXref("&lt;color&gt;")}} Wert, der für helles {{CSSXref("color-scheme")}} festgelegt werden soll.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für dunkles {{CSSXref("color-scheme")}} festgelegt werden soll.

## Formale Syntax

{{CSSSyntax}}

## Beispiel

### Farben basierend auf dem Farbschema festlegen

Standardmäßig hängt die von der `light-dark()` Farbfunktions zurückgegebene Farbe in unterstützenden Browsern von der vom Benutzer über die Betriebssystemeinstellungen festgelegten Präferenz ab (z.B. hell oder dunkel Modus) oder von einer Benutzeragent-Einstellung. Sie können diese Einstellung auch in den {{Glossary("developer_tools", "Entwicklertools")}} des Browsers ändern.

#### HTML

Wir fügen drei Abschnitte ein, um helle Farben, dunkle Farben und die basierend auf dem bevorzugten Farbschema des Benutzers ausgewählten Farben gezielt zu steuern.

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

Wir definieren Farben für sowohl helle als auch dunkle Themen. Außerdem definieren wir `color-scheme` für das Dokument auf `:root`, um die `light-dark()` Farbfunktion für das gesamte Dokument zu aktivieren.

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

Zusätzlich zur Aktivierung der `light-dark()`-Funktion ermöglicht die `color-scheme` Eigenschaft das Überschreiben eines Benutzerfarbschemas für Dokumentabschnitte. Das Erzwingen eines Seitenbereichs zur Verwendung eines ausschließlich hellen oder dunklen Farbschemas kann erfolgen, indem die `color-scheme` Eigenschaft auf `light` oder `dark` gesetzt wird.

> [!NOTE]
> Im Allgemeinen sollte dies nicht getan werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Benutzer eine Präferenz festgelegt hat, sollten Sie im Allgemeinen ihre Präferenzen nicht überschreiben.

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
- [CSS colors](/de/docs/Web/CSS/CSS_colors) Modul
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) {{cssxref("@media")}} Funktion
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [WCAG: Farbenkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-Custom Properties](/de/docs/Web/CSS/--*) und {{cssxref("var")}}
