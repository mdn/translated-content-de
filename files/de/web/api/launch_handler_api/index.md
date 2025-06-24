---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht es Entwicklern zu kontrollieren, wie eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — zum Beispiel, ob ein bestehendes Fenster verwendet oder ein neues erstellt wird, und wie die Zielstart-URL der App verarbeitet wird.

## Konzepte und Verwendung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler)-Feld zu Ihrer Web-App-Manifestdatei hinzufügen. Es enthält ein Unterfeld, `client_mode`, das einen Stringwert enthält, der angibt, wie die App gestartet und zu dieser navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Falls nicht angegeben, ist der Standardwert für `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt interagierte Browser-Kontext in einem Web-App-Fenster wird gewählt, um den Start zu bedienen. Dies wird die Zielstart-URL in der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL)-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts bevölkern, das der Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird. Wie unten gezeigt, ermöglicht dies, benutzerdefinierte Startverarbeitungsfunktionen für Ihre App festzulegen.
- `navigate-existing`
  - : Der zuletzt interagierte Browser-Kontext in einem Web-App-Fenster wird zur Zielstart-URL navigiert. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) bereitgestellt, um zusätzliche benutzerdefinierte Startnavigationsverarbeitung zu ermöglichen.
- `navigate-new`
  - : Ein neuer Browser-Kontext wird in einem Web-App-Fenster erstellt, um die Zielstart-URL zu laden. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) bereitgestellt, um zusätzliche benutzerdefinierte Startnavigationsverarbeitung zu ermöglichen.
- `auto`
  - : Der Benutzeragent entscheidet, was am besten für die Plattform funktioniert. Zum Beispiel könnte <code>navigate-existing</code> auf Mobilgeräten, wo einzelne App-Instanzen üblich sind, mehr Sinn machen, während <code>navigate-new</code> in einem Desktop-Kontext sinnvoller ist. Dies ist der Standardwert, der verwendet wird, wenn angegebene Werte ungültig sind.

Wenn `focus-existing` genutzt wird, können Sie Code in die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufnehmen, um eine benutzerdefinierte Verarbeitung der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) bereitzustellen.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> [!NOTE] > [`LaunchParams`](/de/docs/Web/API/LaunchParams) verfügt auch über eine [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft, die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurückgibt, die alle Dateien repräsentieren, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode übergeben wurden. Dies ermöglicht die Implementierung benutzerdefinierter Datei-Verarbeitungen.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird verwendet, wenn benutzerdefinierte Startnavigationsverarbeitung in einer PWA implementiert wird. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Startnavigationsverarbeitungsfunktionalität einzurichten, wird der Callback-Funktion innerhalb von `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionalität, die es ermöglicht, benutzerdefinierte Startnavigationsverarbeitung in der PWA zu implementieren. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das an die Callback-Funktion von [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

## Erweiterungen zu anderen Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, benutzerdefinierte Startnavigationsverarbeitung in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren, wobei der Verarbeitungskontext durch den im Manifestfeld [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) angegebenen `client_mode`-Wert angezeigt wird.

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

Dieser Code ist in der PWA enthalten und wird beim Laden der App ausgeführt, beim Start. Die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert den Suchparameter aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und verwendet ihn, falls er einen `track`-Parameter findet, um ein {{htmlelement("audio")}}-Element mit `src` zu bevölkern und den Audiotrack abzuspielen, auf den dieser zeigt.

Sehen Sie sich die [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App für den vollständigen funktionierenden Code an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Steuern, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
