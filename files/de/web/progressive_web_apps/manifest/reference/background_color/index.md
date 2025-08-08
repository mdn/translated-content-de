---
title: background_color
slug: Web/Progressive_web_apps/Manifest/Reference/background_color
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Das `background_color` Manifest-Mitglied wird verwendet, um eine anfängliche Hintergrundfarbe für Ihre Webanwendung anzugeben. Diese Farbe erscheint im Anwendungsfenster, bevor die Stylesheets Ihrer Anwendung geladen sind.

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

Das `background_color` Mitglied dient folgenden Zwecken:

- Bietet einen reibungslosen visuellen Übergang vom anfänglichen Start der App zu ihrem vollständig geladenen Zustand.
- Verbessert die Benutzererfahrung, während die App-Dateien über das Netzwerk geladen oder von Speichermedien abgerufen werden.
- Trägt zum Erscheinungsbild des Begrüßungsbildschirms in einigen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der Farbwert, den Sie für das `background_color` Manifest-Mitglied angeben, mit dem Wert der {{cssxref("background-color")}} Eigenschaft in dem Stylesheet Ihrer App übereinstimmt. Dies stellt eine visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Begrüßungsbildschirms, falls vorhanden) und der vollständig geladenen Anwendung sicher. Indem Sie diese Farben aufeinander abstimmen, können Sie eine elegantere und nahtlosere Erfahrung für Ihre Benutzer schaffen.

Nachdem eine App geladen wurde, hat die `background-color` im Stylesheet Vorrang. Das `background_color` des Manifests wird nur als temporäre Maßnahme während der anfänglichen Ladephase und zur Erzeugung von Begrüßungsbildschirmen in einigen Umgebungen verwendet.

> [!NOTE]
> Browser können den Wert des `background_color` Manifests überschreiben, um jede im CSS Ihrer App definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage zu unterstützen.

## Beispiele

### Eine konsistente Hintergrundfarbe für Ihre App festlegen

Stellen Sie sich vor, Sie bauen eine Wetter-App, und die Hintergrundfarbe im Stylesheet Ihrer App ist wie unten gezeigt festgelegt:

```css
body {
  background-color: skyblue;
}
```

Um sicherzustellen, dass Ihre Benutzer von Anfang an bis zum vollständigen Laden Ihrer App eine konsistente Hintergrundfarbe sehen, würden Sie die gleiche Hintergrundfarbe in Ihrer Manifestdatei der App wie folgt festlegen:

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
- [Passen Sie das Design und die Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
