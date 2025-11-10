---
title: "Window: fetch() Methode"
short-title: fetch()
slug: Web/API/Window/fetch
l10n:
  sourceCommit: f479c102bb6abd59d11c3b176e1f9a02a3cd1135
---

{{APIRef("Fetch API")}}

Die **`fetch()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle startet den Prozess des Abrufens einer Ressource aus dem Netzwerk und gibt ein Promise zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Promise löst sich in das [`Response`](/de/docs/Web/API/Response)-Objekt auf, das die Antwort auf Ihre Anfrage repräsentiert.

Ein `fetch()` Promise wird nur abgelehnt, wenn die Anfrage fehlschlägt, zum Beispiel aufgrund einer fehlerhaften Anforderungs-URL oder eines Netzwerkfehlers. Ein `fetch()` Promise wird _nicht_ abgelehnt, wenn der Server mit HTTP-Statuscodes antwortet, die Fehler anzeigen (`404`, `504` usw.). Stattdessen muss ein `then()`-Handler die Eigenschaften [`Response.ok`](/de/docs/Web/API/Response/ok) und/oder [`Response.status`](/de/docs/Web/API/Response/status) überprüfen.

Die `fetch()` Methode wird durch die `connect-src` Direktive der [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) anstelle der Direktive der abgerufenen Ressourcen gesteuert.

> [!NOTE]
> Die Parameter der `fetch()` Methode sind identisch mit denen des [`Request()`](/de/docs/Web/API/Request/Request) Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`
  - : Dies definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:
    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts — das die URL der Ressource bietet, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext die [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}
  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich in ein [`Response`](/de/docs/Web/API/Response)-Objekt auflöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde aufgrund eines Aufrufs der [`AbortController`](/de/docs/Web/API/AbortController)
    [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode abgebrochen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) ausdrücklich untersagt ist, und eine `fetch()`-Anfrage mit `browsingTopics: true` gestellt wurde.
- {{jsxref("TypeError")}}
  - : Kann aus folgenden Gründen auftreten:
    - Die angeforderte URL ist ungültig.
    - Die angeforderte URL enthält Anmeldedaten (Benutzername und Passwort).
    - Das als Wert von `options` übergebene [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt enthielt Eigenschaften mit ungültigen Werten.
    - Die Anfrage wird durch eine Berechtigungsrichtlinie blockiert.
    - Es tritt ein Netzwerkfehler auf (z. B. weil das Gerät keine Verbindung hat).

## Beispiele

In unserem [Fetch Request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mittels des entsprechenden Konstruktors und rufen es dann mit einem `fetch()`-Aufruf ab. Da wir ein Bild abrufen, führen wir [`Response.blob()`](/de/docs/Web/API/Response/blob) auf der Antwort aus, um ihr den korrekten MIME-Typ zu geben, damit sie ordnungsgemäß behandelt wird, erstellen dann eine Objekt-URL davon und zeigen sie in einem {{htmlelement("img")}}-Element an.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

window
  .fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```

In unserem [Fetch Request mit init Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) machen wir dasselbe, außer dass wir ein _options_-Objekt übergeben, wenn wir `fetch()` aufrufen. In diesem Fall können wir einen {{HTTPHeader("Cache-Control")}}-Wert festlegen, um anzugeben, welche Art von zwischengespeicherten Antworten wir akzeptieren:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// A cached response is okay unless it's more than a week old
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// Pass init as an "options" object with our headers.
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // …
});
```

Sie könnten das `init`-Objekt auch mit dem `Request`-Konstruktor übergeben, um denselben Effekt zu erzielen:

```js
const req = new Request("flowers.jpg", options);
```

Sie können auch ein Objektliteral als `headers` in `init` verwenden:

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

Der Artikel [Using fetch](/de/docs/Web/API/Fetch_API/Using_Fetch) bietet weitere Beispiele zur Verwendung von `fetch()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
