---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht Entwicklern, zu steuern, wie eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — zum Beispiel, ob sie ein vorhandenes Fenster verwendet oder ein neues erstellt, und wie die Zielstart-URL der App gehandhabt wird.

## Konzepte und Verwendung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das Feld [`launch_handler`](/de/docs/Web/Manifest/launch_handler) zu Ihrer Web-App-Manifest-Datei hinzufügen. Dieses hat ein Unterfeld, `client_mode`, welches einen Zeichenfolgenwert enthält, der angibt, wie die App gestartet und zu ihr navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Wenn nicht angegeben, ist der Standardwert für `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt interagierte Browserkontext in einem Web-App-Fenster wird gewählt, um den Start zu handhaben. Dies wird die Zielstart-URL in die Eigenschaft [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) des Objekts [`LaunchParams`](/de/docs/Web/API/LaunchParams) einfügen, das in die Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird. Wie Sie unten sehen werden, erlaubt dies Ihnen, benutzerdefinierte Start-Funktionalität für Ihre App einzurichten.
- `navigate-existing`
  - : Der zuletzt interagierte Browserkontext in einem Web-App-Fenster wird zur Zielstart-URL navigiert. Die Ziel-URL ist immer noch über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verfügbar, um zusätzliche benutzerdefinierte Start-Navigationsprozesse zu implementieren.
- `navigate-new`
  - : Ein neuer Browserkontext wird in einem Web-App-Fenster erstellt, um die Zielstart-URL zu laden. Die Ziel-URL ist immer noch über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verfügbar, um zusätzliche benutzerdefinierte Start-Navigationsprozesse zu implementieren.
- `auto`
  - : Der User-Agent entscheidet, was für die Plattform am besten geeignet ist. Zum Beispiel könnte <code>navigate-existing</code> auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während <code>navigate-new</code> in einem Desktop-Kontext mehr Sinn machen könnte. Dies ist der Standardwert, der verwendet wird, wenn die angegebenen Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code innerhalb der Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) einschließen, um das [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) benutzerdefiniert zu handhaben.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> **Hinweis:** [`LaunchParams`](/de/docs/Web/API/LaunchParams) hat auch eine Eigenschaft [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files), die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurückgibt, die alle Dateien darstellen, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode übergeben wurden. Dies ermöglicht die Implementierung von benutzerdefiniertem Datei-Handling.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird bei der Implementierung von benutzerdefiniertem Start-Navigation-Handling in einer PWA verwendet. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Funktionalität des Startnavigation-Handlings einzurichten, wird der Rückruffunktion innerhalb von `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionen, die die Implementierung von benutzerdefinierten Start-Navigationsprozessen in der PWA ermöglichen. Diese Funktionalität wird gesteuert durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts, das in die Rückruffunktion von [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

## Erweiterungen zu anderen Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, benutzerdefinierte Start-Navigationsprozesse in einer [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren, wobei der Handhabungskontext durch den [`launch_handler`](/de/docs/Web/Manifest/launch_handler)-Manifestfeldwert `client_mode` gekennzeichnet ist.

## Beispiele

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Assuming a music player app that gets a track passed to it to be played
      const track = params.get("track");
      if (track) {
        audio.src = track;
        title.textContent = new URL(track).pathname.substr(1);
        audio.play();
      }
    }
  });
}
```

Dieser Code wird in die PWA integriert und beim Laden der App ausgeführt, wenn sie gestartet wird. Die Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert den Suchparameter aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und verwendet ihn, falls ein `track`-Parameter gefunden wird, um ein {{htmlelement("audio")}}-Element's `src` zu füllen und den Audiotrack abzuspielen, auf den er verweist.

Sehen Sie sich die [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App für vollständigen funktionierenden Code an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Steuerung, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
