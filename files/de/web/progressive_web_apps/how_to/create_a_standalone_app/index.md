---
title: Ein eigenständiges App erstellen
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die auf einem Gerät eines Nutzers installiert sind, können definieren, wie sie erscheinen, wenn der Nutzer sie startet. Sie können sich entscheiden, in einem Webbrowser angezeigt zu werden, genauso wie Webseiten, oder sie können eigene dedizierte Fenster haben, ähnlich wie nativen Anwendungen des Betriebssystems.

Nutzer haben normalerweise spezifische Erwartungen daran, wie sich installierte Anwendungen auf ihren Geräten verhalten. Eine dieser Erwartungen ist, dass Anwendungen eigene dedizierte Fenster haben.

Indem Sie das [`display`](/de/docs/Web/Manifest/display)-Mitglied des [Web-App-Manifests](/de/docs/Web/Manifest) verwenden, können Sie definieren, ob die installierte PWA in einem Browser angezeigt wird oder ein eigenes dediziertes Fenster hat, wenn die PWA vom Gerät des Nutzers aus gestartet wird.

## Den Standalone-Anzeigemodus verwenden

Um einen Standalone-Anzeigemodus zu verwenden und Ihrer PWA ein eigenes dediziertes Fenster zu geben, fügen Sie das [`display`](/de/docs/Web/Manifest/display)-Mitglied zu Ihrem [Web-App-Manifest](/de/docs/Web/Manifest) hinzu und setzen Sie dessen Wert auf `standalone`:

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

Beachten Sie, dass es andere Anzeigemodi gibt, wie `browser`, `minimal-ui` und `fullscreen`. Der gewählte Anzeigemodus ändert, wie viel der Benutzeroberfläche des Browsers dem Nutzer angezeigt wird, von der vollständigen Anzeige bis hin zu einem eigenen dedizierten Fenster. Um mehr über alle verfügbaren Anzeigemodi und deren Fallback-Verhalten zu erfahren, wenn einer nicht unterstützt wird, lesen Sie die Dokumentation über das [`display`](/de/docs/Web/Manifest/display)-Mitglied.

## Beste Praktiken

### Multi-Page-Navigation handhaben

Wenn Ihre Anwendung mit mehreren navigierbaren HTML-Seiten erstellt wird, stellen Sie sicher, dass Sie UI-Elemente zum Steuern der Navigation innerhalb Ihrer Anwendung einschließen.

Wenn Sie keine eigenen Navigationselemente haben, verwenden Sie den `minimal-ui`-Anzeigemodus, um sicherzustellen, dass Nutzer trotzdem zwischen Seiten wechseln können, indem sie die vom Browser in der Titelleiste Ihrer App gerenderten Vor- und Zurück-Buttons verwenden.

## Passen Sie Ihre App abhängig vom Anzeigemodus an

Wenn Sie in Ihrem Web-App-Manifest einen anderen Anzeigemodus als `browser` definieren, gilt dies nur, wenn die Anwendung installiert ist. Wie jede andere Webseite hat das `display`-Mitglied eines Manifests keine Auswirkungen, wenn die PWA nicht installiert ist. Sie können den Anzeigemodus zur Laufzeit überprüfen, um festzustellen, ob die App installiert ist oder nicht.

Verwenden Sie das CSS-{{cssxref("@media/display-mode", "display-mode")}}-Medienmerkmal oder das [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-JavaScript-Feature, um selektiv CSS-Stile anzuwenden oder JavaScript-Code in Ihrer App basierend auf ihrem Anzeigemodus auszuführen.

Hier ist ein Beispiel, das zeigt, wie das {{cssxref("@media")}}-CSS-Attribut verwendet wird, um ein Element auf einer Webseite nur dann anzuzeigen, wenn der `standalone`-Anzeigemodus aktiviert ist:

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

In diesem Beispiel wird das `.app-button`-Element standardmäßig ausgeblendet, es sei denn, der Anzeigemodus ist auf `standalone` gesetzt, was passiert, wenn das `display`-Manifestmitglied auf `standalone` gesetzt wurde und die App auf dem Gerät des Benutzers installiert ist.

Hier ist ein weiteres Beispiel, das zeigt, wie die Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwendet wird, um zu erkennen, ob der `standalone`-Anzeigemodus aktiviert ist:

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

## Siehe auch

- [Web-App-Manifeste](/de/docs/Web/Manifest).
- [Anzeigemodi](https://web.dev/learn/pwa/app-design/#display_modes).
- Passen Sie die Titelleiste Ihrer App auf Desktop-Betriebssystemen an, indem Sie die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.
