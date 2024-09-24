---
title: TextEncoder
slug: Web/API/TextEncoder
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Encoding API")}} {{AvailableInWorkers}}

Das **`TextEncoder`**-Interface nimmt einen Strom von Codepunkten als Eingabe und erzeugt einen Strom von UTF-8-Bytes.

## Konstruktor

- {{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : Gibt einen neu konstruierten `TextEncoder` zurück, der einen Bytestrom mit UTF-8-Codierung erzeugt.

## Instanzeigenschaften

_Das `TextEncoder`-Interface erbt keine Eigenschaften._

- {{DOMxRef("TextEncoder.encoding")}} {{ReadOnlyInline}}
  - : Gibt immer `utf-8` zurück.

## Instanzmethoden

_Das `TextEncoder`-Interface erbt keine Methoden_.

- {{DOMxRef("TextEncoder.encode()")}}
  - : Nimmt einen String als Eingabe und gibt ein {{jsxref("Uint8Array")}} zurück, das den UTF-8-kodierten Text enthält.
- {{DOMxRef("TextEncoder.encodeInto()")}}
  - : Nimmt einen zu codierenden String und ein Ziel-{{jsxref("Uint8Array")}} zur Aufnahme des resultierenden UTF-8-kodierten Textes und gibt ein Objekt zurück, das den Fortschritt der Codierung anzeigt. Dies ist potenziell leistungsfähiger als die ältere `encode()`-Methode.

## Beispiele

```js
const encoder = new TextEncoder();
const view = encoder.encode("€");
console.log(view); // Uint8Array(3) [226, 130, 172]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{DOMxRef("TextDecoder")}}-Interface, das die inverse Operation beschreibt.
- [Node.js unterstützt globalen Export ab v11.0.0](https://nodejs.org/api/util.html#util_class_util_textencoder)
