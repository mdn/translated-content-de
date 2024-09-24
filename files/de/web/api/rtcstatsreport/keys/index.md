---
title: "RTCStatsReport: keys()-Methode"
short-title: keys()
slug: Web/API/RTCStatsReport/keys
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{APIRef("WebRTC")}}

Die **`keys()`**-Methode der Schnittstelle {{domxref("RTCStatsReport")}} gibt ein neues _[Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das verwendet werden kann, um durch die Schlüssel jedes Elements im `RTCStatsReport`-Objekt in Einfügereihenfolge zu iterieren.

Die Schlüssel im `RTCStatsReport` sind eindeutige string `id`-Werte, die die überwachten Statistikobjekte repräsentieren, aus denen die Statistiken abgeleitet werden.

Die Methode funktioniert ansonsten genauso wie {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

Dieses Beispiel zeigt, wie man mit dem von `keys()` zurückgegebenen Iterator durch ein {{domxref("RTCStatsReport")}} iterieren kann.

Gegeben ist eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist. Der Code ruft [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Anschließend wird eine [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet, um mit dem Iterator, der von `keys()` zurückgegeben wird, durch die IDs zu iterieren.
Jede ID wird verwendet, um das entsprechende Statistik-Dictionary abzurufen.
Die Eigenschaften von Statistikobjekten mit dem `type` von `outbound-rtp` werden in die Konsole protokolliert (andere Objekte werden verworfen).

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
Es wäre einfacher, mit {{domxref("RTCStatsReport.entries()","entries()")}} oder {{domxref("RTCStatsReport.values()","values()")}} zu iterieren und die ID nicht auf einen Wert abbilden zu müssen.
Sie können sogar direkt über das {{domxref("RTCStatsReport")}} iterieren, da es die Methode [`[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator) hat!

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.keys()")}}
- {{domxref("RTCStatsReport.values()")}}
- {{domxref("RTCStatsReport.entries()")}}
