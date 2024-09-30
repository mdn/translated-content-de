---
title: Anpassen der Themen- und Hintergrundfarben Ihrer App
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

Beim Erstellen von [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur das Erscheinungsbild des App-Inhalts zu berücksichtigen, sondern auch, wie die App auf dem Gerät des Benutzers erscheint, sobald sie installiert ist.

Eine Möglichkeit, das Fenster anzupassen, in dem Ihre App erscheint, ist die Verwendung der [`theme_color`](/de/docs/Web/Manifest/theme_color) und [`background_color`](/de/docs/Web/Manifest/background_color) Mitglieder des [Web-App-Manifests](/de/docs/Web/Manifest).

Indem Sie die `theme_color`- und `background_color`-Mitglieder in Ihrem PWA-Manifest definieren, können Sie eine mehr ausgefeilte Erfahrung für Ihre Benutzer schaffen. Diese kleinen Details können dazu beitragen, dass sich Ihre PWA mehr wie eine OS-native App anfühlt und den Benutzern vertrauter erscheint.

## Anpassen der Hintergrundfarbe des App-Fensters

Das [`background_color`](/de/docs/Web/Manifest/background_color)-Manifestmitglied definiert die Farbe, die im Anwendungsfenster erscheint, bevor die Stylesheets Ihrer App geladen wurden.

Da diese Farbe erscheint, bevor Ihre Stylesheets geladen sind, setzen Sie ihren Wert auf denselben Farbwert wie die `background-color` CSS-Eigenschaft in Ihrem Anwendungs-Stylesheet. Dies gewährleistet einen flüssigen visuellen Übergang beim Starten der Webanwendung und Laden ihres Inhalts.

Der Wert kann jeder gültige CSS [`<color>`](/de/docs/Web/CSS/color_value) sein. In diesem Beispiel eines Web-App-Manifests ist die Hintergrundfarbe der Anwendung auf die [benannte Farbe](/de/docs/Web/CSS/named-color) `peachpuff` gesetzt:

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

Die Anwendung lädt auch ein Stylesheet, das dieselbe Farbe für den Hintergrund des Body-Elements anwendet:

```css
body {
  background-color: peachpuff;
}
```

Der folgende Screenshot zeigt den obigen Code in Aktion. Die PWA, die diesen Code verwendet, ist auf Windows installiert und der Screenshot zeigt, wie das Anwendungsfenster aussieht, bevor der Inhalt der App geladen wurde:

![Das App-Fenster, auf Windows, zeigt die peachpuff Hintergrundfarbe](./background-color-windows.png)

## Definieren einer Themenfarbe

Das [`theme_color`](/de/docs/Web/Manifest/theme_color)-Mitglied in Ihrem PWA-Manifest definiert die Standardfarbe der Betriebssystem- und Browser-UI-Elemente, die in der Anwendung verwendet werden.

Unterschiedliche Geräte, Betriebssysteme und Browser wenden das `theme_color` Mitglied unterschiedlich an. Zum Beispiel:

- Auf mobilen Geräten wird die Themenfarbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Themenfarbe verwendet, um die Titelleiste Ihres [Stand-alone-App-Fensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) zu gestalten.

Wählen Sie eine `theme_color`, die das Gesamtdesign und Branding Ihrer PWA ergänzt und auf einer Vielzahl von Geräten und Plattformen gut funktioniert, um eine konsistente Benutzererfahrung zu gewährleisten.

Wie bei `background_color` ist jeder [`<color>`](/de/docs/Web/CSS/color_value) Wert gültig. In diesem Beispiel eines Web-App-Manifests ist die `theme_color` auf `rgb(255 218 185)` gesetzt, das [RGB](/de/docs/Web/CSS/color_value/rgb)-Äquivalent von `peachpuff`:

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

Der folgende Screenshot zeigt den obigen Code in Aktion, wenn die App auf Windows installiert ist, wo das `theme_color` Manifestmitglied als Farbe der Titelleiste verwendet wird:

![Das App-Fenster, auf Windows, zeigt die Themenfarbe in der Titelleiste](./background-theme-colors-windows.png)

### Beziehung zum `theme-color` Meta-Elementwert

Der [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Element/meta/name) Attribut des {{htmlelement("meta")}} HTML-Elements kann verwendet werden, um eine Themenfarbe pro Webseite zu definieren. Dies unterscheidet sich vom `theme_color` Manifestmitglied, das Sie nur einmal, global, für Ihre App definieren.

Wenn beide gesetzt sind, überschreibt der `theme-color` Meta-Elementwert das `theme_color` Manifestmitglied. Dies ermöglicht es Ihnen, eine globale Farbe für Ihre App zu definieren und sie auf bestimmten Seiten zu überschreiben.

Beachten Sie, dass in einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Meta-Elementwert auch zur Gestaltung der Browser-UI verwendet wird.

## Siehe auch

- [Web App Manifests](/de/docs/Web/Manifest).
- [Meta Theme Color and Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
