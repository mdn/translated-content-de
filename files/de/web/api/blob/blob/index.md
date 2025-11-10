---
title: "Blob: Blob() Konstruktor"
short-title: Blob()
slug: Web/API/Blob/Blob
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Der **`Blob()`** Konstruktor gibt ein
neues [`Blob`](/de/docs/Web/API/Blob)-Objekt zurück. Der Inhalt des Blobs besteht aus der Verkettung
der im Parameter `blobParts` angegebenen Werte.

## Syntax

```js-nolint
new Blob(blobParts)
new Blob(blobParts, options)
```

### Parameter

- `blobParts` {{optional_inline}}

  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
    wie ein {{jsxref("Array")}}, das {{jsxref("ArrayBuffer")}}s,
    {{jsxref("TypedArray")}}s, {{jsxref("DataView")}}s, [`Blob`](/de/docs/Web/API/Blob)s, Strings
    oder eine Mischung aus solchen Elementen enthält, die im [`Blob`](/de/docs/Web/API/Blob) platziert werden.
    Strings sollten gut geformte Unicode-Zeichenfolgen sein, und einzelne Surrogate werden mit dem gleichen Algorithmus wie {{jsxref("String.prototype.toWellFormed()")}} bereinigt.

- `options` {{optional_inline}}
  - : Ein Objekt, das eine der folgenden Eigenschaften angeben kann:
    - `type` {{optional_inline}}
      - : Der {{Glossary("MIME_type", "MIME-Typ")}} der Daten, die im Blob gespeichert werden. Der
        Standardwert ist der leere String, (`""`).
    - `endings` {{optional_inline}}
      - : Wie Zeilenumbrüche (`\n`) innerhalb des Inhalts interpretiert werden sollen, wenn
        die Daten Text sind. Der Standardwert `transparent` kopiert Zeilenumbrüche
        ohne Änderung in das Blob. Um Zeilenumbrüche in das native Format des Hostsystems zu konvertieren, geben Sie den Wert `native` an.

### Rückgabewert

Ein neues [`Blob`](/de/docs/Web/API/Blob)-Objekt, das die angegebenen Daten enthält.

## Beispiele

```js
const blobParts = ['<q id="a"><span id="b">hey!</span></q>']; // an array consisting of a single string
const blob = new Blob(blobParts, { type: "text/html" }); // the blob
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
