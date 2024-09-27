---
title: "Element: getAttributeNames()-Methode"
short-title: getAttributeNames()
slug: Web/API/Element/getAttributeNames
l10n:
  sourceCommit: d93e5a0bca36d745734e46c0cd55f40cda28e221
---

{{APIRef("DOM")}}

Die **`getAttributeNames()`**-Methode des
[`Element`](/de/docs/Web/API/Element)-Interfaces gibt die Attributnamen des Elements als ein
{{jsxref("Array")}} von Zeichenketten zurück. Wenn das Element keine Attribute hat, wird ein leeres
Array zurückgegeben.

Die Verwendung von `getAttributeNames()` zusammen mit
[`getAttribute()`](/de/docs/Web/API/Element/getAttribute) ist eine speichereffiziente und
leistungsfähige Alternative zum Zugriff auf [`Element.attributes`](/de/docs/Web/API/Element/attributes).

Die von **`getAttributeNames()`** zurückgegebenen Namen sind _qualifizierte_ Attributnamen, was bedeutet, dass Attribute mit einem Namespace-Präfix ihre Namen mit diesem Präfix zurückgeben (nicht der tatsächliche Namespace), gefolgt von einem Doppelpunkt und dem Attributnamen (zum Beispiel, **`xlink:href`**), während alle Attribute ohne Namespace-Präfix ihre Namen unverändert zurückgeben (zum Beispiel, **`href`**).

## Syntax

```js-nolint
getAttributeNames()
```

### Parameter

Keine.

### Rückgabewert

Ein ({{jsxref("Array")}}) von Zeichenketten.

## Beispiele

Das folgende Beispiel zeigt, wie:

- Für ein Attribut, das ein Namespace-Präfix hat, `getAttributeNames()` dieses Präfix zusammen mit dem Attributnamen zurückgibt.
- Für ein Attribut ohne Namespace-Präfix, `getAttributeNames()` nur den Attributnamen unverändert zurückgibt.

Es ist wichtig zu verstehen, dass:

1. Ein Attribut im DOM mit einem Namespace vorhanden sein kann, aber kein Namespace-Präfix hat.
2. Bei einem Attribut im DOM, das einen Namespace hat, aber kein Namespace-Präfix, gibt `getAttributeNames()` nur den Attributnamen zurück, ohne Hinweis darauf, dass das Attribut in einem Namespace ist.

Das untenstehende Beispiel enthält einen solchen Fall eines "Namensraums ohne Namespace-Präfix".

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
