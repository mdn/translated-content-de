---
title: "Dokument: createElementNS()-Methode"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

Die **`createElementNS()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle erstellt ein neues Element mit dem angegebenen Namensraum-URI und qualifiziertem Namen.

Dies ist nützlich in Dokumenten mit gemischtem Namensraum, wie SVG oder MathML, die in HTML eingebettet sind, wo der Parser den Namensraum nicht zuverlässig ableiten kann.

Die [`createElement()`](/de/docs/Web/API/Document/createElement)-Methode ist einfacher, wenn Sie ein einfaches HTML-Element erstellen möchten.

## Syntax

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) angibt, der dem Element zugeordnet wird. Einige wichtige Namensraum-URIs sind:
    - [HTML](/de/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/de/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/de/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`

- `qualifiedName`
  - : Ein String, der den qualifizierten Namen des neuen Elements enthält.
    Die [`nodeName`](/de/docs/Web/API/Node/nodeName)-Eigenschaft des erstellten Elements wird mit diesem Wert initialisiert.

    Das Format des qualifizierten Namens ist `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein "kurzes Alias" für den Namensraum.
        Das Präfix ist optional, aber wenn es angegeben wird, muss auch der `namespaceURI`-Parameter angegeben werden.
        Wenn das Präfix auf `xml` oder `xmlns` gesetzt ist, muss `namespaceURI` auf `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` gesetzt werden, beziehungsweise.

        Der Wert wird verwendet, um die neue [`prefix`](/de/docs/Web/API/Element/prefix)-Eigenschaft des Elements zu initialisieren.
        Standardmäßig auf `null` gesetzt.

    - `localName`
      - : Der lokale Name des Elements.
        Der Wert wird verwendet, um die neue [`localName`](/de/docs/Web/API/Element/localName)-Eigenschaft des Elements zu initialisieren.

- `options` {{Optional_Inline}}
  - : Ein Objekt mit den folgenden optionalen Eigenschaften (beachten Sie, dass nur eine von `is` und `customElementRegistry` festgelegt werden darf):
    - `is` {{Optional_Inline}}
      - : Ein String, der den Tag-Namen für ein zuvor definiertes benutzerdefiniertes Element mittels [`customElements.define()`](/de/docs/Web/API/CustomElementRegistry/define) definiert.
        Das neue Element erhält ein `is`-Attribut, dessen Wert der Tag-Name des benutzerdefinierten Elements ist.
    - `customElementRegistry` {{Optional_Inline}}
      - : Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), das das [spezifische Register für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) eines benutzerdefinierten Elements festlegt.

    Aus Gründen der Rückwärtskompatibilität erlauben einige Browser, hier einen String statt eines Objekts zu übergeben, wobei der Wert des Strings der Tag-Name des benutzerdefinierten Elements ist.
    Weitere Informationen zur Verwendung dieses Parameters finden Sie unter [Erweiterung von nativen HTML-Elementen](https://web.dev/articles/web-components).

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`namespaceURI`](#namespaceuri)-Wert:
    - kein gültiger Namensraum-URI ist.
    - auf den leeren String gesetzt ist, wenn `prefix` einen Wert hat.
    - nicht der Wert `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` ist, wenn [`prefix`](#prefix) auf `xml` oder `xmlns` gesetzt ist, beziehungsweise.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder das `prefix` oder `localName` nicht gültig ist:
    - Das `prefix` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/`, oder `>` (U+0000, U+002F, oder U+003E, beziehungsweise) enthalten.
    - Das `localName` ist ein gültiger Elementname, wenn es eine Mindestlänge von 1 hat und:
      - es mit einem alphabetischen Zeichen beginnt und keine ASCII-Leerzeichen, `NULL`, `/`, oder `>` (U+0000, U+002F, oder U+003E, beziehungsweise) enthält.
      - es mit `:` (U+003A), `_` (U+005F), oder einem Zeichen im Bereich U+0080 bis U+10FFFF (einschließlich) beginnt _und_ die verbleibenden Codepunkte nur diese gleichen Zeichen sowie die ASCII-alphanumerischen Zeichen, `-` (U+002D), und `.` (U+002E) umfassen,

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und verlangten, dass der `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn sowohl die [`is`](#is)- als auch die [`customElementRegistry`](#customelementregistry)-Optionen angegeben sind.

## Beispiele

### Grundlegende Verwendung

Dies zeigt, wie man ein neues `<div>`-Element im {{Glossary("XHTML", "XHTML")}}-Namensraum erstellt.

```js
const divElementXHTML = document.createElementNS(
  "http://www.w3.org/1999/xhtml",
  "div",
);

// This is equivalent!
const divElementHTML = document.createElement("div");
```

### Erstellen eines SVG-Elements

Dieses Beispiel zeigt, wie Sie ein SVG-Element ([`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)) erstellen und an das HTML-`<body>`-Element anhängen können.

Die Verwendung von `createElementNS()` mit dem SVG-Namespace ist notwendig, wenn Sie mit einem HTML-Dokument arbeiten.
Wenn Sie {{DOMxRef("Document.createElement()", "createElement(\"svg\")")}} aufrufen würden, würde ein [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) zurückgegeben und das SVG nicht gerendert.

```js
const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "100");
svg.setAttribute("height", "100");

const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("cx", "50");
circle.setAttribute("cy", "50");
circle.setAttribute("r", "40");
circle.setAttribute("fill", "steelblue");

svg.appendChild(circle);
document.body.appendChild(svg);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/de/docs/Web/API/Document/createTextNode)
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)
