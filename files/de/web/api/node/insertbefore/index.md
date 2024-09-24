---
title: "Node: insertBefore()-Methode"
short-title: insertBefore()
slug: Web/API/Node/insertBefore
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`insertBefore()`**-Methode der {{domxref("Node")}}-Schnittstelle
fügt einen Knoten vor einem _Referenzknoten_ als Kind eines angegebenen _Elternknotens_ ein.

Wenn der gegebene Knoten bereits im Dokument existiert,
verschiebt `insertBefore()` ihn von seiner aktuellen Position an die neue Position.
(Das bedeutet, dass er automatisch von seinem bestehenden Elternteil entfernt wird,
bevor er dem angegebenen neuen Elternteil hinzugefügt wird.)

Dies bedeutet, dass ein Knoten nicht gleichzeitig an zwei Stellen im Dokument sein kann.

> [!NOTE]
> Der {{domxref("Node.cloneNode()")}} kann verwendet werden, um eine Kopie
> des Knotens zu erstellen, bevor er unter dem neuen Elternteil hinzugefügt wird. Beachten Sie, dass die mit
> `cloneNode()` erstellten Kopien nicht automatisch synchron gehalten werden.

Wenn das gegebene Kind ein {{domxref("DocumentFragment")}} ist, werden die gesamten Inhalte des
`DocumentFragment` in die Kindliste des angegebenen Elternknotens verschoben.

## Syntax

```js-nolint
insertBefore(newNode, referenceNode)
```

### Parameter

- `newNode`
  - : Der einzufügende Knoten.
- `referenceNode`
  - : Der Knoten, vor dem `newNode` eingefügt wird. Wenn dies
    `null` ist, wird `newNode` am Ende der
    Kindknoten des Knotens eingefügt.
    > **Hinweis:** `referenceNode` ist **kein** optionaler Parameter.
    > Sie müssen explizit einen {{domxref("Node")}} oder `null` übergeben.
    > Falls dies unterlassen oder ungültige Werte übergeben werden, kann dies in verschiedenen Browserversionen [unterschiedlich](https://crbug.com/419780) [verhalten](https://bugzil.la/119489).

### Rückgabewert

Gibt das hinzugefügte Kind zurück (es sei denn, `newNode` ist ein {{domxref("DocumentFragment")}},
in diesem Fall wird das leere {{domxref("DocumentFragment")}} zurückgegeben).

### Ausnahmen

Prüfung der Einfügegültigkeit

## Beispiel

### Beispiel 1

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Erstellen Sie den neuen Knoten zum Einfügen
  const newNode = document.createElement("span");

  // Erhalten Sie eine Referenz auf den Elternknoten
  const parentDiv = document.getElementById("childElement").parentNode;

  // Beginn des Testfalls [ 1 ] : Vorhandenes childElement (funktioniert alles korrekt)
  let sp2 = document.getElementById("childElement");
  parentDiv.insertBefore(newNode, sp2);
  // Ende des Testfalls [ 1 ]

  // Beginn des Testfalls [ 2 ] : childElement ist von Typ undefined
  sp2 = undefined; // Nicht vorhandener Knoten mit der ID "childElement"
  parentDiv.insertBefore(newNode, sp2); // Implizite dynamische Umwandlung in Typ Node
  // Ende des Testfalls [ 2 ]

  // Beginn des Testfalls [ 3 ] : childElement ist von Typ "undefined" (String)
  sp2 = "undefined"; // Nicht vorhandener Knoten mit der ID "childElement"
  parentDiv.insertBefore(newNode, sp2); // Erzeugt "Type Error: Ungültiges Argument"
  // Ende des Testfalls [ 3 ]
</script>
```

### Beispiel 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Erstellen Sie ein neues, einfaches <span>-Element
  let sp1 = document.createElement("span");

  // Holen Sie das Referenzelement
  let sp2 = document.getElementById("childElement");
  // Erhalten Sie das Elternelement
  let parentDiv = sp2.parentNode;

  // Fügen Sie das neue Element vor sp2 ein
  parentDiv.insertBefore(sp1, sp2);
</script>
```

> [!NOTE]
> Es gibt keine `insertAfter()`-Methode.
> Sie kann emuliert werden, indem die `insertBefore`-Methode
> mit {{domxref("Node.nextSibling")}} kombiniert wird.
>
> Im vorherigen Beispiel könnte `sp1` hinter `sp2` eingefügt werden, indem:
>
> ```js
> parentDiv.insertBefore(sp1, sp2.nextSibling);
> ```
>
> Wenn `sp2` kein nächstes Geschwisterkind hat, dann muss es das letzte Kind sein —
> `sp2.nextSibling` gibt `null` zurück, und `sp1` wird am
> Ende der Kindknotenliste (direkt nach `sp2`) eingefügt.

### Beispiel 3

Einfügen eines Elements vor dem ersten Kindelement unter Verwendung der
{{domxref("Node/firstChild", "firstChild")}}-Eigenschaft.

```js
// Erhalten Sie das Elternelement
let parentElement = document.getElementById("parentElement");
// Erhalten Sie das erste Kind des Elternteils
let theFirstChild = parentElement.firstChild;

// Erstellen Sie ein neues Element
let newElement = document.createElement("div");

// Fügen Sie das neue Element vor dem ersten Kind ein
parentElement.insertBefore(newElement, theFirstChild);
```

Wenn das Element kein erstes Kind hat, ist `firstChild` `null`. Das Element wird immer noch dem Elternteil nach dem letzten Kind hinzugefügt.

Da das Elternelement kein erstes Kind hatte, hatte es auch kein letztes Kind.
Folglich ist das neu eingefügte Element das _einzige_ Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.prepend()")}}
- {{domxref("Element.before()")}}
- {{domxref("Element.after()")}}
