---
title: "RTCRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRtpStreamStats/ssrc
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs liefert die Synchronisationsquelle (SSRC), eine Ganzzahl, die die Quelle der {{Glossary("RTP", "RTP")}}-Pakete eindeutig identifiziert, deren Statistiken von dem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) abgedeckt werden, das dieses `RTCRtpStreamStats`-Wörterbuch einschließt.

## Wert

Die Synchronisationsquelle (SSRC) ist eine 32-Bit-Ganzzahl, die die Quelle der RTP-Pakete eindeutig identifiziert, deren Statistiken von dem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt abgedeckt werden, dessen Bestandteil dieses `RTCRtpStreamStats`-Objekt ist.

Die Art und Weise, wie diese Werte generiert werden, wird nicht durch die Spezifikation vorgegeben, obwohl sie Empfehlungen gibt. Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` treffen, außer dass zwei Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen. Siehe {{RFC("3550", "", "8")}} für weitere Informationen über `ssrc`.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` unter Verwendung von MD5 generiert. Obwohl das genau nicht Teil des Standards ist, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden kann; andere könnten andere Methoden verwenden, wie z.B. Zufallszahlengeneratoren. _Verlassen Sie sich nicht darauf_, dass diese Werte etwas anderes bedeuten als „diese Objekte sind mit derselben Quelle verbunden.“

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
