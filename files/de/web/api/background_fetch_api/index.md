---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: c7460aab1397829c109a88e3a58fed9b7ef9c0c5
---

{{DefaultAPISidebar("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Background Fetch API** bietet eine Methode zur Verwaltung von Downloads, die erhebliche Zeit in Anspruch nehmen können, etwa Filme, Audiodateien und Software.

## Konzepte und Verwendung

Wenn eine Webanwendung erfordert, dass der Benutzer große Dateien herunterlädt, stellt dies häufig ein Problem dar, da der Benutzer mit der Seite verbunden bleiben muss, damit der Download abgeschlossen werden kann. Wenn die Verbindung verloren geht, der Tab geschlossen oder von der Seite weg navigiert wird, stoppt der Download.

Die [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API) bietet Service Workern eine Möglichkeit, die Verarbeitung aufzuschieben, bis ein Benutzer verbunden ist. Sie kann jedoch nicht für lang laufende Aufgaben wie das Herunterladen einer großen Datei verwendet werden. Background Sync erfordert, dass der Service Worker aktiv bleibt, bis der Fetch abgeschlossen ist. Um die Akkulaufzeit zu schonen und unerwünschte Aufgaben im Hintergrund zu verhindern, beendet der Browser die Aufgabe irgendwann.

Die Background Fetch API löst dieses Problem. Sie ermöglicht es einem Webentwickler, dem Browser mitzuteilen, einige Fetches im Hintergrund auszuführen, beispielsweise wenn der Benutzer auf eine Schaltfläche klickt, um eine Videodatei herunterzuladen. Der Browser führt die Fetches dann für den Benutzer sichtbar aus, zeigt den Fortschritt an und bietet ihm eine Möglichkeit, den Download abzubrechen. Sobald der Download abgeschlossen ist, öffnet der Browser den Service Worker. Die Anwendung kann dann bei Bedarf etwas mit der Antwort tun.

Die Background Fetch API ermöglicht den Fetch auch dann, wenn der Benutzer den Prozess startet, während er offline ist. Sobald eine Verbindung besteht, beginnt er. Wenn der Benutzer offline geht, wird der Prozess pausiert, bis der Benutzer wieder online ist.

## Schnittstellen

- [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) {{Experimental_Inline}}
  - : Eine Zuordnung, bei der die Schlüssel Hintergrund-Fetch-IDs und die Werte [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekte sind.
- [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) {{Experimental_Inline}}
  - : Repräsentiert einen Background Fetch.
- [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) {{Experimental_Inline}}
  - : Repräsentiert eine einzelne Fetch-Anfrage und -Antwort.
- [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für die Ereignisse [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) und [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event)
- [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für die Ereignisse [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) und [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event)

### Erweiterungen anderer Schnittstellen

- [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das Hintergrund-Fetch-Vorgänge verwaltet.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event)-Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Hintergrund-Fetch-Vorgang vom Benutzer oder von der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event)-Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche für einen Hintergrund-Fetch-Vorgang geklickt hat.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event)-Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einem Hintergrund-Fetch-Vorgang fehlgeschlagen ist.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event)-Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einem Hintergrund-Fetch-Vorgang erfolgreich waren.

## Beispiele

Prüfen Sie vor der Verwendung von Background Fetch die Browserunterstützung.

```js
if (!("BackgroundFetchManager" in self)) {
  // Provide fallback downloading.
}
```

Die Verwendung von Background Fetch erfordert einen registrierten Service Worker. Rufen Sie dann `backgroundFetch.fetch()` auf, um einen Fetch auszuführen. Dies gibt ein Promise zurück, das mit einer [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) erfüllt wird.

Ein Hintergrund-Fetch kann mehrere Dateien abrufen. In unserem Beispiel fordert der Fetch eine MP3- und eine JPEG-Datei an. Dadurch kann ein Paket von Dateien, das der Benutzer als ein Element wahrnimmt, beispielsweise ein Podcast und ein Artwork, auf einmal heruntergeladen werden.

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

Weitere Codebeispiele und eine Demo finden Sie unter [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
