---
title: "Request: mode-Eigenschaft"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`mode`** schreibgeschützte Eigenschaft des [`Request`](/de/docs/Web/API/Request)
Interfaces enthält den Modus der Anfrage (z.B. `cors`,
`no-cors`, `same-origin` oder `navigate`). Diese wird verwendet,
um festzustellen, ob Cross-Origin-Anfragen zu gültigen Antworten führen, und welche Eigenschaften der Antwort lesbar sind.

Um eine Anfrage mit einem bestimmten Modus zu erstellen, übergeben Sie den gewünschten Wert als [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode)-Option an den [`Request.Request()`](/de/docs/Web/API/Request/Request)-Konstruktor.

Beachten Sie, dass das Setzen bestimmter Modi, insbesondere `no-cors`, Einschränkungen hinsichtlich der verwendbaren Anfragemethoden und Header mit sich bringt und verhindert, dass JavaScript auf die Antwort-Header oder den Antwort-Body zugreifen kann. Weitere Details finden Sie in der Dokumentation zu [`RequestInit.mode`](/de/docs/Web/API/RequestInit#mode).

## Wert

Einer der folgenden Werte:

- `same-origin`

  - : Verbietet Cross-Origin-Anfragen. Wenn bei diesem Modus eine Anfrage an einen anderen Ursprung gestellt wird, führt dies zu einem Fehler.

- `no-cors`

  - : Deaktiviert CORS für Cross-Origin-Anfragen. Die Antwort ist _opak_, was bedeutet, dass ihre Header und der Body für JavaScript nicht verfügbar sind.

- `cors`

  - : Wenn die Anfrage cross-origin ist, wird der [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)-Mechanismus verwendet.

- `navigate`
  - : Ein Modus zur Unterstützung der Navigation. Der Wert `navigate` ist nur für HTML-Navigation vorgesehen. Eine Navigate-Anfrage wird nur beim Navigieren zwischen Dokumenten erstellt.

### Standardmodus

Anfragen können auf verschiedene Weisen initiiert werden, und der Modus einer Anfrage hängt von der spezifischen Art ab, wie sie initiiert wurde.

Zum Beispiel wird, wenn ein `Request`-Objekt mit dem
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellt wird, der Wert der `mode`-Eigenschaft
dieser `Request` auf `cors` gesetzt.

Jedoch wird für Anfragen, die nicht über den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor
erstellt werden, typischerweise `no-cors` als Modus verwendet; zum Beispiel für
eingebettete Ressourcen, bei denen die Anfrage aus Markup initiiert wird, es sei denn, das
[`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-
Attribut ist vorhanden, wird die Anfrage in den meisten Fällen im `no-cors`-Modus durchgeführt — das ist der Fall bei {{HTMLElement("link")}}, {{HTMLElement("script")}}-Elementen
(außer bei der Verwendung mit Modulen) oder {{HTMLElement("img")}}, {{HTMLElement("audio")}},
{{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} oder
{{HTMLElement("iframe")}}-Elementen.

## Beispiele

Im folgenden Snippet erstellen wir eine neue Anfrage mit dem
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das
Skript) und speichern dann den Anfragemodus in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myMode = myRequest.mode; // returns "cors" by default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
