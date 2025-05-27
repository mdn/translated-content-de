---
title: "RTCStatsReport: values() Methode"
short-title: values()
slug: Web/API/RTCStatsReport/values
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Die **`values()`** Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Schnittstelle gibt ein neues _[Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das verwendet werden kann, um die Werte für jedes Element im `RTCStatsReport` Objekt in Einfügereihenfolge zu iterieren.

Die Werte sind [Statistik-Wörterbuchobjekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Die Methode entspricht ansonsten {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man durch ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) mit dem von `values()` zurückgegebenen Iterator iteriert.

Angenommen, es gibt eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Anschließend wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife zusammen mit dem von `values()` zurückgegebenen Iterator verwendet, um durch die Wörterbuchobjekte im Bericht zu iterieren.
Die Eigenschaften von Statistikobjekten mit dem `type` `outbound-rtp` werden in die Konsole protokolliert (andere Objekte werden verworfen).

```js
const stats = await myPeerConnection.getStats();

for (const stat of stats.values()) {
  if (stat.type !== "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
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
