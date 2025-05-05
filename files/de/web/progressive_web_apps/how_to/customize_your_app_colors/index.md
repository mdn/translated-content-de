---
title: Passen Sie das Design und die Hintergrundfarben Ihrer App an
short-title: Passen Sie die Farben Ihrer App an
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Beim Erstellen von [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur das Erscheinungsbild der Inhalte Ihrer App zu berücksichtigen, sondern auch, wie die App auf dem Gerät des Benutzers aussieht, sobald sie installiert ist.

Eine Möglichkeit, das Fenster anzupassen, in dem Ihre App erscheint, besteht darin, die [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Mitglieder des [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest) zu verwenden.

Indem Sie die `theme_color` und `background_color` Mitglieder in Ihrem PWA-Manifest definieren, können Sie eine verfeinerte Benutzererfahrung schaffen. Diese kleinen Details können dazu beitragen, dass sich Ihre PWA mehr wie eine OS-native App anfühlt und den Benutzern vertrauter erscheint.

## Passen Sie die Hintergrundfarbe des App-Fensters an

Das [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Manifestmitglied definiert die Farbe, die im Anwendungsfenster erscheint, bevor die Stylesheets Ihrer App geladen sind.

Da diese Farbe erscheint, bevor Ihre Stylesheets geladen sind, sollten Sie den Wert auf denselben Farbwert wie die `background-color` CSS-Eigenschaft im Stylesheet Ihrer Anwendung setzen. Dies stellt einen reibungslosen visuellen Übergang zwischen dem Start der Webanwendung und dem Laden ihrer Inhalte sicher.

Der Wert kann jede gültige CSS [`<color>`](/de/docs/Web/CSS/color_value) sein. In diesem Beispiel einer Web-App-Manifestdatei ist die Hintergrundfarbe der Anwendung auf die [benannte Farbe](/de/docs/Web/CSS/named-color) `peachpuff` gesetzt:

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

Die Anwendung lädt auch ein Stylesheet, das die gleiche Farbe für den Hintergrund des `body`-Elements anwendet:

```css
body {
  background-color: peachpuff;
}
```

Der folgende Screenshot zeigt den obigen Code in Aktion. Die PWA, die diesen Code verwendet, ist auf Windows installiert, und der Screenshot zeigt, wie das Anwendungsfenster aussieht, bevor der Inhalt der App geladen ist:

![Das App-Fenster auf Windows zeigt die peachpuff Hintergrundfarbe](./background-color-windows.png)

## Definieren Sie eine Designfarbe

Das [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) Mitglied in Ihrem PWA-Manifest definiert die Standardfarbe der Betriebssystem- und Browser-UI-Elemente, die in der Anwendung verwendet werden.

Verschiedene Geräte, Betriebssysteme und Browser wenden das `theme_color` Mitglied unterschiedlich an. Zum Beispiel:

- Auf mobilen Geräten wird die Designfarbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Designfarbe verwendet, um die Titelleiste Ihres [eigenständigen App-Fensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzupassen.

Wählen Sie eine `theme_color`, die zum Gesamtdesign und zur Markenidentität Ihrer PWA passt und sowohl auf verschiedenen Geräten als auch Plattformen gut funktioniert, um ein konsistentes Benutzererlebnis zu gewährleisten.

Wie bei `background_color` ist jeder [`<color>`](/de/docs/Web/CSS/color_value) Wert gültig. In diesem Beispiel einer Web-App-Manifestdatei ist die `theme_color` auf `rgb(255 218 185)`, das [RGB](/de/docs/Web/CSS/color_value/rgb) Äquivalent von `peachpuff`, gesetzt:

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

![Das App-Fenster auf Windows zeigt die Designfarbe in der Titelleiste](./background-theme-colors-windows.png)

### Beziehung zum Wert des `theme-color` Meta-Elements

Der [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} HTML-Elements kann verwendet werden, um pro Webseite eine Designfarbe zu definieren. Dies unterscheidet sich vom `theme_color` Manifestmitglied, das Sie nur einmal global für Ihre App definieren.

Wenn beide gesetzt sind, überschreibt der `theme-color` Meta-Elementwert das `theme_color` Manifestmitglied. Dies ermöglicht es Ihnen, eine globale Farbe für Ihre App zu definieren und sie auf bestimmten Seiten zu überschreiben.

Beachten Sie, dass in einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Meta-Elementwert auch zur Gestaltung der Browser-UI verwendet wird.

## Siehe auch

- [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest).
- [Meta Theme Color and Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
