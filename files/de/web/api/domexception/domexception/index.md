---
title: "DOMException: DOMException()-Konstruktor"
short-title: DOMException()
slug: Web/API/DOMException/DOMException
l10n:
  sourceCommit: 24bd423551fb4a36f47790cab237a2d157a990a7
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`DOMException()`**-Konstruktor gibt ein
[`DOMException`](/de/docs/Web/API/DOMException)-Objekt mit einer angegebenen Nachricht und einem Namen zurück.

## Syntax

```js-nolint
new DOMException()
new DOMException(message)
new DOMException(message, name)
```

### Parameter

- `message` {{optional_inline}}
  - : Eine Beschreibung der Ausnahme. Wenn nicht vorhanden, wird der leere String `''` verwendet.
- `name` {{optional_inline}}
  - : Ein String. Wenn der angegebene Name ein [standardmäßiger Fehlername](/de/docs/Web/API/DOMException#error_names) ist, dann gibt das Abrufen der [`code`](/de/docs/Web/API/DOMException/code)-Eigenschaft des `DOMException`-Objekts die Codenummer zurück, die dem angegebenen Namen entspricht. Wenn nicht vorhanden, wird der String `'Error'` verwendet.

### Rückgabewert

Ein neu erstelltes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt.

## Beispiele

In diesem Beispiel führt das Drücken des Buttons dazu, dass eine benutzerdefinierte `DOMException` ausgelöst wird, die dann abgefangen und die benutzerdefinierte Fehlermeldung in einem Alert angezeigt wird.

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

- [Ein Polyfill des `DOMException`-Konstruktors](https://github.com/zloirock/core-js#domexception) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar.
