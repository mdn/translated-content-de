---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der `theme_color`-Eintrag wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung festzulegen. Diese Farbe kann auf verschiedene Browser-UI-Elemente angewendet werden, wie z.B. die Symbolleiste, die Adressleiste und die Statusleiste. Sie kann besonders in Kontexten wie dem Aufgabenumschalter oder wenn die App zum Startbildschirm hinzugefügt wird, auffallen.

## Syntax

```json-nolint
/* Valid named color */
"theme_color": "rebeccapurple"

/* Using hexadecimal value */
"theme_color": "#42b5f4"

/* Using RGB value */
"theme_color": "rgb(66 133 244)"
```

### Werte

- `theme_color`

  - : Ein String, der einen gültigen [Farbwert](/de/docs/Web/CSS/color_value) angibt.

    > [!NOTE]
    > Browser können den Alpha-Anteil der Farbe je nach Kontext ignorieren.
    > In den meisten Umgebungen kann `theme_color` nicht transparent sein.
    > Es wird empfohlen, vollständig opake Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um ein konsistentes Verhalten auf verschiedenen Plattformen und in verschiedenen Browsern zu gewährleisten.

## Beschreibung

Obwohl optional, ermöglicht das Festlegen eines `theme_color` Ihnen, die visuelle Identität Ihrer App über die Inhaltsbereiche hinaus zu erweitern. Diese Farbgestaltung kann ein app-ähnlicheres Erlebnis für Ihre Web-App bieten, besonders wenn sie im [Standalone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird. Wählen Sie eine `theme_color`, die zu den Markenvorgaben Ihrer App passt, da dies die Wiedererkennung und das Erinnern der Benutzer verbessern kann, insbesondere wenn Ihre App zusammen mit anderen Anwendungen oder Systemoberflächen betrachtet wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest angegebenen Wert als Standard-Theme-Farbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diesen Standard auf folgende Weisen überschreiben:

- Verwendung des [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Theme-Farbe für eine Webseite angeben, die sich von der im Manifest festgelegten `theme_color` Ihrer App unterscheidet. Dies ermöglicht es Ihnen, unterschiedliche Theme-Farben für einzelne Seiten innerhalb Ihrer App festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media-Queries: Sie können die zu verwendende Theme-Farbe basierend auf den Farbschema-Präferenzen des Benutzers angeben.

  ```html
  <meta
    name="theme-color"
    content="#F4E6D8"
    media="(prefers-color-scheme: light)" />
  <meta
    name="theme-color"
    content="#5D4037"
    media="(prefers-color-scheme: dark)" />
  ```

Diese Überschreibungsmethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzerpräferenzen anzupassen und dadurch die allgemeine Benutzererfahrung zu verbessern.

Browser können die angewendete Theme-Farbe auch basierend auf Benutzerpräferenzen anpassen. Wenn ein Benutzer eine Präferenz für den Hell- oder Dunkelmodus festgelegt hat, können Browser den im Manifest festgelegten `theme_color`-Wert überschreiben, um eine in Ihrer App-CSS festgelegte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Query zu unterstützen.

```css
body {
  background: #f8f9fa;
  color: #212529;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #212529;
    color: #f8f9fa;
  }
}
```

## Beispiele

### Verwendung einer benannten Farbe

```json
{
  "theme_color": "red"
}
```

### Verwendung eines RGB-Werts

```json
{
  "theme_color": "rgb(66, 133, 244)"
}
```

### Verwendung eines hexadezimalen Werts

```json
{
  "name": "My First App",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ff4500"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifest-Eintrag
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Manifest-Eintrag
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Eintrag
- [Passen Sie die Theme- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
