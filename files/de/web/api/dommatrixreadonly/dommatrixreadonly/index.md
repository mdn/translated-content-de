---
title: "DOMMatrixReadOnly: DOMMatrixReadOnly() Konstruktor"
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Geometry Interfaces")}}

Der **`DOMMatrixReadOnly`** Konstruktor erstellt ein neues
{{domxref("DOMMatrixReadOnly")}} Objekt, das 4x4 Matrizen repräsentiert, geeignet für 2D
und 3D Operationen.

## Syntax

```js-nolint
DOMMatrixReadOnly()
DOMMatrixReadOnly(init)
```

### Parameter

- `init` {{optional_inline}}

  - : Entweder ein String, der eine Sequenz von Zahlen enthält, oder ein Array von Zahlen,
    die die Matrix spezifizieren, die Sie erstellen möchten.

    Wenn ein Zahlenarray übergeben wird, hängt das Verhalten von der Länge des Arrays ab:

    - Bei einem 6-Elemente-Array von Komponenten in der Form `[a, b, c, d, e, f]` wird eine 2D schreibgeschützte Matrix erstellt, die mit den bereitgestellten Komponenten initialisiert wird.
    - Bei einem 16-Elemente-Array von Komponenten (in der spaltenweise Reihenfolge) in der Form `[m11, m12, m13, …, m42, m43, m44]` wird eine 3D schreibgeschützte Matrix erstellt, die mit den bereitgestellten Komponenten initialisiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
