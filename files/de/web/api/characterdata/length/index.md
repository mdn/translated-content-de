---
title: "CharacterData: length Eigenschaft"
short-title: length
slug: Web/API/CharacterData/length
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("DOM")}}

Die schreibgeschützte **`CharacterData.length`**-Eigenschaft
gibt die Anzahl der Zeichen in den enthaltenen Daten als positive Ganzzahl zurück.

## Wert

Eine positive Ganzzahl, die die Länge des [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)-Strings angibt.

## Beispiel

> **Note:** [`CharacterData`](/de/docs/Web/API/CharacterData) ist ein abstraktes Interface.
> Die untenstehenden Beispiele verwenden [`Text`](/de/docs/Web/API/Text), ein konkretes Interface, das es implementiert.

```html
Length of the string in the <code>Text</code> node: <output></output>
```

```js
const output = document.querySelector("output");
const textNode = new Text("This text has been set using 'textNode.data'.");

output.value = textNode.length;
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
