---
title: "Node: insertBefore() Methode"
short-title: insertBefore()
slug: Web/API/Node/insertBefore
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`insertBefore()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
fügt einen Knoten vor einem _Referenzknoten_ als Kind eines angegebenen _Elternknotens_ ein.

Wenn der angegebene Knoten bereits im Dokument existiert, versetzt `insertBefore()` ihn von seiner aktuellen Position zur neuen Position. (Das bedeutet, er wird automatisch von seinem bestehenden Elternteil entfernt, bevor er dem angegebenen neuen Elternteil hinzugefügt wird.)

Das bedeutet, dass ein Knoten nicht gleichzeitig an zwei Positionen im Dokument sein kann.

> [!NOTE]
> Die Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) kann benutzt werden, um eine Kopie des Knotens zu erstellen, bevor er unter dem neuen Elternteil angehängt wird. Beachten Sie, dass die mit `cloneNode()` erstellten Kopien nicht automatisch synchron gehalten werden.

Wenn das angegebene Kind ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist, wird der gesamte Inhalt des `DocumentFragment` in die Kinderliste des angegebenen Elternknotens verschoben.

## Syntax

```js-nolint
insertBefore(newNode, referenceNode)
```

### Parameter

- `newNode`
  - : Der einzufügende Knoten.
- `referenceNode`
  - : Der Knoten, vor dem `newNode` eingefügt wird. Ist dies `null`, wird `newNode` am Ende der Kindknoten des Knotens eingefügt.
    > [!NOTE] > `referenceNode` ist **kein** optionaler Parameter. Sie müssen explizit einen [`Node`](/de/docs/Web/API/Node) oder `null` übergeben. Das Nichterfüllen dieser Anforderung oder das Übergeben ungültiger Werte kann in verschiedenen Browserversionen [unterschiedliches Verhalten](https://crbug.com/419780) [auslösen](https://bugzil.la/119489).

### Rückgabewert

Gibt das hinzugefügte Kind zurück (es sei denn, `newNode` ist ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), in diesem Fall wird das leere [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurückgegeben).

### Ausnahmen

Vor-Einfügungs-Gültigkeit

## Beispiel

### Beispiel 1

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>
```

```js
// Create the new node to insert
const newNode = document.createElement("span");

// Get a reference to the parent node
const parentDiv = document.getElementById("childElement").parentNode;

// Begin test case [ 1 ] : Existing childElement (all works correctly)
let sp2 = document.getElementById("childElement");
parentDiv.insertBefore(newNode, sp2);
// End test case [ 1 ]

// Begin test case [ 2 ] : childElement is of Type undefined
sp2 = undefined; // Non-existent node of id "childElement"
parentDiv.insertBefore(newNode, sp2); // Implicit dynamic cast to type Node
// End test case [ 2 ]

// Begin test case [ 3 ] : childElement is of Type "undefined" (string)
sp2 = "undefined"; // Non-existent node of id "childElement"
parentDiv.insertBefore(newNode, sp2); // Generates "Type Error: Invalid Argument"
// End test case [ 3 ]
```

### Beispiel 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>
```

```js
// Create a new, plain <span> element
const sp1 = document.createElement("span");

// Get the reference element
const sp2 = document.getElementById("childElement");
// Get the parent element
const parentDiv = sp2.parentNode;

// Insert the new element into before sp2
parentDiv.insertBefore(sp1, sp2);
```

> [!NOTE]
> Es gibt keine `insertAfter()`-Methode.
> Sie kann emuliert werden, indem die Methode `insertBefore` mit [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) kombiniert wird.
>
> Im vorherigen Beispiel könnte `sp1` nach `sp2` eingefügt werden, indem:
>
> ```js
> parentDiv.insertBefore(sp1, sp2.nextSibling);
> ```
>
> Wenn `sp2` kein nächstes Geschwisterelement hat, dann muss es das letzte Kind sein — `sp2.nextSibling` gibt `null` zurück, und `sp1` wird am Ende der Kindknotenliste eingefügt (unmittelbar nach `sp2`).

### Beispiel 3

Einfügen eines Elements vor dem ersten Kindelement unter Verwendung der
[`firstChild`](/de/docs/Web/API/Node/firstChild)-Eigenschaft.

```js
// Get the parent element
const parentElement = document.getElementById("parentElement");
// Get the parent's first child
const theFirstChild = parentElement.firstChild;

// Create a new element
const newElement = document.createElement("div");

// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild);
```

Wenn das Element kein erstes Kind hat, dann ist `firstChild` `null`. Das Element wird dennoch am Ende des Elternteils, nach dem letzten Kind, angehängt.

Da das Elternelement kein erstes Kind hatte, hatte es auch kein letztes Kind. Folglich ist das neu eingefügte Element das _einzige_ Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)
- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes)
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
- [`Element.before()`](/de/docs/Web/API/Element/before)
- [`Element.after()`](/de/docs/Web/API/Element/after)
