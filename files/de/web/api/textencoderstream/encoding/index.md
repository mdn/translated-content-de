---
title: "TextEncoderStream: encoding-Eigenschaft"
short-title: encoding
slug: Web/API/TextEncoderStream/encoding
l10n:
  sourceCommit: 0f42b8ccf6bef96f27e678163954b3a363b9dcf6
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`encoding`**-Eigenschaft des [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)-Interfaces gibt einen String zurück, der den Namen des von dem aktuellen `TextEncoderStream`-Objekt verwendeten Kodierungsalgorithmus enthält.

## Wert

Ein String, der `utf-8` kodierte Daten enthält.

## Beispiele

Das folgende Beispiel zeigt, wie man `encoding` von einem `TextEncoderStream`-Objekt zurückgibt.

```js
const stream = new TextEncoderStream();
console.log(stream.encoding);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
