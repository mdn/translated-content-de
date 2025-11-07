---
title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>` Funktion](/de/docs/Web/CSS/Reference/Values/Functions#color_functions) ermöglicht das Setzen von zwei Farben für eine Eigenschaft - dabei wird eine der beiden Farboptionen zurückgegeben, indem erkannt wird, ob der Entwickler ein helles oder dunkles Farbschema eingestellt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat - ohne dass es notwendig ist, die Themenfarben in eine [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) Abfrage einzuschließen.
Benutzer können ihre Farbschema-Präferenz über ihre Betriebssystemeinstellungen (z. B. heller oder dunkler Modus) oder ihre User-Agent-Einstellungen angeben. Die `light-dark()` Funktion ermöglicht die Angabe von zwei Farbwerten, wobei jeder `<color>` Wert akzeptiert wird. Die `light-dark()` CSS-Farb-Funktion gibt den ersten Wert zurück, wenn die Benutzerpräferenz auf `light` eingestellt ist oder keine Präferenz festgelegt ist, und den zweiten Wert, wenn die Präferenz auf `dark` eingestellt ist.

Um die Unterstützung für die `light-dark()` Farb-Funktion zu aktivieren, muss die {{CSSXref("color-scheme")}} den Wert `light dark` haben, der normalerweise auf der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) gesetzt wird.

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
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für ein helles {{CSSXref("color-scheme")}} gesetzt werden soll.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für ein dunkles {{CSSXref("color-scheme")}} gesetzt werden soll.

## Formale Syntax

{{CSSSyntax}}

## Beispiel

### Farben basierend auf dem Farbschema setzen

Standardmäßig hängt in unterstützenden Browsern die von der `light-dark()` Farbfunktion zurückgegebenen Farbe von der durch die Betriebssystemeinstellungen gesetzten Benutzerpräferenz ab (z. B. heller oder dunkler Modus) oder von einer Benutzeragenten-Einstellung. Sie können diese Einstellung auch in den {{Glossary("developer_tools", "Entwicklertools")}} des Browsers ändern.

#### HTML

Wir fügen drei Abschnitte ein, um helle Farben, dunkle Farben und die Farben, die auf dem bevorzugten Farbschema des Benutzers basieren, zu ermöglichen.

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

Wir fügen Farben für sowohl helle als auch dunkle Themen hinzu. Wir definieren auch `color-scheme` für das Dokument auf `:root`, um die `light-dark()` Farb-Funktion für das gesamte Dokument zu aktivieren.

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

Zusätzlich zur Aktivierung der `light-dark()` Funktion ermöglicht die `color-scheme` Eigenschaft das Überschreiben eines Benutzerfarbschemas für Dokumentabschnitte. Das Erzwingen eines Seitenabschnitts zur Verwendung nur eines hellen oder dunklen Farbschemas kann durch das Setzen der `color-scheme` Eigenschaft auf `light` oder `dark` geschehen.

> [!NOTE]
> Im Allgemeinen sollte dies nicht getan werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Benutzer eine Präferenz geäußert hat, sollten Sie diese im Allgemeinen nicht überschreiben.

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
- [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) {{cssxref("@media")}} Feature
- [`contrast()`](/de/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS kundenspezifische Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
