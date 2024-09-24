---
title: "ImageDecoder: type-Eigenschaft"
short-title: type
slug: Web/API/ImageDecoder/type
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`type`** schreibgeschützte Eigenschaft der [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Schnittstelle gibt den [MIME-Typ](/de/docs/Web/HTTP/MIME_types) wieder, der während der Konstruktion konfiguriert wurde.

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
