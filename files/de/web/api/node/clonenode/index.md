---
title: "Node: cloneNode() Methode"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`cloneNode()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt ein Duplikat des Knotens zurück, auf dem diese Methode aufgerufen wurde.
Ihr Parameter steuert, ob der im Knoten enthaltene Unterbaum ebenfalls geklont wird oder nicht.

Das Klonen eines Knotens kopiert alle seine Attribute und deren Werte,
einschließlich intrinsischer (inline) Listener. Es kopiert _nicht_ Event-Listener, die mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurden oder
die den Element-Eigenschaften zugewiesen sind (z. B. `node.onclick = someFunction`).
Zusätzlich wird bei einem {{HTMLElement("canvas")}}-Element das gemalte Bild nicht kopiert.

> [!WARNING] > `cloneNode()` kann dazu führen, dass doppelte Element-IDs in einem Dokument entstehen!
>
> Hat der Originalknoten ein `id`-Attribut und soll
> der Klon im selben Dokument platziert werden, sollten Sie die ID des Klons
> ändern, um eindeutig zu sein.
>
> Auch `name`-Attribute müssen möglicherweise geändert werden,
> abhängig davon, ob doppelte Namen erwartet werden.

Um einen Knoten zu klonen, der in ein _anderes_ Dokument eingefügt werden soll, verwenden Sie stattdessen
[`Document.importNode()`](/de/docs/Web/API/Document/importNode).

## Syntax

```js-nolint
cloneNode()
cloneNode(deep)
```

### Parameter

- `deep` {{optional_inline}}

  - : Wenn `true`, dann wird der Knoten und sein gesamter Unterbaum,
    einschließlich Text, der in untergeordneten [`Text`](/de/docs/Web/API/Text)-Knoten enthalten sein kann,
    ebenfalls kopiert.

    Wenn `false`, wird nur der Knoten geklont.
    Der Unterbaum, einschließlich eines etwa enthaltenen Textes, wird nicht geklont.

    Beachten Sie, dass `deep` keine Auswirkung auf {{Glossary("void_element", "void-Elemente")}} hat,
    wie die {{HTMLElement("img")}}- und {{HTMLElement("input")}}-Elemente.

### Rückgabewert

Der neue geklonte [`Node`](/de/docs/Web/API/Node).
Der geklonte Knoten hat keinen Elternknoten und ist kein Teil des Dokuments,
_bis_ er einem anderen Knoten hinzugefügt wird, der Teil des Dokuments ist,
mithilfe von [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder einer ähnlichen Methode.

## Beispiel

```js
let p = document.getElementById("para1");
let p_prime = p.cloneNode(true);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
