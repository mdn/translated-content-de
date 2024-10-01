---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef}}

Das **`BeforeUnloadEvent`** Interface repräsentiert das Ereignisobjekt für das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis, das ausgelöst wird, wenn das aktuelle Fenster, das darin enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen.

Siehe die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignisreferenz für detaillierte Anleitungen zur Verwendung dieses Ereignisses.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) {{Deprecated_Inline}}
  - : Wenn es auf einen {{Glossary("Truthy", "truthy")}} Wert gesetzt ist, wird ein vom Browser gesteuertes Bestätigungsdialogfeld ausgelöst, das Benutzer auffordert, zu bestätigen, ob sie die Seite verlassen möchten, wenn sie versuchen, sie zu schließen oder neu zu laden. Dies ist eine veraltete Funktion, und es wird empfohlen, den Dialog auszulösen, indem `event.preventDefault()` aufgerufen wird, während `returnValue` ebenfalls gesetzt wird, um ältere Fälle zu unterstützen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
