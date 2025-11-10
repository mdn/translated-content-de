---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht es Entwicklern, zu kontrollieren, wie eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — zum Beispiel, ob sie ein bestehendes Fenster verwendet oder ein neues erstellt, und wie die Ziel-Start-URL der App behandelt wird.

## Konzepte und Verwendung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das Feld [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) zu Ihrer Web-App-Manifestdatei hinzufügen. Dieses hat ein Unterfeld, `client_mode`, das einen Zeichenfolgenwert enthält, der angibt, wie die App gestartet und navigiert werden soll. Zum Beispiel:

```json
{
  "launch_handler": {
    "client_mode": "focus-existing"
  }
}
```

Falls nicht angegeben, ist der Standardwert für `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird ausgewählt, um den Start zu behandeln. Dies wird die Ziel-Start-URL in der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams) Objekts füllen, das in die Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird. Wie unten zu sehen ist, ermöglicht dies, die Startbehandlung Ihrer App individuell anzupassen.
- `navigate-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird zur Ziel-Start-URL navigiert. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verfügbar gemacht, um zusätzliche individuelle Startnavigationsbehandlungen zu implementieren.
- `navigate-new`
  - : Ein neuer Browsing-Kontext wird in einem Web-App-Fenster erstellt, um die Ziel-Start-URL zu laden. Die Ziel-URL wird weiterhin über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verfügbar gemacht, um zusätzliche individuelle Startnavigationsbehandlungen zu implementieren.
- `auto`
  - : Der User-Agent entscheidet, was am besten für die Plattform funktioniert. Zum Beispiel könnte <code>navigate-existing</code> auf Mobilgeräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während <code>navigate-new</code> in einem Desktop-Kontext mehr Sinn machen könnte. Dies ist der Standardwert, falls angegebene Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code innerhalb der Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) einfügen, um eine individuelle Behandlung der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) bereitzustellen.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> [!NOTE]
> [`LaunchParams`](/de/docs/Web/API/LaunchParams) hat auch eine [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files) Eigenschaft, die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle) Objekten zurückgibt, die Dateien repräsentieren, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode übergeben wurden. Dies ermöglicht die Implementierung einer individuellen Datei-Behandlung.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird bei der Implementierung individueller Startnavigationsbehandlung in einer PWA verwendet. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Startnavigations-Behandlungsfunktionalität einzurichten, wird die Rückruffunktion innerhalb von `setConsumer()` eine Instanz des `LaunchParams` Objekts übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode` Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, ermöglicht `LaunchQueue` den Zugriff auf Funktionen, die eine individuelle Startnavigationsbehandlung in der PWA implementieren. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams) Objekts gesteuert, das in die Rückruffunktion von [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

## Erweiterungen zu anderen Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue) Klasse, die es ermöglicht, eine individuelle Startnavigationsbehandlung in einer [progressiven Web-App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren, wobei der Behandlungskontext durch den [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) Manifest-Feld `client_mode` Wert angezeigt wird.

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

Dieser Code wird in der PWA eingebunden und bei jedem Start der App ausgeführt. Die Rückruffunktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert das Such-Param aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und, falls sie einen `track` Parameter findet, verwendet sie diesen, um das `src` des {{htmlelement("audio")}} Elements zu füllen und den Audiotrack abzuspielen, auf den dies verweist.

Sehen Sie sich die Demo-App [Musicr 2.0](https://mdn.github.io/dom-examples/launch-handler/) für vollständigen funktionierenden Code an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
