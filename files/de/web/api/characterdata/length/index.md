---
title: "CharacterData: Länge-Eigenschaft"
short-title: Länge
slug: Web/API/CharacterData/length
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

Die schreibgeschützte **`CharacterData.length`**-Eigenschaft gibt die Anzahl der Zeichen in den enthaltenen Daten als positive Ganzzahl zurück.

## Wert

Eine positive Ganzzahl mit der Länge des {{domxref("CharacterData.data")}}-Strings.

## Beispiel

> **Note:** {{domxref("CharacterData")}} ist ein abstraktes Interface.
> Die unten stehenden Beispiele verwenden {{domxref("Text")}}, ein konkretes Interface, das es implementiert.

```html
Länge des Strings im <code>Text</code>-Knoten: <output></output>
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
