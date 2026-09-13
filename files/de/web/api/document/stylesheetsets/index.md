---
title: "Dokument: StyleSheetSets-Eigenschaft"
short-title: styleSheetSets
slug: Web/API/Document/styleSheetSets
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`styleSheetSets`** gibt eine aktuelle Liste aller derzeit verfügbaren Stylesheet-Sets zurück.

## Wert

Eine Liste der verfügbaren Stylesheet-Sets.

## Beispiele

Wenn Sie ein {{HTMLElement("ul")}} (Listen) Element mit der ID "sheetList" haben, können Sie es mit den Namen aller verfügbaren Stylesheet-Sets mit einem Code wie diesem befüllen:

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

Die Liste der verfügbaren Stylesheet-Sets wird erstellt, indem alle für das Dokument verfügbaren Stylesheets in der Reihenfolge, in der sie im [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Attribut aufgeführt sind, aufgezählt werden. Dabei wird der `title` jedes Stylesheets, das einen Titel hat, zur Liste hinzugefügt. Doppelte Einträge werden aus der Liste entfernt (unter Verwendung eines groß- und kleinschreibungssensitiven Vergleichs).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Stylesheet`](/de/docs/Web/API/StyleSheet)
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)
- [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet)
- [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet)
- [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet)
- [`document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet)
