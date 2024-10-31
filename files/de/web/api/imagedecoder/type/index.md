---
title: "ImageDecoder: type-Eigenschaft"
short-title: type
slug: Web/API/ImageDecoder/type
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`type`**-Schreibgeschützte Eigenschaft des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder) Interfaces spiegelt den während der Konstruktion konfigurierten [MIME-Typ](/de/docs/Web/HTTP/MIME_types) wider.

## Wert

Ein String, der den konfigurierten [MIME-Typ](/de/docs/Web/HTTP/MIME_types) enthält.

## Beispiele

Das folgende Beispiel gibt den Wert von `type` in der Konsole aus.

```js
console.log(imageDecoder.type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
