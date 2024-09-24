---
title: "Dokument: prepend()-Methode"
short-title: prepend()
slug: Web/API/Document/prepend
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Document.prepend()`**-Methode fügt eine Sammlung von {{domxref("Node")}}-Objekten oder Zeichenketten vor dem ersten Kind des Dokuments ein. Zeichenketten werden als gleichwertige {{domxref("Text")}}-Knoten eingefügt.

Diese Methode setzt ein Kind an den Anfang eines `Document`. Um an ein beliebiges Element im Baum anzufügen, siehe {{domxref("Element.prepend()")}}.

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Sammlung von {{domxref("Node")}}-Objekten oder Zeichenketten, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### Einfügen eines Wurzelelements in ein Dokument

Wenn Sie versuchen, ein Element in ein vorhandenes HTML-Dokument einzufügen, könnte ein `HierarchyRequestError' {{domxref("DOMException")}} ausgelöst werden, wenn bereits ein {{HTMLElement("html")}}-Element existiert.

```js
let html = document.createElement("html");
document.prepend(html);
// HierarchyRequestError: Die Operation würde einen inkorrekten Knotenbaum ergeben.
```

Wenn Sie ein neues Dokument ohne vorhandene Elemente erstellen, können Sie ein HTML-Wurzelelement (oder ein SVG-Wurzelelement) einfügen:

```js
let doc = new Document();
let html = document.createElement("html");
doc.prepend(html);

doc.children; // HTMLCollection [<html>]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.append()")}}
- {{domxref("Element.prepend()")}}
