---
title: "Document: prepend()-Methode"
short-title: prepend()
slug: Web/API/Document/prepend
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die Methode **`Document.prepend()`**
fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind des Dokuments ein. Zeichenfolgen werden als entsprechende [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

Diese Methode fügt ein Kind zu einem `Document` hinzu. Um einem beliebigen Element im Baum ein Element voranzustellen, siehe [`Element.prepend()`](/de/docs/Web/API/Element/prepend).

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen zum Einfügen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten nicht an der angegebenen Stelle in der Hierarchie eingefügt werden kann.

## Beispiele

### Ein Wurzelelement zu einem Dokument voranstellen

Wenn Sie versuchen, einem bestehenden HTML-Dokument ein Element voranzustellen, könnte ein `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst werden, da möglicherweise bereits ein {{HTMLElement("html")}}-Element existiert.

```js
let html = document.createElement("html");
document.prepend(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

Wenn Sie ein neues Dokument ohne vorhandene Elemente erstellen, können Sie ein HTML-Wurzelelement (oder ein SVG-Wurzelelement) voranstellen:

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
