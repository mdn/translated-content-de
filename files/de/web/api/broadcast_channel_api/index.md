---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{DefaultAPISidebar("Broadcast Channel API")}} {{AvailableInWorkers}}

Die **Broadcast Channel API** ermöglicht eine grundlegende Kommunikation zwischen {{Glossary("browsing_context", "Browsing-Kontexten")}} (also _Fenstern_, _Tabs_, _Frames_ oder _Iframes_) und Workern auf demselben {{Glossary("origin", "Origin")}}.

> [!NOTE]
> Genauer gesagt, ist die Kommunikation zwischen Browsing-Kontexten mit derselben [Storage-Partition](/de/docs/Web/Privacy/Guides/State_Partitioning) erlaubt. Der Speicher wird zuerst entsprechend den obersten Seiten partitioniert — wenn Sie beispielsweise eine geöffnete Seite bei `a.com` haben, die ein iframe von `b.com` einbettet, und eine andere Seite geöffnet ist bei `b.com`, dann kann das iframe nicht mit der zweiten Seite kommunizieren, obwohl sie technisch gesehen denselben Ursprung haben. Wenn jedoch die erste Seite ebenfalls auf `b.com` ist, kann das iframe mit der zweiten Seite kommunizieren.

Indem Sie ein [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt erstellen, können Sie alle Nachrichten empfangen, die an diesen gesendet werden. Sie müssen keine Referenz zu den Frames oder Workern pflegen, mit denen Sie kommunizieren möchten: Sie können sich durch das Erstellen eines eigenen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) mit demselben Namen auf einen bestimmten Kanal "abonnieren" und eine bidirektionale Kommunikation zwischen allen führen.

![Das Prinzip der Broadcast Channel API](broadcastchannel.png)

## Broadcast Channel-Schnittstelle

### Erstellen oder Beitreten eines Kanals

Ein Client tritt einem Broadcast Channel bei, indem er ein [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt erstellt. Der [Konstruktor](/de/docs/Web/API/BroadcastChannel/BroadcastChannel) nimmt einen einzigen Parameter: den _Namen_ des Kanals. Wenn es das erste ist, das sich mit diesem Broadcast-Kanalnamen verbindet, wird der zugrunde liegende Kanal erstellt.

```js
// Connection to a broadcast channel
const bc = new BroadcastChannel("test_channel");
```

### Senden einer Nachricht

Es genügt, die Methode [`postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage) auf dem erstellten `BroadcastChannel`-Objekt aufzurufen, welches jedes Objekt als Argument akzeptiert. Ein Beispiel für eine Textnachricht:

```js
// Example of sending of a very simple message
bc.postMessage("This is a test message.");
```

Daten, die an den Kanal gesendet werden, werden mit dem [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine breite Palette von Datenobjekten sicher senden können, ohne sie selbst serialisieren zu müssen.

Die API ordnet den Nachrichten keine Semantik zu, daher liegt es an Ihrem Code, zu wissen, welche Art von Nachrichten zu erwarten sind und was damit zu tun ist.

### Empfang einer Nachricht

Wenn eine Nachricht gepostet wird, wird ein [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis an jedes [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt gesendet, das mit diesem Kanal verbunden ist. Eine Funktion kann für dieses Ereignis mit dem [`onmessage`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignishandler ausgeführt werden:

```js
// A handler that only logs the event to the console:
bc.onmessage = (event) => {
  console.log(event);
};
```

### Trennen eines Kanals

Um einen Kanal zu verlassen, rufen Sie die [`close()`](/de/docs/Web/API/BroadcastChannel/close)-Methode auf dem Objekt auf. Dies trennt das Objekt vom zugrunde liegenden Kanal und ermöglicht die Speicherbereinigung.

```js
// Disconnect the channel
bc.close();
```

## Fazit

Das selbstenthaltende Interface der Broadcast Channel API ermöglicht die Kommunikation zwischen verschiedenen Kontexten. Es kann verwendet werden, um Benutzeraktionen in anderen Tabs innerhalb desselben Origin zu erkennen, wie wenn der Benutzer sich an- oder abmeldet.

Das Nachrichtenprotokoll ist nicht definiert und die verschiedenen Browsing-Kontexte müssen es selbst implementieren; es gibt keine Aushandlung oder Anforderung von der Spezifikation.

## Schnittstellen

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)
  - : Repräsentiert einen benannten Kanal, auf den jeder {{Glossary("browsing_context", "Browsing-Kontext")}} eines gegebenen {{Glossary("origin", "Origin")}} zugreifen kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), die Schnittstelle, die es implementiert.
