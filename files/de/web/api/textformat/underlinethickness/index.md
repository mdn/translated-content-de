---
title: "TextFormat: underlineThickness-Eigenschaft"
short-title: underlineThickness
slug: Web/API/TextFormat/underlineThickness
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`underlineThickness`**-Eigenschaft der [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle gibt die Dicke der Unterstreichung an, die auf den zu formatierenden Textbereich angewendet werden muss.

## Wert

Ein {{jsxref("String")}}, der einen der folgenden Werte darstellt:

- `"none"`: Keine Unterstreichung.
- `"thin"`: Eine dünne Unterstreichung.
- `"thick"`: Eine dicke Unterstreichung.

## Beispiele

### Lesen der erforderlichen Unterstreichungsdicke

Das folgende Beispiel zeigt, wie die `textformatupdate`-Ereignis-Eigenschaft `underlineThickness` verwendet wird, um die Unterstreichungsdicke zu bestimmen, die auf den textlichen Inhalt angewendet werden muss. Beachten Sie, dass der Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zum Erstellen von Text verwendet wird.

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

- Die [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle, zu der es gehört.
