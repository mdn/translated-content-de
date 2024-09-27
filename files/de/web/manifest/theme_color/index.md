---
title: theme_color
slug: Web/Manifest/theme_color
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Der `theme_color`-Eintrag gibt die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung an.
Diese Farbe kann auf verschiedene Browser-UI-Elemente angewendet werden, wie z.B. die Werkzeugleiste, die Adressleiste und die Statusleiste.
Sie kann besonders auffällig in Kontexten wie dem Task-Wechsler oder wenn die App zum Startbildschirm hinzugefügt wird, sein.

Diese Farbzuweisung kann für Ihre Web-App ein nativeres App-ähnliches Erlebnis bieten, insbesondere wenn sie im [standalone](/de/docs/Web/Manifest/display#standalone)-Modus geladen wird.

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
    > Browser können die Alpha-Komponente der Farbe basierend auf dem Kontext ignorieren.
    > In den meisten Umgebungen kann `theme_color` nicht transparent sein.
    > Es wird empfohlen, vollständig deckende Farben (Alpha-Wert von 1 oder 100%) zu verwenden, um konsistentes Verhalten auf verschiedenen Plattformen und Browsern sicherzustellen.

## Beschreibung

Obwohl optional, ermöglicht das Angeben eines `theme_color`, die visuelle Identität Ihrer App über ihre Inhaltsbereiche hinaus zu erweitern.
Wählen Sie eine `theme_color`, die mit den Markenrichtlinien Ihrer App übereinstimmt, da dies die Benutzererkennung und -erinnerung verbessern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemoberflächen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifest-Datei angegebene Wert als Standardfarbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird.
Sie können diesen Standard auf folgende Weise überschreiben:

- Verwenden des [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können für eine Webseite eine andere Theme-Farbe angeben, die sich von der im Manifest angegebenen `theme_color` unterscheidet. Dies ermöglicht es Ihnen, für einzelne Seiten innerhalb Ihrer App verschiedene Theme-Farben festzulegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media Queries: Sie können die zu verwendende Farbe basierend auf den Farbschemavorlieben des Nutzers angeben.

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

Diese Überschreibemethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für spezifische Seiten oder Benutzerpräferenzen anzupassen, was die gesamte Benutzererfahrung verbessert.

Browser können die angewendete Theme-Farbe auch basierend auf den Benutzerpräferenzen anpassen.
Wenn ein Benutzer eine Präferenz für den hellen oder dunklen Modus eingestellt hat, können Browser den `theme_color`-Wert im Manifest überschreiben, um jede in Ihrer App-Stylesheet definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienabfrage zu unterstützen.

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
