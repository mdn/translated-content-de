---
title: "DOMImplementation: createHTMLDocument() Methode"
short-title: createHTMLDocument()
slug: Web/API/DOMImplementation/createHTMLDocument
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{ApiRef("DOM")}}

Die **`DOMImplementation.createHTMLDocument()`** Methode erstellt ein neues HTML-[`Dokument`](/de/docs/Web/API/Document).

## Syntax

```js-nolint
createHTMLDocument()
createHTMLDocument(title)
```

### Parameter

- `title` {{optional_inline}}
  - : Ein String, der den Titel des neuen HTML-Dokuments enthält.

### Rückgabewert

Ein neues HTML-[`Dokument`](/de/docs/Web/API/Document)-Objekt.

## Beispiele

Dieses Beispiel erstellt ein neues HTML-Dokument und fügt es in ein {{HTMLElement("iframe")}} im aktuellen Dokument ein.

Hier ist das HTML für dieses Beispiel:

```html
<body>
  <p>
    Click <a href="javascript:makeDocument()">here</a> to create a new document
    and insert it below.
  </p>
  <iframe id="theFrame" src="about:blank"></iframe>
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

Der Code kümmert sich um die Erstellung des neuen HTML-Dokuments und das Einfügen von Inhalten in dieses. `createHTMLDocument()` erstellt ein neues HTML-Dokument, dessen {{ HTMLElement("title") }} `"New Document"` ist. Dann erstellen wir ein neues Absatz-Element mit einfachem Inhalt, und der neue Absatz wird in das neue Dokument eingefügt.

`destDocument` speichert das `contentDocument` des Rahmens; dies ist das Dokument, in das wir den neuen Inhalt einfügen werden. Die nächsten zwei Zeilen kümmern sich um den Import der Inhalte unseres neuen Dokuments in den Kontext des neuen Dokuments. Schließlich ersetzt `destDocument.replaceChild` tatsächlich den Inhalt des Rahmens mit dem Inhalt des neuen Dokuments.

[Live-Beispiele ansehen](https://mdn.dev/archives/media/samples/domref/createHTMLDocument.html)

Das zurückgegebene Dokument ist mit folgendem HTML vorab erstellt:

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
