---
title: "TextFormat: rangeStart-Eigenschaft"
short-title: rangeStart
slug: Web/API/TextFormat/rangeStart
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`rangeStart`**-Eigenschaft des [`TextFormat`](/de/docs/Web/API/TextFormat)-Interfaces gibt die Startposition des Textbereichs an, der mit dem angegebenen Textformat formatiert werden muss.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

### Lesen des zu formatierenden Textbereichs

Das folgende Beispiel zeigt, wie die `textformatupdate`-Ereigniseigenschaften `rangeStart` und `rangeEnd` verwendet werden können, um den Bereich des zu formatierenden Textes zu bestimmen. Beachten Sie, dass der Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn Sie ein IME-Fenster zum Zusammenstellen von Text verwenden.

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
