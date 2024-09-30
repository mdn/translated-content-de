---
title: "Element: getAttributeNames()-Methode"
short-title: getAttributeNames()
slug: Web/API/Element/getAttributeNames
l10n:
  sourceCommit: d93e5a0bca36d745734e46c0cd55f40cda28e221
---

{{APIRef("DOM")}}

Die **`getAttributeNames()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt die Attributnamen des Elements als ein {{jsxref("Array")}} von Zeichenfolgen zurück. Wenn das Element keine Attribute hat, wird ein leeres Array zurückgegeben.

Das Verwenden von `getAttributeNames()` zusammen mit [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) ist eine speichereffiziente und leistungsfähige Alternative zum Zugriff auf [`Element.attributes`](/de/docs/Web/API/Element/attributes).

Die von **`getAttributeNames()`** zurückgegebenen Namen sind _qualifizierte_ Attributnamen. Das bedeutet, dass Attribute mit einem Namespace-Präfix mit diesem Namespace-Präfix zurückgegeben werden (nicht der tatsächliche Namespace), gefolgt von einem Doppelpunkt und dann dem Attributnamen (zum Beispiel **`xlink:href`**), während Attribute ohne Namespace-Präfix unverändert zurückgegeben werden (zum Beispiel **`href`**).

## Syntax

```js-nolint
getAttributeNames()
```

### Parameter

Keine.

### Rückgabewert

Ein ({{jsxref("Array")}}) von Zeichenfolgen.

## Beispiele

Das folgende Beispiel zeigt:

- Für ein Attribut, das ein Namespace-Präfix hat, gibt `getAttributeNames()` dieses Namespace-Präfix zusammen mit dem Attributnamen zurück.
- Für ein Attribut, das kein Namespace-Präfix hat, gibt `getAttributeNames()` nur den Attributnamen unverändert zurück.

Es ist wichtig zu verstehen, dass:

1. Ein Attribut im DOM mit einem Namespace vorhanden sein kann, aber ohne ein Namespace-Präfix.
2. Für ein Attribut im DOM, das einen Namespace hat, aber kein Namespace-Präfix, wird `getAttributeNames()` nur den Attributnamen zurückgeben, ohne Hinweis darauf, dass das Attribut in einem Namespace ist.

Das folgende Beispiel enthält einen solchen Fall "mit Namespace, aber ohne Namespace-Präfix".

```js
const element = document.createElement("a");

// set "href" attribute with no namespace and no namespace prefix
element.setAttribute("href", "https://example.com");
// set "href" attribute with namespace and also "xlink" namespace prefix
element.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "https://example.com",
);
// set "show" attribute with namespace but no namespace prefix
element.setAttributeNS("http://www.w3.org/1999/xlink", "show", "new");

// Iterate over element's attributes
for (const name of element.getAttributeNames()) {
  const value = element.getAttribute(name);
  console.log(name, value);
}

// logs:
// href https://example.com
// xlink:href https://example.com
// show new
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
