---
title: XMLHttpRequest API
slug: Web/API/XMLHttpRequest_API
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{DefaultAPISidebar("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **XMLHttpRequest API** ermöglicht es Webanwendungen, HTTP-Anfragen an Webserver zu senden und die Antworten programmatisch mit JavaScript zu empfangen. Dadurch kann eine Website nur einen Teil einer Seite mit Daten vom Server aktualisieren, anstatt auf eine komplett neue Seite navigieren zu müssen. Diese Praxis wird manchmal auch als {{Glossary("AJAX", "AJAX")}} bezeichnet.

Die [Fetch API](/de/docs/Web/API/Fetch_API) ist der flexiblere und leistungsstärkere Ersatz für die XMLHttpRequest API. Die Fetch API verwendet {{jsxref("Promise", "Promises", "", 1)}} anstelle von Ereignissen, um asynchrone Antworten zu verarbeiten, integriert sich gut mit [Service Workern](/de/docs/Web/API/Service_Worker_API) und unterstützt fortgeschrittene Aspekte von HTTP wie [CORS](/de/docs/Web/HTTP/Guides/CORS). Aus diesen Gründen wird die Fetch API normalerweise anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) in modernen Webanwendungen verwendet.

## Konzepte und Verwendung

Das zentrale Interface in der XMLHttpRequest API ist [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Um eine HTTP-Anfrage zu stellen:

1. Erstellen Sie eine neue Instanz von `XMLHttpRequest`, indem Sie deren [Konstruktor](/de/docs/Web/API/XMLHttpRequest/XMLHttpRequest) aufrufen.
2. Initialisieren Sie es, indem Sie [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) aufrufen. An diesem Punkt geben Sie die URL für die Anfrage, die zu verwendende [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) und optional einen Benutzernamen und ein Passwort an.
3. Fügen Sie Ereignis-Handler hinzu, um das Ergebnis der Anfrage zu erhalten. Zum Beispiel wird das [`load`](/de/docs/Web/API/XMLHttpRequestEventTarget/load_event) Ereignis ausgelöst, wenn die Anfrage erfolgreich abgeschlossen wurde, und das [`error`](/de/docs/Web/API/XMLHttpRequestEventTarget/error_event) Ereignis wird in verschiedenen Fehlersituationen ausgelöst.
4. Senden Sie die Anfrage, indem Sie [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.

Für einen detaillierten Leitfaden zur XMLHttpRequest API, siehe [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Schnittstellen

- [`FormData`](/de/docs/Web/API/FormData)
  - : Ein Objekt, das {{htmlelement("form")}}-Felder und deren Werte repräsentiert, das an einen Server gesendet werden kann, indem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch) verwendet wird.
- [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)
  - : Eine Unterklasse von [`Event`](/de/docs/Web/API/Event), die in das [`progress`](/de/docs/Web/API/XMLHttpRequestEventTarget/progress_event) übergeben wird und Informationen darüber enthält, wie viel von der Anfrage abgeschlossen ist.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
  - : Repräsentiert eine einzelne HTTP-Anfrage.
- [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)
  - : Eine Superklasse von sowohl [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) als auch [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload), die die Ereignisse definiert, die in beiden dieser Schnittstellen verfügbar sind.
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
  - : Repräsentiert den Upload-Prozess eines HTTP-Uploads. Bietet Ereignisse, die es dem Code ermöglichen, den Fortschritt eines Uploads zu verfolgen.

## Beispiele

### JSON-Daten vom Server abrufen

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
