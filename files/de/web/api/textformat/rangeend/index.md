---
title: "TextFormat: rangeEnd-Eigenschaft"
short-title: rangeEnd
slug: Web/API/TextFormat/rangeEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`rangeEnd`**-Eigenschaft der [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle gibt die Endposition des Textbereichs an, der mit dem angegebenen Textformat formatiert werden muss.

## Wert

Ein {{jsxref("Number")}}.

## Beispiele

### Lesen des zu formatierenden Textbereichs

Das folgende Beispiel zeigt, wie die `rangeStart`- und `rangeEnd`-Eigenschaften des `textformatupdate`-Ereignisses verwendet werden, um den Textbereich zu bestimmen, der formatiert werden muss. Beachten Sie, dass der Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zur Texteingabe verwendet wird.

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

- Die [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle, zu der es gehört.
