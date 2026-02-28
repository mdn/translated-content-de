---
title: Streams API
slug: Web/API/Streams_API
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

{{DefaultAPISidebar("Streams")}}{{AvailableInWorkers}}

Die Streams-API ermöglicht es JavaScript, programmatisch auf Datenströme zuzugreifen, die über das Netzwerk empfangen werden, und diese nach den Wünschen des Entwicklers zu verarbeiten.

## Konzepte und Verwendung

Streaming beinhaltet das Aufteilen einer Ressource, die über ein Netzwerk empfangen werden soll, in kleine Teile und deren schrittweise Verarbeitung. Browser tun dies bereits beim Empfang von Medieninhalten – Videos puffern und spielen ab, während mehr Inhalte heruntergeladen werden, und manchmal sieht man, wie Bilder nach und nach angezeigt werden, während mehr geladen wird.

Diese Fähigkeit war JavaScript bisher jedoch nicht zugänglich. Bisher mussten wir, wenn wir eine Ressource jeglicher Art (Video, Textdatei etc.) verarbeiten wollten, die gesamte Datei herunterladen, warten, bis sie in ein geeignetes Format deserialisiert wurde, und dann alle Daten verarbeiten.

Mit der Streams-API können Sie mit JavaScript sofort mit der Verarbeitung von Rohdaten beginnen, sobald diese verfügbar sind, ohne einen Puffer, String oder Blob erzeugen zu müssen.

![Das grundlegende Konzept der Stream-API besteht darin, dass Daten in mehreren Datenpaketen aus dem Netzwerk abgerufen werden. Die Daten werden verarbeitet und dann in einem Datenpaketstrom an den Browser gesendet.](concept.png)

Es gibt noch mehr Vorteile: Sie können erkennen, wann Streams beginnen oder enden, Streams miteinander verketten, Fehler behandeln und Streams bei Bedarf abbrechen und auf die Geschwindigkeit reagieren, mit der der Stream gelesen wird.

