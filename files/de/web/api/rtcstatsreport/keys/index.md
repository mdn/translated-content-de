---
title: "RTCStatsReport: Methode keys()"
short-title: keys()
slug: Web/API/RTCStatsReport/keys
l10n:
  sourceCommit: aa3f3f5d4d00cba08b88bddcfa94a84e2a4d976d
---

{{APIRef("WebRTC")}}

Die Methode **`keys()`** der Schnittstelle [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) gibt ein neues _[Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück. Damit können Sie die Schlüssel jedes Elements im `RTCStatsReport`-Objekt in der Reihenfolge durchlaufen, in der sie eingefügt wurden.

Die Schlüssel im `RTCStatsReport` sind eindeutige `id`-Werte vom Typ String. Sie stehen für die überwachten Statistikobjekte, aus denen die Statistiken abgeleitet werden.

Ansonsten entspricht die Methode {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie Sie einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) mit dem von `keys()` zurückgegebenen Iterator durchlaufen.

Für die Variable `myPeerConnection`, eine Instanz von `RTCPeerConnection`, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) auf und wartet mit `await` auf den Statistikbericht.
Anschließend durchläuft er mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und dem von `keys()` zurückgegebenen Iterator die IDs.
Mit jeder ID wird das zugehörige Statistik-Dictionary abgerufen.
Die Eigenschaften von Statistikobjekten mit dem `type` `outbound-rtp` werden in der Konsole ausgegeben; andere Objekte werden verworfen.

```js
const stats = await myPeerConnection.getStats();

for (const id of stats.keys()) {
  // Get dictionary associated with key (id)
  const stat = stats.get(id);
  if (stat.type !== "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${stat[statName]}`);
  });
}
```

Dieses Beispiel ist etwas konstruiert.
Mit [`entries()`](/de/docs/Web/API/RTCStatsReport/entries) oder [`values()`](/de/docs/Web/API/RTCStatsReport/values) könnten Sie die Werte einfacher durchlaufen, ohne die ID einem Wert zuordnen zu müssen.
Sie können sogar den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) selbst durchlaufen, da er über die Methode [`[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator) verfügt!

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.keys()")}}
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
