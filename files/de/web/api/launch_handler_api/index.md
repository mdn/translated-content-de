---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: c60eaa2dd90fefcaaafdaca69f3185b46d399d8b
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht es Entwicklern zu steuern, wie eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — zum Beispiel, ob ein bestehendes Fenster verwendet oder ein neues erstellt wird, und wie die Ziel-URL der App beim Start behandelt wird.

## Konzepte und Verwendung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler)-Feld zu Ihrer Web-App-Manifestdatei hinzufügen. Dieses hat ein Unterfeld, `client_mode`, welches einen String-Wert enthält, der festlegt, wie die App gestartet und navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Wenn nicht angegeben, ist der Standardwert für `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird ausgewählt, um den Start zu bearbeiten. Dies wird die Ziel-Start-URL in der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL)-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts bereitstellen, das in die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird. Wie Sie unten sehen werden, ermöglicht dies, eine benutzerdefinierte Startverarbeitungsfunktionalität für Ihre App festzulegen.
- `navigate-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird zur Ziel-Start-URL navigiert. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) bereitgestellt, um die Implementierung zusätzlicher benutzerdefinierter Navigationsverarbeitungen zu ermöglichen.
- `navigate-new`
  - : Ein neuer Browsing-Kontext wird in einem Web-App-Fenster erstellt, um die Ziel-Start-URL zu laden. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) bereitgestellt, um zusätzliche benutzerdefinierte Navigationsverarbeitungen zu ermöglichen.
- `auto`
  - : Der Benutzeragent entscheidet, was für die Plattform am besten funktioniert. Zum Beispiel könnte <code>navigate-existing</code> auf Mobilgeräten sinnvoller sein, wo einzelne App-Instanzen üblich sind, während <code>navigate-new</code> in einem Desktop-Kontext mehr Sinn machen könnte. Dies ist der Standardwert, wenn angegebene Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code innerhalb der Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) einschließen, um eine benutzerdefinierte Verarbeitung der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) bereitzustellen.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> [!NOTE]
> [`LaunchParams`](/de/docs/Web/API/LaunchParams) verfügt außerdem über eine [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft, die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurückgibt, die alle Dateien darstellen, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode übergeben wurden. Dies ermöglicht die Implementierung einer benutzerdefinierten Dateiverarbeitung.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird bei der Implementierung der benutzerdefinierten Startnavigationsverarbeitung in einer PWA verwendet. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Funktionalität zur Handhabung der Startnavigation einzurichten, wird der Callback-Funktion innerhalb von `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionalitäten, die es ermöglichen, benutzerdefinierte Startnavigationsverarbeitungen in der PWA zu implementieren. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das in die Callback-Funktion von [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

## Erweiterungen für andere Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, benutzerdefinierte Startnavigationsverarbeitungen in einer [progressiven Web-App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren, wobei der Verarbeitungskontext durch den [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler)-Manifestfeld `client_mode`-Wert angezeigt wird.

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

Dieser Code ist in der PWA enthalten und wird beim Laden der App beim Start ausgeführt. Die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert den Suchparameter aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und verwendet ihn, wenn ein `track`-Parameter gefunden wird, um ein {{htmlelement("audio")}}-Element mit `src` zu füllen und den Audiotrack abzuspielen, auf den dieser verweist.

Siehe die [Musicr 2.0](https://mdn.github.io/dom-examples/launch-handler/)-Demo-App für vollständigen funktionierenden Code.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
