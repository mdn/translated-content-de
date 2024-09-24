---
title: Planung
slug: Web/API/Scheduling
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

Das **`Scheduling`**-Objekt bietet Methoden und Eigenschaften, um Aufgaben innerhalb des aktuellen Dokuments zu planen.

## Instanzmethoden

- {{domxref("Scheduling.isInputPending", "isInputPending()")}} {{Experimental_Inline}}
  - : Gibt einen Boolean-Wert zurück, der anzeigt, ob es ausstehende Eingabeereignisse in der Ereigniswarteschlange gibt, was bedeutet, dass der Benutzer versucht, mit der Seite zu interagieren.

## Beispiel

Siehe die {{domxref("Scheduling.isInputPending()")}} Seite für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Schnellere Eingabereignisse mit Facebooks erstem Browser-API-Beitrag](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) auf engineering.fb.com (2019)
- [Besseres JS-Scheduling mit isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) auf developer.chrome.com (2020)
- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks#yield_only_when_necessary) auf web.dev (2022)
