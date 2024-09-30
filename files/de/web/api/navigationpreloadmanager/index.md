---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`NavigationPreloadManager`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet Methoden zur Verwaltung des Vorladens von Ressourcen parallel zum Start eines Service Workers.

Wenn unterstützt, wird ein Objekt dieses Typs durch [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) zurückgegeben. Das Ergebnis einer Preload-Fetch-Anfrage wird mit dem Versprechen, das von [`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse) zurückgegeben wird, abgewartet.

## Instanzmethoden

- [`NavigationPreloadManager.enable()`](/de/docs/Web/API/NavigationPreloadManager/enable)
  - : Aktiviert das Vorladen von Navigationen und gibt ein {{jsxref("Promise")}} zurück, das sich mit {{jsxref('undefined')}} erfüllt.
- [`NavigationPreloadManager.disable()`](/de/docs/Web/API/NavigationPreloadManager/disable)
  - : Deaktiviert das Vorladen von Navigationen und gibt ein {{jsxref("Promise")}} zurück, das sich mit {{jsxref('undefined')}} erfüllt.
- [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue)
  - : Legt den Wert des {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Headers fest, der in Preload-Anfragen gesendet wird, und gibt ein leeres {{jsxref("Promise")}} zurück.
- [`NavigationPreloadManager.getState()`](/de/docs/Web/API/NavigationPreloadManager/getState)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, dessen Eigenschaften angeben, ob das Vorladen aktiviert ist und welcher Wert im {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header in Preload-Anfragen gesendet wird.

## Beschreibung

Service Worker behandeln [`fetch()`](/de/docs/Web/API/Window/fetch)-Ereignisse im Namen einer Website für Seiten innerhalb eines bestimmten Bereichs. Wenn ein Benutzer zu einer Seite navigiert, die einen Service Worker verwendet, startet der Browser den Worker (falls er nicht bereits läuft) und sendet ihm ein Fetch-Ereignis, auf dessen Ergebnis er wartet. Beim Empfang eines Ereignisses gibt der Worker die Ressource aus einem Cache zurück, falls vorhanden, oder lädt die Ressource anderweitig vom Remote-Server herunter (und speichert eine Kopie für zukünftige Anfragen).

Ein Service Worker kann Ereignisse des Browsers erst verarbeiten, nachdem er gestartet wurde. Dies ist unvermeidlich, hat aber in der Regel wenig Einfluss. Service Worker sind oft bereits gestartet (sie bleiben nach der Verarbeitung anderer Anfragen für eine Weile aktiv). Selbst wenn ein Service Worker gestartet werden muss, liefert er oft aus einem Cache, was sehr schnell ist. In Fällen, in denen ein Worker gestartet werden muss, bevor er eine Remote-Ressource abrufen kann, kann die Verzögerung jedoch erheblich sein.

Der `NavigationPreloadManager` bietet einen Mechanismus, um das Abrufen von Ressourcen parallel zum Start eines Service Workers auszuführen, damit die Ressource möglicherweise bereits vollständig oder teilweise heruntergeladen ist, wenn der Worker in der Lage ist, die Fetch-Anfrage des Browsers zu bearbeiten. Dies macht den Fall, dass der Worker gestartet werden muss, „nicht schlechter“ als wenn der Worker bereits gestartet ist, und in manchen Fällen besser.

Der Preload-Manager sendet den {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header mit Preload-Anfragen, wodurch Antworten für Preload-Anfragen anpassbar gemacht werden können. Dies kann zur Reduzierung der gesendeten Daten auf nur einen Teil der ursprünglichen Seite oder zum Anpassen der Antwort basierend auf dem Anmeldestatus des Benutzers verwendet werden.

## Beispiele

Die Beispiele hier stammen aus [Beschleunigung des Service Workers mit Navigation Preloads](https://web.dev/blog/navigation-preload) (developer.chrome.com).

### Funktionsprüfung und Aktivierung des Navigationspreloaders

Unten wird der Navigationspreloader im `activate`-Ereignishandler des Service Workers aktiviert, nachdem zunächst mit [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) überprüft wurde, ob die Funktion unterstützt wird (dies gibt entweder den `NavigationPreloadManager` für den Service Worker oder `undefined` zurück, falls die Funktion nicht unterstützt wird).

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

### Verwendung einer voraufgeladenen Antwort

Der folgende Code zeigt einen Handler für Fetch-Ereignisse eines Service Workers, der eine voraufgeladene Antwort verwendet ([`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse)).

