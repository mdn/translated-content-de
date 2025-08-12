---
title: "TextFormat: rangeEnd-Eigenschaft"
short-title: rangeEnd
slug: Web/API/TextFormat/rangeEnd
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`rangeEnd`**-Eigenschaft der [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle gibt die Endposition des Textbereichs an, der mit dem angegebenen Textformat formatiert werden muss.

## Wert

Ein {{jsxref("Number")}}.

## Beispiele

### Lesen des Textbereichs, der formatiert werden muss

Das folgende Beispiel zeigt, wie die `textformatupdate`-Ereigniseigenschaften `rangeStart` und `rangeEnd` verwendet werden, um den Textbereich zu bestimmen, der formatiert werden muss. Beachten Sie, dass der Callback des Ereignis-Listeners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zum Erstellen von Text verwendet wird.

```html
<div id="editor"></div>
```

```css hidden
#editor {
  height: 200px;
  background: #eeeeee;
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

- Die [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle, zu der sie gehört.
