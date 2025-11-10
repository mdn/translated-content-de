---
title: "RTCStatsReport: entries() Methode"
short-title: entries()
slug: Web/API/RTCStatsReport/entries
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Die **`entries()`**-Methode des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Interfaces gibt ein neues [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das verwendet werden kann, um durch die Schlüssel/Wert-Paare für jedes Element im `RTCStatsReport`-Objekt in der Einfüge-Reihenfolge zu iterieren.

Die Schlüssel sind eindeutige `id`-Werte für überwachte Statistikobjekte, aus denen die Statistiken abgeleitet werden, und die zugehörigen Werte sind [Statistik-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Die Methode entspricht ansonsten {{jsxref("Map.prototype.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man durch ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) mithilfe des von `entries()` zurückgegebenen Iterators iteriert.

Gegeben ist eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist. Der Code ruft [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Dann wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um mit dem von `entries()` zurückgegebenen Iterator durch die Einträge zu iterieren.
Die Eigenschaften der Statistikobjekte mit dem `type` `outbound-rtp` werden in die Konsole protokolliert (andere Objekte werden verworfen).

```js
const stats = await myPeerConnection.getStats();

for (const stat of stats.entries()) {
  if (stat.type !== "outbound-rtp") continue;
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
