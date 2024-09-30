---
title: "ProgressEvent: loaded-Eigenschaft"
short-title: loaded
slug: Web/API/ProgressEvent/loaded
l10n:
  sourceCommit: 76c3857b73a8d11d06dd2cd60d41df68682d7b20
---

{{APIRef("XMLHttpRequest API")}}

Die schreibgeschützte Eigenschaft **`ProgressEvent.loaded`** ist eine 64-Bit-Integer ohne Vorzeichen, die die Größe der bereits übertragenen oder verarbeiteten Daten in Bytes angibt. Das Verhältnis kann berechnet werden, indem `ProgressEvent.total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP wird nur der Hauptteil der HTTP-Nachricht gezählt, nicht jedoch Header und andere Overheads.

Beachten Sie, dass bei komprimierten Anfragen unbekannter Gesamtgröße `loaded` je nach Browser entweder die Größe der komprimierten oder der dekomprimierten Daten enthalten kann. Ab 2024 enthält es in Firefox die Größe der komprimierten Daten und in Chrome die der unkomprimierten Daten.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent) Schnittstelle, zu der es gehört.
