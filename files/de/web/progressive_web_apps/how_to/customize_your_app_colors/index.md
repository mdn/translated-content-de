---
title: Passen Sie das Thema und die Hintergrundfarben Ihrer App an
short-title: Passen Sie die Farben Ihrer App an
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Beim Erstellen von [Progressiven Web-Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur das Erscheinungsbild des Inhalts Ihrer App zu berücksichtigen, sondern auch die Art und Weise, wie die App auf dem Gerät des Benutzers aussieht, sobald sie installiert ist.

Eine Möglichkeit, das Fenster, in dem Ihre App erscheint, anzupassen, besteht darin, die [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Mitglieder im [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) zu verwenden.

Durch die Definition der `theme_color` und `background_color` Mitglieder in Ihrem PWA-Manifest können Sie ein feiner ausgearbeitetes Erlebnis für Ihre Benutzer schaffen. Diese kleinen Details können dazu beitragen, dass Ihre PWA sich eher wie eine OS-native App anfühlt und den Benutzern vertrauter erscheint.

## Passen Sie die Hintergrundfarbe des App-Fensters an

Das [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Manifestmitglied definiert die Farbe, die im Anwendungsfenster erscheint, bevor die Stylesheets Ihrer App geladen wurden.

Da diese Farbe erscheint, bevor Ihre Stylesheets geladen sind, sollten Sie ihren Wert auf denselben Farbwert wie die `background-color` CSS-Eigenschaft im Stylesheet Ihrer Anwendung setzen. Dies gewährleistet einen reibungslosen visuellen Übergang zwischen dem Start der Webanwendung und dem Laden ihres Inhalts.

Der Wert kann jede gültige CSS [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) sein. In diesem Web-App-Manifest-Beispiel ist die Hintergrundfarbe der Anwendung auf die [benannte Farbe](/de/docs/Web/CSS/Reference/Values/named-color) `peachpuff` gesetzt:

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

Der folgende Screenshot zeigt den obigen Code in Aktion. Die PWA, die diesen Code verwendet, ist auf Windows installiert, und der Screenshot zeigt, wie das Anwendungsfenster aussieht, bevor der Inhalt der App geladen wurde:

![Das App-Fenster unter Windows, das die peachpuff-Hintergrundfarbe anzeigt](./background-color-windows.png)

## Definieren Sie eine Themenfarbe

Das [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) Mitglied in Ihrem PWA-Manifest definiert die Standardfarbe der Betriebssystem- und Browser-Benutzeroberflächenelemente, die in der Anwendung verwendet werden.

Verschiedene Geräte, Betriebssysteme und Browser wenden das `theme_color` Mitglied unterschiedlich an. Zum Beispiel:

- Auf Mobilgeräten wird die Themenfarbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Themenfarbe verwendet, um die Titelleiste Ihres [eigenständigen App-Fensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzupassen.

Wählen Sie eine `theme_color`, die das Gesamtdesign und Branding Ihrer PWA ergänzt und auf verschiedenen Geräten und Plattformen gut funktioniert, um eine konsistente Benutzererfahrung sicherzustellen.

Wie bei `background_color` ist jeder [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Wert gültig. In diesem Web-App-Manifest-Beispiel ist die `theme_color` auf `rgb(255 218 185)`, das [RGB](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Äquivalent von `peachpuff`, gesetzt:

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

![Das App-Fenster unter Windows, das die Themenfarbe in der Titelleiste anzeigt](./background-theme-colors-windows.png)

### Beziehung zum `theme-color` Meta-Elementwert

Der [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} HTML-Elements kann verwendet werden, um für jede Webseite eine Themenfarbe zu definieren. Dies unterscheidet sich vom `theme_color` Manifestmitglied, das Sie nur einmal global für Ihre App definieren.

Wenn beide gesetzt sind, überschreibt der `theme-color` Meta-Elementwert das `theme_color` Manifestmitglied. Dies ermöglicht es Ihnen, eine globale Farbe für Ihre App zu definieren und sie auf bestimmten Seiten zu überschreiben.

Beachten Sie, dass in einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Meta-Elementwert auch zur Gestaltung der Browser-Benutzeroberfläche verwendet wird.

## Siehe auch

- [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest).
- [Meta Theme Color and Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
