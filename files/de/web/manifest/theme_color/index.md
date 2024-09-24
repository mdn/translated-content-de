---
title: theme_color
slug: Web/Manifest/theme_color
l10n:
  sourceCommit: 4d01b5ffbaac2c8dd568e6382e4aaca66af7f66d
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `theme_color`-Mitglied wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung festzulegen. Diese Farbe kann auf verschiedene Browser-Oberflächenelemente angewendet werden, wie zum Beispiel die Symbolleiste, die Adressleiste und die Statusleiste. Sie kann besonders auffällig sein in Kontexten wie dem Task-Switcher oder wenn die App zum Startbildschirm hinzugefügt wird.

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
    > Browser können die Alpha-Komponente der Farbe je nach Kontext ignorieren. In den meisten Umgebungen kann `theme_color` nicht transparent sein. Es wird empfohlen, vollständig opake Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um ein konsistentes Verhalten über verschiedene Plattformen und Browser hinweg sicherzustellen.

## Beschreibung

Obwohl optional, ermöglicht die Angabe einer `theme_color`, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern. Diese Farbanwendung kann eine eher native App-ähnliche Erfahrung für Ihre Web-App bieten, insbesondere wenn sie im [standalone](/de/docs/Web/Manifest/display#standalone)-Modus geladen wird. Wählen Sie eine `theme_color`, die mit den Markentrichtlinien Ihrer App übereinstimmt, da dies das Nutzererkennen und -erinnern verbessern kann, insbesondere wenn Ihre App zusammen mit anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest-Datei angegebene Wert als Standard-Themenfarbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diesen Standard auf folgende Weise überschreiben:

- Verwendung des [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color)-Wertes des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Themenfarbe für eine Webseite angeben, die sich von der im Manifest angegebenen `theme_color` Ihrer App unterscheidet. Dies ermöglicht es Ihnen, unterschiedliche Themenfarben für einzelne Seiten innerhalb Ihrer App festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media-Queries: Sie können die Themenfarbe basierend auf der Farbpräferenz des Benutzers festlegen.

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

Diese Methoden der Überschreibung geben Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzerpräferenzen anzupassen, was die gesamte Benutzererfahrung verbessert.

Browser können auch die angewandte Themenfarbe basierend auf Benutzerpräferenzen anpassen. Wenn ein Benutzer eine Präferenz für den hellen oder dunklen Modus festgelegt hat, können Browser den `theme_color`-Wert des Manifests überschreiben, um jegliche in der CSS Ihrer App definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Query zu unterstützen.

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

- [`display`](/de/docs/Web/Manifest/display) Manifest-Mitglied
- [`background_color`](/de/docs/Web/Manifest/background_color) Manifest-Mitglied
- [`scope`](/de/docs/Web/Manifest/scope) Manifest-Mitglied
- [Passen Sie die Themen- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
