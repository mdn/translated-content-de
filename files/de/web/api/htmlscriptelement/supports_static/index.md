---
title: "HTMLScriptElement: supports() statische Methode"
short-title: supports()
slug: Web/API/HTMLScriptElement/supports_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Die statische **`supports()`**-Methode der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle bietet eine einfache und konsistente Methode zur Erkennung, welche Skripttypen vom Benutzeragenten unterstützt werden.

Es wird erwartet, dass die Methode `true` für klassische und Modulscripte zurückgibt, die von den meisten modernen Browsern unterstützt werden.

## Syntax

```js-nolint
HTMLScriptElement.supports(type)
```

### Parameter

- `type`

  - : Ein Zeichenfolgenliteral, das den Skripttyp anzeigt, für den die Unterstützung überprüft werden soll.
    Die unterstützten Werte unterscheiden zwischen Groß- und Kleinschreibung und umfassen:

    - `"classic"`
      - : Testet, ob _klassische Skripte_ unterstützt werden.
        "Klassische" Skripte sind die normalen/traditionellen JavaScript-Dateien, die den Modulskripten vorausgingen.
    - `"module"`
      - : Testet, ob [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) unterstützt werden.
    - `"importmap"`
      - : Testet, ob [Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) unterstützt werden.
    - `"speculationrules"`
      - : Testet, ob [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) unterstützt und aktiviert sind.

    Jeder andere Wert wird dazu führen, dass die Methode `false` zurückgibt.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Skripttyp unterstützt wird, andernfalls `false`.

## Beispiele

Der folgende Code zeigt, wie überprüft wird, ob `HTMLScriptElement.supports()` definiert ist und, wenn ja, wie es verwendet wird, um zu testen, ob bestimmte Skripttypen unterstützt werden.

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
- [`Worker`](/de/docs/Web/API/Worker/Worker)-Konstruktor
