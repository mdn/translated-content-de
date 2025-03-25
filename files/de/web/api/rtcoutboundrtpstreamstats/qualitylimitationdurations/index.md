---
title: "RTCOutboundRtpStreamStats: qualityLimitationDurations-Eigenschaft"
short-title: qualityLimitationDurations
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`qualityLimitationDurations`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist eine Karte der Gründe, warum die Qualität eines Medienstroms während der Kodierung durch einen Codec reduziert wurde, sowie der Zeit, in der die Qualität aus jedem Grund reduziert wurde.

Diese Qualitätsreduzierung kann Änderungen wie eine reduzierte Bildrate oder Auflösung oder eine Erhöhung des Kompressionsfaktors umfassen. Die Informationen können verwendet werden, um Durchsatzprobleme zu diagnostizieren und die Leistung zu optimieren.

> [!NOTE]
> Diese Eigenschaft existiert nur für Videomedien.

## Wert

Eine {{jsxref("Map")}} von Qualitätsbegrenzungsgründen zu einer Zahl, die die Zeit in Sekunden darstellt, während der der Stream aus diesem Grund qualitätsbegrenzt war.

Die zulässigen Werte für Qualitätsbegrenzungsgründe sind die Zeichenfolgen:

- `none`
  - : Die Qualität ist nicht begrenzt.
- `cpu`
  - : Die Qualität ist hauptsächlich aufgrund der CPU-Auslastung begrenzt.
- `bandwidth`
  - : Die Qualität ist hauptsächlich aufgrund von Überlastungsindikatoren während der Bandbreitenschätzung begrenzt, wie z.B. Interarrivalzeit und Round-Trip-Zeit.
- `other`
  - : Die Qualität ist hauptsächlich aus einem anderen Grund als den oben genannten begrenzt.

## Beispiele

### Gesamte Zeit ermitteln, in der der Stream qualitätsbegrenzt war

Die Summe aller Einträge außer `qualityLimitationDurations["none"]` ergibt die gesamte Zeit, die der Stream begrenzt wurde.

```js
// Get the outbound RTP stream stats
pc.getStats().then((stats) => {
  stats.forEach((report) => {
    if (report.type === "outbound-rtp") {
      const qualityLimitations = report.qualityLimitationDurations;
      if (qualityLimitations) {
        let totalTimeLimited = 0;

        console.log("Quality Limitations:");
        qualityLimitations.forEach((duration, reason) => {
          console.log(`- ${reason}: ${duration} seconds`);
          if (reason !== "none") {
            totalTimeLimited += duration;
          }
        });
        console.log(`Total time limited: ${totalTimeLimited}`);
      }
    }
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
