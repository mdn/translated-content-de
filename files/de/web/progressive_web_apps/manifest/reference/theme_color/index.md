---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `theme_color`-Mitglied wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung festzulegen. Diese Farbe kann auf verschiedene Elemente der Browser-Benutzeroberfläche angewendet werden, wie z.B. die Symbolleiste, Adressleiste und Statusleiste. Sie kann insbesondere in Kontexten wie dem Aufgabenwechsler oder wenn die App zum Startbildschirm hinzugefügt wird, auffällig sein.

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
    > Es wird empfohlen, vollständig opake Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um konsistentes Verhalten auf verschiedenen Plattformen und in verschiedenen Browsern sicherzustellen.

## Beschreibung

Obwohl optional, ermöglicht das Festlegen einer `theme_color`, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern. Diese Farbanwendung kann ein nativeres App-ähnliches Erlebnis für Ihre Web-App bieten, insbesondere wenn sie im [Standalone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird. Wählen Sie eine `theme_color`, die mit den Markenrichtlinien Ihrer App übereinstimmt, da dies die Benutzererkennung und das Erinnerungsvermögen verbessern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifestdatei angegebene Wert als Standard-Designfarbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diesen Standard auf folgende Weisen überschreiben:

- Verwendung des [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) Wertes des `name`-Attributs im HTML `<meta>`-Element: Sie können eine Designfarbe für eine Webseite festlegen, die sich von der im Manifest für Ihre App angegebenen `theme_color` unterscheidet. Dies ermöglicht es Ihnen, unterschiedliche Designfarben für einzelne Seiten innerhalb Ihrer App festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media Queries: Sie können die Designfarbe festlegen, die basierend auf der Farbpräferenz des Benutzers verwendet werden soll.

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

Diese Methoden zur Überschreibung bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzerpräferenzen anzupassen, was die gesamte Benutzererfahrung verbessert.

Browser können auch die angewendete Designfarbe basierend auf den Benutzerpräferenzen anpassen. Wenn ein Benutzer eine Präferenz für den Licht- oder Dunkelmodus festgelegt hat, können Browser den `theme_color`-Wert des Manifests überschreiben, um jede in Ihrer CSS definierten [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienanfrage zu unterstützen.

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

### Verwendung eines Hexadezimalwerts

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifestmitglied
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Manifestmitglied
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifestmitglied
- [Passen Sie die Themen- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), wenn Sie PWAs entwickeln
