---
title: "RTCRemoteOutboundRtpStreamStats: ssrc-Eigenschaft"
short-title: ssrc
slug: Web/API/RTCRemoteOutboundRtpStreamStats/ssrc
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`ssrc`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}}-Wörterbuchs enthält einen positiven ganzzahligen Wert, der die Synchronisationsquelle (SSRC) dieses Streams von {{Glossary("RTP")}}-Paketen identifiziert.

Eine Quelle kann beispielsweise ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzbereich und können daher relativ zueinander angeordnet werden.
Es ist zu beachten, dass zwei Streams mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.

## Wert

Ein positiver 32-Bit-Ganzzahlwert, der die SSRC der RTP-Pakete eindeutig identifiziert, deren Statistiken durch dieses {{domxref("RTCRemoteOutboundRtpStreamStats")}}-Objekt abgedeckt werden.

Die Art und Weise, wie SSRC-Werte generiert werden, wird durch die Spezifikation nicht vorgeschrieben, obwohl sie Empfehlungen gibt.
Sie sollten keine Annahmen basierend auf dem Wert von `ssrc` treffen, außer dass zwei Objekte mit demselben `ssrc`-Wert auf dieselbe Quelle verweisen.
Siehe {{RFC("3550", "", "8")}} für weitere Informationen über `ssrc`.

> [!NOTE]
> Die Spezifikation enthält ein Beispiel, das Werte für `ssrc` mithilfe von MD5 generiert.
> Auch wenn dies nicht genau Teil des Standards ist, stellt es einen guten Mechanismus dar, der von einigen Browsern verwendet werden kann; andere können andere Methoden wie Zufallsgeneratoren verwenden.
> _Verlassen Sie sich nicht_ darauf, dass diese Werte etwas anderes bedeuten als "diese Objekte sind mit derselben Quelle verbunden."

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRtpReceiver.getSynchronizationSources()")}}
- {{domxref("RTCEncodedAudioFrame.getMetadata()")}}
