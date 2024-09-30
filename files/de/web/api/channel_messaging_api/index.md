---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

Die **Channel Messaging API** ermöglicht es, dass zwei separate Skripte, die in unterschiedlichen Browserkontexten an dasselbe Dokument angehängt sind (z. B. zwei IFrames oder das Hauptdokument und ein IFrame, zwei Dokumente über einen [`SharedWorker`](/de/docs/Web/API/SharedWorker), oder zwei Worker), direkt miteinander kommunizieren, indem sie Nachrichten über bidirektionale Kanäle (oder Pipes) mit einem Port an jedem Ende austauschen.

## Konzepte und Verwendung

Ein Nachrichtenkanal wird mithilfe des Konstruktors [`MessageChannel()`](/de/docs/Web/API/MessageChannel/MessageChannel) erstellt. Einmal erstellt, können die beiden Ports des Kanals über die Eigenschaften [`MessageChannel.port1`](/de/docs/Web/API/MessageChannel/port1) und [`MessageChannel.port2`](/de/docs/Web/API/MessageChannel/port2) zugegriffen werden (die beide [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte zurückgeben.) Die Anwendung, die den Kanal erstellt hat, verwendet `port1`, und die Anwendung am anderen Ende des Ports verwendet `port2` – Sie senden eine Nachricht an `port2` und übertragen den Port in den anderen Browserkontext mithilfe von [`window.postMessage`](/de/docs/Web/API/Window/postMessage) zusammen mit zwei Argumenten (der zu sendenden Nachricht und dem Objekt, dessen Besitz übertragen wird, in diesem Fall der Port selbst.)

Wenn diese übertragbaren Objekte übertragen werden, können sie im ursprünglichen Kontext nicht mehr verwendet werden. Ein Port kann, nachdem er gesendet wurde, vom ursprünglichen Kontext nicht mehr genutzt werden.

Der andere Browserkontext kann die Nachricht mithilfe von [`onmessage`](/de/docs/Web/API/MessagePort/message_event) empfangen und den Inhalt der Nachricht anhand des `data`-Attributs des Ereignisses erfassen. Sie könnten dann antworten, indem Sie eine Nachricht zurück an das ursprüngliche Dokument mithilfe von [`MessagePort.postMessage`](/de/docs/Web/API/MessagePort/postMessage) senden.

Wenn Sie das Senden von Nachrichten über den Kanal beenden möchten, können Sie [`MessagePort.close`](/de/docs/Web/API/MessagePort/close) aufrufen, um die Ports zu schließen.

Erfahren Sie mehr darüber, wie Sie diese API verwenden können, in [Verwendung der Nachrichtenkanal-API](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging).

## Schnittstellen

- [`MessageChannel`](/de/docs/Web/API/MessageChannel)
  - : Erstellt einen neuen Nachrichtenkanal zum Senden von Nachrichten.
- [`MessagePort`](/de/docs/Web/API/MessagePort)
  - : Steuert die Ports im Nachrichtenkanal und ermöglicht das Senden von Nachrichten von einem Port und das Empfangen dieser am anderen.

## Beispiele

- Wir haben ein [Grundlegendes Demobeispiel für Nachrichtenkanäle](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) auf GitHub veröffentlicht ([führen Sie es auch live aus](https://mdn.github.io/dom-examples/channel-messaging-basic/)), das einen sehr einfachen Einzelnachrichtentransfer zwischen einer Seite und einem eingebetteten {{htmlelement("iframe")}} zeigt.
- Sie können auch ein [Multimessaging-Demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage) sehen ([diese live ausführen](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)), das eine etwas komplexere Einrichtung zeigt, die mehrere Nachrichten zwischen Hauptseite und IFrame senden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Nachrichtenkanal-API](/de/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [Web Workers API](/de/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
