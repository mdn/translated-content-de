---
title: "DOMParser: parseFromString() Methode"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOMParser")}}

Die **`parseFromString()`**-Methode des [`DOMParser`](/de/docs/Web/API/DOMParser)-Interfaces analysiert einen String, der entweder HTML oder XML enthält, und gibt ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurück.

> [!NOTE]
> Die statische Methode [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) bietet eine benutzerfreundlichere Alternative zum Parsen von HTML-Strings in ein [`Document`](/de/docs/Web/API/Document).

## Syntax

```js-nolint
parseFromString(string, mimeType)
```

### Parameter

- `string`
  - : Der zu parsende String. Er muss ein {{Glossary("HTML", "HTML")}}-, {{Glossary("xml", "xml")}}-, {{Glossary("XHTML", "XHTML")}}- oder {{Glossary("svg", "svg")}}-Dokument enthalten.
- `mimeType`

  - : Ein String. Dieser String bestimmt, ob der XML-Parser oder der HTML-Parser verwendet wird, um den String zu parsen. Gültige Werte sind:

    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

    Ein Wert von `text/html` ruft den HTML-Parser auf, und die Methode gibt ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zurück. Jedes {{HTMLElement("script")}}-Element wird als nicht ausführbar markiert, und der Inhalt von {{HTMLElement("noscript")}} wird als Markup geparst.

    Die anderen gültigen Werte (`text/xml`, `application/xml`, `application/xhtml+xml` und `image/svg+xml`) sind funktional gleichwertig. Sie alle rufen den XML-Parser auf, und die Methode gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurück.

    Jeder andere Wert ist ungültig und führt zu einem [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

### Rückgabewert

Ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder ein [`XMLDocument`](/de/docs/Web/API/XMLDocument), abhängig vom `mimeType`-Argument.

## Beispiele

### Parsing von XML, SVG und HTML

Beachten Sie, dass ein MIME-Typ von `text/html` den HTML-Parser aufruft und jeder andere gültige MIME-Typ den XML-Parser aufruft. Die MIME-Typen `application/xml` und `image/svg+xml` im folgenden Beispiel sind funktional identisch – letzteres enthält keine SVG-spezifischen Parsing-Regeln. Die Unterscheidung zwischen den beiden dient nur der Klarheit des Codes.

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const svgString = '<circle cx="50" cy="50" r="50"/>';
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
// XMLDocument

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument

console.log(doc1.documentElement.textContent);
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"
```

### Fehlerbehandlung

Wenn der XML-Parser mit einem String verwendet wird, der kein wohlgeformtes XML darstellt, enthält das von `parseFromString` zurückgegebene [`XMLDocument`](/de/docs/Web/API/XMLDocument) einen `<parsererror>`-Knoten, der die Art des Parsing-Fehlers beschreibt.

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the missing closing tag";
const doc = parser.parseFromString(xmlString, "application/xml");
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  // parsing failed
} else {
  // parsing succeeded
}
```

Zusätzlich kann der Parsing-Fehler in der JavaScript-Konsole des Browsers gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}}-Dokumente.
