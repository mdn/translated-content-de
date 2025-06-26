---
title: "Node: removeChild() Methode"
short-title: removeChild()
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("DOM")}}

Die **`removeChild()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
entfernt ein Kindknoten aus dem DOM und gibt den entfernten Knoten zurück.

> [!NOTE]
> Solange eine Referenz auf das entfernte Kind beibehalten wird,
> existiert es noch im Speicher, ist aber nicht mehr Teil des DOM.
> Es kann später im Code noch wiederverwendet werden.
>
> Wenn der Rückgabewert von `removeChild()` nicht gespeichert wird und keine andere Referenz besteht,
> wird es [automatisch gelöscht](/de/docs/Web/JavaScript/Guide/Memory_management) aus dem Speicher nach kurzer Zeit.

Anders als bei [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) behält der Rückgabewert die mit ihm verbundenen `EventListener`-Objekte bei.

## Syntax

```js-nolint
removeChild(child)
```

### Parameter

- `child`
  - : Ein [`Node`](/de/docs/Web/API/Node), der der Kindknoten ist, der aus dem DOM entfernt werden soll.

### Rückgabewert

Der entfernte `child`-Knoten.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `child` kein Kind des Knotens ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `child` `null` ist.

## Beispiele

### Einfache Beispiele

Gegebenes HTML:

```html
<div id="parent">
  <div id="child"></div>
</div>
```

Um ein bestimmtes Element zu entfernen, wenn dessen übergeordneter Knoten bekannt ist:

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```

Um ein bestimmtes Element zu entfernen, ohne dessen übergeordneten Knoten anzugeben:

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

### Hervorrufen eines TypeError

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

### Hervorrufen eines NotFoundError

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
