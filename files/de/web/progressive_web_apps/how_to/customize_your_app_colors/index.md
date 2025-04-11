---
title: Passen Sie das Thema und die Hintergrundfarben Ihrer App an
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{PWASidebar}}

Beim Erstellen von [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur das Erscheinungsbild der Inhalte Ihrer App zu berücksichtigen, sondern auch, wie die App auf dem Gerät des Benutzers aussieht, nachdem sie installiert wurde.

Eine Möglichkeit, das Fenster anzupassen, in dem Ihre App erscheint, besteht darin, die [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color) [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest)-Mitglieder zu verwenden.

Durch die Definition der `theme_color`- und `background_color`-Mitglieder in Ihrem PWA-Manifest können Sie ein ansprechenderes Erlebnis für Ihre Benutzer schaffen. Diese kleinen Details können dazu beitragen, dass sich Ihre PWA mehr wie eine native OS-App anfühlt und den Benutzern vertrauter vorkommt.

## Passen Sie die Hintergrundfarbe des Anwendungsfensters an

Das [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)-Manifestmitglied definiert die Farbe, die im Anwendungsfenster angezeigt wird, bevor die Stylesheets Ihrer App geladen sind.

Da diese Farbe angezeigt wird, bevor Ihre Stylesheets geladen sind, setzen Sie ihren Wert auf denselben Farbwert wie die `background-color`-CSS-Eigenschaft im Stylesheet Ihrer Anwendung. Dies gewährleistet einen sanften visuellen Übergang zwischen dem Start der Webanwendung und dem Laden ihres Inhalts.

Der Wert kann jeden gültigen CSS-[`<color>`](/de/docs/Web/CSS/color_value) darstellen. In diesem Beispiel eines Web-App-Manifestdatei ist die Hintergrundfarbe der Anwendung auf die [benannte Farbe](/de/docs/Web/CSS/named-color) `peachpuff` gesetzt:

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

![Das Anwendungsfenster auf Windows zeigt die peachpuff-Hintergrundfarbe](./background-color-windows.png)

## Eine Thema-Farbe definieren

Das [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)-Mitglied in Ihrem PWA-Manifest definiert die Standardfarbe der Betriebssystem- und Browser-UI-Elemente, die in der Anwendung verwendet werden.

Verschiedene Geräte, Betriebssysteme und Browser wenden das `theme_color`-Mitglied unterschiedlich an. Zum Beispiel:

- Auf mobilen Geräten wird die Thema-Farbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Thema-Farbe verwendet, um die Titelleiste Ihres [eigenständigen Anwendungsfensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzupassen.

Wählen Sie eine `theme_color`, die das allgemeine Design und die Markenbindung Ihrer PWA ergänzt und gut über eine Vielzahl von Geräten und Plattformen funktioniert, um ein konsistentes Benutzererlebnis zu gewährleisten.

Wie bei `background_color` ist jeder [`<color>`](/de/docs/Web/CSS/color_value) Wert gültig. In diesem Beispiel einer Web-App-Manifestdatei ist die `theme_color` auf das `rgb(255 218 185)`, das [RGB](/de/docs/Web/CSS/color_value/rgb)-Äquivalent von `peachpuff`, gesetzt:

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

Der folgende Screenshot zeigt den obigen Code in Aktion, wenn die App auf Windows installiert ist, wobei das `theme_color`-Manifestmitglied als Farbe der Titelleiste verwendet wird:

![Das Anwendungsfenster auf Windows zeigt die Thema-Farbe in der Titelleiste](./background-theme-colors-windows.png)

### Beziehung zum `theme-color` Meta-Element-Wert

Der [`theme-color`](/de/docs/Web/HTML/Reference/Elements/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} HTML-Elements kann verwendet werden, um eine Thema-Farbe pro Webseite zu definieren. Dies unterscheidet sich vom `theme_color`-Manifestmitglied, das Sie nur einmal, global, für Ihre App definieren.

Wenn beide festgelegt sind, überschreibt der `theme-color` Meta-Element-Wert das `theme_color`-Manifestmitglied. Dies ermöglicht es Ihnen, eine globale Farbe für Ihre App zu definieren und diese auf bestimmten Seiten zu überschreiben.

Beachten Sie, dass in einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Meta-Element-Wert auch verwendet wird, um die Browser-UI zu stylen.

## Siehe auch

- [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest).
- [Meta Theme Color and Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
