---
title: "Request: mode-Eigenschaft"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 9581bc97e33aa44a2dca67178d86ac4e81cc7c75
---

{{APIRef("Fetch API")}}

Die **`mode`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle ist schreibgeschützt und enthält den Modus der Anfrage (z.B. `cors`, `no-cors`, `same-origin`, `navigate` oder `websocket`). Diese wird verwendet, um zu bestimmen, ob Cross-Origin-Anfragen zu gültigen Antworten führen und welche Eigenschaften der Antwort lesbar sind.

## Wert

- Ein `RequestMode`-Wert.

  - : Der zugehörige _Modus_, verfügbare Werte sind:

    - `same-origin`
      - : Wenn mit diesem Modus eine Anfrage an einen anderen Ursprung gestellt wird, ist das Ergebnis ein Fehler. Dies könnte verwendet werden, um sicherzustellen, dass eine Anfrage immer an Ihren Ursprung gerichtet ist.
    - `no-cors`
      - : Verhindert, dass die Methode etwas anderes als `HEAD`, `GET` oder `POST` ist, und dass die Header etwas anderes als [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) sind.
        Wenn ServiceWorkers diese Anfragen abfangen, dürfen sie keine Header hinzufügen oder überschreiben, außer denen, die [CORS-safelisted request headers](/de/docs/Glossary/CORS-safelisted_request_header) sind.
        Darüber hinaus darf JavaScript auf keine Eigenschaften der resultierenden [`Response`](/de/docs/Web/API/Response) zugreifen.
        Dies stellt sicher, dass ServiceWorkers die Semantik des Webs nicht beeinflussen und verhindert Sicherheits- und Datenschutzprobleme, die durch das Lecken von Daten über Domänen hinweg entstehen.
    - `cors`
      - : Erlaubt Cross-Origin-Anfragen, zum Beispiel, um auf verschiedene APIs zuzugreifen, die von Drittanbietern angeboten werden. Es wird erwartet, dass diese dem [CORS-Protokoll](/de/docs/Web/HTTP/CORS) entsprechen. Nur ein [begrenzter Satz](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) von Headern ist in der [`Response`](/de/docs/Web/API/Response) verfügbar, aber der Körper ist lesbar.
    - `navigate`
      - : Ein Modus zur Unterstützung der Navigation. Der Wert `navigate` ist nur für HTML-Navigation vorgesehen. Eine Navigationsanfrage wird nur beim Navigieren zwischen Dokumenten erstellt.
    - `websocket`
      - : Ein spezieller Modus, der nur beim Aufbau einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet wird.

### Standardmodus

Anfragen können auf verschiedene Arten initiiert werden, und der Modus für eine Anfrage hängt von der jeweiligen Art ab, wie sie initiiert wurde.

Wenn beispielsweise ein `Request`-Objekt unter Verwendung des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors erstellt wird, wird der Wert der `mode`-Eigenschaft für dieses `Request` auf `cors` gesetzt.

Bei Anfragen, die nicht über den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt wurden, wird typischerweise der Modus `no-cors` verwendet; beispielsweise für eingebettete Ressourcen, bei denen die Anfrage aus dem Markup initiiert wird, es sei denn, das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut ist vorhanden. In den meisten Fällen wird die Anfrage im `no-cors`-Modus gestellt, das heißt für die {{HTMLElement("link")}}- oder {{HTMLElement("script")}}-Elemente (außer in Verbindung mit Modulen) oder {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, oder {{HTMLElement("iframe")}}-Elemente.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann den Anfragemodus in einer Variablen:

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
- [HTTP access control (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
