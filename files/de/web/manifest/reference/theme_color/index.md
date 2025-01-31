---
title: theme_color
slug: Web/Manifest/Reference/theme_color
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `theme_color`-Element wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung anzugeben.
Diese Farbe kann auf verschiedene UI-Elemente des Browsers angewendet werden, wie z. B. die Symbolleiste, die Adressleiste und die Statusleiste.
Sie kann besonders in Kontexten wie dem Aufgabenumschalter oder wenn die App zum Startbildschirm hinzugefügt wird, auffällig sein.

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
    > Es wird empfohlen, vollständig opake Farben (Alphawert von 1 oder 100%) zu verwenden, um ein konsistentes Verhalten über verschiedene Plattformen und Browser hinweg sicherzustellen.

## Beschreibung

Obwohl optional, ermöglicht die Angabe einer `theme_color`-Eigenschaft, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern.
Diese Farbgebung kann ein nativeres App-Erlebnis für Ihre Webanwendung bieten, besonders wenn sie im [standalone](/de/docs/Web/Manifest/Reference/display#standalone)-Modus geladen wird.
Wählen Sie eine `theme_color`, die mit den Markenrichtlinien Ihrer App übereinstimmt, da dies die Benutzererkennung und -erinnerung verbessern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest angegebene Wert als Standardthemafarbe für Ihre Webanwendung auf allen Seiten, auf denen das Manifest angewendet wird.
Sie können diesen Standard auf folgende Weise überschreiben:

- Verwendung des [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Themafarbe für eine Webseite angeben, die sich von der Manifest-`theme_color`-Angabe Ihrer App unterscheidet. Dies ermöglicht Ihnen, unterschiedliche Themafarben für einzelne Seiten innerhalb Ihrer App festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elementes mit Media-Queries: Sie können die zu verwendende Themafarbe basierend auf der Farbvorliebe des Nutzers spezifizieren.

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

Diese Überschreibungsmethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App an spezifische Seiten oder Benutzerpräferenzen anzupassen und verbessern so das gesamte Benutzererlebnis.

Browser können auch die angewendete Themafarbe basierend auf Benutzerpräferenzen anpassen.
Wenn ein Benutzer eine Präferenz für den hellen oder dunklen Modus festgelegt hat, können Browser den Manifest-`theme_color`-Wert überschreiben, um jede in Ihrer App-CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Query zu unterstützen.

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

- [`display`](/de/docs/Web/Manifest/Reference/display)-Manifest-Element
- [`background_color`](/de/docs/Web/Manifest/Reference/background_color)-Manifest-Element
- [`scope`](/de/docs/Web/Manifest/Reference/scope)-Manifest-Element
- [Passen Sie die Thema- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
