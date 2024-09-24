---
title: "Node: removeChild()-Methode"
short-title: removeChild()
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`removeChild()`**-Methode der {{domxref("Node")}}-Schnittstelle entfernt einen Kindknoten aus dem DOM und gibt den entfernten Knoten zurück.

> [!NOTE]
> Solange eine Referenz auf das entfernte Kind aufbewahrt wird,
> existiert es weiterhin im Speicher, ist jedoch nicht mehr Teil des DOM.
> Es kann später im Code wiederverwendet werden.
>
> Wenn der Rückgabewert von `removeChild()` nicht gespeichert wird und keine andere Referenz vorliegt,
> wird es nach kurzer Zeit [automatisch aus dem Speicher gelöscht](/de/docs/Web/JavaScript/Memory_management).

Im Gegensatz zu {{domxref("Node.cloneNode()")}} behält der Rückgabewert die mit ihm verbundenen `EventListener`-Objekte bei.

## Syntax

```js-nolint
removeChild(child)
```

### Parameter

- `child`
  - : Ein {{domxref("Node")}}, der der zu entfernende Kindknoten aus dem DOM ist.

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `child` kein Kind des Knotens ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `child` `null` ist.

## Beispiele

### Einfache Beispiele

Angenommen, dieses HTML:

```html
<div id="parent">
  <div id="child"></div>
</div>
```

Um ein bestimmtes Element zu entfernen, wenn der übergeordnete Knoten bekannt ist:

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```

Um ein bestimmtes Element zu entfernen, ohne den übergeordneten Knoten angeben zu müssen:

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
<!--Beispiel HTML-Code-->
<div id="parent"></div>
```

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Wirft einen nicht abgefangenen TypeError
const garbage = parent.removeChild(child);
```

### Einen NotFoundError verursachen

```html
<!--Beispiel HTML-Code-->
<div id="parent">
  <div id="child"></div>
</div>
```

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Dieser erste Aufruf entfernt den Knoten korrekt
const garbage = parent.removeChild(child);

// Wirft einen NotFoundError
garbage = parent.removeChild(child);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.parentNode")}}
- {{domxref("Element.remove()")}}
- {{domxref("Node.cloneNode()")}}
