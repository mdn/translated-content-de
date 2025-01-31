---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht es Entwicklern zu steuern, wie eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — zum Beispiel, ob ein vorhandenes Fenster verwendet oder ein neues erstellt wird und wie die Ziel-Start-URL der App behandelt wird.

## Konzepte und Nutzung

Sie können das Startverhalten Ihrer App angeben, indem Sie das Feld [`launch_handler`](/de/docs/Web/Manifest/Reference/launch_handler) zu Ihrer Web-App-Manifest-Datei hinzufügen. Dieses hat ein Unterfeld, `client_mode`, das einen Zeichenfolgenwert enthält, der angibt, wie die App gestartet und zu ihr navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Wenn nicht angegeben, ist der Standardwert für `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird gewählt, um den Start zu handhaben. Dies wird die Ziel-Start-URL in der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL)-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts bereitstellen, das an die Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird. Wie Sie unten sehen werden, ermöglicht dies die Einrichtung benutzerdefinierter Startvorgangs-Funktionen für Ihre App.
- `navigate-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird zur Ziel-Start-URL navigiert. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) bereitgestellt, damit zusätzliche benutzerdefinierte Startnavigations-Funktionen implementiert werden können.
- `navigate-new`
  - : Ein neuer Browsing-Kontext wird in einem Web-App-Fenster erstellt, um die Ziel-Start-URL zu laden. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) bereitgestellt, um zusätzliche benutzerdefinierte Startnavigations-Funktionen implementieren zu können.
- `auto`
  - : Der Benutzeragent entscheidet, was für die Plattform am besten funktioniert. Zum Beispiel könnte <code>navigate-existing</code> auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während <code>navigate-new</code> in einem Desktop-Kontext mehr Sinn machen könnte. Dies ist der Standardwert, der verwendet wird, wenn bereitgestellte Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code innerhalb der Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) einschließen, um das benutzerdefinierte Handling der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) anzubieten.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> **Hinweis:** [`LaunchParams`](/de/docs/Web/API/LaunchParams) verfügt auch über eine [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft, die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurückgibt, die alle Dateien repräsentieren, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode übergeben werden. Dies ermöglicht die Implementierung benutzerdefinierter Dateihandhabung.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird bei der Implementierung benutzerdefinierter Startnavigations-Funktionen in einer PWA verwendet. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Startnavigations-Funktionalität einzurichten, wird der Rückruffunktion innerhalb von `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/Reference/launch_handler)-`client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` den Zugriff auf Funktionen, die die Implementierung benutzerdefinierter Startnavigations-Handhabung in der PWA ermöglichen. Diese Funktionalität wird von den Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, die in die Rückruffunktion von [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben werden.

## Erweiterungen zu anderen Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die die Implementierung benutzerdefinierter Startnavigations-Funktionen in einer [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) ermöglicht, wobei der Handhabungskontext durch den Wert des `client_mode`-Feldes im [`launch_handler`](/de/docs/Web/Manifest/Reference/launch_handler)-Manifestfeld angezeigt wird.

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

Dieser Code ist in der PWA enthalten und wird beim Laden der App gestartet. Die Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert den Suchparameter aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und verwendet ihn, falls ein `track`-Parameter gefunden wird, um das {{htmlelement("audio")}}-Element `src` zu setzen und den Audiotrack abzuspielen, auf den er zeigt.

Sehen Sie sich die [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App für den vollständigen funktionierenden Code an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
