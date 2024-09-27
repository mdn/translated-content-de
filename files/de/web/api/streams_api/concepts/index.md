---
title: Streams API-Konzepte
slug: Web/API/Streams_API/Concepts
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("Streams")}}

Die [Streams API](/de/docs/Web/API/Streams_API) fügt eine sehr nützliche Sammlung von Werkzeugen zur Webplattform hinzu, indem sie Objekte bereitstellt, die es JavaScript ermöglichen, programmatisch auf Datenströme zuzugreifen, die über das Netzwerk empfangen werden, und diese nach den Wünschen des Entwicklers zu verarbeiten. Einige der mit Streams verbundenen Konzepte und Terminologien könnten Ihnen neu sein — dieser Artikel erklärt alles, was Sie wissen müssen.

## Lesbare Streams

Ein lesbarer Stream ist eine Datenquelle, die in JavaScript durch ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt repräsentiert wird, das aus einer **Unterliegenden Quelle** fließt — dies ist eine Ressource irgendwo im Netzwerk oder anderswo in Ihrer Domain, von der Sie Daten erhalten möchten.

Es gibt zwei Arten von unterliegenden Quellen:

- **Push-Quellen** schieben ständig Daten zu Ihnen, wenn Sie darauf zugegriffen haben, und es liegt an Ihnen, den Zugriff auf den Stream zu starten, zu pausieren oder abzubrechen. Beispiele umfassen Videostreams und TCP/[Web sockets](/de/docs/Web/API/WebSockets_API).
- **Pull-Quellen** erfordern, dass Sie explizit Daten von ihnen anfordern, sobald Sie verbunden sind. Beispiele sind eine Datei-Zugriffsoperation über eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage.

### Teile

Die Daten werden nacheinander in kleinen Stücken gelesen, die als **Chunks** bezeichnet werden. Ein Chunk kann ein einzelnes Byte sein, oder es kann etwas Größeres wie ein [Typed Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) einer bestimmten Größe sein. Ein einziger Stream kann Chunks unterschiedlicher Größe und Typen enthalten.

![Lesbare Streams-Datenfluss](readable_streams.png)

Die Chunks, die in einem Stream platziert werden, werden als **eingereiht** bezeichnet — das bedeutet, dass sie in einer Warteschlange darauf warten, gelesen zu werden. Eine **interne Warteschlange** verfolgt die Chunks, die noch nicht gelesen wurden (siehe Abschnitt Interne Warteschlangen und Warteschlangenstrategien unten).

### Leser, Konsumenten und Controller

Die Chunks innerhalb des Streams werden von einem **Leser** gelesen — dieser verarbeitet die Daten, jeweils ein Chunk, sodass Sie jede beliebige Operation darauf ausführen können. Der Leser plus der dazugehörige Verarbeitungscode wird als **Konsument** bezeichnet.

Es gibt auch eine Konstruktion, die Sie verwenden werden, die als **Controller** bezeichnet wird — jeder Leser hat einen zugehörigen Controller, der es Ihnen ermöglicht, den Stream zu steuern (zum Beispiel, ihn zu schließen, wenn gewünscht).

### Sperren

Nur ein Leser kann einen Stream gleichzeitig lesen; wenn ein Leser erstellt wird und beginnt, einen Stream zu lesen (ein **aktiver Leser**), sagen wir, dass er an ihn **gebunden** ist. Wenn Sie möchten, dass ein anderer Leser Ihren Stream lesen kann, müssen Sie normalerweise den ersten Leser abbrechen, bevor Sie etwas anderes tun (obwohl Sie Streams **sichern** können, siehe den Abschnitt Sichern weiter unten)

### Lesbare Streams und Bytestreams

