---
title: Streams API
slug: Web/API/Streams_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Streams")}}{{AvailableInWorkers}}

Die Streams-API ermöglicht es JavaScript, programmatisch auf Datenströme zuzugreifen, die über das Netzwerk empfangen werden, und sie nach den Wünschen des Entwicklers zu verarbeiten.

## Konzepte und Nutzung

Streaming beinhaltet das Aufteilen einer Ressource, die über ein Netzwerk empfangen werden soll, in kleine Stücke und das schrittweise Verarbeiten. Browser tun dies bereits beim Empfang von Medieninhalten – Videos werden gepuffert und abgespielt, während mehr Inhalt heruntergeladen wird, und manchmal werden Bilder schrittweise angezeigt, wenn mehr geladen wird.

Diese Fähigkeit war jedoch nie zuvor für JavaScript verfügbar. Bisher mussten wir, wenn wir eine Ressource irgendeiner Art (Video, Textdatei usw.) verarbeiten wollten, die gesamte Datei herunterladen, warten, bis sie in ein geeignetes Format deserialisiert wurde, und dann alle Daten verarbeiten.

Mit der Streams-API können Sie rohe Daten mit JavaScript Schritt für Schritt verarbeiten, sobald sie verfügbar sind, ohne dass ein Puffer, String oder Blob erstellt werden muss.

![Das grundlegende Konzept der Streams-API ist, dass Daten über mehrere Datenpakete aus dem Netzwerk geholt werden. Die Daten werden verarbeitet und dann als Datenpaketstrom an den Browser gesendet.](concept.png)

Weitere Vorteile sind, dass Sie erkennen können, wann Streams beginnen oder enden, Streams miteinander verketten, Fehler behandeln und Streams bei Bedarf abbrechen sowie auf die Geschwindigkeit reagieren können, mit der der Stream gelesen wird.

