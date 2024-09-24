---
title: Channel-Messaging-API
slug: Web/API/Channel_Messaging_API
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

Die **Channel-Messaging-API** ermöglicht es zwei separaten Skripten, die in unterschiedlichen Browsing-Kontexten laufen und an dasselbe Dokument angehängt sind (z. B. zwei IFrames oder das Hauptdokument und ein IFrame, zwei Dokumente über einen {{domxref("SharedWorker")}} oder zwei Worker), direkt zu kommunizieren. Sie können Nachrichten über bidirektionale Kanäle (oder Pipes) mit einem Port an jedem Ende austauschen.

## Konzepte und Verwendung

Ein Nachrichtenkanal wird mit dem {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}-Konstruktor erstellt. Einmal erstellt, können die beiden Ports des Kanals über die Eigenschaften {{domxref("MessageChannel.port1")}} und {{domxref("MessageChannel.port2")}} zugegriffen werden (die beide {{domxref("MessagePort")}}-Objekte zurückgeben). Die Anwendung, die den Kanal erstellt hat, verwendet `port1`, und die Anwendung am anderen Ende des Ports verwendet `port2` — Sie senden eine Nachricht an `port2` und übertragen den Port auf den anderen Browsing-Kontext mit {{domxref("window.postMessage")}} zusammen mit zwei Argumenten (die zu sendende Nachricht und das Objekt, um dessen Besitz zu übertragen, in diesem Fall der Port selbst.)

Wenn diese übertragbaren Objekte übertragen werden, sind sie im ursprünglichen Kontext nicht mehr nutzbar. Ein Port kann, nachdem er gesendet wurde, nicht länger vom ursprünglichen Kontext verwendet werden.

Der andere Browsing-Kontext kann die Nachricht mithilfe von {{domxref("MessagePort.message_event", "onmessage")}} empfangen und den Inhalt der Nachricht mit dem Attribut `data` des Events erfassen. Anschließend könnte man antworten, indem man eine Nachricht zurück an das ursprüngliche Dokument sendet, unter Verwendung von {{domxref("MessagePort.postMessage")}}.

Wenn Sie aufhören möchten, Nachrichten über den Kanal zu senden, können Sie {{domxref("MessagePort.close")}} aufrufen, um die Ports zu schließen.

Weitere Informationen zur Verwendung dieser API finden Sie unter [Verwendung der Channel-Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging).

## Schnittstellen

- {{domxref("MessageChannel")}}
  - : Erstellt einen neuen Nachrichtenkanal, um Nachrichten zu versenden.
- {{domxref("MessagePort")}}
  - : Steuert die Ports des Nachrichtenkanals, ermöglicht das Senden von Nachrichten von einem Port und das Empfangen am anderen.

## Beispiele

- Wir haben ein [grundlegendes Channel-Messaging-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub veröffentlicht ([auch live ausführen](https://mdn.github.io/dom-examples/channel-messaging-basic/)), das einen wirklich einfachen Einzelnachrichtentransfer zwischen einer Seite und einem eingebetteten {{htmlelement("iframe")}} zeigt.
- Sie können auch ein [Multimessaging-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage) ansehen ([dies live ausführen](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)), das eine etwas komplexere Einrichtung zeigt, die mehrere Nachrichten zwischen Hauptseite und IFrame senden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Channel-Messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
