---
title: "RTCRtpReceiver: jitterBufferTarget-Eigenschaft"
short-title: jitterBufferTarget
slug: Web/API/RTCRtpReceiver/jitterBufferTarget
l10n:
  sourceCommit: a9ed68046545018031dcf77330d901e2cf7054e9
---

{{APIRef("WebRTC API")}}

Die **`jitterBufferTarget`**-Eigenschaft des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Interfaces ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die vom Anwendungsprogramm bevorzugte Dauer in Millisekunden angibt, für die der Jitter-Puffer Medien halten sollte, bevor sie abgespielt werden.

Die Anwendung kann ihn verwenden, um das Abwägen zwischen Wiedergabeverzögerung und dem Risiko des Ausgehens von Audio- oder Videoframes aufgrund von Netzwerkrücklaufeinflüssen zu beeinflussen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die aktuelle Zielhaltezeit des Jitter-Puffers in Millisekunden angibt.

Der Wert kann auf einen positiven Wert von nicht mehr als 4000 Millisekunden gesetzt werden.

## Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ziel auf einen negativen Wert oder einen Wert größer als 4000 Millisekunden gesetzt wird.

## Beschreibung

Der Wert des Attributs beeinflusst die Menge an Puffern, die vom Benutzeragenten durchgeführt werden, was sich wiederum auf Wiedergabeversuche und die Wiederherstellung von Paketverlusten auswirkt.

Beachten Sie, dass das Attribut den Zielwert des Jitter-Puffers des Benutzeragenten „beeinflusst“, ihn jedoch nicht direkt setzt.
Das tatsächliche Jitter-Puffer-Ziel des Benutzeragenten variiert zwischen maximalen und minimal erlaubten Werten, die einen Zielbereich widerspiegeln, den der Benutzeragent basierend auf Netzwerkbedingungen und Speicherbeschränkungen bereitstellen kann, und kann sich jederzeit ändern.
Der Wert, der von `jitterBufferTarget` zurückgegeben wird, wird durch das tatsächliche Ziel des Benutzeragenten nicht beeinflusst.

Die durchschnittliche Jitter-Puffer-Verzögerung kann berechnet werden, indem die [`RTCInboundRtpStreamStats.jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats) durch die [`RTCInboundRtpStreamStats.jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats) geteilt wird.
Um die Auswirkungen der Änderung des Jitter-Puffer-Ziels zu beobachten, können Sie die Änderung des Wertes dieses Durchschnitts im Laufe der Zeit verfolgen.

Wenn Audio- und Videospuren des `RTCRtpReceiver` synchronisiert sind, sollte der größere der beiden `jitterBufferTarget`-Werte für beide Empfänger verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
