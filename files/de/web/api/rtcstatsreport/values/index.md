---
title: "RTCStatsReport: values() Methode"
short-title: values()
slug: Web/API/RTCStatsReport/values
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("WebRTC")}}

Die **`values()`** Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Schnittstelle gibt ein neues _[Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ Objekt zurück, das verwendet werden kann, um die Werte für jedes Element im `RTCStatsReport` Objekt in Einfügereihenfolge zu durchlaufen.

Die Werte sind [Statistiken-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man durch ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) mit dem Iterator, der von `values()` zurückgegeben wird, iteriert.

Angenommen, eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, wird verwendet, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Anschließend wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife mit dem Iterator, den `values()` zurückgibt, verwendet, um die Dictionary-Objekte im Bericht zu durchlaufen.
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
