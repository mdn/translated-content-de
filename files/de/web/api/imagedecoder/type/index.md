---
title: "ImageDecoder: type-Eigenschaft"
short-title: type
slug: Web/API/ImageDecoder/type
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`type`** schreibgeschützte Eigenschaft des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces spiegelt den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) wider, der während der Konstruktion konfiguriert wurde.

## Wert

Ein String, der den konfigurierten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) enthält.

## Beispiele

Das folgende Beispiel gibt den Wert von `type` in der Konsole aus.

```js
console.log(imageDecoder.type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
