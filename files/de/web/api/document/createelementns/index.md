---
title: "Document: createElementNS() Methode"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Erstellt ein Element mit dem angegebenen Namespace-URI und qualifizierten Namen.

Um ein Element ohne Angabe eines Namespace-URIs zu erstellen, verwenden Sie die
[`createElement()`](/de/docs/Web/API/Document/createElement) Methode.

## Syntax

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den [Namespace-URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) angibt, der mit dem Element verknüpft werden soll.
    Die [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) Eigenschaft des erstellten Elements wird mit dem Wert von _namespaceURI_ initialisiert.
    Siehe [Gültige Namespace-URIs](#wichtige_namespace-uris).
- `qualifiedName`
  - : Ein String, der den Typ des zu erstellenden Elements angibt.
    Die [`nodeName`](/de/docs/Web/API/Node/nodeName) Eigenschaft des erstellten Elements wird mit dem Wert von _qualifiedName_ initialisiert.
- `options` {{Optional_Inline}}

  - : Ein optionales `ElementCreationOptions` Objekt, das eine einzelne Eigenschaft namens `is` enthält, deren Wert der Tag-Name für ein zuvor definiertes benutzerdefiniertes Element ist, das mit `customElements.define()` definiert wurde.
    Aus Gründen der Abwärtskompatibilität mit früheren Versionen der [Custom Elements-Spezifikation](https://www.w3.org/TR/custom-elements/)
    erlauben es einige Browser, hier einen String anstelle eines Objekts zu übergeben, wobei der Wert des Strings der Tag-Name des benutzerdefinierten Elements ist.
    Siehe [Erweiterung nativer HTML-Elemente](https://web.dev/articles/web-components) für weitere Informationen zur Verwendung dieses Parameters.

    Das neue Element erhält ein `is` Attribut, dessen Wert der Tag-Name des benutzerdefinierten Elements ist. Benutzerdefinierte Elemente sind ein experimentelles Feature, das nur in einigen Browsern verfügbar ist.

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri) kein gültiger [Namespace-URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`qualifiedName`](#qualifiedname) kein gültiger [XML-Name](https://www.w3.org/TR/REC-xml/#dt-name) ist; zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen enthält, die keine alphanumerischen Zeichen, Unterstriche, Bindestriche oder Punkte sind.

## Wichtige Namespace-URIs

- [HTML](/de/docs/Web/HTML)
  - : `http://www.w3.org/1999/xhtml`
- [SVG](/de/docs/Web/SVG)
  - : `http://www.w3.org/2000/svg`
- [MathML](/de/docs/Web/MathML)
  - : `http://www.w3.org/1998/Math/MathML`

## Beispiele

Dies erstellt ein neues `<div>` Element im {{Glossary("XHTML", "XHTML")}} Namespace und
fügt es dem vbox-Element hinzu. Auch wenn dies kein besonders nützliches XUL-Dokument ist, zeigt es dennoch die Verwendung von
Elementen aus zwei verschiedenen Namespaces innerhalb eines einzelnen Dokuments:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="application/javascript"><![CDATA[
 let container;
 let newdiv;
 let txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
   txtnode = document.createTextNode("This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
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
> Das oben angegebene Beispiel verwendet Inline-Skripte, die in XHTML-Dokumenten nicht empfohlen werden.
> Dieses spezielle Beispiel ist tatsächlich ein XUL-Dokument mit eingebettetem XHTML,
> jedoch gilt die Empfehlung dennoch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/de/docs/Web/API/Document/createTextNode)
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
- [Namespaces in XML](https://www.w3.org/TR/1999/REC-xml-names-19990114/)
