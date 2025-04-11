---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Der `theme_color`-Eintrag wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung anzugeben.
Diese Farbe kann auf verschiedene UI-Elemente des Browsers angewendet werden, wie z.B. die Symbolleiste, die Adressleiste und die Statusleiste.
Sie kann besonders auffällig in Kontexten wie dem Task-Wechsler oder wenn die App zum Startbildschirm hinzugefügt wird, sein.

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

  - : Eine Zeichenkette, die einen gültigen [Farbwert](/de/docs/Web/CSS/color_value) angibt.

    > [!NOTE]
    > Browser können den Alpha-Komponenten der Farbe je nach Kontext ignorieren.
    > In den meisten Umgebungen kann `theme_color` nicht transparent sein.
    > Es wird empfohlen, vollständig opake Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um konsistentes Verhalten über verschiedene Plattformen und Browser hinweg sicherzustellen.

## Beschreibung

Obwohl optional, ermöglicht die Angabe eines `theme_color` Ihnen, die visuelle Identität Ihrer App über die Inhaltsbereiche hinaus zu erweitern.
Diese Farbgestaltung kann eine native App-ähnliche Erfahrung für Ihre Web-App bieten, insbesondere wenn sie im [Standalone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird.
Wählen Sie eine `theme_color`, die mit den Markentrichtlinien Ihrer App übereinstimmt, da dies die Benutzererkennung und -wiedererkennung verbessern kann, insbesondere wenn Ihre App zusammen mit anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifestdatei spezifizierte Wert als Standard-Theme-Farbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird.
Sie können diesen Standard auf folgende Weise überschreiben:

- Verwenden Sie den [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) Wert des `name` Attributs im HTML `<meta>` Element: Sie können eine Theme-Farbe für eine Webseite angeben, die sich von der im Manifest für Ihre App angegebenen `theme_color` unterscheidet. Dies ermöglicht Ihnen, für einzelne Seiten innerhalb Ihrer App unterschiedliche Theme-Farben festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombinieren Sie das `<meta name="theme-color">` Element mit Media-Queries: Sie können die Theme-Farbe basierend auf der Farbschemapräferenz des Benutzers angeben.

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

Diese Überschreibungsmethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzerpräferenzen anzupassen, was die Benutzererfahrung insgesamt verbessert.

Browser können auch die angewendete Theme-Farbe basierend auf den Benutzerpräferenzen anpassen.
Wenn ein Benutzer eine Präferenz für den Light- oder Dark-Modus festgelegt hat, können Browser den manifestierten `theme_color` Wert überschreiben, um eine mit einer in Ihrer App-CSS definierten [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Query übereinstimmende Unterstützung anzubieten.

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

### Verwenden einer benannten Farbe

```json
{
  "theme_color": "red"
}
```

### Verwenden eines RGB-Werts

```json
{
  "theme_color": "rgb(66, 133, 244)"
}
```

### Verwenden eines hexadezimalen Werts

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
- [Passen Sie die Theme- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), wenn Sie PWAs entwickeln
