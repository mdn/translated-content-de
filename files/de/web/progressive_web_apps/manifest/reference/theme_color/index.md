---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `theme_color`-Element wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung festzulegen. Diese Farbe kann auf verschiedene UI-Elemente des Browsers angewendet werden, wie zum Beispiel die Symbolleiste, die Adressleiste und die Statusleiste. Sie kann besonders auffällig in Kontexten wie dem Aufgaben-Umschalter oder wenn die App zum Startbildschirm hinzugefügt wird.

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
    > Browser können den Alpha-Anteil der Farbe je nach Kontext ignorieren. In den meisten Umgebungen kann `theme_color` nicht transparent sein. Es wird empfohlen, vollständig undurchsichtige Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um ein konsistentes Verhalten auf verschiedenen Plattformen und Browsern zu gewährleisten.

## Beschreibung

Auch wenn es optional ist, ermöglicht das Festlegen eines `theme_color`, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern. Diese Farbgebung kann ein app-ähnlicheres Erlebnis für Ihre Webanwendung bieten, insbesondere wenn sie im [standalone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird. Wählen Sie eine `theme_color`, die mit den Markenvorgaben Ihrer App übereinstimmt, da dies die Benutzererkennung und das Erinnern verbessern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, wird der im Manifest angegebene Wert als Standard-Designfarbe für Ihre Webanwendung auf allen Seiten verwendet, auf denen das Manifest angewendet wird. Sie können diesen Standard auf folgende Weise überschreiben:

- Verwendung des [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Designfarbe für eine Webseite angeben, die sich von der im Manifest für Ihre App angegebenen `theme_color` unterscheidet. Dies ermöglicht es Ihnen, unterschiedliche Designfarben für einzelne Seiten innerhalb Ihrer App festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media Queries: Sie können die Designfarbe angeben, die basierend auf den Farbpräferenzen des Benutzers verwendet werden soll.

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

Diese Überschreibmethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzerpräferenzen anzupassen und so die gesamte Benutzererfahrung zu verbessern.

Browser können die angewendete Designfarbe auch basierend auf Benutzerpräferenzen anpassen. Wenn ein Benutzer eine Präferenz für den hellen oder dunklen Modus festgelegt hat, können Browser den `theme_color`-Wert des Manifests überschreiben, um jede in Ihrer App definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media Query zu unterstützen.

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifest-Element
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Manifest-Element
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Element
- [Passen Sie die Design- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
