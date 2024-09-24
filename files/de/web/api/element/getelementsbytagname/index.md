---
title: "Element: getElementsByTagName()-Methode"
short-title: getElementsByTagName()
slug: Web/API/Element/getElementsByTagName
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`Element.getElementsByTagName()`**-Methode gibt eine dynamische {{domxref("HTMLCollection")}} von Elementen mit dem angegebenen [Tag-Namen](/de/docs/Web/API/Element/tagName) zurück.

Alle Nachfahren des angegebenen Elements werden durchsucht, aber nicht das Element selbst. Die zurückgegebene Liste ist _dynamisch_, was bedeutet, dass sie sich automatisch mit dem DOM-Baum aktualisiert. Daher ist es nicht notwendig, `Element.getElementsByTagName()` mit demselben Element und denselben Argumenten wiederholt aufzurufen, wenn sich das DOM dazwischen ändert.

Wenn die Methode auf einem HTML-Element in einem HTML-Dokument aufgerufen wird, wandelt `getElementsByTagName` das Argument in Kleinbuchstaben um, bevor es gesucht wird. Dies ist unerwünscht, wenn versucht wird, {{Glossary("camel_case", "camel-case-benannte")}} SVG-Elemente (wie [`<linearGradient>`](/de/docs/Web/SVG/Element/linearGradient)) in einem HTML-Dokument zu finden. Verwenden Sie stattdessen {{ domxref("Element.getElementsByTagNameNS()") }}, das die Groß- und Kleinschreibung des Tag-Namens beibehält.

`Element.getElementsByTagName` ist ähnlich wie {{domxref("Document.getElementsByTagName()")}}, außer dass es nur nach Elementen sucht, die Nachfahren des angegebenen Elements sind.

## Syntax

```js-nolint
getElementsByTagName(tagName)
```

### Parameter

- `tagName`
  - : Der qualifizierte Name, nach dem gesucht werden soll. Der spezielle String `"*"` repräsentiert alle Elemente. Für die Kompatibilität mit XHTML sollte Kleinschreibung verwendet werden.

### Rückgabewert

Eine _dynamische_ {{domxref("HTMLCollection")}} von Elementen mit einem übereinstimmenden Tag-Namen, in der Reihenfolge, in der sie erscheinen. Wenn keine Elemente gefunden werden, ist die `HTMLCollection` leer.

## Beispiele

```js
// Überprüfen Sie den Status jeder Datenzelle in einer Tabelle
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagName("td");

for (const cell of cells) {
  const status = cell.getAttribute("data-status");
  if (status === "open") {
    // Daten erfassen
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
