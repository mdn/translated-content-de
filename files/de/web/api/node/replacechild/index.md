---
title: "Node: replaceChild() Methode"
short-title: replaceChild()
slug: Web/API/Node/replaceChild
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`replaceChild()`** Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle ersetzt ein Kindknoten innerhalb des angegebenen (Eltern-)Knotens.

## Syntax

```js-nolint
replaceChild(newChild, oldChild)
```

### Parameter

- `newChild`
  - : Der neue Knoten, der `oldChild` ersetzen soll.
    > [!WARNING]
    > Wenn sich der neue Knoten bereits an einer anderen Stelle im DOM befindet, wird er zuerst von dieser Position entfernt.
- `oldChild`
  - : Das zu ersetzende Kind.

> [!NOTE]
> Die Reihenfolge der Parameter, _neu_ vor _alt_, ist ungewöhnlich.
> [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), das nur auf Knoten angewendet wird, die Elemente sind,
> könnte leichter zu lesen und zu verwenden sein.

### Rückgabewert

Der ersetzte [`Node`](/de/docs/Web/API/Node). Dies ist derselbe Knoten wie `oldChild`.

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Beschränkungen des DOM-Baums verletzt werden, das heißt, wenn einer der folgenden Fälle eintritt:
    - Wenn das Elternteil von `oldChild` nicht ein [`Document`](/de/docs/Web/API/Document), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) oder ein [`Element`](/de/docs/Web/API/Element) ist.
    - Wenn der Austausch von `oldChild` durch `newChild` zu einem Zyklus führen würde, das heißt, wenn `newChild` ein Vorfahre des Knotens ist.
    - Wenn `newChild` kein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), ein [`DocumentType`](/de/docs/Web/API/DocumentType), ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) ist.
    - Wenn der aktuelle Knoten ein [`Text`](/de/docs/Web/API/Text) ist und sein Elternteil ein [`Document`](/de/docs/Web/API/Document) ist.
    - Wenn der aktuelle Knoten ein [`DocumentType`](/de/docs/Web/API/DocumentType) ist und sein Elternteil _nicht_ ein [`Document`](/de/docs/Web/API/Document) ist, da ein _doctype_ immer ein direkter Nachfahre eines _Dokuments_ sein sollte.
    - Wenn das Elternteil des Knotens ein [`Document`](/de/docs/Web/API/Document) ist und `newChild` ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) mit mehr als einem [`Element`](/de/docs/Web/API/Element)-Kind ist, oder das einen [`Text`](/de/docs/Web/API/Text)-Kind hat.
    - Wenn der Austausch von `oldChild` durch `newChild` zu einem [`Document`](/de/docs/Web/API/Document) mit mehr als einem [`Element`](/de/docs/Web/API/Element) als Kind führen würde.
    - Wenn der Austausch von `oldChild` durch `newChild` zur Anwesenheit eines [`Element`](/de/docs/Web/API/Element)-Knotens vor einem [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten führen würde.
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
const sp1_content = document.createTextNode("new replacement span element.");

// Apply that content to the new element
sp1.appendChild(sp1_content);

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
