---
title: "HIDDevice: opened-Eigenschaft"
short-title: opened
slug: Web/API/HIDDevice/opened
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`opened`** der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt `true` zurück, wenn die Verbindung zum [`HIDDevice`](/de/docs/Web/API/HIDDevice) geöffnet und bereit zum Datentransfer ist.

## Wert

Ein boolescher Wert, `true` wenn die Verbindung geöffnet ist.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und protokolliert den Wert von `opened` in der Konsole.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
