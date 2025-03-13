---
title: XMLHttpRequest API
slug: Web/API/XMLHttpRequest_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **XMLHttpRequest-API** ermöglicht es Web-Apps, HTTP-Anfragen an Webserver zu senden und die Antworten programmatisch mit JavaScript zu empfangen. Dies ermöglicht es einer Website, nur einen Teil einer Seite mit Daten vom Server zu aktualisieren, anstatt zu einer ganz neuen Seite zu navigieren. Diese Praxis wird manchmal auch als {{Glossary("AJAX", "AJAX")}} bezeichnet.

Die [Fetch-API](/de/docs/Web/API/Fetch_API) ist der flexiblere und leistungsfähigere Ersatz für die XMLHttpRequest-API. Die Fetch-API verwendet {{jsxref("Promise", "Promises", "", 1)}} anstelle von Ereignissen zur Behandlung von asynchronen Antworten, integriert sich gut mit [Service-Workers](/de/docs/Web/API/Service_Worker_API) und unterstützt fortgeschrittene Aspekte von HTTP wie [CORS](/de/docs/Web/HTTP/Guides/CORS). Aus diesen Gründen wird die Fetch-API in modernen Web-Apps üblicherweise anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet.

## Konzepte und Verwendung

Die zentrale Schnittstelle in der XMLHttpRequest-API ist [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Um eine HTTP-Anfrage zu senden:

1. Erstellen Sie eine neue `XMLHttpRequest`-Instanz, indem Sie deren [Konstruktor](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest) aufrufen.
2. Initialisieren Sie sie, indem Sie [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) aufrufen. Sie geben dabei die URL für die Anfrage an, die zu verwendende [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) und optional einen Benutzernamen und ein Passwort.
3. Fügen Sie Ereignis-Handler hinzu, um das Ergebnis der Anfrage zu erhalten. Zum Beispiel wird das [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis ausgelöst, wenn die Anfrage erfolgreich abgeschlossen wurde, und das [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis wird in verschiedenen Fehlerfällen ausgelöst.
4. Senden Sie die Anfrage, indem Sie [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

Für einen ausführlichen Leitfaden zur XMLHttpRequest API, siehe [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Schnittstellen

- [`FormData`](/de/docs/Web/API/FormData)
  - : Ein Objekt, das {{htmlelement("form")}}-Felder und ihre Werte darstellt, die an einen Server gesendet werden können, indem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch) verwendet wird.
- [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)
  - : Eine Unterklasse von [`Event`](/de/docs/Web/API/Event), die in das [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)-Ereignis übergeben wird und Informationen darüber enthält, wie viel von der Anfrage abgeschlossen wurde.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Stellt eine einzelne HTTP-Anfrage dar.
- [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)
  - : Eine Superklasse von sowohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) als auch [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), die die in beiden dieser Schnittstellen verfügbaren Ereignisse definiert.
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
  - : Stellt den Hochladevorgang für einen HTTP-Upload dar. Bietet Ereignisse, die es dem Code ermöglichen, den Fortschritt eines Uploads zu verfolgen.

## Beispiele

### Abrufen von JSON-Daten vom Server

In diesem Beispiel rufen wir eine JSON-Datei von `https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json` ab, indem wir Ereignis-Listener hinzufügen, um den Fortschritt des Ereignisses zu zeigen.

#### HTML

```html
<div class="controls">
  <button class="xhr" type="button">Click to start XHR</button>
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

button {
  width: 12rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const xhrButton = document.querySelector(".xhr");
const log = document.querySelector(".event-log");
const url =
  "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json";

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

xhrButton.addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  addListeners(xhr);
  xhr.send();
});
```

#### Ergebnis

{{EmbedLiveSample("Fetching JSON data from the server")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch-API](/de/docs/Web/API/Fetch_API)
