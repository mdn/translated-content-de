---
title: "RTCStatsReport: Eigenschaft size"
short-title: size
slug: Web/API/RTCStatsReport/size
l10n:
  sourceCommit: b8f6156b9ab9a8ca1f3ff6b88217466c6749270d
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`size`** des {{domxref("RTCStatsReport")}}-Interfaces gibt die Anzahl der Elemente im aktuellen Bericht zurück.

Beachten Sie, dass jedes Element aus einem Schlüssel-Wert-Paar besteht, bei dem die Schlüssel eindeutige `id`-Werte für überwachte Statistikobjekte sind, aus denen die Statistiken abgeleitet werden, und die zugehörigen Werte [Statistik-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types) sind.

Diese Eigenschaft ist ansonsten identisch mit {{jsxref("Map.prototype.size")}}.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in diesem Bericht angibt.
Der Wert ist null, wenn der Bericht leer ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
