---
title: "Document: styleSheetSets-Eigenschaft"
short-title: styleSheetSets
slug: Web/API/Document/styleSheetSets
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die schreibgeschützte **`styleSheetSets`**-Eigenschaft gibt eine aktuelle Liste aller derzeit verfügbaren Style-Sheet-Sets zurück.

## Wert

Eine Liste der verfügbaren Style-Sheet-Sets.

## Beispiele

Angenommen, es gibt ein {{HTMLElement("ul")}} (Listen-)Element mit der ID "sheetList", so können Sie es mit den Namen aller verfügbaren Style-Sheet-Sets mit einem Code wie diesem füllen:

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

Die Liste der verfügbaren Style-Sheet-Sets wird erstellt, indem alle für das Dokument verfügbaren Style-Sheets in der Reihenfolge, in der sie im Attribut [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) aufgeführt sind, aufgezählt werden und der `title` jedes Style-Sheets, das einen Titel hat, der Liste hinzugefügt wird. Duplikate werden aus der Liste entfernt (unter Verwendung eines groß- und kleinschreibungssensitiven Vergleichs).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Stylesheet`](/de/docs/Web/API/Stylesheet)
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)
- [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet)
- [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet)
- [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet)
- [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet)
