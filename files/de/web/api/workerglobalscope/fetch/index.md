---
title: "WorkerGlobalScope: fetch() Methode"
short-title: fetch()
slug: Web/API/WorkerGlobalScope/fetch
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers("worker")}}

Die **`fetch()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces startet den Prozess des Abrufens einer Ressource aus dem Netzwerk und gibt ein Promise zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Promise wird in das [`Response`](/de/docs/Web/API/Response)-Objekt aufgelöst, das die Antwort auf Ihre Anfrage darstellt.

Ein `fetch()` Promise wird nur abgelehnt, wenn die Anfrage fehlschlägt, zum Beispiel aufgrund einer schlecht geformten Anfrage-URL oder eines Netzwerkfehlers.
Ein `fetch()` Promise wird _nicht_ abgelehnt, wenn der Server mit HTTP-Statuscodes antwortet, die auf Fehler hinweisen (`404`, `504` usw.).
Stattdessen muss ein `then()`-Handler die Eigenschaften [`Response.ok`](/de/docs/Web/API/Response/ok) und/oder [`Response.status`](/de/docs/Web/API/Response/status) überprüfen.

Die `fetch()`-Methode wird durch die `connect-src`-Direktive der [Content Security Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) gesteuert und nicht durch die Direktive der Ressourcen, die sie abruft.

> [!NOTE]
> Die Parameter der `fetch()`-Methode sind identisch mit denen des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`

  - : Definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Ein String oder ein beliebiges anderes Objekt mit einem [stringifier](/de/docs/Glossary/stringifier) — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts —, das die URL der Ressource bereitstellt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext die [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein [`Response`](/de/docs/Web/API/Response)-Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde aufgrund eines Aufrufs der [`AbortController`](/de/docs/Web/API/AbortController) [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode abgebrochen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) ausdrücklich untersagt ist und eine `fetch()`-Anfrage mit `browsingTopics: true` gestellt wurde.
- {{jsxref("TypeError")}}
  - : Ein Fehler, wenn die Fetch-Operation nicht durchgeführt werden konnte.
    Siehe die Ausnahmen bei [`Window.fetch()`](/de/docs/Web/API/Window/fetch) für eine Liste von Gründen, warum dieser Fehler auftreten kann.

## Beispiele

Siehe [`fetch()`](/de/docs/Web/API/Window/fetch) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.fetch()`](/de/docs/Web/API/Window/fetch)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
