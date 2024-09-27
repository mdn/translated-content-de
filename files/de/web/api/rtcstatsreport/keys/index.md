---
title: "RTCStatsReport: keys()-Methode"
short-title: keys()
slug: Web/API/RTCStatsReport/keys
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{APIRef("WebRTC")}}

Die **`keys()`**-Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Schnittstelle gibt ein neues _[Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_-Objekt zurück, das verwendet werden kann, um die Schlüssel für jedes Element im `RTCStatsReport`-Objekt in der Reihenfolge ihrer Einfügung zu durchlaufen.

Die Schlüssel im `RTCStatsReport` sind einzigartige Zeichenkettenwerte `id`, die die überwachten Statistikobjekte darstellen, aus denen die Statistiken abgeleitet werden.

Die Methode entspricht ansonsten der Methode {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man mit dem von `keys()` zurückgegebenen Iterator durch ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert.

Angenommen, es gibt eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Anschließend wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um mit dem von `keys()` zurückgegebenen Iterator durch die IDs zu iterieren.
Jede ID wird verwendet, um das entsprechende Statistikdikt zu erhalten.
Die Eigenschaften von Statistikobjekten mit dem `type` von `outbound-rtp` werden in die Konsole ausgegeben (andere Objekte werden verworfen).

```js
const stats = await myPeerConnection.getStats();

for (const id of stats.keys()) {
  // Get dictionary associated with key (id)
  const stat = stats.get(id);
  if (stat.type != "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
  });
}
```

Beachten Sie, dass dieses Beispiel etwas konstruiert ist.
Sie könnten leichter mit [`entries()`](/de/docs/Web/API/RTCStatsReport/entries) oder [`values()`](/de/docs/Web/API/RTCStatsReport/values) iterieren und müssten nicht die ID zu einem Wert zuordnen.
Sie können sogar das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) selbst iterieren, da es die Methode [`[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator) hat!

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.keys()")}}
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
