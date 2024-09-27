---
title: "StaticRange: StaticRange()-Konstruktor"
short-title: StaticRange()
slug: Web/API/StaticRange/StaticRange
l10n:
  sourceCommit: f3c46972ea00ed79404e72fd5245287230923551
---

{{APIRef("DOM")}}

Der **`StaticRange()`**-Konstruktor erstellt ein neues [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekt, das einen Abschnitt von Inhalten innerhalb des DOM darstellt.

Dieser Konstruktor enthält Eigenschaften, die die Start- und Endpositionen des Bereichs sowie ein Boolean angeben, ob der Bereich **kollabiert** ist (d.h. leer).

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
      - : Der Versatz in den anfänglichen Knoten, an dem das erste Zeichen des Bereichs gefunden wird.
    - `endContainer`
      - : Der `Node`, in dem sich der Endpunkt des Bereichs befindet.
    - `endOffset`
      - : Der Versatz in den Knoten, der von `endOffset` angegeben wird, an dem sich das letzte Zeichen im Bereich befindet.

### Rückgabewert

Ein neues `StaticRange`-Objekt, das mit den im `rangeSpec`-Objekt angegebenen Werten initialisiert ist.

### Ausnahmen

- `InvalidNodeTypeError`
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der ausgelöst wird, wenn entweder oder beide der `startContainer` und/oder `endContainer` eine Art von Knoten sind, die Sie nicht in einen Bereich einschließen können. Diese Knotentypen sind `Node.DOCUMENT_TYPE_NODE` (repräsentiert den [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten, der aus dem [DTD](/de/docs/Glossary/Doctype) abgeleitet wird, der beispielsweise mit dem `doctype`-Präambel im HTML identifiziert wird) und der [`Attr`](/de/docs/Web/API/Attr)-Knoten, der ein Attribut eines Elements im DOM beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
