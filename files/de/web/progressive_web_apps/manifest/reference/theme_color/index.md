---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Der `theme_color`-Eintrag wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung festzulegen. Diese Farbe kann auf verschiedene Browser-UI-Elemente angewendet werden, wie z.B. die Symbolleiste, Adressleiste und Statusleiste. Sie kann besonders in Kontexten wie dem Aufgabenwechsler oder wenn die App zum Startbildschirm hinzugefügt wird, auffallen.

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
    > Browser können den Alpha-Anteil der Farbe basierend auf dem Kontext ignorieren. In den meisten Umgebungen kann `theme_color` nicht transparent sein. Es wird empfohlen, vollständig deckende Farben (Alpha-Wert von 1 oder 100 %) zu verwenden, um ein konsistentes Verhalten auf verschiedenen Plattformen und in verschiedenen Browsern sicherzustellen.

## Beschreibung

Auch wenn optional, erlaubt die Angabe eines `theme_color` Ihnen, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern. Diese Farbanwendung kann ein nativeres App-ähnliches Erlebnis für Ihre Web-App bieten, insbesondere wenn sie im [Stand-alone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird. Wählen Sie ein `theme_color`, das zu den Markenrichtlinien Ihrer App passt, da dies die Benutzererkennung und -erinnerung verbessern kann, besonders wenn Ihre App neben anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest-Datei angegebene Wert als Standard-Designfarbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diesen Standard in folgender Weise überschreiben:

- Mit dem [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)-Wert des `name`-Attributs im `<meta>`-Element der HTML: Sie können eine Designfarbe für eine Webseite angeben, die sich von der im Manifest angegebenen `theme_color` Ihrer App unterscheidet. Dies ermöglicht Ihnen, für einzelne Seiten innerhalb Ihrer App unterschiedliche Designfarben festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media Queries: Sie können die zu verwendende Designfarbe basierend auf der Farbvorliebe der Benutzer festlegen.

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

Diese Überschreibungsmethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzerpräferenzen anzupassen, um die allgemeine Benutzererfahrung zu verbessern.

Browser können die angewendete Designfarbe auch basierend auf den Benutzereinstellungen anpassen. Wenn ein Benutzer eine Präferenz für den hellen oder dunklen Modus festgelegt hat, können Browser den `theme_color`-Wert des Manifests überschreiben, um eine in der CSS Ihrer App definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media Query zu unterstützen.

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
  "theme_color": "rgb(66 133 244)"
}
```

### Verwendung eines Hexadezimalwerts

```json
{
  "name": "My First App",
  "display": "standalone",
  "background_color": "white",
  "theme_color": "#ff4500"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Manifest-Eintrag
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)-Manifest-Eintrag
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Manifest-Eintrag
- [Passen Sie die Design- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
