---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{DefaultAPISidebar("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Background Fetch API** bietet eine Methode zum Verwalten von Downloads, die eine beträchtliche Zeit in Anspruch nehmen können, wie Filme, Audiodateien und Software.

## Konzepte und Verwendung

Wenn eine Webanwendung es erfordert, dass der Benutzer große Dateien herunterlädt, stellt dies oft ein Problem dar, da der Benutzer mit der Seite verbunden bleiben muss, damit der Download abgeschlossen wird. Verliert der Benutzer die Verbindung, schließt den Tab oder navigiert von der Seite weg, stoppt der Download.

Die [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API) bietet zwar eine Möglichkeit für Service Worker, die Verarbeitung zu verzögern, bis ein Benutzer verbunden ist; sie kann jedoch nicht für lang andauernde Aufgaben wie das Herunterladen einer großen Datei verwendet werden. Background Sync erfordert, dass der Service Worker so lange aktiv bleibt, bis der Abruf abgeschlossen ist, und um den Akku zu schonen und unerwünschte Hintergrundaufgaben zu verhindern, wird der Browser den Vorgang irgendwann beenden.

Die Background Fetch API löst dieses Problem. Sie bietet eine Möglichkeit für einen Webentwickler, dem Browser mitzuteilen, dass einige Abrufe im Hintergrund durchgeführt werden sollen, zum Beispiel wenn der Benutzer auf einen Button klickt, um eine Videodatei herunterzuladen. Der Browser führt dann die Abrufe in einer für den Benutzer sichtbaren Weise durch, zeigt den Fortschritt an und gibt ihnen eine Methode, um den Download abzubrechen. Sobald der Download abgeschlossen ist, öffnet der Browser den Service Worker, woraufhin Ihre Anwendung, wenn nötig, mit der Antwort etwas tun kann.

Die Background Fetch API ermöglicht es, dass der Abruf fortgesetzt wird, wenn der Benutzer den Prozess offline beginnt. Sobald er verbunden ist, beginnt der Abruf. Wenn der Benutzer offline geht, wird der Prozess pausiert, bis der Benutzer wieder online ist.

## Schnittstellen

- [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) {{Experimental_Inline}}
  - : Ein Map, bei dem die Schlüssel Hintergrundabruf-IDs und die Werte [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekte sind.
- [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) {{Experimental_Inline}}
  - : Repräsentiert einen Hintergrundabruf.
- [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) {{Experimental_Inline}}
  - : Repräsentiert eine einzelne Abrufanfrage und -antwort.
- [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für das [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) und das [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) Ereignis.
- [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für das [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) und das [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) Ereignis.

### Erweiterungen zu anderen Schnittstellen

- [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das Hintergrundabrufoperationen verwaltet.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Hintergrundabrufoperation vom Benutzer oder der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche für eine Hintergrundabrufoperation geklickt hat.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einer Hintergrundabrufoperation fehlgeschlagen ist.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einer Hintergrundabrufoperation erfolgreich waren.

## Beispiele

Vor der Verwendung von Background Fetch prüfen Sie die Browser-Unterstützung.

```js
if (!("BackgroundFetchManager" in self)) {
  // Provide fallback downloading.
}
```

Die Verwendung von Background Fetch erfordert einen registrierten Service Worker. Rufen Sie dann `backgroundFetch.fetch()` auf, um einen Abruf durchzuführen. Dies
gibt ein Versprechen zurück, das mit einer [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) aufgelöst wird.

Ein Hintergrundabruf kann eine Anzahl von Dateien abrufen. In unserem Beispiel fordert der Abruf eine MP3 und eine JPEG-Datei an. Dies ermöglicht es, ein Paket von Dateien, das der Benutzer als ein Element sieht (zum Beispiel ein Podcast und Kunstwerk), auf einmal herunterzuladen.

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

Sie finden eine Demo-Anwendung, die Background Fetch implementiert [auf Glitch](https://glitch.com/edit/#!/bgfetch-http203?path=public%2Fclient.js%3A191%3A45).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
