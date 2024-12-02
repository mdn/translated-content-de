---
title: "RTCInboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCInboundRtpStreamStats/ssrc
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs enthält einen positiven Ganzzahlwert, der die Synchronisationsquelle (SSRC) dieses Stroms von {{Glossary("RTP", "RTP")}}-Paketen identifiziert.

Eine Quelle könnte zum Beispiel ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert. Alle Pakete von derselben Quelle teilen sich dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden. Beachten Sie, dass zwei Streams mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.

## Wert

Ein positiver 32-Bit-Ganzzahlwert, der die SSRC der RTP-Pakete eindeutig identifiziert, deren Statistiken von diesem [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt abgedeckt werden.

Die Art und Weise, wie SSRC-Werte generiert werden, wird nicht durch die Spezifikation vorgeschrieben, obwohl sie Empfehlungen gibt. Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` machen, außer dass alle Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen. Weitere Informationen zu `ssrc` finden Sie in {{RFC("3550", "", "8")}}.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` unter Verwendung von MD5 generiert. Obwohl dies nicht genau Teil des Standards ist, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden kann; andere könnten andere Methoden wie Zufallszahlengeneratoren verwenden.
> _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle assoziiert."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
