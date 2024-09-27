---
title: "TextFormat: underlineThickness-Eigenschaft"
short-title: underlineThickness
slug: Web/API/TextFormat/underlineThickness
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`underlineThickness`**-Eigenschaft der [`TextFormat`](/de/docs/Web/API/TextFormat)-Schnittstelle gibt die Dicke der Unterstreichung an, die auf den zu formatierenden Textbereich angewendet werden muss.

## Wert

Ein {{jsxref("String")}}, der einen der folgenden Werte hat:

- `"none"`: Keine Unterstreichung.
- `"thin"`: Eine dünne Unterstreichung.
- `"thick"`: Eine dicke Unterstreichung.

## Beispiele

### Lesen der Unterstreichungsdicke, die angewendet werden muss

Das folgende Beispiel zeigt, wie die `underlineThickness`-Eigenschaft des `textformatupdate`-Ereignisses verwendet wird, um die Unterstreichungsdicke zu bestimmen, die auf den formatierten Text angewendet werden muss. Beachten Sie, dass der Rückruf des Ereignislisteners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster zur Texteingabe verwendet wird.

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
