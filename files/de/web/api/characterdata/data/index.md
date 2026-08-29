---
title: "CharacterData: data-Eigenschaft"
short-title: data
slug: Web/API/CharacterData/data
l10n:
  sourceCommit: f78ca75460fbdbc7f17b6e366dad47b9760054b0
---

{{APIRef("DOM")}}

Die **`data`**-Eigenschaft des [`CharacterData`](/de/docs/Web/API/CharacterData) Interfaces repräsentiert den Wert der Daten des aktuellen Objekts.

## Wert

Ein String mit den Zeicheninformationen, die im [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten enthalten sind.

Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt. Somit ist `cd.data = null` äquivalent zu `cd.data = ""`.

## Beispiel

> [!NOTE]
> [`CharacterData`](/de/docs/Web/API/CharacterData) ist ein abstraktes Interface.
> Die Beispiele unten verwenden zwei konkrete Interfaces, die es implementieren: [`Text`](/de/docs/Web/API/Text) und [`Comment`](/de/docs/Web/API/Comment).

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

### Setzen des Inhalts eines Textknotens mit data

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

- [`CharacterData.length`](/de/docs/Web/API/CharacterData/length), der die Länge der in dem [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten enthaltenen Daten zurückgibt.
