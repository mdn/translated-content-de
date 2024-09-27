---
title: "XMLHttpRequest: responseType-Eigenschaft"
short-title: responseType
slug: Web/API/XMLHttpRequest/responseType
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Eigenschaft **`responseType`** ist ein aufzählender Zeichenfolgenwert, der den Typ der im Antwortobjekt enthaltenen Daten angibt.

Sie ermöglicht es dem Autor auch, den Antworttyp zu ändern. Wenn ein leerer String als Wert von `responseType` gesetzt wird, wird der Standardwert `text` verwendet.

## Wert

Ein String, der angibt, welche Art von Daten die Antwort enthält. Er kann die folgenden Werte annehmen:

- `""`
  - : Ein leerer `responseType`-String entspricht `"text"`, dem Standardtyp.
- `"arraybuffer"`
  - : Die [`response`](/de/docs/Web/API/XMLHttpRequest/response) ist ein JavaScript {{jsxref("ArrayBuffer")}}, das Binärdaten enthält.
- `"blob"`
  - : Die `response` ist ein [`Blob`](/de/docs/Web/API/Blob)-Objekt, das die Binärdaten enthält.
- `"document"`
  - : Die `response` ist ein [HTML](/de/docs/Glossary/HTML)-[`Document`](/de/docs/Web/API/Document) oder ein [XML](/de/docs/Glossary/XML)-[`XMLDocument`](/de/docs/Web/API/XMLDocument), je nach MIME-Typ der empfangenen Daten. Weitere Informationen zum Abrufen von HTML-Inhalten mit XHR finden Sie unter [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- `"json"`
  - : Die `response` ist ein JavaScript-Objekt, das durch Parsen der empfangenen Daten als [JSON](/de/docs/Glossary/JSON) erstellt wurde.
- `"text"`
  - : Die `response` ist ein Text in einer Zeichenkette.

> [!NOTE]
> Beim Setzen von `responseType` auf einen bestimmten Wert sollte der Autor sicherstellen, dass der Server tatsächlich eine Antwort sendet, die mit diesem Format kompatibel ist. Wenn der Server Daten zurückgibt, die nicht mit dem gesetzten `responseType` kompatibel sind, wird der Wert von [`response`](/de/docs/Web/API/XMLHttpRequest/response) `null` sein.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es wurde versucht, den Wert von `responseType` bei einem `XMLHttpRequest` zu ändern, der sich im synchronen Modus befindet, jedoch nicht in einem [`Worker`](/de/docs/Web/API/Worker). Für weitere Details siehe [Einschränkungen bei synchronem XHR](#einschränkungen_bei_synchronem_xhr) unten.

## Verwendungshinweise

### Einschränkungen bei synchronem XHR

Sie können den Wert von `responseType` in einem synchronen `XMLHttpRequest` nicht ändern, außer wenn die Anfrage zu einem [`Worker`](/de/docs/Web/API/Worker) gehört. Diese Einschränkung soll teilweise sicherstellen, dass synchrone Operationen nicht für große Transaktionen verwendet werden, die den Hauptthread des Browsers blockieren und dadurch die Benutzererfahrung beeinträchtigen.

XHR-Anfragen sind standardmäßig asynchron; sie werden nur in den synchronen Modus versetzt, indem `false` als Wert des optionalen `async`-Parameters beim Aufruf von [`open()`](/de/docs/Web/API/XMLHttpRequest/open) übergeben wird.

### Einschränkungen in Workern

Versuche, den Wert von `responseType` auf `document` zu setzen, werden in einem [`Worker`](/de/docs/Web/API/Worker) ignoriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- Die Antwortdaten: [`response`](/de/docs/Web/API/XMLHttpRequest/response), [`responseText`](/de/docs/Web/API/XMLHttpRequest/responseText) und [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)
