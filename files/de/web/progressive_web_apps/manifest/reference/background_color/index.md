---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
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

  - : Eine Zeichenkette, die einen gültigen [Farbwert](/de/docs/Web/CSS/color_value) angibt.

## Beschreibung

Das `background_color`-Mitglied dient folgenden Zwecken:

- Es bietet einen reibungslosen visuellen Übergang vom Erststart der App bis zum vollständig geladenen Zustand.
- Es verbessert das Benutzererlebnis, während die App-Dateien über das Netzwerk geladen oder von Speichermedien abgerufen werden.
- Es trägt zum Erscheinungsbild des Startbildschirms in einigen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der Farbwert, den Sie für das `background_color`-Manifestmitglied angeben, mit dem Wert der {{cssxref("background-color")}}-Eigenschaft im Stylesheet Ihrer App übereinstimmt. Dadurch wird die visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Startbildschirms, sofern zutreffend) und der vollständig geladenen Anwendung sichergestellt. Indem Sie diese Farben aufeinander abstimmen, können Sie ein anspruchsvolleres und nahtloseres Erlebnis für Ihre Benutzer schaffen.

Nachdem eine App geladen wurde, hat die `background-color` im Stylesheet Vorrang. Das `background_color` des Manifests wird nur als temporäre Maßnahme während der anfänglichen Ladephase und zur Erstellung von Startbildschirmen in einigen Umgebungen verwendet.

> [!NOTE]
> Browser können den `background_color`-Manifestwert überschreiben, um jede in Ihrem CSS definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienabfrage zu unterstützen.

## Beispiele

### Eine konsistente Hintergrundfarbe für Ihre App festlegen

Stellen Sie sich vor, Sie erstellen eine Wetter-App, und die Hintergrundfarbe im Stylesheet Ihrer App ist wie unten gezeigt festgelegt:

```css
body {
  background-color: #87ceeb;
}
```

Um sicherzustellen, dass Ihre Benutzer von der Einführung bis zur vollständigen Ladephase Ihrer App eine konsistente Hintergrundfarbe sehen, würden Sie dieselbe Hintergrundfarbe in Ihrer Manifestdatei der App wie folgt festlegen:

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

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Manifestmitglied
- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)-Manifestmitglied
- [Passen Sie das Design und die Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), wenn Sie PWAs erstellen
