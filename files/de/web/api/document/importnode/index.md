---
title: "Document: importNode()-Methode"
short-title: importNode()
slug: Web/API/Document/importNode
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die **`importNode()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Objekts erstellt eine Kopie eines [`Node`](/de/docs/Web/API/Node) oder eines [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) aus einem anderen Dokument, um sie später in das aktuelle Dokument einzufügen.

Der importierte Knoten ist noch nicht im Dokumentbaum enthalten. Um ihn einzufügen, müssen Sie eine Einfügemethode wie [`appendChild()`](/de/docs/Web/API/Node/appendChild) oder [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) mit einem Knoten aufrufen, der sich _bereits_ im Dokumentbaum befindet.

Im Gegensatz zu [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) wird der ursprüngliche Knoten nicht aus seinem ursprünglichen Dokument entfernt. Der importierte Knoten ist ein Klon des Originals.

## Syntax

```js-nolint
importNode(externalNode)
importNode(externalNode, deep)
```

### Parameter

- `externalNode`
  - : Der externe [`Node`](/de/docs/Web/API/Node) oder [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), der in das aktuelle Dokument importiert werden soll.
- `deep` {{optional_inline}}

  - : Ein boolescher Parameter, dessen Standardwert `false` ist,
    der steuert, ob der gesamte DOM-Unterbaum
    des `externalNode` beim Import eingeschlossen werden soll.

    - Wenn `deep` auf `true` gesetzt ist, werden
      `externalNode` und alle seine Nachkommen kopiert.
    - Wenn `deep` auf `false` gesetzt ist, wird nur
      `externalNode` importiert — der neue Knoten hat keine Kinder.

### Rückgabewert

Der kopierte `importedNode` im Kontext des importierenden Dokuments.

> **Hinweis:** `importedNode`'s [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) ist `null`, da es noch nicht in den Dokumentbaum eingefügt wurde!

## Beispiele

```js
const iframe = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Hinweise

Bevor sie in das aktuelle Dokument eingefügt werden können, sollten Knoten aus externen Dokumenten entweder:

- geklont werden, indem `document.importNode()` verwendet wird; oder
- adoptiert werden, indem [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) verwendet wird.

> [!NOTE]
> Obwohl Firefox diese Regel derzeit nicht durchsetzt, empfehlen wir Ihnen, diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

Für mehr Informationen zu [`Node.ownerDocument`-](https://de/docs/Web/API/Node/ownerDocument)-Problemen, siehe die W3C DOM FAQ.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode), die sich sehr ähnlich zu dieser Methode verhält
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
