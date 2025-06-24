---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `background_color` Manifest-Mitglied wird verwendet, um eine anfängliche Hintergrundfarbe für Ihre Webanwendung festzulegen. Diese Farbe erscheint im Anwendungsfenster, bevor die Stylesheets Ihrer Anwendung geladen sind.

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

Das `background_color` Mitglied erfüllt folgende Zwecke:

- Sorgt für einen fließenden Übergang vom anfänglichen Start der App zu ihrem vollständig geladenen Zustand.
- Verbessert die Benutzererfahrung, während die App-Dateien über das Netzwerk geladen oder aus Speichermedien abgerufen werden.
- Trägt zur Darstellung des Startbildschirms in einigen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der Farbwert, den Sie für das `background_color` Manifest-Mitglied angeben, mit dem Wert der {{cssxref("background-color")}} Eigenschaft im Stylesheet Ihrer App übereinstimmt. Dies stellt eine visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Startbildschirms, falls zutreffend) und der vollständig geladenen Anwendung sicher. Durch die Abstimmung dieser Farben können Sie ein reibungsloseres und nahtloseres Benutzererlebnis schaffen.

Nachdem eine App geladen ist, hat die `background-color` im Stylesheet Vorrang. Das `background_color` des Manifests wird nur vorübergehend während der anfänglichen Ladephase und zur Erstellung von Startbildschirmen in einigen Umgebungen verwendet.

> [!NOTE]
> Browser können den `background_color` Manifestwert überschreiben, um jede in Ihrer App's CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Query zu unterstützen.

## Beispiele

### Eine konsistente Hintergrundfarbe für Ihre App festlegen

Stellen Sie sich vor, Sie entwickeln eine Wetter-App und die Hintergrundfarbe im Stylesheet Ihrer App ist wie unten gezeigt festgelegt:

```css
body {
  background-color: #87ceeb;
}
```

Um sicherzustellen, dass Ihre Benutzer von der Einführung bis zur vollständigen Ladezeit Ihrer App eine konsistente Hintergrundfarbe sehen, würden Sie dieselbe Hintergrundfarbe in Ihrer Manifest-Datei der App wie folgt festlegen:

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifest-Mitglied
- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) Manifest-Mitglied
- [Anpassen der Themen- und Hintergrundfarben Ihrer App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
