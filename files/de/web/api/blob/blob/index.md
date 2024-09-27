---
title: "Blob: Blob() Konstruktor"
short-title: Blob()
slug: Web/API/Blob/Blob
l10n:
  sourceCommit: 94df34126960a2f1bd3032c6e2cf203d67b912d8
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Der **`Blob()`**-Konstruktor gibt ein neues [`Blob`](/de/docs/Web/API/Blob)-Objekt zurück. Der Inhalt des Blobs besteht aus der Verkettung der Werte, die im Parameter `blobParts` angegeben sind.

## Syntax

```js-nolint
new Blob(blobParts)
new Blob(blobParts, options)
```

### Parameter

- `blobParts` {{optional_inline}}

  - : Ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt wie ein {{jsxref("Array")}}, das {{jsxref("ArrayBuffer")}}s,
    {{jsxref("TypedArray")}}s, {{jsxref("DataView")}}s, [`Blob`](/de/docs/Web/API/Blob)s, Zeichenfolgen
    oder eine Mischung solcher Elemente enthalten kann, die in das [`Blob`](/de/docs/Web/API/Blob) aufgenommen werden. Zeichenfolgen sollten wohlgeformtes Unicode sein, und einzelne Stellvertreter werden mit demselben Algorithmus bereinigt wie {{jsxref("String.prototype.toWellFormed()")}}.

- `options` {{optional_inline}}
  - : Ein Objekt, das eine der folgenden Eigenschaften spezifizieren kann:
    - `type` {{optional_inline}}
      - : Der [MIME-Typ](/de/docs/Glossary/MIME_type) der Daten, die im Blob gespeichert werden. Der Standardwert ist der leere String (`""`).
    - `endings` {{optional_inline}}
      - : Wie Zeilenumbrüche (`\n`) innerhalb des Inhalts interpretiert werden sollen, wenn es sich bei den Daten um Text handelt. Der Standardwert `transparent` kopiert Zeilenumbrüche in das Blob, ohne sie zu ändern. Um Zeilenumbrüche in das native Format des Hostsystems zu konvertieren, geben Sie den Wert `native` an.

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
