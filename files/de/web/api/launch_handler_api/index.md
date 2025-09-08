---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: 57b594763d8e34b8346ee7ea206bfc2e59238fb1
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht es Entwicklern zu steuern, wie eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — zum Beispiel, ob sie ein vorhandenes Fenster nutzt oder ein neues erstellt, und wie der Ziel-Start-URL der App behandelt wird.

## Konzepte und Verwendung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das Feld [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) zu Ihrer Web-App-Manifestdatei hinzufügen. Dieses hat ein Unterfeld, `client_mode`, das einen String-Wert enthält, der angibt, wie die App gestartet und zu ihr navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Falls nicht angegeben, ist der Standardwert von `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt benutzte Browsing-Kontext in einem Web-App-Fenster wird ausgewählt, um den Start zu behandeln. Dies wird die Ziel-Start-URL im [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL)-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts, das in die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird, füllen. Wie Sie weiter unten sehen werden, ermöglicht dies, benutzerdefinierte Startfunktionen für Ihre App festzulegen.
- `navigate-existing`
  - : Der zuletzt benutzte Browsing-Kontext in einem Web-App-Fenster wird zur Ziel-Start-URL navigiert. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) zur Verfügung gestellt, um zusätzliche benutzerdefinierte Startnavigationsbehandlungen zu ermöglichen.
- `navigate-new`
  - : Ein neuer Browsing-Kontext wird in einem Web-App-Fenster erstellt, um die Ziel-Start-URL zu laden. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) zur Verfügung gestellt, um zusätzliche benutzerdefinierte Startnavigationsbehandlungen zu ermöglichen.
- `auto`
  - : Der Benutzeragent entscheidet, was für die Plattform am besten funktioniert. Zum Beispiel könnte <code>navigate-existing</code> auf Mobilgeräten sinnvoller sein, wo Einzel-App-Instanzen verbreitet sind, während <code>navigate-new</code> im Desktop-Kontext sinnvoller sein könnte. Dies ist der Standardwert, der verwendet wird, wenn bereitgestellte Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code innerhalb der Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) einfügen, um eine benutzerdefinierte Behandlung der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) bereitzustellen.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> [!NOTE]
> [`LaunchParams`](/de/docs/Web/API/LaunchParams) hat auch eine Eigenschaft [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files), die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurückgibt, die Dateien darstellen, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode übergeben werden. Dies ermöglicht es, eine benutzerdefinierte Datei-Handling-Funktionalität zu implementieren.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird bei der Implementierung benutzerdefinierter Startnavigationsbehandlungen in einer PWA verwendet. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Funktionalität der Startnavigationsbehandlung einzurichten, wird der Callback-Funktion innerhalb von `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionalität, die es ermöglicht, benutzerdefinierte Startnavigationsbehandlungen in der PWA zu implementieren. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das in die Callback-Funktion [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

## Erweiterungen zu anderen Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, benutzerdefinierte Startnavigationsbehandlungen in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren, wobei der Kontext der Behandlung durch den [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler)-Manifest-Feld `client_mode`-Wert angezeigt wird.

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
        title.textContent = new URL(track).pathname.slice(1);
        audio.play();
      }
    }
  });
}
```

Dieser Code wird in die PWA aufgenommen und beim Laden der App ausgeführt, wenn sie gestartet wird. Die Callback-Funktion [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert den Suchparameter aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und verwendet ihn, falls ein `track`-Parameter gefunden wird, um das `src` eines {{htmlelement("audio")}}-Elements zu füllen und den Audiotrack abzuspielen, auf den gezeigt wird.

Sehen Sie sich die [Musicr 2.0](https://mdn.github.io/dom-examples/launch-handler/) Demo-App an, um den vollständigen funktionierenden Code zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
