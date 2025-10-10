---
title: light-dark()
slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`light-dark()`** [CSS](/de/docs/Web/CSS) [`<color>` Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#color_functions) ermöglicht es, zwei Farben für eine Eigenschaft festzulegen - und eine der beiden Farbauswahlmöglichkeiten zurückzugeben, indem erkannt wird, ob der Entwickler ein helles oder dunkles Farbschema festgelegt hat oder der Benutzer ein helles oder dunkles Farbthema angefordert hat - ohne die Themenfarben in eine Abfrage der [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) einfügen zu müssen. Benutzer können ihre Farbschema-Präferenz über ihre Betriebssystemeinstellungen (zum Beispiel, Helligkeit oder Dunkelmodus) oder ihre Benutzereinstellungen angeben. Die `light-dark()` Funktion erlaubt es, zwei Farbwerte bereitzustellen, wobei jeder `<color>` Wert akzeptiert wird. Die `light-dark()` CSS-Farbfunktions gibt den ersten Wert zurück, wenn die Benutzereinstellung auf `light` gesetzt ist oder keine Präferenz festgelegt ist, und den zweiten Wert, wenn die Benutzereinstellung auf `dark` gesetzt ist.

Um Unterstützung für die `light-dark()` Farbfunktion zu ermöglichen, muss der Wert von {{CSSXref("color-scheme")}} `light dark` gesetzt sein, normalerweise auf der {{CSSXref(":root")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes).

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
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das helle {{CSSXref("color-scheme")}} festgelegt werden soll.

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} Wert, der für das dunkle {{CSSXref("color-scheme")}} festgelegt werden soll.

## Formale Syntax

{{CSSSyntax}}

## Beispiel

### Farben basierend auf dem Farbschema festlegen

Standardmäßig hängt in unterstützenden Browsern die von der `light-dark()` Farbfunktion zurückgegebene Farbe von der Benutzereinstellung ab, die über die Systemeinstellungen des Betriebssystems (zum Beispiel, heller oder dunkler Modus) oder über eine Benutzereinstellung festgelegt wurde. Diese Einstellung kann auch in den {{Glossary("developer_tools", "Entwickler-Tools")}} des Browsers geändert werden.

#### HTML

Wir fügen drei Abschnitte ein, um Lichtfarben, Dunkelfarben und die basierend auf dem bevorzugten Farbschema des Benutzers ausgewählten Farben anzuvisieren.

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

Wir fügen Farben für sowohl helle als auch dunkle Themen hinzu. Wir definieren auch `color-scheme` für das Dokument auf `:root`, um die `light-dark()` Farbfunktion für das gesamte Dokument zu ermöglichen.

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

Neben der Aktivierung der `light-dark()` Funktion ermöglicht die `color-scheme` Eigenschaft die Überschreibung eines Benutzer-Farbschemas für Dokumentabschnitte. Das Erzwingen eines Seitenabschnitts, nur ein helles oder dunkles Farbschema zu verwenden, kann durch das Einstellen der `color-scheme` Eigenschaft auf `light` oder `dark` geschehen.

> [!NOTE]
> Dies sollte im Allgemeinen nicht getan werden, wir verwenden es hier zu Demonstrationszwecken. Wenn der Benutzer eine Präferenz getroffen hat, sollten Sie im Allgemeinen seine Präferenzen nicht überschreiben.

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
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) {{cssxref("@media")}} Feature
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [WCAG: Farbkonstrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--) und {{cssxref("var")}}
