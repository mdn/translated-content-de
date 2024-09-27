---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`NavigationPreloadManager`** Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet Methoden zum Verwalten des Vorladens von Ressourcen parallel zum Starten eines Service Workers.

Wenn unterstützt, wird ein Objekt dieses Typs durch [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) zurückgegeben. Das Ergebnis einer Vorlade-Abfrage wird durch das Promise erwartet, das von [`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse) zurückgegeben wird.

## Instanzmethoden

- [`NavigationPreloadManager.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable)
  - : Aktiviert das Vorladen von Navigationsanfragen und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.
- [`NavigationPreloadManager.disable()`](/de/docs/Web/API/NavigationPreloadManager/disable)
  - : Deaktiviert das Vorladen von Navigationsanfragen und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.
- [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue)
  - : Setzt den Wert des {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Headers, der in Vorladeanfragen gesendet wird, und gibt ein leeres {{jsxref("Promise")}} zurück.
- [`NavigationPreloadManager.getState()`](/de/docs/Web/API/NavigationPreloadManager/getState)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, dessen Eigenschaften anzeigen, ob das Vorladen aktiviert ist und welcher Wert im {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header in Vorladeanfragen gesendet wird.

## Beschreibung

Service Workers bearbeiten [`fetch()`](/de/docs/Web/API/Window/fetch) Ereignisse im Namen einer Website für Seiten innerhalb eines bestimmten Bereichs. Wenn ein Benutzer zu einer Seite navigiert, die einen Service Worker verwendet, startet der Browser den Worker (falls er nicht bereits läuft), sendet ihm dann ein Fetch-Ereignis und wartet auf das Ergebnis. Beim Empfang eines Ereignisses gibt der Worker die Ressource aus einem Cache zurück, falls sie vorhanden ist, oder holt andernfalls die Ressource vom Remote-Server und speichert eine Kopie für zukünftige Anfragen.

Ein Service Worker kann keine Ereignisse vom Browser verarbeiten, bis er gestartet ist. Das lässt sich nicht vermeiden, hat aber normalerweise nicht viel Einfluss. Service Worker werden häufig bereits gestartet (sie bleiben einige Zeit aktiv, nachdem sie andere Anfragen verarbeitet haben). Selbst wenn ein Service Worker starten muss, liefert er in vielen Fällen Werte aus einem Cache, was sehr schnell ist. In den Fällen jedoch, in denen ein Worker booten muss, bevor er eine Remote-Ressource abrufen kann, kann die Verzögerung erheblich sein.

Der `NavigationPreloadManager` bietet einen Mechanismus, um das Abrufen von Ressourcen parallel zum Start eines Service Workers laufen zu lassen, sodass die Ressource bereits vollständig oder teilweise heruntergeladen sein könnte, wenn der Worker den Fetch-Anfrage vom Browser behandeln kann. Dies macht den Fall, in dem der Worker starten muss, „nicht schlechter“ als wenn der Worker bereits gestartet ist, und in einigen Fällen sogar besser.

Der Preload-Manager sendet den {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header mit Vorladeanfragen, wodurch Antworten für Vorladeanfragen angepasst werden können. Dies könnte beispielsweise verwendet werden, um die gesendeten Daten auf einen Teil der ursprünglichen Seite zu reduzieren oder die Antwort basierend auf dem Anmeldestatus des Benutzers anzupassen.

## Beispiele

Die hier gezeigten Beispiele stammen aus [Geschwindigkeitsverbesserung des Service Workers mit Vorladeanfragen](https://web.dev/blog/navigation-preload) (developer.chrome.com).

### Funktionen erkennen und das Vorladen von Navigationsanfragen aktivieren

Unten aktivieren wir das Vorladen von Navigationsanfragen im `activate`-Ereignishandler des Service Workers, nachdem wir zunächst festgestellt haben, ob die Funktion unterstützt wird. Dies geschieht mit [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload), das entweder den `NavigationPreloadManager` für den Service Worker oder `undefined` zurückgibt, wenn die Funktion nicht unterstützt wird.

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

### Verwenden einer vorab geladenen Antwort

Der folgende Code zeigt einen Ereignishandler für die Fetch-Anfrage eines Service Workers, der eine vorab geladene Antwort verwendet ([`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse)).

Der `fetch`-Ereignishandler ruft [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) auf, um ein Promise an die kontrollierte Seite zurückzugeben. Dieses Promise wird mit der angeforderten Ressource aufgelöst, die aus dem Cache, einer vorab geladenen Fetch-Anfrage oder einer neuen Netzwerk-Anfrage stammen kann.

Wenn es im [`Cache`](/de/docs/Web/API/Cache)-Objekt eine passende URL-Anfrage gibt, gibt der Code ein aufgelöstes Promise für das Abrufen der Antwort aus dem Cache zurück. Wird im Cache keine Entsprechung gefunden, gibt der Code die aufgelöste vorab geladene Antwort zurück ([`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse)). Gibt es keinen passenden Cache-Eintrag oder vorab geladene Antwort, startet der Code eine neue Fetch-Operation aus dem Netzwerk und gibt das (nicht aufgelöste) Promise für diese Fetch-Operation zurück.

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Respond from the cache if we can
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // Else, use the preloaded response, if it's there
      const response = await event.preloadResponse;
      if (response) return response;

      // Else try the network.
      return fetch(event.request);
    })(),
  );
});
```

### Angepasste Antworten

Der Browser sendet den HTTP-Header {{HTTPHeader("Service-Worker-Navigation-Preload")}} mit Vorladeanfragen mit einem Standardrichtwert von `true`. Dies ermöglicht es Servern, zwischen normalen und Vorladeanfragen zu unterscheiden und in jedem Fall, falls erforderlich, unterschiedliche Antworten zu senden.

> [!NOTE]
> Wenn sich die Antwort von Vorlade- und normalen Abfragevorgängen unterscheiden kann, muss der Server `Vary: Service-Worker-Navigation-Preload` setzen, um sicherzustellen, dass die unterschiedlichen Antworten zwischengespeichert werden.

Der Header-Wert kann mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) in jeden anderen Zeichenfolgenwert geändert werden, um zusätzlichen Kontext für die Vorababrufoperation bereitzustellen. Zum Beispiel könnten Sie den Wert auf die ID Ihrer zuletzt zwischengespeicherten Ressource setzen, sodass der Server keine Ressourcen zurückgibt, es sei denn, sie sind tatsächlich erforderlich. Ebenso könnten Sie die zurückgegebenen Informationen basierend auf dem Authentifizierungsstatus anstelle der Verwendung von Cookies konfigurieren.

Der untenstehende Code zeigt, wie der Wert der Header-Direktive auf eine bestimmte Variable `newValue` gesetzt wird.

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => {
    console.log("Done!");
  });
```

