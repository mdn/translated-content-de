---
title: Streams API
slug: Web/API/Streams_API
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}{{AvailableInWorkers}}

Die Streams API ermöglicht es JavaScript, programmgesteuert auf Datenströme zuzugreifen, die über das Netzwerk empfangen werden, und sie so zu verarbeiten, wie es der Entwickler wünscht.

## Konzepte und Verwendung

Streaming beinhaltet das Zerlegen einer Ressource, die über ein Netzwerk empfangen werden soll, in kleine Teile und das anschließende Verarbeiten Stück für Stück. Browser tun dies bereits beim Empfangen von Medienressourcen — Videos puffern und spielen, während mehr Inhalte heruntergeladen werden, und manchmal sieht man Bilder, die allmählich angezeigt werden, während mehr geladen wird.

Diese Fähigkeit war jedoch bislang nie für JavaScript verfügbar. Bisher mussten wir, wenn wir eine Ressource irgendeiner Art (Video, Textdatei usw.) verarbeiten wollten, die gesamte Datei herunterladen, darauf warten, dass sie in ein geeignetes Format deserialisiert wurde, und dann die gesamten Daten verarbeiten.

Mit der Streams API können Sie mit JavaScript Rohdaten Stück für Stück verarbeiten, sobald sie verfügbar sind, ohne einen Puffer, eine Zeichenkette oder ein Blob erzeugen zu müssen.

![Das grundlegende Konzept der Streams API besteht darin, dass Daten in mehreren Datenpaketen aus dem Netzwerk abgerufen werden. Die Daten werden verarbeitet und dann in einem Stream von Datenpaketen an den Browser gesendet.](concept.png)

Es gibt noch weitere Vorteile — Sie können erkennen, wann Streams starten oder enden, Streams verketten, Fehler behandeln und Streams nach Bedarf abbrechen sowie auf die Geschwindigkeit reagieren, mit der der Stream gelesen wird.

