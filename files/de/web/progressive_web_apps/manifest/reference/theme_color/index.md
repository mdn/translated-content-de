---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: 1351f23f494656e58195ab8e186cd8946e90adcf
---

Der `theme_color`-Eintrag wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung festzulegen. Diese Farbe kann auf verschiedene UI-Elemente des Browsers angewendet werden, wie z.B. die Toolbar, die Adressleiste und die Statusleiste. Besonders auffällig kann sie in Kontexten wie dem Aufgabenumschalter oder wenn die App zum Startbildschirm hinzugefügt wird, sein.

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
    > Browser können die Alpha-Komponente der Farbe je nach Kontext ignorieren.
    > In den meisten Umgebungen kann `theme_color` nicht transparent sein.
    > Es wird empfohlen, vollständig deckende Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um konsistentes Verhalten über verschiedene Plattformen und Browser hinweg zu gewährleisten.

## Beschreibung

Obwohl optional, erlaubt das Festlegen eines `theme_color` Ihnen, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern. Diese Farbgestaltung kann ein nativeres App-ähnliches Erlebnis für Ihre Webanwendung bieten, insbesondere wenn sie im [standalone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird. Wählen Sie eine `theme_color`, die mit den Markenrichtlinien Ihrer App übereinstimmt, da dies die Benutzererkennung und -wiedererkennung verbessern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest-Datei angegebene Wert als Standarddesignfarbe für Ihre Webanwendung auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diese Standardeinstellung auf folgende Weise überschreiben:

- Verwenden des [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)-Wertes des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Designfarbe für eine Webseite festlegen, die sich von der im Manifest angegebenen `theme_color` Ihrer App unterscheidet. Dies ermöglicht es Ihnen, unterschiedliche Designfarben für einzelne Seiten innerhalb Ihrer App zu setzen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombinieren des `<meta name="theme-color">`-Elements mit Media Queries: Sie können die zu verwendende Designfarbe abhängig von der Farbdesignpräferenz des Benutzers angeben.

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

Diese Überschreibemethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für spezifische Seiten oder Benutzerpräferenzen anzupassen und so die Benutzererfahrung insgesamt zu verbessern.

Browser können auch die angewendete Designfarbe basierend auf Benutzerpräferenzen anpassen. Wenn ein Benutzer eine Präferenz für den Hell- oder Dunkelmodus festgelegt hat, können Browser den `theme_color`-Wert des Manifests überschreiben, um eine in Ihrem CSS definierte {{cssxref("@media/prefers-color-scheme")}}-Media-Query zu unterstützen.

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Manifestmitglied
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)-Manifestmitglied
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Manifestmitglied
- [Passen Sie die Design- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWA's
