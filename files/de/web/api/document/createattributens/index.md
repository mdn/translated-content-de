---
title: "Dokument: createAttributeNS() Methode"
short-title: createAttributeNS()
slug: Web/API/Document/createAttributeNS
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{ ApiRef("DOM") }}

Die **`createAttributeNS()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle erstellt einen neuen Attributknoten mit dem angegebenen Namespace-URI und qualifizierten Namen.

Das erstellte Objekt ist ein Knoten, der die [`Attr`](/de/docs/Web/API/Attr) Schnittstelle implementiert.
Das DOM erzwingt nicht, welche Art von Attributen auf diese Weise einem bestimmten Element hinzugefügt werden können.

## Syntax

```js-nolint
createAttributeNS(namespaceURI, qualifiedName)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den [`namespaceURI`](/de/docs/Web/API/Attr/namespaceURI) angibt, der dem Attribut zugeordnet werden soll, oder der leere String.
    Einige wichtige Namespace-URIs sind:
    - [HTML](/de/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/de/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/de/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`
- `qualifiedName`
  - : Ein String, der den qualifizierten Namen des neuen Attributs enthält.
    Die [`name`](/de/docs/Web/API/Attr/name) Eigenschaft des erstellten Attributs wird mit diesem Wert initialisiert.

    Das Format des qualifizierten Namens ist `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein "kurzes Alias" für den Namespace.
        Das Präfix ist optional, aber wenn es angegeben wird, muss auch der `namespaceURI` Parameter angegeben werden.
        Wenn das Präfix auf `xml` oder `xmlns` gesetzt ist, muss der `namespaceURI` auf `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` gesetzt werden.

        Der Wert wird verwendet, um die [`prefix`](/de/docs/Web/API/Attr/prefix) Eigenschaft des neuen Attributs zu initialisieren.
        Standardmäßig `null`.

    - `localName`
      - : Der lokale Name des Attributs.
        Der Wert wird verwendet, um die [`localName`](/de/docs/Web/API/Attr/localName) Eigenschaft des neuen Attributs zu initialisieren.

### Rückgabewert

Der neue [`Attr`](/de/docs/Web/API/Attr) Knoten.

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceURI):
    - kein gültiger Namespace-URI ist.
    - auf den leeren String gesetzt ist, wenn `prefix` einen Wert hat.
    - nicht `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` ist, wenn [`prefix`](#prefix) entsprechend auf `xml` oder `xmlns` gesetzt ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder das `prefix` oder `localName` nicht gültig ist:
    - Das `prefix` muss mindestens ein Zeichen haben und darf keine ASCII-Leerzeichen, `NULL`, `/` oder `>` enthalten (U+0000, U+002F oder U+003E, jeweils).
    - Das `localName` muss mindestens ein Zeichen haben und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` enthalten (U+0000, U+002F, U+003D oder U+003E, jeweils).

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und verlangten, dass das `localName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

## Beispiele

### Grundlegende Verwendung

```js
const node = document.getElementById("svg");
const a = document.createAttributeNS("http://www.w3.org/2000/svg", "viewBox");
a.value = "0 0 100 100";
node.setAttributeNode(a);
console.log(node.getAttribute("viewBox")); // "0 0 100 100"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
