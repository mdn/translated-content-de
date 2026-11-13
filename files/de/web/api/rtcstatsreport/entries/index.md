---
title: "RTCStatsReport: entries()-Methode"
short-title: entries()
slug: Web/API/RTCStatsReport/entries
l10n:
  sourceCommit: aa3f3f5d4d00cba08b88bddcfa94a84e2a4d976d
---

{{APIRef("WebRTC")}}

Die **`entries()`**-Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück. Damit können Sie die Schlüssel-Wert-Paare aller Elemente im `RTCStatsReport`-Objekt in der Reihenfolge durchlaufen, in der sie eingefügt wurden.

Die Schlüssel sind eindeutige `id`-Werte überwachter Statistikobjekte, aus denen die Statistiken abgeleitet werden. Die zugehörigen Werte sind [Statistik-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Ansonsten entspricht die Methode {{jsxref("Map.prototype.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie Sie einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) mit dem von `entries()` zurückgegebenen Iterator durchlaufen.

Der Code setzt voraus, dass die Variable `myPeerConnection` eine Instanz von `RTCPeerConnection` ist. Er ruft [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) auf und wartet mit `await` auf den Statistikbericht.
Anschließend durchläuft er die Einträge mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und dem von `entries()` zurückgegebenen Iterator.
Die Eigenschaften der Statistikobjekte mit dem `type` `outbound-rtp` werden in der Konsole ausgegeben (andere Objekte werden verworfen).

```js
const stats = await myPeerConnection.getStats();

for (const [id, stat] of stats.entries()) {
  if (stat.type !== "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${stat[statName]}`);
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
