---
title: "RTCIceCandidateStats: deleted-Eigenschaft"
short-title: deleted
slug: Web/API/RTCIceCandidateStats/deleted
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`deleted`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt an, ob der Kandidat gelöscht oder freigegeben wurde.

## Wert

Ein Boolescher Wert, der angibt, ob der Kandidat gelöscht oder freigegeben wurde. Wenn dieser Wert `true` ist, wird der durch das [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekt beschriebene Kandidat nicht mehr in Betracht gezogen. Die genaue Bedeutung variiert je nach Typ des Kandidaten:

- Lokaler Kandidat
  - : Ein Wert von `true` bedeutet, dass der Kandidat gelöscht wurde, wie in {{RFC(5245, "", "8.3")}} beschrieben.
- Host-Kandidat
  - : Ein Wert von `true` zeigt an, dass die Netzwerkressourcen des Kandidaten freigegeben wurden. Dies bedeutet im Allgemeinen, dass alle zugehörigen Socket(s) geschlossen und freigegeben wurden.
- Remote (TURN)-Kandidat
  - : Ein Wert von `true` bedeutet, dass die {{Glossary("TURN", "TURN")}}-Zuordnung des Kandidaten nicht mehr aktiv ist.

Das Gesamtergebnis ist dasselbe; der Kandidat wird nicht mehr in Betracht gezogen, wenn dieser Wert `true` ist.

## Beispiele

In diesem Beispiel wird [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwendet, um eine Funktion einzurichten, die periodisch ausgeführt wird, um die neuesten Statistiken für Kandidaten anzuzeigen. Nur Kandidaten, die nicht gelöscht wurden, werden in die Ausgabe aufgenommen.

```js
setInterval(() => {
  myPeerConnection.getStats(null).then((stats) => {
    let statsOutput = "";

    stats.forEach((report) => {
      if (
        (stats.type === "local-candidate" ||
          stats.type === "remote.candidate") &&
        !stats.deleted
      ) {
        statsOutput +=
          `<h2>Report: ${report.type}</h3>\n<strong>ID:</strong> ${report.id}<br>\n` +
          `<strong>Timestamp:</strong> ${report.timestamp}<br>\n`;

        // Now the statistics for this report; we intentionally drop the ones we
        // sorted to the top above
        Object.keys(report).forEach((statName) => {
          if (
            statName !== "id" &&
            statName !== "timestamp" &&
            statName !== "type"
          ) {
            statsOutput += `<strong>${statName}:</strong> ${report[statName]}<br>\n`;
          }
        });
      }
    });

    document.querySelector(".stats-box").innerHTML = statsOutput;
  });
}, 1000);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
