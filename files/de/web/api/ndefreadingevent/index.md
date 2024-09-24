---
title: NDEFReadingEvent
slug: Web/API/NDEFReadingEvent
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef}}

Die **`NDEFReadingEvent`**-Schnittstelle des [Web NFC API](/de/docs/Web/API/Web_NFC_API) repräsentiert Ereignisse, die bei neuen NFC-Lesungen ausgelöst werden und von {{DOMxRef("NDEFReader")}} abgerufen werden.

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("NDEFReadingEvent.NDEFReadingEvent", "NDEFReadingEvent.NDEFReadingEvent()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `NDEFReadingEvent`.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("Event")}}_.

- {{DOMxRef("NDEFReadingEvent.message")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{DOMxRef("NDEFMessage")}}-Objekt zurück, das die empfangene Nachricht enthält.
- {{DOMxRef("NDEFReadingEvent.serialNumber")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Seriennummer des Geräts zurück, die für Anti-Kollision und Identifikation verwendet wird, oder einen leeren String, wenn keine Seriennummer verfügbar ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("Event")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
