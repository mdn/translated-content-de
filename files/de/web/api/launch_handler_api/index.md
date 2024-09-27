---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht es Entwicklern zu steuern, wie eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — zum Beispiel, ob sie ein vorhandenes Fenster verwendet oder ein neues erstellt, und wie die Ziel-Start-URL der App behandelt wird.

## Konzepte und Nutzung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das [`launch_handler`](/de/docs/Web/Manifest/launch_handler)-Feld zu Ihrer Web-App-Manifestdatei hinzufügen. Dies hat ein Unterfeld, `client_mode`, das einen Zeichenfolgenwert enthält, der angibt, wie die App gestartet und zu ihr navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Falls nicht angegeben, ist der Standardwert von `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird ausgewählt, um den Start zu handhaben. Dies wird die Ziel-Start-URL in der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL)-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts bereitstellen, das in die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird. Wie unten gezeigt wird, ermöglicht dies Ihnen, eine benutzerdefinierte Startbehandlung für Ihre App einzurichten.
- `navigate-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird zur Ziel-Start-URL navigiert. Die Ziel-URL bleibt weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verfügbar, um die Implementierung zusätzlicher benutzerdefinierter Start-Navigation zu ermöglichen.
- `navigate-new`
  - : Ein neuer Browsing-Kontext wird in einem Web-App-Fenster erstellt, um die Ziel-Start-URL zu laden. Die Ziel-URL bleibt weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verfügbar, um die Implementierung zusätzlicher benutzerdefinierter Start-Navigation zu ermöglichen.
- `auto`
  - : Der User Agent entscheidet, was für die Plattform am besten funktioniert. Zum Beispiel könnte <code>navigate-existing</code> auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während <code>navigate-new</code> mehr Sinn in einem Desktop-Kontext machen könnte. Dies ist der Standardwert, der verwendet wird, wenn angegebene Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code in der Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) einfügen, um eine benutzerdefinierte Behandlung der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL)

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> **Note:** [`LaunchParams`](/de/docs/Web/API/LaunchParams) hat auch eine [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft, die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurückgibt, die alle Dateien darstellen, die zusammen mit der Start-Navigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode übergeben wurden. Dies ermöglicht die Implementierung einer benutzerdefinierten Datei-Verarbeitung.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird verwendet, wenn benutzerdefinierte Start-Navigation in einer PWA implementiert wird. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Start-Navigation-Funktionalität einzurichten, wird in der Callback-Funktion innerhalb von `setConsumer()` eine Instanz des `LaunchParams`-Objekts übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler)-`client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionen, die es ermöglichen, eine benutzerdefinierte Start-Navigation in der PWA zu implementieren. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das in die Callback-Funktion von [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

## Erweiterungen zu anderen Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, eine benutzerdefinierte Start-Navigation in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren, mit dem Handling-Kontext, der durch den [`launch_handler`](/de/docs/Web/Manifest/launch_handler)-`client_mode`-Wert angezeigt wird.

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

Dieser Code ist in der PWA enthalten und wird beim Starten der App ausgeführt. Die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert das Suchparameter aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und verwendet es, falls sie einen `track`-Parameter findet, um ein {{htmlelement("audio")}}-Element `src` zu füllen und den Audiotrack abzuspielen, auf den dies verweist.

Sehen Sie sich die Demo-App [Musicr 2.0](https://launch-handler.glitch.me/) für den vollständigen funktionierenden Code an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
