---
title: "RTCStatsReport: size-Eigenschaft"
short-title: size
slug: Web/API/RTCStatsReport/size
l10n:
  sourceCommit: b8f6156b9ab9a8ca1f3ff6b88217466c6749270d
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`size`**-Eigenschaft des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Interfaces gibt die Anzahl der Elemente im aktuellen Bericht zurück.

Beachten Sie, dass jedes Element aus einem Schlüssel-Wert-Paar besteht, wobei die Schlüssel eindeutige `id`-Werte von überwachten Statistikobjekten sind, aus denen die Statistiken abgeleitet werden, und die zugeordneten Werte sind [Statistik-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Diese Eigenschaft entspricht ansonsten der {{jsxref("Map.prototype.size")}}.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in diesem Bericht angibt.
Der Wert ist null, wenn der Bericht leer ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
