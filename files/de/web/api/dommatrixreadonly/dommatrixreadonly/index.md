---
title: "DOMMatrixReadOnly: DOMMatrixReadOnly()-Konstruktor"
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Geometry Interfaces")}}

Der **`DOMMatrixReadOnly`**-Konstruktor erstellt ein neues
[`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Objekt, das 4x4-Matrizen repräsentiert und für 2D- und 3D-Operationen geeignet ist.

## Syntax

```js-nolint
DOMMatrixReadOnly()
DOMMatrixReadOnly(init)
```

### Parameter

- `init` {{optional_inline}}

  - : Entweder ein String, der eine Zahlenfolge enthält, oder ein Array von Zahlen,
    das die zu erstellende Matrix spezifiziert.

    Im Falle eines Arrays von Zahlen hängt das Verhalten von der Länge des Arrays ab:

    - Für ein Array mit 6 Elementen in der Form `[a, b, c, d, e, f]` wird eine 2D-Read-Only-Matrix erstellt, die mit den angegebenen Komponenten initialisiert wird.
    - Für ein Array mit 16 Elementen (in der spaltenweisen Reihenfolge) in der Form `[m11, m12, m13, …, m42, m43, m44]` wird eine 3D-Read-Only-Matrix erstellt, die mit den angegebenen Komponenten initialisiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
