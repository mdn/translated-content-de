---
title: "Node: cloneNode()-Methode"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`cloneNode()`**-Methode des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt ein Duplikat des Knotens zurück, auf dem diese Methode aufgerufen wurde.
Ihr Parameter steuert, ob der in einem Knoten enthaltene Unterbaum ebenfalls geklont wird oder nicht.

Das Klonen eines Knotens kopiert alle seine Attribute und deren Werte,
einschließlich intrinsischer (inline) Listener. Es kopiert _nicht_ die mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
hinzugefügten Ereignis-Listener oder solche, die Eigenschaften eines Elements zugewiesen sind (z. B. `node.onclick = someFunction`).
Darüber hinaus wird bei einem {{HTMLElement("canvas")}}-Element das gemalte Bild nicht kopiert.

> **Warning:** `cloneNode()` kann zu doppelten Element-IDs in einem Dokument führen!
>
> Wenn der ursprüngliche Knoten ein `id`-Attribut hat und der Klon
> im selben Dokument platziert wird, sollten Sie die ID des Klons ändern, um
> einzigartig zu sein.
>
> Auch `name`-Attribute müssen möglicherweise geändert werden,
> je nachdem, ob doppelte Namen erwartet werden.

Um einen Knoten zu klonen, der in ein _anderes_ Dokument eingefügt werden soll, verwenden Sie
stattdessen [`Document.importNode()`](/de/docs/Web/API/Document/importNode).

## Syntax

```js-nolint
cloneNode()
cloneNode(deep)
```

### Parameter

- `deep` {{optional_inline}}

  - : Wenn `true`, wird der Knoten und sein gesamter Unterbaum,
    einschließlich des Textes, der in untergeordneten [`Text`](/de/docs/Web/API/Text)-Knoten enthalten sein kann,
    ebenfalls kopiert.

    Wenn `false`, wird nur der Knoten geklont.
    Der Unterbaum, einschließlich jeglichen Textes, den der Knoten enthält, wird nicht geklont.

    Beachten Sie, dass `deep` keinen Einfluss auf [void elements](/de/docs/Glossary/void_element) hat,
    wie die {{HTMLElement("img")}}- und {{HTMLElement("input")}}-Elemente.

### Rückgabewert

Der neue geklonte [`Node`](/de/docs/Web/API/Node).
Der geklonte Knoten hat keinen Elternknoten und ist nicht Teil des Dokuments,
_bis_ er einem anderen Knoten hinzugefügt wird, der Teil des Dokuments ist,
unter Verwendung von [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder einer ähnlichen Methode.

## Beispiel

```js
let p = document.getElementById("para1");
let p_prime = p.cloneNode(true);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
