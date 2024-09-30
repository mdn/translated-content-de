---
title: "ImageDecoder: type-Eigenschaft"
short-title: type
slug: Web/API/ImageDecoder/type
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`type`**-Eigenschaft des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces, die nur gelesen werden kann, gibt den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) wieder, der während der Konstruktion konfiguriert wurde.

## Wert

Ein String, der den konfigurierten [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) enthält.

## Beispiele

Das folgende Beispiel gibt den Wert von `type` in der Konsole aus.

```js
console.log(imageDecoder.type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
