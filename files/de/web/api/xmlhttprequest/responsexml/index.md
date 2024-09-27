---
title: "XMLHttpRequest: responseXML-Eigenschaft"
short-title: responseXML
slug: Web/API/XMLHttpRequest/responseXML
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte Eigenschaft **`XMLHttpRequest.responseXML`** gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das das durch die Anfrage abgerufene HTML oder XML enthält; oder `null`, wenn die Anfrage nicht erfolgreich war, noch nicht gesendet wurde oder wenn die Daten nicht als XML oder HTML geparst werden können.

> [!NOTE]
> Der Name `responseXML` ist ein Überbleibsel aus der Geschichte dieser
> Eigenschaft; sie funktioniert sowohl für HTML als auch für XML.

In der Regel wird die Antwort als `"text/xml"` geparst. Wenn der
[`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) auf
`"document"` gesetzt ist und die Anfrage asynchron ausgeführt wurde, wird die Antwort stattdessen als `"text/html"` geparst. `responseXML` ist `null` für alle anderen Datentypen sowie für [`data:` URLs](/de/docs/Web/URI/Schemes/data).

Wenn der Server den {{HTTPHeader("Content-Type")}} nicht als
`"text/xml"` oder `"application/xml"` angibt, können Sie
[`XMLHttpRequest.overrideMimeType()`](/de/docs/Web/API/XMLHttpRequest/overrideMimeType) verwenden, um es trotzdem als XML zu parsen.

Diese Eigenschaft steht in Workern nicht zur Verfügung.

## Wert

Ein [`Document`](/de/docs/Web/API/Document) aus dem Parsen des mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) empfangenen XML oder HTML, oder `null`, wenn keine Daten empfangen wurden oder die Daten kein XML/HTML sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) weder auf
    `document` noch auf einen leeren String gesetzt ist.

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
- [Parsing und Serialisierung von XML](/de/docs/Web/XML/Parsing_and_serializing_XML)
- Parsen von XML in einen DOM-Baum: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Serialisierung eines DOM-Baumes in XML: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) (speziell die
  [`serializeToString()`](/de/docs/Web/API/XMLSerializer/serializeToString)-Methode)
