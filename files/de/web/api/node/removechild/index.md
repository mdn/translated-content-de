---
title: "Node: removeChild() Methode"
short-title: removeChild()
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{APIRef("DOM")}}

Die **`removeChild()`** Methode des [`Node`](/de/docs/Web/API/Node) Interfaces entfernt ein Kindknoten aus dem DOM und gibt den entfernten Knoten zurück.

> [!NOTE]
> Solange ein Verweis auf das entfernte Kind beibehalten wird,
> existiert es weiterhin im Speicher, ist aber nicht mehr Teil des DOM.
> Es kann später im Code wiederverwendet werden.
>
> Wenn der Rückgabewert von `removeChild()` nicht gespeichert wird und kein anderer Verweis vorhanden ist,
> wird es [automatisch gelöscht](/de/docs/Web/JavaScript/Guide/Memory_management) aus dem Speicher nach kurzer Zeit.

Im Gegensatz zu [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) bleiben die mit ihm verbundenen `EventListener` Objekte beim Rückgabewert erhalten.

## Syntax

```js-nolint
removeChild(child)
```

### Parameter

- `child`
  - : Ein [`Node`](/de/docs/Web/API/Node), welches der Kindknoten ist, der aus dem DOM entfernt werden soll.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `child` nicht ein Kind des Knotens ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `child` `null` ist.

## Beispiele

### Einfache Beispiele

Angenommen, wir haben dieses HTML:

```html
<div id="parent">
  <div id="child"></div>
</div>
```

Um ein angegebenes Element zu entfernen, wenn dessen Elternknoten bekannt ist:

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```

Um ein angegebenes Element zu entfernen, ohne seinen Elternknoten angeben zu müssen:

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
