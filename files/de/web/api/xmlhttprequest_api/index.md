---
title: XMLHttpRequest-API
slug: Web/API/XMLHttpRequest_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **XMLHttpRequest-API** ermöglicht Webanwendungen, HTTP-Anfragen an Webserver zu richten und die Antworten programmatisch mit JavaScript zu empfangen. Auf diese Weise kann eine Webseite nur einen Teil der Seite mit Daten vom Server aktualisieren, anstatt auf eine komplett neue Seite zu navigieren. Diese Praxis wird auch manchmal als {{glossary("Ajax")}} bezeichnet.

Die [Fetch-API](/de/docs/Web/API/Fetch_API) ist der flexibelere und leistungsfähigere Ersatz für die XMLHttpRequest-API. Die Fetch-API verwendet {{jsxref("Promise", "Promises", "", 1)}} anstelle von Ereignissen zur Behandlung asynchroner Antworten, integriert sich gut mit [Service Workern](/de/docs/Web/API/Service_Worker_API) und unterstützt fortgeschrittene Aspekte von HTTP wie [CORS](/de/docs/Web/HTTP/CORS). Aus diesen Gründen wird die Fetch-API normalerweise in modernen Webanwendungen anstelle von {{domxref("XMLHttpRequest")}} verwendet.

## Konzepte und Verwendung

Die zentrale Schnittstelle in der XMLHttpRequest-API ist {{domxref("XMLHttpRequest")}}. Um eine HTTP-Anfrage zu stellen:

1. Erstellen Sie eine neue `XMLHttpRequest`-Instanz, indem Sie deren {{domxref("XMLHttpRequest.XMLHttpRequest", "Konstruktor", "", "nocode")}} aufrufen.
2. Initialisieren Sie sie, indem Sie {{domxref("XMLHttpRequest.open()")}} aufrufen. Hierbei geben Sie die URL für die Anfrage, die zu verwendende [HTTP-Methode](/de/docs/Web/HTTP/Methods) und optional einen Benutzernamen und ein Passwort an.
3. Hängen Sie Ereignishandler an, um das Ergebnis der Anfrage zu erhalten. Zum Beispiel wird das {{domxref("XMLHttpRequest.load_event", "load")}}-Ereignis ausgelöst, wenn die Anfrage erfolgreich abgeschlossen wurde, und das {{domxref("XMLHttpRequest.error_event", "error")}}-Ereignis wird unter verschiedenen Fehlerbedingungen ausgelöst.
4. Senden Sie die Anfrage, indem Sie {{domxref("XMLHttpRequest.send()")}} aufrufen.

Für eine ausführliche Anleitung zur XMLHttpRequest-API siehe [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Schnittstellen

- {{domxref("FormData")}}
  - : Ein Objekt, das {{htmlelement("form")}}-Felder und deren Werte repräsentiert, die an einen Server mittels {{domxref("XMLHttpRequest")}} oder {{domxref("Window/fetch", "fetch()")}} gesendet werden können.
- {{domxref("ProgressEvent")}}
  - : Eine Unterklasse von {{domxref("Event")}}, die in das {{domxref("XMLHttpRequest.progress_event", "progress")}} übergeben wird und Informationen darüber enthält, wie viel von der Anfrage abgeschlossen wurde.
- {{domxref("XMLHttpRequest")}}
  - : Stellt eine einzelne HTTP-Anfrage dar.
- {{domxref("XMLHttpRequestEventTarget")}}
  - : Eine Superklasse sowohl von {{domxref("XMLHttpRequest")}} als auch von {{domxref("XMLHttpRequestUpload")}}, die die Ereignisse definiert, die in beiden dieser Schnittstellen verfügbar sind.
- {{domxref("XMLHttpRequestUpload")}}
  - : Repräsentiert den Upload-Prozess für einen HTTP-Upload. Bietet Ereignisse, die es ermöglichen, den Fortschritt eines Uploads zu verfolgen.

## Beispiele

### Abrufen von JSON-Daten vom Server

In diesem Beispiel rufen wir eine JSON-Datei von `https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json` ab und fügen Ereignis-Listener hinzu, um den Fortschritt des Ereignisses anzuzeigen.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Fetch-API](/de/docs/Web/API/Fetch_API)
