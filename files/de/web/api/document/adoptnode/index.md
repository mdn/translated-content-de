---
title: "Document: adoptNode()-Methode"
short-title: adoptNode()
slug: Web/API/Document/adoptNode
l10n:
  sourceCommit: 3d4f158c8ab2e1ee7141b59f020e8e5de911ac62
---

{{ ApiRef("DOM") }}

Die **`Document.adoptNode()`** Methode überträgt einen [Knoten](/de/docs/Glossary/node/dom) aus einem anderen [Dokument](/de/docs/Web/API/Document) in das Dokument der Methode. Der übernommene Knoten und sein Unterbaum werden aus ihrem ursprünglichen Dokument entfernt (falls vorhanden), und ihr [`ownerDocument`](/de/docs/Web/API/Node/ownerDocument) wird auf das aktuelle Dokument geändert. Der Knoten kann dann in das aktuelle Dokument eingefügt werden.

## Syntax

```js-nolint
adoptNode(externalNode)
```

### Parameter

- `externalNode`
  - : Der Knoten aus einem anderen Dokument, der übernommen werden soll.

### Rückgabewert

Der kopierte `importedNode` im Geltungsbereich des importierenden Dokuments.

Nach dem Aufrufen dieser Methode sind `importedNode` und `externalNode` dasselbe Objekt.

> **Note:** `importedNode`'s
> [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) ist `null`, da er noch nicht in den Dokumentbaum eingefügt wurde!

## Beispiele

```js
const iframe = document.querySelector("iframe");
const iframeImages = iframe.contentDocument.querySelectorAll("img");
const newParent = document.getElementById("images");

iframeImages.forEach((imgEl) => {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## Anmerkungen

Bevor sie in das aktuelle Dokument eingefügt werden können, sollten Knoten aus externen Dokumenten entweder:

- mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont; oder
- mit `document.adoptNode()` übernommen werden.

Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.importNode()`](/de/docs/Web/API/Document/importNode)