Die Nutzung von Streams beruht darauf, Antworten als Streams verfügbar zu machen. Zum Beispiel ist der Antwortkörper, der von einer erfolgreichen [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der von einem mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellten Leser gelesen werden kann.

Komplexere Anwendungen umfassen die Erstellung eines eigenen Streams mit dem [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor, um beispielsweise Daten innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) zu verarbeiten.

Sie können auch Daten in Streams mit [`WritableStream`](/de/docs/Web/API/WritableStream) schreiben.

> [!NOTE]
> Weitere Details zur Theorie und Praxis von Streams finden Sie in unseren Artikeln – [Streams-API-Konzepte](/de/docs/Web/API/Streams_API/Concepts), [Lesbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams), [Lesbare Byte-Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) und [Beschreibbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Stream-Schnittstellen

### Lesbare Streams

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
  - : Repräsentiert einen lesbaren Datenstrom. Er kann verwendet werden, um Antwortströme der [Fetch-API](/de/docs/Web/API/Fetch_API) oder vom Entwickler definierte Streams (z.B. ein benutzerdefinierter [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor zu behandeln).
- [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)
  - : Repräsentiert einen Standardleser, der verwendet werden kann, um aus dem Netzwerk bereitgestellte Streamdaten zu lesen (z.B. eine Fetch-Anfrage).
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
  - : Repräsentiert einen Controller, der die Steuerung des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) ermöglicht. Standardcontroller sind für Streams, die keine Byte-Streams sind.

### Beschreibbare Streams

- [`WritableStream`](/de/docs/Web/API/WritableStream)
  - : Bietet eine Standardabstraktion zum Schreiben von Streaming-Daten an ein Ziel, bekannt als "sink". Dieses Objekt bringt integrierten Gegendruck und Warteschlangen mit.
- [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)
  - : Repräsentiert einen Standardautor für beschreibbare Streams, der verwendet werden kann, um Datenblöcke in einen beschreibbaren Stream zu schreiben.
- [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController)
  - : Repräsentiert einen Controller, der die Steuerung des Zustands eines [`WritableStream`](/de/docs/Web/API/WritableStream) ermöglicht. Beim Erstellen eines `WritableStream` wird das zugrunde liegende "sink" mit einer entsprechenden `WritableStreamDefaultController`-Instanz zum Manipulieren ausgestattet.

### Transform-Streams

- [`TransformStream`](/de/docs/Web/API/TransformStream)
  - : Repräsentiert eine Abstraktion für ein Stream-Objekt, das Daten transformiert, während es durch eine [Pipeline-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) von Stream-Objekten fließt.
- [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)
  - : Bietet Methoden zur Manipulation des mit einem Transform-Stream verbundenen [`ReadableStream`](/de/docs/Web/API/ReadableStream) und [`WritableStream`](/de/docs/Web/API/WritableStream).

### Verwandte Stream-APIs und Operationen

- [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy)
  - : Bietet eine integrierte Byte-Längen-Warteschlangenstrategie, die beim Erstellen von Streams verwendet werden kann.
- [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy)
  - : Bietet eine integrierte Strategie zum Zählen von Datenblöcken, die beim Erstellen von Streams verwendet werden kann.

### Erweiterungen zu anderen APIs

- [`Request`](/de/docs/Web/API/Request)
  - : Wenn ein neues `Request`-Objekt erstellt wird, können Sie ihm einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) in der `body`-Eigenschaft seines `RequestInit`-Dictionaries übergeben. Diese `Request` könnte dann an einen [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden, um das Streamen zu beginnen.
- [`Response.body`](/de/docs/Web/API/Response/body)
  - : Der Antwortkörper, der von einer erfolgreichen [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, wird standardmäßig als [`ReadableStream`](/de/docs/Web/API/ReadableStream) bereitgestellt und kann mit einem Leser verbunden werden usw.

### Byte-Stream-verwandte Schnittstellen

- [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)
  - : Repräsentiert einen BYOB ("bring your own buffer")-Leser, der verwendet werden kann, um vom Entwickler bereitgestellte Streamdaten zu lesen (z.B. ein benutzerdefinierter [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor).
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
  - : Repräsentiert einen Controller, der die Steuerung des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) ermöglicht. Byte-Stream-Controller sind für Byte-Streams.
- [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)
  - : Repräsentiert eine Aufforderung zum Einziehen in einem [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController).

## Beispiele

Wir haben ein Verzeichnis mit Beispielen erstellt, das mit der Streams-API-Dokumentation einhergeht – siehe [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams). Die Beispiele sind wie folgt:

- [Einfacher Stream-Pump]((https://mdn.github.io/dom-examples/streams/simple-pump/): Dieses Beispiel zeigt, wie ein ReadableStream konsumiert und seine Daten an einen anderen weitergegeben werden.
- [Ein PNG in Graustufen konvertieren](https://mdn.github.io/dom-examples/streams/grayscale-png/): Dieses Beispiel zeigt, wie ein ReadableStream eines PNG in Graustufen umgewandelt werden kann.
- [Einfacher Zufalls-Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/): Dieses Beispiel zeigt, wie ein benutzerdefinierter Stream genutzt wird, um zufällige Zeichenketten zu erzeugen, sie als Blöcke in die Warteschlange zu stellen und dann wieder auszulesen.
- [Einfaches Tee-Beispiel](https://mdn.github.io/dom-examples/streams/simple-tee-example/): Dieses Beispiel erweitert das Simple random stream-Beispiel und zeigt, wie ein Stream geteilt werden kann und beide resultierenden Streams unabhängig voneinander gelesen werden können.
- [Einfacher Writer](https://mdn.github.io/dom-examples/streams/simple-writer/): Dieses Beispiel zeigt, wie man in einen beschreibbaren Stream schreibt, dann den Stream dekodiert und den Inhalt in die Benutzeroberfläche schreibt.
- [Blöcke eines PNG-Datei entpacken](https://mdn.github.io/dom-examples/streams/png-transform-stream/): Dieses Beispiel zeigt, wie [`pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) verwendet werden kann, um einen ReadableStream in einen Stream anderer Datentypen zu transformieren, indem Daten einer PNG-Datei in einen Stream von PNG-Blöcken umgewandelt werden.

Beispiele von anderen Entwicklern:

- [Prozessindikatoren mit Streams, Service-Workern und Fetch](https://fetch-progress.anthum.com/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams-API-Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Lesbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Lesbare Byte-Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [Beschreibbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_writable_streams)
