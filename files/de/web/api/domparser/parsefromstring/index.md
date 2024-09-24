---
title: "DOMParser: parseFromString()-Methode"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOMParser")}}

Die **`parseFromString()`**-Methode der {{domxref("DOMParser")}}-Schnittstelle analysiert einen String, der entweder HTML oder XML enthält, und gibt ein {{domxref("HTMLDocument")}} oder ein {{domxref("XMLDocument")}} zurück.

> [!NOTE]
> Die [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) statische Methode bietet eine ergonomische Alternative zum Parsen von HTML-Strings in ein {{domxref("Document")}}.

## Syntax

```js-nolint
parseFromString(string, mimeType)
```

### Parameter

- `string`
  - : Der zu parsende String. Er muss entweder ein {{Glossary("HTML")}}, {{Glossary("xml")}}, {{Glossary("XHTML")}}, oder {{Glossary("svg")}} Dokument enthalten.
- `mimeType`

  - : Ein String. Dieser String bestimmt, ob der XML-Parser oder der HTML-Parser zum Parsen des Strings verwendet wird. Gültige Werte sind:

    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

    Ein Wert von `text/html` wird den HTML-Parser aufrufen, und die Methode wird ein {{domxref("HTMLDocument")}} zurückgeben. Jedes {{HTMLElement("script")}}-Element wird als nicht ausführbar markiert, und die Inhalte von {{HTMLElement("noscript")}} werden als Markup geparst.

    Die anderen gültigen Werte (`text/xml`, `application/xml`, `application/xhtml+xml` und `image/svg+xml`) sind funktional äquivalent. Sie alle rufen den XML-Parser auf, und die Methode wird ein {{domxref("XMLDocument")}} zurückgeben.

    Jeder andere Wert ist ungültig und wird einen [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) auslösen.

### Rückgabewert

Ein {{domxref("HTMLDocument")}} oder ein {{domxref("XMLDocument")}}, abhängig vom `mimeType`-Argument.

## Beispiele

### Parsen von XML, SVG und HTML

Beachten Sie, dass ein MIME-Typ von `text/html` den HTML-Parser aufruft und jeder andere gültige MIME-Typ den XML-Parser aufruft. Die MIME-Typen `application/xml` und `image/svg+xml` im untenstehenden Beispiel sind funktional identisch — der letztere enthält keine SVG-spezifischen Parsingregeln. Die Unterscheidung zwischen den beiden dient lediglich dazu, die Absicht des Codes zu verdeutlichen.

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

Bei Verwendung des XML-Parsers mit einem String, der kein wohlgeformtes XML darstellt, enthält das von `parseFromString` zurückgegebene {{domxref("XMLDocument")}} einen `<parsererror>`-Knoten, der die Art des Parsingfehlers beschreibt.

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

Darüber hinaus kann der Parsingfehler an die JavaScript-Konsole des Browsers gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}}-Dokumente.
