---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{DefaultAPISidebar("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Background Fetch API** bietet eine Methode zum Verwalten von Downloads, die viel Zeit in Anspruch nehmen können, wie Filme, Audiodateien und Software.

## Konzepte und Nutzung

Wenn eine Webanwendung den Benutzer dazu bringt, große Dateien herunterzuladen, ergibt sich oft das Problem, dass der Benutzer mit der Seite verbunden bleiben muss, damit der Download abgeschlossen wird. Gehen sie offline, schließen den Tab oder navigieren von der Seite weg, stoppt der Download.

Die [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API) bietet eine Möglichkeit für Service Worker, die Verarbeitung aufzuschieben, bis der Benutzer verbunden ist. Sie kann jedoch nicht für länger laufende Aufgaben wie das Herunterladen großer Dateien verwendet werden. Background Sync erfordert, dass der Service Worker so lange aktiv bleibt, bis der Abruf abgeschlossen ist. Um die Akkulaufzeit zu schonen und um unerwünschte Aufgaben im Hintergrund zu verhindern, wird der Browser die Aufgabe irgendwann beenden.

Die Background Fetch API löst dieses Problem. Sie ermöglicht es einem Webentwickler, dem Browser zu sagen, dass einige Abrufe im Hintergrund durchgeführt werden sollen, z.B. wenn der Benutzer auf eine Schaltfläche klickt, um eine Videodatei herunterzuladen. Der Browser führt dann die Abrufe auf eine für den Benutzer sichtbare Weise aus, zeigt Fortschritte an und gibt dem Benutzer eine Methode, den Download abzubrechen. Sobald der Download abgeschlossen ist, öffnet der Browser den Service Worker, und die Anwendung kann bei Bedarf etwas mit der Antwort machen.

Die Background Fetch API ermöglicht den Abruf, wenn der Benutzer den Prozess offline startet. Sobald sie verbunden sind, beginnt der Abruf. Geht der Benutzer offline, pausiert der Vorgang, bis sie wieder online sind.

## Schnittstellen

- [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) {{Experimental_Inline}}
  - : Eine Zuordnung, bei der die Schlüssel Hintergrundabruf-IDs und die Werte [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekte sind.
- [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) {{Experimental_Inline}}
  - : Repräsentiert einen Background Fetch.
- [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) {{Experimental_Inline}}
  - : Repräsentiert einen individuellen Abrufanforderung und -antwort.
- [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für das [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event)- und [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event)-Ereignis.
- [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für das [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event)- und [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event)-Ereignis.

### Erweiterungen zu anderen Schnittstellen

- [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zu einem [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das Hintergrundabrufoperationen verwaltet.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Hintergrundabrufvorgang vom Benutzer oder der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche für einen Hintergrundabrufvorgang geklickt hat.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einem Hintergrundabrufvorgang fehlgeschlagen ist.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einem Hintergrundabrufvorgang erfolgreich waren.

## Beispiele

Überprüfen Sie vor der Nutzung von Background Fetch die Browser-Kompatibilität.

```js
if (!("BackgroundFetchManager" in self)) {
  // Provide fallback downloading.
}
```

Die Nutzung von Background Fetch erfordert einen registrierten Service Worker. Rufen Sie dann `backgroundFetch.fetch()` auf, um einen Abruf durchzuführen. Dies
gibt ein Promise zurück, das sich mit einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) auflöst.

Ein Hintergrundabruf kann eine Anzahl von Dateien abrufen. In unserem Beispiel fordert der Abruf eine MP3- und eine JPEG-Datei an. Dies ermöglicht es, ein Paket von Dateien, das der Benutzer als ein Element sieht (zum Beispiel einen Podcast und Artwork), auf einmal herunterzuladen.

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
