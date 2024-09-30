---
title: "Text: Text() Konstruktor"
short-title: Text()
slug: Web/API/Text/Text
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM")}}

Der **`Text()`** Konstruktor gibt ein neues [`Text`](/de/docs/Web/API/Text)-Objekt zurück, wobei der optionale String, der als Parameter angegeben wird, als sein Textinhalt dient.

## Syntax

```js-nolint
new Text()
new Text(string)
```

### Parameter

- `string` {{optional_inline}}
  - : Ein String, der den Textinhalt des Textknotens darstellt.

### Rückgabewert

Ein neues [`Text`](/de/docs/Web/API/Text)-Objekt mit dem Inhalt des `string`-Parameters oder der leere String, wenn kein Parameter angegeben wurde.

## Beispiel

```js
let text = new Text("Test");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [DOM API](/de/docs/Web/API/Document_Object_Model)
