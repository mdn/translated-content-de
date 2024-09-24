---
title: Streams API-Konzepte
slug: Web/API/Streams_API/Concepts
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("Streams")}}

Die [Streams API](/de/docs/Web/API/Streams_API) fügt der Webplattform eine sehr nützliche Sammlung von Werkzeugen hinzu, die Objekte bereitstellt, mit denen JavaScript programmatisch auf Datenströme zugreifen kann, die über das Netzwerk empfangen werden und nach Belieben des Entwicklers verarbeitet werden können. Einige der mit Streams verbundenen Konzepte und Begriffe könnten Ihnen neu sein – dieser Artikel erklärt alles, was Sie wissen müssen.

## Lesbare Streams

Ein lesbarer Stream ist eine Datenquelle, die in JavaScript durch ein {{domxref("ReadableStream")}}-Objekt dargestellt wird und von einer **unterliegenden Quelle** fließt – das ist eine Ressource irgendwo im Netzwerk oder anderswo in Ihrer Domain, von der Sie Daten abrufen möchten.

Es gibt zwei Arten von unterliegenden Quellen:

- **Push-Quellen** schieben ständig Daten an Sie, wenn Sie sie abgerufen haben, und es liegt an Ihnen, den Zugriff auf den Stream zu starten, zu pausieren oder zu beenden. Beispiele sind Video-Streams und TCP/[Web-Sockets](/de/docs/Web/API/WebSockets_API).
- **Pull-Quellen** erfordern, dass Sie explizit Daten von ihnen anfordern, sobald die Verbindung hergestellt ist. Beispiele sind ein Dateizugriffsoperation über eine {{domxref("Window/fetch", "fetch()")}}-Anfrage.

### Chunks

Die Daten werden sequentiell in kleinen Stücken, sogenannten **Chunks**, gelesen. Ein Chunk kann ein einzelnes Byte oder etwas Größeres wie ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) einer bestimmten Größe sein. Ein einzelner Stream kann Chunks unterschiedlicher Größen und Typen enthalten.

![Datenfluss lesbarer Streams](readable_streams.png)

Die in einen Stream platzierten Chunks werden als **enqueued** bezeichnet – das bedeutet, dass sie in einer Warteschlange bereit stehen, um gelesen zu werden. Eine **interne Warteschlange** verfolgt die Chunks, die noch nicht gelesen wurden (siehe Abschnitt Interne Warteschlangen und Warteschlangenstrategien unten).

### Leser, Verbraucher und Controller

Die Chunks im Stream werden von einem **Leser** gelesen – dieser verarbeitet die Daten Chunk für Chunk und ermöglicht es Ihnen, jede gewünschte Art von Vorgang damit durchzuführen. Der Leser plus der dazugehörige Verarbeitungs-Code wird als **Verbraucher** bezeichnet.

Es gibt auch eine Konstruktion, die Sie verwenden werden, genannt **Controller** – jeder Leser hat einen zugehörigen Controller, der es Ihnen ermöglicht, den Stream zu steuern (zum Beispiel, um ihn zu schließen, wenn gewünscht).

### Sperren

Nur ein Leser kann einen Stream gleichzeitig lesen; wenn ein Leser erstellt wird und beginnt, einen Stream zu lesen (ein **aktiver Leser**), sagen wir, dass er **gesperrt** ist. Wenn Sie einen anderen Leser Ihren Stream lesen lassen möchten, müssen Sie in der Regel den ersten Leser beenden, bevor Sie etwas anderes tun (obwohl Sie Streams **aufteilen** können, siehe den Abschnitt Aufteilen unten).

### Lesbare Streams und Bytestreams

Beachten Sie, dass es zwei verschiedene Arten von lesbaren Streams gibt. Zusätzlich zu dem konventionellen lesbaren Stream gibt es einen Typ namens Bytestream — dies ist eine erweiterte Version eines konventionellen Streams zum Lesen von unterliegenden Bytequellen. Im Vergleich zum konventionellen lesbaren Stream dürfen Bytestreams von BYOB-Readern gelesen werden (BYOB, "bring your own buffer"). Diese Art von Leser ermöglicht es, Streams direkt in einen vom Entwickler bereitgestellten Puffer zu lesen, wodurch der erforderliche Kopieraufwand minimiert wird. Welche unterliegende Quelle (und damit der Leser und Controller) Ihr Code verwendet, hängt davon ab, wie der Stream ursprünglich erstellt wurde (siehe die Seite {{domxref("ReadableStream.ReadableStream","ReadableStream()")}} Konstruktor).

