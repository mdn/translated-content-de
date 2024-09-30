---
title: "CustomElementRegistry: whenDefined() Methode"
short-title: whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
l10n:
  sourceCommit: 55fe0ef0be11c6d18012d18b355d46f9df60c4db
---

{{APIRef("Web Components")}}

Die **`whenDefined()`** Methode der
[`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das benannte Element definiert ist.

## Syntax

```js-nolint
whenDefined(name)
```

### Parameter

- `name`
  - : Der Name des benutzerdefinierten Elements.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Konstruktor des [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) erfüllt wird, wenn ein benutzerdefiniertes Element mit dem angegebenen Namen definiert wird. Wenn bereits ein benutzerdefiniertes Element mit dem Namen definiert wurde, wird das Promise sofort erfüllt.

Das Promise wird mit einem `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn der Name kein [gültiger Name für benutzerdefinierte Elemente](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) ist.

## Beispiele

In diesem Beispiel wird `whenDefined()` verwendet, um zu erkennen, wann die benutzerdefinierten Elemente, die ein Menü bilden, definiert werden. Das Menü zeigt Platzhalterinhalte an, bis der eigentliche Menüinhalt bereit steht.

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
  const promises = [...undefinedElements].map((button) =>
    customElements.whenDefined(button.localName),
  );

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
