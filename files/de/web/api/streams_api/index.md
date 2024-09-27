---
title: Streams API
slug: Web/API/Streams_API
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}{{AvailableInWorkers}}

Die Streams API ermöglicht es JavaScript, programmgesteuert auf Datenströme zuzugreifen, die über das Netzwerk empfangen werden, und diese nach Belieben des Entwicklers zu verarbeiten.

## Konzepte und Verwendung

Streaming beinhaltet das Aufteilen einer Ressource, die über ein Netzwerk empfangen werden soll, in kleine Teile, die dann stückweise verarbeitet werden. Browser machen dies bereits beim Empfangen von Medieninhalten — Videos puffern und spielen ab, während mehr Inhalt heruntergeladen wird, und manchmal sehen Sie Bilder, die nach und nach angezeigt werden, während sie geladen werden.

Diese Fähigkeit war JavaScript jedoch bisher nie zugänglich. Bisher mussten wir, wenn wir eine Ressource irgendeiner Art (Video, Textdatei usw.) verarbeiten wollten, die gesamte Datei herunterladen, darauf warten, dass sie in ein geeignetes Format deserialisiert wird, und dann alle Daten verarbeiten.

Mit der Streams API können Sie mit der Verarbeitung von Rohdaten in JavaScript stückweise beginnen, sobald sie verfügbar sind, ohne einen Puffer, String oder Blob zu generieren.

![Das grundlegende Konzept der Stream-API besteht darin, dass Daten in mehreren Datenpaketen aus dem Netzwerk geholt werden. Die Daten werden verarbeitet und dann in einem Strom von Datenpaketen an den Browser gesendet.](concept.png)

Es gibt auch weitere Vorteile — Sie können erkennen, wann Streams beginnen oder enden, Streams miteinander verknüpfen, Fehler behandeln und Streams bei Bedarf abbrechen sowie auf die Geschwindigkeit reagieren, mit der der Stream gelesen wird.

