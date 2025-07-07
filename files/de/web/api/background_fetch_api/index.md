---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: 90eafc463fe122c86a64836f4f3953a0bee85be9
---

{{DefaultAPISidebar("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Background Fetch API** bietet eine Methode zum Verwalten von Downloads, die viel Zeit in Anspruch nehmen können, wie Filme, Audiodateien und Software.

## Konzepte und Verwendung

Wenn eine Webanwendung den Benutzer bittet, große Dateien herunterzuladen, stellt dies häufig ein Problem dar, da der Benutzer mit der Seite verbunden bleiben muss, damit der Download abgeschlossen wird. Bei Verlust der Verbindung, Schließen des Tabs oder Wechseln zu einer anderen Seite stoppt der Download.

Die [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API) ermöglicht es Service-Workern, die Verarbeitung aufzuschieben, bis ein Benutzer verbunden ist; sie kann jedoch nicht für lang andauernde Aufgaben wie das Herunterladen einer großen Datei verwendet werden. Background Sync erfordert, dass der Service-Worker so lange aktiv bleibt, bis der Abruf abgeschlossen ist. Um die Akkulaufzeit zu schonen und unerwünschte Hintergrundaktivitäten zu vermeiden, wird der Browser die Aufgabe irgendwann beenden.

Die Background Fetch API löst dieses Problem. Sie ermöglicht es einem Webentwickler, dem Browser mitzuteilen, einige Abrufe im Hintergrund auszuführen, zum Beispiel wenn der Benutzer auf eine Schaltfläche klickt, um eine Videodatei herunterzuladen. Der Browser führt die Abrufe dann in einer für den Benutzer sichtbaren Weise durch, zeigt den Fortschritt an und bietet eine Möglichkeit zum Abbrechen des Downloads. Sobald der Download abgeschlossen ist, öffnet der Browser den Service-Worker, woraufhin Ihre Anwendung bei Bedarf mit der Antwort arbeiten kann.

Die Background Fetch API ermöglicht den Abruf, wenn der Benutzer den Prozess offline startet. Sobald er verbunden ist, beginnt der Prozess. Wenn der Benutzer offline geht, pausiert der Prozess, bis der Benutzer wieder online ist.

## Schnittstellen

- [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) {{Experimental_Inline}}
  - : Eine Map, in der die Schlüssel Hintergrundabruf-IDs und die Werte [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekte sind.
- [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) {{Experimental_Inline}}
  - : Repräsentiert einen Hintergrundabruf.
- [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) {{Experimental_Inline}}
  - : Repräsentiert eine einzelne Abrufanfrage und Antwort.
- [`BackgroundFetchEvent`](/de/docs/Web/API/BackgroundFetchEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für die Ereignisse [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) und [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event).
- [`BackgroundFetchUpdateUIEvent`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent) {{Experimental_Inline}}
  - : Der Ereignistyp für die Ereignisse [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) und [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event).

### Erweiterungen zu anderen Schnittstellen

- [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das Hintergrundabrufoperationen verwaltet.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Hintergrundabruf von dem Benutzer oder der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche für eine Hintergrundabrufoperation geklickt hat.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einer Hintergrundabrufoperation fehlgeschlagen ist.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einer Hintergrundabrufoperation erfolgreich waren.

## Beispiele

Überprüfen Sie die Browser-Kompatibilität, bevor Sie Background Fetch verwenden.

```js
if (!("BackgroundFetchManager" in self)) {
  // Provide fallback downloading.
}
```

Die Verwendung von Background Fetch erfordert einen registrierten Service-Worker. Dann rufen Sie `backgroundFetch.fetch()` auf, um einen Abruf durchzuführen. Dies
gibt ein Versprechen zurück, das mit einer [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) aufgelöst wird.

Ein Hintergrundabruf kann eine Anzahl von Dateien abrufen. In unserem Beispiel fordert der Abruf eine MP3 und eine JPEG an. Dies ermöglicht das Herunterladen eines Pakets von Dateien, die der Benutzer als ein Element ansieht (zum Beispiel ein Podcast und ein Artwork).

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

Sie finden weitere Codebeispiele und eine Demo in [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
