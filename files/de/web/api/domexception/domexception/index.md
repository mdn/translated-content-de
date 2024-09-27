---
title: "DOMException: DOMException() Konstruktor"
short-title: DOMException()
slug: Web/API/DOMException/DOMException
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Der **`DOMException()`** Konstruktor gibt ein
[`DOMException`](/de/docs/Web/API/DOMException)-Objekt mit einer angegebenen Nachricht und einem Namen zurück.

## Syntax

```js-nolint
new DOMException()
new DOMException(message)
new DOMException(message, name)
```

### Parameter

- `message` {{optional_inline}}
  - : Eine Beschreibung der Ausnahme. Ist sie nicht vorhanden, wird der leere String `''` verwendet.
- `name` {{optional_inline}}
  - : Ein String. Wenn der angegebene Name ein [standardmäßiger Fehlername](/de/docs/Web/API/DOMException#error_names) ist, dann wird beim Abrufen der [`code`](/de/docs/Web/API/DOMException/code) Eigenschaft des `DOMException`-Objekts die Code-Nummer zurückgegeben, die dem angegebenen Namen entspricht.

### Rückgabewert

Ein neu erstelltes [`DOMException`](/de/docs/Web/API/DOMException) Objekt.

## Beispiele

In diesem Beispiel führt das Drücken der Schaltfläche dazu, dass eine benutzerdefinierte `DOMException` ausgelöst wird, die dann abgefangen wird und die benutzerdefinierte Fehlermeldung in einem Hinweis angezeigt wird.

### HTML

```html
<button>Trigger DOM Exception</button>

<p id="output"></p>
```

### JavaScript

```js
const button = document.querySelector("button");

button.onclick = () => {
  try {
    throw new DOMException("Custom DOM Exception Triggered.");
  } catch (error) {
    document.querySelector("#output").textContent = `Error: ${error.message}`;
  }
};
```

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', 100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill des `DOMException` Konstruktors](https://github.com/zloirock/core-js#domexception) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar.
