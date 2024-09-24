---
title: Passen Sie das Thema und die Hintergrundfarben Ihrer App an
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

Beim Erstellen von [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur auf das Erscheinungsbild der Inhalte Ihrer App zu achten, sondern auch darauf, wie die App auf dem Gerät des Nutzers erscheint, sobald sie installiert ist.

Eine Möglichkeit, das Fenster zu konfigurieren, in dem Ihre App angezeigt wird, ist die Verwendung der [`theme_color`](/de/docs/Web/Manifest/theme_color) und [`background_color`](/de/docs/Web/Manifest/background_color) Mitglieder des [Web App Manifests](/de/docs/Web/Manifest).

Indem Sie die `theme_color` und `background_color` Mitglieder in Ihrem PWA-Manifest definieren, können Sie Ihren Nutzern ein verfeinertes Erlebnis bieten. Diese kleinen Details können dazu beitragen, dass Ihre PWA sich mehr wie eine native OS-App anfühlt und Ihren Nutzern vertrauter erscheint.

## Hintergrundfarbe des App-Fensters anpassen

Das [`background_color`](/de/docs/Web/Manifest/background_color) Manifest-Mitglied definiert die Farbe, die im Anwendungsfenster erscheint, bevor die Stylesheets Ihrer App geladen sind.

Da diese Farbe angezeigt wird, bevor Ihre Stylesheets geladen sind, sollten Sie ihren Wert auf denselben Farbwert wie die `background-color` CSS-Eigenschaft in Ihrem Anwendungs-Stylesheet setzen. Dies gewährleistet einen reibungslosen visuellen Übergang beim Starten der Webanwendung und beim Laden ihrer Inhalte.

Der Wert kann jede gültige CSS [`<color>`](/de/docs/Web/CSS/color_value) sein. In diesem Beispiel einer Web-App Manifestdatei wird die Hintergrundfarbe der Anwendung auf die [benannte Farbe](/de/docs/Web/CSS/named-color) `peachpuff` gesetzt:

```json
{
  "name": "My app",
  "start_url": "/",
  "icons": [
    {
      "src": "icon.webp",
      "sizes": "256x256",
      "type": "image/webp"
    }
  ],
  "display": "standalone",
  "background_color": "peachpuff"
}
```

Die Anwendung lädt auch ein Stylesheet, das dieselbe Farbe auf den Hintergrund des Body-Elements anwendet:

```css
body {
  background-color: peachpuff;
}
```

Der folgende Screenshot zeigt den obigen Code in Aktion. Die PWA, die diesen Code verwendet, ist unter Windows installiert, und der Screenshot zeigt, wie das Anwendungsfenster aussieht, bevor der Inhalt der App geladen ist:

![Das App-Fenster unter Windows, zeigt die peachpuff-Hintergrundfarbe](./background-color-windows.png)

## Eine Themenfarbe festlegen

Das [`theme_color`](/de/docs/Web/Manifest/theme_color) Mitglied in Ihrem PWA-Manifest definiert die Standardfarbe der Betriebssystem- und Browser-UI-Elemente, die in der Anwendung verwendet werden.

Verschiedene Geräte, Betriebssysteme und Browser wenden das `theme_color` Mitglied unterschiedlich an. Zum Beispiel:

- Auf Mobilgeräten wird die Themenfarbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Themenfarbe verwendet, um die Titelleiste Ihres [standalone App-Fensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzupassen.

Wählen Sie eine `theme_color`, die das Gesamtdesign und das Branding Ihrer PWA ergänzt und auf einer Vielzahl von Geräten und Plattformen gut funktioniert, um ein konsistentes Benutzererlebnis zu gewährleisten.

Wie bei `background_color` ist jeder [`<color>`](/de/docs/Web/CSS/color_value) Wert gültig. In diesem Beispiel einer Web-App Manifestdatei wird die `theme_color` auf `rgb(255 218 185)` gesetzt, das [RGB](/de/docs/Web/CSS/color_value/rgb) Äquivalent von `peachpuff`:

```json
{
  "name": "My app",
  "start_url": "/",
  "icons": [
    {
      "src": "icon.webp",
      "sizes": "48x48",
      "type": "image/webp"
    }
  ],
  "display": "standalone",
  "background_color": "peachpuff",
  "theme_color": "rgb(255 218 185)"
}
```

Der folgende Screenshot zeigt den obigen Code in Aktion, wenn die App unter Windows installiert ist, wo das `theme_color` Manifestmitglied als Farbe der Titelleiste verwendet wird:

![Das App-Fenster unter Windows, zeigt die Themenfarbe in der Titelleiste](./background-theme-colors-windows.png)

### Beziehung zum `theme-color` Meta-Elementwert

Der [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Element/meta/name) Attribut des {{htmlelement("meta")}} HTML Elements kann verwendet werden, um eine Themenfarbe pro Webseite zu definieren. Dies unterscheidet sich vom `theme_color` Manifestmitglied, das Sie nur einmal global für Ihre App definieren.

Wenn beide gesetzt sind, überschreibt der `theme-color` Meta-Elementwert das `theme_color` Manifestmitglied. Dies ermöglicht es Ihnen, eine globale Farbe für Ihre App festzulegen und sie auf bestimmten Seiten zu überschreiben.

Beachten Sie, dass in einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Meta-Elementwert ebenfalls verwendet wird, um die Browser-UI zu stylen.

## Siehe auch

- [Web App Manifeste](/de/docs/Web/Manifest).
- [Meta Theme Color and Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
