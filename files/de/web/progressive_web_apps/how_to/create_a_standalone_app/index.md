---
title: Erstellen Sie eine eigenständige App
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die auf einem Gerät eines Benutzers installiert sind, können definieren, wie sie erscheinen, wenn der Benutzer sie startet. Sie können wählen, ob sie in einem Webbrowser angezeigt werden, genau wie Websites, oder eigene dedizierte Fenster haben, ähnlich wie Betriebssystem-native Anwendungen funktionieren.

Benutzer haben in der Regel bestimmte Erwartungen daran, wie installierte Anwendungen auf ihren Geräten funktionieren. Eine dieser Erwartungen ist, dass Anwendungen eigene dedizierte Fenster haben.

Durch die Verwendung des [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglieds im [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) können Sie festlegen, ob die installierte PWA in einem Browser oder mit einem dedizierten Fenster angezeigt wird, wenn die PWA vom Gerät des Benutzers gestartet wird.

## Verwenden Sie den Standalone-Anzeigemodus

Um einen Standalone-Anzeigemodus zu verwenden und Ihrer PWA ein eigenes dediziertes Fenster zu geben, fügen Sie das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglied zu Ihrem [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) hinzu und setzen Sie dessen Wert auf `standalone`:

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

Beachten Sie, dass es andere Anzeigemodi gibt, wie `browser`, `minimal-ui` und `fullscreen`. Der gewählte Anzeigemodus bestimmt, wie viel von der Benutzeroberfläche des Browsers dem Benutzer angezeigt wird, von der vollständigen Anzeige bis hin zu einem eigenen Fenster. Um mehr über alle verfügbaren Anzeigemodi und über deren Fallbacks zu erfahren, wenn einer nicht unterstützt wird, siehe die Dokumentation über das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglied.

## Beste Praktiken

### Navigation über mehrere Seiten

Wenn Ihre Anwendung aus mehreren navigierbaren HTML-Seiten besteht, stellen Sie sicher, dass Sie UI-Elemente für die Navigation innerhalb Ihrer Anwendung bereitstellen.

Wenn Sie keine eigenen Navigationselemente haben, verwenden Sie den `minimal-ui` Anzeigemodus, um sicherzustellen, dass Benutzer dennoch zwischen Seiten wechseln können, indem sie von der App in der Titelleiste bereitgestellte Vor- und Rückschaltflächen verwenden.

## Passen Sie Ihre App je nach Anzeigemodus an

Wenn Sie in Ihrem Web-App-Manifest einen anderen Anzeigemodus als `browser` definieren, gilt dies nur, wenn die Anwendung installiert ist. Wie jede andere Webseite hat das `display`-Mitglied eines Manifests keine Auswirkungen, wenn die PWA nicht installiert ist. Sie können den Anzeigemodus zur Laufzeit prüfen, um festzustellen, ob die App installiert ist oder nicht.

Mit dem CSS {{cssxref("@media/display-mode", "display-mode")}} Media-Feature oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) JavaScript-Funktion können Sie selektiv CSS-Stile anwenden oder JavaScript-Code in Ihrer App basierend auf ihrem Anzeigemodus ausführen.

Hier ist ein Beispiel zur Verwendung der {{cssxref("@media")}} CSS-Regel, um ein Element auf einer Webseite nur anzuzeigen, wenn der `standalone` Anzeigemodus aktiviert ist:

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

In diesem Beispiel wird das `.app-button` Element standardmäßig ausgeblendet, es sei denn, der Anzeigemodus ist auf `standalone` gesetzt, was der Fall ist, wenn das `display`-Mitglied des Manifests auf `standalone` gesetzt wurde und die App auf dem Gerät des Benutzers installiert ist.

Hier ist ein weiteres Beispiel zur Verwendung der [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-Methode, um zu erkennen, ob der `standalone` Anzeigemodus aktiviert ist:

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

## Siehe auch

- [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest).
- [Anzeigemodi](https://web.dev/learn/pwa/app-design/#display_modes).
- Passen Sie die Titelleiste Ihrer App auf Desktop-Betriebssystemen mit der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) an.
