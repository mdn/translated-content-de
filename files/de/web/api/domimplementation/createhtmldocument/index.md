---
title: "DOMImplementation: createHTMLDocument()-Methode"
short-title: createHTMLDocument()
slug: Web/API/DOMImplementation/createHTMLDocument
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{ApiRef("DOM")}}

Die Methode **`DOMImplementation.createHTMLDocument()`** erstellt ein neues HTML-[`Document`](/de/docs/Web/API/Document).

## Syntax

```js-nolint
createHTMLDocument()
createHTMLDocument(title)
```

### Parameter

- `title` {{optional_inline}}
  - : Ein String, der den Titel enthält, der dem neuen HTML-Dokument gegeben werden soll.

### Rückgabewert

Ein neues HTML-[`Document`](/de/docs/Web/API/Document)-Objekt.

## Beispiele

Dieses Beispiel erstellt ein neues HTML-Dokument und fügt es in ein {{HTMLElement("iframe")}} im aktuellen Dokument ein.

Hier ist das HTML für dieses Beispiel:

```html
<body>
  <p>
    Click <a href="javascript:makeDocument()">here</a> to create a new document
    and insert it below.
  </p>
  <iframe id="theFrame" src="about:blank" />
</body>
```

Die JavaScript-Implementierung von `makeDocument()` folgt:

```js
function makeDocument() {
  let frame = document.getElementById("theFrame");

  let doc = document.implementation.createHTMLDocument("New Document");
  let p = doc.createElement("p");
  p.textContent = "This is a new paragraph.";

  try {
    doc.body.appendChild(p);
  } catch (e) {
    console.log(e);
  }

  // Copy the new HTML document into the frame

  let destDocument = frame.contentDocument;
  let srcNode = doc.documentElement;
  let newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
```

Der Code behandelt das Erstellen des neuen HTML-Dokuments und das Einfügen einiger Inhalte darin. `createHTMLDocument()` konzipiert ein neues HTML-Dokument, dessen {{HTMLElement("title")}} `"New Document"` ist. Dann erstellen wir ein neues Paragraphen-Element mit einigem einfachen Inhalt und fügen den neuen Paragraphen in das neue Dokument ein.

`destDocument` speichert das `contentDocument` des Rahmens; dies ist das Dokument, in das wir die neuen Inhalte einfügen werden. Die nächsten beiden Zeilen behandeln den Import der Inhalte unseres neuen Dokuments in den Kontext des neuen Dokuments. Schließlich ersetzt `destDocument.replaceChild` tatsächlich die Inhalte des Rahmens durch die Inhalte des neuen Dokuments.

[Live-Beispiele anzeigen](https://mdn.dev/archives/media/samples/domref/createHTMLDocument.html)

Das zurückgegebene Dokument ist mit dem folgenden HTML vorstrukturiert:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>title</title>
  </head>
  <body>
    …
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Interface, zu dem es gehört.
