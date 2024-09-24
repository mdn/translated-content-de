---
title: "Blob: Blob()-Konstruktor"
short-title: Blob()
slug: Web/API/Blob/Blob
l10n:
  sourceCommit: 94df34126960a2f1bd3032c6e2cf203d67b912d8
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Der **`Blob()`**-Konstruktor gibt ein neues {{domxref("Blob")}}-Objekt zurück. Der Inhalt des Blobs besteht aus der Verkettung der in dem Parameter `blobParts` angegebenen Werte.

## Syntax

```js-nolint
new Blob(blobParts)
new Blob(blobParts, options)
```

### Parameter

- `blobParts` {{optional_inline}}

  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), wie etwa ein {{jsxref("Array")}}, das {{jsxref("ArrayBuffer")}}s, {{jsxref("TypedArray")}}s, {{jsxref("DataView")}}s, {{domxref("Blob")}}s, Zeichenfolgen oder eine Mischung aus solchen Elementen enthält, die in das {{domxref("Blob")}} eingefügt werden sollen. Zeichenfolgen sollten gut geformtes Unicode sein, und einzelne Surrogate werden mit dem gleichen Algorithmus wie {{jsxref("String.prototype.toWellFormed()")}} bereinigt.

- `options` {{optional_inline}}
  - : Ein Objekt, das eine der folgenden Eigenschaften spezifizieren kann:
    - `type` {{optional_inline}}
      - : Der {{Glossary("MIME-Typ")}} der Daten, die im Blob gespeichert werden. Der Standardwert ist der leere String (`""`).
    - `endings` {{optional_inline}}
      - : Wie Zeilenumbrüche (`\n`) innerhalb der Inhalte interpretiert werden sollen, wenn die Daten Text sind. Der Standardwert, `transparent`, kopiert Zeilenumbrüche ohne Änderungen in das Blob. Um Zeilenumbrüche in das native Format des Hostsystems zu konvertieren, geben Sie den Wert `native` an.

### Rückgabewert

Ein neues {{domxref("Blob")}}-Objekt, das die angegebenen Daten enthält.

## Beispiele

```js
const blobParts = ['<q id="a"><span id="b">hey!</span></q>']; // ein Array, das aus einer einzigen Zeichenfolge besteht
const blob = new Blob(blobParts, { type: "text/html" }); // das Blob
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
