---
title: "RTCRemoteInboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRemoteInboundRtpStreamStats/ssrc
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs enthält einen positiven Integer-Wert, der die Synchronisationsquelle (SSRC) dieses Stroms von [RTP](/de/docs/Glossary/RTP)-Paketen identifiziert.

Eine Quelle könnte etwas wie ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
Alle Pakete derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
Beachten Sie, dass zwei Streams mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.

## Wert

Ein positiver 32-Bit-Integer, der die SSRC der RTP-Pakete, deren Statistiken von diesem [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt erfasst werden, eindeutig identifiziert.

Die Art und Weise, wie SSRC-Werte generiert werden, ist durch die Spezifikation nicht vorgeschrieben, obwohl sie Empfehlungen gibt.
Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` treffen, außer dass alle Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.
Weitere Informationen zu `ssrc` finden Sie in {{RFC("3550", "", "8")}}.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` unter Verwendung von MD5 generiert.
> Obwohl dies nicht genau dem Standard entspricht, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden könnte; andere könnten andere Methoden wie Zufallszahlengeneratoren verwenden.
> _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle verbunden."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
