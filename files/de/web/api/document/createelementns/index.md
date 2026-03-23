---
title: "Dokument: createElementNS() Methode"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("DOM")}}

Die **`createElementNS()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces erstellt ein neues Element mit dem angegebenen Namensraum-URI und qualifiziertem Namen.

Dies ist nützlich in Dokumenten mit gemischten Namensräumen, wie SVG oder MathML eingebettet in HTML, wo der Parser den Namensraum nicht zuverlässig ableiten kann.

Die [`createElement()`](/de/docs/Web/API/Document/createElement) Methode ist einfacher, wenn Sie ein einfaches HTML-Element erstellen möchten.

## Syntax

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) angibt, der mit dem Element verknüpft werden soll. Einige wichtige Namensraum-URIs sind:
    - [HTML](/de/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/de/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/de/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`

- `qualifiedName`
  - : Ein String, der den qualifizierten Namen des neuen Elements enthält.
    Die [`nodeName`](/de/docs/Web/API/Node/nodeName) Eigenschaft des erstellten Elements wird mit diesem Wert initialisiert.

    Das Format des qualifizierten Namens ist `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein "kurzes Alias" für den Namensraum.
        Der Präfix ist optional, aber wenn er angegeben wird, muss auch der `namespaceURI` Parameter angegeben werden.
        Wenn der Präfix auf `xml` oder `xmlns` gesetzt ist, muss der `namespaceURI` auf `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/`, bzw. gesetzt sein.

        Der Wert wird verwendet, um die [`prefix`](/de/docs/Web/API/Element/prefix) Eigenschaft des neuen Elements zu initialisieren.
        Standardwert ist `null`.

    - `localName`
      - : Der lokale Name des Elements.
        Der Wert wird verwendet, um die [`localName`](/de/docs/Web/API/Element/localName) Eigenschaft des neuen Elements zu initialisieren.

- `options` {{Optional_Inline}}
  - : Ein Objekt mit den folgenden optionalen Eigenschaften (beachten Sie, dass nur eine von `is` und `customElementRegistry` gesetzt werden kann):
    - `is` {{Optional_Inline}}
      - : Ein String, der den Tag-Namen für ein zuvor mit [`customElements.define()`](/de/docs/Web/API/CustomElementRegistry/define) definiertes benutzerdefiniertes Element definiert. Das neue Element erhält ein `is` Attribut, dessen Wert der Tag-Name des benutzerdefinierten Elements ist.
    - `customElementRegistry` {{Optional_Inline}}
      - : Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), der das [Abgegrenzte benutzerdefinierte Element-Registrierungsdokument](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) eines benutzerdefinierten Elements setzt.

    Aus Gründen der Abwärtskompatibilität erlauben es einige Browser, hier einen String anstelle eines Objekts zu übergeben, wobei der Wert des Strings der Tag-Name des benutzerdefinierten Elements ist. Siehe [Erweitern nativer HTML-Elemente](https://web.dev/articles/web-components) für weitere Informationen zur Verwendung dieses Parameters.

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceURI) ist:
    - kein gültiger Namensraum-URI.
    - auf den leeren String gesetzt, wenn `prefix` einen Wert hat.
    - nicht der Wert `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/`, wenn [`prefix`](#prefix) auf `xml` oder `xmlns` gesetzt ist, bzw.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder der `prefix` oder `localName` nicht gültig ist:
    - Der `prefix` muss mindestens ein Zeichen haben und darf kein ASCII-Leerzeichen, `NULL`, `/` oder `>` (U+0000, U+002F oder U+003E, entsprechend) enthalten.
    - Der `localName` ist ein gültiger Elementname, wenn er eine Mindestlänge von 1 hat und:
      - er mit einem Alphabet-Zeichen beginnt und kein ASCII-Leerzeichen, `NULL`, `/`, oder `>` (U+0000, U+002F oder U+003E, entsprechend) enthält.
      - er beginnt mit `:` (U+003A), `_` (U+005F) oder einem der Zeichen im Bereich U+0080 bis U+10FFFF (einschließlich) und die verbleibenden Codepunkte nur diese selben Zeichen zusammen mit den ASCII-alphanumerischen Zeichen, `-` (U+002D), und `.` (U+002E) enthalten,

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und forderten, dass der `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn sowohl die [`is`](#is) als auch die [`customElementRegistry`](#customElementRegistry) Optionen angegeben sind.

## Beispiele

### Grundlegende Nutzung

Dies zeigt, wie Sie ein neues `<div>` Element im {{Glossary("XHTML", "XHTML")}}-Namensraum erstellen.

```js
const divElementXHTML = document.createElementNS(
  "http://www.w3.org/1999/xhtml",
  "div",
);

// This is equivalent!
const divElementHTML = document.createElement("div");
```

### Erstellen eines SVG-Elements

Dieses Beispiel zeigt, wie Sie ein SVG-Element ([`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)) erstellen und es dem HTML `<body>` Element anhängen können.

Die Verwendung von `createElementNS()` mit dem SVG-Namensraum ist notwendig, wenn mit einem HTML-Dokument gearbeitet wird.
Wenn Sie {{DOMxRef("Document.createElement()", "createElement(\"svg\")")}} aufrufen würden, würde ein [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement) zurückgegeben, und das SVG würde nicht gerendert werden.

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
