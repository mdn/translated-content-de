---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Die **`BeforeUnloadEvent`** Schnittstelle repräsentiert das Ereignisobjekt für das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis, das ausgelöst wird, wenn das aktuelle Fenster, das enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen.

Siehe die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignisreferenz für detaillierte Anleitungen zur Verwendung dieses Ereignisses.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Übernimmt Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) {{Deprecated_Inline}}
  - : Wenn auf einen {{Glossary("Truthy", "truthy")}} Wert gesetzt, wird ein vom Browser gesteuertes Bestätigungsdialogfeld ausgelöst, das Benutzer fragt, ob sie die Seite verlassen möchten, wenn sie versuchen, sie zu schließen oder neu zu laden. Dies ist eine veraltete Funktion, und die beste Vorgehensweise ist es, den Dialog durch den Aufruf von `event.preventDefault()` auszulösen, während `returnValue` gesetzt wird, um ältere Fälle zu unterstützen.

## Instanzmethoden

_Übernimmt Methoden von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
