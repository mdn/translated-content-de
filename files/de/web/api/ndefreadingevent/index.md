---
title: NDEFReadingEvent
slug: Web/API/NDEFReadingEvent
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web NFC API")}}{{securecontext_header}}{{SeeCompatTable}}

Das **`NDEFReadingEvent`**-Interface der [Web NFC API](/de/docs/Web/API/Web_NFC_API) repräsentiert Ereignisse, die bei neuen NFC-Lesungen durch [`NDEFReader`](/de/docs/Web/API/NDEFReader) ausgelöst werden.

{{InheritanceDiagram}}

## Konstruktor

- [`NDEFReadingEvent.NDEFReadingEvent()`](/de/docs/Web/API/NDEFReadingEvent/NDEFReadingEvent) {{Experimental_Inline}}
  - : Erstellt ein neues `NDEFReadingEvent`.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)_.

- [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt zurück, das die empfangene Nachricht enthält.
- [`NDEFReadingEvent.serialNumber`](/de/docs/Web/API/NDEFReadingEvent/serialNumber) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Seriennummer des Geräts zurück, die zur Kollisionserkennung und Identifikation verwendet wird, oder einen leeren String, wenn keine Seriennummer verfügbar ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
