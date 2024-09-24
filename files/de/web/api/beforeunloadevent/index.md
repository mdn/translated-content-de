---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef}}

Die **`BeforeUnloadEvent`**-Schnittstelle repräsentiert das Ereignisobjekt für das {{domxref("Window/beforeunload_event", "beforeunload")}}-Ereignis, welches ausgelöst wird, wenn das aktuelle Fenster, das darin enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen.

Siehe die {{domxref("Window/beforeunload_event", "beforeunload")}}-Ereignisreferenz für detaillierte Anleitungen zur Verwendung dieses Ereignisses.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("Event")}}._

- {{domxref("BeforeUnloadEvent.returnValue", "returnValue")}} {{Deprecated_Inline}}
  - : Wenn auf einen [truthy](/de/docs/Glossary/Truthy)-Wert gesetzt, wird ein vom Browser gesteuertes Bestätigungsdialogfeld ausgelöst, das Benutzer fragt, ob sie die Seite wirklich verlassen möchten, wenn sie versuchen, sie zu schließen oder neu zu laden. Dies ist eine veraltete Funktion, und es ist best practice, den Dialog durch Aufrufen von `event.preventDefault()` zu aktivieren, während `returnValue` ebenfalls gesetzt wird, um Altfälle zu unterstützen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window/beforeunload_event", "beforeunload")}}-Ereignis
