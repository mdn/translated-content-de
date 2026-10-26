---
title: "DOMException: DOMException()-Konstruktor"
short-title: DOMException()
slug: Web/API/DOMException/DOMException
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`DOMException()`**-Konstruktor gibt ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt mit einer angegebenen Meldung und einem angegebenen Namen zurück.

## Syntax

```js-nolint
new DOMException()
new DOMException(message)
new DOMException(message, name)
```

### Parameter

- `message` {{optional_inline}}
  - : Eine Beschreibung der Ausnahme. Wenn der Parameter nicht angegeben wird, wird die leere Zeichenfolge `''` verwendet.
- `name` {{optional_inline}}
  - : Eine Zeichenfolge. Wenn der angegebene Name ein [Standardfehlername](/de/docs/Web/API/DOMException#error_names) ist, gibt die [`code`](/de/docs/Web/API/DOMException/code)-Eigenschaft des `DOMException`-Objekts die dem angegebenen Namen entsprechende Codenummer zurück. Wenn der Parameter nicht angegeben wird, wird die Zeichenfolge `'Error'` verwendet.

### Rückgabewert

Ein neu erstelltes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt.

## Beispiele

In diesem Beispiel wird durch Klicken auf die Schaltfläche eine benutzerdefinierte `DOMException` ausgelöst. Diese wird anschließend abgefangen und die benutzerdefinierte Fehlermeldung in einem Dialogfenster angezeigt.

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

- [Ein Polyfill für den `DOMException`-Konstruktor](https://core-js.io/docs/features/web-standards/dom-exception) ist in [`core-js`](https://core-js.io/) verfügbar.
