---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Broadcast Channel API")}} {{AvailableInWorkers}}

Die **Broadcast Channel API** ermöglicht grundlegende Kommunikation zwischen {{glossary("browsing context", "browsing contexts")}} (also _Fenstern_, _Tabs_, _Frames_ oder _iframes_) und Workern auf dem gleichen {{glossary("origin")}}.

> [!NOTE]
> Genauer gesagt, ist die Kommunikation zwischen Browsing-Kontexten erlaubt, die denselben [Speicherbereich](/de/docs/Web/Privacy/State_Partitioning) nutzen. Speicher wird zunächst entsprechend den obersten Seiten partitioniert. Wenn Sie z. B. eine geöffnete Seite auf `a.com` haben, die ein iframe von `b.com` einbettet, und eine weitere Seite auf `b.com` geöffnet ist, kann das iframe nicht mit der zweiten Seite kommunizieren, obwohl sie technisch denselben Ursprung haben. Wenn jedoch die erste Seite ebenfalls auf `b.com` ist, kann das iframe mit der zweiten Seite kommunizieren.

Durch das Erstellen eines {{domxref("BroadcastChannel")}}-Objekts können Sie alle Nachrichten empfangen, die an diesen gesendet werden. Sie müssen keine Referenz zu den Frames oder Workern halten, mit denen Sie kommunizieren möchten: Sie können sich „anmelden“ zu einem bestimmten Kanal, indem sie ihren eigenen {{domxref("BroadcastChannel")}} mit demselben Namen erstellen, und bidirektionale Kommunikation zwischen ihnen allen haben.

![Das Prinzip der Broadcast Channel API](broadcastchannel.png)

## Broadcast Channel Schnittstelle

### Erstellen oder Beitreten zu einem Kanal

Ein Client tritt einem Broadcast-Kanal bei, indem er ein {{domxref("BroadcastChannel")}}-Objekt erstellt. Sein [Konstruktor](/de/docs/Web/API/BroadcastChannel/BroadcastChannel) nimmt einen einzigen Parameter: den _Namen_ des Kanals. Wenn dies die erste Verbindung zu diesem Broadcast-Kanalnamen ist, wird der zugrunde liegende Kanal erstellt.

```js
// Verbindung zu einem Broadcast-Kanal
const bc = new BroadcastChannel("test_channel");
```

### Senden einer Nachricht

Es reicht aus, die {{domxref("BroadcastChannel.postMessage", "postMessage()")}} Methode auf dem erstellten `BroadcastChannel`-Objekt aufzurufen, das ein beliebiges Objekt als Argument annimmt. Ein Beispiel für eine einfache Zeichenfolgenachricht:

```js
// Beispiel für das Senden einer sehr einfachen Nachricht
bc.postMessage("This is a test message.");
```

Die an den Kanal gesendeten Daten werden mit dem [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert. Das bedeutet, dass Sie eine Vielzahl von Datenobjekten sicher senden können, ohne sie selbst serialisieren zu müssen.

Die API verknüpft keine Semantik mit Nachrichten, daher muss der Code wissen, welche Art von Nachrichten zu erwarten sind und was damit zu tun ist.

### Empfang einer Nachricht

Wenn eine Nachricht gepostet wird, wird ein [`message`](/de/docs/Web/API/BroadcastChannel/message_event) Ereignis an jedes mit diesem Kanal verbundene {{domxref("BroadcastChannel")}}-Objekt gesendet. Eine Funktion kann für dieses Ereignis mit dem {{domxref("BroadcastChannel/message_event", "onmessage")}} Ereignishandler ausgeführt werden:

```js
// Ein Handler, der das Ereignis nur im Konsolenprotokoll ausgibt:
bc.onmessage = (event) => {
  console.log(event);
};
```

### Trennen eines Kanals

Um einen Kanal zu verlassen, rufen Sie die {{domxref("BroadcastChannel.close", "close()")}} Methode auf dem Objekt auf. Dies trennt das Objekt vom zugrunde liegenden Kanal und ermöglicht die Speicherbereinigung.

```js
// Den Kanal trennen
bc.close();
```

## Fazit

Die in sich geschlossene Schnittstelle der Broadcast Channel API ermöglicht die Kommunikation zwischen verschiedenen Kontexten. Sie kann verwendet werden, um Benutzeraktionen in anderen Tabs innerhalb eines Ursprungs zu erkennen, z. B. wenn sich der Benutzer anmeldet oder abmeldet.

Das Nachrichtenprotokoll ist nicht definiert und die verschiedenen Browsing-Kontexte müssen es selbst implementieren; es gibt keine Aushandlung oder Anforderung von der Spezifikation.

## Schnittstellen

- {{domxref("BroadcastChannel")}}
  - : Repräsentiert einen benannten Kanal, zu dem jeder {{glossary("browsing context")}} eines gegebenen {{glossary("origin")}} abonnieren kann.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BroadcastChannel")}}, die Schnittstelle, die sie implementiert.