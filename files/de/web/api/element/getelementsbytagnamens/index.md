---
title: "Element: Methode getElementsByTagNameNS()"
short-title: getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

Die Methode **`Element.getElementsByTagNameNS()`** gibt eine
dynamische {{domxref("HTMLCollection")}} von Elementen mit dem angegebenen Tag-Namen zurück, die zu dem angegebenen Namespace gehören. Sie ist ähnlich wie {{Domxref("Document.getElementsByTagNameNS")}}, außer dass ihre Suche auf Nachkommen des spezifizierten Elements beschränkt ist.

## Syntax

```js-nolint
getElementsByTagNameNS(namespaceURI, localName)
```

### Parameter

- `namespaceURI`
  - : Der Namespace-URI der zu suchenden Elemente (siehe
    {{domxref("Element.namespaceURI")}} und {{domxref("Attr.namespaceURI")}}). Zum Beispiel, wenn Sie nach XHTML-Elementen suchen, verwenden Sie den XHTML-Namespace-URI,
    `http://www.w3.org/1999/xhtml`.
- `localName`
  - : Entweder der lokale Name der zu suchenden Elemente oder der
    spezielle Wert `"*"`, der auf alle Elemente passt (siehe
    {{domxref("Element.localName")}} und {{domxref("Attr.localName")}}).

### Rückgabewert

Eine dynamische {{domxref("HTMLCollection")}} der gefundenen Elemente in der Reihenfolge, in der sie im Baum erscheinen.

## Beispiele

```js
// Überprüfen Sie die Ausrichtung einer Anzahl von Zellen in einer Tabelle in einem XHTML-Dokument.
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagNameNS(
  "http://www.w3.org/1999/xhtml",
  "td",
);

for (const cell of cells) {
  const axis = cell.getAttribute("axis");
  if (axis === "year") {
    // Erfassen Sie die Daten
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
