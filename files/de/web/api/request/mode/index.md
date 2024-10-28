---
title: "Anfrage: mode-Eigenschaft"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 0129176c2bb0e16af7577067191f0889326fad73
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`mode`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle enthält den Modus der Anfrage (z.B. `cors`, `no-cors`, `same-origin` oder `navigate`). Diese wird verwendet, um zu bestimmen, ob Anfragen über verschiedene Ursprünge zu gültigen Antworten führen und welche Eigenschaften der Antwort lesbar sind.

Um eine Anfrage mit einem spezifischen Modus zu konstruieren, übergeben Sie den gewünschten Wert als [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option an den [`Request.Request()`](/de/docs/Web/API/Request/Request)-Konstruktor.

Beachten Sie, dass das Festlegen bestimmter Modi, insbesondere `no-cors`, Einschränkungen bezüglich der verwendbaren Anfragemethoden und Header mit sich bringt und verhindert, dass JavaScript auf die Antwort-Header oder den -Body zugreift. Siehe die Dokumentation zu [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode) für weitere Details.

## Wert

Einer der folgenden Werte:

- `same-origin`

  - : Verhindert Anfragen über verschiedene Ursprünge. Wenn eine Anfrage mit diesem Modus an einen anderen Ursprung gesendet wird, führt dies zu einem Fehler.

- `no-cors`

  - : Deaktiviert CORS für Anfragen über verschiedene Ursprünge. Die Antwort ist _undurchsichtig_, was bedeutet, dass ihre Header und der Body für JavaScript nicht verfügbar sind.

- `cors`

  - : Wenn die Anfrage einen anderen Ursprung hat, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)-Mechanismus verwendet.

- `navigate`

  - : Ein Modus zur Unterstützung der Navigation. Der `navigate`-Wert ist dafür vorgesehen, nur von HTML-Navigation verwendet zu werden. Eine Navigationsanfrage wird nur während der Navigation zwischen Dokumenten erstellt.

### Standardmodus

Anfragen können auf verschiedene Weise initiiert werden, und der Modus einer Anfrage hängt von der spezifischen Methode ab, durch die sie initiiert wurde.

Zum Beispiel wird, wenn ein `Request`-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt wird, der Wert der `mode`-Eigenschaft für diese `Request` auf `cors` gesetzt.

Für Anfragen, die nicht durch den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt werden, wird jedoch typischerweise `no-cors` als Modus verwendet; beispielsweise für eingebettete Ressourcen, bei denen die Anfrage aus dem Markup initiiert wird. Sofern das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut nicht vorhanden ist, wird die Anfrage in den meisten Fällen im `no-cors`-Modus gestellt — das gilt für die {{HTMLElement("link")}}- oder {{HTMLElement("script")}}-Elemente (außer bei Verwendung mit Modulen) oder die {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} oder {{HTMLElement("iframe")}}-Elemente.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann den Anfragemodus in einer Variablen:

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
