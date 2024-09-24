---
title: background_color
slug: Web/Manifest/background_color
l10n:
  sourceCommit: 4d01b5ffbaac2c8dd568e6382e4aaca66af7f66d
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `background_color`-Manifestmitglied wird verwendet, um eine anfängliche Hintergrundfarbe für Ihre Webanwendung festzulegen. Diese Farbe erscheint im Anwendungsfenster, bevor die Stylesheets Ihrer Anwendung geladen sind.

## Syntax

```json-nolint
/* Using named color */
"background_color": "aliceblue"

/* Using hexadecimal value */
"background_color": "#f0fbff

/* Using RGB value */
"background_color": "rgb(240 248 255)"
```

### Werte

- `background_color`

  - : Ein String, der einen gültigen [Farbwert](/de/docs/Web/CSS/color_value) angibt.

## Beschreibung

Das `background_color`-Mitglied dient den folgenden Zwecken:

- Bietet einen gleitenden visuellen Übergang vom anfänglichen Start der App zu ihrem vollständig geladenen Zustand.
- Verbessert die Benutzererfahrung, während die App-Dateien über das Netzwerk geladen oder von Speichermedien abgerufen werden.
- Trägt zum Erscheinungsbild des Startbildschirms in einigen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der für das `background_color`-Manifestmitglied angegebene Farbwert dem Wert der {{cssxref("background-color")}}-Eigenschaft in Ihrem App-Stylesheet entspricht. Dies stellt sicher, dass visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Startbildschirms, wenn zutreffend) und der vollständig geladenen Anwendung besteht. Durch die Abstimmung dieser Farben können Sie ein verfeinertes und nahtloses Erlebnis für Ihre Benutzer schaffen.

Nachdem eine App geladen ist, hat die `background-color` im Stylesheet Vorrang. Das `background_color`-Manifest wird nur als temporäre Maßnahme während der anfänglichen Ladephase und zur Erstellung von Startbildschirmen in einigen Umgebungen verwendet.

> [!NOTE]
> Browser können den `background_color`-Manifestwert außer Kraft setzen, um jede in Ihrem CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienabfrage zu unterstützen.

## Beispiele

### Eine konsistente Hintergrundfarbe für Ihre App festlegen

Stellen Sie sich vor, Sie bauen eine Wetter-App, und die Hintergrundfarbe in Ihrem App-Stylesheet ist wie unten dargestellt festgelegt:

```css
body {
  background-color: #87ceeb;
}
```

Um sicherzustellen, dass Ihre Benutzer von der App-Start bis zum vollständigen Laden eine konsistente Hintergrundfarbe sehen, würden Sie dieselbe Hintergrundfarbe in Ihrer App-Manifestsdatei wie folgt festlegen:

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

- [`display`](/de/docs/Web/Manifest/display)-Manifestmitglied
- [`theme_color`](/de/docs/Web/Manifest/theme_color)-Manifestmitglied
- [Passen Sie die Theme- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
