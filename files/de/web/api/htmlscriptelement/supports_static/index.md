---
title: "HTMLScriptElement: supports()-Methode"
short-title: supports()
slug: Web/API/HTMLScriptElement/supports_static
l10n:
  sourceCommit: 3bd335bf04ca78b7f4917ebc99e0f4f47f11d3de
---

{{APIRef("HTML DOM")}}

Die **`supports()`** statische Methode des {{domxref("HTMLScriptElement")}} Interfaces bietet eine einfache und konsistente Möglichkeit, um festzustellen, welche Arten von Skripten vom Benutzeragenten unterstützt werden.

Es wird erwartet, dass die Methode `true` für klassische und Modul-Skripte zurückgibt, die von den meisten modernen Browsern unterstützt werden.

## Syntax

```js-nolint
HTMLScriptElement.supports(type)
```

### Parameter

- `type`

  - : Ein Zeichenfolgenliteral, das den Skripttyp angibt, für den die Unterstützung überprüft werden soll. Die unterstützten Werte sind groß-/kleinschreibungssensitiv und umfassen:

    - `"classic"`
      - : Testen, ob _klassische Skripte_ unterstützt werden.
        "Klassische" Skripte sind die normalen/traditionellen JavaScript-Dateien, die Modulscripten vorausgehen.
    - `"module"`
      - : Testen, ob [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) unterstützt werden.
    - `"importmap"`
      - : Testen, ob [Import Maps](/de/docs/Web/HTML/Element/script/type/importmap) unterstützt werden.
    - `"speculationrules"`
      - : Testen, ob [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) unterstützt und aktiviert sind.

    Jeder andere Wert wird dazu führen, dass die Methode `false` zurückgibt.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Skripttyp unterstützt wird, und `false` andernfalls.

## Beispiele

Der untenstehende Code zeigt, wie man überprüft, ob `HTMLScriptElement.supports()` definiert ist, und wenn ja, wie man es verwendet, um zu testen, ob bestimmte Skripttypen unterstützt werden.

```js
const log = document.getElementById("log");

function checkSupport(type) {
  const result = HTMLScriptElement.supports(type) ? "true" : "false";
  log.textContent += `HTMLScriptElement.supports('${type}') is ${result}\n`;
}

if (typeof HTMLScriptElement.supports === "undefined") {
  log.textContent = "HTMLScriptElement.supports() method is not supported";
} else {
  // Überprüfen, ob verschiedene Skripttypen unterstützt werden
  checkSupport("module");
  checkSupport("classic");
  checkSupport("importmap");
  checkSupport("speculationrules");
  // Jeder andere Wert wird dazu führen, dass die Methode false zurückgibt
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

- {{domxref("HTMLScriptElement")}}
- {{HTMLElement("script")}}
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
- {{domxref("Worker/Worker","Worker")}} Konstruktor
