---
title: "RTCRemoteInboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRemoteInboundRtpStreamStats/ssrc
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}} Wörterbuchs enthält einen positiven Ganzzahlwert, der die Synchronisationsquelle (SSRC) dieses Stroms von {{Glossary("RTP")}}-Paketen identifiziert.

Eine Quelle könnte beispielsweise ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert. Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden. Beachten Sie, dass zwei Streams mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.

## Wert

Ein positiver 32-Bit-Ganzzahlwert, der das SSRC der RTP-Pakete eindeutig identifiziert, deren Statistiken von diesem {{domxref("RTCRemoteInboundRtpStreamStats")}} Objekt erfasst werden.

Die Art und Weise, wie SSRC-Werte generiert werden, wird von der Spezifikation nicht vorgeschrieben, obwohl sie Empfehlungen gibt. Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` treffen, außer dass zwei Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen. Weitere Informationen zu `ssrc` finden Sie in {{RFC("3550", "", "8")}}.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` mittels MD5 generiert. Auch wenn dies nicht genau Teil des Standards ist, handelt es sich um einen guten Mechanismus, der von einigen Browsern verwendet werden kann; andere können andere Methoden wie Zufallszahlengeneratoren nutzen. _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle assoziiert."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRtpReceiver.getSynchronizationSources()")}}
- {{domxref("RTCEncodedAudioFrame.getMetadata()")}}
