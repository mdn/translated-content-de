---
title: "TextFormat: underlineStyle-Eigenschaft"
short-title: underlineStyle
slug: Web/API/TextFormat/underlineStyle
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`underlineStyle`**-Eigenschaft des [`TextFormat`](/de/docs/Web/API/TextFormat)-Interfaces gibt den Stil der Unterstreichung an, die auf den zu formatierenden Textbereich angewendet werden muss.

## Wert

Ein {{jsxref("String")}}, der einen der folgenden Werte hat:

- `"none"`: Keine Unterstreichung.
- `"solid"`: Eine durchgehende Unterstreichung.
- `"double"`: Eine doppelte Unterstreichung.
- `"dotted"`: Eine gepunktete Unterstreichung.
- `"dashed"`: Eine gestrichelte Unterstreichung.
- `"wavy"`: Eine wellenförmige Unterstreichung.

## Beispiele

### Die zu applizierende Unterstreichung lesen

Das folgende Beispiel zeigt, wie die `underlineStyle`-Eigenschaft des `textformatupdate`-Events verwendet wird, um den Unterstreichungsstil zu bestimmen, der auf den formatierten Text angewendet werden soll. Beachten Sie, dass der Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zur Textkomposition verwendet wird.

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
      `IME wants to apply a ${format.underlineStyle} underline between ${format.rangeStart} and ${format.rangeEnd}.`,
    );
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextFormat`](/de/docs/Web/API/TextFormat)-Interface, zu dem es gehört.
