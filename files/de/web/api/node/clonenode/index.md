---
title: "Node: cloneNode() Methode"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

Die **`cloneNode()`** Methode der [`Node`](/de/docs/Web/API/Node) Schnittstelle
gibt duplizierten Knoten zurück, auf dem diese Methode aufgerufen wurde.
Ihr Parameter steuert, ob der in einem Knoten enthaltene Teilbaum ebenfalls dupliziert wird oder nicht.

Das Klonen eines Knotens kopiert alle seine Attribute und deren Werte,
einschließlich der intrinsischen (inline) Listener. Es kopiert _nicht_ die mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügten Event-Listener oder
diejenigen, die den Eigenschaften des Elements zugewiesen sind (z.B. `node.onclick = someFunction`).
Zusätzlich wird bei einem {{HTMLElement("canvas")}}-Element das gemalte Bild nicht kopiert.

> [!WARNING]
> `cloneNode()` kann zu doppelten Element-IDs in einem Dokument führen!
>
> Wenn der ursprüngliche Knoten ein `id`-Attribut hat und der Klon
> im selben Dokument platziert wird, sollten Sie die ID des Klons ändern, um
> einzigartig zu sein.
>
> Auch `name`-Attribute müssen möglicherweise geändert werden,
> je nachdem, ob doppelte Namen erwartet werden.

Um einen Knoten zu klonen, der in ein _anderes_ Dokument eingefügt werden soll, verwenden Sie
[`Document.importNode()`](/de/docs/Web/API/Document/importNode).

## Syntax

```js-nolint
cloneNode()
cloneNode(deep)
```

### Parameter

- `deep` {{optional_inline}}
  - : Wenn `true`, werden der Knoten und sein gesamter Teilbaum,
    einschließlich Text, der sich in den untergeordneten [`Text`](/de/docs/Web/API/Text)-Knoten befinden kann,
    ebenfalls kopiert.

    Wenn `false` oder weggelassen, wird nur der Knoten geklont.
    Der Teilbaum, einschließlich jeglichem Text, den der Knoten enthält, wird nicht geklont.

    Beachten Sie, dass `deep` keine Wirkung auf {{Glossary("void_element", "void elements")}},
    wie die {{HTMLElement("img")}}- und {{HTMLElement("input")}}-Elemente hat.

### Rückgabewert

Der neue geklonte [`Node`](/de/docs/Web/API/Node).
Der geklonte Knoten hat keinen Elternknoten und ist nicht Teil des Dokuments,
_bis_ er einem anderen Knoten hinzugefügt wird, der Teil des Dokuments ist,
unter Verwendung von [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder einer ähnlichen Methode.

## Beispiel

```js
const p = document.getElementById("para1");
const p2 = p.cloneNode(true);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
