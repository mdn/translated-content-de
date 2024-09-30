---
title: "TextEncoderStream: encoding-Eigenschaft"
short-title: encoding
slug: Web/API/TextEncoderStream/encoding
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`encoding`**-Eigenschaft des [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)-Interfaces gibt einen String zurück, der den Namen des von dem aktuellen `TextEncoderStream`-Objekt verwendeten Kodierungsalgorithmus enthält.

## Wert

Ein String, der `utf-8` kodierte Daten enthält.

## Beispiele

Das folgende Beispiel demonstriert, wie die `encoding`-Eigenschaft von einem `TextEncoderStream`-Objekt zurückgegeben wird.

```js
stream = new TextEncoderStream();
console.log(stream.encoding);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
