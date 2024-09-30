---
title: "RTCIceCandidateStats: deleted Eigenschaft"
short-title: deleted
slug: Web/API/RTCIceCandidateStats/deleted
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs
**`deleted`** Eigenschaft gibt an, ob der Kandidat gelöscht oder freigegeben wurde.

## Wert

Ein Boolean-Wert, der angibt, ob der Kandidat gelöscht oder freigegeben wurde.
Wenn dieser Wert `true` ist, wird der vom
[`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekt beschriebene Kandidat nicht mehr in Betracht gezogen. Die genaue
Bedeutung variiert je nach Art des Kandidaten:

- Lokaler Kandidat
  - : Ein Wert von `true` bedeutet, dass der Kandidat gelöscht wurde, wie in
    {{RFC(5245, "", "8.3")}} beschrieben.
- Host-Kandidat
  - : Ein Wert von `true` gibt an, dass die Netzwerkressourcen des Kandidaten
    freigegeben wurden. Dies bedeutet im Allgemeinen, dass alle zugehörigen Sockets geschlossen und
    freigegeben wurden.
- Remote (TURN) Kandidat
  - : Ein Wert von `true` bedeutet, dass die [TURN](/de/docs/Glossary/TURN)-Zuweisung des Kandidaten
    nicht mehr aktiv ist.

Das Endergebnis ist dasselbe; der Kandidat wird nicht mehr in Betracht gezogen, wenn dieser
Wert `true` ist.

## Beispiele

In diesem Beispiel wird [`setInterval()`](/de/docs/Web/API/SetInterval)
verwendet, um eine Funktion einzurichten, die regelmäßig die neuesten Statistiken für
Kandidaten anzeigt. Nur Kandidaten, die nicht gelöscht wurden, werden in der Ausgabe einbezogen.

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
