---
title: "Dokument: Methode adoptNode()"
short-title: adoptNode()
slug: Web/API/Document/adoptNode
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ ApiRef("DOM") }}

**`Document.adoptNode()`** überträgt einen {{Glossary("node/dom", "node")}} von einem anderen [document](/de/docs/Web/API/Document) in das Dokument der Methode.
Der übernommene Knoten und sein Unterbaum werden aus ihrem ursprünglichen Dokument (falls vorhanden) entfernt, und ihr [`ownerDocument`](/de/docs/Web/API/Node/ownerDocument) wird auf das aktuelle Dokument geändert.
Der Knoten kann dann in das aktuelle Dokument eingefügt werden.

## Syntax

```js-nolint
adoptNode(externalNode)
```

### Parameter

- `externalNode`
  - : Der Knoten aus einem anderen Dokument, der übernommen werden soll.

### Rückgabewert

Der kopierte `importedNode` im Gültigkeitsbereich des importierenden Dokuments.

Nach dem Aufrufen dieser Methode sind `importedNode` und
`externalNode` dasselbe Objekt.

> [!NOTE] > `importedNode`'s
> [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) ist `null`, da er noch nicht in den Dokumentbaum
> eingefügt wurde!

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

Bevor Knoten aus externen Dokumenten in das aktuelle Dokument eingefügt werden können, sollten sie entweder:

- durch [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont werden; oder
- durch `document.adoptNode()` übernommen werden.

Für weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) siehe die [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.importNode()`](/de/docs/Web/API/Document/importNode)
