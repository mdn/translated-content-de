---
title: "Dokument: createAttributeNS() Methode"
short-title: createAttributeNS()
slug: Web/API/Document/createAttributeNS
l10n:
  sourceCommit: 80058a757e45377c0b06e782a9618da65c7ced5a
---

{{ ApiRef("DOM") }}

Die **`createAttributeNS()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces erstellt ein neues Attributknoten mit dem angegebenen Namespace-URI und dem qualifizierten Namen.

Das erstellte Objekt ist ein Knoten, der das [`Attr`](/de/docs/Web/API/Attr) Interface implementiert. Das DOM erzwingt nicht, welche Art von Attributen auf diese Weise zu einem bestimmten Element hinzugefügt werden können.

## Syntax

```js-nolint
createAttributeNS(namespaceURI, qualifiedName)
```

### Parameter

- `namespaceURI`
  - : Ein String, der die [`namespaceURI`](/de/docs/Web/API/Attr/namespaceURI) angibt, die mit dem Attribut verknüpft werden soll, oder der leere String. In HTML-Dokumenten befinden sich die meisten Attribute im **Null-Namespace** – verwenden Sie hierfür den leeren String. Verwenden Sie einen spezifischen Namespace-URI nur, wenn Sie ein namespaced Attribut erstellen, wie etwa `xml:lang` oder `xml:space`. Einige Namespace-URIs sind:
    - XML: `http://www.w3.org/XML/1998/namespace` (für `xml:lang`, `xml:space`)
    - XMLNS: `http://www.w3.org/2000/xmlns/` (für `xmlns`, `xmlns:*`)
    - XLink: `http://www.w3.org/1999/xlink` (für `xlink:href`, `xlink:title`, etc.)
- `qualifiedName`
  - : Ein String, der den qualifizierten Namen des neuen Attributs enthält. Die [`name`](/de/docs/Web/API/Attr/name) Eigenschaft des erstellten Attributs wird mit diesem Wert initialisiert.

    Das Format des qualifizierten Namens ist `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein "kurzer Alias" für den Namespace. Das Präfix ist optional, aber wenn es angegeben wird, muss auch der `namespaceURI` Parameter angegeben werden. Wenn das Präfix auf `xml` oder `xmlns` gesetzt ist, muss `namespaceURI` auf `http://www.w3.org/XML/1998/namespace` bzw. `http://www.w3.org/2000/xmlns/` gesetzt werden.

        Der Wert wird verwendet, um die [`prefix`](/de/docs/Web/API/Attr/prefix) Eigenschaft des neuen Attributs zu initialisieren. Standardmäßig `null`.

    - `localName`
      - : Der lokale Name des Attributs. Der Wert wird verwendet, um die [`localName`](/de/docs/Web/API/Attr/localName) Eigenschaft des neuen Attributs zu initialisieren.

### Rückgabewert

Der neue [`Attr`](/de/docs/Web/API/Attr) Knoten.

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`namespaceURI`](#namespaceuri) Wert:
    - kein gültiger Namespace-URI ist.
    - auf den leeren String gesetzt ist, wenn `prefix` einen Wert hat.
    - nicht der Wert `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` ist, wenn [`prefix`](#prefix) auf `xml` oder `xmlns` gesetzt ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn entweder das `prefix` oder `localName` nicht gültig ist:
    - Das `prefix` muss mindestens ein Zeichen haben und darf kein ASCII-Leerzeichen, `NULL`, `/` oder `>` (U+0000, U+002F oder U+003E, jeweils) enthalten.
    - Das `localName` muss mindestens ein Zeichen haben und darf kein ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` (U+0000, U+002F, U+003D oder U+003E, jeweils) enthalten.

    > [!NOTE]
    > Früherer Versionen der Spezifikation waren restriktiver und erforderten, dass das `localName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

## Beispiele

### Erstellen eines namespaced Attributs

Dieses Beispiel erstellt ein `xml:lang` Attribut mit dem XML-Namespace und fügt es einem Absatz-Element hinzu. Dieses Attribut gibt die Sprache des Inhalts des Elements für die XML-Verarbeitung an.

```html
<p id="greeting">Bonjour!</p>
```

```js
const el = document.getElementById("greeting");
const attr = document.createAttributeNS(
  "http://www.w3.org/XML/1998/namespace",
  "xml:lang",
);
attr.value = "fr";
el.setAttributeNode(attr);
```

### Erstellen eines unpräfixierten Attributs

In HTML-Dokumenten befinden sich unpräfixierte Attribute (wie SVG-Präsentationsattribute wie `viewBox`) im Null-Namespace. Verwenden Sie den leeren String für den `namespaceURI` Parameter, um dies zu erreichen.

```html
<svg id="svg"></svg>
```

```js
const svg = document.getElementById("svg");
const attr = document.createAttributeNS("", "viewBox");
attr.value = "0 0 100 100";
svg.setAttributeNode(attr);
console.log(svg.getAttribute("viewBox")); // "0 0 100 100"
```

Beachten Sie, dass Sie in den meisten Fällen [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) anstelle von `createAttributeNS()` für unpräfixierte Attribute verwenden können:

```js
svg.setAttribute("viewBox", "0 0 100 100");
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
