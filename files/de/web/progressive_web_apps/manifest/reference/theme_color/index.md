---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das `theme_color`-Element wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung anzugeben. Diese Farbe kann auf verschiedene UI-Elemente des Browsers angewendet werden, wie z.B. die Symbolleiste, Adressleiste und Statusleiste. Besonders bemerkbar kann sie in Kontexten wie dem Anwendungswechsler oder wenn die App zum Startbildschirm hinzugefügt wird, sein.

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
  - : Ein String, der einen gültigen [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) angibt.

    > [!NOTE]
    > Browser können die Alpha-Komponente der Farbe basierend auf dem Kontext ignorieren.
    > In den meisten Umgebungen kann `theme_color` nicht transparent sein.
    > Es wird empfohlen, vollständig opake Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um ein konsistentes Verhalten auf verschiedenen Plattformen und Browsern zu gewährleisten.

## Beschreibung

Obwohl optional, ermöglicht die Angabe eines `theme_color`-Wertes, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern. Diese Farbanwendung kann ein nativeres App-ähnliches Erlebnis für Ihre Webanwendung bieten, insbesondere wenn diese im [Standalone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird. Wählen Sie eine `theme_color`, die mit den Markierungsrichtlinien Ihrer App übereinstimmt, da dies die Benutzererkennung und -erinnerung verbessern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest angegebene Wert als Standard-Theme-Farbe für Ihre Webanwendung auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diesen Standard auf folgende Weise überschreiben:

- Verwenden des [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Theme-Farbe für eine Webseite angeben, die sich von der im Manifest für Ihre App angegebenen `theme_color` unterscheidet. Dies ermöglicht es Ihnen, unterschiedliche Theme-Farben für einzelne Seiten innerhalb Ihrer App festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombinieren des `<meta name="theme-color">`-Elements mit Media-Queries: Sie können die zu verwendende Theme-Farbe basierend auf der Farbskema-Vorliebe des Benutzers angeben.

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

Diese Übersteuerungsmethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für spezifische Seiten oder Benutzerpräferenzen anzupassen, was das gesamte Benutzererlebnis verbessert.

Browser können die angewendete Theme-Farbe auch basierend auf den Benutzerpräferenzen anpassen. Wenn ein Benutzer eine Präferenz für den Licht- oder Dunkelmodus eingestellt hat, können Browser den `theme_color`-Wert im Manifest überschreiben, um jede in Ihrer App's CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)-Media-Query zu unterstützen.

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

### Verwendung eines hexadezimalen Werts

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Manifest-Mitglied
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)-Manifest-Mitglied
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Manifest-Mitglied
- [Passen Sie die Theme- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