Die Nutzung von Streams basiert darauf, Antworten als Streams verfügbar zu machen. Zum Beispiel ist der Antwortkörper, der durch eine erfolgreiche [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der von einem mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellten Leser gelesen werden kann.

Komplexere Anwendungen beinhalten das Erstellen eines eigenen Streams mit dem [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor, um beispielsweise Daten innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) zu verarbeiten.

Sie können auch Daten in Streams schreiben, indem Sie [`WritableStream`](/de/docs/Web/API/WritableStream) verwenden.

> [!NOTE]
> Sie finden viele weitere Details zur Theorie und Praxis von Streams in unseren Artikeln — [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts), [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), und [Verwendung von schreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Stream-Schnittstellen

### Lesbare Streams

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
  - : Stellt einen lesbaren Strom von Daten dar. Er kann verwendet werden, um Antwortströme der [Fetch API](/de/docs/Web/API/Fetch_API) oder entwicklerdefinierte Streams (z.B. einen benutzerdefinierten [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor) zu handhaben.
- [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)
  - : Stellt einen Standardleser dar, der verwendet werden kann, um von einem Netzwerk bereitgestellte Streamdaten (z.B. eine Fetch-Anfrage) zu lesen.
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
  - : Stellt einen Controller dar, der die Kontrolle über den Zustand eines [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Streams und dessen interne Warteschlange ermöglicht. Standard-Controller sind für Streams, die keine Bytestreams sind.

### Schreibbare Streams

- [`WritableStream`](/de/docs/Web/API/WritableStream)
  - : Bietet eine Standardabstraktion für das Schreiben von Streaming-Daten zu einem Ziel, bekannt als Senke. Dieses Objekt verfügt über eine integrierte Rückdruck- und Warteschlangenverwaltung.
- [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)
  - : Stellt einen Standard-Schreibstream-Schreiber dar, der verwendet werden kann, um Datenstücke in einen schreibbaren Stream zu schreiben.
- [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController)
  - : Stellt einen Controller dar, der die Kontrolle über den Zustand eines [`WritableStream`](/de/docs/Web/API/WritableStream)-Streams ermöglicht. Beim Erstellen eines `WritableStream` wird der zugrunde liegenden Senke eine entsprechende `WritableStreamDefaultController`-Instanz zugewiesen, um damit zu arbeiten.

### Transformationsströme

- [`TransformStream`](/de/docs/Web/API/TransformStream)
  - : Stellt eine Abstraktion für ein Stream-Objekt dar, das Daten transformiert, während sie durch eine [Rohrkette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) von Stream-Objekten fließen.
- [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)
  - : Bietet Methoden zur Manipulation der [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream), die einem Transformstream zugeordnet sind.

### Mit Streams verwandte APIs und Operationen

- [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy)
  - : Bietet eine eingebaute Bytelänge-Warteschlangenstrategie, die beim Erstellen von Streams verwendet werden kann.
- [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
  - : Bietet eine eingebaute Stückzahl-Warteschlangenstrategie, die beim Erstellen von Streams verwendet werden kann.

### Erweiterungen für andere APIs

- [`Request`](/de/docs/Web/API/Request)
  - : Beim Erstellen eines neuen `Request`-Objekts können Sie ihm einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) im `body`-Eigenschaft seines `RequestInit`-Dictionaries übergeben. Diese `Request` könnte dann an einen [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden, um mit dem Streamabruf zu beginnen.
- [`Response.body`](/de/docs/Web/API/Response/body)
  - : Der Antwortkörper, der durch eine erfolgreiche [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, wird standardmäßig als [`ReadableStream`](/de/docs/Web/API/ReadableStream) angezeigt, und es kann ein Leser daran angehängt werden, usw.

### Bytestream-bezogene Schnittstellen

- [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)
  - : Stellt einen BYOB ("bring your own buffer")-Leser dar, der verwendet werden kann, um von einem Entwickler bereitgestellte Streamdaten zu lesen (z.B. ein benutzerdefinierter [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor).
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
  - : Stellt einen Controller dar, der die Kontrolle über den Zustand eines [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Streams und dessen interne Warteschlange ermöglicht. Bytestream-Controller sind für Bytestreams.
- [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)
  - : Repräsentiert einen Anfrage-Pull in einem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController).

## Beispiele

Wir haben ein Verzeichnis mit Beispielen erstellt, das die Streams API-Dokumentation begleitet — siehe [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams). Die Beispiele sind wie folgt:

- [Einfacher Streampump](https://mdn.github.io/dom-examples/streams/simple-pump/): Dieses Beispiel zeigt, wie ein `ReadableStream` konsumiert und seine Daten an einen anderen weitergegeben werden können.
- [PNG in Graustufen umwandeln](https://mdn.github.io/dom-examples/streams/grayscale-png/): Dieses Beispiel zeigt, wie ein `ReadableStream` eines PNG in Graustufen umgewandelt werden kann.
- [Einfacher zufälliger Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/): Dieses Beispiel zeigt, wie ein benutzerdefinierter Stream verwendet wird, um zufällige Zeichenfolgen zu erzeugen, sie als Datenstücke in die Warteschlange zu stellen und dann wieder auszulesen.
- [Einfaches Tee-Beispiel](https://mdn.github.io/dom-examples/streams/simple-tee-example/): Dieses Beispiel erweitert das Beispiel für einfache zufällige Streams und zeigt, wie ein Stream geteilt werden kann, sodass beide resultierenden Streams unabhängig voneinander gelesen werden können.
- [Einfacher Schreiber](https://mdn.github.io/dom-examples/streams/simple-writer/): Dieses Beispiel zeigt, wie man in einen schreibbaren Stream schreibt, dann den Stream dekodiert und den Inhalt der Benutzeroberfläche schreibt.
- [Chunks eines PNG entpacken](https://mdn.github.io/dom-examples/streams/png-transform-stream/): Dieses Beispiel zeigt, wie [`pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) verwendet werden kann, um einen `ReadableStream` in einen Strom anderer Datentypen zu transformieren, indem die Daten einer PNG-Datei in einen Strom von PNG-Chunks umgewandelt werden.

Beispiele von anderen Entwicklern:

- [Fortschrittsanzeigen mit Streams, Service Workers und Fetch](https://fetch-progress.anthum.com/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [Verwendung von schreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams)
