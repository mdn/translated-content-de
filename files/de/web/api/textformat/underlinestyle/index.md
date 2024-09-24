---
title: "TextFormat: Eigenschaft underlineStyle"
short-title: underlineStyle
slug: Web/API/TextFormat/underlineStyle
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`underlineStyle`**-Eigenschaft der {{domxref("TextFormat")}}-Schnittstelle gibt den Stil der Unterstreichung an, die auf den zu formatierenden Textbereich angewendet werden soll.

## Wert

Ein {{jsxref("String")}}, der einen der folgenden Werte annehmen kann:

- `"none"`: Keine Unterstreichung.
- `"solid"`: Eine durchgehende Unterstreichung.
- `"double"`: Eine doppelte Unterstreichung.
- `"dotted"`: Eine gepunktete Unterstreichung.
- `"dashed"`: Eine gestrichelte Unterstreichung.
- `"wavy"`: Eine wellenförmige Unterstreichung.

## Beispiele

### Lesen des anzuwendenden Unterstreichungsstils

Das folgende Beispiel zeigt, wie die `underlineStyle`-Eigenschaft des `textformatupdate`-Ereignisses verwendet wird, um den Unterstreichungsstil zu ermitteln, der auf den zu formatierenden Text angewendet werden soll. Beachten Sie, dass der Rückruf des Ereignis-Listeners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster verwendet wird, um Text zu komponieren.

```html
<div id="editor" style="height:200px;background:#eee;"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext(editorEl);
editorEl.editContext = editContext;

editContext.addEventListener("textformatupdate", (e) => {
  const formats = e.getTextFormats();

  for (const format of formats) {
    console.log(
      `IME möchte eine ${format.underlineStyle} Unterstreichung zwischen ${format.rangeStart} und ${format.rangeEnd} anwenden.`,
    );
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{DOMxRef("TextFormat")}}-Schnittstelle, zu der es gehört.
