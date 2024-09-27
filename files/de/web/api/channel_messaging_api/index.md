---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

Die **Channel Messaging API** ermöglicht es zwei separaten Skripten, die in unterschiedlichen Browsing-Kontexten an dasselbe Dokument angehängt sind (z. B. zwei IFrames oder das Hauptdokument und ein IFrame, zwei Dokumente über einen [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder zwei Worker) direkt miteinander zu kommunizieren, indem Nachrichten durch bidirektionale Kanäle (oder Pipes) mit einem Port an jedem Ende gesendet werden.

## Konzepte und Verwendung

Ein Nachrichtenkanal wird mit dem [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel)-Konstruktor erstellt. Einmal erstellt, können die beiden Ports des Kanals über die Eigenschaften [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) und [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) (die beide [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte zurückgeben) abgerufen werden. Die App, die den Kanal erstellt hat, verwendet `port1`, und die App am anderen Ende des Ports verwendet `port2` — Sie senden eine Nachricht an `port2` und übertragen den Port über [`window.postMessage`](/de/docs/Web/API/Window/postMessage) zusammen mit zwei Argumenten an den anderen Browsing-Kontext (die zu sendende Nachricht und das Objekt, dessen Eigentum übertragen werden soll, in diesem Fall der Port selbst).

Wenn diese übertragbaren Objekte übertragen werden, sind sie im ursprünglichen Kontext nicht mehr verwendbar. Ein Port, nachdem er gesendet wurde, kann vom ursprünglichen Kontext nicht mehr verwendet werden.

Der andere Browsing-Kontext kann die Nachricht mit [`onmessage`](/de/docs/Web/API/MessagePort/message_event) abhören und den Inhalt der Nachricht mit dem `data`-Attribut des Ereignisses erfassen. Anschließend könnten Sie antworten, indem Sie eine Nachricht zurück an das ursprüngliche Dokument mit [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage) senden.

Wenn Sie keine Nachrichten mehr über den Kanal senden möchten, können Sie [`MessagePort.close`](/de/docs/Web/API/MessagePort/close) aufrufen, um die Ports zu schließen.

Erfahren Sie mehr darüber, wie Sie diese API verwenden können, unter [Using channel messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging).

## Schnittstellen

- [`MessageChannel`](/de/docs/Web/API/MessageChannel)
  - : Erstellt einen neuen Nachrichtenkanal, um Nachrichten zu senden.
- [`MessagePort`](/de/docs/Web/API/MessagePort)
  - : Steuert die Ports auf dem Nachrichtenkanal und ermöglicht das Senden von Nachrichten von einem Port und das Empfangen am anderen.

## Beispiele

- Wir haben eine [Grundlegende Demo zur Kanalnachrichtenübermittlung](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub veröffentlicht ([führen Sie diese auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)), die eine wirklich einfache Einzelnachrichtenübertragung zwischen einer Seite und einem eingebetteten {{htmlelement("iframe")}} zeigt.
- Sie können auch eine [Multimessaging-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage) sehen ([führen Sie diese live aus](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)), die eine etwas komplexere Einrichtung zeigt, die das Senden mehrerer Nachrichten zwischen Hauptseite und IFrame ermöglicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using channel messaging](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
