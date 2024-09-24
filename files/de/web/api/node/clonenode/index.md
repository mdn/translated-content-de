---
title: "Node: cloneNode() Methode"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`cloneNode()`** Methode des {{domxref("Node")}}-Interfaces gibt ein Duplikat des Knotens zurück, auf dem diese Methode aufgerufen wurde. Ihr Parameter steuert, ob das in einem Knoten enthaltene Teilbaum ebenfalls geklont wird oder nicht.

Das Klonen eines Knotens kopiert alle seine Attribute und deren Werte, einschließlich intrinsischer (inline) Listener. Es kopiert _nicht_ Event-Listener, die mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurden oder solche, die den Element-Eigenschaften zugewiesen wurden (z. B. `node.onclick = someFunction`). Zusätzlich wird bei einem {{HTMLElement("canvas")}}-Element das gemalte Bild nicht kopiert.

> **Warning:** `cloneNode()` kann zu doppelten Element-IDs in einem Dokument führen!
>
> Hat der ursprüngliche Knoten ein `id`-Attribut und wird der Klon im selben Dokument platziert, sollten Sie die ID des Klons ändern, um eindeutig zu sein.
>
> Auch `name`-Attribute müssen möglicherweise geändert werden, abhängig davon, ob doppelte Namen erwartet werden.

Um einen Knoten zu klonen und in ein _anderes_ Dokument einzufügen, verwenden Sie stattdessen {{domxref("Document.importNode()")}}.

## Syntax

```js-nolint
cloneNode()
cloneNode(deep)
```

### Parameter

- `deep` {{optional_inline}}

  - : Wenn `true`, dann wird der Knoten und sein gesamter Teilbaum,
    einschließlich Text, der in Kind-{{domxref("Text")}}-Knoten enthalten sein könnte, ebenfalls kopiert.

    Wenn `false`, wird nur der Knoten geklont.
    Der Teilbaum, einschließlich jeglichen Textes, den der Knoten enthält, wird nicht geklont.

    Beachten Sie, dass `deep` keine Auswirkung auf {{glossary("void element", "void elements")}},
    wie die {{HTMLElement("img")}} und {{HTMLElement("input")}}-Elemente, hat.

### Rückgabewert

Der neue geklonte {{domxref("Node")}}. Der geklonte Knoten hat keinen Elternteil und ist nicht Teil des Dokuments,
_bis_ er zu einem anderen Knoten hinzugefügt wird, der Teil des Dokuments ist, indem {{domxref("Node.appendChild()")}} oder eine ähnliche Methode verwendet wird.

## Beispiel

```js
let p = document.getElementById("para1");
let p_prime = p.cloneNode(true);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
