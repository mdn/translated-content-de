---
title: "XMLHttpRequest: response-Eigenschaft"
short-title: response
slug: Web/API/XMLHttpRequest/response
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`response`**-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt den Inhalt des Antwortkörpers als {{jsxref("ArrayBuffer")}}, [`Blob`](/de/docs/Web/API/Blob), [`Document`](/de/docs/Web/API/Document), ein JavaScript {{jsxref("Object")}} oder als Zeichenfolge zurück, je nach dem Wert der [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft der Anfrage.

## Wert

Ein geeignetes Objekt basierend auf dem Wert von [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType). Sie können versuchen, die Daten in einem bestimmten Format anzufordern, indem Sie den Wert von `responseType` festlegen, nachdem Sie [`open()`](/de/docs/Web/API/XMLHttpRequest/open) aufgerufen haben, um die Anfrage zu initialisieren, aber bevor Sie [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen, um die Anfrage an den Server zu senden.

Der Wert ist `null`, wenn die Anfrage noch nicht abgeschlossen oder fehlgeschlagen ist, mit der Ausnahme, dass bei der Verwendung von Textdaten mit einem `responseType` von `"text"` oder dem leeren String (`""`) die Antwort den bisherigen Antwortinhalt enthalten kann, während die Anfrage sich noch im `LOADING` [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) (3) befindet.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `load()`, die eine Seite vom Server lädt und verarbeitet. Sie funktioniert, indem ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt erstellt wird und ein Listener für [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)-Ereignisse erstellt wird, sodass, wenn `readyState` in `DONE` (4) geändert wird, die `response` abgefragt und in die an `load()` übergebene Rückruffunktion übergeben wird.

Der Inhalt wird als Rohtextdaten behandelt (da hier nichts den Standard- [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) überschreibt).

```js
const url = "somePage.html"; // A local page

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

- [Verwenden von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Abrufen von Text- und HTML/XML-Daten: [`XMLHttpRequest.responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) und [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)
