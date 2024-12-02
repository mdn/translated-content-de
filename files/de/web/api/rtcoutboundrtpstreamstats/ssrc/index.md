---
title: "RTCOutboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCOutboundRtpStreamStats/ssrc
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs enthält einen positiven ganzzahligen Wert, der die Synchronisationsquelle (SSRC) dieses Streams von {{Glossary("RTP", "RTP")}}-Paketen identifiziert.

Eine Quelle könnte beispielsweise ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
Alle Pakete von derselben Quelle teilen sich dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
Beachten Sie, dass zwei Streams mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.

## Wert

Ein positiver 32-Bit-Ganzzahlwert, der die SSRC der RTP-Pakete, deren Statistiken von diesem [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt abgedeckt werden, eindeutig identifiziert.

Die Art und Weise, wie SSRC-Werte generiert werden, wird von der Spezifikation nicht vorgeschrieben, obwohl sie Empfehlungen gibt.
Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` machen, außer dass zwei Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.
Siehe {{RFC("3550", "", "8")}} für zusätzliche Informationen über `ssrc`.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` mit MD5 generiert.
> Obwohl dies nicht genau Teil des Standards ist, ist es ein gutes Verfahren, das von einigen Browsern verwendet werden könnte; andere könnten andere Methoden wie Zufallszahlengeneratoren verwenden.
> _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle verbunden."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
