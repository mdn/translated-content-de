---
title: "CustomElementRegistry: whenDefined()-Methode"
short-title: whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
l10n:
  sourceCommit: 55fe0ef0be11c6d18012d18b355d46f9df60c4db
---

{{APIRef("Web Components")}}

Die **`whenDefined()`**-Methode des {{domxref("CustomElementRegistry")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das benannte Element definiert wird.

## Syntax

```js-nolint
whenDefined(name)
```

### Parameter

- `name`
  - : Der Name des benutzerdefinierten Elements.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird mit dem [benutzerdefinierten Element](/de/docs/Web/API/Web_components/Using_custom_elements)'s Konstruktor, wenn ein benutzerdefiniertes Element mit dem angegebenen Namen definiert wird. Falls ein benutzerdefiniertes Element bereits mit dem Namen definiert wurde, wird das Promise sofort erfüllt.

Das Promise wird mit einem `SyntaxError` {{domxref("DOMException")}} abgelehnt, wenn der Name kein [gültiger benutzerdefinierter Elementname](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) ist.

## Beispiele

In diesem Beispiel wird `whenDefined()` verwendet, um zu erkennen, wann die benutzerdefinierten Elemente, die ein Menü bilden, definiert sind. Das Menü zeigt Platzhalterinhalt an, bis der tatsächliche Menüinhalt bereit ist, angezeigt zu werden.

```html
<nav id="menu-container">
  <div class="menu-placeholder">Laden…</div>
  <nav-menu>
    <menu-item>Element 1</menu-item>
    <menu-item>Element 2</menu-item>
    …
    <menu-item>Element N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById("menu-container");
const placeholder = container.querySelector(".menu-placeholder");
// Alle Kinder des Menüs abrufen, die noch nicht definiert sind.
const undefinedElements = container.querySelectorAll(":not(:defined)");

async function removePlaceholder() {
  const promises = [...undefinedElements].map((button) =>
    customElements.whenDefined(button.localName),
  );

  // Warten, bis alle Kinder aktualisiert sind
  await Promise.all(promises);
  // dann den Platzhalter entfernen
  container.removeChild(placeholder);
}

removePlaceholder();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
