---
title: "Dokument: importNode() Methode"
short-title: importNode()
slug: Web/API/Document/importNode
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die **`importNode()`** Methode des {{domxref("Document")}} Objekts erstellt eine Kopie eines {{domxref("Node")}} oder {{domxref("DocumentFragment")}} aus einem anderen Dokument, um später in das aktuelle Dokument eingefügt zu werden.

Der importierte Knoten ist noch nicht im Dokumentbaum enthalten. Um ihn einzufügen, müssen Sie eine Einfügemethode wie {{domxref("Node.appendChild", "appendChild()")}} oder {{domxref("Node.insertBefore", "insertBefore()")}} aufrufen, mit einem Knoten, der _bereits_ im Dokumentbaum enthalten ist.

Im Gegensatz zu {{domxref("document.adoptNode()")}} wird der ursprüngliche Knoten nicht aus seinem Originaldokument entfernt. Der importierte Knoten ist ein Klon des Originals.

## Syntax

```js-nolint
importNode(externalNode)
importNode(externalNode, deep)
```

### Parameter

- `externalNode`
  - : Der externe {{domxref("Node")}} oder {{domxref("DocumentFragment")}}, der in das
    aktuelle Dokument importiert werden soll.
- `deep` {{optional_inline}}

  - : Ein boolescher Wert, dessen Standardwert `false` ist,
    der steuert, ob der gesamte DOM-Unterbaum
    des `externalNode` im Import enthalten ist.

    - Wenn `deep` auf `true` gesetzt ist, werden
      `externalNode` und alle seine Nachkommen kopiert.
    - Wenn `deep` auf `false` gesetzt ist, wird nur
      `externalNode` importiert — der neue Knoten hat keine Kinder.

### Rückgabewert

Der kopierte `importedNode` im Bereich des importierenden Dokuments.

> **Hinweis:** `importedNode`'s {{domxref("Node.parentNode")}} ist `null`, da er noch nicht in den Dokumentbaum eingefügt wurde!

## Beispiele

```js
const iframe = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Anmerkungen

Bevor Knoten aus externen Dokumenten in das aktuelle Dokument eingefügt werden können, sollten sie entweder:

- geklont werden mit `document.importNode()`; oder
- übernommen werden mit {{domXref("document.adoptNode()")}}.

> [!NOTE]
> Obwohl Firefox diese Regel derzeit nicht durchsetzt, empfehlen wir Ihnen, diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

Weitere Informationen zu den {{domXref("Node.ownerDocument")}} Problemen finden Sie in den W3C DOM FAQ.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.adoptNode()")}}, welches sich sehr ähnlich zu dieser Methode verhält
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
