---
title: "Document: append() Methode"
short-title: append()
slug: Web/API/Document/append
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Document.append()`**-Methode
fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenketten nach
dem letzten Kind des Dokuments ein. Zeichenketten
werden als gleichwertige [`Text`](/de/docs/Web/API/Text)-Knoten eingefügt.

Diese Methode fügt ein Kind zu einem `Document` hinzu. Um ein Kind zu einem beliebigen Element im Baum hinzuzufügen, siehe [`Element.append()`](/de/docs/Web/API/Element/append).

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenketten, die eingefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten an der angegebenen Stelle in der Hierarchie nicht eingefügt werden kann.

## Beispiele

### Einfügen eines Wurzelelements in ein Dokument

Wenn Sie versuchen, ein Element in ein bestehendes HTML-Dokument einzufügen,
kann es einen `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, da ein {{HTMLElement("html")}}-Element bereits existiert.

```js
let html = document.createElement("html");
document.append(html);
// HierarchyRequestError: The operation would yield an incorrect node tree.
```

Wenn Sie ein neues Dokument ohne bestehende Elemente erstellen, können Sie ein HTML-Wurzelelement (oder ein SVG-Wurzelelement) einfügen:

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
