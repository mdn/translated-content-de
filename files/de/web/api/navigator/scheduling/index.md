---
title: "Navigator: scheduling-Eigenschaft"
short-title: scheduling
slug: Web/API/Navigator/scheduling
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

Die **`scheduling`** schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt für das aktuelle Dokument zurück, das Methoden und Eigenschaften zur Steuerung der Planung von Aufgaben bereitstellt.

> [!WARNING]
> Die [`Scheduling`](/de/docs/Web/API/Scheduling)-Schnittstelle (zu der die [`isInputPending()`](/de/docs/Web/API/Scheduling/isInputPending)-Methode gehört) wurde durch die [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle ersetzt, deren Funktionen besser für die Bearbeitung von Planungsaufgaben geeignet sind. Weitere Informationen finden Sie unter [Verwenden Sie `isInputPending()` nicht](https://web.dev/articles/optimize-long-tasks#isinputpending).

## Wert

Ein [`Scheduling`](/de/docs/Web/API/Scheduling)-Objekt.

## Beispiel

Ein vollständiges Beispiel finden Sie auf der Seite [`Scheduling.isInputPending()`](/de/docs/Web/API/Scheduling/isInputPending).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle
- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [Schnellere Eingabereignisse mit Facebooks erstem Beitrag zur Browser-API](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) auf engineering.fb.com (2019)
- [Besseres JS-Scheduling mit isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) auf developer.chrome.com (2020)
- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
