---
title: Streams-API
slug: Web/API/Streams_API
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}{{AvailableInWorkers}}

Die Streams-API ermöglicht es JavaScript, programmgesteuert auf Datenströme zuzugreifen, die über das Netzwerk empfangen werden, und sie nach den Wünschen des Entwicklers zu verarbeiten.

## Konzepte und Verwendung

Streaming bedeutet, eine Ressource, die Sie über ein Netzwerk empfangen möchten, in kleine Stücke zu zerlegen und sie dann Stück für Stück zu verarbeiten. Browser tun dies bereits beim Empfang von Mediendateien – Videos puffern und spielen, während mehr Inhalt heruntergeladen wird, und manchmal sieht man Bilder, die nach und nach angezeigt werden, während sie geladen werden.

Aber diese Fähigkeit war JavaScript bisher nicht zugänglich. Früher mussten wir, wenn wir eine Ressource irgendeiner Art (Video, Textdatei usw.) verarbeiten wollten, die gesamte Datei herunterladen, darauf warten, dass sie in ein geeignetes Format deserialisiert wird, und dann alle Daten verarbeiten.

Mit der Streams-API können Sie rohe Daten mit JavaScript Stück für Stück verarbeiten, sobald sie verfügbar sind, ohne einen Puffer, String oder Blob erzeugen zu müssen.

![Das Grundkonzept der Streams-API ist, dass Daten in mehreren Datenpaketen aus dem Netzwerk abgerufen werden. Die Daten werden verarbeitet und dann in einem Strom von Datenpaketen an den Browser gesendet.](concept.png)

Es gibt noch weitere Vorteile – Sie können erkennen, wann Streams beginnen oder enden, Streams miteinander verknüpfen, Fehler behandeln und Streams bei Bedarf abbrechen und auf die Geschwindigkeit reagieren, mit der der Stream gelesen wird.

Die Verwendung von Streams hängt davon ab, Antworten als Streams verfügbar zu machen. Zum Beispiel ist der Antwortkörper, der von einer erfolgreichen [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, ein {{domxref("ReadableStream")}}, der von einem mit {{domxref("ReadableStream.getReader()")}} erstellten Reader gelesen werden kann.

Kompliziertere Verwendungen beinhalten das Erstellen eines eigenen Streams mit dem {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} Konstruktor, zum Beispiel um Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) zu verarbeiten.

Sie können Daten auch mit {{domxref("WritableStream")}} in Streams schreiben.

> [!NOTE]
> Sie finden viele weitere Details über die Theorie und Praxis von Streams in unseren Artikeln – [Streams-API-Konzepte](/de/docs/Web/API/Streams_API/Concepts), [Verwendung lesbarer Streams](/de/docs/Web/API/Streams_API/Using_readable_streams), [Verwendung lesbarer Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) und [Verwendung schreibbarer Streams](/de/docs/Web/API/Streams_API/Using_writable_streams).

## Stream-Schnittstellen

### Lesbare Streams

- {{domxref("ReadableStream")}}
  - : Repräsentiert einen lesbaren Datenstrom. Er kann verwendet werden, um Antwortstreams der [Fetch-API](/de/docs/Web/API/Fetch_API) oder vom Entwickler definierte Streams (z. B. einen benutzerdefinierten {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} Konstruktor) zu verarbeiten.
- {{domxref("ReadableStreamDefaultReader")}}
  - : Repräsentiert einen Standardleser, der verwendet werden kann, um von einem Netzwerk bereitgestellte Stream-Daten (z. B. eine Fetch-Anfrage) zu lesen.
- {{domxref("ReadableStreamDefaultController")}}
  - : Repräsentiert einen Controller, der die Steuerung des Zustands und der internen Warteschlange eines {{domxref("ReadableStream")}} ermöglicht. Standard-Controller sind für Streams, die keine Byte-Streams sind.

### Schreibbare Streams

- {{domxref("WritableStream")}}
  - : Bietet eine Standardabstraktion zum Schreiben von Streaming-Daten an ein Ziel, bekannt als Senke. Dieses Objekt verfügt über eingebaute Gegenpressung und Warteschlangen.
- {{domxref("WritableStreamDefaultWriter")}}
  - : Repräsentiert einen Standard-Schreibestream-Schreiber, der verwendet werden kann, um Datenstücke in einen schreibbaren Stream zu schreiben.
- {{domxref("WritableStreamDefaultController")}}
  - : Repräsentiert einen Controller, der die Steuerung des Zustands eines {{domxref("WritableStream")}} ermöglicht. Beim Erstellen eines `WritableStream` wird der zugrunde liegenden Senke eine entsprechende Instanz von `WritableStreamDefaultController` gegeben, um sie zu manipulieren.

