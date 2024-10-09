---
title: "DOMMatrixReadOnly: DOMMatrixReadOnly() Konstruktor"
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMMatrixReadOnly`** Konstruktor erstellt ein neues [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Objekt, das 4x4 Matrizen repräsentiert und sich für 2D- und 3D-Operationen eignet.

## Syntax

```js-nolint
DOMMatrixReadOnly()
DOMMatrixReadOnly(init)
```

### Parameter

- `init` {{optional_inline}}

  - : Entweder ein String, der eine Sequenz von Zahlen enthält, oder ein Array von Zahlen, das die gewünschte Matrix angibt.

    Wenn ein Array von Zahlen übergeben wird, hängt das Verhalten von der Länge des Arrays ab:

    - Für ein Array mit 6 Elementen in der Form `[a, b, c, d, e, f]` wird eine 2D-Read-Only-Matrix erstellt, die mit den bereitgestellten Komponenten initialisiert wird.
    - Für ein Array mit 16 Elementen (in der Spalten-major-Ordnung) in der Form `[m11, m12, m13, …, m42, m43, m44]` wird eine 3D-Read-Only-Matrix erstellt, die mit den bereitgestellten Komponenten initialisiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
