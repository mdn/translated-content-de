---
title: Launch Handler-API
slug: Web/API/Launch_Handler_API
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{SeeCompatTable}}{{DefaultAPISidebar("Launch Handler API")}}

Die **Launch Handler-API** ermöglicht es Entwicklern zu kontrollieren, wie eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) gestartet wird — beispielsweise ob sie ein vorhandenes Fenster verwendet oder ein neues erstellt, und wie die Ziel-Start-URL der App behandelt wird.

## Konzepte und Verwendung

Sie können das Startverhalten Ihrer App festlegen, indem Sie das [`launch_handler`](/de/docs/Web/Manifest/launch_handler)-Feld zu Ihrer Web-App-Manifeste-Datei hinzufügen. Dieses hat ein Unterfeld, `client_mode`, das einen Zeichenfolgenwert enthält, der angibt, wie die App gestartet und zu ihr navigiert werden soll. Zum Beispiel:

```json
"launch_handler": {
    "client_mode": "focus-existing"
}
```

Wenn nicht angegeben, ist der Standardwert von `client_mode` `auto`. Verfügbare Werte sind:

- `focus-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird ausgewählt, um den Start zu handhaben. Diese wird die Ziel-Start-URL in der {{domxref("LaunchParams.targetURL", "targetURL")}}-Eigenschaft des {{domxref("LaunchParams")}}-Objekts enthalten, das in die Callback-Funktion von {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} übergeben wird. Wie unten gezeigt, ermöglicht dies die Einrichtung benutzerdefinierter Startfunktionen für Ihre App.
- `navigate-existing`
  - : Der zuletzt interagierte Browsing-Kontext in einem Web-App-Fenster wird zur Ziel-Start-URL navigiert. Die Ziel-URL wird weiterhin über {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} bereitgestellt, um die Implementierung zusätzlicher benutzerdefinierter Startnavigationsfunktionen zu ermöglichen.
- `navigate-new`
  - : Ein neuer Browsing-Kontext wird in einem Web-App-Fenster erstellt, um die Ziel-Start-URL zu laden. Die Ziel-URL wird weiterhin über {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} bereitgestellt, um die Implementierung zusätzlicher benutzerdefinierter Startnavigationsfunktionen zu ermöglichen.
- `auto`
  - : Der Benutzeragent entscheidet, was am besten für die Plattform funktioniert. Zum Beispiel könnte <code>navigate-existing</code> auf mobilen Geräten mehr Sinn machen, wo einzelne App-Instanzen üblich sind, während <code>navigate-new</code> in einem Desktop-Kontext sinnvoller sein könnte. Dies ist der Standardwert, der verwendet wird, wenn angegebene Werte ungültig sind.

Wenn `focus-existing` verwendet wird, können Sie Code innerhalb der Callback-Funktion von {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} einschließen, um eine benutzerdefinierte Handhabung der {{domxref("LaunchParams.targetURL", "targetURL")}} bereitzustellen.

```js
window.launchQueue.setConsumer((launchParams) => {
  // Machen Sie etwas mit launchParams.targetURL
});
```

> **Hinweis:** {{domxref("LaunchParams")}} hat auch eine {{domxref("LaunchParams.files")}}-Eigenschaft, die ein schreibgeschütztes Array von {{domxref("FileSystemHandle")}}-Objekten zurückgibt, die alle Dateien darstellen, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode übergeben werden. Dies ermöglicht die Implementierung benutzerdefinierter Dateihandhabung.

## Schnittstellen

- {{domxref("LaunchParams")}}
  - : Wird bei der Implementierung benutzerdefinierter Startnavigationsfunktionen in einer PWA verwendet. Wenn {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} aufgerufen wird, um die Startnavigationshandhabungsfunktion einzurichten, wird der Callback-Funktion innerhalb von `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.
- {{domxref("LaunchQueue")}}
  - : Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` im [`launch_handler`](/de/docs/Web/Manifest/launch_handler) gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionen, die die Implementierung benutzerdefinierter Startnavigationsfunktionen in der PWA ermöglichen. Diese Funktionalität wird durch die Eigenschaften des {{domxref("LaunchParams")}}-Objekts gesteuert, das in die Callback-Funktion von {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} übergeben wird.

## Erweiterungen zu anderen Schnittstellen

- {{domxref("window.launchQueue")}}
  - : Bietet Zugriff auf die {{domxref("LaunchQueue")}}-Klasse, die die Implementierung benutzerdefinierter Startnavigationsfunktionen in einer [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) ermöglicht, wobei der Handhabungskontext durch den `client_mode`-Wert des [`launch_handler`](/de/docs/Web/Manifest/launch_handler)-Manifests angezeigt wird.

## Beispiele

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Angenommen, es handelt sich um eine Musik-Player-App, die einen Track erhält, der abgespielt werden soll
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

Dieser Code ist in der PWA enthalten und wird beim Laden der App, beim Start ausgeführt. Die Callback-Funktion von {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} extrahiert das Suchparameter aus der {{domxref("LaunchParams.targetURL")}} und verwendet es, wenn sie einen `track`-Parameter findet, um das `src` eines {{htmlelement("audio")}}-Elements zu füllen und den Audiotrack abzuspielen, auf den dies verweist.

Sehen Sie sich die [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App für vollständigen funktionierenden Code.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler-API: Steuern Sie, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
