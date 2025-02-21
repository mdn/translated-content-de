---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht es Entwicklern zu steuern, wie eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — zum Beispiel, ob sie ein bestehendes Fenster verwendet oder ein neues erstellt, und wie die Ziel-Start-URL der App behandelt wird.

## Konzepte und Verwendung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler)-Feld zu Ihrer Webapp-Manifestdatei hinzufügen. Dieses hat ein Unterfeld, `client_mode`, welches einen Zeichenfolgenwert enthält, der angibt, wie die App gestartet und navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Wenn nicht angegeben, ist der Standardwert von `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt benutzte Browsing-Kontext in einem Web-App-Fenster wird ausgewählt, um den Start zu handhaben. Diese wird die Ziel-Start-URL in der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL)-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts füllen, das in die Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird. Wie unten gezeigt, erlaubt dies die Einstellung einer benutzerdefinierten Startverwaltung für Ihre App.
- `navigate-existing`
  - : Der zuletzt benutzte Browsing-Kontext in einem Web-App-Fenster wird zur Ziel-Start-URL navigiert. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) bereitgestellt, um zusätzliche benutzerdefinierte Startnavigations-Handhabung zu implementieren.
- `navigate-new`
  - : Ein neuer Browsing-Kontext wird in einem Web-App-Fenster erstellt, um die Ziel-Start-URL zu laden. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) bereitgestellt, um zusätzliche benutzerdefinierte Startnavigations-Handhabung zu implementieren.
- `auto`
  - : Der Benutzeragent entscheidet, was für die Plattform am besten funktioniert. Zum Beispiel könnte `navigate-existing` auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während `navigate-new` eher im Desktop-Kontext sinnvoll wäre. Dies ist der Standardwert, der verwendet wird, wenn angegebene Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code innerhalb der Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) einschließen, um eine benutzerdefinierte Handhabung der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) anzubieten.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> **Note:** [`LaunchParams`](/de/docs/Web/API/LaunchParams) hat auch eine [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft, die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurückgibt, die Dateien darstellen, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode übermittelt wurden. Dies erlaubt eine benutzerdefinierte Datei-Handhabung zu implementieren.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird verwendet, wenn eine benutzerdefinierte Startnavigations-Handhabung in einer PWA implementiert wird. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Startnavigations-Handhabungsfunktionalität einzurichten, wird der Rückruffunktion in `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionalität, die eine benutzerdefinierte Startnavigations-Handhabung ermöglicht. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das in die Rückruffunktion von [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

## Erweiterungen für andere Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die eine benutzerdefinierte Startnavigations-Handhabung in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) ermöglicht, wobei der Handhabungskontext durch den [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) Manifestfeld `client_mode`-Wert angezeigt wird.

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

Dieser Code ist in der PWA enthalten und wird beim Start der App ausgeführt. Die Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert das Suchparameter aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und verwendet es, wenn es einen `track`-Parameter findet, um die `src` eines {{htmlelement("audio")}}-Elements zu setzen und den Audiotrack, auf den dies zeigt, abzuspielen.

Sehen Sie sich die [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App für vollständigen funktionierenden Code an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
