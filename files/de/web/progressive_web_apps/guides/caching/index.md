---
title: Caching
slug: Web/Progressive_web_apps/Guides/Caching
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{PWASidebar}}

Wenn ein Benutzer eine Website öffnet und mit ihr interagiert, werden alle Ressourcen, die die Website benötigt, einschließlich HTML, JavaScript, CSS, Bilder, Schriften sowie alle vom App ausdrücklich angeforderten Daten, durch HTTP(S)-Anfragen abgerufen. Eine der grundlegendsten Funktionen einer PWA ist die Fähigkeit, einige der App-Ressourcen explizit auf dem Gerät zu cachen, was bedeutet, dass sie ohne eine Anfrage an das Netzwerk abgerufen werden können.

Es gibt zwei Hauptvorteile des lokalen Cachings von Ressourcen: **Offline-Betrieb** und **Reaktionsfähigkeit**.

- **Offline-Betrieb**: Caching ermöglicht es einer PWA, in größerem oder geringerem Maße zu funktionieren, während das Gerät keine Netzwerkverbindung hat.
- **Reaktionsfähigkeit**: Selbst wenn das Gerät online ist, wird eine PWA in der Regel viel reaktionsfähiger sein, wenn ihre Benutzeroberfläche aus dem Cache abgerufen wird, anstatt aus dem Netzwerk.

Der Hauptnachteil ist natürlich die **Aktualität**: Caching ist weniger geeignet für Ressourcen, die auf dem neuesten Stand sein müssen. Auch für einige Arten von Anfragen, wie [POST](/de/docs/Web/HTTP/Methods/POST)-Anfragen, ist Caching niemals geeignet.

Dies bedeutet, dass es stark von der betreffenden Ressource abhängt, ob und wann Sie sie cachen sollten. Eine PWA wird in der Regel unterschiedliche Strategien für unterschiedliche Ressourcen anwenden. In diesem Leitfaden werden wir uns einige gängige Caching-Strategien für PWAs ansehen und herausfinden, welche Strategien für welche Ressourcen sinnvoll sind.

## Überblick über die Caching-Technologie

Die Haupttechnologien, auf denen eine PWA eine Caching-Strategie aufbauen kann, sind die [Fetch API](/de/docs/Web/API/Fetch_API), die [Service Worker API](/de/docs/Web/API/Service_Worker_API) und die [Cache API](/de/docs/Web/API/Cache).

### Fetch API

Die Fetch API definiert eine globale Funktion [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) zum Abrufen einer Netzwerkressource und die Schnittstellen [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response), die Netzwerkanforderungen und -antworten darstellen. Die `fetch()`-Funktion nimmt einen `Request` oder eine URL als Argument und gibt ein {{jsxref("Promise")}} zurück, das in eine `Response` aufgelöst wird.

Die `fetch()`-Funktion ist sowohl für Service Worker als auch für den Haupt-App-Thread verfügbar.

### Service Worker API

Ein Service Worker ist ein Teil einer PWA: Er ist ein separates Skript, das in einem eigenen Thread ausgeführt wird, getrennt vom Haupt-Thread der App.

Sobald der Service Worker aktiv ist, feuert der Browser, wenn die App eine vom Service Worker gesteuerte Netzwerkressource anfordert, ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Scope des Service Workers ab. Dieses Ereignis wird nicht nur für explizite `fetch()`-Aufrufe aus dem Haupt-Thread ausgelöst, sondern auch für implizite Netzwerkanforderungen, um Seiten und Subressourcen (wie JavaScript, CSS und Bilder) zu laden, die der Browser nach der Seitennavigation macht.

Indem der Service Worker auf das `fetch`-Ereignis lauscht, kann er die Anforderung abfangen und eine angepasste `Response` zurückgeben. Insbesondere kann er eine lokal zwischengespeicherte Antwort zurückgeben, anstatt immer auf das Netzwerk zuzugreifen, oder eine lokal zwischengespeicherte Antwort zurückgeben, wenn das Gerät offline ist.

### Cache API

Die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle bietet einen persistenten Speicher für `Request`/`Response`-Paare. Sie bietet Methoden zum Hinzufügen und Löschen von `Request`/`Response`-Paaren und zum Nachschlagen einer zwischengespeicherten `Response`, die einem bestimmten `Request` entspricht. Der Cache ist sowohl im Haupt-App-Thread als auch im Service Worker verfügbar: so ist es möglich, dass ein Thread dort eine Antwort hinzufügt und der andere sie abruft.

Am häufigsten wird der Service Worker Ressourcen in seinem `install` oder `fetch`-Ereignishandler zum Cache hinzufügen.

## Wann Ressourcen gecacht werden sollten

Eine PWA kann Ressourcen jederzeit cachen, aber in der Praxis gibt es einige Zeitpunkte, zu denen die meisten PWAs sich dafür entscheiden werden, sie zu speichern:

- **Im `install`-Ereignishandler des Service Workers (Vor-Caching)**: Wenn ein Service Worker installiert wird, löst der Browser ein Ereignis namens [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) im globalen Scope des Service Workers aus. Zu diesem Zeitpunkt kann der Service Worker Ressourcen _vor-cachen_, sie aus dem Netzwerk abrufen und im Cache speichern.

  > [!NOTE]
  > Die Installationszeit des Service Workers ist nicht dasselbe wie die Installationszeit der PWA. Das `install`-Ereignis eines Service Workers wird ausgelöst, sobald der Service Worker heruntergeladen und ausgeführt wird, was typischerweise passiert, sobald der Benutzer Ihre Seite besucht.
  >
  > Selbst wenn der Benutzer Ihre Seite niemals als PWA installiert, wird dennoch der Service Worker installiert und aktiviert.

- **Im `fetch`-Ereignishandler des Service Workers**: Wenn das `fetch`-Ereignis eines Service Workers ausgelöst wird, kann der Service Worker die Anfrage an das Netzwerk weiterleiten und die resultierende Antwort cachen, entweder wenn der Cache bereits keine Antwort enthält oder um die im Cache gespeicherte Antwort mit einer aktuelleren zu aktualisieren.

- **Als Antwort auf eine Benutzeranfrage**: Eine PWA könnte den Benutzer ausdrücklich einladen, eine Ressource herunterzuladen, um sie später zu verwenden, wenn das Gerät möglicherweise offline ist. Ein Musik-Player könnte zum Beispiel den Benutzer einladen, Tracks herunterzuladen, um sie später abzuspielen. In diesem Fall könnte der Haupt-App-Thread die Ressource abrufen und die Antwort dem Cache hinzufügen. Besonders wenn die angeforderte Ressource groß ist, könnte die PWA die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) verwenden, und in diesem Fall wird die Antwort vom Service Worker behandelt, der sie dem Cache hinzufügt.

- **Periodisch**: Mithilfe der [Web Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) könnte ein Service Worker regelmäßig Ressourcen abrufen und die Antworten cachen, um sicherzustellen, dass die PWA relativ aktuelle Antworten liefern kann, selbst wenn das Gerät offline ist.

## Caching-Strategien

Eine Caching-Strategie ist ein Algorithmus dafür, wann eine Ressource gecacht werden soll, wann eine gecachte Ressource bereitgestellt werden soll und wann die Ressource aus dem Netzwerk geholt werden soll. In diesem Abschnitt werden einige gängige Strategien zusammengefasst.

Dies ist keine vollständige Liste: Sie soll lediglich die Arten von Ansätzen veranschaulichen, die eine PWA verwenden kann.

Eine Caching-Strategie bringt Offline-Betrieb, Reaktionsfähigkeit und Aktualität in Einklang. Unterschiedliche Ressourcen haben hier unterschiedliche Anforderungen: Zum Beispiel wird die grundlegende Benutzeroberfläche der App wahrscheinlich relativ statisch sein, während es möglicherweise entscheidend wichtig ist, aktuelle Daten zu haben, wenn eine Produktliste angezeigt wird. Das bedeutet, dass eine PWA in der Regel verschiedene Strategien für verschiedene Ressourcen anwendet, und eine einzige PWA könnte alle hier beschriebenen Strategien verwenden.

### Cache zuerst

In dieser Strategie werden wir einige Ressourcen vor-cachen und dann eine "Cache zuerst"-Strategie nur für diese Ressourcen umsetzen. Das heißt:

- Für die vorgecachten Ressourcen werden wir:
  - Im Cache nach der Ressource suchen und die Ressource zurückgeben, wenn sie gefunden wird.
  - Andernfalls gehen wir ins Netzwerk. Wenn die Netzwerkabfrage erfolgreich ist, speichern wir die Ressource für das nächste Mal im Cache.
- Für alle anderen Ressourcen werden wir immer ins Netzwerk gehen.

Precaching ist eine geeignete Strategie für Ressourcen, die die PWA sicher benötigt, die sich für diese Version der App nicht ändern werden und die so schnell wie möglich abgerufen werden müssen. Dazu gehört zum Beispiel die grundlegende Benutzeroberfläche der App. Wenn diese vorgecached ist, kann die Benutzeroberfläche der App beim Start gerendert werden, ohne dass Netzwerkabfragen erforderlich sind.

Zuerst precacht der Service Worker statische Ressourcen in seinem `install`-Ereignishandler:

```js
const cacheName = "MyCache_1";
const precachedResources = ["/", "/app.js", "/style.css"];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});
```