Sie können vorgefertigte lesbare Streams über Mechanismen wie ein {{domxref("Response.body")}} von einer fetch-Anfrage verwenden oder Ihre eigenen Streams mit dem {{domxref("ReadableStream.ReadableStream","ReadableStream()")}} Konstruktor erstellen.

## Aufteilen

Obwohl nur ein einzelner Leser einen Stream gleichzeitig lesen kann, ist es möglich, einen Stream in zwei identische Kopien zu teilen, die dann von zwei separaten Lesern gelesen werden können. Dies wird als **Aufteilen** bezeichnet.

In JavaScript wird dies über die Methode {{domxref("ReadableStream.tee()")}} erreicht – sie erzeugt ein Array, das zwei identische Kopien des ursprünglichen lesbaren Streams enthält, die dann unabhängig voneinander von zwei separaten Lesern gelesen werden können.

Sie könnten dies beispielsweise in einem [ServiceWorker](/de/docs/Web/API/Service_Worker_API) tun, wenn Sie eine Antwort vom Server abrufen und sie an den Browser streamen, aber auch in den ServiceWorker-Cache streamen möchten. Da ein Antwortkörper nicht mehr als einmal konsumiert werden kann und ein Stream nicht gleichzeitig von mehr als einem Leser gelesen werden kann, benötigten Sie zwei Kopien, um dies zu tun.

![Datenfluss beim Aufteilen](tee.png)

## Schreibbare Streams

Ein **schreibbarer Stream** ist ein Ziel, in das Sie Daten schreiben können, dargestellt in JavaScript durch ein {{domxref("WritableStream")}}-Objekt. Dies dient als Abstraktion über einem **unterliegenden Senke** – eine I/O-Senke auf niedrigerer Ebene, in die Rohdaten geschrieben werden.

Die Daten werden in den Stream über einen **Schreiber** geschrieben, Chunk für Chunk. Ein Chunk kann in vielerlei Formen auftreten, genau wie die Chunks in einem Leser. Sie können jeden Code verwenden, den Sie mögen, um die für das Schreiben fertigen Chunks zu produzieren; der Schreiber plus der zugehörige Code wird als **Produzent** bezeichnet.

Wenn ein Schreiber erstellt wird und beginnt, in einen Stream zu schreiben (ein **aktiver Schreiber**), wird gesagt, dass er **gesperrt** ist. Nur ein Schreiber kann gleichzeitig in einen schreibbaren Stream schreiben. Wenn Sie einen anderen Schreiber an Ihren Stream schreiben lassen möchten, müssen Sie ihn in der Regel abbrechen, bevor Sie dann einen anderen Schreiber daran anheften.

Eine **interne Warteschlange** verfolgt die Chunks, die in den Stream geschrieben wurden, aber noch nicht von der unterliegenden Senke verarbeitet wurden.

Es gibt auch eine Konstruktion, die Sie verwenden werden, genannt Controller – jeder Schreiber hat einen zugehörigen Controller, der es Ihnen ermöglicht, den Stream zu steuern (zum Beispiel, um ihn abzubrechen, wenn gewünscht).

![Datenfluss schreibbarer Streams](writable_streams.png)

Sie können schreibbare Streams mit dem {{domxref("WritableStream.WritableStream","WritableStream()")}} Konstruktor verwenden. Diese haben derzeit eine sehr eingeschränkte Verfügbarkeit in Browsern.

## Rohrketten

Die Streams API ermöglicht es, Streams mithilfe einer Struktur namens **Rohrkette** miteinander zu verknüpfen.
Es gibt zwei Methoden, die dies erleichtern:

