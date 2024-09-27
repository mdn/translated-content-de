---
title: "Node: cloneNode() Methode"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`cloneNode()`** Methode der [`Node`](/de/docs/Web/API/Node) Schnittstelle
gibt ein Duplikat des Knotens zurück, auf dem diese Methode aufgerufen wurde.
Ihr Parameter steuert, ob der im Knoten enthaltene Unterbaum ebenfalls geklont wird oder nicht.

Das Klonen eines Knotens kopiert alle seine Attribute und deren Werte,
einschließlich intrinsischer (inline) Listener. Es kopiert _nicht_ die Event-Listener, die
mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurden oder
diejenigen, die den Element-Eigenschaften zugewiesen sind (z. B., `node.onclick = someFunction`).
Zusätzlich wird bei einem {{HTMLElement("canvas")}} Element das gezeichnete Bild nicht kopiert.

> **Warning:** `cloneNode()` kann zu doppelten Element-IDs in einem Dokument führen!
>
> Wenn der ursprüngliche Knoten ein `id` Attribut hat und der Klon
> im selben Dokument platziert wird, sollten Sie die ID des Klons ändern, um
> einzigartig zu sein.
>
> Zusätzlich könnte es notwendig sein, `name` Attribute zu ändern,
> je nachdem, ob doppelte Namen erwartet werden.

Um einen Knoten zu klonen, um ihn in ein _anderes_ Dokument einzufügen, verwenden Sie
stattdessen [`Document.importNode()`](/de/docs/Web/API/Document/importNode).

## Syntax

```js-nolint
cloneNode()
cloneNode(deep)
```

### Parameter

- `deep` {{optional_inline}}

  - : Wenn `true`, werden der Knoten und sein gesamter Unterbaum,
    einschließlich Text, der sich möglicherweise in untergeordneten [`Text`](/de/docs/Web/API/Text) Knoten befindet,
    ebenfalls kopiert.

    Wenn `false`, wird nur der Knoten geklont.
    Der Unterbaum, einschließlich jeglichen Textes, den der Knoten enthält, wird nicht geklont.

    Beachten Sie, dass `deep` keine Auswirkungen auf [leere Elemente](/de/docs/Glossary/void_element),
    wie die {{HTMLElement("img")}} und {{HTMLElement("input")}} Elemente, hat.

### Rückgabewert

Der neue, geklonte [`Node`](/de/docs/Web/API/Node).
Der geklonte Knoten hat keinen Elternknoten und ist nicht Teil des Dokuments,
_bis_ er mittels [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder einer ähnlichen Methode zu einem anderen Knoten, der Teil des Dokuments ist, hinzugefügt wird.

## Beispiel

```js
let p = document.getElementById("para1");
let p_prime = p.cloneNode(true);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
