---
title: "Dokument: prepend()-Methode"
short-title: prepend()
slug: Web/API/Document/prepend
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("DOM")}}

Die **`Document.prepend()`**-Methode fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind des Dokuments ein. Zeichenfolgen werden als gleichwertige [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

Diese Methode stellt ein Kind einem `Document` voran. Um ein Element an einer beliebigen Stelle im Baum voranzustellen, siehe [`Element.prepend()`](/de/docs/Web/API/Element/prepend).

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Ein Wurzelelement in ein Dokument voranstellen

Wenn Sie versuchen, ein Element einem bestehenden HTML-Dokument voranzustellen, könnte ein `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException) auftreten, wenn bereits ein {{HTMLElement("html")}}-Element existiert.

```js
let html = document.createElement("html");
document.prepend(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

Wenn Sie ein neues Dokument ohne vorhandene Elemente erstellen, können Sie ein Wurzel-HTML-Element (oder ein Wurzel-SVG-Element) voranstellen:

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
