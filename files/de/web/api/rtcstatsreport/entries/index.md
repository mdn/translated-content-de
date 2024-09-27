---
title: "RTCStatsReport: entries()-Methode"
short-title: entries()
slug: Web/API/RTCStatsReport/entries
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`entries()`**-Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Schnittstelle gibt ein neues [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das verwendet werden kann, um über die Schlüssel/Werte-Paare für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge zu iterieren.

Die Schlüssel sind eindeutige `id`-Werte für überwachte Statistikobjekte, aus denen die Statistiken abgeleitet werden, und die zugehörigen Werte sind [Statistik-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Die Methode ist ansonsten dieselbe wie {{jsxref("Map.prototype.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man über ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) mithilfe des von `entries()` zurückgegebenen Iterators iteriert.

Angenommen, eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Dann wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um mit dem von `entries()` zurückgegebenen Iterator durch die Einträge zu iterieren.
Die Eigenschaften von Statistikobjekten mit dem `type` `outbound-rtp` werden in die Konsole protokolliert (andere Objekte werden verworfen).

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
