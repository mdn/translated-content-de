---
title: "StaticRange: StaticRange() Konstruktor"
short-title: StaticRange()
slug: Web/API/StaticRange/StaticRange
l10n:
  sourceCommit: f3c46972ea00ed79404e72fd5245287230923551
---

{{APIRef("DOM")}}

Der **`StaticRange()`**-Konstruktor erstellt ein neues [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekt, das einen Abschnitt von Inhalten im DOM darstellt.

Dieser Konstruktor enthält Eigenschaften, die die Start- und Endpositionen des Bereichs identifizieren, sowie einen booleschen Wert, der angibt, ob der Bereich **zusammengeklappt** ist (das heißt, leer).

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
      - : Der Versatz in den Anfangsknoten, an dem das erste Zeichen des Bereichs gefunden wird.
    - `endContainer`
      - : Der `Node`, in dem sich der Endpunkt des Bereichs befindet.
    - `endOffset`
      - : Der Versatz in den Knoten, der durch `endOffset` angegeben ist, an dem sich das letzte Zeichen im Bereich befindet.

### Rückgabewert

Ein neues `StaticRange`-Objekt, das mit den im `rangeSpec`-Objekt angegebenen Werten initialisiert ist.

### Ausnahmen

- `InvalidNodeTypeError`
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der ausgelöst wird, wenn entweder der `startContainer` und/oder `endContainer` ein Knotentyp ist, den Sie nicht in einem Bereich einschließen können. Diese Knotentypen sind `Node.DOCUMENT_TYPE_NODE` (repräsentiert den [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten, der aus dem {{Glossary("Doctype", "DTD")}} abgeleitet ist, das zum Beispiel mithilfe des `doctype`-Präambels im HTML identifiziert wird) und der [`Attr`](/de/docs/Web/API/Attr)-Knoten, der ein Attribut eines Elements im DOM beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
