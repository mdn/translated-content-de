---
title: "WorkerGlobalScope: fetch() Methode"
short-title: fetch()
slug: Web/API/WorkerGlobalScope/fetch
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers("worker")}}

Die **`fetch()`** Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle startet den Prozess des Abrufens einer Ressource aus dem Netzwerk und gibt ein Promise zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Promise löst sich zu dem [`Response`](/de/docs/Web/API/Response)-Objekt auf, das die Antwort auf Ihre Anfrage darstellt.

Ein `fetch()`-Promise weist nur dann einen Fehler zurück, wenn die Anfrage fehlschlägt, zum Beispiel aufgrund einer schlecht formatierten Anfrage-URL oder eines Netzwerkfehlers.
Ein `fetch()`-Promise wird _nicht_ zurückgewiesen, wenn der Server mit HTTP-Statuscodes antwortet, die Fehler anzeigen (`404`, `504`, etc.).
Stattdessen muss ein `then()`-Handler die Eigenschaften [`Response.ok`](/de/docs/Web/API/Response/ok) und/oder [`Response.status`](/de/docs/Web/API/Response/status) prüfen.

Die `fetch()`-Methode wird durch die `connect-src`-Direktive der [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) kontrolliert, anstatt durch die Direktive der Ressourcen, die sie abruft.

> [!NOTE]
> Die Parameter der `fetch()`-Methode sind identisch mit denen des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`

  - : Definiert die Ressource, die Sie abrufen möchten. Diese kann entweder sein:

    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts —, das die URL der Ressource liefert, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, welche der [`baseURI`](/de/docs/Web/API/Node/baseURI) im Dokumentenkontext oder [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) im Worker-Kontext ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`Response`](/de/docs/Web/API/Response)-Objekt auflöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde aufgrund eines Aufrufs der [`AbortController`](/de/docs/Web/API/AbortController) [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode abgebrochen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) speziell untersagt ist, und eine `fetch()`-Anfrage mit `browsingTopics: true` gestellt wurde.
- {{jsxref("TypeError")}}
  - : Ein Fehler, wenn die Fetch-Operation nicht durchgeführt werden konnte.
    Siehe [`Window.fetch()`](/de/docs/Web/API/Window/fetch) Ausnahmen für eine Liste der Gründe, warum dieser Fehler auftreten kann.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
