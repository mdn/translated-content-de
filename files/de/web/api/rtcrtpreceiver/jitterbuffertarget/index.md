---
title: "RTCRtpReceiver: jitterBufferTarget-Eigenschaft"
short-title: jitterBufferTarget
slug: Web/API/RTCRtpReceiver/jitterBufferTarget
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC API")}}

Die **`jitterBufferTarget`**-Eigenschaft des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Interfaces ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die bevorzugte Dauer in Millisekunden angibt, für die der {{Glossary("jitter", "Jitter-Puffer")}} Medien vor der Wiedergabe speichern sollte.

Die Anwendung kann diesen Wert nutzen, um das Gleichgewicht zwischen Wiedergabeverzögerung und dem Risiko eines Mangels an Audio- oder Videoframes aufgrund von Netzwerk-Jitter zu beeinflussen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die aktuelle Zielhaltezeit des Jitter-Puffers in Millisekunden angibt.

Der Wert kann auf einen positiven Wert von maximal 4000 Millisekunden gesetzt werden.

## Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ziel auf einen negativen Wert oder einen Wert größer als 4000 Millisekunden gesetzt wird.

## Beschreibung

Der Wert des Attributs beeinflusst die Menge der Pufferung durch den Benutzeragenten, was sich wiederum auf die Wiederholungen und die Wiederherstellung von Paketverlusten auswirkt.

Beachten Sie, dass das Attribut den Zielwert des Jitter-Puffers des Benutzeragenten "beeinflusst", ihn aber nicht direkt festlegt. Der tatsächliche Zielwert des Benutzeragenten für den Jitter-Puffer variiert zwischen maximalen und minimalen erlaubten Werten, die eine Zielspanne widerspiegeln, die der Benutzeragent basierend auf den Netzwerkbedingungen und den Speicherbeschränkungen bereitstellen kann, und kann sich jederzeit ändern.
Der von `jitterBufferTarget` zurückgegebene Wert wird nicht durch das tatsächliche Ziel des Benutzeragenten beeinflusst.

Die durchschnittliche Jitter-Puffer-Verzögerung kann berechnet werden, indem [`RTCInboundRtpStreamStats.jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay) durch [`RTCInboundRtpStreamStats.jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount) geteilt wird. Um die Auswirkungen der Änderung des Jitter-Puffer-Ziels zu beobachten, können Sie die Änderung des Wertes dieses Durchschnitts im Laufe der Zeit verfolgen. Sie können auch mit dem [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay) (oder dessen Durchschnitt) vergleichen, um die intrinsischen Netzwerkfaktoren, die die Verzögerung beeinflussen, herauszurechnen.

Wenn `RTCRtpReceiver` Audio- und Videospuren synchronisiert sind, sollte der größere der beiden `jitterBufferTarget`-Werte beider Empfänger verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
