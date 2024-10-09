---
title: "Request: mode-Eigenschaft"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`mode`** der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält den Modus der Anfrage (z.B. `cors`, `no-cors`, `same-origin`, `navigate` oder `websocket`). Dies wird verwendet, um zu bestimmen, ob Cross-Origin-Anfragen zu gültigen Antworten führen und welche Eigenschaften der Antwort lesbar sind.

## Wert

- Ein `RequestMode`-Wert.

  - : Der zugeordnete _Modus_, dessen verfügbare Werte sind:

    - `same-origin`
      - : Wenn eine Anfrage mit diesem Modus an eine andere Herkunft gestellt wird, ist das Ergebnis ein Fehler. Sie könnten dies verwenden, um sicherzustellen, dass eine Anfrage immer an Ihre Herkunft gestellt wird.
    - `no-cors`
      - : Verhindert, dass die Methode etwas anderes als `HEAD`, `GET` oder `POST` ist, und dass die Header etwas anderes als {{Glossary("CORS-safelisted_request_header", "CORS-Whitelist-Anfrage-Header")}} sind.
        Wenn irgendwelche ServiceWorker diese Anfragen abfangen, dürfen sie keine Header hinzufügen oder überschreiben, außer denen, die {{Glossary("CORS-safelisted_request_header", "CORS-Whitelist-Anfrage-Header")}} sind.
        Darüber hinaus darf JavaScript keine Eigenschaften der resultierenden [`Response`](/de/docs/Web/API/Response) zugreifen.
        Dies stellt sicher, dass ServiceWorker die Semantik des Webs nicht beeinflussen und verhindert Sicherheits- und Datenschutzprobleme, die durch das Übertragen von Daten über Domains hinweg entstehen können.
    - `cors`
      - : Ermöglicht Cross-Origin-Anfragen, zum Beispiel um auf verschiedene von Drittanbietern angebotene APIs zuzugreifen. Diese sollen dem [CORS-Protokoll](/de/docs/Web/HTTP/CORS) entsprechen. Nur ein [begrenztes Set](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) von Headern ist in der [`Response`](/de/docs/Web/API/Response) sichtbar, aber der Inhalt ist lesbar.
    - `navigate`
      - : Ein Modus zur Unterstützung der Navigation. Der `navigate`-Wert ist dafür gedacht, nur von HTML-Navigation verwendet zu werden. Eine Navigationsanfrage wird nur beim Navigieren zwischen Dokumenten erstellt.
    - `websocket`
      - : Ein spezieller Modus, der nur beim Aufbau einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet wird.

### Standardmodus

Anfragen können auf verschiedene Weise initiiert werden, und der Modus für eine Anfrage hängt von der spezifischen Methode ab, durch die sie initiiert wurde.

Zum Beispiel, wenn ein `Request`-Objekt mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors erstellt wird, wird der Wert der `mode`-Eigenschaft für diese `Request` auf `cors` gesetzt.

Für Anfragen, die anders als durch den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt werden, wird jedoch typischerweise `no-cors` als Modus verwendet; zum Beispiel für eingebettete Ressourcen, bei denen die Anfrage aus einem Markup initiiert wird, es sei denn, das Attribut [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) ist vorhanden, wird die Anfrage in den meisten Fällen im `no-cors`-Modus ausgeführt — das heißt, für die {{HTMLElement("link")}}- oder {{HTMLElement("script")}}-Elemente (außer bei Verwendung mit Modulen), oder {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} oder {{HTMLElement("iframe")}}-Elementen.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann den Anfragemodus in einer Variablen:

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
