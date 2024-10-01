---
title: XMLHttpRequest API
slug: Web/API/XMLHttpRequest_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **XMLHttpRequest API** ermöglicht Webanwendungen, HTTP-Anfragen an Webserver zu senden und die Antworten programmatisch über JavaScript zu empfangen. Dadurch kann eine Webseite nur einen Teil der Seite mit Daten vom Server aktualisieren, anstatt zu einer komplett neuen Seite navigieren zu müssen. Diese Praxis wird auch manchmal als {{Glossary("Ajax", "Ajax")}} bezeichnet.

Die [Fetch API](/de/docs/Web/API/Fetch_API) ist der flexiblere und leistungsfähigere Ersatz für die XMLHttpRequest API. Die Fetch API verwendet {{jsxref("Promise", "Promises", "", 1)}} anstelle von Ereignissen zur Handhabung asynchroner Antworten, integriert sich gut mit [Service Workers](/de/docs/Web/API/Service_Worker_API) und unterstützt fortschrittliche Aspekte von HTTP wie [CORS](/de/docs/Web/HTTP/CORS). Aus diesen Gründen wird die Fetch API in modernen Web-Apps oft anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) verwendet.

## Konzepte und Verwendung

Das zentrale Interface in der XMLHttpRequest API ist [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Um eine HTTP-Anfrage zu stellen:

1. Erstellen Sie eine neue `XMLHttpRequest`-Instanz, indem Sie dessen [Konstruktor](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest) aufrufen.
2. Initialisieren Sie sie durch den Aufruf von [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open). An diesem Punkt geben Sie die URL für die Anfrage, die zu verwendende [HTTP-Methode](/de/docs/Web/HTTP/Methods) und optional einen Benutzernamen und ein Passwort an.
3. Fügen Sie Ereignishandler hinzu, um das Ergebnis der Anfrage zu erhalten. Zum Beispiel wird das [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)-Ereignis ausgelöst, wenn die Anfrage erfolgreich abgeschlossen wurde, und das [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)-Ereignis wird unter verschiedenen Fehlerbedingungen ausgelöst.
4. Senden Sie die Anfrage, indem Sie [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

Für einen ausführlichen Leitfaden zur XMLHttpRequest API siehe [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Schnittstellen

- [`FormData`](/de/docs/Web/API/FormData)
  - : Ein Objekt, das {{htmlelement("form")}}-Felder und deren Werte darstellt und das mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch) an einen Server gesendet werden kann.
- [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)
  - : Eine Subklasse von [`Event`](/de/docs/Web/API/Event), die in das [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event) übergeben wird und die Informationen darüber enthält, wie viel der Anfrage bereits abgeschlossen wurde.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Stellt eine einzelne HTTP-Anfrage dar.
- [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)
  - : Eine Oberklasse sowohl von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) als auch von [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), die die Ereignisse definiert, die in beiden Interfaces verfügbar sind.
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
  - : Repräsentiert den Upload-Prozess für einen HTTP-Upload. Bietet Ereignisse, die es ermöglichen, den Fortschritt eines Uploads zu verfolgen.

## Beispiele

### Abrufen von JSON-Daten vom Server

In diesem Beispiel wird eine JSON-Datei von `https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json` abgerufen, wobei Event-Listener hinzugefügt werden, um den Fortschritt des Events anzuzeigen.

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
