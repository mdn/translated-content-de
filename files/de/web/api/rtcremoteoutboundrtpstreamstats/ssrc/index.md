---
title: "RTCRemoteOutboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRemoteOutboundRtpStreamStats/ssrc
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs enthält einen positiven Ganzzahlwert, der die Synchronisationsquelle (SSRC) dieses Stroms von [RTP](/de/docs/Glossary/RTP)-Paketen identifiziert.

Eine Quelle könnte etwas wie ein Mikrofon oder eine Mixeranwendung sein, die mehrere Quellen kombiniert.
Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
Beachten Sie, dass zwei Streams mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.

## Wert

Ein positiver 32-Bit-Ganzzahlwert, der die SSRC der RTP-Pakete eindeutig identifiziert, deren Statistiken durch dieses [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Objekt abgedeckt sind.

Die Art und Weise, wie SSRC-Werte generiert werden, ist nicht durch die Spezifikation vorgeschrieben, auch wenn sie Empfehlungen ausspricht.
Sie sollten keine Annahmen auf der Grundlage des `ssrc`-Werts machen, außer dass alle Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.
Siehe {{RFC("3550", "", "8")}} für zusätzliche Informationen über `ssrc`.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` unter Verwendung von MD5 generiert.
> Obwohl nicht genau Teil des Standards, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden kann; andere können andere Methoden verwenden, wie z.B. Zufallszahlengeneratoren.
> _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle verbunden".

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
