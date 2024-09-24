---
title: "TextFormat: Eigenschaft rangeEnd"
short-title: rangeEnd
slug: Web/API/TextFormat/rangeEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`rangeEnd`** Eigenschaft der {{domxref("TextFormat")}} Schnittstelle gibt die Endposition des Textbereichs an, der mit dem angegebenen Textformat formatiert werden muss.

## Wert

Ein {{jsxref("Number")}}.

## Beispiele

### Lesen des Bereichs des zu formatierenden Textes

Das folgende Beispiel zeigt, wie die Eigenschaften `rangeStart` und `rangeEnd` des `textformatupdate`-Ereignisses verwendet werden, um den zu formatierenden Textbereich zu bestimmen. Beachten Sie, dass der Rückruf der Ereignislistener in diesem Beispiel nur beim Verwenden eines IME-Fensters zum Verfassen von Text aufgerufen wird.

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

- Die zugehörige {{DOMxRef("TextFormat")}} Schnittstelle.
