---
title: "ProgressEvent: geladen-Eigenschaft"
short-title: geladen
slug: Web/API/ProgressEvent/loaded
l10n:
  sourceCommit: 76c3857b73a8d11d06dd2cd60d41df68682d7b20
---

{{APIRef("XMLHttpRequest API")}}

Die **`ProgressEvent.loaded`** schreibgeschützte Eigenschaft ist ein 64-Bit-unsigned Integer, der die Größe der bereits übertragenen oder verarbeiteten Daten in Bytes angibt. Das Verhältnis kann berechnet werden, indem `ProgressEvent.total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP wird hier nur der Body der HTTP-Nachricht gezählt, nicht jedoch die Header und anderer Overhead.

Beachten Sie, dass bei komprimierten Anfragen unbekannter Gesamtgröße `loaded` je nach Browser die Größe der komprimierten oder dekomprimierten Daten enthalten kann. Ab 2024 enthält es in Firefox die Größe der komprimierten Daten und in Chrome die Größe der unkomprimierten Daten.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("ProgressEvent")}} Interface, zu dem es gehört.
