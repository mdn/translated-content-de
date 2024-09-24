---
title: "CharacterData: Dateneigenschaft"
short-title: data
slug: Web/API/CharacterData/data
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}}

Die **`data`**-Eigenschaft der {{domxref("CharacterData")}}-Schnittstelle repräsentiert den Wert der Daten des aktuellen Objekts.

## Wert

Ein String mit den Zeicheninformationen, die im {{domxref("CharacterData")}}-Knoten enthalten sind.

Wenn der Wert auf `null` gesetzt wird, wird dieses `null` in den leeren String (`""`) konvertiert, sodass `cd.data = null` gleichbedeutend mit `cd.data = ""` ist.

## Beispiel

> **Note:** {{domxref("CharacterData")}} ist eine abstrakte Schnittstelle.
> Die nachfolgenden Beispiele verwenden zwei konkrete Schnittstellen, die sie implementieren: {{domxref("Text")}} und {{domxref("Comment")}}.

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
const textnode = span.nextSibling;

textnode.data = "This text has been set using 'textnode.data'.";
```

{{EmbedLiveSample("Setting_the_content_of_a_text_node_using_data", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CharacterData.length")}} gibt die Länge der Daten zurück, die im {{domxref("CharacterData")}}-Knoten enthalten sind.
