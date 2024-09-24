---
title: "StaticRange: StaticRange() Konstruktor"
short-title: StaticRange()
slug: Web/API/StaticRange/StaticRange
l10n:
  sourceCommit: f3c46972ea00ed79404e72fd5245287230923551
---

{{APIRef("DOM")}}

Der **`StaticRange()`** Konstruktor erstellt ein neues {{domxref("StaticRange")}}-Objekt, das einen Abschnitt von Inhalten innerhalb des DOM darstellt.

Dieser Konstruktor enthält Eigenschaften, die den Start- und Endpunkt des Bereichs sowie ein Boolean angeben, das aufzeigt, ob der Bereich **zusammengefallen** (also leer) ist oder nicht.

## Syntax

```js-nolint
new StaticRange(rangeSpec)
```

### Parameter

- `rangeSpec`

  - : Der erforderliche `rangeSpec` Parameter ist ein Objekt, das die folgenden vier Eigenschaften enthält:

    - `startContainer`
      - : Der {{domxref("Node")}}, in dem sich der Startpunkt des Bereichs befindet.
    - `startOffset`
      - : Der Offset im Startknoten, bei dem das erste Zeichen des Bereichs gefunden wird.
    - `endContainer`
      - : Der `Node`, in dem der Endpunkt des Bereichs liegt.
    - `endOffset`
      - : Der Offset im durch `endOffset` angegebenen Knoten, bei dem das letzte Zeichen im Bereich gefunden wird.

### Rückgabewert

Ein neues `StaticRange`-Objekt, das mit den im `rangeSpec`-Objekt angegebenen Werten initialisiert wurde.

### Ausnahmen

- `InvalidNodeTypeError`
  - : Ein {{domxref("DOMException")}} wird ausgelöst, wenn entweder oder beide `startContainer` und/oder `endContainer` ein Knotentyp sind, den Sie in einem Bereich nicht einschließen können. Diese Knotentypen sind `Node.DOCUMENT_TYPE_NODE` (darstellt den {{domxref("DocumentType")}}-Knoten, der aus dem {{Glossary("Doctype", "DTD")}} abgeleitet wird, wie zum Beispiel das preamble doctype in HTML identifiziert) und der {{domxref("Attr")}}-Knoten, der ein Attribut eines Elements im DOM beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
