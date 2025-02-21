---
title: Erstellen Sie eine eigenständige App
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die auf dem Gerät eines Nutzers installiert sind, können definieren, wie sie beim Start angezeigt werden. Sie können sich dafür entscheiden, in einem Webbrowser angezeigt zu werden, genau wie Websites, oder ihre eigenen dedizierten Fenster zu haben, ähnlich wie es bei nativen OS-Anwendungen der Fall ist.

Benutzer haben in der Regel spezifische Erwartungen daran, wie installierte Anwendungen auf ihren Geräten funktionieren. Eine dieser Erwartungen ist, dass Anwendungen ihre eigenen dedizierten Fenster haben.

Indem Sie das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Element des [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest) verwenden, können Sie definieren, ob die installierte PWA in einem Browser angezeigt oder ein eigenes dediziertes Fenster hat, wenn die PWA vom Gerät des Nutzers aus gestartet wird.

## Verwenden Sie den Standalone-Anzeigemodus

Um einen Standalone-Anzeigemodus zu verwenden und Ihrer PWA ein eigenes dediziertes Fenster zu geben, fügen Sie das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Element zu Ihrem [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) hinzu und setzen Sie seinen Wert auf `standalone`:

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

Beachten Sie, dass es andere Anzeigemodi gibt, wie `browser`, `minimal-ui` und `fullscreen`. Der gewählte Anzeigemodus ändert, wie viel von der Browser-Benutzeroberfläche dem Nutzer gezeigt wird, von der vollständigen Anzeige bis hin zu einem eigenen dedizierten Fenster. Um mehr über alle verfügbaren Anzeigemodi und ihre Rückfalleigenschaften zu erfahren, sehen Sie sich die Dokumentation über das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Element an.

## Beste Praktiken

### Umgang mit Mehrseiten-Navigation

Wenn Ihre Anwendung aus mehreren navigierbaren HTML-Seiten besteht, stellen Sie sicher, dass Benutzeroberflächenelemente vorhanden sind, um die Navigation innerhalb Ihrer Anwendung zu steuern.

Wenn Sie keine eigenen Navigationselemente haben, verwenden Sie den `minimal-ui`-Anzeigemodus, um sicherzustellen, dass Benutzer dennoch zwischen Seiten mit den im Titelbereich Ihrer App angezeigten Vorwärts- und Rückwärts-Buttons des Browsers navigieren können.

## Passen Sie Ihre App abhängig vom Anzeigemodus an

Wenn Sie einen anderen Anzeigemodus als `browser` in Ihrem Web-App-Manifest definieren, gilt dieser nur, wenn die Anwendung installiert ist. Wie jede andere Webseite hat das `display`-Element eines Manifests keine Wirkung, wenn die PWA nicht installiert ist. Sie können den Anzeigemodus zur Laufzeit überprüfen, um festzustellen, ob die App installiert ist oder nicht.

Mithilfe der CSS-{{cssxref("@media/display-mode", "display-mode")}}-Medienfunktion oder der JavaScript-Funktion [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) können Sie basierend auf dem Anzeigemodus selektiv CSS-Stile anwenden oder JavaScript-Code in Ihrer App ausführen.

Hier ist ein Beispiel, das zeigt, wie man die {{cssxref("@media")}}-CSS-Anweisung verwendet, um ein Element auf einer Webseite nur dann sichtbar zu machen, wenn der `standalone`-Anzeigemodus aktiviert ist:

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

In diesem Beispiel wird das `.app-button`-Element standardmäßig ausgeblendet, es sei denn, der Anzeigemodus ist auf `standalone` gesetzt, was eintritt, wenn das `display`-Element im Manifest auf `standalone` eingestellt wurde und die App auf dem Gerät des Benutzers installiert ist.

Hier ist ein weiteres Beispiel, das zeigt, wie die Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwendet wird, um zu erkennen, ob der `standalone`-Anzeigemodus aktiviert ist:

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

## Siehe auch

- [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest).
- [Anzeigemodi](https://web.dev/learn/pwa/app-design/#display_modes).
- Passen Sie die Titelleiste Ihrer App auf Desktop-Betriebssystemen mithilfe der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) an.
