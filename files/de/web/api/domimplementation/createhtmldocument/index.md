---
title: "DOMImplementation: Methode createHTMLDocument()"
short-title: createHTMLDocument()
slug: Web/API/DOMImplementation/createHTMLDocument
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
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
  - : Ein String, der den Titel des neuen HTML-Dokuments enthält.

### Rückgabewert

Ein neues HTML-[`Document`](/de/docs/Web/API/Document)-Objekt.

## Beispiele

Dieses Beispiel erstellt ein neues HTML-Dokument und fügt es in ein {{HTMLElement("iframe")}} im aktuellen Dokument ein.

Hier ist das HTML für dieses Beispiel:

```html live-sample___new-doc
<button id="create-doc">Create new document</button>
<iframe id="theFrame" src="about:blank"></iframe>
```

Die JavaScript-Implementierung von `makeDocument()` folgt:

```js live-sample___new-doc
function makeDocument() {
  const frame = document.getElementById("theFrame");

  const doc = document.implementation.createHTMLDocument("New Document");
  const p = doc.createElement("p");
  p.textContent = "This is a new paragraph.";

  try {
    doc.body.appendChild(p);
  } catch (e) {
    console.log(e);
  }

  // Copy the new HTML document into the frame

  const destDocument = frame.contentDocument;
  const srcNode = doc.documentElement;
  const newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}

document.getElementById("create-doc").addEventListener("click", makeDocument);
```

Der Code übernimmt das Erstellen des neuen HTML-Dokuments und das Einfügen von Inhalten in dieses. `createHTMLDocument()` erstellt ein neues HTML-Dokument, dessen {{HTMLElement("title")}} `"New Document"` ist. Dann erstellen wir ein neues Absatz-Element mit einfachem Inhalt, und dieser neue Absatz wird in das neue Dokument eingefügt.

`destDocument` speichert das `contentDocument` des Frames; dies ist das Dokument, in das wir den neuen Inhalt einfügen werden. Die nächsten zwei Zeilen übernehmen das Importieren der Inhalte unseres neuen Dokuments in den Kontext des neuen Dokuments. Schließlich ersetzt `destDocument.replaceChild` tatsächlich die Inhalte des Frames mit den Inhalten des neuen Dokuments.

{{EmbedLiveSample("new-doc", "", 200)}}

Das zurückgegebene Dokument ist mit folgendem HTML vorstrukturiert:

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

- Die [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)-Schnittstelle, zu der es gehört.
