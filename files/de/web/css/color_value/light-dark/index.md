---
title: light-dark()
slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#color_functions) ermöglicht es, zwei Farben für eine Eigenschaft festzulegen – und eine der beiden Farboptionen zurückzugeben, indem erkannt wird, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat – ohne die Themenfarben innerhalb einer [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Medienfunktion](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) abfragen zu müssen.

Benutzer können ihre Farbschema-Präferenz über die Einstellungen ihres Betriebssystems (z. B. heller oder dunkler Modus) oder die Einstellungen ihres User Agents angeben. Die Funktion `light-dark()` ermöglicht die Angabe von zwei Farbwerten, wobei jeder `<color>` Wert akzeptiert wird. Die `light-dark()` CSS-Farb-Funktion gibt den ersten Wert zurück, wenn die Benutzerpräferenz auf `light` gesetzt ist oder keine Präferenz gesetzt ist, und den zweiten Wert, wenn die Benutzerpräferenz auf `dark` gesetzt ist.

Um die Unterstützung für die `light-dark()` Farb-Funktion zu aktivieren, muss die {{CSSXref("color-scheme")}} den Wert `light dark` haben, normalerweise auf der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) gesetzt.

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

  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das helle {{CSSXref("color-scheme")}} festgelegt werden soll.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das dunkle {{CSSXref("color-scheme")}} festgelegt werden soll.

## Formale Syntax

{{CSSSyntax}}

## Beispiel

### Farben basierend auf dem Farbschema festlegen

Standardmäßig hängt in unterstützenden Browsern die von der `light-dark()` Farb-Funktion zurückgegebene Farbe von der Benutzereinstellung ab, die über die Einstellungen eines Betriebssystems (z. B. heller oder dunkler Modus) oder eine Einstellung des User Agents festgelegt wird. Sie können diese Einstellung auch in den {{Glossary("developer_tools", "Entwicklerwerkzeugen")}} des Browsers ändern.

#### HTML

Wir fügen drei Abschnitte hinzu, um helle Farben, dunkle Farben und die auf dem bevorzugten Farbschema des Benutzers ausgewählten Farben gezielt anzusprechen.

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

Wir fügen Farben für sowohl helle als auch dunkle Themen hinzu. Wir definieren auch `color-scheme` für das Dokument auf dem `:root`, um die `light-dark()` Farb-Funktion für das gesamte Dokument zu aktivieren.

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

Zusätzlich zur Aktivierung der `light-dark()` Funktion ermöglicht die `color-scheme` Eigenschaft das Überschreiben eines Benutzerfarbschemas für Dokumentabschnitte. Das Erzwingen eines Seitenabschnitts, nur ein helles oder dunkles Farbschema zu verwenden, kann durch Setzen der `color-scheme` Eigenschaft auf `light` oder `dark` erfolgen.

> [!NOTE]
> Im Allgemeinen sollte dies nicht getan werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Benutzer eine Präferenz festgelegt hat, sollten Sie diese im Allgemeinen nicht überschreiben.

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
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) {{cssxref("@media")}} Funktion
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und {{cssxref("var")}}
