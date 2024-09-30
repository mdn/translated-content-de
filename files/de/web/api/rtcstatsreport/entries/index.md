---
title: "RTCStatsReport: entries() Methode"
short-title: entries()
slug: Web/API/RTCStatsReport/entries
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`entries()`** Methode des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Interfaces gibt ein neues [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das verwendet werden kann, um die Schlüssel/Wert-Paare für jedes Element im `RTCStatsReport` Objekt in Einfügereihenfolge zu durchlaufen.

Die Schlüssel sind eindeutige `id`-Werte für überwachte Statistikobjekte, aus denen die Statistiken abgeleitet werden, und die zugehörigen Werte sind [Statistik-Wörterbuchobjekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) mithilfe des Iterators, der von `entries()` zurückgegeben wird, durchlaufen kann.

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, dann ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Anschließend wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife mit dem Iterator verwendet, der von `entries()` zurückgegeben wird, um durch die Einträge zu iterieren.
Die Eigenschaften von Statistikobjekten mit dem `type` von `outbound-rtp` werden in die Konsole protokolliert (andere Objekte werden verworfen).

```js
const stats = await myPeerConnection.getStats();

for (const stat of stats.entries()) {
  if (stat.type != "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
  });
}
```

## Spezifikationen

{{Specifications}} <!-- https://webidl.spec.whatwg.org/#dfn-maplike -->

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.entries()")}}
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
