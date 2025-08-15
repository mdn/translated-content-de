---
title: "RTCInboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCInboundRtpStreamStats/ssrc
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs identifiziert die Synchronisationsquelle (SSRC) dieses Stroms von {{Glossary("RTP", "RTP")}}-Paketen.

## Wert

Eine positive ganze Zahl.

## Beschreibung

Die **`ssrc`**-Eigenschaft identifiziert eindeutig die SSRC der RTP-Pakete, deren Statistiken durch dieses [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt abgedeckt sind.

Eine Synchronisationsquelle könnte beispielsweise ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert. Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum, und können daher relativ zueinander geordnet werden. Beachten Sie, dass zwei Ströme mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.

Die Art und Weise, wie SSRC-Werte generiert werden, wird durch die Spezifikation nicht vorgeschrieben, obwohl es Empfehlungen gibt. Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` machen, außer dass zwei Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen. Siehe {{RFC("3550", "", "8")}} für zusätzliche Informationen über `ssrc`.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` unter Verwendung von MD5 generiert. Obwohl es nicht genau Teil des Standards ist, ist es ein gutes Verfahren, das von einigen Browsern genutzt werden kann; andere können andere Methoden verwenden, wie z.B. Zufallszahlengeneratoren. _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle verbunden."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
