---
title: theme_color
slug: Web/Progressive_web_apps/Manifest/Reference/theme_color
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

Das `theme_color`-Element wird verwendet, um die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung festzulegen.
Diese Farbe kann auf verschiedene UI-Elemente des Browsers angewendet werden, wie die Werkzeugleiste, die Adressleiste und die Statusleiste.
Sie kann besonders in Kontexten auffallen wie dem Aufgabenwechsler oder wenn die App zum Startbildschirm hinzugefügt wird.

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
    > Es wird empfohlen, vollständig opake Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um ein konsistentes Verhalten über verschiedene Plattformen und Browser hinweg zu gewährleisten.

## Beschreibung

Obwohl optional, ermöglicht die Angabe einer `theme_color`, die visuelle Identität Ihrer App über die Inhaltsbereiche hinaus zu erweitern.
Diese Farbgebung kann ein nativeres App-Erlebnis für Ihre Web-App bieten, insbesondere wenn sie im [Standalone](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#standalone)-Modus geladen wird.
Wählen Sie eine `theme_color`, die mit den Markenvorgaben Ihrer App übereinstimmt, da dies die Nutzererkennung und -erinnerung steigern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest-Datei angegebene Wert als Standard-Theme-Farbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird.
Sie können diesen Standard auf folgende Weise überschreiben:

- Verwenden des [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Theme-Farbe für eine Webseite angeben, die sich von der im Manifest für Ihre App angegebenen `theme_color` unterscheidet. Dadurch können Sie für einzelne Seiten innerhalb Ihrer App unterschiedliche Theme-Farben festlegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media Queries: Sie können die zu verwendende Theme-Farbe basierend auf der Farbpräferenz des Nutzers angeben.

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

Diese Methoden der Überschreibung bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für spezifische Seiten oder Nutzerpräferenzen anzupassen, was die gesamte Nutzererfahrung verbessert.

Browser können auch die angewendete Theme-Farbe basierend auf den Nutzerpräferenzen anpassen.
Wenn ein Nutzer eine Präferenz für den hellen oder dunklen Modus festgelegt hat, können Browser den `theme_color`-Wert des Manifests überschreiben, um jede [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media Query zu unterstützen, die in Ihrer App's CSS definiert ist.

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
  "theme_color": "rgb(66 133 244)"
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

- Manifest-Element [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
- Manifest-Element [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
- Manifest-Element [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)
- [Passen Sie die Theme- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
