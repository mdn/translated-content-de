---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Broadcast Channel API")}} {{AvailableInWorkers}}

Die **Broadcast Channel API** ermöglicht eine grundlegende Kommunikation zwischen [Browsing-Kontexten](/de/docs/Glossary/browsing_context) (das heißt, _Fenstern_, _Tabs_, _Frames_ oder _iframes_) und Workern im selben [Ursprung](/de/docs/Glossary/origin).

> [!NOTE]
> Genauer gesagt, Kommunikation ist zwischen Browsing-Kontexten erlaubt, die denselben [Speicherbereich](/de/docs/Web/Privacy/State_Partitioning) verwenden. Der Speicher wird zunächst gemäß den Top-Level-Sites partitioniert. Beispielsweise, wenn Sie eine Seite bei `a.com` geöffnet haben, die ein iframe von `b.com` einbettet, und eine andere Seite zu `b.com` geöffnet ist, kann das iframe nicht mit der zweiten Seite kommunizieren, obwohl sie technisch den gleichen Ursprung haben. Wenn die erste Seite jedoch auch auf `b.com` ist, kann das iframe mit der zweiten Seite kommunizieren.

Durch das Erstellen eines [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekts können Sie alle Nachrichten empfangen, die an diesen gesendet werden. Es ist nicht notwendig, eine Referenz zu den Frames oder Workern zu halten, mit denen Sie kommunizieren möchten: Sie können sich "anmelden", indem sie ihren eigenen [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) mit demselben Namen erstellen, und eine bidirektionale Kommunikation zwischen allen haben.

![Das Prinzip der Broadcast Channel API](broadcastchannel.png)

## Broadcast Channel Schnittstelle

### Erstellen oder Beitreten zu einem Kanal

Ein Client tritt einem Broadcast-Kanal bei, indem er ein [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt erstellt. Sein [Konstruktor](/de/docs/Web/API/BroadcastChannel/BroadcastChannel) akzeptiert einen einzigen Parameter: den _Namen_ des Kanals. Wenn er der erste ist, der eine Verbindung zu diesem Broadcast-Kanalnamen herstellt, wird der zugrunde liegende Kanal erstellt.

```js
// Connection to a broadcast channel
const bc = new BroadcastChannel("test_channel");
```

### Senden einer Nachricht

Es genügt, die Methode [`postMessage()`](/de/docs/Web/API/BroadcastChannel/postMessage) auf dem erstellten `BroadcastChannel`-Objekt aufzurufen, die ein beliebiges Objekt als Argument annimmt. Ein Beispiel einer Nachrichtenkette:

```js
// Example of sending of a very simple message
bc.postMessage("This is a test message.");
```

Die an den Kanal gesendeten Daten werden mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, Sie können eine breite Vielzahl von Datenobjekten sicher senden, ohne sie selbst serialisieren zu müssen.

Die API assoziiert keine Semantik mit Nachrichten, daher liegt es am Code zu wissen, welche Art von Nachrichten zu erwarten sind und was mit ihnen zu tun ist.

### Empfangen einer Nachricht

Wenn eine Nachricht gesendet wird, wird ein [`message`](/de/docs/Web/API/BroadcastChannel/message_event) Ereignis an jedes [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt, das mit diesem Kanal verbunden ist, gesendet. Eine Funktion kann für dieses Ereignis über den [`onmessage`](/de/docs/Web/API/BroadcastChannel/message_event) Ereignis-Handler ausgeführt werden:

```js
// A handler that only logs the event to the console:
bc.onmessage = (event) => {
  console.log(event);
};
```

### Trennen eines Kanals

Um einen Kanal zu verlassen, rufen Sie die Methode [`close()`](/de/docs/Web/API/BroadcastChannel/close) auf dem Objekt auf. Dadurch wird das Objekt vom zugrunde liegenden Kanal getrennt und ermöglicht die Speicherbereinigung.

```js
// Disconnect the channel
bc.close();
```

## Fazit

Die in sich geschlossene Schnittstelle der Broadcast Channel API ermöglicht die Kommunikation über Kontexte hinweg. Sie kann verwendet werden, um Benutzeraktionen in anderen Tabs innerhalb desselben Ursprungs zu erkennen, wie wenn der Benutzer sich ein- oder ausloggt.

Das Nachrichtenprotokoll ist nicht definiert und die verschiedenen Browsing-Kontexte müssen es selbst implementieren; es gibt keine Verhandlung oder Anforderung von der Spezifikation.

## Schnittstellen

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)
  - : Stellt einen benannten Kanal dar, den jeder [Browsing-Kontext](/de/docs/Glossary/browsing_context) eines bestimmten [Ursprungs](/de/docs/Glossary/origin) abonnieren kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), die implementierende Schnittstelle.
