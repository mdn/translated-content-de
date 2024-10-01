---
title: "RTCRemoteInboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRemoteInboundRtpStreamStats/ssrc
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs enthält einen positiven ganzzahligen Wert, der die Synchronisationsquelle (SSRC) dieses Streams von {{Glossary("RTP", "RTP")}}-Paketen identifiziert.

Eine Quelle könnte beispielsweise ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
Alle Pakete derselben Quelle teilen die gleiche Zeitquelle und den gleichen Sequenzbereich und können daher relativ zueinander geordnet werden.
Beachten Sie, dass zwei Streams mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.

## Wert

Ein positiver 32-Bit-Integer, der die SSRC der RTP-Pakete eindeutig identifiziert, deren Statistik durch dieses [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Objekt abgedeckt ist.

Die Art und Weise, wie SSRC-Werte generiert werden, wird von der Spezifikation nicht vorgeschrieben, auch wenn sie Empfehlungen ausspricht.
Sie sollten keine Annahmen auf der Grundlage des `ssrc`-Wertes treffen, außer dass alle Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.
Weitere Informationen zu `ssrc` finden Sie in {{RFC("3550", "", "8")}}.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` mittels MD5 erzeugt.
> Auch wenn dies nicht genau Teil des Standards ist, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden kann; andere könnten andere Methoden wie Zufallszahlengeneratoren verwenden.
> _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als „diese Objekte sind mit derselben Quelle verbunden“.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