Der `fetch`-Ereignishandler ruft [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) auf, um ein Versprechen an die kontrollierte Seite zurückzugeben. Dieses Versprechen wird mit der angeforderten Ressource aufgelöst, die aus dem Cache, einer voraufgeladenen Fetch-Anfrage oder einer neuen Netzwerkanfrage stammen kann.

Wenn eine passende URL-Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt vorhanden ist, gibt der Code ein aufgelöstes Versprechen für das Abrufen der Antwort aus dem Cache zurück. Wenn im Cache kein Treffer gefunden wird, gibt der Code die aufgelöste voraufgeladene Antwort zurück ([`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse)). Wenn weder ein passender Cacheeintrag noch eine voraufgeladene Antwort vorhanden sind, startet der Code eine neue Abrufoperation aus dem Netzwerk und gibt das (nicht aufgelöste) Versprechen für diese Abrufoperation zurück.

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

### Benutzerdefinierte Antworten

Der Browser sendet den HTTP-Header {{HTTPHeader("Service-Worker-Navigation-Preload")}} mit Preload-Anfragen mit einem Standardrichtwert von `true`. Dies ermöglicht es Servern, zwischen normalen und Preload-Fetch-Anfragen zu unterscheiden und bei Bedarf unterschiedliche Antworten in jedem Fall zu senden.

> [!NOTE]
> Wenn die Antwort auf Preload- und normale Fetch-Operationen unterschiedlich sein kann, muss der Server `Vary: Service-Worker-Navigation-Preload` setzen, um sicherzustellen, dass die verschiedenen Antworten zwischengespeichert werden.

Der Header-Wert kann mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) auf einen beliebigen anderen String-Wert geändert werden, um zusätzlichen Kontext für die Preload-Operation bereitzustellen. Beispielsweise könnte man den Wert auf die ID der zuletzt zwischengespeicherten Ressource setzen, sodass der Server keine Ressourcen zurückgibt, es sei denn, sie werden tatsächlich benötigt. Ebenso könnte man die zurückgegebenen Informationen basierend auf dem Authentifizierungsstatus anstelle der Verwendung von Cookies konfigurieren.

Der untenstehende Code zeigt, wie der Wert der Header-Anweisung auf eine Variable `newValue` gesetzt wird.

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => {
    console.log("Done!");
  });
```

[Beschleunigung des Service Workers mit Navigation Preloads > Benutzerdefinierte Antworten für Preloads](https://web.dev/blog/navigation-preload) bietet ein vollständigeres Beispiel für eine Website, bei der die Antwort für eine Artikelwebseite aus einem zwischengespeicherten Header und Footer aufgebaut wird, sodass nur der Artikelinhalt für ein Preload zurückgegeben wird.

### Abfrage des Status

Sie können [`NavigationPreloadManager.getState()`](/de/docs/Web/API/NavigationPreloadManager/getState) verwenden, um zu prüfen, ob das Vorladen von Navigationen aktiviert ist und um zu bestimmen, welcher Richtwert mit dem {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header für Preload-Anfragen gesendet wird.

Der untenstehende Code zeigt, wie man das Versprechen erhält, das sich zu einem `state`-Objekt auflöst, und das Ergebnis protokolliert.

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

- [Beschleunigung des Service Workers mit Navigation Preloads](https://web.dev/blog/navigation-preload) (developer.chrome.com)