Im `install`-Ereignishandler geben wir das Ergebnis der Cache-Operation in die [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode des Ereignisses ein. Das bedeutet, dass wenn das Cachen aus irgendeinem Grund fehlschlägt, die Installation des Service Workers fehlschlägt: Im umgekehrten Fall, wenn die Installation erfolgreich war, kann der Service Worker sicher sein, dass die Ressource dem Cache hinzugefügt wurde.

Der `fetch`-Ereignishandler sieht so aus:

```js
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

Wir geben die Ressource zurück, indem wir die [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode des Ereignisses aufrufen. Wenn wir `respondWith()` für eine bestimmte Anfrage nicht aufrufen, wird die Anfrage an das Netzwerk gesendet, als hätte der Service Worker sie nicht abgefangen. Wenn eine Anfrage nicht vorgecached ist, geht sie einfach ins Netzwerk.

Wenn wir `networkResponse` zum Cache hinzufügen, müssen wir die Antwort klonen und die Kopie dem Cache hinzufügen, während wir das Original zurückgeben. Dies liegt daran, dass `Response`-Objekte streamfähig sind und daher nur einmal gelesen werden können.

Sie könnten sich fragen, warum wir auf das Netzwerk zurückgreifen, wenn Ressourcen vorgecached sind. Wenn sie vorgecached sind, können wir dann nicht sicher sein, dass sie im Cache sind? Der Grund ist, dass es möglich ist, dass der Cache entweder vom Browser oder vom Benutzer gelöscht wird. Obwohl dies unwahrscheinlich ist, würde es die PWA unbrauchbar machen, wenn sie nicht auf das Netzwerk zurückgreifen kann. Siehe [Löschen von zwischengespeicherten Daten](#löschen_von_zwischengespeicherten_daten).

### Cache zuerst mit Cache-Aktualisierung

Der Nachteil von "Cache zuerst" ist, dass eine Antwort, sobald sie im Cache ist, niemals aktualisiert wird, bis eine neue Version des Service Workers installiert wird.

Die "Cache zuerst mit Cache-Aktualisierung"-Strategie, auch bekannt als "stale while revalidate", ähnelt "Cache zuerst", mit dem Unterschied, dass wir die Anfrage immer an das Netzwerk senden, auch nach einem Cache-Treffer, und die Antwort verwenden, um den Cache zu aktualisieren. Das bedeutet, dass wir die Reaktionsfähigkeit von "Cache zuerst" erhalten, aber eine relativ aktuelle Antwort bekommen (solange die Anfrage häufig genug gemacht wird).

Dies ist eine gute Wahl, wenn Reaktionsfähigkeit wichtig ist und Aktualität einigermaßen wichtig, aber nicht entscheidend ist.

In dieser Version implementieren wir "Cache zuerst mit Cache-Aktualisierung" für alle Ressourcen außer JSON.

```js
function isCacheable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener("fetch", (event) => {
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});
```

Beachten Sie, dass wir den Cache asynchron aktualisieren (in einem `then()`-Handler), damit die App nicht auf den Empfang der Netzwerkantwort warten muss, bevor sie die zwischengespeicherte Antwort verwenden kann.

### Netzwerk zuerst

Die letzte Strategie, die wir uns ansehen werden, "Netzwerk zuerst", ist das Gegenteil von "Cache zuerst": Wir versuchen, die Ressource aus dem Netzwerk abzurufen. Wenn die Netzwerkabfrage erfolgreich ist, geben wir die Antwort zurück und aktualisieren den Cache. Wenn sie fehlschlägt, versuchen wir den Cache.

Dies ist nützlich für Anfragen, bei denen es wichtig ist, die aktuellste Antwort zu erhalten, aber bei denen eine zwischengespeicherte Ressource besser ist als nichts. Eine Messaging-App kann in diese Kategorie fallen, wenn es darum geht, die Liste der letzten Nachrichten anzuzeigen.

Im unten stehenden Beispiel verwenden wir "Netzwerk zuerst" für Anfragen, um alle Ressourcen abzurufen, die sich im "Posteingang"-Pfad der App befinden.

```js
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.match(/^\/inbox/)) {
    event.respondWith(networkFirst(event.request));
  }
});
```

Es gibt immer noch Anfragen, bei denen keine Antwort besser ist als eine möglicherweise veraltete Antwort, und bei denen nur eine "nur Netzwerk"-Strategie geeignet ist. Wenn eine App beispielsweise die Liste der verfügbaren Produkte anzeigt, wird es frustrierend für Benutzer sein, wenn die Liste nicht auf dem neuesten Stand ist.

## Löschen von zwischengespeicherten Daten

Caches haben einen begrenzten Speicherplatz, und der Browser kann die zwischengespeicherten Daten einer App löschen, wenn das Limit überschritten wird. Die spezifischen Limits und das Verhalten sind browserspezifisch: Weitere Details finden Sie unter [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria). In der Praxis ist die Löschung von zwischengespeicherten Daten ein sehr seltenes Ereignis. Der Benutzer kann auch jederzeit den Cache einer App löschen.

Eine PWA sollte alte Versionen ihres Caches im [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignis des Service Workers bereinigen: Wenn dieses Ereignis ausgelöst wird, kann der Service Worker sicher sein, dass keine vorherigen Versionen des Service Workers ausgeführt werden, sodass alte zwischengespeicherte Daten nicht mehr benötigt werden.

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Strategien für das Caching von Service Workern](https://developer.chrome.com/docs/workbox/caching-strategies-overview) auf developer.chrome.com (2021)
- [Das Offline-Kochbuch](https://web.dev/articles/offline-cookbook) auf web.dev (2020)
