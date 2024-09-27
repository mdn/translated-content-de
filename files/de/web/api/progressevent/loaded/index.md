---
title: "ProgressEvent: loaded Eigenschaft"
short-title: loaded
slug: Web/API/ProgressEvent/loaded
l10n:
  sourceCommit: 76c3857b73a8d11d06dd2cd60d41df68682d7b20
---

{{APIRef("XMLHttpRequest API")}}

Die schreibgeschützte Eigenschaft **`ProgressEvent.loaded`** ist ein 64-Bit-Integer ohne Vorzeichen, das die Größe der bereits übertragenen oder verarbeiteten Daten in Bytes angibt. Das Verhältnis kann berechnet werden, indem `ProgressEvent.total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt Header und andere Overhead-Elemente nicht ein.

Beachten Sie, dass bei komprimierten Anfragen mit unbekannter Gesamtgröße `loaded` je nach Browser die Größe der komprimierten oder dekomprimierten Daten enthalten kann. Ab 2024 enthält es in Firefox die Größe der komprimierten Daten und in Chrome die Größe der dekomprimierten Daten.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface, zu dem es gehört.
