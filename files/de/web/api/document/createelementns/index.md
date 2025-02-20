---
title: "Dokumentation: createElementNS()-Methode"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{APIRef("DOM")}}

Erstellt ein Element mit der angegebenen Namespace-URI und dem qualifizierten Namen.

Um ein Element zu erstellen, ohne eine Namespace-URI anzugeben, verwenden Sie die Methode
[`createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Parameter

- `namespaceURI`
  - : Ein String, der die [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) angibt, die mit dem Element verknüpft werden soll. Einige wichtige Namespace-URIs sind:
    - [HTML](/de/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/de/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/de/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`
- `qualifiedName`
  - : Ein String, der den Typ des zu erstellenden Elements angibt.
    Die [`nodeName`](/de/docs/Web/API/Node/nodeName)-Eigenschaft des erstellten Elements wird mit dem Wert von _qualifiedName_ initialisiert.
- `options` {{Optional_Inline}}

  - : Ein optionales `ElementCreationOptions`-Objekt, das eine einzelne Eigenschaft namens `is` enthält, deren Wert der Tag-Name eines benutzerdefinierten Elements ist, das zuvor mit `customElements.define()` definiert wurde.
    Aus Gründen der Abwärtskompatibilität mit früheren Versionen der [Custom Elements-Spezifikation](https://www.w3.org/TR/custom-elements/)
    erlauben es einige Browser, hier einen String anstelle eines Objekts zu übergeben, wobei der Wert des Strings der Tag-Name des benutzerdefinierten Elements ist.
    Siehe [Erweitern nativer HTML-Elemente](https://web.dev/articles/web-components) für weitere Informationen zur Nutzung dieses Parameters.

    Das neue Element erhält ein `is`-Attribut, dessen Wert der Tag-Name des benutzerdefinierten Elements ist. Benutzerdefinierte Elemente sind ein experimentelles Feature, das nur in einigen Browsern verfügbar ist.

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri) keine gültige Namespace-URI ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`qualifiedName`](#qualifiedname) kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die nicht alphanumerisch, Unterstriche, Bindestriche oder Punkte sind.

## Beispiele

Dies erstellt ein neues `<div>`-Element im {{Glossary("XHTML", "XHTML")}}-Namespace und
hängt es an das `vbox`-Element an. Obwohl dies kein besonders nützliches XUL-Dokument ist, demonstriert es die Verwendung von
Elementen aus zwei verschiedenen Namespaces innerhalb eines einzigen Dokuments:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="application/javascript"><![CDATA[
 let container;
 let newDiv;
 let textNode;

 function init(){
   container = document.getElementById("ContainerBox");
   newDiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
   textNode = document.createTextNode("This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.");
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
> Das oben gezeigte Beispiel verwendet inline Script, was in XHTML-Dokumenten nicht empfohlen wird.
> Dieses spezifische Beispiel ist tatsächlich ein XUL-Dokument mit eingebettetem XHTML,
> jedoch gilt die Empfehlung dennoch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/de/docs/Web/API/Document/createTextNode)
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
