---
title: Caching
slug: Web/Progressive_web_apps/Guides/Caching
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{PWASidebar}}

Wenn ein Benutzer eine Website öffnet und mit ihr interagiert, werden alle Ressourcen, die die Website benötigt, einschließlich HTML, JavaScript, CSS, Bilder, Schriftarten sowie alle Daten, die explizit von der App angefordert werden, durch HTTP(S)-Anfragen abgerufen. Eine der grundlegendsten Funktionen einer PWA ist die Fähigkeit, einige Ressourcen der App explizit auf dem Gerät zu cachen, sodass sie abgerufen werden können, ohne eine Anfrage an das Netzwerk zu senden.

Es gibt zwei Hauptvorteile, Ressourcen lokal zu cachen: **Offline-Betrieb** und **Reaktionsfähigkeit**.

- **Offline-Betrieb**: Caching ermöglicht es einer PWA, in gewissem Maße zu funktionieren, während das Gerät keine Netzwerkverbindung hat.
- **Reaktionsfähigkeit**: Selbst wenn das Gerät online ist, wird eine PWA in der Regel viel reaktionsschneller sein, wenn ihre Benutzeroberfläche aus dem Cache abgerufen wird, anstatt aus dem Netzwerk.

Der Hauptnachteil ist natürlich die **Aktualität**: Das Caching ist weniger geeignet für Ressourcen, die aktuell sein müssen. Für einige Arten von Anfragen, wie z.B. [POST](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfragen, ist das Caching niemals geeignet.

Das bedeutet, dass die Frage, ob und wann Sie eine Ressource cachen sollten, stark von der jeweiligen Ressource abhängt, und eine PWA wird typischerweise unterschiedliche Strategien für unterschiedliche Ressourcen anwenden. In diesem Leitfaden betrachten wir einige gängige Caching-Strategien für PWAs und sehen, welche Strategien für welche Ressourcen sinnvoll sind.

## Überblick über Caching-Technologien

Die Haupttechnologien, auf denen eine PWA eine Caching-Strategie aufbauen kann, sind die [Fetch API](/de/docs/Web/API/Fetch_API), die [Service Worker API](/de/docs/Web/API/Service_Worker_API) und die [Cache API](/de/docs/Web/API/Cache).

### Fetch API

Die Fetch API definiert eine globale Funktion [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) zum Abrufen einer Netzwerkressource sowie die [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Schnittstellen, die Netzwerk-Anfragen und -Antworten darstellen. Die `fetch()`-Funktion nimmt eine `Request` oder eine URL als Argument und gibt ein {{jsxref("Promise")}} zurück, das zu einer `Response` aufgelöst wird.

Die `fetch()`-Funktion steht sowohl Service Workern als auch dem Haupt-App-Thread zur Verfügung.

### Service Worker API

Ein Service Worker ist ein Teil einer PWA: Es handelt sich um ein separates Skript, das in seinem eigenen Thread läuft, getrennt vom Haupt-Thread der App.

Sobald der Service Worker aktiv ist, löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Bereich des Service Workers aus, wann immer die App eine vom Service Worker kontrollierte Netzwerkressource anfordert. Dieses Ereignis wird nicht nur für explizite `fetch()`-Aufrufe vom Haupt-Thread ausgelöst, sondern auch für implizite Netzwerkabrufe zum Laden von Seiten und Sub-Ressourcen (wie JavaScript, CSS und Bilder), die vom Browser nach einer Seitennavigation durchgeführt werden.

Indem der Service Worker auf das `fetch`-Ereignis hört, kann er die Anfrage abfangen und eine angepasste `Response` zurückgeben. Insbesondere kann er eine lokal gecachte Antwort zurückgeben, anstatt immer auf das Netzwerk zuzugreifen, oder eine lokal gecachte Antwort zurückgeben, wenn das Gerät offline ist.

### Cache API

Die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle bietet persistenten Speicher für `Request`/`Response`-Paare. Sie bietet Methoden, um `Request`/`Response`-Paare hinzuzufügen und zu löschen sowie eine gecachte `Response` abzurufen, die mit einer bestimmten `Request` übereinstimmt. Der Cache ist sowohl im Haupt-App-Thread als auch im Service Worker verfügbar: Es ist also möglich, dass ein Thread dort eine Antwort hinzufügt und der andere sie abruft.

Am häufigsten fügt der Service Worker in seinen `install`- oder `fetch`-Ereignishandlern Ressourcen zum Cache hinzu.

## Wann Ressourcen cachen

Eine PWA kann Ressourcen jederzeit cachen, aber in der Praxis gibt es einige Gelegenheiten, bei denen die meisten PWAs sie cachen werden:

- **Im `install`-Ereignishandler des Service Workers (Precaching)**: Wenn ein Service Worker installiert wird, löst der Browser ein Ereignis namens [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) im globalen Bereich des Service Workers aus. Zu diesem Zeitpunkt kann der Service Worker Ressourcen _vorcachen_, sie also aus dem Netzwerk abrufen und im Cache speichern.

  > [!NOTE]
  > Die Installationszeit des Service Workers ist nicht dieselbe wie die Installationszeit der PWA. Das `install`-Ereignis eines Service Workers löst aus, sobald der Service Worker heruntergeladen und ausgeführt wird, was in der Regel passiert, sobald der Benutzer Ihre Website besucht.
  >
  > Selbst wenn der Benutzer Ihre Website nie als PWA installiert, wird deren Service Worker installiert und aktiviert.

- **Im `fetch`-Ereignishandler des Service Workers**: Wenn das `fetch`-Ereignis eines Service Workers ausgelöst wird, kann der Service Worker die Anfrage an das Netzwerk weiterleiten und die resultierende Antwort cachen, entweder wenn der Cache schon keine Antwort enthalten hat oder um die gecachte Antwort mit einer aktuelleren zu aktualisieren.

- **Als Reaktion auf eine Benutzeranforderung**: Eine PWA könnte den Benutzer explizit einladen, eine Ressource herunterzuladen, um sie später zu verwenden, wenn das Gerät offline sein könnte. Zum Beispiel könnte ein Musik-Player den Benutzer einladen, Tracks herunterzuladen, um sie später abzuspielen. In diesem Fall könnte der Haupt-App-Thread die Ressource abrufen und die Antwort zum Cache hinzufügen. Besonders wenn die angeforderte Ressource groß ist, könnte die PWA die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) verwenden, und in diesem Fall wird die Antwort vom Service Worker behandelt, der sie zum Cache hinzufügen wird.

- **Periodisch**: Mit der [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) könnte ein Service Worker regelmäßig Ressourcen abrufen und die Antworten cachen, um sicherzustellen, dass die PWA auch bei Offline-Betrieb relativ aktuelle Antworten bereitstellen kann.

## Caching-Strategien

Eine Caching-Strategie ist ein Algorithmus dafür, wann eine Ressource gecacht werden soll, wann eine gecachte Ressource bereitgestellt werden soll und wann die Ressource aus dem Netzwerk abgerufen werden soll. In diesem Abschnitt fassen wir einige gängige Strategien zusammen.

Dies ist keine vollständige Liste: Sie soll nur die Art der Ansätze illustrieren, die eine PWA verfolgen kann.

Eine Caching-Strategie balanciert Offline-Betrieb, Reaktionsfähigkeit und Aktualität aus. Unterschiedliche Ressourcen haben hier unterschiedliche Anforderungen: Beispielsweise ist die Grund-UI der App wahrscheinlich relativ statisch, während es beim Anzeigen einer Produktliste entscheidend sein kann, über aktuelle Daten zu verfügen. Das bedeutet, dass eine PWA in der Regel unterschiedliche Strategien für unterschiedliche Ressourcen anwendet und eine einzelne PWA alle hier beschriebenen Strategien nutzen könnte.

### Cache zuerst

Bei dieser Strategie werden wir einige Ressourcen vorcachen und dann eine "Cache zuerst"-Strategie nur für diese Ressourcen implementieren. Das heißt:

- Für die vorgecachten Ressourcen werden wir:
  - Im Cache nach der Ressource suchen und die Ressource zurückgeben, wenn sie gefunden wird.
  - Andernfalls ins Netzwerk gehen. Wenn die Netzwerk-Anfrage erfolgreich ist, die Ressource für das nächste Mal cachen.
- Für alle anderen Ressourcen werden wir immer zum Netzwerk gehen.

Precaching ist eine geeignete Strategie für Ressourcen, die die PWA sicher benötigt, die sich in dieser Version der App nicht ändern werden und die so schnell wie möglich abgerufen werden müssen. Dazu gehört beispielsweise die grundlegende Benutzeroberfläche der App. Wenn diese vorgecacht ist, kann die UI der App beim Start gerendert werden, ohne dass Netzwerk-Anfragen erforderlich sind.

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

Im `install`-Ereignishandler übergeben wir das Ergebnis des Cachings in die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses. Das bedeutet, dass, wenn das Caching aus irgendeinem Grund fehlschlägt, die Installation des Service Workers fehlschlägt: Umgekehrt, wenn die Installation erfolgreich war, kann der Service Worker sicher sein, dass die Ressource dem Cache hinzugefügt wurde.

Der `fetch`-Ereignishandler sieht folgendermaßen aus:

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

Wir geben die Ressource zurück, indem wir die Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) des Ereignisses aufrufen. Wenn wir `respondWith()` für eine gegebene Anfrage nicht aufrufen, wird die Anfrage so an das Netzwerk gesendet, als ob der Service Worker sie nicht abgefangen hätte. Wenn eine Anfrage also nicht vorgecacht ist, geht sie einfach ins Netzwerk.

