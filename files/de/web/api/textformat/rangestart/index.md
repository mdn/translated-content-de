---
title: "TextFormat: rangeStart-Eigenschaft"
short-title: rangeStart
slug: Web/API/TextFormat/rangeStart
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`rangeStart`**-Eigenschaft der [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle gibt die Startposition des Textranges an, der mit dem angegebenen Textformat formatiert werden muss.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

### Lesen des zu formatierenden Textbereichs

Das folgende Beispiel zeigt, wie die Eigenschaften `rangeStart` und `rangeEnd` des `textformatupdate`-Ereignisses verwendet werden, um den Bereich des zu formatierenden Textes zu bestimmen. Beachten Sie, dass der Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zur Texteingabe verwendet wird.

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
