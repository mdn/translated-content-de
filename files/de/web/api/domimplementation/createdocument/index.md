---
title: "DOMImplementation: createDocument()-Methode"
short-title: createDocument()
slug: Web/API/DOMImplementation/createDocument
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{ApiRef("DOM")}}

Die **`createDocument()`**-Methode des [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interfaces erstellt und gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurück.

## Syntax

```js-nolint
createDocument(namespaceURI, qualifiedName)
createDocument(namespaceURI, qualifiedName, documentType)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namespace-URI des zu erstellenden Dokuments enthält, oder `null`, wenn das Dokument zu keinem gehört.
- `qualifiedName`
  - : Ein String, der den qualifizierten Namen des zu erstellenden Dokuments enthält.
    Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie der leere String (`""`) behandelt.

    Das Format des qualifizierten Namens lautet `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein "kurzes Alias" für den Namespace.
        Das Präfix ist optional, aber wenn es angegeben wird, muss auch der `namespaceURI`-Parameter angegeben werden.
        Wenn das Präfix auf `xml` oder `xmlns` gesetzt ist, muss der `namespaceURI` auf `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` gesetzt werden.
        Standardmäßig `null`.

    - `localName`
      - : Der lokale Name des Dokuments.

- `documentType` {{optional_inline}}
  - : Der [`DocumentType`](/de/docs/Web/API/DocumentType) des zu erstellenden Dokuments. Standardmäßig `null`.

### Rückgabewert

Das neu erstellte [`XMLDocument`](/de/docs/Web/API/XMLDocument).

### Ausnahmen

- `NamespaceError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von [`namespaceURI`](#namespaceuri) wie folgt ist:
    - kein gültiger Namespace-URI.
    - auf den leeren String gesetzt ist, obwohl `prefix` einen Wert hat.
    - nicht der Wert `http://www.w3.org/XML/1998/namespace` oder `http://www.w3.org/2000/xmlns/` ist, wenn [`prefix`](#prefix) auf `xml` oder `xmlns` gesetzt ist.
- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder das `prefix` oder `localName` ungültig ist:
    - Das `prefix` muss mindestens ein Zeichen haben und darf keine ASCII-Leerzeichen, `NULL`, `/` oder `>` (U+0000, U+002F, oder U+003E) enthalten.
    - Das `localName` ist ein gültiger Elementname, wenn es eine Länge von mindestens 1 hat und:
      - es beginnt mit einem Alphabetzeichen und enthält keine ASCII-Leerzeichen, `NULL`, `/`, oder `>` (U+0000, U+002F, oder U+003E).
      - es beginnt mit `:` (U+003A), `_` (U+005F), oder Zeichen im Bereich von U+0080 bis U+10FFFF (einschließlich), _und_ die verbleibenden Codepunkte nur aus denselben Zeichen sowie den ASCII-alphanumerischen Zeichen, `-` (U+002D), und `.` (U+002E) bestehen.

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und verlangten, dass der `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

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

- Das [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interface, zu dem es gehört.
