---
title: "Element: toggleAttribute()-Methode"
short-title: toggleAttribute()
slug: Web/API/Element/toggleAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

Die **`toggleAttribute()`**-Methode des {{domxref("Element")}}-Interfaces schaltet ein Boolesches Attribut um (entfernt es, wenn es vorhanden ist, und fügt es hinzu, wenn es nicht vorhanden ist) auf dem angegebenen Element.

## Syntax

```js-nolint
toggleAttribute(name)
toggleAttribute(name, force)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, das umgeschaltet werden soll. Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `toggleAttribute()` auf einem HTML-Element in einem HTML-Dokument aufgerufen wird.
- `force` {{optional_inline}}
  - : Ein Boolean-Wert mit den folgenden Auswirkungen:
    - Wenn überhaupt nicht angegeben, "schaltet" die `toggleAttribute`-Methode das Attribut mit dem Namen `name` um — entfernt es, wenn es vorhanden ist, oder fügt es andernfalls hinzu, wenn es nicht vorhanden ist
    - Wenn true, fügt die `toggleAttribute`-Methode ein Attribut mit dem Namen `name` hinzu
    - Wenn false, entfernt die `toggleAttribute`-Methode das Attribut mit dem Namen `name`

### Rückgabewert

`true`, wenn das Attribut **`name`** letztendlich vorhanden ist, und `false` ansonsten.

### Ausnahmen

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Das angegebene Attribut `name` enthält ein oder mehrere Zeichen, die in Attributnamen nicht gültig sind.

## Beispiele

Im folgenden Beispiel wird `toggleAttribute()` verwendet, um das `disabled`-Attribut eines {{HTMLElement("input")}} umzuschalten.

### HTML

```html
<input value="text" /> <button>toggleAttribute("disabled")</button>
```

### JavaScript

```js
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  input.toggleAttribute("disabled");
});
```

### Ergebnis

{{ EmbedLiveSample('Examples', '300', '50') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.setAttribute()")}}
