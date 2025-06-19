---
title: "TextFormat: underlineStyle-Eigenschaft"
short-title: underlineStyle
slug: Web/API/TextFormat/underlineStyle
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`underlineStyle`**-Eigenschaft der [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle gibt den Stil der Unterstreichung an, die auf den zu formatierenden Textbereich angewendet werden muss.

## Wert

Ein {{jsxref("String")}}, der einen der folgenden Werte hat:

- `"none"`: Keine Unterstreichung.
- `"solid"`: Eine durchgehende Unterstreichung.
- `"double"`: Eine doppelte Unterstreichung.
- `"dotted"`: Eine gepunktete Unterstreichung.
- `"dashed"`: Eine gestrichelte Unterstreichung.
- `"wavy"`: Eine wellenförmige Unterstreichung.

## Beispiele

### Lesen des anzuwendenden Unterstreichungsstils

Das folgende Beispiel zeigt, wie die `underlineStyle`-Eigenschaft des `textformatupdate`-Ereignisses verwendet wird, um den Unterstreichungsstil zu bestimmen, der auf den zu formatierenden Text angewendet werden soll. Beachten Sie, dass der Callback des Ereignis-Listeners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zum Verfassen des Textes verwendet wird.

```html
<div id="editor"></div>
```

```css hidden
#editor {
  height: 200px;
  background: #eee;
}
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

- Die [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle, zu der sie gehört.
