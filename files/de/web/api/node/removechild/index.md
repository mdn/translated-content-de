---
title: "Node: removeChild()-Methode"
short-title: removeChild()
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`removeChild()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
entfernt einen Kindknoten aus dem DOM und gibt den entfernten Knoten zurück.

> [!NOTE]
> Solange ein Verweis auf das entfernte Kind beibehalten wird,
> existiert es weiterhin im Speicher, ist aber nicht mehr Teil des DOM.
> Es kann später im Code wiederverwendet werden.
>
> Wenn der Rückgabewert von `removeChild()` nicht gespeichert wird und kein anderer Verweis beibehalten wird,
> wird es nach kurzer Zeit [automatisch aus dem Speicher gelöscht](/de/docs/Web/JavaScript/Memory_management).

Im Gegensatz zu [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) behält der Rückgabewert die mit ihm verbundenen `EventListener`-Objekte bei.

## Syntax

```js-nolint
removeChild(child)
```

### Parameter

- `child`
  - : Ein [`Node`](/de/docs/Web/API/Node), das der Kindknoten ist, der aus dem DOM entfernt werden soll.

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

Um ein bestimmtes Element zu entfernen, wenn sein übergeordneter Knoten bekannt ist:

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```

Um ein bestimmtes Element zu entfernen, ohne seinen übergeordneten Knoten angeben zu müssen:

```js
const node = document.getElementById("child");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

Um alle Kinder von einem Element zu entfernen:

```js
const element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

### Einen TypeError verursachen

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

### Einen NotFoundError verursachen

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

// Throws NotFoundError
garbage = parent.removeChild(child);
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
