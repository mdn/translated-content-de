---
title: theme_color
slug: Web/Manifest/theme_color
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `theme_color`-Mitglied gibt die Standardfarbe für die Benutzeroberfläche Ihrer Webanwendung an. Diese Farbe kann auf verschiedene UI-Elemente des Browsers angewendet werden, wie z. B. die Symbolleiste, die Adressleiste und die Statusleiste. Sie kann besonders auffällig in Kontexten wie dem Aufgabenumschalter oder wenn die App zum Startbildschirm hinzugefügt wird.

Diese Farbanwendung kann ein nativeres App-ähnliches Erlebnis für Ihre Web-App bieten, insbesondere wenn sie im [Stand-alone-Modus](/de/docs/Web/Manifest/display#standalone) geladen wird.

## Syntax

```json-nolint
/* Gültiger Farbwert */
"theme_color": "rebeccapurple"
"theme_color": "#4285f4"
```

### Werte

- `theme_color`

  - : Ein String, der einen [gültigen Farbwert](/de/docs/Web/CSS/color_value) angibt.

    > [!NOTE]
    > Browser können den Alphakanal der Farbe je nach Kontext ignorieren.
    > In den meisten Umgebungen kann `theme_color` nicht transparent sein.
    > Es wird empfohlen, vollständig undurchsichtige Farben (Alpha-Wert von 1 oder 100 %) zu verwenden, um ein konsistentes Verhalten über verschiedene Plattformen und Browser hinweg sicherzustellen.

## Beschreibung

Obwohl optional, ermöglicht die Angabe einer `theme_color` Ihnen, die visuelle Identität Ihrer App über die Inhaltsbereiche hinaus zu erweitern. Wählen Sie eine `theme_color`, die mit den Markenrichtlinien Ihrer App übereinstimmt, da dies die Benutzererkennung und -erinnerung verbessern kann, insbesondere wenn Ihre App neben anderen Anwendungen oder Systemschnittstellen angezeigt wird.

In Browsern, die `theme_color` unterstützen, dient der im Manifestdatei angegebene Wert als Standard-Designfarbe für Ihre Web-App auf allen Seiten, auf denen das Manifest angewendet wird. Sie können diese Standardeinstellung auf folgende Weise überschreiben:

- Verwenden des [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color)-Werts des `name`-Attributs im HTML-`<meta>`-Element: Sie können eine Designfarbe für eine Webseite angeben, die sich von der im Manifest für Ihre App angegebenen `theme_color` unterscheidet. Dadurch können Sie unterschiedliche Designfarben für einzelne Seiten innerhalb Ihrer App festlegen.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Kombination des `<meta name="theme-color">`-Elements mit Media Queries: Sie können die zu verwendende Designfarbe basierend auf der Farbschema-Präferenz des Benutzers angeben.

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

Diese Überschreibemethoden bieten Ihnen die Flexibilität, das Erscheinungsbild Ihrer App für bestimmte Seiten oder Benutzerpräferenzen anzupassen, was die gesamte Benutzererfahrung verbessert.

Browser können auch die angewendete Designfarbe basierend auf Benutzerpräferenzen anpassen. Wenn ein Benutzer eine Präferenz für den Licht- oder Dunkelmodus festgelegt hat, können Browser den Manifest-`theme_color`-Wert überschreiben, um jede in der CSS Ihrer App definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Query zu unterstützen.

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

### Verwendung eines benannten Farbnames

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`display`](/de/docs/Web/Manifest/display) Manifestmitglied
- [`background_color`](/de/docs/Web/Manifest/background_color) Manifestmitglied
- [`scope`](/de/docs/Web/Manifest/scope) Manifestmitglied
