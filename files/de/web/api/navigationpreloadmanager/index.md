---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`NavigationPreloadManager`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet Methoden zum Verwalten des Vorladens von Ressourcen parallel zum Starten des Service Workers.

Wenn unterstützt, wird ein Objekt dieses Typs von {{domxref("ServiceWorkerRegistration.navigationPreload")}} zurückgegeben.
Das Ergebnis einer Vorlade-Anfrage wird mit dem Promise, das von {{domxref("FetchEvent.preloadResponse")}} zurückgegeben wird, ausgewertet.

## Instanzmethoden

- {{domxref("NavigationPreloadManager.enable()")}}
  - : Aktiviert das Vorausladen von Navigationen und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.
- {{domxref("NavigationPreloadManager.disable()")}}
  - : Deaktiviert das Vorausladen von Navigationen und gibt ein {{jsxref("Promise")}} zurück, das mit {{jsxref('undefined')}} aufgelöst wird.
- {{domxref("NavigationPreloadManager.setHeaderValue()")}}
  - : Legt den Wert des {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Headers fest, der in Vorladeanfragen gesendet wird, und gibt ein leeres {{jsxref("Promise")}} zurück.
- {{domxref("NavigationPreloadManager.getState()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das in ein Objekt aufgelöst wird, dessen Eigenschaften angeben, ob das Vorausladen aktiviert ist und welchen Wert der {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header in Vorladeanfragen hat.

## Beschreibung

Service Worker bearbeiten {{domxref("Window/fetch", "fetch()")}}-Ereignisse im Auftrag einer Site für Seiten innerhalb eines bestimmten Bereichs.
Wenn ein Benutzer zu einer Seite navigiert, die einen Service Worker verwendet, startet der Browser den Worker (wenn er nicht bereits läuft) und sendet ihm ein Fetch-Event und wartet auf das Ergebnis.
Beim Empfang eines Ereignisses gibt der Worker die Ressource aus einem Cache zurück, falls diese vorhanden ist, oder holt anderweitig die Ressource vom Remote-Server (wobei eine Kopie für zukünftige Anfragen gespeichert wird).

Ein Service Worker kann keine Ereignisse vom Browser verarbeiten, bis er gestartet wurde.
Dies ist unvermeidlich, hat jedoch normalerweise keinen großen Einfluss.
Service Worker sind oft bereits gestartet (sie bleiben für einige Zeit aktiv, nachdem andere Anfragen bearbeitet wurden).
Selbst wenn ein Service Worker starten muss, gibt er oft Werte aus einem Cache zurück, was sehr schnell ist.
In den Fällen, in denen ein Worker starten muss, bevor er eine entfernte Ressource anfordern kann, kann die Verzögerung jedoch erheblich sein.

Der `NavigationPreloadManager` bietet einen Mechanismus, der es ermöglicht, das Abrufen der Ressourcen parallel zum Start des Service Workers auszuführen, sodass die Ressource möglicherweise bereits vollständig oder teilweise heruntergeladen ist, wenn der Worker in der Lage ist, die Anforderung vom Browser zu verarbeiten.
Dies macht den Fall, dass der Worker gestartet werden muss, „nicht schlechter“ als wenn der Worker bereits gestartet wäre, und in einigen Fällen besser.

Der Vorauslademanager sendet den {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header mit Vorauslade-Anfragen, wodurch Antworten für Vorausladeanfragen angepasst werden können.
Dies kann beispielsweise verwendet werden, um die gesendeten Daten nur auf einen Teil der ursprünglichen Seite zu reduzieren oder die Antwort basierend auf dem Anmeldestatus des Benutzers anzupassen.

## Beispiele

Die Beispiele hier stammen von [Speed up Service Worker with Navigation Preloads](https://web.dev/blog/navigation-preload) (developer.chrome.com).

### Funktionserkennung und Aktivierung des Vorausladens von Navigationen

Im Folgenden aktivieren wir das Vorausladen von Navigationen im `activate`-Ereignishandler des Service Workers, nachdem wir zunächst mit {{domxref("ServiceWorkerRegistration.navigationPreload")}} überprüft haben, ob die Funktion unterstützt wird (dies gibt entweder den `NavigationPreloadManager` für den Service Worker oder `undefined` zurück, wenn die Funktion nicht unterstützt wird).

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Navigation Preloads aktivieren!
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

### Verwendung einer vorgeladenen Antwort

Der folgende Code zeigt einen Service Worker Fetch-Ereignishandler, der eine vorgeladene Antwort verwendet ({{domxref("FetchEvent.preloadResponse")}}).

Der `fetch`-Ereignishandler ruft {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} auf, um ein Promise an die gesteuerte Seite zurückzugeben.
Dieses Promise wird mit der angeforderten Ressource aufgelöst, die aus dem Cache, einer vorgeladenen Fetch-Anfrage oder einer neuen Netzwerk-Anfrage stammen kann.

Wenn es eine übereinstimmende URL-Anfrage im {{domxref("Cache")}}-Objekt gibt, gibt der Code ein aufgelöstes Promise für das Abrufen der Antwort aus dem Cache zurück.
Wird im Cache keine Übereinstimmung gefunden, gibt der Code die aufgeladene Antwort ({{domxref("FetchEvent.preloadResponse")}}) zurück.
Wenn weder ein übereinstimmender Cache-Eintrag noch eine vorgeladene Antwort vorhanden ist, startet der Code eine neue Fetch-Operation aus dem Netzwerk und gibt das (nicht aufgelöste) Promise für diese Fetch-Operation zurück.

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Antwort aus dem Cache, wenn möglich
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // Ansonsten die vorgeladene Antwort verwenden, falls verfügbar
      const response = await event.preloadResponse;
      if (response) return response;

      // Andernfalls das Netzwerk versuchen.
      return fetch(event.request);
    })(),
  );
});
```

### Benutzerdefinierte Antworten

Der Browser sendet den HTTP-Header {{HTTPHeader("Service-Worker-Navigation-Preload")}} mit Vorausladeanfragen, mit einem Standard-Wert von `true`.
Dies ermöglicht Servern, zwischen normalen und Vorausladeanfragen zu unterscheiden und gegebenenfalls unterschiedliche Antworten zu senden.

> [!NOTE]
> Wenn die Antwort von Vorauslade- und normalen Fetch-Operationen unterschiedlich sein kann, muss der Server `Vary: Service-Worker-Navigation-Preload` festlegen, um sicherzustellen, dass die unterschiedlichen Antworten zwischengespeichert werden.

Der Header-Wert kann in jeden anderen String-Wert geändert werden, indem {{domxref("NavigationPreloadManager.setHeaderValue()")}} verwendet wird, um zusätzlichen Kontext für die Vorlade-Operation bereitzustellen.
Beispielsweise könnten Sie den Wert auf die ID Ihrer zuletzt zwischengespeicherten Ressource setzen, damit der Server keine Ressourcen zurückgibt, es sei denn, sie werden tatsächlich benötigt.
Ebenso könnten Sie die zurückgegebenen Informationen basierend auf dem Authentifizierungsstatus konfigurieren, anstatt Cookies zu verwenden.

Der folgende Code zeigt, wie der Wert der Header-Direktive auf eine Variable `newValue` gesetzt wird.

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => {
    console.log("Fertig!");
  });
```

[Speed up Service Worker with Navigation Preloads > Custom responses for preloads](https://web.dev/blog/navigation-preload) bietet ein vollständigeres Beispiel einer Website, bei der die Antwort für eine Artikel-Webseite aus einem zwischengespeicherten Header und Footer zusammengesetzt wird, sodass nur der Artikelinhalt für ein Vorladen zurückgegeben wird.

### Den Zustand abrufen

Sie können {{domxref("NavigationPreloadManager.getState()")}} verwenden, um zu überprüfen, ob das Vorausladen von Navigationen aktiviert ist und um zu bestimmen, welcher Direktiven-Wert mit dem
{{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header für Vorausladeanfragen gesendet wird.

Der untenstehende Code zeigt, wie man das Promise erhält, das zu einem `state`-Objekt aufgelöst wird, und das Ergebnis protokolliert.

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

- [Speed up Service Worker with Navigation Preloads](https://web.dev/blog/navigation-preload) (developer.chrome.com)
