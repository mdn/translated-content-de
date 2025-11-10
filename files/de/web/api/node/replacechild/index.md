---
title: "Node: replaceChild() Methode"
short-title: replaceChild()
slug: Web/API/Node/replaceChild
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

Die **`replaceChild()`** Methode der [`Node`](/de/docs/Web/API/Node) Schnittstelle ersetzt ein Kindknoten innerhalb des angegebenen (Eltern-) Knotens.

## Syntax

```js-nolint
replaceChild(newChild, oldChild)
```

### Parameter

- `newChild`
  - : Der neue Knoten, der `oldChild` ersetzen soll.
    > [!WARNING]
    > Wenn der neue Knoten bereits an einer anderen Stelle im DOM vorhanden ist, wird er zuerst von dieser Position entfernt.
- `oldChild`
  - : Das zu ersetzende Kind.

> [!NOTE]
> Die Reihenfolge der Parameter, _neu_ vor _alt_, ist ungewöhnlich.
> [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), das nur für Knoten gilt, die Elemente sind,
> kann einfacher zu lesen und zu verwenden sein.

### Rückgabewert

Der ersetzte [`Node`](/de/docs/Web/API/Node). Dies ist derselbe Knoten wie `oldChild`.

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Beschränkungen des DOM-Baums verletzt werden, das heißt, wenn einer der folgenden Fälle eintritt:
    - Wenn das Elternteil von `oldChild` kein [`Document`](/de/docs/Web/API/Document), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) oder ein [`Element`](/de/docs/Web/API/Element) ist.
    - Wenn das Ersetzen von `oldChild` durch `newChild` zu einem Zyklus führen würde, das heißt, wenn `newChild` ein Vorfahre des Knotens ist.
    - Wenn `newChild` kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), ein [`DocumentType`](/de/docs/Web/API/DocumentType), ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) ist.
    - Wenn der aktuelle Knoten ein [`Text`](/de/docs/Web/API/Text) ist und sein Elternteil ein [`Document`](/de/docs/Web/API/Document) ist.
    - Wenn der aktuelle Knoten ein [`DocumentType`](/de/docs/Web/API/DocumentType) ist und sein Elternteil _nicht_ ein [`Document`](/de/docs/Web/API/Document) ist, da ein _doctype_ immer ein direkter Nachkomme eines _document_ sein sollte.
    - Wenn das Elternteil des Knotens ein [`Document`](/de/docs/Web/API/Document) ist und `newChild` ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit mehr als einem [`Element`](/de/docs/Web/API/Element) Kind ist oder ein [`Text`](/de/docs/Web/API/Text) Kind hat.
    - Wenn das Ersetzen von `oldChild` durch `newChild` zu einem [`Document`](/de/docs/Web/API/Document) mit mehr als einem [`Element`](/de/docs/Web/API/Element) als Kind führen würde.
    - Wenn das Ersetzen von `oldChild` durch `newChild` dazu führen würde, dass ein [`Element`](/de/docs/Web/API/Element) Knoten vor einem [`DocumentType`](/de/docs/Web/API/DocumentType) Knoten vorhanden ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Elternteil von `oldChild` nicht der aktuelle Knoten ist.

## Beispiel

```js
// Given:
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Create an empty element node
// without an ID, any attributes, or any content
const sp1 = document.createElement("span");

// Give it an id attribute called 'newSpan'
sp1.id = "newSpan";

// Create some content for the new element.
const sp1Content = document.createTextNode("new replacement span element.");

// Apply that content to the new element
sp1.appendChild(sp1Content);

// Build a reference to the existing node to be replaced
const sp2 = document.getElementById("childSpan");
const parentDiv = sp2.parentNode;

// Replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(sp1, sp2);

// Result:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.removeChild`](/de/docs/Web/API/Node/removeChild)
- [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith)
