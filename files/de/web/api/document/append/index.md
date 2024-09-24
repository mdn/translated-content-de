---
title: "Document: append()-Methode"
short-title: append()
slug: Web/API/Document/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Document.append()`**-Methode
fügt eine Menge von {{domxref("Node")}}-Objekten oder Zeichenketten nach
dem letzten Kind des Dokuments ein. Zeichenketten
werden als gleichwertige {{domxref("Text")}}-Knoten eingefügt.

Diese Methode hängt ein Kind an ein `Document` an. Um an ein beliebiges Element im Baum anzuhängen, siehe {{domxref("Element.append()")}}.

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Menge von {{domxref("Node")}}-Objekten oder Zeichenketten, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Stamm-Element an ein Dokument anhängen

Wenn Sie versuchen, ein Element an ein bestehendes HTML-Dokument anzuhängen,
kann es einen `HierarchyRequestError` {{domxref("DOMException")}} auslösen, wenn bereits ein {{HTMLElement("html")}}-Element existiert.

```js
let html = document.createElement("html");
document.append(html);
// HierarchyRequestError: Die Operation würde einen inkorrekten Knotenbaum erzeugen.
```

Wenn Sie ein neues Dokument ohne vorhandene Elemente erstellen, können Sie ein Stamm-HTML-Element (oder ein Stamm-SVG-Element) anhängen:

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

- {{domxref("Document.prepend()")}}
- {{domxref("Element.append()")}}
