---
title: "Document: prepend() Methode"
short-title: prepend()
slug: Web/API/Document/prepend
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Document.prepend()`**-Methode fügt ein Set von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind des Dokuments ein. Zeichenfolgen
werden als gleichwertige [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

Diese Methode fügt ein Kind zu einem `Document` hinzu. Um zu einem beliebigen Element im Baum hinzuzufügen, siehe [`Element.prepend()`](/de/docs/Web/API/Element/prepend).

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Ein Satz von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### Ein Wurzelelement zu einem Dokument hinzufügen

Wenn Sie versuchen, ein Element zu einem bestehenden HTML-Dokument hinzuzufügen, könnte ein `HierarchyRequestError' [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst werden, wenn bereits ein {{HTMLElement("html")}}-Element existiert.

```js
let html = document.createElement("html");
document.prepend(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

Wenn Sie ein neues Dokument ohne vorhandenes Element erstellen, können Sie ein HTML-Wurzelelement (oder ein SVG-Wurzelelement) hinzufügen:

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

- [`Document.append()`](/de/docs/Web/API/Document/append)
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
