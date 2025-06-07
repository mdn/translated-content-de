---
title: "Dokument: createElementNS() Methode"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}

Erstellt ein Element mit dem angegebenen Namensraum-URI und qualifizierten Namen.

Um ein Element ohne Angabe eines Namensraum-URIs zu erstellen, verwenden Sie die [`createElement()`](/de/docs/Web/API/Document/createElement) Methode.

## Syntax

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) angibt, der mit dem Element verknüpft wird. Einige wichtige Namensraum-URIs sind:
    - [HTML](/de/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/de/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/de/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`
- `qualifiedName`
  - : Ein String, der den Typ des zu erstellenden Elements angibt. Die [`nodeName`](/de/docs/Web/API/Node/nodeName) Eigenschaft des erstellten Elements wird mit dem Wert von _qualifiedName_ initialisiert.
- `options` {{Optional_Inline}}

  - : Ein optionales `ElementCreationOptions` Objekt, das eine einzige Eigenschaft namens `is` enthält, deren Wert der Tag-Name für ein benutzerdefiniertes Element ist, das zuvor mittels `customElements.define()` definiert wurde. Aus Gründen der Abwärtskompatibilität erlauben einige Browser, hier einen String anstelle eines Objekts zu übergeben, wobei der Wert des Strings der Tag-Name des benutzerdefinierten Elements ist. Weitere Informationen zur Verwendung dieses Parameters finden Sie unter [Erweitern von nativen HTML-Elementen](https://web.dev/articles/web-components).

    Das neue Element erhält ein `is` Attribut, dessen Wert der Tag-Name des benutzerdefinierten Elements ist. Benutzerdefinierte Elemente sind ein experimentelles Feature, das nur in einigen Browsern verfügbar ist.

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`namespaceURI`](#namespaceuri) Wert kein gültiger Namensraum-URI ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`qualifiedName`](#qualifiedname) Wert kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder Punkt beginnt oder Zeichen enthält, die nicht alphanumerisch sind, keine Unterstriche, Bindestriche oder Punkte sind.

## Beispiele

Dies erstellt ein neues `<div>` Element im {{Glossary("XHTML", "XHTML")}} Namensraum und fügt es dem vbox-Element hinzu. Obwohl dies kein äußerst nützliches XUL-Dokument ist, zeigt es dennoch die Verwendung von Elementen aus zwei verschiedenen Namensräumen innerhalb eines einzelnen Dokuments:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script><![CDATA[
let container;
let newDiv;
let textNode;

function init() {
  container = document.getElementById("ContainerBox");
  newDiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  textNode = document.createTextNode(
    "This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.",
  );
  newDiv.appendChild(textNode);
  container.appendChild(newDiv);
}
]]></script>

 <vbox id="ContainerBox" flex="1">
  <html:div>
   The script on this page will add dynamic content below:
  </html:div>
 </vbox>

</page>
```

> [!NOTE]
> Das oben gegebene Beispiel verwendet Inline-Skripte, was in XHTML-Dokumenten nicht empfohlen wird. Dieses spezielle Beispiel ist tatsächlich ein XUL-Dokument mit eingebettetem XHTML, dennoch gilt die Empfehlung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/de/docs/Web/API/Document/createTextNode)
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
