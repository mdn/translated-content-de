---
title: "ReadableStreamDefaultController: Eigenschaft desiredSize"
short-title: desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`desiredSize`** des {{domxref("ReadableStreamDefaultController")}}-Interfaces gibt die gewünschte Größe zurück, die benötigt wird, um die interne Warteschlange des Streams zu füllen.

## Wert

Ein ganzzahliger Wert. Beachten Sie, dass dieser negativ sein kann, wenn die Warteschlange überfüllt ist.

## Beispiele

Das [lesbare Stream-Beispiel mit einer zugrunde liegenden Push-Quelle und Unterstützung für Gegendruck](https://streams.spec.whatwg.org/#example-rs-push-backpressure) im Standard liefert ein gutes Beispiel für die Verwendung von `desiredSize`, um manuell zu erkennen, wann der Stream voll ist und Gegendruck anzuwenden. Ebenso zeigt es die Verwendung von {{domxref("ReadablestreamDefaultController.error()")}}, um manuell einen Stream-Fehler auszulösen, wenn ein anderer Teil des Systems, auf den er angewiesen ist, ausfällt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStreamDefaultController")}}
