---
title: "RTCStatsReport: forEach()-Methode"
short-title: forEach()
slug: Web/API/RTCStatsReport/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`forEach()`**-Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Schnittstelle führt eine bereitgestellte Funktion einmal für jedes Schlüssel/Wert-Paar im `RTCStatsReport`-Objekt in der Eingefügtenreihenfolge aus.

Die Schlüssel sind eindeutige `id`-Werte für die überwachten Statistikobjekte, aus denen die Statistiken abgeleitet werden, und die zugehörigen Werte sind [Statistik-Dictionary-Objekte](/de/docs/Web/API/RTCStatsReport#the_statistic_types).

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
        Dies kann jeder der [Statistik-Dictionary-Typen](/de/docs/Web/API/RTCStatsReport#the_statistic_types) sein.
    - `id`
      - : Ein eindeutiger String, der das überwachte Objekt identifiziert, aus dem die Statistiken abgeleitet werden.
    - `map`
      - : Der Bericht, der iteriert wird.

- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

{{jsxref("undefined")}}.

## Beispiele

Bei einer Variablen `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, ruft der Code [`getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) mit `await` auf, um auf den Statistikbericht zu warten.
Anschließend wird der Bericht mithilfe von `RTCStatsReport.forEach()` iteriert und die Dictionaries werden nur für die Berichte gefiltert, die den `type` von `inbound-rtp` und `kind` von `video` haben.
Für übereinstimmende Dictionaries wird die `framesPerSecond`-Eigenschaft des eingehenden Videos protokolliert.

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
