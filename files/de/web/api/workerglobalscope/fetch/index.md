---
title: "WorkerGlobalScope: fetch() Methode"
short-title: fetch()
slug: Web/API/WorkerGlobalScope/fetch
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers("worker")}}

Die **`fetch()`** Methode der {{domxref("WorkerGlobalScope")}} Schnittstelle startet den Prozess des Abrufens einer Ressource aus dem Netzwerk und gibt ein Promise zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Promise wird zu dem {{domxref("Response")}}-Objekt aufgelöst, das die Antwort auf Ihre Anfrage darstellt.

Ein `fetch()`-Promise schlägt nur fehl, wenn die Anfrage fehlschlägt, zum Beispiel aufgrund einer schlecht geformten Anfrage-URL oder eines Netzwerkfehlers.
Ein `fetch()`-Promise _schlägt nicht_ fehl, wenn der Server mit HTTP-Statuscodes antwortet, die auf Fehler hinweisen (`404`, `504`, etc.).
Stattdessen muss ein `then()`-Handler die {{domxref("Response.ok")}} und/oder {{domxref("Response.status")}} Eigenschaften prüfen.

Die `fetch()` Methode wird durch die `connect-src` Direktive der [Content Security Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) gesteuert und nicht durch die Direktive der Ressourcen, die sie abruft.

> [!NOTE]
> Die Parameter der `fetch()` Methode sind identisch mit denen des {{domxref("Request.Request","Request()")}} Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`

  - : Dies definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier")}} — einschließlich eines {{domxref("URL")}}-Objekts — das die URL der Ressource angibt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Fensterkontext die {{domxref("Node.baseURI", "baseURI")}} des Dokuments oder im Worker-Kontext {{domxref("WorkerGlobalScope.location")}} ist.
    - Ein {{domxref("Request")}}-Objekt.

- `options` {{optional_inline}}

  - : Ein {{domxref("RequestInit")}}-Objekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem {{domxref("Response")}} Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Die Anfrage wurde aufgrund eines Aufrufs der {{domxref("AbortController")}} {{domxref("AbortController.abort", "abort()")}} Methode abgebrochen.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Verwendung der [Topics API](/de/docs/Web/API/Topics_API) speziell durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) untersagt ist und eine `fetch()`-Anfrage mit `browsingTopics: true` gemacht wurde.
- {{jsxref("TypeError")}}
  - : Ein Fehler, wenn die Fetch-Operation nicht durchgeführt werden konnte.
    Siehe {{domxref("Window.fetch()")}} Ausnahmen für eine Liste von Gründen, warum dieser Fehler auftreten kann.

## Beispiele

Siehe {{domxref("Window.fetch", "fetch()")}} für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.fetch()")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
