---
title: "XMLHttpRequest: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/XMLHttpRequest/readyState
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **XMLHttpRequest.readyState**-Eigenschaft gibt den Zustand zurück, in dem sich ein XMLHttpRequest-Client befindet. Ein XHR-Client existiert in einem der folgenden Zustände:

| Wert  | Zustand            | Beschreibung                                                    |
| ----- | ------------------ | ----------------------------------------------------------------|
| `0`   | `UNSENT`           | Klient wurde erstellt. `open()` wurde noch nicht aufgerufen.     |
| `1`   | `OPENED`           | `open()` wurde aufgerufen.                                       |
| `2`   | `HEADERS_RECEIVED` | `send()` wurde aufgerufen, und Header und Status sind verfügbar. |
| `3`   | `LOADING`          | Herunterladen; `responseText` hält teilweise Daten.              |
| `4`   | `DONE`             | Die Operation ist abgeschlossen.                                 |

- UNSENT
  - : Der XMLHttpRequest-Client wurde erstellt, aber die open()-Methode wurde noch nicht aufgerufen.
- OPENED
  - : Die open()-Methode wurde aufgerufen. In diesem Zustand können die Anforderungsheader mithilfe der [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)-Methode gesetzt werden, und die [send()](/de/docs/Web/API/XMLHttpRequest/send)-Methode kann aufgerufen werden, was den Abruf initiiert.
- HEADERS_RECEIVED
  - : send() wurde aufgerufen, alle Weiterleitungen (falls vorhanden) wurden befolgt und die Antwortheader wurden empfangen.
- LOADING
  - : Der Antworttext wird empfangen. Wenn [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) "text" oder ein leerer String ist, enthält [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) den teilweisen Text der Antwort, wie er geladen wird.
- DONE
  - : Die Abrufoperation ist abgeschlossen. Dies könnte bedeuten, dass der Datentransfer entweder erfolgreich abgeschlossen oder fehlgeschlagen ist.

## Beispiel

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState wird 0 sein

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState wird 1 sein

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState); // readyState wird 3 sein
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState); // readyState wird 4 sein
};

xhr.send(null);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
