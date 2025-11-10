---
title: "ProgressEvent: loaded-Eigenschaft"
short-title: loaded
slug: Web/API/ProgressEvent/loaded
l10n:
  sourceCommit: 03ca44d7f71637a4cad71413fac4e31d5de66638
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`ProgressEvent.loaded`** ist eine Zahl, die die Größe der bereits übertragenen oder verarbeiteten Daten angibt.
Das Fortschrittsverhältnis kann berechnet werden, indem der Wert dieser Eigenschaft durch [`ProgressEvent.total`](/de/docs/Web/API/ProgressEvent/total) dividiert wird.

Für vom Browser in HTTP-Nachrichten ausgelöste `ProgressEvent`s bezieht sich der Wert auf die Anzahl der Bytes einer Ressource, die abgeschlossen sind, und wird aus dem `Content-Length`-Header abgeleitet.
Bei komprimierten Anfragen mit unbekannter Gesamtgröße kann `loaded` die Größe der komprimierten oder dekomprimierten Daten enthalten, abhängig vom Browser.
Ab 2024 enthält es in Firefox die Größe der komprimierten Daten und in Chrome die Größe der unkomprimierten Daten.

In einem `ProgressEvent`, das Sie selbst erstellen, können Sie `loaded` jeden numerischen Wert zuweisen, der die Menge der im Vergleich zum `total`-Wert erledigten Arbeit darstellt.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)-Interface, zu dem es gehört.
