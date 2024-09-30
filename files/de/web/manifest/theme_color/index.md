---
title: theme_color
slug: Web/Manifest/theme_color
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `theme_color`-Element legt die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung fest. Diese Farbe kann auf verschiedene UI-Elemente des Browsers angewendet werden, wie die Symbolleiste, die Adressleiste und die Statusleiste. Sie kann besonders auffällig in Kontexten wie dem Aufgabenumschalter oder wenn die App zum Startbildschirm hinzugefügt wird, sein.

Diese Farbanwendung kann Ihrer Web-App ein nativeres App-ähnliches Erlebnis bieten, insbesondere wenn sie im [Standalone](/de/docs/Web/Manifest/display#standalone)-Modus geladen wird.

## Syntax

```json-nolint
/* Valid color value */
"theme_color": "rebeccapurple"
"theme_color": "#4285f4"
```

### Werte

- `theme_color`

  - : Ein String, der einen [gültigen Farbwert](/de/docs/Web/CSS/color_value) angibt.

    > [!NOTE]
    > Browser können die Alpha-Komponente der Farbe je nach Kontext ignorieren. In den meisten Umgebungen kann `theme_color` nicht transparent sein. Es wird empfohlen, vollständig undurchsichtige Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um konsistentes Verhalten über verschiedene Plattformen und Browser hinweg sicherzustellen.

## Beschreibung

Auch wenn optional, ermöglicht die Angabe eines `theme_color`-Werts Ihnen, die visuelle Identität Ihrer App über deren Inhaltsbereiche hinaus zu erweitern. Wählen Sie eine `theme_color`, die mit den Markenvorgaben Ihrer App übereinstimmt, da dies die Benutzererkennung und das Gedächtnis verstärken kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen betrachtet wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifestdatei angegebene Wert als Standardthemenfarbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diesen Standard auf folgende Weise überschreiben:

- Verwendung des [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Themenfarbe für eine Webseite angeben, die sich von der im Manifest für Ihre App angegebenen `theme_color` unterscheidet. Dies ermöglicht es Ihnen, verschiedene Themenfarben für einzelne Seiten innerhalb Ihrer App festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media-Queries: Sie können die zu verwendende Themenfarbe basierend auf der Farbschema-Vorliebe des Benutzers angeben.

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

Diese Überschreibungsmethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzervorlieben anzupassen und so das gesamte Benutzererlebnis zu verbessern.

Browser können auch die angewendete Themenfarbe basierend auf den Benutzervorlieben anpassen. Wenn ein Benutzer eine Vorliebe für den hellen oder dunklen Modus eingestellt hat, können Browser den `theme_color`-Wert im Manifest überschreiben, um jede im CSS Ihrer App definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Query zu unterstützen.

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

### Verwendung eines Hexadezimalwertes

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

- [`display`](/de/docs/Web/Manifest/display) Manifestmitglied
- [`background_color`](/de/docs/Web/Manifest/background_color) Manifestmitglied
- [`scope`](/de/docs/Web/Manifest/scope) Manifestmitglied
