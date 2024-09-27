---
title: Zeitplanung
slug: Web/API/Scheduling
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

Das **`Scheduling`**-Objekt bietet Methoden und Eigenschaften zur Steuerung von Planungsaufgaben innerhalb des aktuellen Dokuments.

> [!WARNING]
> Das `Scheduling`-Interface wurde durch das [`Scheduler`](/de/docs/Web/API/Scheduler)-Interface ersetzt, dessen Funktionen besser für die Behandlung von Planungsaufgaben ausgelegt sind. Siehe [Verwenden Sie nicht `isInputPending()`](https://web.dev/articles/optimize-long-tasks#isinputpending) für weitere Details.

## Instanzmethoden

- [`isInputPending()`](/de/docs/Web/API/Scheduling/isInputPending) {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob es ausstehende Eingabeereignisse in der Ereigniswarteschlange gibt, was bedeutet, dass der Benutzer versucht, mit der Seite zu interagieren.

## Beispiel

Siehe die Seite [`Scheduling.isInputPending()`](/de/docs/Web/API/Scheduling/isInputPending) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Scheduler`](/de/docs/Web/API/Scheduler) Interface
- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_task_scheduling_api)
- [Schnellere Eingabeereignisse mit Facebooks erstem Beitrag zur Browser-API](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) auf engineering.fb.com (2019)
- [Bessere JS-Planung mit isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) auf developer.chrome.com (2020)
- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
