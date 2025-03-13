---
title: "Request: mode-Eigenschaft"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`mode`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält den Modus der Anfrage (z.B. `cors`, `no-cors`, `same-origin` oder `navigate`). Dies wird verwendet, um zu bestimmen, ob Cross-Origin-Anfragen zu gültigen Antworten führen und welche Eigenschaften der Antwort lesbar sind.

Um eine Anfrage mit einem spezifischen Modus zu erstellen, übergeben Sie den gewünschten Wert als [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option an den [`Request.Request()`](/de/docs/Web/API/Request/Request)-Konstruktor.

Bitte beachten Sie, dass das Setzen bestimmter Modi, insbesondere `no-cors`, Einschränkungen bei den verwendbaren Anfragemethoden und -header erzwingt und JavaScript daran hindert, auf die Antwort-Header oder den Körper zuzugreifen. Weitere Details finden Sie in der Dokumentation zu [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode).

## Wert

Einer der folgenden Werte:

- `same-origin`

  - : Verhindert Cross-Origin-Anfragen. Wenn eine Anfrage an eine andere Quelle mit diesem Modus gestellt wird, führt dies zu einem Fehler.

- `no-cors`

  - : Deaktiviert CORS für Cross-Origin-Anfragen. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und ihr Körper für JavaScript nicht verfügbar sind.

- `cors`

  - : Wenn die Anfrage Cross-Origin ist, wird der Mechanismus von [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) verwendet.

- `navigate`

  - : Ein Modus zur Unterstützung der Navigation. Der `navigate`-Wert ist nur für die HTML-Navigation gedacht. Eine Navigationsanfrage wird nur während des Navigierens zwischen Dokumenten erstellt.

### Standardmodus

Anfragen können auf verschiedene Arten initiiert werden, und der Modus für eine Anfrage hängt von der speziellen Methode ab, mit der sie initiiert wurde.

Beispielsweise wird beim Erstellen eines `Request`-Objekts mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor der Wert der `mode`-Eigenschaft für diese `Request` auf `cors` gesetzt.

Allerdings wird für Anfragen, die anders als durch den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt wurden, typischerweise `no-cors` als Modus verwendet; zum Beispiel für eingebettete Ressourcen, bei denen die Anfrage von einem Markup initiiert wird, es sei denn, das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut ist vorhanden. In den meisten Fällen wird die Anfrage im `no-cors`-Modus gestellt — das gilt für die {{HTMLElement("link")}} oder {{HTMLElement("script")}}-Elemente (außer bei Verwendung mit Modulen) oder {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} oder {{HTMLElement("iframe")}}-Elemente.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript), dann speichern wir den Anfragemodus in einer Variablen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
