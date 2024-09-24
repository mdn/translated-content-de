---
title: "XMLHttpRequest: responseXML Eigenschaft"
short-title: responseXML
slug: Web/API/XMLHttpRequest/responseXML
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die schreibgeschützte Eigenschaft **`XMLHttpRequest.responseXML`** gibt ein {{domxref("Document")}} zurück, das das durch die Anfrage abgerufene HTML- oder XML-Dokument enthält; oder `null`, wenn die Anfrage erfolglos war, noch nicht gesendet wurde oder wenn die Daten nicht als XML oder HTML geparst werden können.

> [!NOTE]
> Der Name `responseXML` ist ein Artefakt der Geschichte dieser Eigenschaft; sie funktioniert sowohl für HTML als auch für XML.

Üblicherweise wird die Antwort als "`text/xml`" geparst. Ist die {{domxref("XMLHttpRequest.responseType", "responseType")}} auf "`document`" gesetzt und die Anfrage wurde asynchron durchgeführt, wird die Antwort stattdessen als "`text/html`" geparst. `responseXML` ist `null` für alle anderen Datentypen sowie für [`data:` URLs](/de/docs/Web/URI/Schemes/data).

Wenn der Server den {{HTTPHeader("Content-Type")}} nicht als "`text/xml`" oder "`application/xml`" spezifiziert, kann {{domxref("XMLHttpRequest.overrideMimeType()")}} verwendet werden, um es dennoch als XML zu parsen.

Diese Eigenschaft ist in Arbeitern nicht verfügbar.

## Wert

Ein {{domxref("Document")}}, das aus dem XML oder HTML geparst wurde, das mit {{domxref("XMLHttpRequest")}} empfangen wurde, oder `null`, wenn keine Daten empfangen wurden oder die Daten kein XML/HTML sind.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wirft einen Fehler, wenn die {{domxref("XMLHttpRequest.responseType", "responseType")}} weder `document` noch ein leerer String ist.

## Beispiele

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server");

// Wenn spezifiziert, muss responseType ein leerer String oder "document" sein
xhr.responseType = "document";

// Erzwingen, dass die Antwort als XML geparst wird
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

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequest.response")}}
- {{domxref("XMLHttpRequest.responseType")}}
- [Parsing und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML)
- Parsen von XML in einen DOM-Baum: {{domxref("DOMParser")}}
- Serialisieren eines DOM-Baums in XML: {{domxref("XMLSerializer")}} (insbesondere die Methode {{domxref("XMLSerializer.serializeToString", "serializeToString()")}})
