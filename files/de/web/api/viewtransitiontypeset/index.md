---
title: ViewTransitionTypeSet
slug: Web/API/ViewTransitionTypeSet
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("View Transition API")}}

Das **`ViewTransitionTypeSet`**-Interface der [View Transition API](/de/docs/Web/API/View_Transition_API) ist ein [set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das die Typen eines aktiven View-Transitions darstellt. Dies ermöglicht es, die Typen während einer Transition dynamisch abzufragen oder zu modifizieren.

Das `ViewTransitionTypeSet`-Objekt kann über die [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft aufgerufen werden.

Die untenstehenden Eigenschaften- und Methodenlinks verweisen auf die JavaScript-Dokumentation des {{jsxref("Set")}}-Objekts.

## Instanzeigenschaften

- {{jsxref("Set.prototype.size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

- {{jsxref("Set.prototype.add")}}
  - : Fügt den angegebenen Wert in dieses Set ein, falls er nicht bereits vorhanden ist.
- {{jsxref("Set.prototype.clear()")}}
  - : Entfernt alle Werte aus dem Set.
- {{jsxref("Set.prototype.delete()")}}
  - : Entfernt den angegebenen Wert aus diesem Set, falls er im Set vorhanden ist.
- {{jsxref("Set.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfüge-Reihenfolge enthält.
- {{jsxref("Set.prototype.forEach()")}}
  - : Ruft eine Callback-Funktion einmal für jeden im Set vorhandenen Wert in Einfüge-Reihenfolge auf.
- {{jsxref("Set.prototype.has()")}}
  - : Gibt einen Boolean zurück, der anzeigt, ob der angegebene Wert im Set existiert.
- {{jsxref("Set.prototype.keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im Set in Einfüge-Reihenfolge liefert.
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im Set in Einfüge-Reihenfolge liefert.

## Beispiele

```js
// Start a view transition
const vt = document.startViewTransition({
  update: updateTheDOMSomehow,
  types: ["slideLeft", "fadeOut", "flipVertical"],
});

// Add another type
vt.types.add("flipHorizontal");

// Delete a type
vt.types.delete("flipVertical");

// Return the number of types in the set
console.log(vt.types.size);

// Log each type to the console
vt.types.forEach((type) => console.log(type));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using)
- [Verwendung von View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
