---
title: Launch Handler API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler API** ermöglicht es Entwicklern, zu steuern, wie eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird – beispielsweise, ob sie ein bestehendes Fenster verwendet oder ein neues erstellt und wie die Ziel-Launch-URL der App behandelt wird.

## Konzepte und Verwendung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das Feld [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) zu Ihrer Web-App-Manifestdatei hinzufügen. Dieses hat ein Unterfeld, `client_mode`, das einen Zeichenfolgenwert enthält, der angibt, wie die App gestartet und zu welchem Ziel navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Falls nicht angegeben, ist der Standardwert für `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird gewählt, um den Start zu handhaben. Dies wird die Ziel-Launch-URL in der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL)-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts füllen, das in die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird. Wie Sie unten sehen werden, können Sie damit eine benutzerdefinierte Start-Handhabungsfunktionalität für Ihre App festlegen.
- `navigate-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird zur Ziel-Launch-URL navigiert. Die Ziel-URL bleibt über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verfügbar, um die Implementierung zusätzlicher benutzerdefinierter Starts und Navigations-Handhabung zu ermöglichen.
- `navigate-new`
  - : Ein neuer Browsing-Kontext wird in einem Web-App-Fenster erstellt, um die Ziel-Launch-URL zu laden. Die Ziel-URL bleibt über [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) verfügbar, um die Implementierung zusätzlicher benutzerdefinierter Starts und Navigations-Handhabung zu ermöglichen.
- `auto`
  - : Die Benutzer-Agent entscheidet, was am besten für die Plattform geeignet ist. Zum Beispiel könnte <code>navigate-existing</code> auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während <code>navigate-new</code> mehr Sinn in einem Desktop-Kontext machen könnte. Dies ist der Standardwert, der verwendet wird, wenn angegebene Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code innerhalb der Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) einschließen, um eine benutzerdefinierte Handhabung der [`targetURL`](/de/docs/Web/API/LaunchParams/targetURL) zu ermöglichen.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Do something with launchParams.targetURL
});
```

> **Note:** [`LaunchParams`](/de/docs/Web/API/LaunchParams) hat auch eine [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files)-Eigenschaft, die ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurückgibt, welche alle Dateien repräsentieren, die zusammen mit der Start-Navigation über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode übergeben wurden. Dies ermöglicht die Implementierung einer benutzerdefinierten Dateihandhabung.

## Schnittstellen

- [`LaunchParams`](/de/docs/Web/API/LaunchParams)
  - : Wird verwendet, wenn benutzerdefinierte Starts und Navigations-Handhabung in einer PWA implementiert werden. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Start- und Navigations-Handhabungsfunktionalität einzurichten, wird der Callback-Funktion innerhalb von `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.
- [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionalitäten, die die Implementierung benutzerdefinierter Start- und Navigations-Handhabung in der PWA ermöglichen. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das an die Callback-Funktion [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

## Erweiterungen zu anderen Schnittstellen

- [`window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
  - : Bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, eine benutzerdefinierte Start- und Navigations-Handhabung in einer [progressiven Web-App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren, wobei der Handhabungskontext durch den `client_mode`-Wert des [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler)-Felds im Manifest signalisiert wird.

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

Dieser Code ist in der PWA enthalten und wird ausgeführt, wenn die App beim Start geladen wird. Die Callback-Funktion von [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) extrahiert das Suchparameter aus der [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) und verwendet es, falls sie einen `track`-Parameter findet, um ein {{htmlelement("audio")}}-Element mit `src` zu füllen und den Audio-Track abzuspielen, auf den dieser zeigt.

Siehe die [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App für vollständigen, funktionierenden Code.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Steuerung darüber, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
