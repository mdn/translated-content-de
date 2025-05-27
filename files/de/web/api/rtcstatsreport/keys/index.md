---
title: "RTCStatsReport: keys() Methode"
short-title: keys()
slug: Web/API/RTCStatsReport/keys
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Die **`keys()`** Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Schnittstelle gibt ein neues _[Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das verwendet werden kann, um in der Einfügereihenfolge durch die Schlüssel für jedes Element im `RTCStatsReport` Objekt zu iterieren.

Die Schlüssel im `RTCStatsReport` sind eindeutige Zeichenfolgen-`id`-Werte, die die überwachten Statistikobjekte darstellen, aus denen die Statistiken abgeleitet sind.

Die Methode ist ansonsten die gleiche wie {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Rückgabewert

Ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man mit dem von `keys()` zurückgegebenen Iterator durch ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert.

Angenommen, eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Er verwendet dann eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife mit dem von `keys()` zurückgegebenen Iterator, um durch die IDs zu iterieren.
Jede ID wird verwendet, um das entsprechende Statistik-Wörterbuch zu erhalten.
Die Eigenschaften von Statistikobjekten mit dem `type` `outbound-rtp` werden in die Konsole geloggt (andere Objekte werden verworfen).

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

Beachten Sie, dass dieses Beispiel etwas konstruiert ist.
Sie könnten leichter mit [`entries()`](/de/docs/Web/API/RTCStatsReport/entries) oder [`values()`](/de/docs/Web/API/RTCStatsReport/values) iterieren, ohne die ID einem Wert zuordnen zu müssen.
Sie können sogar direkt durch das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) selbst iterieren, da es die [`[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator) Methode besitzt!

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.keys()")}}
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
