---
title: Erstellen Sie eine eigenständige App
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die auf einem Benutzergerät installiert sind, können definieren, wie sie erscheinen, wenn der Benutzer sie startet. Sie können entscheiden, ob sie in einem Webbrowser angezeigt werden, genau wie Websites, oder ob sie eigene dedizierte Fenster haben, ähnlich wie OS-native Anwendungen.

Benutzer haben in der Regel bestimmte Erwartungen daran, wie installierte Anwendungen auf ihren Geräten funktionieren. Eine dieser Erwartungen ist, dass Anwendungen eigene dedizierte Fenster haben.

Durch die Verwendung des [`display`](/de/docs/Web/Manifest/Reference/display)-Elements im [Web-App-Manifest](/de/docs/Web/Manifest) kann festgelegt werden, ob die installierte PWA in einem Browser oder mit einem eigenen dedizierten Fenster angezeigt wird, wenn die PWA vom Gerät des Benutzers gestartet wird.

## Verwenden Sie den Standalone-Anzeigemodus

Um einen Standalone-Anzeigemodus zu verwenden und Ihrer PWA ein eigenes dediziertes Fenster zu geben, fügen Sie das [`display`](/de/docs/Web/Manifest/Reference/display)-Element zu Ihrem [Web-App-Manifest](/de/docs/Web/Manifest) hinzu und setzen Sie dessen Wert auf `standalone`:

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

Beachten Sie, dass es auch andere Anzeigemodi gibt, wie z.B. `browser`, `minimal-ui` und `fullscreen`. Der von Ihnen gewählte Anzeigemodus ändert, wie viel von der Benutzeroberfläche des Browsers dem Benutzer angezeigt wird, vom vollständigen Anzeigen der Benutzeroberfläche bis hin zu einem eigenen dedizierten Fenster. Um mehr über alle verfügbaren Anzeigemodi zu erfahren und darüber, wie sie zurückfallen, wenn einer nicht unterstützt wird, lesen Sie die Dokumentation zum [`display`](/de/docs/Web/Manifest/Reference/display)-Element.

## Beste Praktiken

### Verwalten Sie die Navigation auf mehreren Seiten

Wenn Ihre Anwendung aus mehreren navigierbaren HTML-Seiten besteht, stellen Sie sicher, dass Sie Benutzeroberflächenelemente zum Steuern der Navigation innerhalb Ihrer Anwendung enthalten.

Falls Sie keine eigenen Navigationselemente haben, verwenden Sie den `minimal-ui`-Anzeigemodus, um sicherzustellen, dass Benutzer dennoch zwischen Seiten navigieren können, indem sie die vom Browser in der Titelleiste Ihrer App angezeigten Vor- und Zurück-Buttons nutzen.

## Passen Sie Ihre App je nach Anzeigemodus an

Wenn Sie in Ihrem Web-App-Manifest einen anderen Anzeigemodus als `browser` definieren, gilt dieser nur, wenn die Anwendung installiert ist. Wie jede andere Webseite hat das `display`-Element eines Manifests keine Auswirkungen, wenn die PWA nicht installiert ist. Sie können den Anzeigemodus zur Laufzeit überprüfen, um zu erkennen, ob die App installiert ist oder nicht.

Indem Sie das CSS {{cssxref("@media/display-mode", "display-mode")}} Media-Feature oder das [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-JavaScript-Feature verwenden, können Sie gezielt CSS-Stile anwenden oder JavaScript-Code in Ihrer App abhängig vom Anzeigemodus ausführen.

Hier sehen Sie ein Beispiel, wie Sie die {{cssxref("@media")}} CSS-Regel verwenden, um ein Element auf einer Webseite nur dann anzuzeigen, wenn der `standalone`-Anzeigemodus aktiviert ist:

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

In diesem Beispiel wird das `.app-button`-Element standardmäßig verborgen, es sei denn, der Anzeigemodus ist auf `standalone` gesetzt, was der Fall ist, wenn das `display`-Element im Manifest auf `standalone` gesetzt wurde und die App auf dem Gerät des Benutzers installiert ist.

Hier ist ein weiteres Beispiel, das zeigt, wie Sie die Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwenden, um zu erkennen, ob der `standalone`-Anzeigemodus aktiviert ist:

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

## Siehe auch

- [Web-App-Manifeste](/de/docs/Web/Manifest).
- [Anzeigemodi](https://web.dev/learn/pwa/app-design/#display_modes).
- Passen Sie die Titelleiste Ihrer App auf Desktop-Betriebssystemen mit der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) an.
