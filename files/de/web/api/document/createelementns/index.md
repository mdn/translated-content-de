---
title: "Dokument: createElementNS() Methode"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Erstellt ein Element mit dem angegebenen Namespace-URI und qualifizierten Namen.

Um ein Element ohne Angabe eines Namespace-URI zu erstellen, verwenden Sie die
[`createElement()`](/de/docs/Web/API/Document/createElement) Methode.

## Syntax

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den dem Element zuzuordnenden [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) angibt. Einige wichtige Namespace-URIs sind:
    - [HTML](/de/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/de/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/de/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`
- `qualifiedName`
  - : Ein String, der den Typ des zu erstellenden Elements angibt.
    Die [`nodeName`](/de/docs/Web/API/Node/nodeName) Eigenschaft des erstellten Elements wird mit dem Wert von _qualifiedName_ initialisiert.
- `options` {{Optional_Inline}}

  - : Ein optionales `ElementCreationOptions` Objekt, das eine einzige Eigenschaft namens `is` enthält, deren Wert der Tag-Name für ein zuvor mit `customElements.define()` definiertes benutzerdefiniertes Element ist.
    Aus Gründen der Rückwärtskompatibilität erlauben einige Browser, dass Sie hier statt eines Objekts einen String übergeben, wobei der Wert des Strings der Tag-Name des benutzerdefinierten Elements ist.
    Siehe [Erweitern von nativen HTML-Elementen](https://web.dev/articles/web-components) für weitere Informationen zur Verwendung dieses Parameters.

    Das neue Element erhält ein `is` Attribut, dessen Wert der Tag-Name des benutzerdefinierten Elements ist. Benutzerdefinierte Elemente sind eine experimentelle Funktion, die nur in einigen Browsern verfügbar ist.

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri) kein gültiger Namespace-URI ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`qualifiedName`](#qualifiedname) kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

## Beispiele

Dies erstellt ein neues `<div>` Element im {{Glossary("XHTML", "XHTML")}} Namespace und hängt es an das `vbox` Element an. Obwohl dies kein äußerst nützliches XUL-Dokument ist, demonstriert es die Verwendung von Elementen aus zwei verschiedenen Namespaces innerhalb eines einzelnen Dokuments:

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
> Das oben gegebene Beispiel verwendet Inline-Script, das in XHTML-Dokumenten nicht empfohlen wird. Dieses spezielle Beispiel ist tatsächlich ein XUL-Dokument mit eingebettetem XHTML, jedoch gilt die Empfehlung weiterhin.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/de/docs/Web/API/Document/createTextNode)
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
