---
title: TextEncoder
slug: Web/API/TextEncoder
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextEncoder`**-Interface ermöglicht es Ihnen, einen JavaScript-String mit {{Glossary("UTF-8", "UTF-8")}} zu {{Glossary("character_encoding", "kodieren")}}.

## Konstruktor

- [`TextEncoder()`](/de/docs/Web/API/TextEncoder/TextEncoder)
  - : Erstellt und gibt einen neuen `TextEncoder` zurück.

## Instanz-Eigenschaften

_Das `TextEncoder`-Interface erbt keine Eigenschaften._

- [`TextEncoder.encoding`](/de/docs/Web/API/TextEncoder/encoding) {{ReadOnlyInline}}
  - : Gibt immer `utf-8` zurück.

## Instanz-Methoden

_Das `TextEncoder`-Interface erbt keine Methoden._

- [`TextEncoder.encode()`](/de/docs/Web/API/TextEncoder/encode)
  - : Nimmt einen String als Eingabe und gibt ein {{jsxref("Uint8Array")}} zurück, das den String kodiert im UTF-8-Format enthält.
- [`TextEncoder.encodeInto()`](/de/docs/Web/API/TextEncoder/encodeInto)
  - : Nimmt einen zu kodierenden String und ein Ziel-{{jsxref("Uint8Array")}}, um den resultierenden UTF-8-kodierten Text zu platzieren, und gibt ein Objekt zurück, das den Fortschritt der Kodierung anzeigt.
    Dies kann potenziell leistungsfähiger sein als die ältere `encode()`-Methode.

## Beispiele

### Kodierung in UTF-8

Dieses Beispiel zeigt, wie das Zeichen "€" in UTF-8 kodiert wird.

```html
<button id="encode">Encode</button>
<button id="reset">Reset</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

```js
const utf8encoder = new TextEncoder();
const text = "€";

const output = document.querySelector("#output");
const encodeButton = document.querySelector("#encode");
encodeButton.addEventListener("click", () => {
  output.textContent = utf8encoder.encode(text);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});
```

{{embedlivesample("Encoding to UTF-8")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Interface, das die umgekehrte Operation beschreibt.
