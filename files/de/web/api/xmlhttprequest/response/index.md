---
title: "XMLHttpRequest: response-Eigenschaft"
short-title: response
slug: Web/API/XMLHttpRequest/response
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`response`**-Eigenschaft von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt den Inhalt des Antwortkörpers als {{jsxref("ArrayBuffer")}}, ein [`Blob`](/de/docs/Web/API/Blob), ein [`Document`](/de/docs/Web/API/Document), ein JavaScript-{{jsxref("Object")}} oder einen String zurück, abhängig vom Wert der [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft der Anforderung.

## Wert

Ein geeignetes Objekt basierend auf dem Wert von [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType). Sie können versuchen, die Daten in einem bestimmten Format anzufordern, indem Sie den Wert von `responseType` nach dem Aufruf von [`open()`](/de/docs/Web/API/XMLHttpRequest/open) zur Initialisierung der Anfrage, aber vor dem Aufruf von [`send()`](/de/docs/Web/API/XMLHttpRequest/send) zur Übermittlung der Anfrage an den Server, setzen.

Der Wert ist `null`, wenn die Anfrage noch nicht abgeschlossen oder nicht erfolgreich war, mit der Ausnahme, dass beim Lesen von Textdaten mit einem `responseType` von `"text"` oder dem leeren String (`""`), die Antwort den bisherigen Antwortinhalt enthalten kann, während die Anfrage noch im `LOADING`-[`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) (3) ist.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `load()`, die eine Seite vom Server lädt und verarbeitet. Sie funktioniert, indem sie ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt erstellt und einen Listener für [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event) Ereignisse erstellt, sodass bei einer Änderung des `readyState` auf `DONE` (4) die `response` abgerufen und an die an `load()` übergebene Rückruffunktion übergeben wird.

Der Inhalt wird als Rohtextdaten behandelt (da hier nichts den Standardwert von [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) überschreibt).

```js
const url = "somePage.html"; //A local page

function load(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  };

  xhr.open("GET", url, true);
  xhr.send("");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XMLHttpRequest verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Abrufen von Text- und HTML/XML-Daten: [`XMLHttpRequest.responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) und [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)