[Geschwindigkeitsverbesserung des Service Workers mit Vorladeanfragen > Angepasste Antworten für Vorladeanfragen](https://web.dev/blog/navigation-preload) bietet ein umfassenderes Beispiel für eine Website, bei der die Antwort für eine Artikel-Webseite aus einem zwischengespeicherten Header und Footer erstellt wird, sodass nur der Artikelinhalt für einen Vorababruf zurückgegeben wird.

### Den Zustand ermitteln

Sie können [`NavigationPreloadManager.getState()`](/de/docs/Web/API/NavigationPreloadManager/getState) verwenden, um zu überprüfen, ob das Vorladen von Navigationsanfragen aktiviert ist, und zu bestimmen, welcher Richtlinienwert mit dem {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header für Vorladeanfragen gesendet wird.

Der untenstehende Code zeigt, wie das Promise, das zu einem `state`-Objekt aufgelöst wird, abgerufen und das Ergebnis protokolliert wird.

```js
navigator.serviceWorker.ready
  .then((registration) => registration.navigationPreload.getState())
  .then((state) => {
    console.log(state.enabled); // boolean
    console.log(state.headerValue); // string
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Geschwindigkeitsverbesserung des Service Workers mit Vorladeanfragen](https://web.dev/blog/navigation-preload) (developer.chrome.com)