### Transformationsströme

- {{domxref("TransformStream")}}
  - : Repräsentiert eine Abstraktion für ein Stream-Objekt, das Daten transformiert, während es durch eine [Pipelinkette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) von Stream-Objekten läuft.
- {{domxref("TransformStreamDefaultController")}}
  - : Bietet Methoden zur Manipulation der mit einem Transformationsstream verbundenen {{domxref("ReadableStream")}} und {{domxref("WritableStream")}}.

### Verwandte Stream-APIs und -Operationen

- {{domxref("ByteLengthQueuingStrategy")}}
  - : Bietet eine eingebaute Byte-Längen-Warteschlangenstrategie, die beim Erstellen von Streams verwendet werden kann.
- {{domxref("CountQueuingStrategy")}}
  - : Bietet eine eingebaute Stückzähl-Warteschlangenstrategie, die beim Erstellen von Streams verwendet werden kann.

### Erweiterungen für andere APIs

- {{domxref("Request")}}
  - : Beim Erstellen eines neuen `Request`-Objekts können Sie ihm einen {{domxref("ReadableStream")}} im `body`-Eigenschaft seines `RequestInit`-Dictionary übergeben. Diese `Request` könnte dann an einen {{domxref("Window/fetch", "fetch()")}} übergeben werden, um das Abrufen des Streams zu starten.
- {{domxref("Response.body")}}
  - : Der Antwortkörper, der von einer erfolgreichen [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) zurückgegeben wird, wird standardmäßig als {{domxref("ReadableStream")}} bereitgestellt und kann einen Reader daran angehängt haben usw.

### Schnittstellen im Zusammenhang mit ByteStreams

- {{domxref("ReadableStreamBYOBReader")}}
  - : Repräsentiert einen BYOB ("bring your own buffer") Reader, der verwendet werden kann, um von einem Entwickler bereitgestellte Stream-Daten (z. B. ein benutzerdefinierter {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} Konstruktor) zu lesen.
- {{domxref("ReadableByteStreamController")}}
  - : Repräsentiert einen Controller, der die Steuerung des Zustands und der internen Warteschlange eines {{domxref("ReadableStream")}} ermöglicht. Byte-Stream-Controller sind für Byte-Streams.
- {{domxref("ReadableStreamBYOBRequest")}}
  - : Repräsentiert eine Pull-In-Anfrage in einem {{domxref("ReadableByteStreamController")}}.

## Beispiele

Wir haben ein Verzeichnis mit Beispielen erstellt, die zur Streams-API-Dokumentation passen – siehe [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams). Die Beispiele sind wie folgt:

- [Einfacher Stream-Pumpen](https://mdn.github.io/dom-examples/streams/simple-pump/): Dieses Beispiel zeigt, wie ein ReadableStream konsumiert und seine Daten an einen anderen übergeben werden.
- [Ein PNG in Graustufen umwandeln](https://mdn.github.io/dom-examples/streams/grayscale-png/): Dieses Beispiel zeigt, wie ein ReadableStream eines PNG in Graustufen umgewandelt werden kann.
- [Einfacher Zufallsstrom](https://mdn.github.io/dom-examples/streams/simple-random-stream/): Dieses Beispiel zeigt, wie man einen benutzerdefinierten Stream verwendet, um zufällige Zeichenfolgen zu generieren, sie als Datenstücke einzuordnen und sie dann wieder auszulesen.
- [Einfaches Tee-Beispiel](https://mdn.github.io/dom-examples/streams/simple-tee-example/): Dieses Beispiel erweitert das einfache Zufallstrom-Beispiel und zeigt, wie ein Stream geteilt werden kann und beide resultierenden Streams unabhängig gelesen werden können.
- [Einfacher Schreiber](https://mdn.github.io/dom-examples/streams/simple-writer/): Dieses Beispiel zeigt, wie man in einen schreibbaren Stream schreibt, dann den Stream dekodiert und den Inhalt in die Benutzeroberfläche schreibt.
- [Pakete eines PNGs entpacken](https://mdn.github.io/dom-examples/streams/png-transform-stream/): Dieses Beispiel zeigt, wie [`pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) verwendet werden kann, um einen ReadableStream in einen Strom anderer Datentypen zu transformieren, indem Daten einer PNG-Datei in einen Stream aus PNG-Paketen transformiert werden.

Beispiele von anderen Entwicklern:

- [Fortschrittsanzeigen mit Streams, Service Workers & Fetch](https://fetch-progress.anthum.com/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams-API-Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Verwendung lesbarer Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung lesbarer Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [Verwendung schreibbarer Streams](/de/docs/Web/API/Streams_API/Using_writable_streams)
