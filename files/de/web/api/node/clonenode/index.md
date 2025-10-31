---
title: "Node: cloneNode() Methode"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: cab5b3fe7b9cf0f5e20557b2aa1133a979147e21
---

{{APIRef("DOM")}}

Die **`cloneNode()`**-Methode des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt ein Duplikat des Knotens zurück, auf dem diese Methode aufgerufen wurde.
Ihr Parameter bestimmt, ob auch der im Knoten enthaltene Unterbaum geklont wird oder nicht.

Das Klonen eines Knotens kopiert alle seine Attribute und deren Werte,
einschließlich intrinsischer (inline) Listener. Es kopiert _nicht_ Event-Listener, die
mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurden,
oder solche, die zu Eigenschaften von Elementen zugewiesen sind (z. B., `node.onclick = someFunction`).
Darüber hinaus wird bei einem {{HTMLElement("canvas")}}-Element das gemalte Bild nicht kopiert.

> [!WARNING]
> `cloneNode()` kann dazu führen, dass Element-IDs in einem Dokument doppelt vorkommen!
>
> Wenn der ursprüngliche Knoten ein `id`-Attribut hat und der Klon
> im selben Dokument platziert wird, sollten Sie die ID des Klons ändern, damit sie
> eindeutig ist.
>
> Auch `name`-Attribute sollten möglicherweise geändert werden,
> abhängig davon, ob doppelte Namen erwartet werden.

Um einen Knoten zu klonen und in ein _anderes_ Dokument einzufügen, verwenden Sie
[`Document.importNode()`](/de/docs/Web/API/Document/importNode) stattdessen.

## Syntax

```js-nolint
cloneNode()
cloneNode(deep)
```

### Parameter

- `deep` {{optional_inline}}
  - : Wenn `true`, werden der Knoten und sein gesamter Unterbaum,
    einschließlich Text, der sich in untergeordneten [`Text`](/de/docs/Web/API/Text)-Knoten befinden kann,
    ebenfalls kopiert.

    Wenn `false` oder weggelassen, wird nur der Knoten geklont.
    Der Unterbaum, einschließlich jeglichen Textes, den der Knoten enthält, wird nicht geklont.

    Beachten Sie, dass `deep` keine Auswirkungen auf {{Glossary("void_element", "leere Elemente")}} hat,
    wie die {{HTMLElement("img")}}- und {{HTMLElement("input")}}-Elemente.

### Rückgabewert

Der neue geklonte [`Node`](/de/docs/Web/API/Node).
Der geklonte Knoten hat keinen Elternteil und ist nicht Teil des Dokuments,
_bis_ er zu einem anderen Knoten hinzugefügt wird, der Teil des Dokuments ist,
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
