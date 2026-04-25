---
title: "DOMImplementation: createDocument() Methode"
short-title: createDocument()
slug: Web/API/DOMImplementation/createDocument
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{ApiRef("DOM")}}

Die **`createDocument()`** Methode der [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle erstellt und gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurück.

## Syntax

```js-nolint
createDocument(namespaceURI, qualifiedName)
createDocument(namespaceURI, qualifiedName, documentType)
```

### Parameter

- `namespaceURI`
  - : Ein String, der die Namespace-URI des zu erstellenden Dokuments angibt, oder `null`, wenn das Dokument keinem Namespace angehört.
- `qualifiedName`
  - : Ein String, der den qualifizierten Namen des zu erstellenden Dokuments angibt.
    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird wie ein leerer String (`""`) behandelt.

    Das Format des qualifizierten Namens lautet `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein „kurzes Alias“ für den Namespace.
        Der Präfix ist optional, aber wenn er angegeben ist, muss auch der `namespaceURI`-Parameter angegeben werden.
        Wenn der Präfix auf `xml` oder `xmlns` gesetzt ist, muss der `namespaceURI` auf `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` gesetzt werden.
        Standardmäßig `null`.

    - `localName`
      - : Der lokale Name des Dokuments.

- `documentType` {{optional_inline}}
  - : Der [`DocumentType`](/de/docs/Web/API/DocumentType) des zu erstellenden Dokuments. Standardmäßig `null`.

### Rückgabewert

Das neu erstellte [`XMLDocument`](/de/docs/Web/API/XMLDocument).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri):
    - keine gültige Namespace-URI ist.
    - auf einen leeren String gesetzt ist, wenn `prefix` einen Wert hat.
    - nicht der Wert `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` ist, wenn [`prefix`](#prefix) auf `xml` oder `xmlns` gesetzt ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder der `prefix` oder `localName` nicht gültig ist:
    - Der `prefix` muss mindestens ein Zeichen haben und darf keine ASCII-Leerzeichen, `NULL`, `/` oder `>` (U+0000, U+002F oder U+003E, jeweils) enthalten.
    - Der `localName` ist ein gültiger Elementname, wenn er eine Länge von mindestens 1 hat und:
      - er mit einem Buchstaben beginnt und keine ASCII-Leerzeichen, `NULL`, `/` oder `>` (U+0000, U+002F oder U+003E, jeweils) enthält.
      - er mit `:` (U+003A), `_` (U+005F) oder irgendeinem Zeichen im Bereich von U+0080 bis U+10FFFF (inklusive) beginnt und die restlichen Codepunkte nur diese gleichen Zeichen sowie die ASCII-alphanumerischen Zeichen, `-` (U+002D) und `.` (U+002E) umfassen.

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und erforderten, dass der `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

## Beispiele

### Grundlegende Verwendung

```js
const doc = document.implementation.createDocument(
  "http://www.w3.org/1999/xhtml",
  "html",
  null,
);
const body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
body.setAttribute("id", "abc");
doc.documentElement.appendChild(body);
alert(doc.getElementById("abc")); // [object HTMLBodyElement]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`DOMImplementation`](/de/docs/Web/API/DOMImplementation) Schnittstelle, zu der es gehört.
