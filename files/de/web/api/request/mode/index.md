---
title: "`mode`-Eigenschaft"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`mode`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces enthält den Modus der Anfrage (z.B. `cors`, `no-cors`, `same-origin` oder `navigate`). Diese wird verwendet, um festzustellen, ob Cross-Origin-Anfragen zu gültigen Antworten führen und welche Eigenschaften der Antwort lesbar sind.

Um eine Anfrage mit einem spezifischen Modus zu erstellen, übergeben Sie den gewünschten Wert als [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option an den [`Request.Request()`](/de/docs/Web/API/Request/Request)-Konstruktor.

Beachten Sie, dass das Setzen bestimmter Modi, insbesondere `no-cors`, Einschränkungen für die verwendbaren Anfragemethoden und Header mit sich bringt und JavaScript daran hindert, auf die Antwortheader oder den -körper zuzugreifen. Weitere Details finden Sie in der Dokumentation zu [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode).

## Wert

Einer der folgenden Werte:

- `same-origin`

  - : Verbietet Cross-Origin-Anfragen. Wenn eine Anfrage an einen anderen Ursprung mit diesem Modus gestellt wird, führt dies zu einem Fehler.

- `no-cors`

  - : Deaktiviert CORS für Cross-Origin-Anfragen. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Körper für JavaScript nicht zugänglich sind.

- `cors`

  - : Wenn die Anfrage Cross-Origin ist, wird der Mechanismus des [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) verwendet.

- `navigate`

  - : Ein Modus zur Unterstützung der Navigation. Der `navigate`-Wert ist nur für die HTML-Navigation vorgesehen. Eine Navigationsanfrage wird nur während der Navigation zwischen Dokumenten erstellt.

### Standardmodus

Anfragen können auf verschiedene Arten initiiert werden, und der Modus für eine Anfrage hängt von der speziellen Methode ab, mit der sie initiiert wurde.

Zum Beispiel wird, wenn ein `Request`-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt wird, der Wert der `mode`-Eigenschaft für diese `Request` auf `cors` gesetzt.

Für Anfragen, die nicht durch den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt werden, wird typischerweise `no-cors` als Modus verwendet; zum Beispiel für eingebettete Ressourcen, bei denen die Anfrage aus einem Markup heraus initiiert wird, es sei denn, das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut ist vorhanden. In den meisten Fällen wird die Anfrage im `no-cors`-Modus gestellt – das ist der Fall bei den {{HTMLElement("link")}}- oder {{HTMLElement("script")}}-Elementen (außer wenn sie mit Modulen verwendet werden) oder bei den {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} oder {{HTMLElement("iframe")}}-Elementen.

## Beispiele

Im folgenden Snippet erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann den Anfragemodus in einer Variablen:

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
- [HTTP-Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
