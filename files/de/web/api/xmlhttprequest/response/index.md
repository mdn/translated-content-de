---
title: "XMLHttpRequest: response-Eigenschaft"
short-title: response
slug: Web/API/XMLHttpRequest/response
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`response`**-Eigenschaft von {{domxref("XMLHttpRequest")}} gibt den Inhalt des Antwortkörpers zurück als ein {{jsxref("ArrayBuffer")}}, ein {{domxref("Blob")}}, ein {{domxref("Document")}}, ein JavaScript-{{jsxref("Object")}} oder ein String, abhängig vom Wert der {{domxref("XMLHttpRequest.responseType", "responseType")}}-Eigenschaft der Anfrage.

## Wert

Ein entsprechendes Objekt basierend auf dem Wert von {{domxref("XMLHttpRequest.responseType", "responseType")}}. Sie können versuchen, die Daten in einem spezifischen Format anzufordern, indem Sie den Wert von `responseType` setzen, nachdem Sie {{domxref("XMLHttpRequest.open", "open()")}} aufgerufen haben, um die Anfrage zu initialisieren, aber bevor Sie {{domxref("XMLHttpRequest.send", "send()")}} aufrufen, um die Anfrage an den Server zu senden.

Der Wert ist `null`, wenn die Anfrage noch nicht abgeschlossen ist oder nicht erfolgreich war, mit der Ausnahme, dass beim Lesen von Textdaten unter Verwendung eines `responseType` von `"text"` oder dem leeren String (`""`), die Antwort den bisher erhaltenen Inhalt enthalten kann, während sich die Anfrage noch im `LOADING`-{{domxref("XMLHttpRequest.readyState", "readyState")}} (3) befindet.

## Beispiele

Dieses Beispiel präsentiert eine Funktion, `load()`, die eine Seite vom Server lädt und verarbeitet. Sie funktioniert, indem ein {{domxref("XMLHttpRequest")}}-Objekt erstellt und ein Listener für {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}-Events erzeugt wird, sodass, wenn sich `readyState` auf `DONE` (4) ändert, die `response` abgerufen und an die der `load()`-Funktion übergebenen Callback-Funktion weitergeleitet wird.

Der Inhalt wird als rohe Textdaten behandelt (da hier nichts den Standard-{{domxref("XMLHttpRequest.responseType", "responseType")}} überschreibt).

```js
const url = "somePage.html"; // Eine lokale Seite

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

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Abrufen von Text- und HTML/XML-Daten: {{domxref("XMLHttpRequest.responseText")}} und {{domxref("XMLHttpRequest.responseXML")}}
