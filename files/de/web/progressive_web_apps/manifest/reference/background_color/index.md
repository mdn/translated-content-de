---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der `background_color` Manifest-Mitglied wird verwendet, um eine anfängliche Hintergrundfarbe für Ihre Webanwendung anzugeben. Diese Farbe erscheint im Anwendungsfenster, bevor die Stylesheets Ihrer Anwendung geladen wurden.

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
  - : Ein String, der einen gültigen [Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) angibt.

## Beschreibung

Das `background_color` Mitglied dient folgenden Zwecken:

- Bietet einen sanften visuellen Übergang vom anfänglichen Start der App bis zum vollständig geladenen Zustand.
- Verbessert das Benutzererlebnis, während die App-Dateien über das Netzwerk geladen oder von Speichermedien abgerufen werden.
- Trägt zum Erscheinungsbild des Startbildschirms bei, wenn eine installierte progressive Webanwendung (PWA) in einigen Browsern und Betriebssystemen gestartet wird.

Es wird empfohlen, dass der Farbwert, den Sie für das `background_color` Manifest-Mitglied angeben, dem Wert der {{cssxref("background-color")}} Eigenschaft im Stylesheet Ihrer App entspricht. Dies stellt eine visuelle Konsistenz zwischen der anfänglichen Darstellung (einschließlich des Startbildschirms, falls zutreffend) und der vollständig geladene Anwendung sicher. Durch die Angleichung dieser Farben können Sie ein eleganteres und nahtloseres Erlebnis für Ihre Benutzer schaffen.

Nach dem Laden einer App hat die `background-color` im Stylesheet Vorrang. Das `background_color` im Manifest wird nur als temporäre Maßnahme während der anfänglichen Ladephase und zur Erstellung von Startbildschirmen in einigen Umgebungen verwendet.

> [!NOTE]
> Browser können den `background_color` Manifestwert überschreiben, um jede [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Media Query zu unterstützen, die in Ihrem CSS der App definiert sind.

## Beispiele

### Eine konsistente Hintergrundfarbe für Ihre App festlegen

Stellen Sie sich vor, Sie erstellen eine Wetter-App, und die Hintergrundfarbe im Stylesheet Ihrer App ist wie unten gezeigt gesetzt:

```css
body {
  background-color: skyblue;
}
```

Um sicherzustellen, dass Ihre Benutzer eine konsistente Hintergrundfarbe vom Start bis zum vollständigen Laden Ihrer App sehen, würden Sie dieselbe Hintergrundfarbe in der Manifestdatei Ihrer App wie folgt festlegen:

```json
{
  "name": "WeatherPro",
  "display": "standalone",
  "background_color": "skyblue",
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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifest-Mitglied
- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) Manifest-Mitglied
- [Passen Sie die Themen- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
