---
title: Erstellen Sie eine eigenständige App
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die auf dem Gerät eines Benutzers installiert sind, können definieren, wie sie erscheinen, wenn der Benutzer sie startet. Sie können entscheiden, ob sie in einem Webbrowser angezeigt werden, genau wie Websites, oder ob sie eigene dedizierte Fenster haben, ähnlich wie Betriebssystem-native Anwendungen funktionieren.

Benutzer neigen dazu, spezifische Erwartungen an das Verhalten installierter Anwendungen auf ihren Geräten zu haben. Eine dieser Erwartungen ist, dass Anwendungen eigene dedizierte Fenster haben.

Durch die Verwendung des [`display`](/de/docs/Web/Manifest/display)-Mitglieds des [Web-App-Manifests](/de/docs/Web/Manifest) können Sie festlegen, ob die installierte PWA in einem Browser angezeigt wird oder ob sie beim Start der PWA vom Gerät des Benutzers ein eigenes dediziertes Fenster hat.

## Verwenden Sie den eigenständigen Anzeigemodus

Um einen eigenständigen Anzeigemodus zu verwenden und Ihrer PWA ein eigenes dediziertes Fenster zu geben, fügen Sie das [`display`](/de/docs/Web/Manifest/display)-Mitglied zu Ihrem [Web-App-Manifest](/de/docs/Web/Manifest) hinzu und setzen Sie dessen Wert auf `standalone`:

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

Beachten Sie, dass es andere Anzeigemodi gibt, wie `browser`, `minimal-ui` und `fullscreen`. Der Anzeigemodus, den Sie wählen, ändert, wie viel der Benutzeroberfläche des Browsers dem Benutzer angezeigt wird, und reicht von der kompletten Anzeige bis hin zu eigenem dedizierten Fenster. Um mehr über alle verfügbaren Anzeigemodi zu erfahren und darüber, wie sie zurückfallen, wenn einer nicht unterstützt wird, lesen Sie die Dokumentation über das [`display`](/de/docs/Web/Manifest/display)-Mitglied.

## Beste Praktiken

### Umgang mit Mehrseiten-Navigation

Wenn Ihre Anwendung mit mehreren navigierbaren HTML-Seiten erstellt wurde, stellen Sie sicher, dass Sie UI-Elemente zur Steuerung der Navigation innerhalb Ihrer Anwendung einschließen.

Wenn Sie keine eigenen Navigationselemente haben, verwenden Sie den `minimal-ui`-Anzeigemodus, um sicherzustellen, dass Benutzer weiterhin zwischen den Seiten mit den vom Browser in der Titelleiste Ihrer App angezeigten Vor- und Zurück-Schaltflächen navigieren können.

## Passen Sie Ihre App je nach Anzeigemodus an

Wenn Sie einen anderen Anzeigemodus als `browser` in Ihrem Web-App-Manifest definieren, gilt dieser nur, wenn die Anwendung installiert ist. Wie jede andere Webseite hat das `display`-Mitglied eines Manifests keine Wirkung, wenn die PWA nicht installiert ist. Sie können den Anzeigemodus zur Laufzeit prüfen, um zu erkennen, ob die App installiert ist oder nicht.

Durch die Verwendung des CSS-{{cssxref("@media/display-mode", "display-mode")}}-Media-Features oder des {{domxref("Window.matchMedia()")}}-JavaScript-Features können Sie selektiv CSS-Stile anwenden oder JavaScript-Code in Ihrer App ausführen, basierend auf ihrem Anzeigemodus.

Hier ist ein Beispiel, das zeigt, wie die {{cssxref("@media")}}-CSS-Regel verwendet wird, um ein Element auf einer Webseite nur dann zu enthüllen, wenn der `standalone`-Anzeigemodus aktiviert ist:

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

In diesem Beispiel wird das `.app-button`-Element standardmäßig ausgeblendet, es sei denn, der Anzeigemodus ist auf `standalone` gesetzt, was passiert, wenn das `display`-Manifest-Mitglied auf `standalone` gesetzt wurde und die App auf dem Gerät des Benutzers installiert ist.

Hier ist ein weiteres Beispiel, das zeigt, wie die {{domxref("window.matchMedia()")}}-Methode verwendet wird, um zu erkennen, ob der `standalone`-Anzeigemodus aktiviert ist:

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

## Siehe auch

- [Web-App-Manifeste](/de/docs/Web/Manifest).
- [Anzeigemodi](https://web.dev/learn/pwa/app-design/#display_modes).
- Passen Sie die Titelleiste Ihrer App auf Desktop-Betriebssystemen an, indem Sie die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.
