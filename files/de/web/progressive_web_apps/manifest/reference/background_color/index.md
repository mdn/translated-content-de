---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

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

  - : Ein String, der einen gültigen [Farbwert](/de/docs/Web/CSS/color_value) angibt.

## Beschreibung

Das `background_color`-Mitglied erfüllt folgende Zwecke:

- Es bietet einen reibungslosen visuellen Übergang vom ersten Start der App zu ihrem vollständig geladenen Zustand.
- Es verbessert die Benutzererfahrung, während die App-Dateien über das Netzwerk geladen oder von Speichermedien abgerufen werden.
- Es trägt zum Erscheinungsbild des Startbildschirms in einigen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der von Ihnen für das `background_color`-Manifestmitglied angegebene Farbwert mit dem {{cssxref("background-color")}}-Eigenschaftswert im Stylesheet Ihrer App übereinstimmt. Dies gewährleistet eine visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Startbildschirms, falls zutreffend) und der vollständig geladenen Anwendung. Durch die Angleichung dieser Farben können Sie ein professionelleres und nahtloseres Benutzererlebnis schaffen.

Nachdem eine App geladen wurde, hat die `background-color` im Stylesheet Vorrang. Das `background_color` im Manifest wird nur vorübergehend während der anfänglichen Ladephase und zur Erstellung von Startbildschirmen in bestimmten Umgebungen verwendet.

> [!NOTE]
> Browser können den `background_color`-Manifestwert überschreiben, um eine in Ihrem CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Abfrage zu unterstützen.

## Beispiele

### Eine konsistente Hintergrundfarbe für Ihre App festlegen

Stellen Sie sich vor, Sie erstellen eine Wetter-App, und die Hintergrundfarbe in Ihrem Stylesheet ist wie unten gezeigt festgelegt:

```css
body {
  background-color: #87ceeb;
}
```

Um sicherzustellen, dass Ihre Benutzer eine konsistente Hintergrundfarbe vom Start bis zum vollständigen Laden Ihrer App sehen, würden Sie die gleiche Hintergrundfarbe in der Manifestdatei Ihrer App festlegen wie folgt:

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifestmitglied
- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) Manifestmitglied
- [Passen Sie das Thema und die Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), wenn Sie PWAs erstellen.
