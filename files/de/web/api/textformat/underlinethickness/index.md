---
title: "TextFormat: underlineThickness-Eigenschaft"
short-title: underlineThickness
slug: Web/API/TextFormat/underlineThickness
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`underlineThickness`**-Eigenschaft des [`TextFormat`](/de/docs/Web/API/TextFormat)-Interfaces gibt die Dicke der Unterstreichung an, die auf den zu formatierenden Textbereich angewendet werden muss.

## Wert

Ein {{jsxref("String")}}, der einer der folgenden Werte ist:

- `"none"`: Keine Unterstreichung.
- `"thin"`: Eine dünne Unterstreichung.
- `"thick"`: Eine dicke Unterstreichung.

## Beispiele

### Die auf den Text anzuwendende Unterstreichungsdicke auslesen

Das folgende Beispiel zeigt, wie die `underlineThickness`-Eigenschaft des `textformatupdate`-Ereignisses verwendet wird, um die Unterstreichungsdicke zu bestimmen, die auf den formatierten Text angewendet werden muss. Beachten Sie, dass der Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zum Verfassen von Text verwendet wird.

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
      `IME wants to apply a ${format.underlineThickness} underline between ${format.rangeStart} and ${format.rangeEnd}.`,
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
