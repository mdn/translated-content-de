---
title: "Dokument: styleSheetSets-Eigenschaft"
short-title: styleSheetSets
slug: Web/API/Document/styleSheetSets
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`styleSheetSets`** gibt eine aktuelle Liste aller derzeit verfügbaren Stylesheet-Sets zurück.

## Wert

Eine Liste der verfügbaren Stylesheet-Sets.

## Beispiele

Angenommen, Sie haben ein {{HTMLElement("ul")}}-Element mit der ID "sheetList", können Sie es mit den Namen aller verfügbaren Stylesheet-Sets mit folgendem Code füllen:

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

## Anmerkungen

Die Liste der verfügbaren Stylesheet-Sets wird erstellt, indem alle für das Dokument verfügbaren Stylesheets in der Reihenfolge, in der sie im {{domxref("Document.styleSheets")}}-Attribut aufgeführt sind, aufgezählt werden. Dabei wird der `title` jedes Stylesheets, das einen Titel hat, zur Liste hinzugefügt. Duplikate werden aus der Liste entfernt (verwendet wird ein case-sensitiver Vergleich).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Stylesheet")}}
- {{domxref("Document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
