---
title: "XMLHttpRequest: Eigenschaft responseText"
short-title: responseText
slug: Web/API/XMLHttpRequest/responseText
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte {{domxref("XMLHttpRequest")}}-Eigenschaft
**`responseText`** gibt den vom Server empfangenen Text zurück,
nachdem eine Anfrage gesendet wurde.

## Wert

Ein String, der entweder die textuellen Daten enthält, die mit dem
`XMLHttpRequest` empfangen wurden, oder `""`, falls die Anfrage fehlgeschlagen ist oder noch kein Inhalt empfangen wurde.

Bei der Bearbeitung einer asynchronen Anfrage hat der Wert von `responseText` immer
den aktuellen vom Server empfangenen Inhalt, selbst wenn dieser unvollständig ist, da die
Daten noch nicht vollständig empfangen wurden.

Sie wissen, dass der gesamte Inhalt empfangen wurde, wenn der Wert von
{{domxref("XMLHttpRequest.readyState", "readyState")}} zu
`XMLHttpRequest.DONE` (`4`) wird und
{{domxref("XMLHttpRequest.status", "status")}} 200 (`"OK"`) ergibt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("XMLHttpRequest.responseType")}} nicht entweder auf den leeren
    String oder `"text"` gesetzt ist. Da die `responseText`-Eigenschaft
    nur für Textinhalte gültig ist, ist jeder andere Wert eine Fehlbedingung.

## Beispiele

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// Wenn angegeben, muss responseType leerer String oder "text" sein
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
