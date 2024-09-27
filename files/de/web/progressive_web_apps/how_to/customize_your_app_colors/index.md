---
title: Passen Sie das Design und die Hintergrundfarben Ihrer App an
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

Beim Erstellen von [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur das Erscheinungsbild des Inhalts Ihrer App zu berücksichtigen, sondern auch, wie die App auf dem Gerät des Nutzers erscheint, sobald die App installiert ist.

Eine Möglichkeit, das Fenster, in dem Ihre App erscheint, individuell anzupassen, ist die Verwendung der [`theme_color`](/de/docs/Web/Manifest/theme_color) und [`background_color`](/de/docs/Web/Manifest/background_color) Mitglieder des [Web-App-Manifests](/de/docs/Web/Manifest).

Indem Sie die `theme_color` und `background_color` Mitglieder in Ihrem PWA-Manifest definieren, können Sie eine professionellere Erfahrung für Ihre Nutzer schaffen. Diese kleinen Details können dazu beitragen, dass Ihre PWA mehr wie eine OS-native App erscheint und für Ihre Nutzer vertrauter wirkt.

## Hintergrundfarbe des App-Fensters anpassen

Das [`background_color`](/de/docs/Web/Manifest/background_color) Manifestmitglied definiert die Farbe, die im Anwendungsfenster erscheint, bevor die Stylesheets Ihrer App geladen sind.

Da diese Farbe erscheint, bevor Ihre Stylesheets geladen sind, setzen Sie deren Wert auf denselben Farbwert wie die `background-color` CSS-Eigenschaft in Ihrem Anwendungsstylesheet. Dies gewährleistet einen flüssigen visuellen Übergang zwischen dem Start der Webanwendung und dem Laden ihres Inhalts.

Der Wert kann jede gültige CSS [`<color>`](/de/docs/Web/CSS/color_value) sein. In diesem Beispiel einer Web-App-Manifestdatei wird die Hintergrundfarbe der Anwendung auf die [benannte Farbe](/de/docs/Web/CSS/named-color) `peachpuff` gesetzt:

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

Der folgende Screenshot zeigt den obigen Code in Aktion. Die PWA, die diesen Code verwendet, ist auf Windows installiert, und der Screenshot zeigt, wie das Anwendungsfenster aussieht, bevor der Inhalt der App geladen ist:

![Das App-Fenster auf Windows, das die peachpuff Hintergrundfarbe zeigt](./background-color-windows.png)

## Eine Thema-Farbe festlegen

Das [`theme_color`](/de/docs/Web/Manifest/theme_color) Mitglied in Ihrem PWA-Manifest definiert die Standardfarbe der Betriebssystem- und Browser-UI-Elemente, die in der Anwendung verwendet werden.

Verschiedene Geräte, Betriebssysteme und Browser wenden das `theme_color` Mitglied unterschiedlich an. Zum Beispiel:

- Auf mobilen Geräten wird die Thema-Farbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Thema-Farbe verwendet, um die Titelleiste Ihres [eigenständigen App-Fensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzupassen.

Wählen Sie eine `theme_color`, die das Gesamtdesign und Branding Ihrer PWA ergänzt und auf verschiedenen Geräten und Plattformen gut funktioniert, um ein konsistentes Benutzererlebnis sicherzustellen.

Wie bei `background_color` ist jeder [`<color>`](/de/docs/Web/CSS/color_value) Wert gültig. In diesem Beispiel einer Web-App-Manifestdatei wird die `theme_color` auf `rgb(255 218 185)` gesetzt, das [RGB](/de/docs/Web/CSS/color_value/rgb) Äquivalent von `peachpuff`:

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

Der folgende Screenshot zeigt den obigen Code in Aktion, wenn die App auf Windows installiert ist, wobei das `theme_color` Manifestmitglied als Farbe der Titelleiste verwendet wird:

![Das App-Fenster auf Windows, das die Thema-Farbe in der Titelleiste zeigt](./background-theme-colors-windows.png)

### Beziehung zum `theme-color` Metaelement-Wert

Der [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Element/meta/name) Attribut des {{htmlelement("meta")}} HTML-Elements kann verwendet werden, um pro Webseite eine Thema-Farbe zu definieren. Dies ist anders als das `theme_color` Manifestmitglied, das Sie nur einmal global für Ihre App definieren.

Wenn beide gesetzt sind, überschreibt der `theme-color` Metaelement-Wert das `theme_color` Manifestmitglied. Dies ermöglicht es Ihnen, eine globale Farbe für Ihre App zu definieren und sie auf spezifischen Seiten zu übersteuern.

Beachten Sie, dass in einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Metaelement-Wert auch zur Gestaltung der Browser-UI verwendet wird.

## Siehe auch

- [Web-App-Manifeste](/de/docs/Web/Manifest)
- [Meta Theme Color and Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
