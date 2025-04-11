---
title: "HTMLScriptElement: `supports()` statische Methode"
short-title: supports()
slug: Web/API/HTMLScriptElement/supports_static
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`supports()`** statische Methode des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces bietet eine einfache und konsistente Methode, um zu erkennen, welche Arten von Skripten vom Benutzeragenten unterstützt werden.

Es wird erwartet, dass die Methode `true` für klassische und Modulscripte zurückgibt, die von den meisten modernen Browsern unterstützt werden.

## Syntax

```js-nolint
HTMLScriptElement.supports(type)
```

### Parameter

- `type`

  - : Ein string-Literal, das den Typ des Skripts angibt, für das die Unterstützung überprüft werden soll. Unterstützte Werte sind case-sensitiv und beinhalten:

    - `"classic"`
      - : Test, ob _klassische Skripte_ unterstützt werden.
        "Klassische" Skripte sind die normalen/ traditionellen JavaScript-Dateien, die vor Modulscripten existierten.
    - `"module"`
      - : Test, ob [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) unterstützt werden.
    - `"importmap"`
      - : Test, ob [Importmaps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) unterstützt werden.
    - `"speculationrules"`
      - : Test, ob [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API) unterstützt und aktiviert sind.

    Jeder andere Wert führt dazu, dass die Methode `false` zurückgibt.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Skripttyp unterstützt wird, und `false` andernfalls.

## Beispiele

Der folgende Code zeigt, wie überprüft wird, ob `HTMLScriptElement.supports()` definiert ist, und falls ja, wie es verwendet wird, um zu testen, ob bestimmte Arten von Skripten unterstützt werden.

```js
const log = document.getElementById("log");

function checkSupport(type) {
  const result = HTMLScriptElement.supports(type) ? "true" : "false";
  log.textContent += `HTMLScriptElement.supports('${type}') is ${result}\n`;
}

if (typeof HTMLScriptElement.supports === "undefined") {
  log.textContent = "HTMLScriptElement.supports() method is not supported";
} else {
  // Check if various script types are supported
  checkSupport("module");
  checkSupport("classic");
  checkSupport("importmap");
  checkSupport("speculationrules");
  // Any other value will cause the method to return false
  checkSupport("anything else");
}
```

```html hidden
<textarea id="log" rows="6" cols="80"></textarea>
```

{{ EmbedLiveSample('Examples') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)
- {{HTMLElement("script")}}
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
- [`Worker`](/de/docs/Web/API/Worker/Worker) Konstruktor
