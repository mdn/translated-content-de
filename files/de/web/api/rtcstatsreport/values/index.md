---
title: "RTCStatsReport: values() Methode"
short-title: values()
slug: Web/API/RTCStatsReport/values
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`values()`**-Methode des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Interfaces gibt ein neues _[Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das verwendet werden kann, um die Werte für jedes Element im `RTCStatsReport`-Objekt in der Reihenfolge der Einfügung zu durchlaufen.

Die Werte sind [Statistik-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Die Methode entspricht ansonsten der {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man mit dem Iterator, der von `values()` zurückgegeben wird, durch ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert.

Angenommen, eine Variable `myPeerConnection` ist eine Instanz von `RTCPeerConnection`, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Anschließend wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um mit dem von `values()` zurückgegebenen Iterator durch die Dictionary-Objekte im Bericht zu iterieren.
Die Eigenschaften der Statistikobjekte mit dem `type` `outbound-rtp` werden in der Konsole protokolliert (andere Objekte werden verworfen).

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
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
