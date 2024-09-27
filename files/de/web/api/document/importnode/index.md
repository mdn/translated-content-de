---
title: "Document: importNode()-Methode"
short-title: importNode()
slug: Web/API/Document/importNode
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die **`importNode()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Objekts erstellt eine Kopie eines
[`Node`](/de/docs/Web/API/Node) oder [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) aus einem anderen Dokument, die später in das aktuelle Dokument eingefügt werden soll.

Der importierte Knoten ist noch nicht in den Dokumentbaum eingefügt. Um ihn einzufügen, müssen Sie
eine Einfügemethode wie [`appendChild()`](/de/docs/Web/API/Node/appendChild) oder
[`insertBefore()`](/de/docs/Web/API/Node/insertBefore) mit einem Knoten aufrufen, der
sich derzeit im Dokumentbaum befindet.

Im Gegensatz zu [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) wird der ursprüngliche Knoten nicht aus seinem
ursprünglichen Dokument entfernt. Der importierte Knoten ist ein Klon des Originals.

## Syntax

```js-nolint
importNode(externalNode)
importNode(externalNode, deep)
```

### Parameter

- `externalNode`
  - : Der externe [`Node`](/de/docs/Web/API/Node) oder [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), der in
    das aktuelle Dokument importiert werden soll.
- `deep` {{optional_inline}}

  - : Ein boolesches Flag, dessen Standardwert `false` ist,
    das steuert, ob der gesamte DOM-Unterbaum
    des `externalNode` in den Import einbezogen wird.

    - Wenn `deep` auf `true` gesetzt ist, werden
      `externalNode` und alle seine Nachkommen kopiert.
    - Wenn `deep` auf `false` gesetzt ist, wird nur
      `externalNode` importiert – der neue Knoten hat keine Kinder.

### Rückgabewert

Der kopierte `importedNode` im Bereich des importierenden Dokuments.

> **Hinweis:** `importedNode`'s [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) ist `null`, da er noch nicht in den Dokumentbaum eingefügt wurde!

## Beispiele

```js
const iframe = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Hinweise

Bevor sie in das aktuelle Dokument eingefügt werden können, sollten Knoten aus externen Dokumenten entweder:

- mit `document.importNode()` geklont werden; oder
- mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen werden.

> [!NOTE]
> Obwohl Firefox diese Regel derzeit nicht durchsetzt, empfehlen wir Ihnen, diese Regel zu befolgen, um die zukünftige Kompatibilität zu verbessern.

Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie in den W3C DOM FAQ.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode), das sich sehr ähnlich wie diese Methode verhält
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
