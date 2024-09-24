---
title: "Document: adoptNode()-Methode"
short-title: adoptNode()
slug: Web/API/Document/adoptNode
l10n:
  sourceCommit: 3d4f158c8ab2e1ee7141b59f020e8e5de911ac62
---

{{ ApiRef("DOM") }}

Die **`Document.adoptNode()`** Methode überträgt einen {{Glossary("node/dom", "Knoten")}} aus einem anderen {{domxref("Document", "Dokument", "", "1")}} in das Dokument der Methode. Der übernommene Knoten und sein Unterbaum werden aus ihrem ursprünglichen Dokument (falls vorhanden) entfernt und ihr {{domxref("Node.ownerDocument", "Besitzerdokument")}} wird auf das aktuelle Dokument geändert. Der Knoten kann dann in das aktuelle Dokument eingefügt werden.

## Syntax

```js-nolint
adoptNode(externalNode)
```

### Parameter

- `externalNode`
  - : Der Knoten aus einem anderen Dokument, der übernommen werden soll.

### Rückgabewert

Der kopierte `importedNode` im Kontext des importierenden Dokuments.

Nach dem Aufruf dieser Methode sind `importedNode` und
`externalNode` dasselbe Objekt.

> **Note:** `importedNode`'s
> {{domxref("Node.parentNode")}} ist `null`, da es noch nicht in den Dokumentenbaum eingefügt wurde!

## Beispiele

```js
const iframe = document.querySelector("iframe");
const iframeImages = iframe.contentDocument.querySelectorAll("img");
const newParent = document.getElementById("images");

iframeImages.forEach((imgEl) => {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## Hinweise

Bevor sie in das aktuelle Dokument eingefügt werden können, sollten Knoten aus externen Dokumenten entweder:

- geklont werden mit {{domXref("document.importNode()")}}; oder
- übernommen werden mit `document.adoptNode()`.

Weitere Informationen zu den {{domXref("Node.ownerDocument")}}-Problemen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.importNode()")}}
