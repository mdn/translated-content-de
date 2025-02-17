---
title: "RTCOutboundRtpStreamStats: qualityLimitationDurations-Eigenschaft"
short-title: qualityLimitationDurations
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations
l10n:
  sourceCommit: 7f29fefe27ee8362a8b5f36255f942a2358cc8f8
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`qualityLimitationDurations`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist eine Map mit den Gründen, aus denen die Qualität eines Medienstreams durch einen Codec während der Kodierung reduziert wurde, sowie der Zeitspanne, während der die Qualität aus jedem dieser Gründe reduziert wurde.

Diese Qualitätsreduzierung kann Änderungen wie eine reduzierte Bildrate oder Auflösung sowie eine Erhöhung des Kompressionsfaktors umfassen. Die Informationen können verwendet werden, um Durchsatzprobleme zu diagnostizieren und die Leistung zu optimieren.

> [!NOTE]
> Diese Eigenschaft existiert nur für Videomedien.

## Wert

Eine {{jsxref("Map")}} von Gründen der Qualitätsbegrenzung zu einer Zahl, welche die Zeit in Sekunden angibt, während der der Stream aus diesem Grund in der Qualität begrenzt wurde.

Die zulässigen Werte für die Gründe der Qualitätsbegrenzung sind die folgenden Strings:

- `none`
  - : Die Qualität ist nicht begrenzt.
- `cpu`
  - : Die Qualität ist hauptsächlich durch CPU-Belastung begrenzt.
- `bandwidth`
  - : Die Qualität ist hauptsächlich aufgrund von Überlastungsindikatoren bei der Bandbreitenschätzung begrenzt, wie z. B. Ankunftszeitabstand und Round-Trip-Time.
- `other`
  - : Die Qualität ist hauptsächlich aus einem anderen als den oben genannten Gründen begrenzt.

## Beispiele

### Die gesamte Zeit ermitteln, in der der Stream in der Qualität begrenzt wurde

Die Summe aller Einträge außer `qualityLimitationDurations["none"]` ergibt die Gesamtzeit, während der der Stream in der Qualität begrenzt wurde.

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

## Siehe auch

- [`RTCOutboundRtpStreamStats.qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations)
