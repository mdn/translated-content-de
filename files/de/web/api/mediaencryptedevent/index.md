---
title: MediaEncryptedEvent
slug: Web/API/MediaEncryptedEvent
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}

Die **`MediaEncryptedEvent`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) enthält die Informationen, die mit einem [`encrypted`](/de/docs/Web/API/HTMLMediaElement/encrypted_event)-Ereignis verbunden sind, das an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gesendet wird, wenn einige Initialisierungsdaten im Medium gefunden werden.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaEncryptedEvent()`](/de/docs/Web/API/MediaEncryptedEvent/MediaEncryptedEvent)
  - : Erstellt eine neue Instanz eines `MediaEncryptedEvent`-Objekts.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MediaEncryptedEvent.initDataType`](/de/docs/Web/API/MediaEncryptedEvent/initDataType) {{ReadOnlyInline}}
  - : Gibt einen groß-/kleinschreibungsempfindlichen String mit dem _Typ_ des gefundenen Initialisierungsdatenformats zurück.
- [`MediaEncryptedEvent.initData`](/de/docs/Web/API/MediaEncryptedEvent/initData) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die gefundenen Initialisierungsdaten enthält. Wenn keine Initialisierungsdaten mit dem Format verbunden sind, wird `null` zurückgegeben.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, erbt jedoch Methoden von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
