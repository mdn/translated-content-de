---
title: "XMLHttpRequest: responseType-Eigenschaft"
short-title: responseType
slug: Web/API/XMLHttpRequest/responseType
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die {{domxref("XMLHttpRequest")}}-Eigenschaft **`responseType`** ist ein aufgezählter String-Wert, der den Datentyp der im Response enthaltenen Daten angibt.

Sie ermöglicht es dem Autor auch, den Antworttyp zu ändern. Wenn ein leerer String als Wert von `responseType` gesetzt wird, wird der Standardwert `text` verwendet.

## Wert

Ein String, der angibt, welchen Datentyp die Antwort enthält. Es können folgende Werte angenommen werden:

- `""`
  - : Ein leerer `responseType`-String entspricht `"text"`, dem Standardtyp.
- `"arraybuffer"`
  - : Die {{domxref("XMLHttpRequest.response", "response")}} ist ein JavaScript-{{jsxref("ArrayBuffer")}} mit Binärdaten.
- `"blob"`
  - : Die `response` ist ein {{domxref("Blob")}}-Objekt, das die Binärdaten enthält.
- `"document"`
  - : Die `response` ist ein {{Glossary("HTML")}}-{{domxref("Document")}} oder ein {{Glossary("XML")}}-{{domxref("XMLDocument")}}, je nach MIME-Typ der empfangenen Daten. Weitere Informationen zur Verwendung von XHR zum Abrufen von HTML-Inhalten finden Sie unter [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- `"json"`
  - : Die `response` ist ein JavaScript-Objekt, das durch Parsen des Inhalts der empfangenen Daten als {{Glossary("JSON")}} erstellt wurde.
- `"text"`
  - : Die `response` ist ein Text in einem String.

> [!NOTE]
> Beim Setzen von `responseType` auf einen bestimmten Wert sollte der Autor sicherstellen, dass der Server tatsächlich eine Antwort sendet, die mit diesem Format kompatibel ist. Falls der Server Daten zurückgibt, die nicht mit dem eingestellten `responseType` kompatibel sind, wird der Wert von {{domxref("XMLHttpRequest.response", "response")}} `null` sein.

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Es wurde versucht, den Wert von `responseType` in einem
    `XMLHttpRequest` zu ändern, der sich im synchronen Modus befindet, jedoch nicht in einem
    {{domxref("Worker")}}. Für weitere Details siehe [Einschränkungen für synchrones XHR](#einschränkungen_für_synchrones_xhr) unten.

## Anwendungsnotizen

### Einschränkungen für synchrones XHR

Sie können den Wert von `responseType` in einem synchronen
`XMLHttpRequest` nicht ändern, es sei denn, die Anfrage gehört zu einem {{domxref("Worker")}}.
Diese Einschränkung soll unter anderem sicherstellen, dass synchrone Operationen nicht für große Transaktionen verwendet werden, die den Haupt-Thread des Browsers blockieren und dadurch die Benutzererfahrung beeinträchtigen.

XHR-Anfragen sind standardmäßig asynchron; sie werden nur in den synchronen Modus versetzt, indem `false` als Wert des optionalen
`async`-Parameters bei einem Aufruf von {{domxref("XMLHttpRequest.open", "open()")}} übergeben wird.

### Einschränkungen in Arbeitern

Versuche, den Wert von `responseType` auf `document` zu setzen, werden in einem {{domxref("Worker")}} ignoriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- Die Antwortdaten: {{domxref("XMLHttpRequest.response", "response")}},
  {{domxref("XMLHttpRequest.responseText", "responseText")}}, und
  {{domxref("XMLHttpRequest.responseXML", "responseXML")}}
