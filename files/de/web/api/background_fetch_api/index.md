---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{DefaultAPISidebar("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Background Fetch API** bietet eine Methode zum Verwalten von Downloads, die eine erhebliche Menge an Zeit in Anspruch nehmen können, wie Filme, Audiodateien und Software.

## Konzepte und Verwendung

Wenn eine Webanwendung von Benutzerinnen und Benutzern verlangt, große Dateien herunterzuladen, stellt dies oft ein Problem dar, da die Benutzerin oder der Benutzer mit der Seite verbunden bleiben muss, damit der Download abgeschlossen wird. Wenn die Verbindung verloren geht, die Registerkarte geschlossen oder die Seite verlassen wird, stoppt der Download.

Die [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API) bietet eine Möglichkeit für Service Worker, die Verarbeitung zu verschieben, bis ein Benutzer verbunden ist; allerdings kann sie nicht für lang laufende Aufgaben wie das Herunterladen einer großen Datei verwendet werden. Background Sync erfordert, dass der Service Worker aktiv bleibt, bis der Abruf abgeschlossen ist, und um die Batterielaufzeit zu schonen sowie unerwünschte Aufgaben im Hintergrund zu verhindern, wird der Browser die Aufgabe irgendwann beenden.

Die Background Fetch API löst dieses Problem. Sie ermöglicht es einem Webentwickler, dem Browser mitzuteilen, einige Abrufe im Hintergrund durchzuführen, z.B. wenn der Benutzer auf eine Schaltfläche klickt, um eine Videodatei herunterzuladen. Der Browser führt die Abrufe auf eine für den Benutzer sichtbare Weise aus, zeigt den Fortschritt an und gibt die Möglichkeit, den Download abzubrechen. Nach Abschluss des Downloads wird der Service Worker vom Browser geöffnet, woraufhin Ihre Anwendung bei Bedarf etwas mit der Antwort tun kann.

Die Background Fetch API ermöglicht es, dass der Abruf erfolgt, wenn die Benutzerin oder der Benutzer den Prozess offline startet. Sobald sie verbunden sind, beginnt er. Wenn der Benutzer offline geht, pausiert der Prozess, bis die Verbindung wiederhergestellt ist.

## Schnittstellen

- [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) {{Experimental_Inline}}
  - : Eine Zuordnung, bei der die Schlüssel Hintergrundabruf-IDs und die Werte [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekte sind.
- [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) {{Experimental_Inline}}
  - : Repräsentiert einen Hintergrundabruf.
- [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) {{Experimental_Inline}}
  - : Repräsentiert eine einzelne Abrufanfrage und Antwort.
- [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für die [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) und [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) Ereignisse.
- [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für die [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) und [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) Ereignisse.

### Erweiterungen zu anderen Schnittstellen

- [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zu einem [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das Hintergrundabrufoperationen verwaltet.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Hintergrundabrufoperation von der Benutzerin oder dem Benutzer oder der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche für eine Hintergrundabrufoperation geklickt hat.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einer Hintergrundabrufoperation fehlgeschlagen ist.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einer Hintergrundabrufoperation erfolgreich waren.

## Beispiele

Bevor Sie Background Fetch verwenden, überprüfen Sie die Browser-Unterstützung.

```js
if (!("BackgroundFetchManager" in self)) {
  // Provide fallback downloading.
}
```

Die Verwendung von Background Fetch erfordert einen registrierten Service Worker. Rufen Sie dann `backgroundFetch.fetch()` auf, um einen Abruf durchzuführen. Dies
gibt ein Versprechen zurück, das mit einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) aufgelöst wird.

Ein Hintergrundabruf kann eine Anzahl von Dateien abrufen. In unserem Beispiel fordert der Abruf eine MP3 und ein JPEG an. Dies ermöglicht das Herunterladen eines Dateipakets, das der Benutzer als ein Element (z.B. ein Podcast und ein Artwork) sieht.

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

- [Einführung in Background Fetch](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
