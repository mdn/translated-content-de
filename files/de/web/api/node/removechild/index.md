---
title: "Node: removeChild() Methode"
short-title: removeChild()
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("DOM")}}

Die **`removeChild()`** Methode des [`Node`](/de/docs/Web/API/Node) Interfaces entfernt ein Kindknoten aus dem DOM und gibt den entfernten Knoten zurück.

> [!NOTE]
> Solange eine Referenz auf das entfernte Kind behalten wird,
> existiert es weiterhin im Speicher, ist jedoch nicht mehr Teil des DOM.
> Es kann später im Code wiederverwendet werden.
>
> Wenn der Rückgabewert von `removeChild()` nicht gespeichert wird und keine andere Referenz erhalten bleibt,
> wird es nach kurzer Zeit [automatisch aus dem Speicher gelöscht](/de/docs/Web/JavaScript/Guide/Memory_management).

Im Gegensatz zu [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) behält der Rückgabewert die ihm zugeordneten `EventListener` Objekte.

## Syntax

```js-nolint
removeChild(child)
```

### Parameter

- `child`
  - : Ein [`Node`](/de/docs/Web/API/Node), der der Kindknoten ist, der aus dem DOM entfernt werden soll.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `child` kein Kind des Knotens ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `child` `null` ist.

## Beispiele

### Einfache Beispiele

Gegeben ist dieses HTML:

```html
<div id="parent">
  <div id="child"></div>
</div>
```

Um ein bestimmtes Element zu entfernen, wenn dessen Elternknoten bekannt ist:

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```

Um ein bestimmtes Element zu entfernen, ohne dessen Elternknoten anzugeben:

```js
const node = document.getElementById("child");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

Um alle Kinder eines Elements zu entfernen:

```js
const element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

### Verursacht einen TypeError

```html
<!--Sample HTML code-->
<div id="parent"></div>
```

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Throws Uncaught TypeError
const garbage = parent.removeChild(child);
```

### Verursacht einen NotFoundError

```html
<!--Sample HTML code-->
<div id="parent">
  <div id="child"></div>
</div>
```

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// This first call correctly removes the node
const garbage = parent.removeChild(child);

// Second call throws NotFoundError
parent.removeChild(child);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.replaceChild()`](/de/docs/Web/API/Node/replaceChild)
- [`Node.parentNode`](/de/docs/Web/API/Node/parentNode)
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
- [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)
