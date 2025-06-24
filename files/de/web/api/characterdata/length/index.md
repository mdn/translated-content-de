---
title: "CharacterData: length-Eigenschaft"
short-title: length
slug: Web/API/CharacterData/length
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die schreibgeschützte **`CharacterData.length`**-Eigenschaft gibt die Anzahl der Zeichen in den enthaltenen Daten als positive ganze Zahl zurück.

## Wert

Eine positive ganze Zahl, die die Länge des [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)-Strings angibt.

## Beispiel

> [!NOTE] > [`CharacterData`](/de/docs/Web/API/CharacterData) ist ein abstraktes Interface.
> Die folgenden Beispiele verwenden [`Text`](/de/docs/Web/API/Text), ein konkretes Interface, das es implementiert.

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
