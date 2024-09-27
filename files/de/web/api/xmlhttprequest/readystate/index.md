---
title: "XMLHttpRequest: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/XMLHttpRequest/readyState
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **XMLHttpRequest.readyState**-Eigenschaft gibt den Zustand zurück, in dem sich ein `XMLHttpRequest`-Client befindet. Ein XHR-Client kann sich in einem der folgenden Zustände befinden:

| Wert | Zustand            | Beschreibung                                                     |
| ---- | ------------------ | ---------------------------------------------------------------- |
| `0`  | `UNSENT`           | Client wurde erstellt. `open()` wurde noch nicht aufgerufen.     |
| `1`  | `OPENED`           | `open()` wurde aufgerufen.                                       |
| `2`  | `HEADERS_RECEIVED` | `send()` wurde aufgerufen, und Header und Status sind verfügbar. |
| `3`  | `LOADING`          | Herunterladen; `responseText` enthält teilweise Daten.           |
| `4`  | `DONE`             | Der Vorgang ist abgeschlossen.                                   |

- UNSENT
  - : Der `XMLHttpRequest`-Client wurde erstellt, aber die Methode `open()` wurde noch nicht aufgerufen.
- OPENED
  - : Die Methode `open()` wurde aufgerufen. In diesem Zustand können die Anforderungsheader mit der Methode [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetzt werden, und die Methode [send()](/de/docs/Web/API/XMLHttpRequest/send) kann aufgerufen werden, um den Abruf zu starten.
- HEADERS_RECEIVED
  - : `send()` wurde aufgerufen, alle Weiterleitungen (falls vorhanden) wurden gefolgt und die Antwort-Header wurden empfangen.
- LOADING
  - : Der Körper der Antwort wird empfangen. Wenn [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) "text" oder ein leerer String ist, enthält [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) den teilweise geladenen Text der Antwort.
- DONE
  - : Der Abrufvorgang ist abgeschlossen. Dies kann bedeuten, dass entweder der Datentransfer erfolgreich abgeschlossen oder fehlgeschlagen ist.

## Beispiel

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
