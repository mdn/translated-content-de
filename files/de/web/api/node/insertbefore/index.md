---
title: "Node: insertBefore()-Methode"
short-title: insertBefore()
slug: Web/API/Node/insertBefore
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`insertBefore()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle fügt einen Knoten vor einem _Referenzknoten_ als Kind eines angegebenen _Elternknotens_ ein.

Wenn der angegebene Knoten bereits im Dokument existiert, bewegt `insertBefore()` ihn von seiner aktuellen Position zur neuen Position. Das bedeutet, er wird automatisch von seinem bestehenden Elternknoten entfernt, bevor er dem neuen Elternknoten hinzugefügt wird.

Dies bedeutet, dass ein Knoten nicht gleichzeitig an zwei Stellen im Dokument vorhanden sein kann.

> [!NOTE]
> Die Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) kann verwendet werden, um eine Kopie des Knotens zu erstellen, bevor er dem neuen Elternknoten hinzugefügt wird. Beachten Sie, dass die mit `cloneNode()` erstellten Kopien nicht automatisch synchron gehalten werden.

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
    > **Hinweis:** `referenceNode` ist **kein** optionaler Parameter. Sie müssen explizit einen [`Node`](/de/docs/Web/API/Node) oder `null` übergeben. Wenn Sie dies unterlassen oder ungültige Werte angeben, kann dies in verschiedenen Browserversionen [unterschiedlich](https://crbug.com/419780) [verhalten](https://bugzil.la/119489).

### Rückgabewert

Gibt das hinzugefügte Kind zurück (es sei denn, `newNode` ist ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), in diesem Fall wird das leere [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurückgegeben).

### Ausnahmen

Vorgültigkeit der Einfügung

## Beispiel

### Beispiel 1

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
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
</script>
```

### Beispiel 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Create a new, plain <span> element
  let sp1 = document.createElement("span");

  // Get the reference element
  let sp2 = document.getElementById("childElement");
  // Get the parent element
  let parentDiv = sp2.parentNode;

  // Insert the new element into before sp2
  parentDiv.insertBefore(sp1, sp2);
</script>
```

> [!NOTE]
> Es gibt keine `insertAfter()`-Methode. Sie kann emuliert werden, indem die Methode `insertBefore` mit [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling) kombiniert wird.
>
> Im vorherigen Beispiel könnte `sp1` nach `sp2` eingefügt werden mit:
>
> ```js
> parentDiv.insertBefore(sp1, sp2.nextSibling);
> ```
>
> Hat `sp2` kein nächstes Geschwister, dann muss es das letzte Kind sein — `sp2.nextSibling` gibt `null` zurück, und `sp1` wird am Ende der Kindknotenliste eingefügt (unmittelbar nach `sp2`).

### Beispiel 3

Einfügen eines Elements vor dem ersten Kindelement unter Verwendung der [`firstChild`](/de/docs/Web/API/Node/firstChild)-Eigenschaft.

```js
// Get the parent element
let parentElement = document.getElementById("parentElement");
// Get the parent's first child
let theFirstChild = parentElement.firstChild;

// Create a new element
let newElement = document.createElement("div");

// Insert the new element before the first child
parentElement.insertBefore(newElement, theFirstChild);
```

Wenn das Element kein erstes Kind hat, ist `firstChild` `null`. Das Element wird dennoch dem Elternknoten hinzugefügt, nach dem letzten Kind.

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