- {{domxref("ReadableStream.pipeThrough()")}} — leitet den Stream durch einen **Transform-Stream** und transformiert möglicherweise das Datenformat dabei.
  Dies könnte zum Beispiel verwendet werden, um Video-Frames zu kodieren oder zu dekodieren, Daten zu komprimieren oder zu dekomprimieren oder anderweitig Daten von einer Form in eine andere zu konvertieren.

  Ein Transform-Stream besteht aus einem Paar von Streams: einem lesbaren Stream, aus dem Daten gelesen werden, und einem schreibbaren Stream, in den sie geschrieben werden, zusammen mit geeigneten Mechanismen, um sicherzustellen, dass neue Daten zum Lesen verfügbar sind, sobald Daten geschrieben wurden.

  {{domxref("TransformStream")}} ist eine konkrete Implementierung eines Transform-Streams, aber jedes Objekt, das dieselben lesbaren Stream- und schreibbaren Streameigenschaften hat, kann an `pipeThrough()` übergeben werden.

- {{domxref("ReadableStream.pipeTo()")}} — leitet zu einem schreibbaren Stream, der als Endpunkt der Rohrkette fungiert.

Der Beginn der Rohrkette wird als **ursprüngliche Quelle** bezeichnet, und das Ende wird als **endgültige Senke** bezeichnet.

![Diagramm der Rohrkette](pipechain.png)

## Rückstau

Ein wichtiges Konzept bei Streams ist der **Rückstau** – dies ist der Prozess, durch den ein einzelner Stream oder eine Rohrkette die Geschwindigkeit des Lesens/Schreibens reguliert. Wenn ein Stream später in der Kette noch beschäftigt ist und noch nicht bereit ist, mehr Chunks zu akzeptieren, sendet er ein Signal rückwärts durch die Kette, um den früheren Transform-Streams (oder der ursprünglichen Quelle) mitzuteilen, dass sie die Lieferung verlangsamen sollen, um zu verhindern, dass irgendwo ein Engpass entsteht.

Um Rückstau in einem {{domxref("ReadableStream")}} zu verwenden, können wir den Controller nach der vom Verbraucher gewünschten Chunk-Größe fragen, indem wir die Eigenschaft {{domxref("ReadableStreamDefaultController.desiredSize")}} auf dem Controller abfragen. Wenn sie zu niedrig ist, kann unser `ReadableStream` seiner unterliegenden Quelle mitteilen, die Datenübermittlung zu stoppen, und wir setzen den Rückstau entlang der Streamkette fort.

Wenn der Verbraucher später wieder Daten empfangen möchte, können wir die Pull-Methode in der Stream-Erstellung verwenden, um unserer unterliegenden Quelle mitzuteilen, unseren Stream mit Daten zu versorgen.

## Interne Warteschlangen und Warteschlangenstrategien

Wie bereits erwähnt, werden die Chunks in einem Stream, die noch nicht verarbeitet und abgeschlossen wurden, durch eine interne Warteschlange verfolgt.

- Im Fall von lesbaren Streams sind dies die Chunks, die in die Warteschlange gestellt wurden, aber noch nicht gelesen wurden.
- Im Fall von schreibbaren Streams sind dies Chunks, die geschrieben, aber noch nicht von der unterliegenden Senke verarbeitet wurden.

Interne Warteschlangen verwenden eine **Warteschlangenstrategie**, die bestimmt, wie Rückstau basierend auf dem **internen Warteschlangenzustand** signalisiert wird.

Im Allgemeinen vergleicht die Strategie die Größe der Chunks in der Warteschlange mit einem Wert, der als **High-Water-Marke** bezeichnet wird, was die größte Gesamtgröße von Chunks ist, die die Warteschlange vorzugsweise verwalten möchte.

Die durchgeführte Berechnung ist

`High-Water-Marke - Gesamtgröße der Chunks in der Warteschlange = gewünschte Größe`

Die **gewünschte Größe** ist die Anzahl der Chunks, die der Stream noch akzeptieren kann, um den Stream fließen zu lassen, aber unter der High-Water-Marke in der Größe zu bleiben.
Die Chunk-Erzeugung wird entsprechend verlangsamt/beschleunigt, um den Stream so schnell wie möglich fließen zu lassen und die gewünschte Größe über null zu halten.
Fällt der Wert auf null (oder darunter), bedeutet dies, dass Chunks schneller erzeugt werden als der Stream verarbeiten kann, was zu Problemen führen könnte.

Als Beispiel nehmen wir eine Chunk-Größe von 1 und eine High-Water-Marke von 3.
Das bedeutet, dass bis zu 3 Chunks in die Warteschlange gestellt werden können, bevor die High-Water-Marke erreicht wird und Rückstau angewendet wird.
