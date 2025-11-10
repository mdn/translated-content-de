---
title: "RTCStatsReport: keys() Methode"
short-title: keys()
slug: Web/API/RTCStatsReport/keys
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("WebRTC")}}

Die **`keys()`** Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Schnittstelle gibt ein neues _[iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ Objekt zurück, das verwendet werden kann, um durch die Schlüssel für jedes Element im `RTCStatsReport` Objekt in Einfügereihenfolge zu iterieren.

Die Schlüssel im `RTCStatsReport` sind eindeutige Zeichenfolgen-`id`-Werte, die die überwachten Statistikobjekte repräsentieren, aus denen die Statistiken abgeleitet werden.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man durch ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) unter Verwendung des von `keys()` zurückgegebenen Iterators iteriert.

Angenommen, eine Variable `myPeerConnection` ist eine Instanz von `RTCPeerConnection`, der Code ruft [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten. Dann wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife verwendet, mit dem von `keys()` zurückgegebenen Iterator, um durch die IDs zu iterieren. Jede ID wird verwendet, um das entsprechende Statistik-Dictionary abzurufen. Die Eigenschaften von Statistikobjekten mit dem `type` `outbound-rtp` werden in der Konsole protokolliert (andere Objekte werden verworfen).

```js
const stats = await myPeerConnection.getStats();

for (const id of stats.keys()) {
  // Get dictionary associated with key (id)
  const stat = stats.get(id);
  if (stat.type !== "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
  });
}
```

Beachten Sie, dass dieses Beispiel etwas konstruiert ist. Sie könnten einfacher mit [`entries()`](/de/docs/Web/API/RTCStatsReport/entries) oder [`values()`](/de/docs/Web/API/RTCStatsReport/values) iterieren und müssten die ID nicht einem Wert zuordnen. Sie können sogar das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) selbst iterieren, da es die [`[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator) Methode hat!

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.keys()")}}
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
