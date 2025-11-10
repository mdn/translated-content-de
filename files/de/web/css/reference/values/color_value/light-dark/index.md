---
title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>`-Funktion](/de/docs/Web/CSS/Reference/Values/Functions#color_functions) ermöglicht es, zwei Farben für eine Eigenschaft festzulegen - und eine der beiden Farboptionen zurückzugeben, indem erkannt wird, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat - ohne die Farben des Themas innerhalb einer [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)-[Medienfeature](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features)-Abfrage einzuschließen. Benutzer können ihre Farbschema-Präferenz über ihre Betriebssystemeinstellungen (z.B. heller oder dunkler Modus) oder ihre Benutzeragenten-Einstellungen angeben. Die `light-dark()`-Funktion ermöglicht es, zwei Farbwerte bereitzustellen, wobei jeder `<color>`-Wert akzeptiert wird. Die `light-dark()`-CSS-Farb-Funktion gibt den ersten Wert zurück, wenn die Benutzerpräferenz auf `light` gesetzt ist oder keine Präferenz festgelegt ist, und den zweiten Wert, wenn die Präferenz des Benutzers auf `dark` gesetzt ist.

Um die Unterstützung für die `light-dark()`-Farb-Funktion zu aktivieren, muss {{CSSXref("color-scheme")}} den Wert `light dark` haben, normalerweise auf der {{CSSXref(":root")}}-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) festgelegt.

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

  - : {{CSSXref("&lt;color&gt;")}}-Wert, der für ein helles {{CSSXref("color-scheme")}} festgelegt wird.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}}-Wert, der für ein dunkles {{CSSXref("color-scheme")}} festgelegt wird.

## Formale Syntax

{{CSSSyntax}}

## Beispiel

### Farben basierend auf Farbschema festlegen

Standardmäßig hängt die von der `light-dark()`-Farb-Funktion zurückgegebene Farbe in unterstützenden Browsern von der Benutzerpräferenz ab, die über die Einstellungen des Betriebssystems (z.B. heller oder dunkler Modus) oder aus einer Benutzeragenten-Einstellung festgelegt wird. Sie können diese Einstellung auch in den {{Glossary("developer_tools", "Entwicklerwerkzeugen")}} des Browsers ändern.

#### HTML

Wir fügen drei Abschnitte ein, um helle Farben, dunkle Farben und die basierend auf dem bevorzugten Farbschema des Benutzers ausgewählten Farben zu ermöglichen.

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

Zusätzlich zur Aktivierung der `light-dark()`-Funktion ermöglicht die Eigenschaft `color-scheme` das Überschreiben des Farbschemas eines Benutzers für Dokumentabschnitte. Das Erzwingen eines Seitenabschnitts, nur ein helles oder dunkles Farbschema zu verwenden, kann durch Einstellen der `color-scheme`-Eigenschaft auf `light` oder `dark` erfolgen.

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
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) {{cssxref("@media")}}-Feature
- [`contrast()`](/de/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS-benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und {{cssxref("var")}}
