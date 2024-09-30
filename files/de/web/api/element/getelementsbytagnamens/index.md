---
title: "Element: getElementsByTagNameNS() Methode"
short-title: getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

Die **`Element.getElementsByTagNameNS()`** Methode gibt ein
Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von Elementen mit dem angegebenen Tag-Namen zurück, die zu dem
angegebenen Namensraum gehören. Sie ist ähnlich wie [`Document.getElementsByTagNameNS`](/de/docs/Web/API/Document/getElementsByTagNameNS), mit dem Unterschied, dass die Suche auf die Nachkommen des angegebenen Elements beschränkt ist.

## Syntax

```js-nolint
getElementsByTagNameNS(namespaceURI, localName)
```

### Parameter

- `namespaceURI`
  - : Die Namensraum-URI der zu suchenden Elemente (siehe
    [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) und [`Attr.namespaceURI`](/de/docs/Web/API/Attr/namespaceURI)). Zum
    Beispiel, wenn Sie nach XHTML-Elementen suchen müssen, verwenden Sie die XHTML-Namensraum-URI,
    `http://www.w3.org/1999/xhtml`.
- `localName`
  - : Entweder der lokale Name der zu suchenden Elemente oder der
    spezielle Wert `"*"`, der zu allen Elementen passt (siehe
    [`Element.localName`](/de/docs/Web/API/Element/localName) und [`Attr.localName`](/de/docs/Web/API/Attr/localName)).

### Rückgabewert

Eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der gefundenen Elemente in der Reihenfolge, in der sie im Baum erscheinen.

## Beispiele

```js
// Check the alignment on a number of cells in a table in an XHTML document.
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagNameNS(
  "http://www.w3.org/1999/xhtml",
  "td",
);

for (const cell of cells) {
  const axis = cell.getAttribute("axis");
  if (axis === "year") {
    // Grab the data
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
