---
title: light-dark()
slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>` Funktion](/de/docs/Web/CSS/CSS_Functions#color_functions) ermöglicht es, zwei Farben für eine Eigenschaft festzulegen - indem eine der beiden Farboptionen zurückgegeben wird, basierend darauf, ob der Entwickler ein helles oder dunkles Farbschema gesetzt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat - ohne die Themafarben innerhalb einer [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) [Medienfeature-](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) Abfrage einzuschließen. Benutzer können ihre Farbschema-Präferenz über ihre Betriebssystemeinstellungen (z.B. hellen oder dunklen Modus) oder ihre User-Agent-Einstellungen angeben. Die `light-dark()` Funktion ermöglicht es, zwei Farbwerte zu definieren, wobei jeder `<color>` Wert akzeptiert wird. Die `light-dark()` CSS-Farb-Funktion gibt den ersten Wert zurück, wenn die Benutzerpräferenz auf `light` gesetzt ist oder keine Präferenz gesetzt ist, und den zweiten Wert, wenn die Benutzerpräferenz auf `dark` gesetzt ist.

Um die Unterstützung für die `light-dark()` Farbfunktion zu aktivieren, muss der Wert von {{CSSXref("color-scheme")}} `light dark` sein, üblicherweise auf der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) gesetzt.

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

  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das helle {{CSSXref("color-scheme")}} gesetzt werden soll.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das dunkle {{CSSXref("color-scheme")}} gesetzt werden soll.

## Formale Syntax

{{CSSSyntax}}

## Beispiel

### Festlegen von Farben basierend auf dem Farbschema

Standardmäßig hängt in unterstützten Browsern die von der `light-dark()` Farbfunktion zurückgegebene Farbe von der im Betriebssystem des Benutzers festgelegten Präferenz (z.B. heller oder dunkler Modus) oder von einer User-Agent-Einstellung ab. Diese Einstellung kann auch in den {{Glossary("developer_tools", "Entwicklertools")}} des Browsers geändert werden.

#### HTML

Wir fügen drei Abschnitte ein, um helle Farben, dunkle Farben und die basierend auf dem bevorzugten Farbschema des Benutzers ausgewählten Farben anzusprechen.

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

Wir fügen Farben für sowohl helle als auch dunkle Themen ein. Wir definieren auch `color-scheme` für das Dokument auf dem `:root`, um die `light-dark()` Farbfunktion für das gesamte Dokument zu aktivieren.

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

Zusätzlich zur Aktivierung der `light-dark()` Funktion ermöglicht die `color-scheme` Eigenschaft das Überschreiben des Farbschemas eines Benutzers für Dokumentabschnitte. Ein Seitenabschnitt kann gezwungen werden, nur ein helles oder dunkles Farbschema zu verwenden, indem die `color-scheme` Eigenschaft auf `light` oder `dark` gesetzt wird.

> [!NOTE]
> Im Allgemeinen sollte dies nicht getan werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Benutzer eine Präferenz getroffen hat, sollten Sie diese im Allgemeinen nicht überschreiben.

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
