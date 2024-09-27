---
title: Erstellen Sie eine eigenständige App
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die auf dem Gerät eines Benutzers installiert sind, können definieren, wie sie beim Start angezeigt werden. Sie können sich dafür entscheiden, in einem Webbrowser angezeigt zu werden, ähnlich wie Websites, oder eigene dedizierte Fenster zu haben, ähnlich wie Betriebssystem-native Anwendungen.

Benutzer haben in der Regel bestimmte Erwartungen daran, wie installierte Anwendungen auf ihren Geräten funktionieren. Eine dieser Erwartungen ist, dass Anwendungen eigene dedizierte Fenster haben.

Durch die Verwendung des [`display`](/de/docs/Web/Manifest/display)-Members des [Web App Manifest](/de/docs/Web/Manifest) können Sie festlegen, ob die installierte PWA in einem Browser angezeigt wird oder beim Start von Ihrem Gerät ein eigenes Fenster hat.

## Verwenden Sie den Standalone-Anzeigemodus

Um einen Standalone-Anzeigemodus zu verwenden und Ihrer PWA ein eigenes Fenster zu geben, fügen Sie den [`display`](/de/docs/Web/Manifest/display)-Member zu Ihrem [Web App Manifest](/de/docs/Web/Manifest) hinzu und setzen Sie dessen Wert auf `standalone`:

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
  "display": "standalone"
}
```

Beachten Sie, dass es andere Anzeigemodi gibt, wie `browser`, `minimal-ui` und `fullscreen`. Der gewählte Anzeigemodus ändert, wie viel der Browser-Benutzeroberfläche dem Benutzer gezeigt wird, von der vollständigen Anzeige bis hin zu einem eigenen Fenster. Um mehr über alle verfügbaren Anzeigemodi und deren Fallback-Optionen zu erfahren, falls einer nicht unterstützt wird, lesen Sie die Dokumentation über den [`display`](/de/docs/Web/Manifest/display)-Member.

## Beste Praktiken

### Mehrseitige Navigation verwalten

Wenn Ihre Anwendung aus mehreren navigierbaren HTML-Seiten besteht, stellen Sie sicher, dass UI-Elemente für die Steuerung der Navigation innerhalb Ihrer Anwendung enthalten sind.

Wenn Sie keine eigenen Navigationselemente haben, verwenden Sie den `minimal-ui`-Anzeigemodus, um sicherzustellen, dass Benutzer immer noch zwischen den Seiten navigieren können, indem sie die vom Browser bereitgestellten Vor- und Zurück-Buttons in der Titelleiste Ihrer App verwenden.

## Passen Sie Ihre App je nach Anzeigemodus an

Wenn Sie einen anderen als den `browser` Anzeigemodus in Ihrem Web App Manifest festlegen, gilt dies nur, wenn die Anwendung installiert ist. Wie jede andere Webseite hat der `display`-Member eines Manifests keine Auswirkungen, wenn die PWA nicht installiert ist. Sie können den Anzeigemodus zur Laufzeit überprüfen, um festzustellen, ob die App installiert ist oder nicht.

Mit der CSS-{{cssxref("@media/display-mode", "display-mode")}} Media-Feature oder dem [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) JavaScript-Feature können Sie selektiv CSS-Stile anwenden oder JavaScript-Code in Ihrer App ausführen basierend auf ihrem Anzeigemodus.

Hier ist ein Beispiel, das zeigt, wie die {{cssxref("@media")}} CSS-At-Regel verwendet wird, um ein Element auf einer Webseite nur dann anzuzeigen, wenn der `standalone` Anzeigemodus aktiviert ist:

```css
.app-button {
  display: none;
}

@media (display-mode: standalone) {
  .app-button {
    display: block;
  }
}
```

In diesem Beispiel wird das `.app-button`-Element standardmäßig ausgeblendet, es sei denn, der Anzeigemodus ist auf `standalone` eingestellt, was passiert, wenn der `display`-Member des Manifests auf `standalone` gesetzt wurde und die App auf dem Gerät des Benutzers installiert ist.

Hier ist ein weiteres Beispiel, das zeigt, wie die [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-Methode verwendet wird, um zu erkennen, ob der `standalone` Anzeigemodus aktiviert ist:

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

## Siehe auch

- [Web App Manifests](/de/docs/Web/Manifest).
- [Display modes](https://web.dev/learn/pwa/app-design/#display_modes).
- Passen Sie die Titelleiste Ihrer App auf Desktop-Betriebssystemen an, indem Sie die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.
