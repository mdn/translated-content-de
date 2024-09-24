---
title: "RTCStatsReport: forEach()-Methode"
short-title: forEach()
slug: Web/API/RTCStatsReport/forEach
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}

Die **`forEach()`**-Methode der {{domxref("RTCStatsReport")}}-Schnittstelle führt eine bereitgestellte Funktion einmal für jedes Schlüssel/Wert-Paar im `RTCStatsReport`-Objekt in der Reihenfolge der Einfügung aus.

Die Schlüssel sind eindeutige `id`-Werte für die überwachten Statistikobjekte, aus denen die Statistiken abgeleitet werden, und die zugehörigen Werte sind [Statistik-Wörterbuchobjekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`

  - : Eine Funktion, die für jeden Eintrag im Bericht ausgeführt wird.
    Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `report`
      - : Statistikbericht für jede Iteration.
        Dies kann einer der [Statistik-Wörterbuchtypen](/de/docs/Web/API/RTCStatsReport#the_statistic_types) sein.
    - `id`
      - : Eine eindeutige Zeichenfolge, die das überwachte Objekt identifiziert, von dem die Statistiken abgeleitet werden.
    - `map`
      - : Der Bericht, über den iteriert wird.

- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

{{jsxref("undefined")}}.

## Beispiele

Gegeben sei eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Er iteriert dann den Bericht mit `RTCStatsReport.forEach()` und filtert die Wörterbücher nur für diejenigen Berichte, die den `type` von `inbound-rtp` und `kind` von `video` haben.
Für passende Wörterbücher wird die Eigenschaft `framesPerSecond` des eingehenden Videos protokolliert.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Log the frame rate
    console.log(report.framesPerSecond);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.forEach()")}}
