---
title: "RTCRemoteOutboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRemoteOutboundRtpStreamStats/ssrc
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs enthält einen positiven Ganzzahlwert, der die Synchronisationsquelle (SSRC) dieses Stroms von [RTP](/de/docs/Glossary/RTP)-Paketen identifiziert.

Eine Quelle könnte beispielsweise ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
Alle Pakete von derselben Quelle verwenden dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
Beachten Sie, dass zwei Ströme mit demselben `ssrc`-Wert sich auf dieselbe Quelle beziehen.

## Wert

Ein positiver 32-Bit-Ganzzahlwert, der das SSRC der RTP-Pakete eindeutig identifiziert, deren Statistiken von diesem [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt abgedeckt werden.

Die Art und Weise, wie SSRC-Werte generiert werden, wird nicht durch die Spezifikation vorgeschrieben, obwohl sie Empfehlungen gibt. Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` machen, außer dass zwei Objekte mit demselben `ssrc`-Wert sich auf dieselbe Quelle beziehen. Weitere Informationen zu `ssrc` finden Sie in {{RFC("3550", "", "8")}}.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` mit MD5 generiert.
> Obwohl es nicht genau Teil des Standards ist, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden kann; andere können andere Methoden verwenden, wie zum Beispiel Zufallszahlengeneratoren.
> _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle verbunden."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
