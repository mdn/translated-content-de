---
title: background_color
slug: Web/Manifest/background_color
l10n:
  sourceCommit: a027e6e4ea01af2c6c295f7d77c2ea4d0d5969b5
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `background_color` Manifest-Element wird verwendet, um eine anfängliche Hintergrundfarbe für Ihre Webanwendung anzugeben. Diese Farbe erscheint im Anwendungsfenster, bevor die Stylesheets Ihrer Anwendung geladen sind.

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

Das `background_color` Element erfüllt die folgenden Zwecke:

- Sorgt für einen reibungslosen visuellen Übergang vom anfänglichen Start der App bis zu ihrem vollständig geladenen Zustand.
- Verbessert die Benutzererfahrung, während die App-Dateien über das Netzwerk geladen oder von Speichermedien abgerufen werden.
- Trägt zur Darstellung des Splash-Screens in einigen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der für das `background_color` Manifest-Element angegebene Farbwert mit dem Wert der {{cssxref("background-color")}} Eigenschaft im Stylesheet Ihrer App übereinstimmt. Dies stellt visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Splash-Screens, falls zutreffend) und der vollständig geladenen Anwendung sicher. Durch die Abstimmung dieser Farben können Sie ein raffinierteres und nahtloses Erlebnis für Ihre Benutzer schaffen.

Nach dem Laden einer App hat die `background-color` im Stylesheet Vorrang. Das `background_color` des Manifests wird nur als temporäre Maßnahme während der anfänglichen Ladephase und zur Erstellung von Splash-Screens in einigen Umgebungen verwendet.

> [!NOTE]
> Browser können den `background_color` Manifest-Wert überschreiben, um jede in Ihrer App's CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Query zu unterstützen.

## Beispiele

### Einstellen einer konsistenten Hintergrundfarbe für Ihre App

Stellen Sie sich vor, Sie entwickeln eine Wetter-App, und die Hintergrundfarbe in Ihrem Stylesheet ist wie unten gezeigt eingestellt:

```css
body {
  background-color: #87ceeb;
}
```

Um sicherzustellen, dass Ihre Benutzer von der Einführung bis zur vollständigen Ladung Ihrer App eine konsistente Hintergrundfarbe sehen, würden Sie dieselbe Hintergrundfarbe in Ihrer Manifest-Datei wie folgt festlegen:

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

- [`display`](/de/docs/Web/Manifest/display) Manifest-Element
- [`theme_color`](/de/docs/Web/Manifest/theme_color) Manifest-Element
- [Passen Sie die Themen- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), wenn Sie PWAs erstellen.
