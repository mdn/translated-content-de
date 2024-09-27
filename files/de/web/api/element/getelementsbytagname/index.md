---
title: "Element: getElementsByTagName() Methode"
short-title: getElementsByTagName()
slug: Web/API/Element/getElementsByTagName
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die
**`Element.getElementsByTagName()`** Methode gibt eine lebendige
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von Elementen mit dem angegebenen [Tag-Namen](/de/docs/Web/API/Element/tagName) zurück.

Alle Nachkommen des
spezifizierten Elements werden durchsucht, jedoch nicht das Element selbst. Die zurückgegebene Liste ist
_lebendig_, was bedeutet, dass sie sich automatisch mit dem DOM-Baum aktualisiert.
Daher ist es nicht notwendig, `Element.getElementsByTagName()` mit
dem gleichen Element und den gleichen Argumenten wiederholt aufzurufen, wenn sich das DOM zwischen den Aufrufen ändert.

Wenn `getElementsByTagName` für ein HTML-Element in einem HTML-Dokument aufgerufen wird, wird das Argument vor der Suche in Kleinschreibung umgewandelt. Dies ist unerwünscht, wenn versucht wird,
[kamelkasierte](/de/docs/Glossary/camel_case) SVG-Elemente (wie
[`<linearGradient>`](/de/docs/Web/SVG/Element/linearGradient))
in einem HTML-Dokument abzugleichen. Verwenden Sie stattdessen [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS),
das die Groß- und Kleinschreibung des Tag-Namens beibehält.

`Element.getElementsByTagName` ist ähnlich wie
[`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), mit dem Unterschied, dass es nur nach
Elementen sucht, die Nachkommen des spezifizierten Elements sind.

## Syntax

```js-nolint
getElementsByTagName(tagName)
```

### Parameter

- `tagName`
  - : Der qualifizierte Name, nach dem gesucht werden soll. Der spezielle String
    `"*"` repräsentiert alle Elemente. Zur Kompatibilität mit XHTML sollte Kleinschreibung verwendet werden.

### Rückgabewert

Eine _lebendige_ [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von Elementen mit einem passenden Tag-Namen, in der Reihenfolge, in der sie erscheinen. Wenn keine Elemente gefunden werden, ist die `HTMLCollection` leer.

## Beispiele

```js
// Check the status of each data cell in a table
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagName("td");

for (const cell of cells) {
  const status = cell.getAttribute("data-status");
  if (status === "open") {
    // Grab the data
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
