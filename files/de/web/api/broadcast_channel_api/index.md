---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Broadcast Channel API")}} {{AvailableInWorkers}}

Die **Broadcast Channel API** ermöglicht grundlegende Kommunikation zwischen [Browsing-Kontexten](/de/docs/Glossary/browsing_context) (das heißt _Fenster_, _Tabs_, _Frames_ oder _iFrames_) und Workern auf demselben [Origin](/de/docs/Glossary/origin).

> [!NOTE]
> Genau genommen ist die Kommunikation zwischen Browsing-Kontexten erlaubt, die denselben [Speicherpartition](/de/docs/Web/Privacy/State_Partitioning) verwenden. Speicher wird zuerst entsprechend der Top-Level-Sites partitioniert. Wenn Sie also eine Seite bei `a.com` geöffnet haben, die ein iframe von `b.com` einbettet, und eine andere Seite auf `b.com` geöffnet ist, kann das iframe trotz technischem Same-Origin nicht mit der zweiten Seite kommunizieren. Wenn die erste Seite jedoch auch auf `b.com` ist, kann das iframe mit der zweiten Seite kommunizieren.

Durch die Erstellung eines [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekts können Sie Nachrichten empfangen, die an den Kanal gesendet werden. Sie müssen keine Referenz zu den Frames oder Workern, mit denen Sie kommunizieren möchten, pflegen: Diese können sich durch den Bau ihres eigenen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) mit demselben Namen auf einen bestimmten Kanal "abonnieren" und bidirektionale Kommunikation zwischen all diesen erhalten.

![Das Prinzip der Broadcast Channel API](broadcastchannel.png)

## Broadcast Channel-Schnittstelle

### Erstellen oder Beitreten eines Kanals

Ein Client tritt einem Broadcast-Kanal bei, indem er ein [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt erstellt. Der [Konstruktor](/de/docs/Web/API/BroadcastChannel/BroadcastChannel) nimmt einen einzigen Parameter: den _Namen_ des Kanals. Wenn es der erste Verbindungspunkt zu diesem Broadcast-Kanalnamen ist, wird der zugrundeliegende Kanal erstellt.

```js
// Connection to a broadcast channel
const bc = new BroadcastChannel("test_channel");
```

### Eine Nachricht senden

Es reicht aus, die Methode [`postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage) am erstellten `BroadcastChannel`-Objekt aufzurufen, das jedes Objekt als Argument nimmt. Ein Beispiel für eine Zeichenkette:

```js
// Example of sending of a very simple message
bc.postMessage("This is a test message.");
```

Daten, die an den Kanal gesendet werden, werden mithilfe des [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher senden können, ohne sie selbst serialisieren zu müssen.

Die API ordnet Nachrichten keine Semantik zu, daher muss der Code wissen, welche Art von Nachrichten erwartet und was damit gemacht werden soll.

### Eine Nachricht empfangen

Wenn eine Nachricht gesendet wird, wird ein [`message`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignis an jedes [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt gesendet, das mit diesem Kanal verbunden ist. Eine Funktion kann für dieses Ereignis mit dem [`onmessage`](/de/docs/Web/API/BroadcastChannel/message_event)-Ereignishandler ausgeführt werden:

```js
// A handler that only logs the event to the console:
bc.onmessage = (event) => {
  console.log(event);
};
```

### Einen Kanal trennen

Um einen Kanal zu verlassen, rufen Sie die Methode [`close()`](/de/docs/Web/API/BroadcastChannel/close) am Objekt auf. Dies trennt das Objekt vom zugrundeliegenden Kanal, sodass es Müll gesammelt werden kann.

```js
// Disconnect the channel
bc.close();
```

## Fazit

Die selbstständige Schnittstelle der Broadcast Channel API ermöglicht die Kommunikation über verschiedene Kontexte hinweg. Sie kann verwendet werden, um Benutzeraktionen in anderen Tabs innerhalb desselben Origin zu erkennen, wie zum Beispiel, wenn sich der Benutzer ein- oder ausloggt.

Das Nachrichtenprotokoll ist nicht definiert und die verschiedenen Browsing-Kontexte müssen es selbst implementieren; es gibt keine Verhandlung oder Anforderung seitens der Spezifikation.

## Schnittstellen

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)
  - : Repräsentiert einen benannten Kanal, zu dem sich jeder [Browsing-Kontext](/de/docs/Glossary/browsing_context) eines bestimmten [Origin](/de/docs/Glossary/origin) anmelden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), die Implementierungsschnittstelle.
