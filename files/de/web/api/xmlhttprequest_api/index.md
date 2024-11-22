---
title: XMLHttpRequest API
slug: Web/API/XMLHttpRequest_API
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **XMLHttpRequest API** ermöglicht es Webanwendungen, HTTP-Anfragen an Webserver zu stellen und die Antworten programmatisch mit JavaScript zu verarbeiten. Dies erlaubt einer Website, nur einen Teil einer Seite mit Daten vom Server zu aktualisieren, anstatt eine komplett neue Seite aufzurufen. Diese Praxis ist auch manchmal als {{Glossary("AJAX", "AJAX")}} bekannt.

Die [Fetch API](/de/docs/Web/API/Fetch_API) ist die flexiblere und leistungsfähigere Ablösung für die XMLHttpRequest API. Die Fetch API verwendet {{jsxref("Promise", "Promises", "", 1)}} anstelle von Ereignissen, um asynchrone Antworten zu verarbeiten, integriert sich gut mit [Service Workern](/de/docs/Web/API/Service_Worker_API) und unterstützt fortgeschrittene Aspekte von HTTP wie [CORS](/de/docs/Web/HTTP/CORS). Aus diesen Gründen wird die Fetch API in modernen Webanwendungen üblicherweise anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet.

## Konzepte und Anwendung

Die zentrale Schnittstelle in der XMLHttpRequest API ist [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Um eine HTTP-Anfrage zu stellen:

1. Erstellen Sie eine neue `XMLHttpRequest`-Instanz, indem Sie dessen [Konstruktor](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest) aufrufen.
2. Initialisieren Sie diese, indem Sie [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) aufrufen. An diesem Punkt geben Sie die URL für die Anfrage, die zu verwendende [HTTP-Methode](/de/docs/Web/HTTP/Methods) und optional einen Benutzernamen und ein Passwort an.
3. Hängen Sie Ereignishandler an, um das Ergebnis der Anfrage zu erhalten. Das [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis wird beispielsweise ausgelöst, wenn die Anfrage erfolgreich abgeschlossen wurde, und das [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis wird in verschiedenen Fehlerbedingungen ausgelöst.
4. Senden Sie die Anfrage, indem Sie [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

Für einen ausführlichen Leitfaden zur XMLHttpRequest API, siehe [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Schnittstellen

- [`FormData`](/de/docs/Web/API/FormData)
  - : Ein Objekt, das die Felder und Werte eines {{htmlelement("form")}} darstellt und die an einen Server mittels [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch) gesendet werden können.
- [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)
  - : Eine Unterklasse von [`Event`](/de/docs/Web/API/Event), die an das [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)-Ereignis übergeben wird und Informationen darüber enthält, wie viel von der Anfrage abgeschlossen wurde.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Repräsentiert eine einzelne HTTP-Anfrage.
- [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)
  - : Eine Oberklasse sowohl von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) als auch von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), die die in diesen Schnittstellen verfügbaren Ereignisse definiert.
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
  - : Repräsentiert den Upload-Prozess für einen HTTP-Upload. Bietet Ereignisse, die es ermöglichen, den Fortschritt eines Uploads zu verfolgen.

## Beispiele

### Abrufen von JSON-Daten vom Server

In diesem Beispiel rufen wir eine JSON-Datei von `https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json` ab und fügen Ereignislistener hinzu, um den Fortschritt des Ereignisses anzuzeigen.

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

- [Fetch API](/de/docs/Web/API/Fetch_API)
