---
title: "TextEncoderStream: encoding Eigenschaft"
short-title: encoding
slug: Web/API/TextEncoderStream/encoding
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`encoding`** des [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)-Interfaces gibt einen String zurück, der den Namen des Kodierungsalgorithmus enthält, der vom aktuellen `TextEncoderStream`-Objekt verwendet wird.

## Wert

Ein String, der `utf-8` kodierte Daten enthält.

## Beispiele

Das folgende Beispiel zeigt, wie `encoding` von einem `TextEncoderStream`-Objekt zurückgegeben wird.

```js
stream = new TextEncoderStream();
console.log(stream.encoding);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
