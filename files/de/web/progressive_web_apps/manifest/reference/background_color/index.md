---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: 1351f23f494656e58195ab8e186cd8946e90adcf
---

Das `background_color`-Manifestmitglied wird verwendet, um eine anfängliche Hintergrundfarbe für Ihre Webanwendung festzulegen. Diese Farbe erscheint im Anwendungsfenster, bevor die Stylesheets Ihrer Anwendung geladen sind.

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

Das `background_color`-Mitglied dient folgenden Zwecken:

- Es ermöglicht einen reibungslosen visuellen Übergang vom ersten Start der App bis zum vollständig geladenen Zustand.
- Es verbessert die Benutzererfahrung, während die App-Dateien über das Netzwerk geladen oder von Speichermedien abgerufen werden.
- Es trägt zum Erscheinungsbild des Begrüßungsbildschirms in manchen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der für das `background_color`-Manifestmitglied angegebene Farbwert mit dem Wert der {{cssxref("background-color")}}-Eigenschaft im Stylesheet Ihrer App übereinstimmt. Dies gewährleistet visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Begrüßungsbildschirms, falls zutreffend) und der vollständig geladenen Anwendung. Indem Sie diese Farben abstimmen, schaffen Sie ein polierteres und nahtloses Erlebnis für Ihre Benutzer.

Nachdem eine App geladen ist, hat die `background-color` im Stylesheet Vorrang. Das `background_color` des Manifests wird nur während der anfänglichen Ladephase und zur Erstellung von Begrüßungsbildschirmen in einigen Umgebungen als temporäre Maßnahme verwendet.

> [!NOTE]
> Browser können den `background_color`-Manifestwert überschreiben, um jede in Ihrem CSS definierte {{cssxref("@media/prefers-color-scheme")}}-Media Query zu unterstützen.

## Beispiele

### Eine konsistente Hintergrundfarbe für Ihre App festlegen

Stellen Sie sich vor, Sie bauen eine Wetter-App und die Hintergrundfarbe im Stylesheet Ihrer App ist wie unten gezeigt festgelegt:

```css
body {
  background-color: skyblue;
}
```

Um sicherzustellen, dass Ihre Benutzer von Start bis zum vollständigen Laden Ihrer App eine konsistente Hintergrundfarbe sehen, würden Sie dieselbe Hintergrundfarbe in der Manifestdatei Ihrer App wie folgt festlegen:

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Manifestmitglied
- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)-Manifestmitglied
- [Passen Sie die Themen- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), wenn Sie PWAs erstellen.
