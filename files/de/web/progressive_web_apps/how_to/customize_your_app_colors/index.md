---
title: Passen Sie das Thema und die Hintergrundfarben Ihrer App an
slug: Web/Progressive_web_apps/How_to/Customize_your_app_colors
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

Beim Erstellen von [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps) ist es wichtig, nicht nur das Erscheinungsbild der App-Inhalte zu berücksichtigen, sondern auch, wie die App auf dem Gerät des Benutzers aussieht, sobald die App installiert ist.

Eine Möglichkeit, das Fenster Ihrer App anzupassen, besteht darin, die [`theme_color`](/de/docs/Web/Manifest/Reference/theme_color) und [`background_color`](/de/docs/Web/Manifest/Reference/background_color) [Web-App-Manifest](/de/docs/Web/Manifest)-Elemente zu verwenden.

Durch die Definition der `theme_color`- und `background_color`-Elemente in Ihrem PWA-Manifest können Sie ein abgerundeteres Benutzererlebnis schaffen. Diese kleinen Details können dazu beitragen, dass sich Ihre PWA stärker wie eine OS-native App anfühlt und Ihren Benutzern vertrauter vorkommt.

## Passen Sie die Hintergrundfarbe des App-Fensters an

Das [`background_color`](/de/docs/Web/Manifest/Reference/background_color) Manifest-Element definiert die Farbe, die im Anwendungsfenster erscheint, bevor die Stylesheets Ihrer App geladen wurden.

Da diese Farbe erscheint, bevor Ihre Stylesheets geladen sind, setzen Sie deren Wert auf denselben Farbwert wie die `background-color` CSS-Eigenschaft im Stylesheet Ihrer Anwendung. Dies gewährleistet einen fließenden visuellen Übergang zwischen dem Starten der Webanwendung und dem Laden ihrer Inhalte.

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

Die Anwendung lädt außerdem ein Stylesheet, das dieselbe Farbe auf den Hintergrund des `body`-Elements anwendet:

```css
body {
  background-color: peachpuff;
}
```

Der folgende Screenshot zeigt das obige Codebeispiel in Aktion. Die PWA, die diesen Code verwendet, ist auf Windows installiert, und der Screenshot zeigt, wie das Anwendungsfenster aussieht, bevor der Inhalt der App geladen wurde:

![Das App-Fenster, unter Windows, zeigt die pfirsichfarbenen Hintergrundfarbe](./background-color-windows.png)

## Definieren Sie eine Themenfarbe

Das [`theme_color`](/de/docs/Web/Manifest/Reference/theme_color) Element im PWA-Manifest definiert die Standardfarbe der Betriebssystem- und Browser-UI-Elemente, die in der Anwendung verwendet werden.

Verschiedene Geräte, Betriebssysteme und Browser wenden das `theme_color` Element unterschiedlich an. Zum Beispiel:

- Auf mobilen Geräten wird die Themenfarbe auf die Statusleiste angewendet.
- Auf Desktop-Betriebssystemen wird die Themenfarbe verwendet, um die Titelleiste Ihres [Standalone-App-Fensters](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzupassen.

Wählen Sie eine `theme_color`, die das Gesamtdesign und Branding Ihrer PWA unterstützt und auf einer Vielzahl von Geräten und Plattformen gut funktioniert, um ein konsistentes Benutzererlebnis zu gewährleisten.

Wie bei `background_color` ist jeder [`<color>`](/de/docs/Web/CSS/color_value) Wert gültig. In diesem Beispiel einer Web-App-Manifestdatei ist die `theme_color` auf `rgb(255 218 185)` gesetzt, dem [RGB](/de/docs/Web/CSS/color_value/rgb) Äquivalent von `peachpuff`:

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

Der folgende Screenshot zeigt das obige Codebeispiel in Aktion, wenn die App auf Windows installiert ist, wobei das `theme_color` Manifest-Element als Farbe der Titelleiste verwendet wird:

![Das App-Fenster, unter Windows, zeigt die Themenfarbe in der Titelleiste](./background-theme-colors-windows.png)

### Beziehung zum `theme-color` Meta-Element Wert

Der [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color) Wert für das [`name`](/de/docs/Web/HTML/Element/meta/name) Attribut des {{htmlelement("meta")}} HTML-Elements kann verwendet werden, um eine Themenfarbe pro Webseite zu definieren. Dies unterscheidet sich von dem `theme_color` Manifest-Element, das Sie nur einmal global für Ihre App definieren.

Wenn beide gesetzt sind, überschreibt der `theme-color` Meta-Element Wert das `theme_color` Manifest-Element. Dies ermöglicht es Ihnen, eine globale Farbe für Ihre App zu definieren und sie auf bestimmten Seiten zu überschreiben.

Beachten Sie, dass auf einigen Browsern, wie Safari auf macOS und Chrome auf Android, der `theme-color` Meta-Element Wert verwendet wird, um die Browser-UI ebenfalls zu stylen.

## Siehe auch

- [Web App Manifests](/de/docs/Web/Manifest).
- [Meta Theme Color and Trickery auf css-tricks.com](https://css-tricks.com/meta-theme-color-and-trickery/) (2021)
- [Empfohlene Felder auf web.dev](https://web.dev/learn/pwa/web-app-manifest#recommended_fields)
