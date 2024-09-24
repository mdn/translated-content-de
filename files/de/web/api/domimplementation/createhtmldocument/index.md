---
title: "DOMImplementation: createHTMLDocument() Methode"
short-title: createHTMLDocument()
slug: Web/API/DOMImplementation/createHTMLDocument
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{ApiRef("DOM")}}

Die **`DOMImplementation.createHTMLDocument()`**-Methode erstellt ein neues HTML-{{domxref("Document")}}.

## Syntax

```js-nolint
createHTMLDocument()
createHTMLDocument(title)
```

### Parameter

- `title` {{optional_inline}}
  - : Ein String, der den Titel enthält, den das neue HTML-Dokument erhalten soll.

### Rückgabewert

Ein neues HTML-{{domxref("Document")}}-Objekt.

## Beispiele

Dieses Beispiel erstellt ein neues HTML-Dokument und fügt es in ein {{HTMLElement("iframe")}} im aktuellen Dokument ein.

Hier ist das HTML für dieses Beispiel:

```html
<body>
  <p>
    Klicken Sie <a href="javascript:makeDocument()">hier</a>, um ein neues Dokument zu erstellen und darunter einzufügen.
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

  // Kopieren Sie das neue HTML-Dokument in den Rahmen
  let destDocument = frame.contentDocument;
  let srcNode = doc.documentElement;
  let newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
```

Der Code kümmert sich um das Erstellen des neuen HTML-Dokuments und das Einfügen einiger Inhalte darin. `createHTMLDocument()` konstruiert ein neues HTML-Dokument, dessen {{HTMLElement("title")}} `"New Document"` ist. Dann erstellen wir ein neues Paragraphenelement mit einfachem Inhalt, und das neue Paragraphenelement wird in das neue Dokument eingefügt.

`destDocument` speichert das `contentDocument` des Rahmens; dies ist das Dokument, in das wir neue Inhalte einfügen. Die nächsten beiden Zeilen kümmern sich darum, den Inhalt unseres neuen Dokuments in den Kontext des neuen Dokuments zu importieren. Schließlich ersetzt `destDocument.replaceChild` tatsächlich den Inhalt des Rahmens mit dem Inhalt des neuen Dokuments.

[Live-Beispiele anzeigen](https://mdn.dev/archives/media/samples/domref/createHTMLDocument.html)

Das zurückgegebene Dokument wird mit folgendem HTML vorstrukturiert:

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

- Die {{domxref("DOMImplementation")}}-Schnittstelle, zu der sie gehört.