Die Verwendung von Streams basiert darauf, Antworten als Streams verfügbar zu machen. Beispielsweise ist der Antwortkörper, der bei einer erfolgreichen [fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der von einem Leser gelesen werden kann, der mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellt wird.

Kompliziertere Anwendungen beinhalten die Erstellung eines eigenen Streams mit dem [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor, beispielsweise um Daten innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) zu verarbeiten.

Sie können Daten auch mit [`WritableStream`](/de/docs/Web/API/WritableStream) in Streams schreiben.

> [!NOTE]
> Sie finden viele weitere Details zur Theorie und Praxis von Streams in unseren Artikeln — [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts), [Verwenden von lesebaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Verwenden von lesebaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) und [Verwenden von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Stream-Interfaces

### Readable Streams

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
  - : Repräsentiert einen lesbaren Datenstrom. Er kann verwendet werden, um Antwortstreams der [Fetch API](/de/docs/Web/API/Fetch_API) oder vom Entwickler definierte Streams zu handhaben (z.B. ein benutzerdefinierter [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor).
- [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)
  - : Repräsentiert einen Standardleser, der verwendet werden kann, um aus einem über das Netzwerk bereitgestellten Datenstrom zu lesen (z.B. eine fetch-Anfrage).
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
  - : Repräsentiert einen Controller, der es ermöglicht, den Status und die interne Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu steuern. Standardcontroller sind für Streams, die keine Bytestreams sind.

### Writable Streams

- [`WritableStream`](/de/docs/Web/API/WritableStream)
  - : Bietet eine Standardabstraktion für das Beschreiben von Datenströmen zu einem Ziel, das als Senke bekannt ist. Dieses Objekt verfügt über integrierte Gegenstromkontrolle und Warteschlangen.
- [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)
  - : Repräsentiert einen Standard-Schreibstream-Schreiber, der verwendet werden kann, um Datenstücke in einen beschreibbaren Stream zu schreiben.
- [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController)
  - : Repräsentiert einen Controller, der es ermöglicht, den Status eines [`WritableStream`](/de/docs/Web/API/WritableStream) zu steuern. Beim Konstruieren eines `WritableStream` wird der zugrunde liegenden Senke eine entsprechende `WritableStreamDefaultController`-Instanz zur Manipulation gegeben.

### Transform Streams

- [`TransformStream`](/de/docs/Web/API/TransformStream)
  - : Repräsentiert eine Abstraktion für ein Stream-Objekt, das Daten transformiert, während es durch eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) von Stream-Objekten fließt.
- [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)
  - : Bietet Methoden zur Manipulation des [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream), die mit einem Transformstream verknüpft sind.

### Verwandte Stream-APIs und -Operationen

- [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy)
  - : Bietet eine eingebaute Bytelängenschlangen-Strategie, die beim Konstruieren von Streams verwendet werden kann.
- [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
  - : Bietet eine eingebaute Stückzählungs-Schlangenstrategie, die beim Konstruieren von Streams verwendet werden kann.

### Erweiterungen für andere APIs

- [`Request`](/de/docs/Web/API/Request)
  - : Wenn ein neues `Request`-Objekt konstruiert wird, kann man ihm über die `body`-Eigenschaft seines `RequestInit`-Dictionaries einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) übergeben. Diese `Request` kann dann an ein [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden, um das Abrufen des Streams zu beginnen.
- [`Response.body`](/de/docs/Web/API/Response/body)
  - : Der Antwortkörper, der bei einer erfolgreichen [fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, wird standardmäßig als [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereitgestellt und kann einen an ihn angehängten Leser haben, etc.

### Bytestream-bezogene Schnittstellen

- [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)
  - : Repräsentiert einen BYOB ("bring your own buffer")-Leser, der verwendet werden kann, um von einem vom Entwickler bereitgestellten Datenstrom zu lesen (z.B. ein benutzerdefinierter [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor).
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
  - : Repräsentiert einen Controller, der es ermöglicht, den Status und die interne Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu steuern. Bytestream-Controller sind für Bytestreams.
- [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)
  - : Repräsentiert eine Aufforderung zum Ziehen in einen [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController).

## Beispiele

Wir haben ein Verzeichnis mit Beispielen zusammengestellt, um die Streams API-Dokumentation zu begleiten — siehe [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams). Die Beispiele sind wie folgt:

- [Einfacher Stream-Pump](https://mdn.github.io/dom-examples/streams/simple-pump/): Dieses Beispiel zeigt, wie ein `ReadableStream` verbraucht und seine Daten an einen anderen übergeben werden können.
- [Ein PNG in Graustufen umwandeln](https://mdn.github.io/dom-examples/streams/grayscale-png/): Dieses Beispiel zeigt, wie ein `ReadableStream` eines PNG in Graustufen umgewandelt werden kann.
- [Einfacher Zufallsstrom](https://mdn.github.io/dom-examples/streams/simple-random-stream/): Dieses Beispiel zeigt, wie ein benutzerdefinierter Stream verwendet werden kann, um zufällige Zeichenfolgen zu generieren, sie als Datenstücke einzureihen und dann wieder auszulesen.
- [Einfaches Tee-Beispiel](https://mdn.github.io/dom-examples/streams/simple-tee-example/): Dieses Beispiel erweitert das einfache Zufallsstrombeispiel und zeigt, wie ein Stream geteilt werden kann, sodass beide resultierenden Streams unabhängig gelesen werden können.
- [Einfacher Schreiber](https://mdn.github.io/dom-examples/streams/simple-writer/): Dieses Beispiel zeigt, wie man in einen beschreibbaren Stream schreibt, dann den Stream dekodiert und die Inhalte an die Benutzeroberfläche schreibt.
- [Pakete eines PNG entpacken](https://mdn.github.io/dom-examples/streams/png-transform-stream/): Dieses Beispiel zeigt, wie [`pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) verwendet werden kann, um einen `ReadableStream` in einen Stream anderer Datentypen zu transformieren, indem Daten einer PNG-Datei in einen Stream von PNG-Paketen umgewandelt werden.

Beispiele von anderen Entwicklern:

- [Fortschrittsanzeigen mit Streams, Service Workers und Fetch](https://fetch-progress.anthum.com/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Verwenden von lesebaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwenden von lesebaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [Verwenden von beschreibbaren Streams](/de/docs/Web/API/Streams_API/Using_writable_streams)
