---
title: "CustomElementRegistry: whenDefined() Methode"
short-title: whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
l10n:
  sourceCommit: 0edb4dbed5c7bfbc1dc8f2efd43bb4a5fe52f2d1
---

{{APIRef("Web Components")}}

Die **`whenDefined()`** Methode der
[`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das benannte Element definiert ist.

## Syntax

```js-nolint
whenDefined(name)
```

### Parameter

- `name`
  - : Der Name des benutzerdefinierten Elements.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Konstruktor des [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) erfüllt wird, wenn ein benutzerdefiniertes Element mit dem angegebenen Namen definiert ist. Wenn ein benutzerdefiniertes Element bereits mit dem Namen definiert wurde, wird das Promise sofort erfüllt.

Das Promise wird mit einem `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn der Name kein [gültiger Name für ein benutzerdefiniertes Element](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) ist.

## Beispiele

Dieses Beispiel verwendet `whenDefined()`, um zu erkennen, wann die benutzerdefinierten Elemente, die ein Menü bilden, definiert sind. Das Menü zeigt Platzhalterinhalte an, bis der tatsächliche Menüinhalt bereit ist, angezeigt zu werden.

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
