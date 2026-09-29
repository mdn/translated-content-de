---
title: "XMLHttpRequest: Eigenschaft readyState"
short-title: readyState
slug: Web/API/XMLHttpRequest/readyState
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte Eigenschaft **`readyState`** der Schnittstelle [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt den aktuellen Zustand eines XMLHttpRequest-Clients zurück. Ein XHR-Client befindet sich in einem der folgenden Zustände:

| Wert | Zustand            | Beschreibung                                                        |
| ---- | ------------------ | ------------------------------------------------------------------- |
| `0`  | `UNSENT`           | Der Client wurde erstellt. `open()` wurde noch nicht aufgerufen.    |
| `1`  | `OPENED`           | `open()` wurde aufgerufen.                                          |
| `2`  | `HEADERS_RECEIVED` | `send()` wurde aufgerufen; Header und Status sind verfügbar.        |
| `3`  | `LOADING`          | Die Antwort wird heruntergeladen; `responseText` enthält Teildaten. |
| `4`  | `DONE`             | Der Vorgang ist abgeschlossen.                                      |

- UNSENT
  - : Der XMLHttpRequest-Client wurde erstellt, aber die Methode open() wurde noch nicht aufgerufen.
- OPENED
  - : Die Methode open() wurde aufgerufen. In diesem Zustand können die Request-Header mit der Methode [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetzt werden. Außerdem kann die Methode [send()](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen werden, um den Abruf zu starten.
- HEADERS_RECEIVED
  - : send() wurde aufgerufen, allen Weiterleitungen (falls vorhanden) wurde gefolgt und die Response-Header wurden empfangen.
- LOADING
  - : Der Antwortkörper wird empfangen. Wenn [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) „text“ oder eine leere Zeichenfolge ist, enthält [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) während des Ladens den bereits empfangenen Teil der Textantwort.
- DONE
  - : Der Abruf ist abgeschlossen. Das kann bedeuten, dass die Datenübertragung erfolgreich abgeschlossen wurde oder fehlgeschlagen ist.

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
