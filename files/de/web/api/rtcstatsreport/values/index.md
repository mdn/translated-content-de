---
title: "RTCStatsReport: values()-Methode"
short-title: values()
slug: Web/API/RTCStatsReport/values
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`values()`**-Methode des {{domxref("RTCStatsReport")}}-Interfaces gibt ein neues _[Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das verwendet werden kann, um die Werte für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge zu iterieren.

Die Werte sind [Statistik-Wörterbuchobjekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man durch ein {{domxref("RTCStatsReport")}} mit dem von `values()` zurückgegebenen Iterator iteriert.

Angenommen, es gibt eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Dann wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife mit dem von `values()` zurückgegebenen Iterator verwendet, um durch die Wörterbuchobjekte im Bericht zu iterieren.
Die Eigenschaften von Statistikobjekten mit dem `type` von `outbound-rtp` werden in der Konsole protokolliert (andere Objekte werden verworfen).

```js
const stats = await myPeerConnection.getStats();

for (const stat of stats.values()) {
  if (stat.type != "outbound-rtp") continue;
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
- {{domxref("RTCStatsReport.keys()")}}
- {{domxref("RTCStatsReport.entries()")}}
