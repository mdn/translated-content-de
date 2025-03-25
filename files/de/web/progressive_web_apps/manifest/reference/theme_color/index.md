---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `theme_color`-Attribut wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung anzugeben. Diese Farbe kann auf verschiedene Browser-UI-Elemente angewendet werden, wie z. B. die Symbolleiste, Adressleiste und Statusleiste. Sie kann besonders in Kontexten wie dem Aufgabenumschalter oder wenn die App zum Startbildschirm hinzugefügt wird, auffällig sein.

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
    > Browser können die Alpha-Komponente der Farbe je nach Kontext ignorieren.
    > In den meisten Umgebungen kann `theme_color` nicht transparent sein.
    > Es wird empfohlen, vollständig undurchsichtige Farben (Alpha-Wert von 1 oder 100 %) zu verwenden, um ein konsistentes Verhalten auf verschiedenen Plattformen und Browsern zu gewährleisten.

## Beschreibung

Auch wenn es optional ist, ermöglicht das Angeben einer `theme_color` Ihnen, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern. Diese Farbanwendung kann ein nativeres App-ähnliches Erlebnis für Ihre Web-App bieten, insbesondere wenn sie im [standalone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird. Wählen Sie eine `theme_color`, die den Richtlinien Ihrer Marke entspricht, da dies die Benutzererkennung und -wiedererkennung verbessern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen betrachtet wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest-Datei angegebene Wert als Standard-Designfarbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diesen Standard auf folgende Weise außer Kraft setzen:

- Verwenden des [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Designfarbe für eine Webseite festlegen, die sich von der im Manifest `theme_color` angegebenen Farbe Ihrer App unterscheidet. Dies ermöglicht es Ihnen, für einzelne Seiten innerhalb Ihrer App unterschiedliche Designfarben festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media Queries: Sie können die zu verwendende Designfarbe basierend auf den Präferenzen des Benutzers für Farbschemata festlegen.

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

Diese Überschreibungsmethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzerpräferenzen anzupassen, was die gesamte Benutzererfahrung verbessert.

Browser können auch die angewendete Designfarbe basierend auf Benutzerpräferenzen anpassen. Wenn ein Benutzer eine Präferenz für den Hell- oder Dunkelmodus angegeben hat, können Browser den `theme_color`-Wert des Manifests überschreiben, um jede in Ihrer App CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media Query zu unterstützen.

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

### Verwendung eines RGB-Wertes

```json
{
  "theme_color": "rgb(66, 133, 244)"
}
```

### Verwendung eines hexadezimalen Wertes

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifest-Mitglied
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Manifest-Mitglied
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Mitglied
- [Anpassen der Design- und Hintergrundfarben Ihrer App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