Die Verwendung von Streams beruht darauf, Antworten als Streams verfügbar zu machen. Zum Beispiel ist der Antwortkörper, der von einer erfolgreichen [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der von einem mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellten Leser gelesen werden kann.

Komplexere Anwendungen betreffen das Erstellen eines eigenen Streams mit dem [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor, zum Beispiel zur Datenverarbeitung innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API).

Sie können auch Daten in Streams mit [`WritableStream`](/de/docs/Web/API/WritableStream) schreiben.

> [!NOTE]
> Weitere Details über Theorie und Praxis von Streams finden Sie in unseren Artikeln — [Streams-API Konzepte](/de/docs/Web/API/Streams_API/Concepts), [Verwendung lesbarer Streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Verwendung lesbarer Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) und [Verwendung schreibbarer Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Stream-Schnittstellen

### Lesbare Streams

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
  - : Stellt einen lesbaren Datenstrom dar. Er kann verwendet werden, um Antwortströme der [Fetch-API](/de/docs/Web/API/Fetch_API) oder vom Entwickler definierte Streams zu verarbeiten (z.B. ein benutzerdefinierter [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor).
- [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)
  - : Stellt einen Standardleser dar, der verwendet werden kann, um Daten aus einem Netzwerkstrom (z.B. einer Fetch-Anfrage) zu lesen.
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
  - : Stellt einen Controller dar, der Kontrolle über den Zustand und die interne Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) ermöglicht. Standard-Controller sind für Streams, die keine Bytestreams sind.

### Schreibbare Streams

- [`WritableStream`](/de/docs/Web/API/WritableStream)
  - : Bietet eine standardmäßige Abstraktion zum Schreiben von Streaming-Daten in ein Ziel, bekannt als „Sink“. Dieses Objekt verfügt über integrierten Gegendruck und Warteschlangen.
- [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)
  - : Stellt einen Standard-Schreibstream-Schreiber dar, der verwendet werden kann, um Datenstücke in einen schreibbaren Stream zu schreiben.
- [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController)
  - : Stellt einen Controller dar, der Kontrolle über den Zustand eines [`WritableStream`](/de/docs/Web/API/WritableStream) ermöglicht. Beim Konstruktor eines `WritableStream` wird dem zugrunde liegenden Sink eine entsprechende `WritableStreamDefaultController`-Instanz zugewiesen, um diese zu manipulieren.

### Transform-Streams

- [`TransformStream`](/de/docs/Web/API/TransformStream)
  - : Stellt eine Abstraktion für ein Stream-Objekt dar, das Daten transformiert, während es durch eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) von Stream-Objekten geht.
- [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)
  - : Bietet Methoden zur Manipulation der mit einem Transform-Stream assoziierten [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream).

### Verwandte Stream-APIs und -Operationen

- [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy)
  - : Bietet eine eingebaute Byte-Länge-Wartestrategie, die beim Erstellen von Streams verwendet werden kann.
- [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
  - : Bietet eine eingebaute Stückzählungs-Wartestrategie, die beim Erstellen von Streams verwendet werden kann.

### Erweiterungen zu anderen APIs

- [`Request`](/de/docs/Web/API/Request)
  - : Wenn ein neues `Request`-Objekt erstellt wird, können Sie ihm einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) in der `body`-Eigenschaft seines `RequestInit`-Wörterbuchs zuweisen. Dieser `Request` könnte dann an ein [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden, um das Streamen zu beginnen.
- [`Response.body`](/de/docs/Web/API/Response/body)
  - : Der von einer erfolgreichen [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegebene Antwortkörper wird standardmäßig als [`ReadableStream`](/de/docs/Web/API/ReadableStream) angezeigt und kann mit einem Leser verbunden werden usw.

### Bytestream-bezogene Schnittstellen

- [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)
  - : Stellt einen BYOB („Bring your own buffer“) Leser dar, der verwendet werden kann, um vom Entwickler bereitgestellte Stream-Daten zu lesen (z.B. ein benutzerdefinierter [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor).
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
  - : Stellt einen Controller dar, der Kontrolle über den Zustand und die interne Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) ermöglicht. Bytestream-Controller sind für Bytestreams.
- [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)
  - : Stellt eine Anforderung zum Hineinziehen in einen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) dar.

## Beispiele

Wir haben ein Verzeichnis mit Beispielen erstellt, die zur Streams-API-Dokumentation passen – siehe [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams). Die Beispiele sind wie folgt:

- [Einfacher Stream-Pumpe](https://mdn.github.io/dom-examples/streams/simple-pump/): Dieses Beispiel zeigt, wie man einen ReadableStream konsumiert und seine Daten an einen anderen übergibt.
- [Ein PNG in Graustufen umwandeln](https://mdn.github.io/dom-examples/streams/grayscale-png/): Dieses Beispiel zeigt, wie ein ReadableStream eines PNGs in Graustufen umgewandelt werden kann.
- [Einfacher Zufalls-Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/): Dieses Beispiel zeigt, wie man einen benutzerdefinierten Stream verwendet, um zufällige Zeichenfolgen zu erzeugen, sie als Stücke einzureihen und sie dann wieder auszulesen.
- [Einfaches Tee-Beispiel](https://mdn.github.io/dom-examples/streams/simple-tee-example/): Dieses Beispiel erweitert das Beispiel „Einfacher Zufalls-Stream“ und zeigt, wie ein Stream angezapft werden kann und beide resultierenden Streams unabhängig gelesen werden können.
- [Einfacher Schreiber](https://mdn.github.io/dom-examples/streams/simple-writer/): Dieses Beispiel zeigt, wie man in einen schreibbaren Stream schreibt, dann den Stream dekodiert und die Inhalte in die Benutzeroberfläche schreibt.
- [Stücke eines PNGs entpacken](https://mdn.github.io/dom-examples/streams/png-transform-stream/): Dieses Beispiel zeigt, wie [`pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) verwendet werden kann, um einen ReadableStream in einen Stream anderer Datentypen umzuwandeln, indem die Daten einer PNG-Datei in einen Stream von PNG-Stücken umgewandelt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams-API Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Verwendung lesbarer Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung lesbarer Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [Verwendung schreibbarer Streams](/de/docs/Web/API/Streams_API/Using_writable_streams)
