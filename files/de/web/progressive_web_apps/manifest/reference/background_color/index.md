---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `background_color`-Manifest-Element wird verwendet, um eine anfängliche Hintergrundfarbe für Ihre Webanwendung anzugeben.
Diese Farbe erscheint im Anwendungsfenster, bevor die Stylesheets Ihrer Anwendung geladen sind.

## Syntax

```json-nolint
/* Using named color */
"background_color": "aliceblue"

/* Using hexadecimal value */
"background_color": "#f0fbff"

/* Using RGB value */
"background_color": "rgb(240 248 255)"
```

### Werte

- `background_color`

  - : Ein String, der einen gültigen [Farbwert](/de/docs/Web/CSS/color_value) angibt.

## Beschreibung

Das `background_color`-Element erfüllt folgende Zwecke:

- Es sorgt für einen sanften visuellen Übergang vom anfänglichen Start der App bis zu ihrem vollständig geladenen Zustand.
- Verbessert die Benutzererfahrung, während die App-Dateien über das Netzwerk geladen oder von einem Speichermedium abgerufen werden.
- Trägt zum Erscheinungsbild des Splashscreens in einigen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der Farbwert, den Sie für das `background_color`-Manifest-Element angeben, mit dem Wert der {{cssxref("background-color")}}-Eigenschaft in Ihrem Anwendungs-Stylesheet übereinstimmt.
Dies gewährleistet visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Splashscreens, falls zutreffend) und der vollständig geladenen Anwendung.
Indem Sie diese Farben anpassen, können Sie ein glatteres und nahtloseres Erlebnis für Ihre Benutzer schaffen.

Nachdem eine App geladen wurde, hat die `background-color` im Stylesheet Vorrang.
Das `background_color` aus dem Manifest wird nur als temporäre Maßnahme während der anfänglichen Ladephase und zur Erstellung von Splashscreens in einigen Umgebungen verwendet.

> [!NOTE]
> Browser können den `background_color`-Manifestwert überschreiben, um jede in Ihrer App's CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Query zu unterstützen.

## Beispiele

### Festlegen einer konsistenten Hintergrundfarbe für Ihre App

Stellen Sie sich vor, Sie bauen eine Wetter-App und die Hintergrundfarbe in Ihrem App-Stylesheet ist wie unten gezeigt festgelegt:

```css
body {
  background-color: #87ceeb;
}
```

Um sicherzustellen, dass Ihre Benutzer eine konsistente Hintergrundfarbe vom Start bis zur vollständigen Ladung Ihrer App sehen, würden Sie dieselbe Hintergrundfarbe in der Manifestdatei Ihrer App wie folgt festlegen:

```json
{
  "name": "WeatherPro",
  "display": "standalone",
  "background_color": "#87ceeb",
  "theme_color": "#4682b4",
  "icons": [
    {
      "src": "icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifest-Element
- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) Manifest-Element
- [Passen Sie das Thema und die Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
