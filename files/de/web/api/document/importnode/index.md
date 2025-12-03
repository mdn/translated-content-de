---
title: "Dokument: importNode() Methode"
short-title: importNode()
slug: Web/API/Document/importNode
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("DOM")}}

Die **`importNode()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces erstellt eine Kopie eines [`Node`](/de/docs/Web/API/Node) oder [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) aus einem anderen Dokument, um diese später in das aktuelle Dokument einzufügen.

Der importierte Knoten ist noch nicht im Dokumentbaum enthalten. Um ihn hinzuzufügen, müssen Sie eine Einfügemethode wie [`appendChild()`](/de/docs/Web/API/Node/appendChild) oder [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) mit einem Knoten aufrufen, der _bereits_ im Dokumentbaum enthalten ist.

Im Gegensatz zu [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) wird der Originalknoten nicht aus seinem ursprünglichen Dokument entfernt. Der importierte Knoten ist eine Kopie des Originals.

Die Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) erstellt ebenfalls eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des zu klonenden Knotens verwendet. Der Dokumentkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für den Aufbau von benutzerdefinierten Elementen. Aus diesem Grund sollten Sie, um Knoten zu klonen, die in einem anderen Dokument verwendet werden sollten, `importNode()` auf dem Ziel-Dokument verwenden. Das [`HTMLTemplateElement.content`](/de/docs/Web/API/HTMLTemplateElement/content) gehört zu einem separaten Dokument, daher sollte es ebenfalls mithilfe von `document.importNode()` geklont werden, damit benutzerdefinierte Elemente mit den Definitionen im aktuellen Dokument erstellt werden. Siehe die Beispiele auf der Seite zu [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) für weitere Details.

## Syntax

```js-nolint
importNode(externalNode)
importNode(externalNode, deep)
```

### Parameter

- `externalNode`
  - : Der externe [`Node`](/de/docs/Web/API/Node) oder [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), der in das aktuelle Dokument importiert werden soll.
- `deep` {{optional_inline}}
  - : Ein boolesches Flag, dessen Standardwert `false` ist, das steuert, ob der gesamte DOM-Unterbaum des `externalNode` in den Import einbezogen wird.
    - Wenn `deep` auf `true` gesetzt ist, dann werden
      `externalNode` und alle seine Nachkommen kopiert.
    - Wenn `deep` auf `false` gesetzt ist, dann wird nur
      `externalNode` importiert — der neue Knoten hat keine Kinder.

### Rückgabewert

Der kopierte `importedNode` im Kontext des importierenden Dokuments.

> [!NOTE]
> `importedNode`'s [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) ist `null`, da es noch nicht in den Dokumentbaum eingefügt wurde!

## Beispiele

### Verwendung von importNode()

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

Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) Problemen finden Sie in den W3C DOM FAQ.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode), die sich sehr ähnlich wie diese Methode verhält
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
