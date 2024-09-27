---
title: TextEncoder
slug: Web/API/TextEncoder
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextEncoder`**-Schnittstelle nimmt einen Strom von Codepunkten als Eingabe und gibt einen Strom von UTF-8 Bytes aus.

## Konstruktor

- [`TextEncoder()`](/de/docs/Web/API/TextEncoder/TextEncoder)
  - : Gibt einen neu konstruierten `TextEncoder` zurück, der einen Bytestrom mit UTF-8-Kodierung erzeugt.

## Instanzeigenschaften

_Die `TextEncoder`-Schnittstelle erbt keine Eigenschaften._

- [`TextEncoder.encoding`](/de/docs/Web/API/TextEncoder/encoding) {{ReadOnlyInline}}
  - : Gibt immer `utf-8` zurück.

## Instanzmethoden

_Die `TextEncoder`-Schnittstelle erbt keine Methoden._

- [`TextEncoder.encode()`](/de/docs/Web/API/TextEncoder/encode)
  - : Nimmt einen String als Eingabe und gibt ein {{jsxref("Uint8Array")}} zurück, das den UTF-8-kodierten Text enthält.
- [`TextEncoder.encodeInto()`](/de/docs/Web/API/TextEncoder/encodeInto)
  - : Nimmt einen zu kodierenden String und ein Ziel-{{jsxref("Uint8Array")}}, in das der resultierende UTF-8-kodierte Text eingefügt wird, und gibt ein Objekt zurück, das den Fortschritt der Kodierung anzeigt.
    Dies kann potenziell leistungsfähiger sein als die ältere `encode()`-Methode.

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

- Die [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Schnittstelle, die die inverse Operation beschreibt.
- [Node.js unterstützt globalen Export ab v11.0.0](https://nodejs.org/api/util.html#util_class_util_textencoder)
