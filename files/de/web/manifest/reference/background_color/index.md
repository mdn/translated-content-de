---
title: background_color
slug: Web/Manifest/Reference/background_color
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Der `background_color` Manifest-Eintrag wird verwendet, um eine anfängliche Hintergrundfarbe für Ihre Webanwendung festzulegen. Diese Farbe erscheint im Anwendungsfenster, bevor die Stylesheets Ihrer Anwendung geladen sind.

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

Der `background_color` Eintrag erfüllt die folgenden Zwecke:

- Sorgt für einen reibungslosen visuellen Übergang vom ersten Start der App bis zu ihrem vollständig geladenen Zustand.
- Verbessert die Benutzererfahrung während des Ladevorgangs der App-Dateien über das Netzwerk oder beim Zugriff von Speichermedien.
- Trägt zum Erscheinungsbild des Startbildschirms in einigen Browsern und Betriebssystemen bei, wenn eine installierte Progressive Web App (PWA) gestartet wird.

Es wird empfohlen, dass der Farbwert, den Sie für den `background_color` Manifest-Eintrag angeben, dem {{cssxref("background-color")}} Eigenschaftswert in Ihrem Stylesheet entspricht. Dies stellt die visuelle Konsistenz zwischen der anfänglichen Anzeige (einschließlich des Startbildschirms, sofern zutreffend) und der vollständig geladenen Anwendung sicher. Durch die Abstimmung dieser Farben können Sie eine ausgefeiltere und nahtlosere Erfahrung für Ihre Benutzer schaffen.

Nachdem eine App geladen ist, hat die `background-color` im Stylesheet Vorrang. Das `background_color` des Manifests wird nur als temporäre Maßnahme während der anfänglichen Ladephase und zur Erstellung von Startbildschirmen in einigen Umgebungen verwendet.

> [!NOTE]
> Browser können den `background_color` Manifestwert überschreiben, um jede in der CSS der App definierte [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Abfrage zu unterstützen.

## Beispiele

### Eine konsistente Hintergrundfarbe für Ihre App festlegen

Stellen Sie sich vor, Sie erstellen eine Wetter-App und die Hintergrundfarbe in Ihrem App-Stylesheet ist wie unten gezeigt festgelegt:

```css
body {
  background-color: #87ceeb;
}
```

Um sicherzustellen, dass Ihre Benutzer eine konsistente Hintergrundfarbe vom Start bis zum vollständigen Laden Ihrer App sehen, sollten Sie dieselbe Hintergrundfarbe in der Manifestdatei Ihrer App wie folgt festlegen:

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

- [`display`](/de/docs/Web/Manifest/Reference/display) Manifest-Eintrag
- [`theme_color`](/de/docs/Web/Manifest/Reference/theme_color) Manifest-Eintrag
- [Anpassen der Themen- und Hintergrundfarben Ihrer App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) beim Erstellen von PWAs
