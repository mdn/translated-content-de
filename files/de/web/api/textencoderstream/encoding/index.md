---
title: "TextEncoderStream: Eigenschaft encoding"
short-title: encoding
slug: Web/API/TextEncoderStream/encoding
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

Die **`encoding`** schreibgeschützte Eigenschaft der {{domxref("TextEncoderStream")}}-Schnittstelle gibt einen String zurück, der den Namen des Kodierungsalgorithmus enthält, der vom aktuellen `TextEncoderStream`-Objekt verwendet wird.

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
