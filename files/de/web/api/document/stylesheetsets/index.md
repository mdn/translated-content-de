---
title: "Document: styleSheetSets-Eigenschaft"
short-title: styleSheetSets
slug: Web/API/Document/styleSheetSets
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`styleSheetSets`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die eine Live-Liste aller derzeitig verfügbaren Style Sheet Sets zurückgibt.

## Wert

Eine Liste der verfügbaren Style Sheet Sets.

## Beispiele

Für ein {{HTMLElement("ul")}} (Listen-)Element mit der ID "sheetList" können Sie es mit den Namen aller verfügbaren Style Sheet Sets wie folgt befüllen:

```js
const list = document.getElementById("sheetList");
const sheets = document.styleSheetSets;

list.textContent = "";

for (const sheet of sheets) {
  const item = document.createElement("li");
  item.textContent = sheet;
  list.appendChild(item);
}
```

## Hinweise

Die Liste der verfügbaren Style Sheet Sets wird erstellt, indem alle für das Dokument verfügbaren Stylesheets aufgelistet werden, in der Reihenfolge, in der sie im [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Attribut gelistet sind. Der `title` jedes Stylesheets, das einen Titel hat, wird zur Liste hinzugefügt. Duplikate werden aus der Liste entfernt (unter Verwendung eines Groß-Klein-Schreibungssensitiven Vergleichs).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Stylesheet`](/de/docs/Web/API/StyleSheet)
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)
- [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet)
- [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet)
- [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet)
- [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet)
