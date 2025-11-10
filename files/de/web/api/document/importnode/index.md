---
title: "Dokument: importNode()-Methode"
short-title: importNode()
slug: Web/API/Document/importNode
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`importNode()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Objekts erstellt eine Kopie eines [`Node`](/de/docs/Web/API/Node)- oder [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Elements aus einem anderen Dokument, um es später in das aktuelle Dokument einzufügen.

Der importierte Knoten ist noch nicht im Dokumentenbaum enthalten. Um ihn einzufügen, müssen Sie eine Einfügemethode wie [`appendChild()`](/de/docs/Web/API/Node/appendChild) oder [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) mit einem Knoten aufrufen, der _bereits_ im Dokumentenbaum vorhanden ist.

Im Gegensatz zu [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) wird der originale Knoten nicht aus seinem ursprünglichen Dokument entfernt. Der importierte Knoten ist eine Kopie des Originals.

## Syntax

```js-nolint
importNode(externalNode)
importNode(externalNode, deep)
```

### Parameter

- `externalNode`
  - : Der externe [`Node`](/de/docs/Web/API/Node) oder [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), der in das aktuelle Dokument importiert werden soll.
- `deep` {{optional_inline}}
  - : Ein boolescher Wert, dessen Standardwert `false` ist, der steuert, ob der gesamte DOM-Unterbaum des `externalNode` in den Import einbezogen wird.
    - Wenn `deep` auf `true` gesetzt ist, dann werden `externalNode` und alle seine Nachkommen kopiert.
    - Wenn `deep` auf `false` gesetzt ist, dann wird nur `externalNode` importiert — der neue Knoten hat keine Kinder.

### Rückgabewert

Der kopierte `importedNode` im Kontext des importierenden Dokuments.

> [!NOTE]
> Der `importedNode` hat `null` als [`Node.parentNode`](/de/docs/Web/API/Node/parentNode), da er noch nicht in den Dokumentenbaum eingefügt wurde!

## Beispiele

```js
const iframe = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Anmerkungen

Bevor sie in das aktuelle Dokument eingefügt werden können, sollten Knoten aus externen Dokumenten entweder:

- mit `document.importNode()` geklont werden; oder
- mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen werden.

> [!NOTE]
> Obwohl Firefox diese Regel derzeit nicht durchsetzt, empfehlen wir Ihnen, diese Regel zu befolgen, um die zukünftige Kompatibilität zu verbessern.

Weitere Informationen zu den Fragen im Zusammenhang mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in den W3C DOM-FAQ.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode), welches sich sehr ähnlich wie diese Methode verhält
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
