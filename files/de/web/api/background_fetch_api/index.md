---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{DefaultAPISidebar("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Background Fetch API** bietet eine Methode zur Verwaltung von Downloads, die eine beträchtliche Zeit in Anspruch nehmen können, wie Filme, Audiodateien und Software.

## Konzepte und Nutzung

Wenn eine Webanwendung vom Benutzer das Herunterladen großer Dateien erfordert, stellt dies oft ein Problem dar, da der Benutzer mit der Seite verbunden bleiben muss, damit der Download abgeschlossen wird. Wenn sie die Verbindung verlieren, den Tab schließen oder von der Seite navigieren, stoppt der Download.

Die {{domxref("Background Synchronization API", "", "", "nocode")}} bietet Service Workern die Möglichkeit, die Verarbeitung zu verschieben, bis ein Benutzer verbunden ist; jedoch kann sie nicht für lang andauernde Aufgaben wie das Herunterladen einer großen Datei verwendet werden. Background Sync erfordert, dass der Service Worker aktiv bleibt, bis das Fetch abgeschlossen ist. Um die Batterielebensdauer zu schonen und unerwünschte Aufgaben im Hintergrund zu verhindern, wird der Browser die Aufgabe irgendwann beenden.

Die Background Fetch API löst dieses Problem. Sie bietet eine Möglichkeit für Webentwickler, dem Browser mitzuteilen, einige Fetches im Hintergrund durchzuführen, zum Beispiel wenn der Benutzer auf eine Schaltfläche klickt, um eine Videodatei herunterzuladen. Der Browser führt dann die Fetches auf sichtbare Weise für den Benutzer aus, zeigt den Fortschritt an und gibt ihm eine Möglichkeit, den Download abzubrechen. Sobald der Download abgeschlossen ist, wird der Browser den Service Worker öffnen, an welchem Punkt Ihre Anwendung bei Bedarf etwas mit der Antwort tun kann.

Die Background Fetch API ermöglicht den Fetch auch dann, wenn der Benutzer den Prozess offline startet. Sobald er verbunden ist, beginnt der Prozess. Wenn der Benutzer offline geht, pausiert der Prozess, bis der Benutzer wieder online ist.

## Schnittstellen

- {{domxref("BackgroundFetchManager")}} {{Experimental_Inline}}
  - : Eine Karte, bei der die Schlüssel Background-Fetch-IDs sind und die Werte {{domxref("BackgroundFetchRegistration")}} Objekte.
- {{domxref("BackgroundFetchRegistration")}} {{Experimental_Inline}}
  - : Repräsentiert einen Background Fetch.
- {{domxref("BackgroundFetchRecord")}} {{Experimental_Inline}}
  - : Repräsentiert eine einzelne Fetch-Anfrage und -Antwort.
- {{domxref("BackgroundFetchEvent")}} {{Experimental_Inline}}
  - : Der Ereignistyp für das {{domxref("ServiceWorkerGlobalScope.backgroundfetchabort_event", "backgroundfetchabort")}} und {{domxref("ServiceWorkerGlobalScope.backgroundfetchclick_event", "backgroundfetchclick")}} Ereignis.
- {{domxref("BackgroundFetchUpdateUIEvent")}} {{Experimental_Inline}}
  - : Der Ereignistyp für das {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} und {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}} Ereignis.

### Erweiterungen anderer Schnittstellen

- {{domxref("ServiceWorkerRegistration.backgroundFetch")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein {{domxref("BackgroundFetchManager")}} Objekt zurück, das Hintergrund-Fetch-Operationen verwaltet.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchabort_event", "backgroundfetchabort")}} Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Hintergrund-Fetch-Operation vom Benutzer oder der App abgebrochen wurde.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}} Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf das UI für eine Hintergrund-Fetch-Operation geklickt hat.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchfail_event", "backgroundfetchfail")}} Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einer Hintergrund-Fetch-Operation fehlgeschlagen ist.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchsuccess_event", "backgroundfetchsuccess")}} Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einer Hintergrund-Fetch-Operation erfolgreich waren.

## Beispiele

Vor der Nutzung von Background Fetch sollte die Browserunterstützung überprüft werden.

```js
if (!("BackgroundFetchManager" in self)) {
  // Provide fallback downloading.
}
```

Die Nutzung von Background Fetch erfordert einen registrierten Service Worker. Dann rufen Sie `backgroundFetch.fetch()` auf, um eine Fetch-Operation durchzuführen. Dies
gibt ein Versprechen zurück, das mit einer {{domxref("BackgroundFetchRegistration")}} aufgelöst wird.

Ein Hintergrund-Fetch kann eine Reihe von Dateien abrufen. In unserem Beispiel fordert der Fetch ein MP3 und ein JPEG an. Dies ermöglicht ein Paket von Dateien, das der Benutzer als ein Element sieht (zum Beispiel einen Podcast und ein Kunstwerk), dass auf einmal heruntergeladen wird.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

Eine Demo-Anwendung, die Background Fetch implementiert, finden Sie [hier](https://glitch.com/edit/#!/bgfetch-http203?path=public%2Fclient.js%3A191%3A45).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
