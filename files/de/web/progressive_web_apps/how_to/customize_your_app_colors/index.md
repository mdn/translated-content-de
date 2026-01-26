---
title: Passen Sie das Thema und die Hintergrundfarben Ihrer App an
short-title: Passen Sie die Farben Ihrer App an
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: 1351f23f494656e58195ab8e186cd8946e90adcf
---

Beim Erstellen von [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur das Erscheinungsbild des Inhalts Ihrer App zu berücksichtigen, sondern auch, wie die App auf dem Gerät des Benutzers erscheint, sobald sie installiert ist.

Eine Möglichkeit, das Fenster, in dem Ihre App erscheint, anzupassen, ist die Verwendung der [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Mitglieder des [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest).

Durch die Definition der `theme_color` und `background_color` Mitglieder im PWA-Manifest können Sie ein abgerundeteres Erlebnis für Ihre Benutzer schaffen. Diese kleinen Details können dazu beitragen, dass sich Ihre PWA mehr wie eine Betriebssystem-native App anfühlt und den Benutzern vertrauter erscheint.

## Anpassen der Hintergrundfarbe des App-Fensters

Das [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Manifest-Mitglied definiert die Farbe, die im Anwendungsfenster erscheint, bevor die Stylesheets Ihrer App geladen sind.

Da diese Farbe erscheint, bevor Ihre Stylesheets geladen sind, setzen Sie ihren Wert auf denselben Farbwert wie die `background-color` CSS-Eigenschaft im Stylesheet Ihrer Anwendung. Dies gewährleistet einen fließenden visuellen Übergang zwischen dem Starten der Webanwendung und dem Laden des Inhalts.

Der Wert kann jeder gültige CSS {{cssxref("&lt;color&gt;")}} sein. In diesem Beispiel eines Web-App-Manifest-Datei ist die Hintergrundfarbe der Anwendung auf die [benannte Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `peachpuff` gesetzt:

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

Die Anwendung lädt außerdem ein Stylesheet, das dieselbe Farbe auf den Hintergrund des `body`-Elements anwendet:

```css
body {
  background-color: peachpuff;
}
```

Der folgende Screenshot zeigt den oben stehenden Code in Aktion. Die PWA, die diesen Code verwendet, ist auf Windows installiert, und der Screenshot zeigt, wie das Anwendungsfenster aussieht, bevor der Inhalt der App geladen ist:

![Das App-Fenster auf Windows, zeigt die peachpuff Hintergrundfarbe](./background-color-windows.png)

## Definieren einer Themafarbe

Das [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) Mitglied in Ihrem PWA-Manifest definiert die Standardfarbe der Betriebssystem- und Browser-UI-Elemente, die in der Anwendung verwendet werden.

Verschiedene Geräte, Betriebssysteme und Browser wenden das `theme_color` Mitglied unterschiedlich an. Zum Beispiel:

- Auf mobilen Geräten wird die Themafarbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Themafarbe verwendet, um die Titelleiste Ihres [Standalone-App-Fensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzupassen.

Wählen Sie eine `theme_color`, die das Gesamtdesign und Branding Ihrer PWA ergänzt und auf einer Vielzahl von Geräten und Plattformen gut funktioniert, um ein konsistentes Benutzererlebnis zu gewährleisten.

Wie bei `background_color` ist jeder {{cssxref("&lt;color&gt;")}} Wert gültig. In diesem Web-App-Manifest-Datei-Beispiel ist die `theme_color` auf das `rgb(255 218 185)`, das [RGB](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Äquivalent von `peachpuff`, gesetzt:

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

Der folgende Screenshot zeigt den oben stehenden Code in Aktion, wenn die App auf Windows installiert ist, wobei das `theme_color` Manifest-Mitglied als Farbe der Titelleiste verwendet wird:

![Das App-Fenster auf Windows, zeigt die Themafarbe in der Titelleiste](./background-theme-colors-windows.png)

### Beziehung zum `theme-color` Meta-Element-Wert

Der [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} HTML-Elements kann verwendet werden, um eine Themafarbe pro Webseite zu definieren. Dies unterscheidet sich vom `theme_color` Manifest-Mitglied, das Sie nur einmal, global, für Ihre App definieren.

Wenn beide gesetzt sind, überschreibt der `theme-color` Meta-Element-Wert das `theme_color` Manifest-Mitglied. Dies ermöglicht es Ihnen, eine globale Farbe für Ihre App zu definieren und sie auf bestimmten Seiten zu überschreiben.

Beachten Sie, dass in einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Meta-Element-Wert auch verwendet wird, um die Browser-UI zu gestalten.

## Siehe auch

- [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest).
- [Meta Theme Color und Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
