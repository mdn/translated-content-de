---
title: "CharacterData: data-Eigenschaft"
short-title: data
slug: Web/API/CharacterData/data
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`data`**-Eigenschaft der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle repräsentiert den Wert der Daten des aktuellen Objekts.

## Wert

Ein Zeichenkette mit den im [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten enthaltenen Zeicheninformationen.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in die leere Zeichenkette (`""`) konvertiert, sodass `cd.data = null` gleichbedeutend mit `cd.data = ""` ist.

## Beispiel

> [!NOTE] > [`CharacterData`](/de/docs/Web/API/CharacterData) ist eine abstrakte Schnittstelle.
> Die folgenden Beispiele verwenden zwei konkrete Schnittstellen, die diese implementieren, [`Text`](/de/docs/Web/API/Text) und [`Comment`](/de/docs/Web/API/Comment).

### Lesen eines Kommentars mit data

```html
<!-- This is an HTML comment -->
<output id="result"></output>
```

```js
const comment = document.body.childNodes[1];
const output = document.getElementById("result");

output.value = comment.data;
```

{{EmbedLiveSample("Reading_a_comment_using_data", "100%", 50)}}

### Festlegen des Inhalts eines Textknotens mit data

```html
<span>Result: </span>Not set.
```

```js
const span = document.querySelector("span");
const textNode = span.nextSibling;

textNode.data = "This text has been set using 'textNode.data'.";
```

{{EmbedLiveSample("Setting_the_content_of_a_text_node_using_data", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.length`](/de/docs/Web/API/CharacterData/length), das die Länge der in dem [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten enthaltenen Daten zurückgibt.
