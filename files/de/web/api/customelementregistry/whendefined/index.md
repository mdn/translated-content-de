---
title: "CustomElementRegistry: whenDefined() Methode"
short-title: whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("Web Components")}}

Die **`whenDefined()`** Methode der [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das benannte Element definiert ist.

## Syntax

```js-nolint
whenDefined(name)
```

### Parameter

- `name`
  - : Der Name des benutzerdefinierten Elements.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Konstruktor des [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) erfüllt wird, wenn ein benutzerdefiniertes Element mit dem angegebenen Namen definiert wird.
Wenn ein benutzerdefiniertes Element bereits mit dem Namen definiert wurde, wird das Promise sofort erfüllt.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene [Name](#name) ist kein [gültiger Name für ein benutzerdefiniertes Element](/de/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verwendet `whenDefined()`, um zu erkennen, wann die benutzerdefinierten Elemente, die ein Menü bilden, definiert sind. Das Menü zeigt Platzhalterinhalte an, bis die tatsächlichen Menüinhalte bereit sind, angezeigt zu werden.

```html
<nav id="menu-container">
  <div class="menu-placeholder">Loading…</div>
  <nav-menu>
    <menu-item>Item 1</menu-item>
    <menu-item>Item 2</menu-item>
    …
    <menu-item>Item N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById("menu-container");
const placeholder = container.querySelector(".menu-placeholder");
// Fetch all the children of menu that are not yet defined.
const undefinedElements = container.querySelectorAll(":not(:defined)");

async function removePlaceholder() {
  // Filter the elements down to unique localNames
  const tags = new Set(
    [...undefinedElements].map((button) => button.localName),
  );
  const promises = [...tags].map((tag) => customElements.whenDefined(tag));

  // Wait for all the children to be upgraded
  await Promise.all(promises);
  // then remove the placeholder
  container.removeChild(placeholder);
}

removePlaceholder();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
