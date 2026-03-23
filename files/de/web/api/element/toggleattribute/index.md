---
title: "Element: toggleAttribute() Methode"
short-title: toggleAttribute()
slug: Web/API/Element/toggleAttribute
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("DOM")}}

Die **`toggleAttribute()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle schaltet ein Boolean-Attribut des angegebenen Elements um, indem es entfernt wird, wenn es vorhanden ist, und hinzugefügt wird, wenn es nicht vorhanden ist.

## Syntax

```js-nolint
toggleAttribute(name)
toggleAttribute(name, force)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, das umgeschaltet werden soll.
    Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `toggleAttribute()` auf ein HTML-Element in einem HTML-Dokument angewendet wird.
- `force` {{optional_inline}}
  - : Ein booleanes Wert, der folgende Auswirkungen hat:
    - Wenn er überhaupt nicht angegeben wird, "schaltet" die `toggleAttribute` Methode das Attribut mit dem Namen `name` um — es wird entfernt, wenn es vorhanden ist, oder hinzugefügt, wenn es nicht vorhanden ist
    - Wenn true, fügt die `toggleAttribute` Methode ein Attribut mit dem Namen `name` hinzu
    - Wenn false, entfernt die `toggleAttribute` Methode das Attribut mit dem Namen `name`

### Rückgabewert

`true`, wenn das Attribut **`name`** letztendlich
vorhanden ist, ansonsten `false`.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene Attributname `name` enthält ein oder mehrere Zeichen, die in Attributnamen nicht gültig sind.
    Der `name` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` (U+0000, U+002F, U+003D oder U+003E) enthalten.

## Beispiele

### Grundlegende Verwendung

Im folgenden Beispiel wird `toggleAttribute()` verwendet, um das `disabled`-Attribut eines {{HTMLElement("input")}} zu schalten.

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

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
