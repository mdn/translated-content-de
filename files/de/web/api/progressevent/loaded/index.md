---
title: "ProgressEvent: loaded-Eigenschaft"
short-title: loaded
slug: Web/API/ProgressEvent/loaded
l10n:
  sourceCommit: 87d974f5a37297d2b95ded0cd7a4301dacb3d3d8
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Die **`ProgressEvent.loaded`**-Eigenschaft (nur lesbar) ist ein 64-Bit-Integer ohne Vorzeichen, das die Größe der bereits übertragenen oder verarbeiteten Daten in Bytes angibt. Das Verhältnis kann berechnet werden, indem der Wert dieser Eigenschaft durch `ProgressEvent.total` geteilt wird. Beim Herunterladen einer Ressource über HTTP wird nur der Body der HTTP-Nachricht gezählt, Header und anderer Overhead werden nicht berücksichtigt.

Beachten Sie, dass bei komprimierten Anfragen unbekannter Gesamtlänge `loaded` je nach Browser die Größe der komprimierten oder dekomprimierten Daten enthalten kann. Stand 2024 enthält es in Firefox die Größe der komprimierten Daten und in Chrome die Größe der unkomprimierten Daten.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface, zu dem es gehört.
