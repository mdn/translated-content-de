---
title: "StaticRange: StaticRange()-Konstruktor"
short-title: StaticRange()
slug: Web/API/StaticRange/StaticRange
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Der **`StaticRange()`**-Konstruktor erstellt ein neues [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekt, das einen Bereich von Inhalten innerhalb des DOM darstellt.

Dieser Konstruktor umfasst Eigenschaften, die die Start- und Endpositionen des Bereichs sowie einen Booleschen Wert angeben, ob der Bereich **gekürzt** ist (d.h. leer).

## Syntax

```js-nolint
new StaticRange(rangeSpec)
```

### Parameter

- `rangeSpec`
  - : Der erforderliche `rangeSpec`-Parameter ist ein Objekt, das die folgenden vier Eigenschaften enthält:
    - `startContainer`
      - : Der [`Node`](/de/docs/Web/API/Node), in dem sich der Startpunkt des Bereichs befindet.
    - `startOffset`
      - : Der Versatz innerhalb des Startknotens, an dem das erste Zeichen des Bereichs gefunden wird.
    - `endContainer`
      - : Der `Node`, in dem sich der Endpunkt des Bereichs befindet.
    - `endOffset`
      - : Der Versatz innerhalb des Knotens, der durch `endOffset` angegeben wird, an dem das letzte Zeichen im Bereich gefunden wird.

### Rückgabewert

Ein neues `StaticRange`-Objekt, das mit den in dem `rangeSpec`-Objekt angegebenen Werten initialisiert ist.

### Ausnahmen

- `InvalidNodeTypeError`
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der ausgelöst wird, wenn entweder `startContainer` und/oder `endContainer` ein Knotentyp ist, den Sie nicht in einem Bereich einschließen können. Diese Knotentypen sind `Node.DOCUMENT_TYPE_NODE` (repräsentiert den [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten, der von der {{Glossary("Doctype", "DTD")}} abgeleitet wird und mit dem `doctype`-Prolog im HTML identifiziert wird, zum Beispiel) und der [`Attr`](/de/docs/Web/API/Attr)-Knoten, der ein Attribut eines Elements im DOM beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
