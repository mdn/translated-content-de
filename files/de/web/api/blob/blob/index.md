---
title: "Blob: Blob() Konstruktor"
short-title: Blob()
slug: Web/API/Blob/Blob
l10n:
  sourceCommit: 6d97bc4fcbb8896f7b15e32d5128df5bb3b4efe4
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Der **`Blob()`** Konstruktor gibt ein neues [`Blob`](/de/docs/Web/API/Blob)-Objekt zurück. Der Inhalt des Blob besteht aus der Verkettung der in dem Parameter `blobParts` angegebenen Werte.

## Syntax

```js-nolint
new Blob(blobParts)
new Blob(blobParts, options)
```

### Parameter

- `blobParts` {{optional_inline}}
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
    wie ein {{jsxref("Array")}}, das {{jsxref("ArrayBuffer")}}s,
    {{jsxref("TypedArray")}}s, {{jsxref("DataView")}}s, [`Blob`](/de/docs/Web/API/Blob)s, Zeichenfolgen,
    oder eine Mischung solcher Elemente enthält, die in den [`Blob`](/de/docs/Web/API/Blob) eingebracht werden. Zeichenfolgen sollten wohlgeformtes Unicode sein, und alleinstehende Surrogate werden mit demselben Algorithmus bereinigt wie {{jsxref("String.prototype.toWellFormed()")}}.
    Die resultierende Zeichenfolge wird als UTF-8 kodiert.

- `options` {{optional_inline}}
  - : Ein Objekt, das eine der folgenden Eigenschaften spezifizieren kann:
    - `type` {{optional_inline}}
      - : Der {{Glossary("MIME_type", "MIME-Typ")}} der Daten, die in den Blob gespeichert werden. Der
        Standardwert ist der leere String, (`""`).
    - `endings` {{optional_inline}}
      - : Wie Zeilenumbrüche (`\n`) innerhalb der Inhalte interpretiert werden sollen, wenn
        die Daten Text sind. Der Standardwert `transparent` kopiert Zeilenumbrüche
        in den Blob, ohne sie zu ändern. Um Zeilenumbrüche in das native Konventionssystem des Hosts zu konvertieren, geben Sie den Wert `native` an.

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
