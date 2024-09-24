---
title: "Request: mode-Eigenschaft"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 9581bc97e33aa44a2dca67178d86ac4e81cc7c75
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`mode`**-Eigenschaft des {{domxref("Request")}}
Interfaces enthält den Modus der Anfrage (z. B. `cors`,
`no-cors`, `same-origin`, `navigate` oder `websocket`.) Diese Eigenschaft dient dazu, festzustellen, ob Cross-Origin-Anfragen zu gültigen Antworten führen und welche Eigenschaften der Antwort lesbar sind.

## Wert

- Ein `RequestMode`-Wert.

  - : Der zugehörige _Modus_, dessen verfügbare Werte sind:

    - `same-origin`
      - : Wenn eine Anfrage mit diesem Modus an einen anderen Ursprung gestellt wird,
        resultiert dies in einem Fehler. Dies könnte verwendet werden, um sicherzustellen, dass eine Anfrage
        immer an Ihren Ursprung gerichtet ist.
    - `no-cors`
      - : Verhindert, dass die Methode etwas anderes als `HEAD`, `GET` oder `POST` sein kann, und dass die Header etwas anderes als {{Glossary("CORS-safelisted request header", "CORS-safelisted request headers")}} sind.
        Wenn irgendwelche ServiceWorker diese Anfragen abfangen, dürfen sie keine Header hinzufügen oder überschreiben, außer für die, die {{Glossary("CORS-safelisted request header", "CORS-safelisted request headers")}} sind.
        Darüber hinaus darf JavaScript auf keine der Eigenschaften der resultierenden {{domxref("Response")}} zugreifen.
        Dies stellt sicher, dass ServiceWorker die Semantik des Webs nicht beeinflussen und verhindert Sicherheits- und Datenschutzprobleme durch das Ausleiten von Daten über Domains hinweg.
    - `cors`
      - : Ermöglicht Cross-Origin-Anfragen, zum Beispiel um auf verschiedene
        APIs zuzugreifen, die von Drittanbietern angeboten werden. Es wird erwartet, dass sie dem [CORS-Protokoll](/de/docs/Web/HTTP/CORS) folgen. Nur ein [begrenzter Satz](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) von Headern ist in der {{domxref("Response")}} sichtbar, aber der Inhalt ist
        lesbar.
    - `navigate`
      - : Ein Modus zur Unterstützung der Navigation. Der `navigate`-Wert ist nur für die HTML-Navigation gedacht. Eine Navigate-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.
    - `websocket`
      - : Ein spezieller Modus, der nur bei der Herstellung einer [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet wird.

### Standardmodus

Anfragen können auf verschiedene Arten initiiert werden, und der Modus für eine Anfrage hängt von der spezifischen Art ab, wie sie initiiert wurde.

Zum Beispiel, wenn ein `Request`-Objekt mit dem
{{domxref("Request.Request", "Request()")}}-Konstruktor erstellt wird, ist der Wert der `mode`-Eigenschaft
für diese `Request` auf `cors` gesetzt.

Jedoch wird für Anfragen, die nicht durch den {{domxref("Request.Request", "Request()")}}-Konstruktor
erstellt werden, typischerweise `no-cors` als Modus verwendet; zum Beispiel, für
eingebettete Ressourcen, bei denen die Anfrage aus einem Markup initiiert wird, es sei denn, das
[`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)
Attribut ist vorhanden, wird die Anfrage in den meisten Fällen im `no-cors`-Modus durchgeführt – das heißt für die {{HTMLElement("link")}}- oder {{HTMLElement("script")}}-Elemente
(außer bei Verwendung mit Modulen) oder {{HTMLElement("img")}}, {{HTMLElement("audio")}},
{{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} oder
{{HTMLElement("iframe")}}-Elementen.

## Beispiele

Im folgenden Snippet erstellen wir eine neue Anfrage mit dem
{{domxref("Request.Request", "Request()")}}-Konstruktor (für eine Bilddatei im selben Verzeichnis wie
das Skript), und speichern dann den Anfragemodus in einer Variablen:

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
