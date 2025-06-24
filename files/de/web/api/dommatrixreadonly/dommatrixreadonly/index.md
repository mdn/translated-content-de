---
title: "DOMMatrixReadOnly: DOMMatrixReadOnly()-Konstruktor"
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMMatrixReadOnly`**-Konstruktor erstellt ein neues [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Objekt, das 4x4-Matrizen repräsentiert und für 2D- und 3D-Operationen geeignet ist.

## Syntax

```js-nolint
DOMMatrixReadOnly()
DOMMatrixReadOnly(init)
```

### Parameter

- `init` {{optional_inline}}

  - : Entweder ein String, der eine Folge von Zahlen enthält, oder ein Array von Zahlen, die die Matrix spezifizieren, die Sie erstellen möchten.

    Falls ein Array von Zahlen übergeben wird, hängt das Verhalten von der Länge des Arrays ab:

    - Für ein Array mit 6 Elementen in der Form `[a, b, c, d, e, f]` wird eine 2D-Read-only-Matrix erstellt, die mit den angegebenen Komponenten initialisiert wird.
    - Für ein Array mit 16 Elementen in (spaltenweiser Reihenfolge) in der Form `[m11, m12, m13, …, m42, m43, m44]` wird eine 3D-Read-only-Matrix erstellt, die mit den angegebenen Komponenten initialisiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
