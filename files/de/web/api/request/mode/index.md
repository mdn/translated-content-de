---
title: "Request: mode Eigenschaft"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 9581bc97e33aa44a2dca67178d86ac4e81cc7c75
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`mode`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält den Modus der Anfrage (z.B. `cors`, `no-cors`, `same-origin`, `navigate` oder `websocket`.) Dieser wird verwendet, um zu bestimmen, ob Anfragen über verschiedene Ursprünge zu gültigen Antworten führen und welche Eigenschaften der Antwort lesbar sind.

## Wert

- Ein `RequestMode`-Wert.

  - : Der zugehörige _Modus_, dessen verfügbare Werte sind:

    - `same-origin`
      - : Wenn eine Anfrage mit diesem Modus an einen anderen Ursprung gestellt wird, resultiert dies in einem Fehler. Sie könnten dies verwenden, um sicherzustellen, dass eine Anfrage immer an Ihren Ursprung gestellt wird.
    - `no-cors`
      - : Verhindert, dass die Methode etwas anderes als `HEAD`, `GET` oder `POST` ist und die Header etwas anderes als die [CORS-aufgeführt Anfrage-Header](/de/docs/Glossary/CORS-safelisted_request_header) sind. Wenn ServiceWorker diese Anfragen abfangen, dürfen sie keine Header hinzufügen oder überschreiben, außer den [CORS-aufgeführt Anfrage-Header](/de/docs/Glossary/CORS-safelisted_request_header). Darüber hinaus darf JavaScript auf keine Eigenschaften der resultierenden [`Response`](/de/docs/Web/API/Response) zugreifen. Dies stellt sicher, dass ServiceWorker die Semantik des Webs nicht beeinflussen und verhindert Sicherheits- und Datenschutzprobleme, die durch das Leaken von Daten über Domains hinweg entstehen.
    - `cors`
      - : Erlaubt Cross-Origin-Anfragen, beispielsweise um auf verschiedene von Drittanbietern angebotene APIs zuzugreifen. Diese sollen dem [CORS-Protokoll](/de/docs/Web/HTTP/CORS) entsprechen. Nur ein [begrenzter Satz](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) von Headern ist in der [`Response`](/de/docs/Web/API/Response) sichtbar, aber der Body ist lesbar.
    - `navigate`
      - : Ein Modus zur Unterstützung der Navigation. Der `navigate`-Wert ist nur für die HTML-Navigation vorgesehen. Eine Navigate-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.
    - `websocket`
      - : Ein spezieller Modus, der nur beim Aufbau einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet wird.

### Standardmodus

Anfragen können auf verschiedene Weise initiiert werden, und der Modus für eine Anfrage hängt von der spezifischen Art und Weise ab, wie sie initiiert wurde.

Zum Beispiel, wenn ein `Request`-Objekt mittels des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors erstellt wird, ist der Wert der `mode`-Eigenschaft für diesen `Request` auf `cors` gesetzt.

Jedoch, für Anfragen, die anders als durch den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt werden, wird typischerweise `no-cors` als Modus verwendet; zum Beispiel für eingebettete Ressourcen, bei denen die Anfrage aus dem Markup heraus initiiert wird, es sei denn, das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut ist vorhanden, wird die Anfrage in den meisten Fällen im `no-cors`-Modus durchgeführt — das heißt, für die {{HTMLElement("link")}}- oder {{HTMLElement("script")}}-Elemente (außer bei Verwendung mit Modulen) oder {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} oder {{HTMLElement("iframe")}}-Elemente.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann den Anfragemodus in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myMode = myRequest.mode; // returns "cors" by default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
