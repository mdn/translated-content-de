---
title: "HTMLScriptElement: supports() statische Methode"
short-title: supports()
slug: Web/API/HTMLScriptElement/supports_static
l10n:
  sourceCommit: 3bd335bf04ca78b7f4917ebc99e0f4f47f11d3de
---

{{APIRef("HTML DOM")}}

Die **`supports()`** statische Methode der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle bietet eine einfache und konsistente Methode zur Feature-Erkennung, welche Arten von Skripten von der Benutzerumgebung unterstützt werden.

Es wird erwartet, dass die Methode `true` für klassische und Modulscripte zurückgibt, die von den meisten modernen Browsern unterstützt werden.

## Syntax

```js-nolint
HTMLScriptElement.supports(type)
```

### Parameter

- `type`

  - : Ein String-Literal, das den Skripttyp angibt, für den die Unterstützung überprüft werden soll.
    Unterstützte Werte sind groß- und kleinschreibungssensitiv und umfassen:

    - `"classic"`
      - : Testet, ob _klassische Skripte_ unterstützt werden.
        "Klassische" Skripte sind die normalen/traditionellen JavaScript-Dateien, die Modulscripten vorausgingen.
    - `"module"`
      - : Testet, ob [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) unterstützt werden.
    - `"importmap"`
      - : Testet, ob [Import Maps](/de/docs/Web/HTML/Element/script/type/importmap) unterstützt werden.
    - `"speculationrules"`
      - : Testet, ob [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) unterstützt und aktiviert sind.

    Jeder andere Wert führt dazu, dass die Methode `false` zurückgibt.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Skripttyp unterstützt wird, und `false` andernfalls.

## Beispiele

Der untenstehende Code zeigt, wie man überprüft, ob `HTMLScriptElement.supports()` definiert ist, und falls ja, wie man es verwendet, um zu testen, ob bestimmte Arten von Skripten unterstützt werden.

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
