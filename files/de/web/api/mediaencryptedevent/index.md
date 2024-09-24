---
title: MediaEncryptedEvent
slug: Web/API/MediaEncryptedEvent
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}

Die **`MediaEncryptedEvent`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) enthält die Informationen, die mit einem {{domxref("HTMLMediaElement/encrypted_event", "encrypted")}}-Ereignis verbunden sind, das an ein {{domxref("HTMLMediaElement")}} gesendet wird, wenn einige Initialisierungsdaten im Medium gefunden werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MediaEncryptedEvent.MediaEncryptedEvent", "MediaEncryptedEvent()")}}
  - : Erstellt eine neue Instanz eines `MediaEncryptedEvent`-Objekts.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, {{domxref("Event")}}._

- {{domxref("MediaEncryptedEvent.initDataType")}} {{ReadOnlyInline}}
  - : Gibt eine die Groß- und Kleinschreibung berücksichtigende Zeichenkette mit dem _Typ_ des gefundene Formats der Initialisierungsdaten zurück.
- {{domxref("MediaEncryptedEvent.initData")}} {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die gefundenen Initialisierungsdaten enthält. Wenn keine Initialisierungsdaten mit dem Format verbunden sind, wird `null` zurückgegeben.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, erbt jedoch Methoden von ihrem übergeordneten Element, {{domxref("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
