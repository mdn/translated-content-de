---
title: "XMLHttpRequest: responseXML-Eigenschaft"
short-title: responseXML
slug: Web/API/XMLHttpRequest/responseXML
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte **`XMLHttpRequest.responseXML`**-Eigenschaft gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das das HTML oder XML enthält, das durch die Anfrage abgerufen wurde, oder `null`, wenn die Anfrage nicht erfolgreich war, noch nicht gesendet wurde oder die Daten nicht als XML oder HTML geparst werden können.

> [!NOTE]
> Der Name `responseXML` ist ein Überbleibsel aus der Geschichte dieser
> Eigenschaft; sie funktioniert sowohl für HTML als auch XML.

In der Regel wird die Antwort als `"text/xml"` geparst. Wenn der [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) auf `"document"` gesetzt wird und die Anfrage asynchron durchgeführt wurde, wird die Antwort stattdessen als `"text/html"` geparst. `responseXML` ist für alle anderen Datentypen sowie für [`data:` URLs](/de/docs/Web/URI/Schemes/data) `null`.

Wenn der Server den {{HTTPHeader("Content-Type")}} nicht als `"text/xml"` oder `"application/xml"` spezifiert, können Sie [`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType) verwenden, um die Daten trotzdem als XML zu parsen.

Diese Eigenschaft ist in Web-Workern nicht verfügbar.

## Wert

Ein [`Document`](/de/docs/Web/API/Document), das durch das Parsen des mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) empfangenen XML- oder HTML-Inhalts erstellt wurde, oder `null`, falls keine Daten empfangen wurden oder die Daten weder XML noch HTML sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) weder `document` noch ein leerer String ist.

## Beispiele

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server");

// If specified, responseType must be empty string or "document"
xhr.responseType = "document";

// Force the response to be parsed as XML
xhr.overrideMimeType("text/xml");

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    console.log(xhr.response, xhr.responseXML);
  }
};

xhr.send();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`XMLHttpRequest.response`](/de/docs/Web/API/XMLHttpRequest/response)
- [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)
- [XML parsen und serialisieren](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- Parsen von XML in einen DOM-Baum: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Serialisierung eines DOM-Baums in XML: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) (insbesondere die Methode [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString))
