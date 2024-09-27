---
title: "CharacterBoundsUpdateEvent: rangeStart-Eigenschaft"
short-title: rangeStart
slug: Web/API/CharacterBoundsUpdateEvent/rangeStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`CharacterBoundsUpdateEvent.rangeStart`** repräsentiert den Offset des ersten Zeichens innerhalb des bearbeitbaren Textbereichs, für den das Betriebssystem die Grenzen benötigt.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

### Lesen des `rangeStart`-Werts

Dieses Beispiel zeigt, wie Sie das `characterboundsupdate`-Ereignis verwenden und den Wert der `rangeStart`- und `rangeEnd`-Eigenschaften lesen.

```js
const editContext = new EditContext();
editorElement.editContext = editContext;

editContext.addEventListener("characterboundsupdate", (e) => {
  console.log(
    `The OS needs the bounds of the chars at ${e.rangeStart} - ${e.rangeEnd}.`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