Wenn wir `networkResponse` zum Cache hinzufügen, müssen wir die Antwort klonen und die Kopie zum Cache hinzufügen, während wir das Original zurückgeben. Dies liegt daran, dass `Response`-Objekte streambar sind und daher möglicherweise nur einmal gelesen werden können.

Sie fragen sich vielleicht, warum wir auf das Netzwerk zurückgreifen, um vorgecachte Ressourcen zu erhalten. Wenn sie vorgecacht sind, können wir dann nicht sicher sein, dass sie im Cache sein werden? Der Grund ist, dass es möglich ist, dass der Cache entweder vom Browser oder vom Benutzer gelöscht wird. Obwohl dies unwahrscheinlich ist, wäre die PWA unbrauchbar, wenn sie nicht auf das Netzwerk zurückgreifen könnte. Siehe [Löschen gecachter Daten](#löschen_von_gecachten_daten).

### Cache zuerst mit Cache-Aktualisierung

Der Nachteil von "Cache zuerst" ist, dass eine Antwort im Cache nicht aktualisiert wird, bis eine neue Version des Service Workers installiert ist.

Die Strategie "Cache zuerst mit Cache-Aktualisierung", auch bekannt als "Stale While Revalidate", ist ähnlich wie "Cache zuerst", außer dass wir die Anfrage immer an das Netzwerk senden, selbst nach einem Cache-Treffer, und die Antwort verwenden, um den Cache zu aktualisieren. Dies bedeutet, dass wir die Reaktionsfähigkeit von "Cache zuerst" erhalten, aber eine ziemlich aktuelle Antwort bekommen (solange die Anfrage relativ oft gestellt wird).

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

Beachten Sie, dass wir den Cache asynchron aktualisieren (in einem `then()`-Handler), sodass die App nicht warten muss, bis die Netzwerk-Antwort empfangen wird, bevor sie die gecachte Antwort verwenden kann.

### Netzwerk zuerst

Die letzte Strategie, die wir betrachten, "Netzwerk zuerst", ist das Gegenteil von Cache zuerst: Wir versuchen, die Ressource aus dem Netzwerk abzurufen. Wenn die Netzwerk-Anfrage erfolgreich ist, geben wir die Antwort zurück und aktualisieren den Cache. Wenn sie fehlschlägt, versuchen wir es mit dem Cache.

Dies ist nützlich für Anfragen, bei denen es wichtig ist, die frischeste Antwort zu erhalten, aber bei denen eine gecachte Ressource besser als nichts ist. Eine Messaging-App mit einer Liste der letzten Nachrichten könnte in diese Kategorie fallen.

Im folgenden Beispiel verwenden wir "Netzwerk zuerst" für Anfragen, um alle Ressourcen unter dem "inbox"-Pfad der App abzurufen.

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

Es gibt immer noch Anfragen, bei denen keine Antwort besser ist als eine möglicherweise veraltete Antwort, und bei denen nur eine "Nur Netzwerk"-Strategie angemessen ist. Beispielsweise wird es für Benutzer frustrierend sein, wenn eine App die Liste der verfügbaren Produkte anzeigt, diese aber veraltet ist.

## Löschen von gecachten Daten

Caches haben einen begrenzten Speicherplatz, und der Browser kann die gecachten Daten einer App löschen, wenn das Limit überschritten wird. Die spezifischen Limits und das Verhalten sind browserspezifisch: Weitere Informationen finden Sie unter [Speicher-Quoten und Auslöschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria). In der Praxis ist das Löschen von gecachten Daten ein sehr seltenes Ereignis. Der Benutzer kann den Cache einer App jedoch jederzeit löschen.

Eine PWA sollte im `activate`-Ereignis des Service Workers alle alten Versionen ihres Caches bereinigen: Wenn dieses Ereignis ausgelöst wird, kann der Service Worker sicher sein, dass keine vorherigen Versionen des Service Workers laufen, sodass alte gecachte Daten nicht mehr benötigt werden.

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Speicher-Quoten und Auslöschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Strategien für das Caching durch Service Worker](https://developer.chrome.com/docs/workbox/caching-strategies-overview) auf developer.chrome.com (2021)
- [The Offline Cookbook](https://web.dev/articles/offline-cookbook) auf web.dev (2020)
