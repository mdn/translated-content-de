---
title: "CharacterBoundsUpdateEvent: rangeEnd-Eigenschaft"
short-title: rangeEnd
slug: Web/API/CharacterBoundsUpdateEvent/rangeEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`CharacterBoundsUpdateEvent.rangeEnd`** repräsentiert den Offset des letzten Zeichens innerhalb des bearbeitbaren Textbereichs, für den das Betriebssystem die Grenzen benötigt.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

### Lesen des `rangeEnd`-Wertes

Dieses Beispiel zeigt, wie das `characterboundsupdate`-Ereignis verwendet wird und wie die Werte der Eigenschaften `rangeStart` und `rangeEnd` ausgelesen werden können.

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
