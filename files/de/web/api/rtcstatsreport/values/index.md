---
title: "RTCStatsReport: Methode values()"
short-title: values()
slug: Web/API/RTCStatsReport/values
l10n:
  sourceCommit: aa3f3f5d4d00cba08b88bddcfa94a84e2a4d976d
---

{{APIRef("WebRTC")}}

Die Methode **`values()`** der Schnittstelle [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gibt ein neues _[Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück. Damit können Sie in der Reihenfolge, in der die Einträge hinzugefügt wurden, über die Werte jedes Eintrags im `RTCStatsReport`-Objekt iterieren.

Die Werte sind [Statistik-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Ansonsten entspricht die Methode {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie Sie mit dem von `values()` zurückgegebenen Iterator über einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iterieren.

Für die Variable `myPeerConnection`, eine Instanz von `RTCPeerConnection`, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) auf und wartet mit `await` auf den Statistikbericht.
Anschließend verwendet er eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife mit dem von `values()` zurückgegebenen Iterator, um über die Dictionary-Objekte im Bericht zu iterieren.
Die Eigenschaften von Statistikobjekten mit dem `type` `outbound-rtp` werden in der Konsole ausgegeben (andere Objekte werden verworfen).

```js
const stats = await myPeerConnection.getStats();

for (const stat of stats.values()) {
  if (stat.type !== "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${stat[statName]}`);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.values()")}}
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
