---
title: "TextFormat: rangeEnd-Eigenschaft"
short-title: rangeEnd
slug: Web/API/TextFormat/rangeEnd
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`rangeEnd`**-Eigenschaft des [`TextFormat`](/de/docs/Web/API/TextFormat)-Interface gibt die Endposition des Textbereichs an, der mit dem gegebenen Textformat formatiert werden muss.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

### Lesen des Bereichs des zu formatierenden Textes

Das folgende Beispiel zeigt, wie die Eigenschaften `rangeStart` und `rangeEnd` des `textformatupdate`-Ereignisses verwendet werden, um den Bereich des zu formatierenden Textes zu bestimmen. Beachten Sie, dass der Rückruf des Ereignis-Listeners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zum Verfassen von Text verwendet wird.

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
      `IME wants to apply formatting between ${format.rangeStart} and ${format.rangeEnd}.`,
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
