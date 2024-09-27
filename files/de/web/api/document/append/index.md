---
title: "Document: append() Methode"
short-title: append()
slug: Web/API/Document/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Document.append()`** Methode
fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen nach
dem letzten Kind des Dokuments ein. Zeichenfolgen
werden als gleichwertige [`Text`](/de/docs/Web/API/Text) Knoten eingefügt.

Diese Methode hängt ein Kind an ein `Document` an. Um an ein beliebiges Element im Baum anzuhängen, siehe [`Element.append()`](/de/docs/Web/API/Element/append).

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Wurzelelement an ein Dokument anhängen

Wenn Sie versuchen, ein Element an ein bestehendes HTML-Dokument anzuhängen,
könnte ein `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException) verursacht werden, falls ein {{HTMLElement("html")}} Element bereits existiert.

```js
let html = document.createElement("html");
document.append(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

Wenn Sie ein neues Dokument ohne vorhandene Elemente erstellen, können Sie ein Wurzel-HTML-Element (oder ein Wurzel-SVG-Element) anhängen:

```js
let doc = new Document();
let html = document.createElement("html");
doc.append(html);

doc.children; // HTMLCollection [<html>]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.prepend()`](/de/docs/Web/API/Document/prepend)
- [`Element.append()`](/de/docs/Web/API/Element/append)
