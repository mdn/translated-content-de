---
title: "Element: Methode getAttributeNames()"
short-title: getAttributeNames()
slug: Web/API/Element/getAttributeNames
l10n:
  sourceCommit: d93e5a0bca36d745734e46c0cd55f40cda28e221
---

{{APIRef("DOM")}}

Die **`getAttributeNames()`**-Methode des {{domxref("Element")}}-Interfaces gibt die Attributnamen des Elements als ein {{jsxref("Array")}} von Zeichenfolgen zurück. Wenn das Element keine Attribute hat, gibt es ein leeres Array zurück.

Die Verwendung von `getAttributeNames()` zusammen mit {{domxref("Element.getAttribute","getAttribute()")}} ist eine speichereffiziente und leistungsfähige Alternative zum Zugriff auf {{domxref("Element.attributes")}}.

Die von **`getAttributeNames()`** zurückgegebenen Namen sind _qualifizierte_ Attributnamen, was bedeutet, dass Attribute mit einem Namespace-Präfix ihre Namen mit diesem Namespace-Präfix (nicht dem tatsächlichen Namespace), gefolgt von einem Doppelpunkt, gefolgt vom Attributnamen (zum Beispiel **`xlink:href`**) zurückgeben, während alle Attribute, die kein Namespace-Präfix haben, ihre Namen so zurückgeben, wie sie sind (zum Beispiel **`href`**).

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

- Für ein Attribut mit Namespace-Präfix gibt `getAttributeNames()` dieses Präfix zusammen mit dem Attributnamen zurück.
- Für ein Attribut ohne Namespace-Präfix gibt `getAttributeNames()` nur den Attributnamen zurück, wie er ist.

Es ist wichtig zu verstehen, dass:

1. Ein Attribut im DOM mit einem Namespace vorhanden sein kann, jedoch ohne Namespace-Präfix.
2. Für ein Attribut im DOM, das einen Namespace hat, aber kein Namespace-Präfix, wird `getAttributeNames()` nur den Attributnamen ohne Hinweis darauf zurückgeben, dass das Attribut in einem Namespace ist.

Das untenstehende Beispiel enthält einen solchen Fall von "mit Namespace, aber ohne Namespace-Präfix".

```js
const element = document.createElement("a");

// "href" Attribut ohne Namespace und ohne Namespace-Präfix setzen
element.setAttribute("href", "https://example.com");
// "href" Attribut mit Namespace und auch "xlink"-Namespace-Präfix setzen
element.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "https://example.com",
);
// "show" Attribut mit Namespace, aber ohne Namespace-Präfix setzen
element.setAttributeNS("http://www.w3.org/1999/xlink", "show", "new");

// Über die Attribute des Elements iterieren
for (const name of element.getAttributeNames()) {
  const value = element.getAttribute(name);
  console.log(name, value);
}

// Protokolliert:
// href https://example.com
// xlink:href https://example.com
// show new
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
