---
title: "XMLHttpRequest: response-Eigenschaft"
short-title: response
slug: Web/API/XMLHttpRequest/response
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte Eigenschaft **`response`** des Interfaces [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt den Inhalt des Antwortkörpers als {{jsxref("ArrayBuffer")}}, [`Blob`](/de/docs/Web/API/Blob), [`Document`](/de/docs/Web/API/Document), JavaScript-{{jsxref("Object")}} oder Zeichenfolge zurück, abhängig vom Wert der Eigenschaft [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) der Anfrage.

## Wert

Ein dem Wert von [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) entsprechendes Objekt.
Sie können versuchen, die Daten in einem bestimmten Format anzufordern, indem Sie den Wert von `responseType` festlegen, nachdem Sie [`open()`](/de/docs/Web/API/XMLHttpRequest/open) zum Initialisieren der Anfrage aufgerufen haben, aber bevor Sie die Anfrage mit [`send()`](/de/docs/Web/API/XMLHttpRequest/send) an den Server senden.

Der Wert ist `null`, wenn die Anfrage noch nicht abgeschlossen oder fehlgeschlagen ist. Eine Ausnahme gilt beim Lesen von Textdaten mit einem `responseType` von `"text"` oder der leeren Zeichenfolge (`""`): Solange sich die Anfrage noch im [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) `LOADING` (3) befindet, kann die Antwort bereits die bis dahin empfangenen Daten enthalten.

## Beispiele

Dieses Beispiel zeigt eine Funktion `load()`, die eine Seite vom Server lädt und verarbeitet. Dazu erstellt sie ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt und registriert einen Listener für [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)-Ereignisse. Wenn `readyState` zu `DONE` (4) wechselt, wird `response` abgerufen und an die Callback-Funktion übergeben, die `load()` bereitgestellt wurde.

Der Inhalt wird als Rohtext verarbeitet, da hier der Standardwert von [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht überschrieben wird.

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

- [XMLHttpRequest verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Text- und HTML/XML-Daten abrufen: [`XMLHttpRequest.responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) und
  [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)
