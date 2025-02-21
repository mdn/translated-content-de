---
title: Passen Sie das Thema und die Hintergrundfarben Ihrer App an
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

Beim Erstellen von [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur das Erscheinungsbild der Inhalte Ihrer App zu berücksichtigen, sondern auch, wie die App auf dem Gerät des Benutzers erscheint, sobald sie installiert ist.

Eine Möglichkeit, das Fenster anzupassen, in dem Ihre App angezeigt wird, besteht darin, die [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Mitglieder des [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest) zu verwenden.

Indem Sie die Mitglieder `theme_color` und `background_color` in Ihrem PWA-Manifest definieren, können Sie ein ansprechenderes Erlebnis für Ihre Benutzer schaffen. Diese kleinen Details können dazu beitragen, dass sich Ihre PWA mehr wie eine betriebssystemeigene App anfühlt und den Benutzern vertrauter erscheint.

## Passen Sie die Hintergrundfarbe des App-Fensters an

Das [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) Manifestmitglied definiert die Farbe, die im Anwendungsfenster angezeigt wird, bevor die Stylesheets Ihrer App geladen sind.

Da diese Farbe angezeigt wird, bevor Ihre Stylesheets geladen sind, sollten Sie ihren Wert auf den gleichen Wert wie die `background-color` CSS-Eigenschaft in Ihrem Anwendungsstylesheet setzen. Dies gewährleistet einen reibungslosen visuellen Übergang zwischen dem Start der Webanwendung und dem Laden ihrer Inhalte.

Der Wert kann jede gültige CSS [`<color>`](/de/docs/Web/CSS/color_value) sein. In diesem Web App Manifest-Dateibeispiel wird die Hintergrundfarbe der Anwendung auf die [benannte Farbe](/de/docs/Web/CSS/named-color) `peachpuff` gesetzt:

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

Die Anwendung lädt auch ein Stylesheet, das die gleiche Farbe auf den Hintergrund des `body` Elements anwendet:

```css
body {
  background-color: peachpuff;
}
```

Der folgende Screenshot zeigt den obigen Code in Aktion. Die PWA, die diesen Code verwendet, ist auf Windows installiert, und der Screenshot zeigt, wie das Anwendungsfenster aussieht, bevor der Inhalt der App geladen ist:

![Das App-Fenster auf Windows zeigt die peachpuff Hintergrundfarbe](./background-color-windows.png)

## Definieren Sie eine Themenfarbe

Das [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) Mitglied in Ihrem PWA-Manifest definiert die Standardfarbe von Betriebssystem- und Browser-UI-Elementen, die in der Anwendung verwendet werden.

Verschiedene Geräte, Betriebssysteme und Browser wenden das `theme_color` Mitglied unterschiedlich an. Zum Beispiel:

- Auf Mobilgeräten wird die Themenfarbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Themenfarbe verwendet, um die Titelleiste Ihres [eigenständigen Anwendungsfensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzupassen.

Wählen Sie eine `theme_color`, die das Gesamtdesign und Branding Ihrer PWA ergänzt und auf einer Vielzahl von Geräten und Plattformen gut funktioniert, um ein konsistentes Benutzererlebnis zu gewährleisten.

Wie bei `background_color` ist jeder [`<color>`](/de/docs/Web/CSS/color_value) Wert gültig. In diesem Web App Manifest-Dateibeispiel ist die `theme_color` auf `rgb(255 218 185)` gesetzt, das [RGB](/de/docs/Web/CSS/color_value/rgb) Äquivalent von `peachpuff`:

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

![Das App-Fenster auf Windows zeigt die Themenfarbe in der Titelleiste](./background-theme-colors-windows.png)

### Beziehung zum `theme-color` Meta-Elementwert

Der [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Element/meta/name) Attribut des {{htmlelement("meta")}} HTML-Elements kann verwendet werden, um eine Themenfarbe pro Webseite zu definieren. Dies unterscheidet sich von dem `theme_color` Manifestmitglied, das Sie nur einmal global für Ihre App definieren.

Wenn beide gesetzt sind, überschreibt der `theme-color` Meta-Elementwert das `theme_color` Manifestmitglied. Dies erlaubt Ihnen, eine globale Farbe für Ihre App zu definieren und sie auf spezifischen Seiten zu überschreiben.

Beachten Sie, dass in einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Meta-Elementwert ebenfalls verwendet wird, um die Browser-UI zu stylen.

## Siehe auch

- [Web App Manifeste](/de/docs/Web/Progressive_web_apps/Manifest).
- [Meta Theme Color and Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
