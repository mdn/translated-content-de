---
title: "XMLHttpRequest: responseXML-Eigenschaft"
short-title: responseXML
slug: Web/API/XMLHttpRequest/responseXML
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte Eigenschaft **`XMLHttpRequest.responseXML`** gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das HTML oder XML enthält, das durch die Anfrage abgerufen wurde; oder `null`, wenn die Anfrage erfolglos war, noch nicht gesendet wurde oder die Daten nicht als XML oder HTML geparst werden können.

> [!NOTE]
> Der Name `responseXML` ist ein Überbleibsel aus der Historie dieser Eigenschaft; sie funktioniert sowohl für HTML als auch für XML.

In der Regel wird die Antwort als `"text/xml"` geparst. Wenn der [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) auf `"document"` gesetzt ist und die Anfrage asynchron durchgeführt wurde, wird die Antwort stattdessen als `"text/html"` geparst. `responseXML` ist für alle anderen Datentypen sowie für [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) `null`.

Wenn der Server {{HTTPHeader("Content-Type")}} nicht als `"text/xml"` oder `"application/xml"` angibt, können Sie [`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType) verwenden, um die Daten trotzdem als XML zu parsen.

Diese Eigenschaft ist in Workern nicht verfügbar.

## Wert

Ein [`Document`](/de/docs/Web/API/Document), das aus dem XML oder HTML geparst wurde, das mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) empfangen wurde, oder `null`, wenn keine Daten empfangen wurden oder die Daten nicht XML/HTML sind.

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
- [Parsen und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- Parsen von XML in einen DOM-Baum: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Serialisieren eines DOM-Baums in XML: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) (insbesondere die Methode [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString))
