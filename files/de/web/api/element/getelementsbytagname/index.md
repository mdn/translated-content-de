---
title: "Element: getElementsByTagName()-Methode"
short-title: getElementsByTagName()
slug: Web/API/Element/getElementsByTagName
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ APIRef("DOM") }}

Die **`Element.getElementsByTagName()`**-Methode gibt eine dynamische
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von Elementen mit dem angegebenen [Tag-Namen](/de/docs/Web/API/Element/tagName) zurück.

Alle Nachfahren des angegebenen Elements werden durchsucht, jedoch nicht das Element selbst. Die zurückgegebene Liste ist _dynamisch_, das heißt, sie aktualisiert sich automatisch mit dem DOM-Baum. Daher ist es nicht erforderlich, `Element.getElementsByTagName()` mit dem gleichen Element und den gleichen Argumenten wiederholt aufzurufen, wenn sich das DOM zwischen den Aufrufen ändert.

Wenn diese Methode auf ein HTML-Element in einem HTML-Dokument angewendet wird, wird das Argument von `getElementsByTagName` vor der Suche in Kleinbuchstaben umgewandelt. Dies ist unerwünscht, wenn versucht wird, {{Glossary("camel_case", "camel-cased")}} SVG-Elemente (wie z.B. [`<linearGradient>`](/de/docs/Web/SVG/Reference/Element/linearGradient)) in einem HTML-Dokument zu matchen. Stattdessen sollte [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS) verwendet werden, das die Groß- und Kleinschreibung des Tag-Namens beibehält.

`Element.getElementsByTagName` ist ähnlich wie
[`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), nur dass es nur nach Elementen sucht, die Nachfahren des angegebenen Elements sind.

## Syntax

```js-nolint
getElementsByTagName(tagName)
```

### Parameter

- `tagName`
  - : Der qualifizierte Name, nach dem gesucht werden soll. Der spezielle String
    `"*"` repräsentiert alle Elemente. Zur Kompatibilität mit XHTML sollte Kleinschreibung verwendet werden.

### Rückgabewert

Eine _dynamische_ [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von Elementen mit einem passenden Tag-Namen, in der Reihenfolge, in der sie erscheinen. Wenn keine Elemente gefunden werden, ist die `HTMLCollection` leer.

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
