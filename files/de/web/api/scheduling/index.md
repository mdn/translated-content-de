---
title: Scheduling
slug: Web/API/Scheduling
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

Das **`Scheduling`**-Objekt bietet Methoden und Eigenschaften zur Steuerung der Planung von Aufgaben innerhalb des aktuellen Dokuments.

> [!WARNING]
> Das `Scheduling`-Interface wurde durch das [`Scheduler`](/de/docs/Web/API/Scheduler)-Interface ersetzt, dessen Funktionen besser dafür ausgelegt sind, Planungsaufgaben anzugehen. Weitere Details finden Sie unter [Verwenden Sie `isInputPending()` nicht](https://web.dev/articles/optimize-long-tasks#isinputpending).

## Instanzmethoden

- [`isInputPending()`](/de/docs/Web/API/Scheduling/isInputPending) {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob es ausstehende Eingabeereignisse in der Ereigniswarteschlange gibt, was bedeutet, dass der Benutzer versucht, mit der Seite zu interagieren.

## Beispiel

Ein vollständiges Beispiel finden Sie auf der Seite [`Scheduling.isInputPending()`](/de/docs/Web/API/Scheduling/isInputPending).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle
- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [Schnellere Eingabeereignisse mit Facebooks erstem API-Beitrag für Browser](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) auf engineering.fb.com (2019)
- [Besseres JS Scheduling mit isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) auf developer.chrome.com (2020)
- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
