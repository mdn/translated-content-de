---
title: "Navigator: scheduling-Eigenschaft"
short-title: scheduling
slug: Web/API/Navigator/scheduling
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

Die schreibgeschützte Eigenschaft **`scheduling`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt für das aktuelle Dokument zurück, das Methoden und Eigenschaften zur Steuerung von Planungsaufgaben bereitstellt.

> [!WARNING]
> Die [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle (die die Methode [`isInputPending()`](/de/docs/Web/API/Scheduling/isInputPending) einschließt) wurde durch die [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle ersetzt, deren Funktionen besser dafür geeignet sind, Planungsaufgaben zu adressieren. Weitere Einzelheiten finden Sie unter [Verwenden Sie nicht `isInputPending()`](https://web.dev/articles/optimize-long-tasks#isinputpending).

## Wert

Ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt.

## Beispiel

Siehe die Seite [`Scheduling.isInputPending()`](/de/docs/Web/API/Scheduling/isInputPending) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle
- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_task_scheduling_api)
- [Schnellere Eingabeereignisse mit Facebooks erstem Browser-API-Beitrag](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) auf engineering.fb.com (2019)
- [Bessere JS-Planung mit isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) auf developer.chrome.com (2020)
- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
