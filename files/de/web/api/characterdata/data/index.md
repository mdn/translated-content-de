---
title: "CharacterData: data Eigenschaft"
short-title: data
slug: Web/API/CharacterData/data
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("DOM")}}

Die **`data`**-Eigenschaft der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle repräsentiert den Wert der Daten des aktuellen Objekts.

## Wert

Ein String mit den Zeicheninformationen, die im [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten enthalten sind.

Wenn sie auf den `null`-Wert gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, so dass `cd.data = null` gleichbedeutend mit `cd.data = ""` ist.

## Beispiel

> **Note:** [`CharacterData`](/de/docs/Web/API/CharacterData) ist eine abstrakte Schnittstelle.
> Die untenstehenden Beispiele verwenden zwei konkrete Schnittstellen, die sie implementieren, [`Text`](/de/docs/Web/API/Text) und [`Comment`](/de/docs/Web/API/Comment).

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

- [`CharacterData.length`](/de/docs/Web/API/CharacterData/length) gibt die Länge der Daten im [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten zurück.
