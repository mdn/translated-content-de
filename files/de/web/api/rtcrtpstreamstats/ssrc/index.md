---
title: "RTCRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRtpStreamStats/ssrc
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs liefert die Synchronisationsquelle (SSRC), eine Ganzzahl, die die Quelle der [RTP](/de/docs/Glossary/RTP)-Pakete eindeutig identifiziert, deren Statistiken von dem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) abgedeckt werden, das dieses `RTCRtpStreamStats`-Wörterbuch enthält.

## Wert

Die Synchronisationsquelle (SSRC) ist eine 32-Bit-Ganzzahl, die die Quelle der RTP-Pakete eindeutig identifiziert, deren Statistiken von dem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt abgedeckt werden, von dem dieses `RTCRtpStreamStats`-Objekt ein Bestandteil ist.

Die Art und Weise, wie diese Werte generiert werden, ist von der Spezifikation nicht vorgeschrieben, obwohl sie Empfehlungen gibt. Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` machen, außer dass zwei Objekte mit demselben `ssrc`-Wert sich auf dieselbe Quelle beziehen. Siehe {{RFC("3550", "", "8")}} für zusätzliche Informationen über `ssrc`.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` mit MD5 generiert. Obwohl nicht genau Teil des Standards, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden könnte; andere könnten andere Methoden verwenden, wie z.B. Zufallszahlengeneratoren. _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle verbunden."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
