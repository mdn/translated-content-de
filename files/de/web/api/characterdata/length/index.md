---
title: "CharacterData: length-Eigenschaft"
short-title: length
slug: Web/API/CharacterData/length
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

Die schreibgeschützte **`CharacterData.length`**-Eigenschaft gibt die Anzahl der Zeichen in den enthaltenen Daten als positive Ganzzahl zurück.

## Wert

Eine positive Ganzzahl mit der Länge des [`CharacterData.data`](/de/docs/Web/API/CharacterData/data) Strings.

## Beispiel

> **Note:** [`CharacterData`](/de/docs/Web/API/CharacterData) ist ein abstraktes Interface.
> Die nachfolgenden Beispiele verwenden [`Text`](/de/docs/Web/API/Text), ein konkretes Interface, das es implementiert.

```html
Length of the string in the <code>Text</code> node: <output></output>
```

```js
const output = document.querySelector("output");
const textnode = new Text("This text has been set using 'textnode.data'.");

output.value = textnode.length;
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
