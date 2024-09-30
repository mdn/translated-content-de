---
title: "XMLHttpRequest: responseText-Eigenschaft"
short-title: responseText
slug: Web/API/XMLHttpRequest/responseText
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Eigenschaft **`responseText`** gibt den Text zurück, der von einem Server empfangen wurde, nachdem eine Anfrage gesendet wurde.

## Wert

Ein Zeichenstring, der entweder die mit `XMLHttpRequest` empfangenen Textdaten enthält oder `""`, wenn die Anfrage fehlgeschlagen ist oder noch kein Inhalt empfangen wurde.

Bei der Bearbeitung einer asynchronen Anfrage hat `responseText` immer den aktuellen Inhalt, der vom Server empfangen wurde, selbst wenn er unvollständig ist, weil die Daten noch nicht vollständig empfangen wurden.

Sie wissen, dass der gesamte Inhalt empfangen wurde, wenn der Wert von [`readyState`](/de/docs/Web/API/XMLHttpRequest/readyState) `XMLHttpRequest.DONE` (`4`) wird und [`status`](/de/docs/Web/API/XMLHttpRequest/status) 200 (`"OK"`) erreicht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht auf entweder die leere Zeichenfolge oder `"text"` gesetzt ist. Da die `responseText`-Eigenschaft nur für Textinhalte gültig ist, ist jeder andere Wert ein Fehlerzustand.

## Beispiele

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// If specified, responseType must be empty string or "text"
xhr.responseType = "text";

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseText);
    }
  }
};

xhr.send(null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
