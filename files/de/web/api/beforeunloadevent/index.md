---
title: BeforeUnloadEvent
slug: Web/API/BeforeUnloadEvent
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef}}

Die **`BeforeUnloadEvent`**-Schnittstelle repräsentiert das Ereignisobjekt für das [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignis, das ausgelöst wird, wenn das aktuelle Fenster, das darin enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen.

Sehen Sie die [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisreferenz für detaillierte Anleitungen zur Verwendung dieses Ereignisses.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) {{Deprecated_Inline}}
  - : Wenn auf einen [truthy](/de/docs/Glossary/Truthy)-Wert festgelegt wird, löst es ein von Browsern gesteuertes Bestätigungsdialogfeld aus, das Benutzer fragt, ob sie die Seite verlassen möchten, wenn sie versuchen, sie zu schließen oder neu zu laden. Dies ist eine veraltete Funktion, und es ist Best Practice, den Dialog auszulösen, indem `event.preventDefault()` aufgerufen wird, während auch `returnValue` gesetzt wird, um ältere Fälle zu unterstützen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
