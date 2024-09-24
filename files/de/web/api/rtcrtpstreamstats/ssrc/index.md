---
title: "RTCRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRtpStreamStats/ssrc
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des {{domxref("RTCRtpStreamStats")}} Dictionary liefert die Synchronisationsquelle (SSRC), eine Ganzzahl, die die Quelle der {{Glossary("RTP")}}-Pakete eindeutig identifiziert, deren Statistiken von dem {{domxref("RTCStatsReport")}} abgedeckt werden, das dieses `RTCRtpStreamStats` Dictionary umfasst.

## Wert

Die Synchronisationsquelle (SSRC) ist eine 32-Bit-Ganzzahl, die die Quelle der RTP-Pakete eindeutig identifiziert, deren Statistiken von dem {{domxref("RTCStatsReport")}}-Objekt abgedeckt werden, von dem dieses `RTCRtpStreamStats`-Objekt ein Bestandteil ist.

Die Art und Weise, wie diese Werte generiert werden, ist nicht durch die Spezifikation vorgegeben, obwohl sie Empfehlungen gibt. Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` treffen, außer dass Objekte mit demselben `ssrc`-Wert sich auf dieselbe Quelle beziehen. Siehe {{RFC("3550", "", "8")}} für zusätzliche Informationen über `ssrc`.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` unter Verwendung von MD5 generiert. Obwohl dies nicht exakt Teil des Standards ist, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden kann; andere können andere Methoden verwenden, wie z.B. Zufallsgeneratoren. _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle verbunden".

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
