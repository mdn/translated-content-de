---
title: "ProgressEvent: loaded Eigenschaft"
short-title: loaded
slug: Web/API/ProgressEvent/loaded
l10n:
  sourceCommit: 6b8c7b7dade8173f148031a0695bbf609e10f9f9
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ProgressEvent.loaded`**-Eigenschaft ist eine 64-Bit-Integer ohne Vorzeichen, die die Größe der bereits übertragenen oder verarbeiteten Daten in Bytes angibt. Das Verhältnis kann berechnet werden, indem `ProgressEvent.total` durch den Wert dieser Eigenschaft geteilt wird. Beim Herunterladen einer Ressource über HTTP zählt dies nur den Körper der HTTP-Nachricht und schließt Header und andere Overhead-Daten nicht ein.

Beachten Sie, dass bei komprimierten Anfragen unbekannter Gesamtgröße `loaded` je nach Browser die Größe der komprimierten oder dekomprimierten Daten enthalten kann. Ab 2024 enthält es in Firefox die Größe der komprimierten Daten und in Chrome die Größe der unkomprimierten Daten.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Schnittstelle, zu der es gehört.
