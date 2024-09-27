---
title: "CharacterData: data-Eigenschaft"
short-title: data
slug: Web/API/CharacterData/data
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}}

Die **`data`**-Eigenschaft der [`CharacterData`](/de/docs/Web/API/CharacterData)-Schnittstelle repräsentiert den Wert der Dateneigenschaft des aktuellen Objekts.

## Wert

Ein String mit den Zeicheninformationen, die im [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten enthalten sind.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `cd.data = null` gleichbedeutend mit `cd.data = ""` ist.

## Beispiel

> **Note:** [`CharacterData`](/de/docs/Web/API/CharacterData) ist eine abstrakte Schnittstelle.
> Die untenstehenden Beispiele verwenden zwei konkrete Schnittstellen, die sie implementieren: [`Text`](/de/docs/Web/API/Text) und [`Comment`](/de/docs/Web/API/Comment).

### Ein Kommentar mit data lesen

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

### Den Inhalt eines Textknotens mit data setzen

```html
<span>Result: </span>Not set.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.data = "This text has been set using 'textnode.data'.";
```

{{EmbedLiveSample("Setting_the_content_of_a_text_node_using_data", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CharacterData.length`](/de/docs/Web/API/CharacterData/length), die die Länge der im [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten enthaltenen Daten zurückgibt.