Beachten Sie, dass es zwei verschiedene Arten von lesbaren Streams gibt. Neben dem konventionellen lesbaren Stream gibt es einen Typ namens Bytestream — dies ist eine erweiterte Version eines konventionellen Streams zum Lesen von unterliegenden Bytequellen. Im Vergleich zum konventionellen lesbaren Stream dürfen Bytestreams von BYOB-Lesern (BYOB, "bring your own buffer") gelesen werden. Diese Art von Leser erlaubt es, Streams direkt in einen vom Entwickler bereitgestellten Puffer zu lesen, was das erforderliche Kopieren minimiert. Welcher unterliegende Stream (und damit Leser und Controller) Ihr Code verwendet, hängt davon ab, wie der Stream ursprünglich erstellt wurde (siehe die [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor-Seite).

Sie können vorgefertigte lesbare Streams über Mechanismen wie ein [`Response.body`](/de/docs/Web/API/Response/body) aus einer Fetch-Anfrage nutzen oder Ihre eigenen Streams mithilfe des [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktors erstellen.

## Sichern

Obwohl nur ein einzelner Leser einen Stream gleichzeitig lesen kann, ist es möglich, einen Stream in zwei identische Kopien zu teilen, die dann von zwei separaten Lesern gelesen werden können. Dies wird als **Sichern** bezeichnet.

In JavaScript wird dies über die Methode [`ReadableStream.tee()`](/de/docs/Web/API/ReadableStream/tee) erreicht — sie gibt ein Array zurück, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig voneinander von zwei separaten Lesern gelesen werden können.

Sie könnten dies zum Beispiel in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und sie zum Browser streamen möchten, aber sie auch in den ServiceWorker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht von mehr als einem Leser gleichzeitig gelesen werden kann, benötigen Sie zwei Kopien, um dies zu tun.

![Sichern Datenfluss](tee.png)

## Beschreibbare Streams

Ein **beschreibbarer Stream** ist ein Ziel, in das Sie Daten schreiben können, in JavaScript durch ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt dargestellt. Dies dient als Abstraktion über einem **unterliegenden Senke** — eine niedrigere Ebene der I/O-Senke, in die Rohdaten geschrieben werden.

Die Daten werden über einen **Schreiber** in den Stream geschrieben, jeweils ein Chunk. Ein Chunk kann, wie die Chunks eines Lesers, in vielerlei Form vorliegen. Sie können beliebigen Code verwenden, um die Chunks, die geschrieben werden sollen, zu erzeugen; der Schreiber plus der zugehörige Code wird als **Produzent** bezeichnet.

Wenn ein Schreiber erstellt wird und beginnt, in einen Stream zu schreiben (ein **aktiver Schreiber**), sagt man, dass er an ihn **gebunden** ist. Nur ein Schreiber kann gleichzeitig in einen beschreibbaren Stream schreiben. Wenn Sie möchten, dass ein anderer Schreiber in Ihren Stream schreiben kann, müssen Sie ihn in der Regel abbrechen, bevor Sie dann einen anderen Schreiber daran anhängen.

Eine **interne Warteschlange** verfolgt die Chunks, die in den Stream geschrieben, aber noch nicht von der unterliegenden Senke verarbeitet wurden.

Es gibt auch eine Konstruktion, die Sie verwenden werden, die als Controller bezeichnet wird — jeder Schreiber hat einen zugehörigen Controller, der es Ihnen ermöglicht, den Stream zu steuern (zum Beispiel, ihn abzubrechen, wenn gewünscht).

![Beschreibbare Streams Datenfluss](writable_streams.png)

Sie können beschreibbare Streams mithilfe des [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)-Konstruktors nutzen. Diese haben derzeit sehr eingeschränkte Verfügbarkeit in Browsern.

## Rohrketten

Die Streams API ermöglicht es, Streams mithilfe einer Struktur namens **Rohrkette** ineinander zu leiten.
Es gibt zwei Methoden, die dies erleichtern:

- [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) — leitet den Stream durch einen **Transform-Stream**, wodurch möglicherweise das Datenformat auf dem Weg transformiert wird.
  Dies könnte zum Beispiel verwendet werden, um Video-Frames zu kodieren oder zu dekodieren, Daten zu komprimieren oder zu dekomprimieren oder Daten von einer Form in eine andere umzuwandeln.

  Ein Transform-Stream besteht aus einem Paar von Streams: einem lesbaren Stream, aus dem Daten gelesen werden, und einem beschreibbaren Stream, in den sie geschrieben werden, zusammen mit geeigneten Mechanismen, um sicherzustellen, dass neue Daten verfügbar gemacht werden, sobald Daten geschrieben werden.

  [`TransformStream`](/de/docs/Web/API/TransformStream) ist eine konkrete Implementierung eines Transform-Streams, aber jedes Objekt, das dieselben lesbaren Stream- und beschreibbaren Stream-Eigenschaften hat, kann an `pipeThrough()` übergeben werden.

- [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) — leitet zu einem beschreibbaren Stream, der als Endpunkt der Rohrkette fungiert.

Der Anfang der Rohrkette wird als **ursprüngliche Quelle** bezeichnet, und das Ende als **endgültige Senke**.

![Rohrkette-Diagramm](pipechain.png)

## Gegendruck

Ein wichtiges Konzept bei Streams ist der **Gegendruck** — dies ist der Prozess, bei dem ein einzelner Stream oder eine Rohrkette die Lesegeschwindigkeit/Schreibgeschwindigkeit reguliert. Wenn ein Stream weiter unten in der Kette noch beschäftigt ist und noch nicht bereit ist, mehr Chunks zu akzeptieren, sendet er ein Signal rückwärts durch die Kette, um früheren Transform-Streams (oder der ursprünglichen Quelle) mitzuteilen, dass sie die Lieferung verlangsamen sollen, um zu verhindern, dass es irgendwo zu einem Flaschenhals kommt.

Um Gegendruck in einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu verwenden, können wir den Controller nach der von der Verbraucherseite gewünschten Chunk-Größe fragen, indem wir die [`ReadableStreamDefaultController.desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize)-Eigenschaft des Controllers abfragen. Wenn sie zu niedrig ist, kann unser `ReadableStream` seiner unterliegenden Quelle mitteilen, dass sie aufhören soll, Daten zu senden, und wir üben Gegendruck entlang der Stream-Kette aus.

Wenn später der Konsument wieder Daten erhalten möchte, können wir die Pull-Methode in der Stream-Erstellung verwenden, um unserer unterliegenden Quelle zu signalisieren, unseren Stream mit Daten zu versorgen.

## Interne Warteschlangen und Warteschlangenstrategien

Wie bereits erwähnt, werden die Chunks in einem Stream, die noch nicht verarbeitet und abgeschlossen sind, durch eine interne Warteschlange verfolgt.

- Im Fall von lesbaren Streams sind dies die Chunks, die eingereiht, aber noch nicht gelesen wurden
- Im Fall von beschreibbaren Streams sind dies Chunks, die geschrieben, aber noch nicht von der unterliegenden Senke verarbeitet wurden.

Interne Warteschlangen verwenden eine **Warteschlangenstrategie**, die angibt, wie Gegendruck basierend auf dem **Zustand der internen Warteschlange** signalisiert werden soll.

Im Allgemeinen vergleicht die Strategie die Größe der Chunks in der Warteschlange mit einem Wert, der als **high water mark** bezeichnet wird, dem größten gesamten Chunk-Volumen, das die Warteschlange vorzugsweise verwalten würde.

Die durchgeführte Berechnung ist

`high water mark - gesamte Größe der Chunks in der Warteschlange = gewünschte Größe`

Die **gewünschte Größe** ist die Anzahl der Chunks, die der Stream noch akzeptieren kann, um den Streamfluss aufrechtzuerhalten, aber unterhalb der high water mark in der Größe zu bleiben.
Die Chunk-Erzeugung wird entsprechend verlangsamt/beschleunigt, um den Stream so schnell wie möglich fließen zu lassen, während die gewünschte Größe über Null gehalten wird.
Wenn der Wert auf null (oder darunter) fällt, bedeutet dies, dass Chunks schneller erzeugt werden, als der Stream damit umgehen kann, was zu Problemen führen kann.

Als Beispiel nehmen wir eine Chunk-Größe von 1 und eine high water mark von 3.
Das bedeutet, dass bis zu 3 Chunks eingereiht werden können, bevor die high water mark erreicht ist und Gegendruck ausgeübt wird.
