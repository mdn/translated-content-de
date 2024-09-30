---
title: NDEFReadingEvent
slug: Web/API/NDEFReadingEvent
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef}}

Das **`NDEFReadingEvent`**-Interface der [Web NFC API](/de/docs/Web/API/Web_NFC_API) repräsentiert Ereignisse, die bei neuen NFC-Lesungen ausgelöst werden, die durch [`NDEFReader`](/de/docs/Web/API/NDEFReader) erhalten werden.

{{InheritanceDiagram}}

## Konstruktor

- [`NDEFReadingEvent.NDEFReadingEvent()`](/de/docs/Web/API/NDEFReadingEvent/NDEFReadingEvent) {{Experimental_Inline}}
  - : Erstellt ein neues `NDEFReadingEvent`.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

- [`NDEFReadingEvent.message`](/de/docs/Web/API/NDEFReadingEvent/message) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt zurück, das die empfangene Nachricht enthält.
- [`NDEFReadingEvent.serialNumber`](/de/docs/Web/API/NDEFReadingEvent/serialNumber) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Seriennummer des Geräts zurück, die für Anti-Kollision und Identifikation verwendet wird, oder einen leeren String, wenn keine Seriennummer verfügbar ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
