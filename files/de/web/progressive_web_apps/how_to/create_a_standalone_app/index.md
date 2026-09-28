---
title: Eine eigenständige App erstellen
slug: Web/Progressive_web_apps/How_to/Create_a_standalone_app
l10n:
  sourceCommit: 1b6ddc3ab1356aabfe2cd5a19875cdaf35220590
---

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die auf dem Gerät einer Person installiert sind, können festlegen, wie sie beim Start angezeigt werden. Sie können wie Websites in einem Webbrowser erscheinen oder ein eigenes Fenster erhalten, ähnlich wie native Anwendungen des Betriebssystems.

Nutzer erwarten häufig, dass sich installierte Anwendungen auf ihrem Gerät auf bestimmte Weise verhalten. Dazu gehört, dass Anwendungen ein eigenes Fenster haben.

Mit dem [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Member des [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest) können Sie festlegen, ob die installierte PWA beim Start über das Gerät in einem Browser oder in einem eigenen Fenster angezeigt wird.

## Den `standalone`-Anzeigemodus verwenden

Um Ihrer PWA ein eigenes Fenster zu geben, fügen Sie dem [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) den [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Member hinzu und setzen Sie seinen Wert auf `standalone`:

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

Es gibt weitere Anzeigemodi, darunter `browser`, `minimal-ui` und `fullscreen`. Der gewählte Modus bestimmt, wie viel von der Browseroberfläche sichtbar ist – von der vollständigen Oberfläche bis hin zu einem eigenen Fenster. Weitere Informationen zu den verfügbaren Anzeigemodi und dazu, welcher Modus verwendet wird, wenn ein anderer nicht unterstützt wird, finden Sie in der Dokumentation zum [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Member.

## Bewährte Vorgehensweisen

### Navigation zwischen mehreren Seiten ermöglichen

Wenn Ihre Anwendung aus mehreren navigierbaren HTML-Seiten besteht, sollten Sie Bedienelemente für die Navigation innerhalb der Anwendung bereitstellen.

Wenn Sie keine eigenen Navigationselemente haben, verwenden Sie den Anzeigemodus `minimal-ui`. So können Nutzer mit den vom Browser in der Titelleiste Ihrer App angezeigten Schaltflächen „Zurück“ und „Weiter“ zwischen den Seiten wechseln.

## Ihre App an den Anzeigemodus anpassen

Wenn Sie im Web-App-Manifest einen anderen Anzeigemodus als `browser` festlegen, gilt dieser nur für die installierte Anwendung. Solange die PWA nicht installiert ist, hat der `display`-Member des Manifests wie bei jeder anderen Webseite keine Wirkung.

Mit dem CSS-Medienmerkmal {{cssxref("@media/display-mode", "display-mode")}} oder der JavaScript-Funktion [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) können Sie abhängig vom Anzeigemodus gezielt CSS-Stile anwenden oder JavaScript-Code in Ihrer App ausführen.

Das folgende Beispiel zeigt, wie Sie mit der CSS-At-Regel {{cssxref("@media")}} ein Element auf einer Webseite nur dann anzeigen, wenn der Anzeigemodus `standalone` aktiviert ist:

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

In diesem Beispiel ist das Element `.app-button` standardmäßig ausgeblendet, es sei denn, die App wird gerade im Modus `standalone` angezeigt.

Das folgende Beispiel zeigt, wie Sie mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) erkennen, ob der Anzeigemodus `standalone` aktiviert ist:

```js
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches;
}
```

> [!NOTE]
> Es gibt keine zuverlässige, browserübergreifende Möglichkeit, mit der eine PWA feststellen kann, ob sie installiert ist. Der Anzeigemodus lässt zudem keinen eindeutigen Rückschluss auf den Installationsstatus zu:
>
> - Eine installierte PWA kann weiterhin in einem Browser-Tab geöffnet werden und befindet sich dann nicht im Modus `standalone`.
> - Eine PWA kann stattdessen im Modus `fullscreen` angezeigt werden. Dabei wird die Statusleiste mit Angaben wie Akkustand und Netzwerkverbindung ausgeblendet.
> - Auch eine gewöhnliche Webseite kann im Modus `fullscreen` angezeigt werden.

## Siehe auch

- [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest).
- [Anzeigemodi](https://web.dev/learn/pwa/app-design/#display_modes).
- Passen Sie die Titelleiste Ihrer App auf Desktop-Betriebssystemen mithilfe der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) an.
